import { expect } from 'chai';
import player from '../src/reducers/player';

describe('Player Reducer', () => {
    it('PLAY_STREAM add mode to playing and streamId', () => {
        var action = {
            type: 'PLAY_STREAM',
            streamId: 1
        };
        var nextState = player(undefined, action);

        expect(nextState.streamId).to.equal(1);
        expect(nextState.mode).to.equal('playing');
    });

    it('STOP_STREAM mode to stopped and streamId to zero', () => {
        var initState = {
            streamId: 1,
            mode: 'playing'
        };
        var action = {
            type: 'STOP_STREAM'
        };
        var nextState = player(initState, action);

        expect(nextState.streamId).to.equal(0);
        expect(nextState.mode).to.equal('stopped');
    });
})
