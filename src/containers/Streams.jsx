import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, fetchStreamsIfNeeded } from '../actions/streams';
import { playStream } from '../actions/player';
import Streams from '../components/Streams';
import Header from '../components/Header';

class ListStreams extends Component {
    constructor(props) {
        super(props);
        this.handleStreamClick = this.handleStreamClick.bind(this);
        this.handleMoreStreams = this.handleMoreStreams.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        var uri = 'https://api.twitch.tv/kraken/streams';
        dispatch(fetchStreamsIfNeeded('topStreams', uri));
    }

    handleStreamClick(streamId) {
        const { dispatch } = this.props;
        dispatch(playStream(streamId));
    }

    handleMoreStreams() {
        const { nextUrl, dispatch } = this.props;
        dispatch(fetchData('topStreams', nextUrl));
    }

    render() {
        const { streams, selectedStream, frontpage, totalItemsCountApi, dispatch } = this.props;
        return(
            <div className="container-fluid">
                { !frontpage ? <Header headerText={'Top Streams'} /> : null }
                <Streams streams={streams}
                    selectedStream={selectedStream}
                    handleStreamClick={this.handleStreamClick}
                    handleMoreStreams={this.handleMoreStreams}
                    frontpage={frontpage}
                    totalItemsCountApi={totalItemsCountApi}
                    dispatch={dispatch} />
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    const { streams, selectedStream } = state;
    const { limitResults, frontpage } = props;
    const { isFetching, items: listStreams, nextUrl, totalItemsCountApi } = streams.topStreams ||
          { isFetching: false, items: [], nextUrl: '', totalItemsCountApi: 0 };
    var result = frontpage && limitResults ? listStreams.slice(0, limitResults) : listStreams
    return {
        isFetching,
        streams: result,
        selectedStream,
        nextUrl,
        totalItemsCountApi
    }
}

export default connect(mapStateToProps)(ListStreams);
