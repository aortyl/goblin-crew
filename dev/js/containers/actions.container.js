import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {grabGrub, buildGrubGrabber, genericAction} from '../actions/index'

class Actions extends Component {

    render() {

        console.log('STATE', this.props)

        return (
            <div className="gc-actions">
                <button className="gc-button" onClick={() => this.props.genericAction(this.props.actions.grabGrub.type, this.props.actions.grabGrub.payload)}>
                    {this.props.actions.grabGrub.name}
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
        buildings: state.buildings,
        actions: state.actions
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        grabGrub: grabGrub,
        buildGrubGrabber: buildGrubGrabber,
        genericAction: genericAction
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Actions);