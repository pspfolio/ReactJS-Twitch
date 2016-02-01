import '../styles/containers/FrontPage.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Games from './Games';
import Streams from './Streams';

var images = {
  twitchLogoPath: '../images/twitch_logo.png'
}

export default class FrontPage extends Component {
  render() {
    const limitResults = 4;
    return(
      <div>
        <div className="frontpage-top">
          <div className="frontpage-logo">
            <img src={images.twitchLogoPath} alt="twitch logo" />
            <h1>Twitch with ReactJS and Redux</h1>
          </div>
        </div>
        <div className="container container-frontpage">
          <div className="row">
            <h3>Top Games</h3>
            <p className="lead-text">Find more games <a href='#/games'>here</a></p>
            <Games limitResults={limitResults} />
          </div>
          <div className="row whitespace-top">
            <h3>Top Streams</h3>
            <p className="lead-text">Find more streams <a href='#/streams'>here</a></p>
            <Streams limitResults={limitResults}/>
          </div>
        </div>
      </div>
    )
  }
}
