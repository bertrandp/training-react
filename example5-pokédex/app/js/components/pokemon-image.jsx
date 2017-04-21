import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class PokemonImage extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
    }

    render() {
        const spanClass = classNames('pokemon-icon', this.props.pokeStyle);

        return (
            <span className={spanClass}>{this.name}</span>
        );
    }
}

PokemonImage.propTypes = {
    pokeStyle: PropTypes.string,
    name: PropTypes.string
};

export default PokemonImage;