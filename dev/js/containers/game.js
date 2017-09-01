import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {grabGrub, buildGrubGrabber} from '../actions/index'
// import Cookies from 'universal-cookie'


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
        const stats = Object.keys(this.props.stats).map((stat, index) => {
           return (
               <li key={stat}>{stat}: {this.props.stats[stat]}</li>
           );
        });
        // const events = this.state.events.map((event, index) => {
        //    return (
        //        <li key={event.name}>{event.name}</li>
        //    );
        // });

        return (
            <div>
                <div>
                    <button className="gc-button" onClick={this.handleRestartClick}>
                        Kill All Goblins
                    </button>
                </div>
                <div className="gc-game">
                    <div className="gc-inventory">
                        <div>
                            <h4>Stats:</h4>
                            <ul>{stats}</ul>
                        </div>
                        <div>
                            <h4>Events:</h4>
                            <ul>No Events</ul>
                        </div>
                    </div>
                    <div className="gc-actions">
                        <button className="gc-button" onClick={() => this.props.grabGrub()}>
                            Grab Grub
                        </button>
                        {
                            this.props.stats.grubs > 10 ?
                                <button className="gc-button" onClick={() => this.props.buildGrubGrabber()}>
                                    Build Grub Grabber
                                </button>
                            : null
                        }
                    </div>
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