import React, {Component} from 'react';

export default class Stream extends Component {
  render() {
    const { stream } = this.props;
    return(
      <div className="col-xs-12 col-sm-6 col-lg-4">
        <img src={stream.preview.medium} alt="stream twitch" />
        <p>{stream.channel.status}</p>
        <p className="small">Followers: {stream.channel.followers}</p>
        <p className="small">Views: {stream.channel.views}</p>
      </div>
    )
  }
}
