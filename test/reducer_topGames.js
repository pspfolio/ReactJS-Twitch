import {expect} from 'chai';
import itemsByTwitch from '../src/reducers/topGames';

describe('TopGames Reducer', () => {

  it('RECEIVE_GAMES handles empty state', () => {
    const action = {
      type: 'RECEIVE_GAMES',
      twitch: 'TopGames',
      items: [{Name: 'Stream1'}, {Name: 'Stream2'}]
    };

    var nextState = itemsByTwitch(undefined, action);
    expect(nextState.TopGames.items.length).to.equal(2);
  }),

  it('RECEIVE_GAMES adding games to state', () => {
    const initState = {};
    const action = {
      type: 'RECEIVE_GAMES',
      twitch: 'TopGames',
      items: [{Name: 'Stream1'}, {Name: 'Stream2'}]
    };

    var nextState = itemsByTwitch(initState, action);
    expect(nextState.TopGames.items.length).to.equal(2);
    expect(nextState.TopGames.items[0].Name).to.equal('Stream1');
  }),

  it('RECEIVE_GAMES set isFetching to false', () => {
    var initState = {
      TopGames: {
        isFetching: true,
        items: []
      }
    };

    var action = {
      type: 'RECEIVE_GAMES',
      twitch: 'TopGames',
      items: [{Name: 'Stream1'},{Name: 'Stream2'}]
    };

    var nextState = itemsByTwitch(initState, action);
    expect(nextState.TopGames.isFetching).to.be.false;
  }),

  it('RECEIVE_GAMES adding items to items list', () => {
    var initState = {
      TopGames: {
        isFetching: false,
        items: [{Name: 'Stream1'},{Name: 'Stream2'}]
      }
    };

    var action = {
      type: 'RECEIVE_GAMES',
      twitch: 'TopGames',
      items: [{Name: 'Stream3'},{Name: 'Stream4'}]
    };

      var nextState = itemsByTwitch(initState, action);
      expect(nextState).not.to.be.null;
      expect(nextState.TopGames.items[1].Name).to.equal('Stream2');
      expect(nextState.TopGames.items[3].Name).to.equal('Stream4');
  }),

  it('REQUEST_GAMES sets isFething to true', () => {
    var initState = {};
    const action = {
      type: 'REQUEST_GAMES',
      twitch: 'TopGames'
    }

    var nextState = itemsByTwitch(initState, action);
    expect(nextState.TopGames.isFetching).to.be.true;
  })
});
