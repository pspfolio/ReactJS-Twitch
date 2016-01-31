import React, { Component } from 'react';
import { fetchData } from '../actions/games';

export default class ButtonTwitch extends Component {
    constructor(props) {
      super(props);
      this.handleMoreGames = this.handleMoreGames.bind(this);
    }

    handleMoreGames() {
      const { dispatch, nextUrl } = this.props;
      dispatch(fetchData('topGames', nextUrl));
    }

    render() {
        const { clickHandler, text } = this.props;
        return(
            <button className="btn btn-primary btn-twitch" onClick={this.handleMoreGames}>{text}</button>
        )
    }
}
