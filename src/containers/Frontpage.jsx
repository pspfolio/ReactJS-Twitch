import '../styles/containers/FrontPage.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIfNeeded } from '../actions/topGames';
import Games from '../components/Games';

var images = {
  twitchLogoPath: '../images/twitch_logo.png'
}

class FrontPage extends Component {
  render() {
    const { games, dispatch } = this.props;
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
            <p className="lead-text">Find more games <a href='#/topGames'>here</a></p>
            <Games games={games} dispatch={dispatch} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { topGames } = state;
  const { isFetching, items: games } = topGames.games || { isFetching: false, items: [] };
  return {
    isFetching,
    games: games.slice(0,4)
  }
}

export default connect(mapStateToProps)(FrontPage);
