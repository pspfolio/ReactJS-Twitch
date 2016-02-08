import { REQUEST_STREAMS, RECEIVE_STREAMS } from '../actions/streams';
import { initState } from '../utils/initState';

function stream(state = initState, action) {
  switch (action.type) {
    case REQUEST_STREAMS:
      return Object.assign({}, state, {isFetching: true});
    case RECEIVE_STREAMS:
      return Object.assign({}, state, {
        isFetching: false,
        items: state.items.concat(action.items),
        lastUpdated: action.received
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
