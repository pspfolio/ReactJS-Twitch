import React, { Component } from 'react';
import Game from './Game';

export default class Games extends Component {
  render() {
    const { games } = this.props;
    return(
      <div>
        {games.map(game => {
          return <Game name={game.game.name} imgUrl={game.game.box.large} />
        })}
      </div>
    )
  }
}

Games.propTypes = {
  games: React.PropTypes.array
}
