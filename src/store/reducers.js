import {combineReducers} from 'redux';
import eventReducers from '@src/components/event/reducers';
import commonReducers from '@src/components/common/reducers';
import {reducer as formReducer} from 'redux-form';

const reducers = {
    common: commonReducers,
    events: eventReducers,
    form: formReducer
};

export default function(state, action) {
    return combineReducers(reducers)(state, action);
}
