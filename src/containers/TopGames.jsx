import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData, fetchIfNeeded} from '../actions/topGames';
import Games from '../components/Games';

class TopGames extends Component {
  constructor(props) {
    super(props);
    this.handleMoreGames = this.handleMoreGames.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchIfNeeded('games', 'https://api.twitch.tv/kraken/games/top'));
  }

  handleMoreGames() {
    const { dispatch, nextUrl } = this.props;
    dispatch(fetchData('games', nextUrl));
  }

  render() {
    const { games } = this.props;
    return (
      <div className="container">
          <h2>TopGames</h2>
          <Games {...this.props} handleMoreGames={this.handleMoreGames} />
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
