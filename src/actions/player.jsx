
export const PLAY_STREAM = 'PLAY_STREAM';
export const STOP_STREAM = 'STOP_STREAM';

function playingStream(streamId) {
    return {
        type: 'PLAY_STREAM',
        streamId: streamId,
    }
}

function stopStream() {
    return {
        type: 'STOP_STREAM'
    }
}
