import React, { Component } from 'react';
import Game from './Game';
import ButtonTwitch from './ButtonTwitch';

export default class Games extends Component {
    render() {
      const { games } = this.props;
      return(
          <div>
              <div className="row text-center">
                  {games.map(game =>
                      <Game name={game.game.name} imgUrl={game.game.box.large} key={game.game._id + game.viewers} />
                  )}
              </div>
              <div className="row text-center">
                  <ButtonTwitch text={'More Games'} clickHandler={this.props.handleMoreGames} />
              </div>
          </div>
      )
    }
}

Games.propTypes = {
  games: React.PropTypes.array
}
