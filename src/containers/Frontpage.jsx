import '../styles/containers/FrontPage.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Games from '../components/Games';
import Streams from '../components/Streams';

var images = {
  twitchLogoPath: '../images/twitch_logo.png'
}

class FrontPage extends Component {
  render() {
    const { topGames, topStreams, dispatch } = this.props;
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
            <Games games={topGames.games} dispatch={dispatch} />
          </div>
          <div className="row whitespace-top">
            <h3>Top Streams</h3>
            <p className="lead-text">Find more streams <a href='#/streams'>here</a></p>
            <Streams streams={topStreams.streams} dispatch={dispatch} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { games, streams } = state;
  const { isFetching : gamesFetching, items: topGames } = games.games || { isFetching: false, items: [] };
  const { isFetching : streamsFetching, items: topStreams } = streams.topStreams || { isFetching: false, items: [] };
  return {
      topGames: {
          isFetching: gamesFetching,
          games: topGames.slice(0,4)
      },

      topStreams: {
          isFetching: streamsFetching,
          streams: topStreams.slice(0,4)
      }
  }
}

export default connect(mapStateToProps)(FrontPage);
