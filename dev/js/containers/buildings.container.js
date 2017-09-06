import React, {Component} from 'react';
import {connect} from 'react-redux';


class Buildings extends Component {

    render() {
        const buildings = Object.keys(this.props.buildings).map((building) => {
           return (
               <li key={building}>{building}: {this.props.buildings[building]}</li>
           );
        });

        return (
            <div>
                <h4>buildings:</h4>
                <ul>{buildings}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        buildings: state.buildings
    };
}

export default connect(mapStateToProps)(Buildings);