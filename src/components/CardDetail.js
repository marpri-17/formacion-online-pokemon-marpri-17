import React from 'react';
import '../stylesheets/detail.scss';

const CardDetail = ({ pokemonObj }) => {
    console.log(pokemonObj)
    debugger;
    return (
        <section className="detail__wrapper">
            <p>{pokemonObj.id}</p>
            <h4 className="detail__name">{pokemonObj.name}</h4>
        </section >
    )
}

export default CardDetail;

{/* <img src={pokemonObj.frontImage} alt={pokemonObj.name} />
    <ul className="detail__types_list">
        {pokemonObj.types.map(type => {
            return (<li className="detail__types_list_item" key={pokemonObj.name + type}>{type}</li>)
        })}
    </ul>
    <p>Evolution</p>
{
    pokemonObj.evolutions.map(evolution =>
        (
            <small key={pokemonObj.name + evolution}>{evolution}</small>
        ))
} */}