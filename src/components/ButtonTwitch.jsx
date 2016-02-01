import React, { Component } from 'react';
import { fetchData } from '../actions/games';

export default class ButtonTwitch extends Component {
    render() {
        const { clickHandler, text } = this.props;
        return(
            <button className="btn btn-primary btn-twitch" onClick={clickHandler}>{text}</button>
        )
    }
}
