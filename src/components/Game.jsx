import React, { Component } from 'react';

export default class Game extends Component {
  render() {
    const { game } = this.props;
    return (
      <div className="col-xs-12 col-sm-6 col-lg-4">
        <div key={game._id}>
          <img src={game.box.large} alt="stream twitch game" />
        </div>
      </div>
    )
  }
}
