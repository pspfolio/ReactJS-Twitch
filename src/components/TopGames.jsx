import React, {Component} from 'react';
import Game from './Game';

export default class TopGames extends Component {
  render() {
    return (
      <div className="row text-center">
        <h2>TopGames</h2>
          {this.props.topGames.map(item =>
            <Game game={item.game} key={item.game._id} />
          )}
      </div>
    )
  }
}
