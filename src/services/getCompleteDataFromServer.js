function formatDetails(pokemon) {
    const pokeURL = [];
    for (let variety of pokemon.varieties) {
        if (variety.is_default === true) pokeURL.push(variety.pokemon.url)
    }
    return {
        id: pokemon.id,
        name: pokemon.name,
        evolution_chain: pokemon.evolution_chain.url,
        pokemonURL: pokeURL

    }
}

function extendPokemonInfo(pokemons) {
    return Promise.all(pokemons.map(async function getdetails(pokemon) {
        const details = fetch(pokemon.pokemonURL)
            .then(resp => resp.json())
            .then(data => {
                let types = data.types.map(type => type.type.name)
                return {
                    frontImage: data.sprites.front_default,
                    types: types
                }
            });
        let result = await details
        return Object.assign(pokemon, result)
    }))
}

async function getEvolutionFromServer(pokemons) {
    // Reduce para reducir el número de promesas
    return Promise.all(pokemons.map(async function getEvolve(pokemon) {
        return fetch(pokemon.evolution_chain)
            .then(resp => resp.json())
            .then(evolutionResp => {
                let evolutions = {};
                if (evolutionResp.chain.evolves_to.length) {
                    Object.assign(evolutions, { firstEvolve: evolutionResp.chain.species.name })
                    Object.assign(evolutions, { secondEvolve: evolutionResp.chain.evolves_to[0].species.name })
                    if (evolutionResp.chain.evolves_to[0].evolves_to.length) {
                        Object.assign(evolutions, { thirdEvolve: evolutionResp.chain.evolves_to[0].evolves_to[0].species.name })
                    }
                } else {
                    Object.assign(evolutions, { firstEvolve: "No evoluciona" })
                }
                return Object.assign(pokemon, evolutions)
            })
    }))
}

async function getCompleteDataFromServer(allPokemons) {
    const formatedPokes = Promise.all(allPokemons.map(pokemon => {
        return fetch(pokemon.url)
            .then(resp => resp.json())
            .then(data => formatDetails(data))

    }))
    const newPokes = await formatedPokes;
    const detailPokes = await extendPokemonInfo(newPokes);
    const getEvolution = await getEvolutionFromServer(detailPokes)
    return getEvolution


}



export default getCompleteDataFromServer;