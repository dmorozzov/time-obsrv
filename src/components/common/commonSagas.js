import {all, call, put, select, takeEvery, takeLatest} from 'redux-saga/effects';
import ActionTypes, {signInSuccess} from './actions';
import {getAuthToken} from './commonSelectors';
import * as api from '../../service/api';

export default function () {
    return all([
        takeLatest(ActionTypes.SIGN_UP, signUp),
        takeLatest(ActionTypes.SIGN_IN, signIn),
        takeEvery(ActionTypes.API_REQUEST, performApiRequest)
    ])
}

export function* signUp({newUserProfile}) {
    const [result] = yield* performApiRequest(api.signUp, newUserProfile);
    if (!result) {
        console.error('signUp: No result');
        return false;
    }
    return true;
}

export function* signIn({credentials}) {
    const [result] = yield* performApiRequest(api.signIn, credentials);
    if (!result) {
        console.error('signIn: No result');
        return false;
    }
    yield put(signInSuccess(result));
    return true;
}

export function* performApiRequest(apiFunc, payload) {
    let result, err;
    try {
        const jwtToken = yield select(getAuthToken);
        const response = yield call(apiFunc, payload, jwtToken);
        result = response.data;
    } catch (errCaught) {
        err = errCaught;
        console.error(err);
        // yield put(error({ title: 'Api Error', message: '' + err.message }));
    }

    return [result, err];
}
