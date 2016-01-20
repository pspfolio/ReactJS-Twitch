import React from 'react';
import ReactDom from 'react-dom';
import Router, {Route} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';
import TopGames from './containers/TopGames';
import Streams from './containers/Streams';
//import Frontpage from './containers/Frontpage';

const routes = <Route component={App}>
  <Route path="/" component={TopGames} />
  <Route path="/streams/:game" component={Streams} />
</Route>;

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
)
