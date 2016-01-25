import React, { Component } from 'react';
import Stream from './Stream';

export default class Streams extends Component {
  render() {
    const { streams } = this.props;
    return(
      <div className="row text-center">
        {streams.map(stream =>
          <Stream stream={stream} key={stream._id}></Stream>
        )}
      </div>
    )
  }
}
