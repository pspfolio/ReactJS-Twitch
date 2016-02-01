import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchData} from '../actions/streams';
import Streams from '../components/Streams';

class ListStreams extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        var uri = 'https://api.twitch.tv/kraken/streams';
        dispatch(fetchData('topStreams', uri));
    }

    render() {
        const { streams, dispatch } = this.props;
        return(
            <div className="row whitespace-top">
              <Streams streams={streams} dispatch={dispatch} />
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    const { streams } = state;
    const { limitResults } = props;
    const { isFetching, items: listStreams } = streams.topStreams || {isFetching: false, items: []};
    var result = listStreams.length > 0 ? listStreams.slice(0, limitResults) : listStreams
    return {
        isFetching,
        streams: result
    }
}

export default connect(mapStateToProps)(ListStreams);
