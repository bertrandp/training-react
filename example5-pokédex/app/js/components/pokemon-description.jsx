import React, {Component, PropTypes} from 'react';

class PokemonDescription extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const pokemon = this.props.pokemon;
        const type = pokemon ? pokemon.type + ' and ' + pokemon.secondType : pokemon.type;
        return (
            <p>{pokemon.name} is a Pokemon of type {type}. It has the number {pokemon.number}</p>
        );
    }
}

PokemonDescription.propTypes = {
    pokemon: PropTypes.object,
};

export default PokemonDescription;