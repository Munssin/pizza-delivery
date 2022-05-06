import {all, fork, takeEvery, call, put} from "redux-saga/effects";
import {FETCH_DRINK, FETCH_DRINK_STARTED} from "../types";
import {ApiService} from "../../helpers/api-service";


export const fetchDrink = () => ({
    type: FETCH_DRINK,
})

function* fetchDrinkWorker() {
    const data = yield call(ApiService.load, "dataDrink");
    yield put({
        type: FETCH_DRINK_STARTED,
        payload: {drink: data},
    })
    console.log(data);
}

function* fetchDrinkWatcher() {
    yield takeEvery(FETCH_DRINK, fetchDrinkWorker)
}

export function* drinkWatcher() {
    yield all([
        fork(fetchDrinkWatcher),
    ])
}