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
    console.log(game, json);
  return {
    type: RECEIVE_STREAMS,
    game,
    items: json,
    received: Date.now()
  }
};

export function fetchData(game, url) {
  return dispatch => {
    dispatch(requestStreams(game));
    return fetch(url).then(response => response.json()).then(json =>
      dispatch(receiveGames(game, json.streams))
    )
  }
}
