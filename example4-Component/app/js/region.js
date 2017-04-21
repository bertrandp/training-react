import React, {Component, PropTypes} from 'react';

class Region extends Component {
    constructor(props) {
        super(props);
        this.region = props.region;
    }

    render() {
        return (
            <tr><td colSpan="2" >{this.region}</td></tr>
        );
    }
}

Region.propTypes = {
    region: PropTypes.string.isRequired
};

export default Region;