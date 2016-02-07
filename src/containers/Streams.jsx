import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/streams';
import { playStream } from '../actions/player';
import Streams from '../components/Streams';
import Header from '../components/Header';

class ListStreams extends Component {
    constructor(props) {
        super(props);
        this.handleStreamClick = this.handleStreamClick.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        var uri = 'https://api.twitch.tv/kraken/streams';
        dispatch(fetchData('topStreams', uri));
    }

    handleStreamClick(streamId) {
        const { dispatch } = this.props;
        dispatch(playStream(streamId));
    }

    render() {
        const { streams, selectedStream, limitResults, dispatch } = this.props;
        return(
            <div className="container-fluid">
                { !limitResults ? <Header headerText={'Top Streams'} /> : null }
                <Streams dispatch={dispatch} streams={streams}
                    selectedStream={selectedStream}
                    handleStreamClick={this.handleStreamClick} />
            </div>

        )
    }
}

function mapStateToProps(state, props) {
    const { streams, selectedStream } = state;
    const { limitResults } = props;
    const { isFetching, items: listStreams } = streams.topStreams || {isFetching: false, items: []};
    var result = listStreams.length > 0 ? listStreams.slice(0, limitResults) : listStreams
    return {
        isFetching,
        streams: result,
        selectedStream
    }
}

export default connect(mapStateToProps)(ListStreams);
