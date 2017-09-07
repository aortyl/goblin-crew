import React, {Component} from 'react';
import {connect} from 'react-redux';


class Buildings extends Component {

    render() {
        const generatorBuildings = Object.keys(this.props.buildings.generator).map((building) => {
           return (
               <li key={building}>{this.props.buildings.buildingLibrary[building].name}: {this.props.buildings.generator[building]}</li>
           );
        });

        return (
            <div>
                <h4>buildings:</h4>
                <ul>{generatorBuildings}</ul>
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