import {all, put, takeLatest} from "redux-saga/effects";
import Actions, {fetchTimersFailure, fetchTimersSuccess, saveTimer} from "./actions";
import moment from 'moment';
import {performApiRequest} from "../common/commonSagas";
import * as api from '../../service/api';

export default function() {
    return all([
        takeLatest(Actions.FETCH_ALL_EVENTS, handleFetchEventGroups),
        takeLatest(Actions.NEW_EVENT, handleSaveEvent)
    ])
}

function* handleFetchEventGroups() {
    try {
        const [result] = yield* performApiRequest(api.fetchEventGroups, {});
        if (!result) return;

        yield put(fetchTimersSuccess(result));
    } catch (error) {
        yield put(fetchTimersFailure(error));
    }
}

function* handleSaveEvent({payload}) {
    try {
        const [result] = yield* performApiRequest(payload);
        if (!result) return;

        yield put(saveTimer(result));
    } catch (error) {
        console.log(error);
    }
}

const result = [
    {id: 1, title: 'end +1d', createdAt: moment().subtract(1, 'days'), endTime: moment().add(1, 'days'), description: 'Descr #1'},
    {id: 2, title: 'end +1h', createdAt: moment().subtract(2, 'days'), endTime: moment().add(1, 'hours')},
    {id: 3, title: 'end +1m', createdAt: moment().subtract(1, 'days'), endTime: moment().add(1, 'minutes')},
    {id: 4, title: 'end +30m', createdAt: moment().subtract(1, 'hour'), endTime: moment().add(30, 'minutes')},
    {id: 5, title: 'end +15s', createdAt: moment().subtract(1, 'minutes'), endTime: moment().add(15, 'seconds')}
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