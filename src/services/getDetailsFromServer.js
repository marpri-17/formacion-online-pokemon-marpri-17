function formatPokemonData(data) {
    return data.map(pokemon => {
        let newTypes = pokemon.types.map(type => type.type.name)
        return {
            id: pokemon.id,
            name: pokemon.name,
            frontImage: pokemon.sprites.front_default || `https://via.placeholder.com/100.jpg?${pokemon.name}`,
            shinyImage: pokemon.sprites.front_shiny || `https://via.placeholder.com/100.jpg?${pokemon.name}`,
            types: newTypes,
        }
    })
}

function getDetailsFromServer(resumePokes) {
    const pokesInfo = Promise.all(resumePokes.map(poke => fetch(poke.url).then(resp => resp.json())));
    return pokesInfo
        .then(data => formatPokemonData(data))
}

export default getDetailsFromServer;