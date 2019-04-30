import {combineReducers} from 'redux';
import eventReducers from '@src/components/event/reducers';
import commonReducers from '@src/components/common/reducers';

const reducers = {
    common: commonReducers,
    events: eventReducers
};

export default function(state, action) {
    return combineReducers(reducers)(state, action);
}