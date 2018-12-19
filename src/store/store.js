import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;