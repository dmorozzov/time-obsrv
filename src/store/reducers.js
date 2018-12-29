import {combineReducers} from 'redux';
import timerReducers from '@src/components/timers/reducers';
import commonReducers from '@src/components/common/reducers';

const reducers = {
    common: commonReducers,
    timer: timerReducers
};

export default function(state, action) {
    return combineReducers(reducers)(state, action);
}