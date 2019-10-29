import React from 'react';
import getDataFromServer from '../services/getDataFromServer';
import PokeList from './PokeList';
import '../stylesheets/App.scss';
import FilterName from './FilterName';
import { Route, Switch, Link } from 'react-router-dom';
import PokeDetail from './PokeDetail';
import getDetailsFromServer from '../services/getDetailsFromServer';
import getCompleteDataFromServer from '../services/getCompleteDataFromServer';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allPokemons: [],
      userPokemon: "",
      detailPokemons: [],
      limit: 24,
    }
    this.handleAutoSearch = this.handleAutoSearch.bind(this);
    this.renderExploreList = this.renderExploreList.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
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
    const newPokeforDetails = allPokemons.filter(poke => poke.name.includes(ev.target.value.toLowerCase()));
    getCompleteDataFromServer([newPokeforDetails])
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
        return getCompleteDataFromServer(defaultPokemons)
      })
      .then(formatedPokes => this.setState({
        detailPokemons: formatedPokes
      }))
  }

  renderExploreList() {
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
