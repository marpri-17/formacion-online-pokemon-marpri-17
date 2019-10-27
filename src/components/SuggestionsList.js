import React from 'react';
import { Link } from 'react-router-dom';



const showSuggestions = ({ namesSuggestions, userQuery, handleSuggestedName }) => {
    const pokeNames = namesSuggestions.map(suggestion => suggestion[1])
    //console.log(pokeNames)
    if (userQuery !== "") {
        return (
            <ul className="filter__suggestions_list">
                {pokeNames
                    .filter(name => name.includes(userQuery.toLowerCase()))
                    .map(suggestion => {
                        console.log(suggestion)
                        return (<Link to={`/info/${suggestion}`}>
                            <li className="filter__suggestions_list_item" key={suggestion[1]} onClick={handleSuggestedName} data-id={suggestion}>{suggestion}</li>
                        </Link>)
                    })}
            </ul>
        )
    }
}

export { showSuggestions as SuggestionsList }