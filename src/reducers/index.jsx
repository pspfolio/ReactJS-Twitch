import { combineReducers } from 'redux';
import games from './games';
import streams from './streams';
import selectedStream from './player';

export default combineReducers({
  games,
  streams,
  selectedStream
});
