import React, {Component} from 'react';
import {connect} from 'react-redux';
import Games from '../components/Games';

class TopGames extends Component {
  render() {
      const { games, dispatch } = this.props;
      return (
          <div className="container">
              <h2>TopGames</h2>
              <Games {...this.props} />
          </div>
      )
  }
};

function mapStateToProps(state) {
  const { topGames } = state;
  const { isFetching, items: games, nextUrl} = topGames.games || {isFetching: true, items: [], nextUrl: ''};
  return {
    games,
    isFetching,
    nextUrl
  }
};

export default connect(mapStateToProps)(TopGames);
