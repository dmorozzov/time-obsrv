import {all, call, takeEvery} from "redux-saga/effects";
import ActionTypes from './actions';
import * as api from '../../service/api';

export default function () {
    return all([
            takeEvery(ActionTypes.API_REQUEST, performApiRequest),
        ]
    )
}

export function *performApiRequest(payload) {
    let result, err;
    try {
        //const requestBuilder = yield select(createRequestBuilderFromState);
        debugger;
        result = yield call(api.fetchEvents, payload);

    } catch(errCaught) {
        err = errCaught;
        console.error(err);
        // yield put(error({ title: 'Api Error', message: '' + err.message }));
    }

    return [result, err];
}
