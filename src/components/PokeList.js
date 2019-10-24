import React from 'react';
import getDetailsFromServer from '../services/getDetailsFromServer'
import ListItem from './ListItem';
import '../stylesheets/pokeitem.scss';
import { Link } from 'react-router-dom';
import getDataFromServer from '../services/getDataFromServer';



const PokeList = ({ pokemons }) => {
    debugger;
    return (
        <ul className="poke__list">
            {pokemons.map(pokemon => {
                return (
                    <Link to={`info/${pokemon.id}`} key={"info" + pokemon.id}>
                        <ListItem pokemon={pokemon} key={pokemon.id}></ListItem>
                    </Link>
                )
            })}
        </ul>
    )

}



export default PokeList;

{/*  */ }