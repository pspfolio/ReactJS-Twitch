import '../styles/components/Games.scss';
import React, { Component } from 'react';
import Game from './Game';
import ButtonTwitch from './ButtonTwitch';

export default class Games extends Component {
    render() {
      const { games, frontpage, moreGamesToFetch } = this.props;
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
                  {!frontpage && moreGamesToFetch ? <ButtonTwitch text={'More Games'} clickHandler={this.props.handleMoreGames} /> : null }
                  {!frontpage && !moreGamesToFetch ? <p className="lead">Sorry no more games for you :(</p> : null }
              </div>
          </div>
      )
    }
}

Games.propTypes = {
  games: React.PropTypes.array
}
