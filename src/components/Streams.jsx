import React, { Component } from 'react';

export default class Streams extends Component {
  render() {
    console.log(this.props.params.game);
    return(
      <div className="row text-center">
        {this.props.streams.map(stream =>
          <h3>{stream.channel.display_name}</h3>
        )}
      </div>
    )
  }
}
