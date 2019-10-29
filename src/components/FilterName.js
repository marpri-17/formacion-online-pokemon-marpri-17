import React from 'react';
import '../stylesheets/filtername.scss';
import { SuggestionsList } from './SuggestionsList';

const FilterName = ({ handleSearch, allPokemonsNames, handleAutoSearch, userQuery, handleSuggestedName }) => {

    return (
        <form className="poke__form" onSubmit={handleSearch}>
            <div className="filter__suggestions_inputName_wrapper">
                <input type="text" className="filter__suggestions_inputName" onChange={handleAutoSearch} placeholder="Pikachu" />
                {(userQuery === "") ? <label className="filter__suggestions_inputName_label">Ej: Pikachu</label> : ""}
                {(userQuery !== "") ? < SuggestionsList namesSuggestions={allPokemonsNames} userQuery={userQuery} handleSuggestedName={handleSuggestedName} /> : ""}
            </div>
        </form>
    )

}


export default FilterName;

// Incluir defaultValue={defaultValue} en el input
// Cuando tengamos default value, vincular la renderización de la etiqueta 