import React, { Component } from 'react';
import Stream from './Stream';
import {connect} from 'react-redux';
import {fetchData} from '../actions/streams';

class Streams extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { game } = this.props.params;
    var uri = 'https://api.twitch.tv/kraken/streams?game=' + game;
    dispatch(fetchData(game, uri));
  }
  render() {
    return(
      <div className="row text-center">
        {this.props.gameStreams.map(stream =>
          <Stream stream={stream} key={stream._id}></Stream>
        )}
      </div>
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

export default connect(mapStateToProps)(Streams);
