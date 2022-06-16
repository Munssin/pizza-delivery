import {
    CLEAR_ALERTS,
    CLEAR_ALERTS_SUCCESS
} from "../types";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";

export const clearAlerts = (key) => ({
    type: CLEAR_ALERTS,
    payload: {key}
});


function* removeAlertWorker(data) {
    try {
        yield put({
            type: CLEAR_ALERTS_SUCCESS,
            payload: {key: data.payload.key}
        })
    } catch (error) {
        console.log(error);
    }
}

function* removeAlertWatcher() {
    yield takeEvery(CLEAR_ALERTS, removeAlertWorker)
}

export function* alertWatcher() {
    yield all([
        fork(removeAlertWatcher)
    ])
}