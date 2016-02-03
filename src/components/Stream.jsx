import React, {Component} from 'react';

export default class Stream extends Component {
  render() {
    const { stream, handleStreamClick } = this.props;
    return(
        <div className="col-xs-12 col-sm-4 col-lg-3">
            <img src={stream.preview.medium} alt="stream twitch" onClick={handleStreamClick.bind(this, stream._id)}/>
            <p>{stream.channel.status}</p>
            <p className="small">Followers: {stream.channel.followers}</p>
            <p className="small">Views: {stream.channel.views}</p>
      </div>
    )
  }
}
