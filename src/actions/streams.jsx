import fetch from 'isomorphic-fetch';

export const REQUEST_STREAMS = 'REQUEST_STREAMS';
export const RECEIVE_STREAMS = 'RECEIVE_STREAMS';

function requestStreams(game) {
  return {
    type: REQUEST_STREAMS,
    game
  }
};

function receiveGames(game, json) {
  return {
    type: RECEIVE_STREAMS,
    game,
    items: json.streams,
    received: Date.now(),
    nextUrl: json._links.next
  }
};

export function fetchData(game, url) {
  return dispatch => {
    dispatch(requestStreams(game));
    return fetch(url).then(response => response.json()).then((json) => {
      dispatch(receiveGames(game, json))
      }
    )
  }
}

function shouldFetch(state, game) {
    var items = state[game] ? state[game] : [];
    if(Object.keys(items).length === 0) {
        return true;
    } else if(items.isFetching) {
        return false;
    } else {
        return false;
    }
}

export function fetchStreamsIfNeeded(game, url) {
    return (dispatch, getState) => {
        var streamState = getState()['streams'];
        if(shouldFetch(streamState, game)) {
            return dispatch(fetchData(game, url));
        } else {
            return Promise.resolve();
        }
    }
}
