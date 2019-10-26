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


    componentDidMount() {
        getCompleteDataFromServer(this.props.pokeID)
            .then(pokeInfo => this.setState({
                pokemon: pokeInfo
            }, () => console.log(this.state)))
    }

    render() {
        const { pokemon } = this.state;
        console.log(this.state)
        return isArray(pokemon) ? "Cargando info..." : <CardDetail pokemonObj={pokemon} />
    }
}

export default PokeDetail;