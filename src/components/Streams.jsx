import React, { Component } from 'react';
import Stream from './Stream';

export default class Streams extends Component {
  render() {
    console.log(this.props.params.game);
    return(
      <div className="row text-center">
        {this.props.streams.map(stream =>
          <Stream stream={stream} key={stream._id}></Stream>
        )}
      </div>
    )
  }
}
