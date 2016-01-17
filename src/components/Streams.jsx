import React, { Component } from 'react';
import Stream from './Stream';
import {connect} from 'react-redux';
import {fetchData, fetchIfNeeded} from '../actions/actions';

class Streams extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { game } = this.props.params;
    var uri = 'https://api.twitch.tv/kraken/streams?game=' + game;
    dispatch(fetchIfNeeded(game, uri));
  }
  render() {
    return(
      <div className="row text-center">
        {this.props.streams.map(stream =>
          <Stream stream={stream} key={stream._id}></Stream>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { game } = this.props.params;
  const { isFetching, items: streams } = state.streams.game || {isFetching: false, items: []};

  return {
    isFetching,
    streams
  }
}

export default connect(mapStateToProps)(Streams)
