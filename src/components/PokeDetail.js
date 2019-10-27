import React from 'react';
import getCompleteDataFromServer from '../services/getCompleteDataFromServer';
import CardDetail from './CardDetail';
import { isArray } from 'util';

class PokeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
        }
    }


    componentDidUpdate() {
        debugger;
        getCompleteDataFromServer(this.props.selectedPokemon)
            .then(pokeInfo => this.setState({
                pokemon: pokeInfo
            }))
    }

    render() {
        console.log(this.props)
        const { pokemon } = this.state;
        return isArray(pokemon) ? "Cargando info..." : <CardDetail pokemonObj={pokemon} />
    }
}

export default PokeDetail;