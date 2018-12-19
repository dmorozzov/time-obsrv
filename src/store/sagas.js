import { all, call, put, takeLatest } from 'redux-saga/effects';
import Actions, { fetchTimersFailure, fetchTimersSuccess } from '../actions/actions';

function mockFetchTimers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, title: 'success!'},
                {id: 2, title: 'success2'},
                {id: 3, title: 'success3'},
                {id: 4, title: 'success4'}
            ])
        }, 3000);
    });
}

function* handleFetchTimers() {
    try {
        const response = yield call(mockFetchTimers);
        yield put(fetchTimersSuccess(response));

    } catch (error) {
        yield put(fetchTimersFailure(error));
    }
}
// will move to separate component
function timerActionWatchers() {
    return all([
        takeLatest(Actions.GET_ALL_TIMERS, handleFetchTimers)
    ]);
}

export default function* () {
    yield all([
        timerActionWatchers(),
    ]);
}
