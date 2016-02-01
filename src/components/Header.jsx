import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        const { headerText } = this.props;
        return(
            <div>
                <h3>{headerText}</h3>
                {this.props.children}
            </div>
        )
    }
}
