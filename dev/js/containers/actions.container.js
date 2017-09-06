import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {genericAction} from '../actions/index'

class Actions extends Component {

    render() {

        const actionButtons = Object.keys(this.props.actions).map((key, index) => {
            let action = this.props.actions[key];
            let requiredMet = !!action.requires;
            let disabled = false;

            if(action.requires) {
                if(action.requires.stats) {
                    for(let requiresKey in action.requires.stats) {
                        requiredMet &= this.props.stats[requiresKey] >= action.requires.stats[requiresKey];
                    }
                }
                if(action.requires.buildings) {
                    for(let requiresKey in action.requires.buildings) {
                        requiredMet &= this.props.buildings[requiresKey] >= action.requires.buildings[requiresKey];
                    }
                }
            }

            if(action.payload.cost) {
                if(action.payload.cost.stats) {
                    for(let disabledKey in action.payload.cost.stats) {
                        disabled |= this.props.stats[disabledKey] < action.payload.cost.stats[disabledKey];
                    }
                }
                if(action.payload.cost.buildings) {
                    for(let disabledKey in action.payload.cost.buildings) {
                        disabled |= this.props.buildings[disabledKey] < action.payload.cost.buildings[disabledKey];
                    }
                }
            }

            if(action.show || requiredMet) {
                return (
                    <button key={this.props.actions[key].type}
                            className="gc-button"
                            disabled={disabled}
                            onClick={() => this.props.genericAction(action.type, action.payload)}>
                        {action.name}
                    </button>
                );
            }
        });

        return (
            <div className="gc-actions">
                {actionButtons}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        stats: state.stats,
        events: state.events,
        buildings: state.buildings,
        actions: state.actions
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        genericAction: genericAction
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Actions);