import React, {Component} from 'react';
import {connect} from 'react-redux';


class Stats extends Component {

    render() {
        const stats = Object.keys(this.props.stats).map((stat) => {
            if(stat === 'statLibrary') return;

            //TODO - I dunno... I'm tired.
            let modifier = this.props.stats[stat].modifier > 0 ? '(+' + this.props.stats[stat].modifier + '/s)' : '';
            modifier = this.props.stats[stat].modifier < 0 ? '(-' + this.props.stats[stat].modifier + '/s)' : modifier;
            return (
                <li key={stat}>{this.props.stats[stat].name}: {this.props.stats[stat].value} {modifier}</li>
            );
        });

        //TODO - Only display the stats section if there are stats to display
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
