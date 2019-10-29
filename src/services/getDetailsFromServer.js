function formatData(data) {

    return {
        id: data.id,
        name: data.name,
        evolution: data.evolution_chain.url,
        url: data.varieties.map(variety => {
            if (variety.is_default) return variety.pokemon.url
        }).join()
    }
}

async function getDetailsFromServer(pokemon) {
    debugger;
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
    return fetch(url)
        .then(resp => resp.json())
        .then(data => formatData(data))
    // .then(dat => console.log(dat))
}

export default getDetailsFromServer;