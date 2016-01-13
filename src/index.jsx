import React from 'react';
import ReactDom from 'react-dom';
import Router, {Route} from 'react-router';
import TopGames from './components/TopGames';
import App from './components/App';
import DummyData from './dummydata';

const routes = <Route component={App}>
  <Route path="/" component={TopGames} />
</Route>;

ReactDom.render(
  <Router>
    {routes}
  </Router>,
  document.getElementById('app')
)
