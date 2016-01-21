import '../styles/containers/App.scss';
import React from 'react';

export default React.createClass({
  render() {
    return(
      <div>
        <nav>
        </nav>
        <div className="container-full">
          {this.props.children}
        </div>
      </div>
    );
  }
});
