import React, { Component } from 'react';
import Stream from './Stream';
import {connect} from 'react-redux';
import {fetchData, fetchIfNeeded} from '../actions/topGames';

export default class Streams extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { game } = this.props.params;
    var uri = 'https://api.twitch.tv/kraken/streams?game=' + game;
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
