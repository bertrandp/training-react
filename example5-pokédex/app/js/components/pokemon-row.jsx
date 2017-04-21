import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class PokemonRow extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.number = props.number;
        this.selectPokemon = props.selectPokemon;
        this.onClickRow = this.onClickRow.bind(this);
    }

    onClickRow() {
        this.selectPokemon(this.number);
    }

    render() {
        const rowClass = classNames({
            notification: true,
            'is-success': this.props.selectedPokemonNumber === this.number
        });

        return (
            <tr>
                <td onClick={this.selectPokemon(this.number)}>
                    <p className={rowClass} >{this.number} {this.name}</p>
                </td>
            </tr>
        );
    }
}

PokemonRow.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    selectPokemon: PropTypes.func,
    selectedPokemonNumber: PropTypes.string
};

export default PokemonRow;
