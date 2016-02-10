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
        dispatch(fetchIfNeeded('topGames', 'https://api.twitch.tv/kraken/games/top?limit=80'));
    }

    handleMoreGames() {
        const { dispatch, nextUrl } = this.props;
        dispatch(fetchData('topGames', nextUrl));
    }

    render() {
        const { limitResults, totalItemsCountApi } = this.props;
        return (
            <div className="container-fluid">
                { !limitResults ? <Header headerText={'Top Games'} /> : null }
                <Games {...this.props} handleMoreGames={this.handleMoreGames} totalItemsCountApi={totalItemsCountApi} />
            </div>
        )
    }
};

function mapStateToProps(state, props) {
  const { games } = state;
  const { limitResults, frontpage } = props;
  const {totalItemsCountApi, isFetching, items: topGames, nextUrl} = games.topGames || {totalItemsCountApi: 0, isFetching: true, items: [], nextUrl: ''};
  const result = frontpage && limitResults ? topGames.slice(0, limitResults) : topGames;
  return {
    games : result,
    isFetching,
    nextUrl,
    totalItemsCountApi
  }
};

export default connect(mapStateToProps)(TopGames);
