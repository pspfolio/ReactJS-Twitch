import { combineReducers } from 'redux';
import games from './games';
import streams from './streams';

export default combineReducers({
  games,
  streams
});
