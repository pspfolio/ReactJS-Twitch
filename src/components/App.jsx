import React from 'react';

export default React.createClass({
  render() {
    return(
      <div>
        <nav>
          <h2>Redux Twitch</h2>
        </nav>
        {this.props.children}
      </div>
    );
  }
});
