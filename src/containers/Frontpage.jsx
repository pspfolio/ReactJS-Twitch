import '../styles/containers/FrontPage.scss';
import React, { Component } from 'react';

var twitchLogoPath = '../images/twitch_logo.png';

export default class FrontPage extends Component {
  render() {
    return(
      <div>
        <div className="frontpage-top">
          <div className="frontpage-logo">
            <img src={twitchLogoPath} alt="twitch logo" />
            <h1>Twitch with ReactJS and Redux</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h3>Top Games</h3>
          </div>
        </div>
      </div>
    )
  }
}
