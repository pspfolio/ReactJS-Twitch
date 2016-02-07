import '../styles/containers/App.scss';
import React from 'react';
import Navigation from '../components/Navigation';

export default React.createClass({
  render() {
    return(
      <div>
        <Navigation />
        <div className="container-full">
          {this.props.children}
        </div>
      </div>
    );
  }
});
