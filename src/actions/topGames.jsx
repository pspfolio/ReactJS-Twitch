import fetch from 'isomorphic-fetch';

export const REQUEST_GAMES = 'REQUEST_GAMES';
export const RECEIVE_GAMES = 'RECEIVE_GAMES';

function requestGames(twitch){
  return {
    type: REQUEST_GAMES,
    twitch
  }
};


function receiveGames(twitch, json) {
  return {
    type: RECEIVE_GAMES,
    twitch,
    nextUrl: json._links.next,
    items: json.top,
    received: Date.now()
  }
};

// Calling this function with store.dispatch('TopGames', 'url');
export function fetchData(twitch, url) {
  return dispatch => {
    dispatch(requestGames(twitch));
    return fetch(url).then(response => response.json()).then((json) => {
      dispatch(receiveGames(twitch, json))
    }

    )
  }
};

function shouldFetch(state){
  const items = state['topGames'];
  console.log(items);
  if(Object.keys(items).length === 0 || (Date.now() - items.lastUpdated) > 500000) {
    return true;
  } else if(items.isFetching) {
    return false;
  } else {
    return false;
  }

}

export function fetchIfNeeded(twitch, url){
  return(dispatch, getState) => {
    if(shouldFetch(getState(), twitch)) {
      console.log("fething");
      return dispatch(fetchData(twitch, url));
    } else {
      console.log("notfetcing");
      return Promise.resolve();
    }

   }
}
