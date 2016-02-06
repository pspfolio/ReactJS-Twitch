
export const PLAY_STREAM = 'PLAY_STREAM';
export const STOP_STREAM = 'STOP_STREAM';

export function playStream(streamId) {
    return {
        type: 'PLAY_STREAM',
        streamId: streamId,
    }
}

export function stopStream() {
    console.log("stopping");
    return {
        type: 'STOP_STREAM'
    }
}
