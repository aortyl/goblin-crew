import React, {Component} from 'react';
import {connect} from 'react-redux';


class OtherCrews extends Component {

    render() {
        const events = this.props.events.activeOtherCrews.map((crew) => {
           return (
               <li key={crew.name}>{crew.name}</li>
           );
        });

        //TODO - Only display the events section if there are events to display
        return (
            <div>
                <h4>Other Crews:</h4>
                <ul>{crews}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        events: state.otherCrews
    };
}

export default connect(mapStateToProps)(OtherCrews);
