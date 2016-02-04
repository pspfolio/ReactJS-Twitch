import '../styles/components/Games.scss';
import React, { Component } from 'react';
import Game from './Game';
import ButtonTwitch from './ButtonTwitch';

export default class Games extends Component {
    render() {
      const { games, frontpage } = this.props;
      return(
          <div>
              <div className="row">
                  <ul>
                      {games.map(game =>
                          <li className="games-list" key={game.game._id + game.viewers}>
                              <Game name={game.game.name} imgUrl={game.game.box.large} />
                          </li>
                      )}
                  </ul>
              </div>
              <div className="row text-center">
                  {!frontpage ? <ButtonTwitch text={'More Games'} clickHandler={this.props.handleMoreGames} /> : null }
              </div>
          </div>
      )
    }
}

Games.propTypes = {
  games: React.PropTypes.array
}
