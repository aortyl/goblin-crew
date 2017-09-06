import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {genericAction} from '../actions/index'

class Actions extends Component {

    render() {

        const actionButtons = Object.keys(this.props.actions).map((key, index) => {
            let action = this.props.actions[key];
            let requiredMet = true;
            let disabled = false;

            if(action.requires) {
                if(action.requires.stats) {
                    for(let requiresKey in action.requires.stats) {
                        requiredMet &= this.props.stats[requiresKey] >= action.requires.stats[requiresKey];
                    }
                }
            }

            if(action.payload.cost) {
                if(action.payload.cost.stats) {
                    for(let disabledKey in action.requires.stats) {
                        disabled |= this.props.stats[disabledKey] < action.payload.cost.stats[disabledKey];
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