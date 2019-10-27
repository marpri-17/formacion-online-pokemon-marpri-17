async function getEvolutionFromServer(pokemon) {
    return (fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokemon.id}`)
        .then(resp => resp.json())
        .then(data => (data.chain.evolves_to[0].evolves_to))
        .then(evolutionChain =>
            (evolutionChain.length !== 0) ?
                evolutionChain.map(evolution => evolution.species.name) :
                ["No evoluciona"]))
        .catch(err => ["No evoluciona"])
    //.then(respo => Promise.all(respo))
}
export default getEvolutionFromServer;