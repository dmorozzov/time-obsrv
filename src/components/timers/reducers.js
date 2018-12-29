import Actions from '@src/components/timers/actions';
import {List} from 'immutable/dist/immutable';

const initialState = {
    timers: [],
    fetching: false
};
export default function(state = initialState, action) {
    switch (action.type) {
        case Actions.SAVE_TIMER:
            return handleSaveTimer(state, action);
        case Actions.GET_ALL_TIMERS:
            return handleFetchingTimers(state);
        case Actions.GET_ALL_TIMERS_SUCCESS:
            return handleFetchingTimersSuccess(state, action);
        case Actions.GET_ALL_TIMERS_FAILURE:
            return handleFetchingTimersFailure(state, action);
    }
    return state;
}

function handleSaveTimer(state, action) {
    return state.updateIn(['timers'], List(), (timers) => timers.push({...action.payload[action.payload.length - 1]}));
}

function handleFetchingTimers(state) {
    return state.set('fetching', true).set('error', null);
    // return state.updateIn(['timerState'], Map(),
    //     (state) => state.set('fetching', true).set('error', null));
    //return { ...state, fetching: true, error: null };
}

function handleFetchingTimersSuccess(state, action) {
    return state.set('fetching', false).set('timers', List(action.payload)).set('error', null);
}

function handleFetchingTimersFailure(state, action) {
    return state.set('fetching', false).set('timers', List()).set('error', action.error);
}