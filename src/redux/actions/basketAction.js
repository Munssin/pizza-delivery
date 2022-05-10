import {
    ADD_PRODUCT_TO_BASKET,
    ADD_PRODUCT_TO_BASKET_STARTED,
    FETCH_PRODUCT_ITEMS,
    FETCH_PRODUCT_ITEMS_STARTED
} from "../types";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {ApiService} from "../../helpers/api-service";

export const addProductToBasket = (product) => ({
     type: ADD_PRODUCT_TO_BASKET,
     payload: {product}
})


function* addProductToBasketWorker(dataProduct){
    console.log(dataProduct)
    try {
        const data = yield call(ApiService.create, "dataBasket", dataProduct.payload.product);
        yield put({
            type: ADD_PRODUCT_TO_BASKET_STARTED,
            payload: {product: data},
        })
    } catch (error){
        console.log(error);
    }
}

function* addProductToWatcher(){
    yield takeEvery(ADD_PRODUCT_TO_BASKET, addProductToBasketWorker)
}


function* fetchBasketWorker(){
    const data = yield call(ApiService.load, "dataBasket");
    yield put({
        type: FETCH_PRODUCT_ITEMS_STARTED,
        payload: {item: data},
    })
    console.log(data);
}

function* fetchBasketWatcher(){
    yield takeEvery(FETCH_PRODUCT_ITEMS, fetchBasketWorker)
}

export function* basketWatcher(){
    yield all([
        fork(addProductToWatcher),
        fork(fetchBasketWatcher),
    ])
}

