import React from 'react';
import ListItem from './ListItem'

const PokeList = ({ pokemons }) => {
    return (
        <ul className="poke__list">
            {pokemons.map(pokemon => {
                return (
                    <ListItem pokemon={pokemon} key={pokemon.id}></ListItem>
                )
            })}
        </ul>
    )

}

export default PokeList;