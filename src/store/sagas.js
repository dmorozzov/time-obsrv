import {all} from 'redux-saga/effects';
import eventSagas from '../components/event/eventSagas';
import commonSagas from '../components/common/commonSagas';

export default function* () {
    yield all([
        eventSagas(),
        commonSagas()
    ]);
}
