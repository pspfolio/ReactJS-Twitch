import React, { Component } from 'react';
import Stream from './Stream';
import { fetchData } from '../actions/streams';

export default class Streams extends Component {
    componentDidMount() {
        const { dispatch, gameName } = this.props;
        var uri = 'https://api.twitch.tv/kraken/streams?game=' + gameName;
        dispatch(fetchData(gameName, uri));
    }
    render() {
        const { streams } = this.props;
        return(
            <div className="row text-center">
                {streams.map(stream =>
                    <Stream stream={stream} key={stream._id}></Stream>
                )}
            </div>
        )
    }
}
