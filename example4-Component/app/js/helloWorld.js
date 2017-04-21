import React, {Component, PropTypes} from 'react';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.country = props.country;
        this.hello = props.hello;
    }

    render() {
        return (
                <tr>
                    <td>{this.country}</td>
                    <td>{this.hello}</td>
                </tr>
        );
    }
}

HelloWorld.propTypes = {
    country: PropTypes.string.isRequired,
    hello: PropTypes.string.isRequired
};

export default HelloWorld;