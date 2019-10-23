const getNamesSuggestions = () => {
    const allPokemonsNamesURL = "https://pokeapi.co/api/v2/pokemon?limit=964";
    return fetch(allPokemonsNamesURL)
        .then(resp => resp.json())
        .then(data => {
            const namesSuggestions = data.results.map(result => result.name);
            return namesSuggestions;
        })
}

export default getNamesSuggestions;