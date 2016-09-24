import '../styles/containers/FrontPage.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Games from './Games';
import Streams from './Streams';
import Header from '../components/Header';

var images = {
  twitchLogoPath: '../prod/images/twitch_logo.png'
}

export default class FrontPage extends Component {
  render() {
    // Limit how many items to show in frontpage
    const limitResultsGames = 4;
    const limitResultsStreams = 3;
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
            <Header headerText={'Top Games'}>
                <p className="lead-text">Find more games <a href='#/games'>here</a></p>
            </Header>
            <Games limitResults={limitResultsGames} frontpage={true} />
          </div>
          <div className="row">
            <Header headerText={'Top streams'}>
                <p className="lead-text">Find more streams <a href='#/streams'>here</a></p>
            </Header>
            <Streams limitResults={limitResultsStreams} frontpage={true}/>
          </div>
        </div>
      </div>
    )
  }
}
