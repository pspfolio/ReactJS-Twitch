import React from 'react';
import DummyData from '../dummydata';

export default React.createClass({
  render() {
    return React.cloneElement(this.props.children, {topGames: DummyData});
  }
});
