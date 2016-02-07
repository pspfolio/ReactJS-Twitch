import '../styles/components/Game.scss';
import React, { Component, PropTypes } from 'react';

export default class Game extends Component {
    getEncodedLink() {
        const { name } = this.props;
        const uri = '#/streams/' + name;
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
            <h2>{name}</h2>
        </a>
      )
  	}
}

Game.propTypes = {
  imgUrl: React.PropTypes.string,
  name: React.PropTypes.string
}
