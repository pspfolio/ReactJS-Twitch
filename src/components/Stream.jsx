import '../styles/components/Stream.scss';
import React, {Component, PropTypes} from 'react';

export default class Stream extends Component {
  render() {
    const { stream, handleStreamClick } = this.props;
    const cardHeaderStyle = {
        backgroundImage: 'url(' + stream.preview.medium + ')',
    }
    return(
        <div className="twitch-card">
            <div className="twitch-card-header" style={cardHeaderStyle}></div>
            <div className="twitch-card-body">
                <div className="play-button" onClick={handleStreamClick.bind(this, stream._id)}></div>
                <h3 className="twitch-card-name">{stream.channel.name}</h3>
                <p className="twitch-card-lead">{stream.channel.status}</p>
            </div>
            <div className="twitch-card-footer">
                <ul>
                    <li>
                        <p className="">{stream.viewers} <span className="small-text">viewers</span></p>
                    </li>
                    <li>
                        <p className="">{stream.channel.followers} <span className="small-text">followers</span></p>
                    </li>
                    <li>
                        <p className="">{stream.channel.language} <span className="small-text">language</span></p>
                    </li>
                </ul>
            </div>
      </div>
    )
  }
}

Stream.propTypes = {
    stream: PropTypes.object.isRequired,
    handleStreamClick: PropTypes.func
}
