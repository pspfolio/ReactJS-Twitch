import '../styles/components/Navigation.scss';
import React, { Component } from 'react';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggleShowNavigation = this.toggleShowNavigation.bind(this);
        this.state = {
            showNavigation: false
        }
    }

    toggleShowNavigation() {
        this.setState({showNavigation: !this.state.showNavigation});
    }

    render() {
        const naviOpen = (
                <ul className="navigation">
                    <li><a onClick={this.toggleShowNavigation} className="nav-link" href="#/">Frontpage</a></li>
                    <li><a onClick={this.toggleShowNavigation} className="nav-link" href="#/streams">Streams</a></li>
                    <li><a onClick={this.toggleShowNavigation} className="nav-link" href="#/games">Games</a></li>
                </ul>
        );

        return (
            <nav>
                <i className="ion-navicon" onClick={this.toggleShowNavigation}></i>
                {this.state.showNavigation ? naviOpen : null}
            </nav>
        )
    }
}
