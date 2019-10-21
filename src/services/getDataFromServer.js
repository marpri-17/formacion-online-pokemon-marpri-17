
const pokeUrlLimit25 = "https://pokeapi.co/api/v2/pokemon?limit=25&offset=0"

const formatData = data => {
    const PokemonsInfo = data.results.map(poke => {
        return {
            name: poke.name,
            url: poke.url
        }
    })
    return PokemonsInfo
}



function getDataFromServer() {
    return fetch(pokeUrlLimit25)
        .then(resp => resp.json())
        .then(data => formatData(data))
        .then(pokemons => pokemons.map(pokemon => {
            return fetch(pokemon.url)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    let types = data.types.map(type => type.type.name)
                    let newPoke = { name: data.name, frontImage: data.sprites.front_default, frontImageShiny: data.sprites.front_shiny, id: data.id, types: types }
                    return newPoke
                })
        }))

        // .then(pokemonsInfo => getPokemonInfo)
        // .then(constructorArrPokemon => {
        //     console.log(constructorArrPokemon)
        //     return constructorArrPokemon
        // })
        .catch(err => console.log("Fetch error: " + err))
}

export default getDataFromServer;