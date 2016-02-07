import React, { Component } from 'react';
import { fetchData } from '../actions/games';

export default class ButtonTwitch extends Component {
    render() {
        const { clickHandler, text } = this.props;
        const style = {
            marginTop: '20',
            marginBottom: '30',
            padding: '10',
            backgroundColor: '#6441A5',
            border: 'none'
        }
        return(
            <button style={style} className="btn btn-primary btn-twitch" onClick={clickHandler}>{text}</button>
        )
    }
}
