import React from 'react';

export default React.createClass({
  render() {
    return(
      <div>
        <nav>
          <h3>Redux Twitch</h3>
        </nav>
        <div className="container cont">
          {this.props.children}
        </div>
      </div>
    );
  }
});
