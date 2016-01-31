import React, {Component} from 'react';
import {connect} from 'react-redux';
import Games from '../components/Games';

class TopGames extends Component {
  render() {
      return (
          <div className="container">
              <h2>TopGames</h2>
              <Games {...this.props} />
          </div>
      )
  }
};

function mapStateToProps(state) {
  const { games } = state;
  const { isFetching, items: topGames, nextUrl} = games.games || {isFetching: true, items: [], nextUrl: ''};
  return {
    games: topGames,
    isFetching,
    nextUrl
  }
};

export default connect(mapStateToProps)(TopGames);
