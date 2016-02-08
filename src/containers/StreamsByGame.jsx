import React, { Component } from 'react';
import Streams from '../components/Streams';
import { connect } from 'react-redux';
import { fetchData } from '../actions/streams';
import { playStream } from '../actions/player';

class GameStreams extends Component {
    constructor(props) {
        super(props);
        this.handleStreamClick = this.handleStreamClick.bind(this);
        this.handleMoreStreams = this.handleMoreStreams.bind(this);
        this.getStreams = this.getStreams.bind(this);
    }

    componentDidMount() {
        console.log("componetn dit mount");
        this.handleMoreStreams();
    }

    handleStreamClick(streamId) {
        const { dispatch } = this.props;
        dispatch(playStream(streamId));
    }

    handleMoreStreams() {
        console.log()
        const { dispatch } = this.props;
        const { game } = this.props.params;
        var uri = 'https://api.twitch.tv/kraken/streams?game=' + game;
        this.getStreams(game, uri);
    }

    getStreams(game, url) {
        const { dispatch } = this.props;
        dispatch(fetchData(game, url));
    }

    render() {
        const { gameStreams, selectedStream, dispatch } = this.props;
        return(
            <Streams streams={gameStreams} selectedStream={selectedStream} handleMoreStreams={this.handleMoreStreams} handleStreamClick={this.handleStreamClick} dispatch={dispatch} />
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
