import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {genericAction} from '../actions/index'

class Actions extends Component {

    render() {

        /*
         * This function translates an action into a button. It also controls if the button should be displayed, or disabled.
         */
        const actionFunction = (action, index) => {
            let requiredMet = !!action.requires;
            let disabled = false;

            if(action.requires) {
                if(action.requires.stats) {
                    for(let requiresKey in action.requires.stats) {
                        requiredMet &= this.props.stats[requiresKey] && this.props.stats[requiresKey].value >= action.requires.stats[requiresKey];
                    }
                }
                if(action.requires.buildings) {
                    for(let requiresKey in action.requires.buildings) {
                        let buildingType = this.props.buildings.buildingLibrary[requiresKey].type;
                        requiredMet &= this.props.buildings[buildingType][requiresKey] >= action.requires.buildings[requiresKey];
                    }
                }
            }

            if(action.payload.cost) {
                if(action.payload.cost.stats) {
                    for(let disabledKey in action.payload.cost.stats) {
                        disabled |= !this.props.stats[disabledKey] || this.props.stats[disabledKey].value < action.payload.cost.stats[disabledKey];
                    }
                }
                if(action.payload.cost.buildings) {
                    for(let disabledKey in action.payload.cost.buildings) {
                        let buildingType = this.props.buildings.buildingLibrary[disabledKey].type;
                        disabled |= this.props.buildings[buildingType][disabledKey] < action.payload.cost.buildings[disabledKey];
                    }
                }
            }

            if(action.show || requiredMet) {
                return (
                    <button key={action.type}
                            className="gc-button"
                            disabled={disabled}
                            onClick={() => this.props.genericAction(action.type, action.payload)}>
                        {action.name}
                    </button>
                );
            }
        }

        // Build our list of buttons
        const grabButtons = Object.values(this.props.actions.grab).map(actionFunction);
        const makeButtons = Object.values(this.props.actions.make).map(actionFunction);
        const buildButtons = Object.values(this.props.actions.build).map(actionFunction);
        const triggerButtons = Object.values(this.props.actions.trigger).map(actionFunction);

        // Build the sections for the buttons. This is its own logic so that we can hide the header text if no buttons exist
        function ButtonSection(props) {
          const headerText = props.text;
          const buttons = props.buttons;

          //We want to know if at least one button in this group is visible
          const anyVisible = buttons.reduce( (visible, button) => {return visible || !!button;}, false);

            if (buttons.length && anyVisible) {
              return (
                <div>
                  <h3>{headerText}</h3>
                    {buttons}
                </div>
              );
            }

            return (<div></div>);
        }

        return (
          <div className="gc-actions">
            <ButtonSection buttons={grabButtons} text={'Stuff lying around on the dirty ground'} />
            <ButtonSection buttons={makeButtons} text={'Me no lazy no more'} />
            <ButtonSection buttons={buildButtons} text={'What dis contraption?'} />
            <ButtonSection buttons={triggerButtons} text={'Gobbos, TO ACTION!'} />
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
