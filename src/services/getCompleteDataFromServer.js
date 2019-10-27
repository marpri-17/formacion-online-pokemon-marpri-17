import getEvolutionFromServer from './getEvolutionFromServer';


async function formatDetails(pokemon) {
    let types = pokemon.types.map(type => type.type.name)
    let evolution = getEvolutionFromServer(pokemon)
    let result = await evolution
    return {
        id: pokemon.id,
        name: pokemon.name,
        frontImage: pokemon.sprites.front_default,
        backImage: pokemon.sprites.back_default,
        shinyImage: pokemon.sprites.front_shiny,
        types: types,
        evolutions: result
    }

}

const getCompleteDataFromServer = (pokeName) => {
    const PokemonByID = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    return fetch(PokemonByID)
        .then(resp => resp.json())
        .then(pokemon => formatDetails(pokemon))


}

export default getCompleteDataFromServer;