import React from 'react';
import getDataFromServer from '../services/getDataFromServer';
import PokeList from './PokeList';
import '../stylesheets/App.scss';
import FilterName from './FilterName';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    }
  }

  handleSearchName(ev) {
    debugger;
    ev.preventDefault();
    const inputValue = ev.currentTarget.firstChild.value;
    console.log(inputValue)
  }

  componentDidMount() {
    getDataFromServer()
      .then(result => Promise.all(result))
      .then(pokemons => this.setState({
        pokemons: pokemons
      }));
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="poke__title">Pokédex</h1>
        </header>
        <div className="poke__main_wrapper">
          <FilterName handleSearchName={this.handleSearchName} />
          <section className="poke__main">
            {pokemons.length > 0 ? <PokeList pokemons={pokemons} /> : "Cargando..."}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
