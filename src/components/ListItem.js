import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/pokeitem.scss';

const ListItem = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <Link to={`/info/${pokemon.name}`} key={"info" + pokemon.id}>
            <li className="poke__list_item">
                <small className="poke__list_number">{pokemon.id}</small>
                <img src={pokemon.frontImage} alt={pokemon.name} className="poke__list_defaultimg" />
                <h5 className="poke__list_name">{pokemon.name}</h5>
                <div className="poke__list_evolve_wrapper">
                    <p>Evoluciona en:</p>
                    <p>{(pokemon.chain) ? pokemon.chain.evolves_to.map(evolve => evolve.species.name) : pokemon.evolution}</p>
                </div>
                <ul className="poke__list_types_typeslist">
                    {pokemon.types.map(type => {
                        return (
                            <li className={`poke__list_types_itemtypes ${type}`} key={type}>{type}</li>
                        )
                    })}
                </ul>
            </li>
        </Link>
    )
}

export default ListItem;