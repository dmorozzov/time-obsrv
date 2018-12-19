import { combineReducers } from 'redux';
import Actions from '../actions/actions';

const initialState = {
    timers: [],
    fetching: false
};
function timersReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.ADD_NEW_TIMER:
            return handleAddNewTimer(state, action);
        case Actions.GET_ALL_TIMERS:
            return handleFetchingTimers(state);
        case Actions.GET_ALL_TIMERS_SUCCESS:
            return handleFetchingTimersSuccess(state, action);
        case Actions.GET_ALL_TIMERS_FAILURE:
            return handleFetchingTimersFailure(state, action);
    }
    return state;
}

function handleAddNewTimer(state, action) {
    return Object.assign({}, state, {
        timers: state.timers.concat(action.payload)
    });
}

function handleFetchingTimers(state) {
    return { ...state, fetching: true, error: null };
}

function handleFetchingTimersSuccess(state, action) {
    return { ...state,  timers: action.payload, fetching: false, error: null };
}

function handleFetchingTimersFailure(state, action) {
    return { ...state,  timers: [], fetching: false, error: action.error };
}


const reducers = {
    timerState: timersReducer
};

export default function(state, action) {
    return combineReducers(reducers)(state, action);
}