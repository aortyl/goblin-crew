import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {grabGrub, buildGrubGrabber} from '../actions/index'

class Actions extends Component {

    render() {

        return (
            <div className="gc-actions">
                <button className="gc-button" onClick={() => this.props.grabGrub()}>
                    Grab Grubs
                </button>
                {
                    this.props.stats.grubs > 10 ?
                        <button className="gc-button" onClick={() => this.props.buildGrubGrabber()}>
                            Build Grub Grabber
                        </button>
                    : null
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        stats: state.stats,
        events: state.events,
        buildings: state.buildings
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        grabGrub: grabGrub,
        buildGrubGrabber: buildGrubGrabber
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Actions);