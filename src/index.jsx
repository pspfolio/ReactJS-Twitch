import React from 'react';
import ReactDom from 'react-dom';
import Router, {Route} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import TopGames from './components/TopGames';
import Streams from './components/Streams';
import DummyData from './dummydata';

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
