import React from 'react';
import getDetailsFromServer from '../services/getDetailsFromServer'
import ListItem from './ListItem';
import '../stylesheets/pokeitem.scss';
import getDataFromServer from '../services/getDataFromServer';



const PokeList = ({ pokemons }) => {
    debugger;
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

{/*  */ }