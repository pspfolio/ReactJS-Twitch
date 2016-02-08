import '../styles/components/Streams.scss';
import React, { Component, PropTypes } from 'react';
import Stream from './Stream';
import Player from './Player';
import ButtonTwitch from './ButtonTwitch';

export default class TopStreams extends Component {
    render() {
        const { streams, selectedStream, handleStreamClick, handleMoreStreams, frontpage, dispatch  } = this.props;
        console.log(frontpage);
        return(
            <div className="row text-center">
                <ul className="card-list">
                {streams.map(stream =>
                    <li className='card-item' key={stream._id}>
                        <Stream stream={stream} handleStreamClick={handleStreamClick}/>
                    </li>
                )}
                </ul>
                <div>
                     {!frontpage ? <ButtonTwitch text={'More Streams'} clickHandler={handleMoreStreams} /> : null }
                </div>
                <Player streams={streams} selectedStream={selectedStream} dispatch={dispatch} />
            </div>
        )
    }
}

TopStreams.propTypes = {
    streams: PropTypes.array.isRequired,
    selectedStream: PropTypes.object.isRequired,
    handleStreamClick: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    frontpage: PropTypes.bool
}
