import React from 'react';
import getCompleteDataFromServer from '../services/getCompleteDataFromServer';
import CardDetail from './CardDetail';
import { isArray } from 'util';
import getDetailsFromServer from '../services/getDetailsFromServer';

class PokeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
        }
    }


    componentDidMount() {
        debugger;
        getDetailsFromServer(this.props.selectedPokemon)
            .then(pokeInfo => this.setState({
                pokemon: pokeInfo
            }))
    }

    render() {
        console.log(this.props)
        const { pokemon } = this.state;
        console.log(pokemon)
        return isArray(pokemon) ? "Cargando info..." : <CardDetail pokemonObj={pokemon} />
    }
}

export default PokeDetail;