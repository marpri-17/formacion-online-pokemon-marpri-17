import React from 'react';


const showSuggestions = ({ namesSuggestions, userQuery, handleSuggestedName }) => {
    if (userQuery !== "") {
        return (
            <ul className="filter__suggestions_list">
                {namesSuggestions
                    .filter(suggestion => suggestion.includes(userQuery.toLowerCase()))
                    .map(suggestion => {
                        return <li className="filter__suggestions_list_item" key={suggestion} onClick={handleSuggestedName} data-id={suggestion}>{suggestion}</li>
                    })}
            </ul>
        )
    }
}

export { showSuggestions as SuggestionsList }