const Actions = {
    FETCH_ALL_EVENTS: 'to.FETCH_ALL_EVENTS',
    EVENTS_SUCCESS: 'to.EVENTS_SUCCESS',
    EVENTS_FAILURE: 'to.EVENTS_FAILURE',
    NEW_EVENT: 'to.NEW_EVENT',
    SAVE_EVENT: 'to.SAVE_EVENT',
};

export default Actions;

export function addTimer(payload) {
    return { type: Actions.NEW_EVENT, payload }
}

export function saveTimer(payload) {
    return { type: Actions.SAVE_EVENT, payload }
}

export function fetchEvents() {
    return { type: Actions.FETCH_ALL_EVENTS }
}

export function fetchTimersSuccess(payload) {
    return { type: Actions.EVENTS_SUCCESS, payload }
}

export function fetchTimersFailure(error) {
    return { type: Actions.EVENTS_FAILURE, error }
}