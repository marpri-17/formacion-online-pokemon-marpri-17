import React from 'react';
import getDataFromServer from '../services/getDataFromServer';
import PokeList from './PokeList';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    }
  }

  componentDidMount() {
    getDataFromServer()
      .then(result => Promise.all(result))
      .then(pokemons => this.setState({
        pokemons: [...this.state.pokemons, ...pokemons]
      }))
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="poke__title">Pokédex</h1>
        </header>
        <form className="poke__form">
          <input type="text" />
        </form>
        <section className="poke__main">
          {pokemons.length > 0 ? <PokeList pokemons={pokemons} /> : "Cargando..."}
        </section>
      </div>
    );
  }
}

export default App;
