import { REQUEST_STREAMS, RECEIVE_STREAMS } from '../actions/streams';

function stream(state = {isFetching: false, items: []}, action) {
  switch (action.type) {
    case REQUEST_STREAMS:
      return Object.assign({}, state, {isFetching: true});
    case RECEIVE_STREAMS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        lastUpdate: action.received
      });
    default:
      return state;
  }
};

export default function streams(state = {}, action) {
  switch (action.type) {
    case REQUEST_STREAMS:
    case RECEIVE_STREAMS:
      return Object.assign({}, state, {
        [action.game] : stream(state[action.game], action)
      });
    default:
      return state;
  }
};
