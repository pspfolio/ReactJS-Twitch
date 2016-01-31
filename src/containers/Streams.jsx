import React, { Component } from 'react';
import { connect } from 'react-redux';
import Streams from '../components/Streams';

class ListStreams extends Component {
    render() {
        const { streams, dispatch } = this.props;
        return(
            <div className="row whitespace-top">
              <h3>Top Streams</h3>
              <Streams streams={streams} dispatch={dispatch} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { streams } = state;
    const { isFetching, items: listStreams } = streams.topStreams || {isFetching: false, items: []}
    return {
        isFetching,
        streams: listStreams
    }
}

export default connect(mapStateToProps)(ListStreams);
