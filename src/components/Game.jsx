import React, { Component } from 'react';

export default class Game extends Component {
  getEncodedLink() {
    const { game } = this.props;
    console.log("game");
    var uri = '#/streams/' + game.name;
    return encodeURI(uri);
  }
  render() {
    const { game } = this.props;
    return (
      <div className="col-xs-12 col-sm-6 col-lg-4">
        <a href={this.getEncodedLink()}><img src={game.box.large} alt="stream twitch game" /></a>
      </div>
    )
  }
}
