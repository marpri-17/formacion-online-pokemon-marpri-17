import React from 'react';
import getDataFromServer from '../services/getDataFromServer';
import PokeList from './PokeList';
import '../stylesheets/App.scss';
import FilterName from './FilterName';
import { Route, Switch, Link } from 'react-router-dom';
import PokeDetail from './PokeDetail';
import getDetailsFromServer from '../services/getDetailsFromServer';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allPokemons: [],
      userPokemon: "",
      detailPokemons: [],
      limit: 24,
    }
    this.handleSuggestedName = this.handleSuggestedName.bind(this);
    this.handleAutoSearch = this.handleAutoSearch.bind(this);
    this.renderExploreList = this.renderExploreList.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
  }

  handleSuggestedName(pokemonName) {
    debugger;
    //ev.preventDefault();
    this.setState({
      userPokemon: pokemonName.target.dataset.id,
    })
  }
  formatPokemonData(data) {
    return data.map(pokemon => {
      let newTypes = pokemon.types.map(type => type.type.name)
      return {
        id: pokemon.id,
        name: pokemon.name,
        frontImage: pokemon.sprites.front_default || `https://via.placeholder.com/100.jpg?${pokemon.name}`,
        shinyImage: pokemon.sprites.front_shiny || `https://via.placeholder.com/100.jpg?${pokemon.name}`,
        types: newTypes,
      }
    })
  }

  handleSearch(ev) {
    ev.preventDefault();
    console.log("Enviar formulario")
  }

  handleAutoSearch(ev) {
    debugger;
    const { allPokemons, limit } = this.state;
    this.setState({
      userPokemon: ev.target.value.toLowerCase()
    });
    const newPokeforDetails = allPokemons.filter(poke => poke.name.includes(ev.target.value.toLowerCase()))
    getDetailsFromServer(newPokeforDetails.slice(0, limit))
      .then(poke => this.formatPokemonData(poke))
      .then(resp => this.setState({
        detailPokemons: resp
      }, () => console.log(this.state)))
  }
  componentDidUpdate() {
    const prevState = this.state.detailPokemons
    const nextState = this.state.detailPokemons;
    return nextState === prevState ? false : true
  }
  componentDidMount() {
    getDataFromServer()
      .then(pokes => Promise.all(pokes))
      .then(allPokes => {
        this.setState({
          allPokemons: allPokes
        })
        return allPokes
      }
      )
      .then(data => {
        debugger;
        const defaultPokemons = data.slice(0, this.state.limit);
        getDetailsFromServer(defaultPokemons)
          .then(pokes => this.formatPokemonData(pokes))
          //.then(r => console.log(r))
          .then(detailspokes => this.setState({
            detailPokemons: detailspokes,
          }))
      })
  }

  renderExploreList() {
    const { detailPokemons } = this.state;
    return (<PokeList pokemons={detailPokemons} />)
  }

  renderDetail(props) {
    const selectedId = props.match.params.id;
    return (<PokeDetail pokeID={selectedId} />)
  }


  render() {
    const { allPokemons, userPokemon } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Link to="./" >
            <h1 className="poke__title">Pokédex</h1>
          </Link>
        </header>
        <div className="poke__main_wrapper">
          <FilterName handleSearch={this.handleSearch} handleSuggestedName={this.handleSuggestedName} handleAutoSearch={this.handleAutoSearch} allPokemonsNames={allPokemons.map(poke => poke.name)} userQuery={userPokemon} />
          <section className="poke__main">
            <Switch>
              <Route exact path="./" render={this.renderExploreList} />
              <Route path="/info/:id" render={this.renderDetail} />
            </Switch>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
