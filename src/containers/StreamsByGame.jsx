import React, { Component } from 'react';
import Streams from '../components/Streams';
import { connect } from 'react-redux';
import { fetchData, fetchStreamsIfNeeded } from '../actions/streams';
import { playStream } from '../actions/player';

class GameStreams extends Component {
    constructor(props) {
        super(props);
        this.handleStreamClick = this.handleStreamClick.bind(this);
        this.handleMoreStreams = this.handleMoreStreams.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        const { game } = this.props.params;
        const uri = 'https://api.twitch.tv/kraken/streams?game=' + game;
        dispatch(fetchStreamsIfNeeded(game, uri));
    }

    handleStreamClick(streamId) {
        const { dispatch } = this.props;
        dispatch(playStream(streamId));
    }

    handleMoreStreams() {
        const { nextUrl, dispatch } = this.props;
        const { game } = this.props.params;
        dispatch(fetchData(game, nextUrl));
    }

    render() {
        const { gameStreams, selectedStream, totalItemsCountApi, dispatch } = this.props;
        return(
            <Streams
                streams={gameStreams}
                selectedStream={selectedStream}
                handleMoreStreams={this.handleMoreStreams}
                handleStreamClick={this.handleStreamClick}
                totalItemsCountApi={totalItemsCountApi}
                dispatch={dispatch} />
        )
    }
};

function mapStateToProps(state, props) {
  const { streams, selectedStream } = state;
  const { game } = props.routeParams;
  const { isFetching,
            items: gameStreams,
            nextUrl,
            totalItemsCountApi
        } = streams[game] || {
                isFetching: true,
                items: [], nestUrl: '',
                totalItemsCountApi: 0
            };
  return {
    isFetching,
    gameStreams,
    selectedStream,
    nextUrl,
    totalItemsCountApi
  }
};

export default connect(mapStateToProps)(GameStreams);
