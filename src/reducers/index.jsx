import { combineReducers } from 'redux';
import topGames from './topGames';
import streams from './streams';

export default combineReducers({
  topGames,
  streams
});
