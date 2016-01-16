import {REQUEST_GAMES, RECEIVE_GAMES} from '../actions/actions';

function items(state = {isFetching: false, items: []}, action) {
  console.log("action", action);
  switch(action.type) {
    case REQUEST_GAMES:
      return Object.assign({}, state, {isFetching: true});
    case RECEIVE_GAMES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.received
      });
  }
};

export default function itemsByTwitch(state = {}, action) {

  switch(action.type){
    case REQUEST_GAMES:
    case RECEIVE_GAMES:
      return Object.assign({}, state, {
        [action.twitch]: items(state[action.twitch], action)
      });
      return test;
    default:
      return state
  }
};
