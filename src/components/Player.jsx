import React, { Component } from 'react';

export default class Player extends Component {
    render() {

        const style = {
            position: 'fixed',
            bottom: '0',
            left: '10px'
        };

        const { streams, selectedStream } = this.props;
        var stream = streams.filter(function(stream) {
            return stream._id === selectedStream.streamId
        });
        let player;
        if(stream.length > 0) {
            const uri = 'http://player.twitch.tv/?channel=' + stream[0].channel.display_name;
            player = (
                <div style={style}>
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
