import React from 'react';
import ReactDom from 'react-dom';
import TopGames from './components/TopGames';
import DummyData from './dummydata';

ReactDom.render(
  <TopGames topGames={DummyData} />,
  document.getElementById('app')
)
