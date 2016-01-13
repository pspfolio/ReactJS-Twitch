import React from 'react';
import { TopGames } from '../dummydata';
import { Streams } from '../dummydata';

export default React.createClass({
  render() {
    return React.cloneElement(this.props.children, {topGames: TopGames, streams: Streams});
  }
});
