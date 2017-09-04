import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {grabGrub, buildGrubGrabber} from '../actions/index'
// import Cookies from 'universal-cookie'

import Stats from '../containers/stats.container'
import Events from '../containers/events.container'
import Actions from '../containers/actions.container'

class Game extends Component {

    componentDidMount() {
        //this.countdown = setInterval(this._turnDigest, 1000);
    }

    componentWillUnmount() {
        //clearInterval(this.countdown);
    }

    //TODO - Add in logic for 'adventurers'. They can be an event. They will show up in X minutes, and bad stuff will happen.
    //TODO - Add stabby sticks, block knockers, etc
    //TODO - Add recruitment
    //TODO - Model combat abstract somehow.


    //TODO - Build a reducer/action for restarting.
    // handleRestartClick = (e) => {
    //     this.state = {};
    //     this.setState(this._getInitialState());
    //     this.cookies.set('gc-state', this.state);
    // };

    //TODO - Build a reducer/action for handling events
    // _turnDigest = () => {
    //     this._eventMaintenance();
    // };
    //
    // _eventMaintenance = () => {
    //     let eventsToRemove = [];
    //
    //     //Cycle through events. Triggering them as needed. If triggered, save the event so that it may be removed
    //     for(let event of this.state.events) {
    //         if( event.type === 'progress') {
    //             if( !!this.state[event.target.category] && !!this.state[event.target.category][event.target.key] &&
    //                 this.state[event.target.category][event.target.key] >= event.target.value ) {
    //                 //TODO - this is just setting the state to a value. We need to do that in the case that it doesn't already exist. But if it does, we need to increment it
    //                 this.setState(event.stateChanges);
    //                 eventsToRemove.push(event);
    //             }
    //         }
    //     }
    //
    //     //If we have an event to remove, do it, update the state
    //     if(eventsToRemove.length) {
    //         let events = this.state.events.slice();
    //
    //         for(let event of eventsToRemove) {
    //             let index = events.indexOf(event);
    //             events.splice(index, 1);
    //         }
    //         this.setState({events: events});
    //     }
    // };

    render() {

        return (
            <div>
                <div>
                    <button className="gc-button" onClick={this.handleRestartClick}>
                        Kill All Goblins
                    </button>
                </div>
                <div className="gc-game">
                    <div className="gc-inventory">
                        <Stats/>
                        <Events/>
                    </div>
                    <Actions/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        stats: state.stats
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        grabGrub: grabGrub,
        buildGrubGrabber: buildGrubGrabber
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Game);