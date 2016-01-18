import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData, fetchIfNeeded} from '../actions/actions';
import Game from './Game';

class TopGames extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIfNeeded('games', 'https://api.twitch.tv/kraken/games/top'));
  }
  render() {
    return (
      <div className="row text-center">
        <h2>TopGames</h2>
          {this.props.games.map(item =>
            <Game game={item.game} key={item.game._id} />
          )}
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
