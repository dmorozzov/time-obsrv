const Actions = {
    GET_ALL_TIMERS: 'to.GET_ALL_TIMERS',
    GET_ALL_TIMERS_SUCCESS: 'to.GET_ALL_TIMERS_SUCCESS',
    GET_ALL_TIMERS_FAILURE: 'to.GET_ALL_TIMERS_FAILURE',
    ADD_TIMER: 'to.ADD_TIMER',
    SAVE_TIMER: 'to.SAVE_TIMER',
};

export default Actions;

export function addTimer(payload) {
    return { type: Actions.ADD_TIMER, payload }
}

export function saveTimer(payload) {
    return { type: Actions.SAVE_TIMER, payload }
}

export function fetchTimers() {
    return { type: Actions.GET_ALL_TIMERS }
}

export function fetchTimersSuccess(payload) {
    return { type: Actions.GET_ALL_TIMERS_SUCCESS, payload }
}

export function fetchTimersFailure(error) {
    return { type: Actions.GET_ALL_TIMERS_FAILURE, error }
}