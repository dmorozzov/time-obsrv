import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import {Map} from 'immutable';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
    events: Map(),
    common: Map()
};

const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;