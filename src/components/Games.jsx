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
                      {games.map((game, i) =>
                          <li className="games-list" key={i}>
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
/*
_id: 21779
_links: Object
box: Object
giantbomb_id: 24024
*/
