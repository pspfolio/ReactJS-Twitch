import React, { Component } from 'react';

export default class Game extends Component {
  getEncodedLink() {
    const { name } = this.props;
    var uri = '#/streams/' + name;
    return encodeURI(uri);
  }
  render() {
    const { imgUrl } = this.props;
    return (
      <div className="col-xs-12 col-sm-6 col-lg-4">
        <a href={this.getEncodedLink()}><img src={imgUrl} alt="stream twitch game" /></a>
      </div>
    )
  }
}
