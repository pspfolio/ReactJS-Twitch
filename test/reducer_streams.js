import {expect} from 'chai';
import streamsReducer from '../src/reducers/streams';

describe('Streams reducers', () => {

  it('RECEIVE_STREAMS handles empty state', () => {
    const action = {
      type: 'RECEIVE_STREAMS',
      items: [{name:'stream1'}, {name: 'stream2'}],
      game: 'test'
    };
    const nextState = streamsReducer(undefined, action);

    expect(nextState.test.items[0].name).equals('stream1');
    expect(nextState.test.isFetching).to.be.false;
  }),

  it('RECEIVE_STREAMS adding new game property', () => {
    const initState = {
      game1: {
        isFetching: false,
        items: [{name:'stream3'}, {name: 'stream4'}],
      }
    };

    const action = {
      type: 'RECEIVE_STREAMS',
      items: [{name:'stream1'}, {name: 'stream2'}],
      game: 'testGame'
    };
    const nextState = streamsReducer(initState, action);

    expect(nextState.game1.items[0].name).to.equal('stream3');
    expect(nextState.testGame.items[0].name).to.equal('stream1');
  }),

  it('RECEIVE_STREAMS setting isFetching to false', () => {
    const initState = {
      game1: {
        isFetching: true
      }
    };

    const action = {
      type: 'RECEIVE_STREAMS',
      items: [{name: 'stream1'}],
      game: 'game1'
    };
    const nextState = streamsReducer(initState, action);

    expect(nextState.game1.isFetching).to.be.false;
    expect(nextState.game1.items[0].name).to.equal('stream1');
  }),

  it('RECEIVE_STREAMS replaces old items', () => {
    const initState = {
      game1: {
        isFetching: false,
        items: [{name:'stream3'}, {name: 'stream4'}],
      }
    };

    const action = {
      type: 'RECEIVE_STREAMS',
      items: [{name: 'stream1'}],
      game: 'game1'
    };

    const nextState = streamsReducer(initState, action);
    expect(nextState.game1.items[0].name).to.equal('stream1');
    expect(nextState.game1.items.length).to.equal(1);
  }),

  it('REQUEST_STREAMS setting isFetching to true', () => {
    const initState = {
      game1: {
        isFetching: false,
        items: [{name:'stream3'}, {name: 'stream4'}],
      }
    };

    const action = {
      type: 'REQUEST_STREAMS',
      game: 'game1'
    };

    const nextState = streamsReducer(initState, action);
    expect(nextState.game1.isFetching).to.be.true;
  })

});
