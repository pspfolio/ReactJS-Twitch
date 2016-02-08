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

    handleMoreStreams() {

    }

    render() {
        const { streams, selectedStream, limitResults, nextUrl, dispatch } = this.props;
        console.log(nextUrl);
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
    const { isFetching, items: listStreams, nextUrl } = streams.topStreams || {isFetching: false, items: [], nextUrl: ''};
    var result = listStreams.length > 0 ? listStreams.slice(0, limitResults) : listStreams
    return {
        isFetching,
        streams: result,
        selectedStream,
        nextUrl
    }
}

export default connect(mapStateToProps)(ListStreams);
