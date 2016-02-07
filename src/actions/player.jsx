
export const PLAY_STREAM = 'PLAY_STREAM';
export const STOP_STREAM = 'STOP_STREAM';

export function playStream(streamId) {
    return {
        type: 'PLAY_STREAM',
        streamId: streamId,
    }
}

export function stopStream() {
    return {
        type: 'STOP_STREAM'
    }
}
