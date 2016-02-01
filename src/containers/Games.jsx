import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchIfNeeded, fetchData } from '../actions/games';
import Games from '../components/Games';
import Header from '../components/Header';

class TopGames extends Component {
    constructor(props) {
        super(props);
        this.handleMoreGames = this.handleMoreGames.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        this.handleMoreGames = this.handleMoreGames.bind(this);
        dispatch(fetchIfNeeded('topGames', 'https://api.twitch.tv/kraken/games/top'));
    }

    handleMoreGames() {
        const { dispatch, nextUrl } = this.props;
        dispatch(fetchData('topGames', nextUrl));
    }
    render() {
        return (
            <div className="container">
                <Header headerText={'Top Games'} />
                <Games {...this.props} handleMoreGames={this.handleMoreGames} />
            </div>
        )
    }
};

function mapStateToProps(state, props) {
  const { games } = state;
  const { limitResults } = props;
  const { isFetching, items: topGames, nextUrl} = games.topGames || {isFetching: true, items: [], nextUrl: ''};
  const result = limitResults ? topGames.slice(0, limitResults) : topGames
  return {
    games : result,
    isFetching,
    nextUrl
  }
};

export default connect(mapStateToProps)(TopGames);
