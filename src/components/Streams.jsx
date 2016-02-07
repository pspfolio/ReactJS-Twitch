import '../styles/components/Streams.scss';
import React, { Component, PropTypes } from 'react';
import Stream from './Stream';
import Player from './Player';

export default class TopStreams extends Component {
    render() {
        const { streams, selectedStream, handleStreamClick, dispatch  } = this.props;
        return(
            <div className="row text-center">
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

TopStreams.propTypes = {
    streams: PropTypes.array.isRequired,
    selectedStream: PropTypes.object.isRequired,
    handleStreamClick: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
}
