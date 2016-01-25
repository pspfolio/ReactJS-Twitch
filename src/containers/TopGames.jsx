import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData, fetchIfNeeded} from '../actions/topGames';
import Games from '../components/Games';

class TopGames extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIfNeeded('games', 'https://api.twitch.tv/kraken/games/top'));
  }
  render() {
    const { games } = this.props;
    return (
      <div className="row text-center">
        <h2>TopGames</h2>
        <Games games={games} />
      </div>
    )
  }
};

function mapStateToProps(state) {
  const { topGames } = state;
  const { isFetching, items: games} = topGames.games || {isFetching: true, items: []};
  return {
    games,
    isFetching
  }
};

export default connect(mapStateToProps)(TopGames);
