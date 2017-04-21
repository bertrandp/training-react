import React, {Component, PropTypes} from 'react';
import PokemonRow from './pokemon-row';

class PokemonTable extends Component {
    constructor(props) {
        super(props);
        this.pokemons = props.pokemons;
        this.selectPokemon = props.selectPokemon;
    }

    render() {
        const PokemonRows = this.pokemons.map(pokemon => {
            <PokemonRow name={pokemon.name} key={pokemon.number} selectedPokemonNumber={this.props.selectedPokemonNumber} selectPokemon={this.selectPokemon} />
        });

        return (
            <table className="table is-bordered">
                <tbody>
                    {PokemonRows}
                </tbody>
            </table>
        );
    }
}

PokemonTable.propTypes = {
    pokemons: PropTypes.object,
    selectPokemon: PropTypes.object,
    selectedPokemonNumber: PropTypes.object
};

export default PokemonTable;