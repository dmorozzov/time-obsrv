const Actions = {
    ADD_NEW_TIMER: 'to.ADD_NEW_TIMER',
    GET_ALL_TIMERS: 'to.GET_ALL_TIMERS',
    GET_ALL_TIMERS_SUCCESS: 'to.GET_ALL_TIMERS_SUCCESS',
    GET_ALL_TIMERS_FAILURE: 'to.GET_ALL_TIMERS_FAILURE',
};

export default Actions;

export function newTimer(payload) {
    return { type: Actions.ADD_NEW_TIMER, payload }
};

export function fetchTimers() {
    return { type: Actions.GET_ALL_TIMERS }
};

export function fetchTimersSuccess(payload) {
    return { type: Actions.GET_ALL_TIMERS_SUCCESS, payload }
};

export function fetchTimersFailure(error) {
    return { type: Actions.GET_ALL_TIMERS_FAILURE, error }
};