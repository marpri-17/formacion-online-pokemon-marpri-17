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
    //ev.preventDefault();
    this.setState({
      userPokemon: pokemonName.target.dataset.id,
    })
  }


  handleSearch(ev) {
    ev.preventDefault();
    console.log("Enviar formulario")
  }

  handleAutoSearch(ev) {
    const { allPokemons, limit, userPokemon } = this.state;
    this.setState({
      userPokemon: ev.target.value.toLowerCase()
    });
    debugger;
    const newPokeforDetails = allPokemons.filter(poke => poke.name.includes(ev.target.value.toLowerCase()));
    getDetailsFromServer(newPokeforDetails.slice(0, limit))
      .then(resp => Promise.all(resp.map(poke => {
        const url = "https://pokeapi.co/api/v2/evolution-chain/" + poke.id;
        return fetch(url)
          .then(resp => resp.json())
          .then(evolution => Object.assign(poke, evolution))
          .catch(err => {
            let noEvolve = { evolution: "No evoluciona" };
            return Object.assign(poke, noEvolve)
          })
      }))
        .then(completePokemons => this.setState({
          detailPokemons: completePokemons
        })))
  }
  // componentDidUpdate() {
  //   const prevState = this.state.detailPokemons
  //   const nextState = this.state.detailPokemons;
  //   return nextState === prevState ? false : true
  // }
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
        const defaultPokemons = data.slice(0, this.state.limit);
        return getDetailsFromServer(defaultPokemons)
      })
      .then(resp => Promise.all(resp.map(poke => {
        const url = "https://pokeapi.co/api/v2/evolution-chain/" + poke.id;
        return fetch(url)
          .then(resp => resp.json())
          .then(evolution => Object.assign(poke, evolution))
      })))
      .then(completePokemons => this.setState({
        detailPokemons: completePokemons
      }))
  }

  renderExploreList() {
    debugger;
    const { detailPokemons } = this.state;
    return ((detailPokemons.length !== 0) ? <PokeList pokemons={detailPokemons} /> : "Cargando...")
  }

  renderDetail(props) {
    console.log(props)
    const selectedName = props.match.params.name;
    return (<PokeDetail selectedPokemon={selectedName} />)
  }


  render() {
    const { allPokemons, userPokemon } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/" >
            <h1 className="poke__title">Pokédex</h1>
          </Link>
        </header>
        <div className="poke__main_wrapper">
          <FilterName handleSearch={this.handleSearch} handleSuggestedName={this.handleSuggestedName} handleAutoSearch={this.handleAutoSearch} allPokemonsNames={allPokemons.map(poke => [poke.id, poke.name])} userQuery={userPokemon} />
          <section className="poke__main">
            <Switch>
              <Route exact path="/" render={this.renderExploreList} />
              <Route path="/info/:name" render={this.renderDetail} />
            </Switch>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
