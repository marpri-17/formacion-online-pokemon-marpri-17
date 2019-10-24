
const allPokesResume = "https://pokeapi.co/api/v2/pokemon?limit=964";

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
    return fetch(allPokesResume)
        .then(resp => resp.json())
        .then(data => formatData(data))
        .catch(err => console.log("Fetch error: " + err))
}

export default getDataFromServer;