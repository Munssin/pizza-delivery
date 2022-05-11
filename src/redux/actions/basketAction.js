import {
    ADD_PRODUCT_TO_BASKET,
    ADD_PRODUCT_TO_BASKET_STARTED,
    FETCH_PRODUCT_ITEMS,
    FETCH_PRODUCT_ITEMS_STARTED,
    DELETE_PRODUCT_ITEMS,
    DELETE_PRODUCT_ITEMS_STARTED
} from "../types";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {ApiService} from "../../helpers/api-service";

export const addProductToBasket = (product) => ({
     type: ADD_PRODUCT_TO_BASKET,
     payload: {product}
})

export const fetchProductToBasket = () => ({
     type: FETCH_PRODUCT_ITEMS,
})

export const deleteProductFromBasket = (product) => ({
    type: DELETE_PRODUCT_ITEMS,
    payload: {product}
})


function* addProductToBasketWorker(dataProduct){
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
    const basketData = yield call(ApiService.load, "dataBasket");
    // console.log(basketData);

    yield put({
        type: FETCH_PRODUCT_ITEMS_STARTED,
        payload: {product: basketData},
    })
}

function* fetchBasketWatcher(){
    yield takeEvery(FETCH_PRODUCT_ITEMS, fetchBasketWorker)
}

function* deleteProductFromBasketWorker(dataDeleteProduct){
    console.log(dataDeleteProduct)
    try {
        const data = yield call(ApiService.remove, "dataBasket", dataDeleteProduct.payload.product);
        yield put({
            type: DELETE_PRODUCT_ITEMS_STARTED,
            payload: {product: data},
        })
    } catch (error){
        console.log(error);
    }
}

function* deleteProductFromBasketWatcher(){
    yield takeEvery(DELETE_PRODUCT_ITEMS, deleteProductFromBasketWorker)
}

export function* basketWatcher(){
    yield all([
        fork(addProductToWatcher),
        fork(fetchBasketWatcher),
        fork(deleteProductFromBasketWatcher),
    ])
}

