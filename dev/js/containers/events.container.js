import React, {Component} from 'react';
import {connect} from 'react-redux';


class Events extends Component {

    render() {
        const events = this.props.events.activeEvents.map((event) => {
           return (
               <li key={event.name}>{event.name}</li>
           );
        });

        //TODO - Only display the events section if there are events to display
        return (
            <div>
                <h4>Active Events:</h4>
                <ul>{events}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        events: state.events
    };
}

export default connect(mapStateToProps)(Events);
