import React, { Component } from 'react';
import Streams from '../components/Streams';
import {connect} from 'react-redux';
import {fetchData} from '../actions/streams';

class GameStreams extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { game } = this.props.params;
    var uri = 'https://api.twitch.tv/kraken/streams?game=' + game;
    dispatch(fetchData(game, uri));
  }
  render() {
    const { gameStreams } = this.props;
    return(
      <Streams streams={gameStreams} />
    )
  }
}

function mapStateToProps(state, props) {
  const { streams } = state;
  const { game } = props.routeParams;
  const { isFetching, items: gameStreams } = streams[game] || { isFetching: true, items: [] };
  return {
    isFetching,
    gameStreams
  };
}

export default connect(mapStateToProps)(GameStreams);
