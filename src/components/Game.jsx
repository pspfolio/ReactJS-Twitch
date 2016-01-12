import React, { Component } from 'react';

export default class Game extends Component {
  render() {
    const { game } = this.props;
    return (
      <div key={game._id}>
        <h3>{game.name}</h3>
        <img src={game.box.large} alt="stream twitch game" />
      </div>
    )
  }
}
