import fetch from 'isomorphic-fetch';

export const REQUEST_GAMES = 'REQUEST_GAMES';
function requestGames(twitch){
  return {
    type: REQUEST_GAMES,
    twitch
  }
};

export const RECEIVE_GAMES = 'RECEIVE_GAMES';
function receiveGames(twitch, json) {
  return {
    type: RECEIVE_GAMES,
    twitch,
    items: json.top
  }
};

// Calling this function with store.dispatch('TopGames');
export function fetchData(twitch, url) {
  return dispatch => {
    dispatch(requestGames(twitch));
    return fetch(url).then(response => response.json()).then(json =>
      dispatch(receiveGames(twitch, json))
    )
  }
}
