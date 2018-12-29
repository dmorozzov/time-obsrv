import {all, call, put, takeLatest} from 'redux-saga/effects';
import Actions, {fetchTimersFailure, fetchTimersSuccess, saveTimer} from '../components/timers/actions';
import moment from 'moment';

const result = [
    {id: 1, title: 'success1', endTime: moment()},
    {id: 2, title: 'success2', endTime: moment()},
    {id: 3, title: 'success3', endTime: moment()},
    {id: 4, title: 'success4', endTime: moment()}
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function mockFetchTimers(payload) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (payload) result.push({id: getRandomInt(100), ...payload});
            resolve(result)
        }, 1000);
    });
}

export function *performApiRequest(payload) {
    let result, err;
    try {
        //const requestBuilder = yield select(createRequestBuilderFromState);

        result = yield call(() => mockFetchTimers(payload));

    } catch(errCaught) {
        err = errCaught;
        console.error(err);
        // yield put(error({ title: 'Api Error', message: '' + err.message }));
    }

    return [result, err];
}

function* handleSaveTimer({payload}) {
    try {
        const [result] = yield* performApiRequest(payload);
        if (!result) return;

        yield put(saveTimer(result));
    } catch (error) {
        console.log(error);
    }
}

function* handleFetchTimers() {
    try {
        const [result] = yield* performApiRequest();
        if (!result) return;

        yield put(fetchTimersSuccess(result));
    } catch (error) {
        yield put(fetchTimersFailure(error));
    }
}
// will move to separate component
function timerActionWatchers() {
    return all([
        takeLatest(Actions.GET_ALL_TIMERS, handleFetchTimers),
        takeLatest(Actions.ADD_TIMER, handleSaveTimer)
    ]);
}

export default function* () {
    yield all([
        timerActionWatchers(),
    ]);
}
