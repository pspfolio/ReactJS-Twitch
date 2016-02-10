import '../styles/components/Games.scss';
import React, { Component, PropTypes } from 'react';
import Game from './Game';
import ButtonTwitch from './ButtonTwitch';

export default class Games extends Component {
    render() {
      const { games, frontpage, moreGamesToFetch, handleMoreGames, totalItemsCountApi } = this.props;
      console.log(totalItemsCountApi);
      return(
          <div>
              <div className="row text-center">
                  <ul>
                      {games.map((game, i) =>
                          <li className="games-list" key={i}>
                              <Game name={game.game.name} imgUrl={game.game.box.large} />
                          </li>
                      )}
                  </ul>
              </div>
              <div className="row text-center">
                  {!frontpage && games.length < totalItemsCountApi ? <ButtonTwitch text={'More Games'} clickHandler={handleMoreGames} /> : null }
              </div>
          </div>
      )
    }
}

Games.propTypes = {
  games: PropTypes.array.isRequired,
  frontpage: PropTypes.bool,
  moreGamesToFetch: PropTypes.bool
}
