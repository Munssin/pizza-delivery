import { all, fork, takeEvery, call, put } from "redux-saga/effects";
import { FETCH_SALAT, FETCH_SALAT_SUCCESS } from "../types";
import { ApiService } from "../../helpers/api-service";

export const fetchSalat = () => ({
    type: FETCH_SALAT,
});

function* fetchSalatWorker() {
    const data = yield call(ApiService.load, "dataSalat");
    yield put({
        type: FETCH_SALAT_SUCCESS,
        payload: {data},
    })
}

function* fetchSalatWatcher() {
    yield takeEvery(FETCH_SALAT, fetchSalatWorker)
}

export function* salatWatcher() {
    yield all([
        fork(fetchSalatWatcher),
    ])
}