import React, { Component, PropTypes } from 'react';
import Region from './region.js';
import HelloWorld from './helloWorld.js';

class Table extends Component {
    constructor(props) {
        super(props);
        this.body = [];
        let currentRegion = {};
        this.props.list.forEach(entry => {
            entry.region !== currentRegion && this.body.push(<Region region={entry.region} />);
            currentRegion = entry.region;
            this.body.push(<HelloWorld country={entry.country} hello={entry.hello} />);
        });
    }

    render() {

        return (
            <table>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Hello</th>
                    </tr>
                </thead>
                <tbody>
                    {this.body}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    list: PropTypes.array.isRequired
};

export default Table;