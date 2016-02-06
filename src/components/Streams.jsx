import '../styles/components/Streams.scss';
import React, { Component } from 'react';
import Stream from './Stream';
import Player from './Player';

export default class TopStreams extends Component {
    render() {
        const { streams, selectedStream, handleStreamClick, dispatch  } = this.props;
        return(
            <div className="row">
                <ul className="card-list">
                {streams.map(stream =>
                    <li className='card-item' key={stream._id}>
                        <Stream stream={stream} handleStreamClick={handleStreamClick}/>
                    </li>
                )}
                </ul>
                <Player streams={streams} selectedStream={selectedStream} dispatch={dispatch} />
            </div>
        )
    }
}
