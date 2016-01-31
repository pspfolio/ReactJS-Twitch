import React, { Component } from 'react';
import Stream from './Stream';
import {fetchData} from '../actions/streams';

export default class TopStreams extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        var uri = 'https://api.twitch.tv/kraken/streams';
        dispatch(fetchData('topStreams', uri));
    }

    render() {
        const { streams } = this.props;
        return(
            <div className="row text-center">
                {streams.map(stream =>
                    <Stream stream={stream} key={stream._id}/>
                )}
            </div>
        )
    }
}
