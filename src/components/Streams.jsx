import React, { Component } from 'react';
import Stream from './Stream';
import Player from './Player';

export default class TopStreams extends Component {
    render() {
        const { streams, selectedStream, handleStreamClick  } = this.props;
        return(
            <div className="row text-center">
                {streams.map(stream =>
                    <Stream stream={stream} handleStreamClick={handleStreamClick} key={stream._id}/>
                )}
                <Player streams={streams} selectedStream={selectedStream} />
            </div>
        )
    }
}
