
const basicState = {
    streamId: 0,
    mode: 'stopped'
}
export default function player(state = basicState, action) {
    switch (action.type) {
        case 'PLAY_STREAM':
            return Object.assign({}, state, {
                streamId: action.streamId,
                mode: 'playing'
            });
        case 'STOP_STREAM':
            return Object.assign({}, basicState);
        default:
            return state;
    }
}
