import Actions from './actions';
import {List} from 'immutable/dist/immutable';

const initialState = {
    events: [],
    fetching: false
};
export default function(state = initialState, action) {
    switch (action.type) {
        case Actions.SAVE_EVENT:
            return handleSaveEvent(state, action);
        case Actions.FETCH_ALL_EVENTS:
            return handleFetchingEvents(state);
        case Actions.EVENTS_SUCCESS:
            return handleFetchingEventsSuccess(state, action);
        case Actions.EVENTS_FAILURE:
            return handleFetchingEventsFailure(state, action);
    }
    return state;
}

function handleSaveEvent(state, action) {
    return state.updateIn(['events'], List(), (timers) => timers.push({...action.payload[action.payload.length - 1]}));
}

function handleFetchingEvents(state) {
    return state.set('fetching', true).set('error', null);
    // return state.updateIn(['timerState'], Map(),
    //     (state) => state.set('fetching', true).set('error', null));
    //return { ...state, fetching: true, error: null };
}

function handleFetchingEventsSuccess(state, action) {
    return state.set('fetching', false).set('events', List(action.payload)).set('error', null);
}

function handleFetchingEventsFailure(state, action) {
    return state.set('fetching', false).set('events', List()).set('error', action.error);
}