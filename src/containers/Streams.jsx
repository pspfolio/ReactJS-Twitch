import React, { Component } from 'react';
import Streams from '../components/Streams';
import {connect} from 'react-redux';
class GameStreams extends Component {
  render() {
    const { gameStreams, dispatch } = this.props;
    const { game } = this.props.params;
    return(
      <Streams streams={gameStreams} dispatch={dispatch} gameName={game} />
    )
  }
};

function mapStateToProps(state, props) {
  const { streams } = state;
  const { game } = props.routeParams;
  const { isFetching, items: gameStreams } = streams[game] || { isFetching: true, items: [] };
  return {
    isFetching,
    gameStreams
  }
};

export default connect(mapStateToProps)(GameStreams);
