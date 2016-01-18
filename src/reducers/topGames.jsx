import { REQUEST_GAMES, RECEIVE_GAMES } from '../actions/topGames';

function items(state = {isFetching: false, items: []}, action) {
  switch (action.type) {
    case REQUEST_GAMES:
      return Object.assign({}, state, {isFetching: true});
    case RECEIVE_GAMES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdated: action.received
      });
    default:
      return state;
  }
};

export default function itemsByTwitch(state = {}, action) {
  switch (action.type){
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
