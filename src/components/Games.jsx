import React, { Component } from 'react';
import Game from './Game';
import { fetchIfNeeded } from '../actions/topGames';
import ButtonTwitch from './ButtonTwitch';

export default class Games extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchIfNeeded('games', 'https://api.twitch.tv/kraken/games/top'));
    }

    render() {
      const { games, nextUrl, dispatch } = this.props;
      return(
          <div>
              <div className="row text-center">
                  {games.map(game =>
                      <Game name={game.game.name} imgUrl={game.game.box.large} key={game.game._id + game.viewers} />
                  )}
              </div>
              <div className="row text-center">
                  {nextUrl ? <ButtonTwitch text={'More Games'} dispatch={dispatch} nextUrl={nextUrl} /> : null }
              </div>
          </div>
      )
    }
}

Games.propTypes = {
  games: React.PropTypes.array
}
