import '../styles/components/Player.scss';
import React, { Component, PropTypes } from 'react';
import { stopStream } from '../actions/player';

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.handleCloseStream = this.handleCloseStream.bind(this);
    }

    handleCloseStream() {
        const { dispatch } = this.props;
        dispatch(stopStream());
    }

    render() {
        const { streams, selectedStream } = this.props;
        // Filtering our selected stream from streams result set
        var stream = streams.filter(function(stream) {
            return stream._id === selectedStream.streamId;
        });
        let player;
        if(stream.length > 0) {
            const uri = 'http://player.twitch.tv/?channel=' + stream[0].channel.display_name;
            player = (
                <div className="player">
                    <span className="close-icon" onClick={this.handleCloseStream}></span>
                <iframe
                    src={uri}
                    height='350px'
                    width='600px'
                    allowFullScreen='true'
                    frameBorder='0'
                    ></iframe>
                </div>
            )
        } else {
            player=(<div></div>)
        }
        return(
            <div>
                {player}
            </div>
        )
    }
}

Player.propTypes = {
    dispatch: PropTypes.func.isRequired,
    streams: PropTypes.array.isRequired,
    selectedStream: React.PropTypes.object.isRequired
}
