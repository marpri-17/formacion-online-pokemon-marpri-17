import React from 'react';
import '../stylesheets/detail.scss';

const CardDetail = ({ pokemonObj }) => {
    debugger;
    return (
        <section className="detail__wrapper">
            <img src={pokemonObj.frontImage} alt={pokemonObj.name} />
            <h5>{pokemonObj.name}</h5>
            <ul className="detail__types_list">
                {pokemonObj.types.map(type => {
                    return (<li className="detail__types_list_item" key={pokemonObj.name + type}>{type}</li>)
                })}
            </ul>
            <p>Evolution</p>
            {pokemonObj.evolutions.map(evolution =>
                (
                    <small key={pokemonObj.name + evolution}>{evolution}</small>
                ))}
        </section >
    )
}

export default CardDetail;