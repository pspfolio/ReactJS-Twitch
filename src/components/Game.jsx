import '../styles/components/Game.scss';
import React, { Component } from 'react';

export default class Game extends Component {
    getEncodedLink() {
        const { name } = this.props;
        var uri = '#/streams/' + name;
        return encodeURI(uri);
    }
    render() {
      const { imgUrl, name } = this.props;
      var backgroundStyle = {
          backgroundImage: 'url('+ imgUrl +')',
      }
      return (
              <a href={this.getEncodedLink()} className="game-link">
                  <div className="img" style={backgroundStyle}></div>
                  <div className="game-name">
                      <h2>{name}</h2>
                  </div>
              </a>
      )
  	}
}
