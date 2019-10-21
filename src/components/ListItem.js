import React from 'react';

const ListItem = ({ pokemon }) => {
    debugger;
    return (
        <li className="poke__list_item">
            <img src={pokemon.frontImage} alt={pokemon.name} className="poke__list_defaultimg" />
            <h5 className="poke__list_name">{pokemon.name}</h5>

        </li>
    )
}

export default ListItem;