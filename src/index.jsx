import React from 'react';
import ReactDom from 'react-dom';
import TopGames from './components/TopGames';

var games = ['CS', 'LoL'];

ReactDom.render(
  <TopGames games={games} />,
  document.getElementById('app')
)
