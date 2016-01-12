import React, {Component} from 'react';

export default class TopGames extends Component {
  render() {
    return (
      <div>
      <h2>TopGames</h2>

        {this.props.games.map(item =>
          <div key={item.game._id}>
            <h3>{item.game.name}</h3>
            <img src={item.game.box.large} alt="stream twitch game" />
          </div>
        )}
      </div>
    )
  }
}
