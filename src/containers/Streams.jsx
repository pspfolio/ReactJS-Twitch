import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/streams';
import { playStream } from '../actions/player';
import Streams from '../components/Streams';
import Header from '../components/Header';

class ListStreams extends Component {
    constructor(props) {
        super(props);
        this.getStreams = this.getStreams.bind(this);
        this.handleStreamClick = this.handleStreamClick.bind(this);
        this.handleMoreStreams = this.handleMoreStreams.bind(this);
    }

    componentDidMount() {
        var uri = 'https://api.twitch.tv/kraken/streams';
        this.getStreams('topStreams', uri)
    }

    handleStreamClick(streamId) {
        const { dispatch } = this.props;
        dispatch(playStream(streamId));
    }

    handleMoreStreams() {
        const { nextUrl } = this.props;
        this.getStreams('topStreams', nextUrl);
    }

    getStreams(name, url) {
        const { dispatch } = this.props;
        dispatch(fetchData(name, url));
    }

    render() {
        const { streams, selectedStream, limitResults, frontpage, dispatch } = this.props;
        return(
            <div className="container-fluid">
                { !limitResults ? <Header headerText={'Top Streams'} /> : null }
                <Streams dispatch={dispatch} streams={streams}
                    selectedStream={selectedStream}
                    handleStreamClick={this.handleStreamClick}
                    handleMoreStreams={this.handleMoreStreams}
                    frontpage={frontpage}
                    />
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    const { streams, selectedStream } = state;
    console.log(streams);
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
