import React, { Component } from 'react';
import Streams from '../components/Streams';
import { connect } from 'react-redux';
import { fetchData } from '../actions/streams';
import { playStream } from '../actions/player';

class GameStreams extends Component {
    constructor(props) {
        super(props);
        this.handleStreamClick = this.handleStreamClick.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        const { game } = this.props.params;
        var uri = 'https://api.twitch.tv/kraken/streams?game=' + game;
        dispatch(fetchData(game, uri));
    }

    handleStreamClick(streamId) {
        const { dispatch } = this.props;
        dispatch(playStream(streamId));
    }

    render() {
        const { gameStreams, selectedStream, dispatch } = this.props;
        return(
            <Streams streams={gameStreams} selectedStream={selectedStream} handleStreamClick={this.handleStreamClick} dispatch={dispatch} />
        )
    }
};

function mapStateToProps(state, props) {
  const { streams, selectedStream } = state;
  const { game } = props.routeParams;
  const { isFetching, items: gameStreams } = streams[game] || { isFetching: true, items: [] };
  return {
    isFetching,
    gameStreams,
    selectedStream
  }
};

export default connect(mapStateToProps)(GameStreams);
