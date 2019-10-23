import React from 'react';
import getNamesSuggestions from '../services/getNamesSuggestions';
import '../stylesheets/filtername.scss';

class FilterName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            namesSuggestions: [],
            userQuery: "",
        }
        this.showSuggestions = this.showSuggestions.bind(this);
        this.FilterByName = this.FilterByName.bind(this)
    }

    showSuggestions() {
        const { namesSuggestions, userQuery } = this.state;
        if (namesSuggestions.length !== 0) {
            return (
                <ul className="filter__suggestions_list">
                    {this.state.namesSuggestions
                        .filter(suggestion => suggestion.includes(userQuery.toLowerCase()))
                        .map(suggestion => {
                            return <li className="filter__suggestions_list_item" key={suggestion} >{suggestion}</li>
                        })}
                </ul>
            )
        }
    }

    FilterByName(ev) {
        const userSearch = ev.target.value;
        this.setState({
            userQuery: userSearch
        })
        console.log(ev)
    }

    componentDidMount() {
        debugger;
        getNamesSuggestions()
            .then(suggestions => this.setState({
                namesSuggestions: suggestions
            }))
    }

    render() {
        const { props } = this;
        const { userQuery } = this.state;
        console.log(this.state)
        return (
            <form className="poke__form" onSubmit={props.handleSearchName}>
                <button type="submit"> Buscar </button>
                <div className="filter__suggestions_inputName_wrapper">
                    <input type="text" className="filter__suggestions_inputName" onChange={this.FilterByName} placeholder="pikachu" /><label className="filter__suggestions_inputName_label">Ej: Pikachu</label>
                    {(userQuery !== "") ? this.showSuggestions() : ""}
                </div>
            </form>
        )
    }
}

export default FilterName;