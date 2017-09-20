import React, {Component} from 'react';
import {connect} from 'react-redux';


class Stats extends Component {

    render() {
        const stats = Object.keys(this.props.stats).map((stat) => {
            if(stat === 'statLibrary') return;
            return (
                <li key={stat}>{this.props.stats[stat].name}: {this.props.stats[stat].value}</li>
            );
        });

        return (
            <div>
                <h4>Stats:</h4>
                <ul>{stats}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        stats: state.stats
    };
}

export default connect(mapStateToProps)(Stats);
