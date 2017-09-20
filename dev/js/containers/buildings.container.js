import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {generatorDigest} from '../actions/index'

class Buildings extends Component {
    constructor(props, context) {
        super(props, context);

        this._generatorDigest = () => {
            //TODO - Cycle through generators and if they can handle the cost, then generate whatever they generate.
            //TODO - Question: Should there be a single GENERATOR_DIGEST action with a unique payload? or a unique action per building?

            for(let buildingKey in this.props.buildings.generator){
                let building = this.props.buildings.buildingLibrary[buildingKey];
                let count = this.props.buildings.generator[buildingKey];

                Array(count).fill(count).forEach(() => {
                    if(!building.cost || !building.cost.stats || Object.keys(building.cost.stats).reduce((b, key) => {
                        return b && building.cost.stats[key] <= this.props.stats[key];
                    }, true)) {
                        this.props.generatorDigest({gain: building.gain, cost: building.cost});
                    }
                });
            }
        }
    }

    componentDidMount() {
        this.countdown = setInterval(this._generatorDigest, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.countdown);
    }

    render() {
        const generatorBuildings = Object.keys(this.props.buildings.generator).map((building) => {
           return (
               <li key={building}>{this.props.buildings.buildingLibrary[building].name}: {this.props.buildings.generator[building]}</li>
           );
        });

        return (
            <div>
                <h4>Buildings:</h4>
                <ul>{generatorBuildings}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        buildings: state.buildings,
        stats: state.stats
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        generatorDigest: generatorDigest
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Buildings);
