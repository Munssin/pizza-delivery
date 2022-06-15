import {
    ADD_PRODUCT_TO_BASKET,
    ADD_PRODUCT_TO_BASKET_SUCCESS,
    FETCH_PRODUCT_ITEMS,
    FETCH_PRODUCT_ITEMS_SUCCESS,
    DELETE_PRODUCT_ITEMS,
    DELETE_PRODUCT_ITEMS_SUCCESS,
    OPEN_BASKET_MODAL_STATUS,
    OPEN_BASKET_MODAL_STATUS_SUCCESS,
    CLOSE_BASKET_MODAL_STATUS,
    CLOSE_BASKET_MODAL_STATUS_SUCCESS,
    ADD_SUCCESS_ALERT
} from "../types";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {ApiService} from "../../helpers/api-service";

export const addProductToBasket = (product) => ({
    type: ADD_PRODUCT_TO_BASKET,
    payload: {product}
});

export const successAddProduct = () => ({
    type: ADD_PRODUCT_TO_BASKET,
});

export const fetchProductToBasket = () => ({
    type: FETCH_PRODUCT_ITEMS,
});

export const deleteProductFromBasket = (product) => ({
    type: DELETE_PRODUCT_ITEMS,
    payload: {product}
})

export const openBasketModalStatus = () => ({
    type: OPEN_BASKET_MODAL_STATUS
});
export const closeBasketModalStatus = () => ({
    type: CLOSE_BASKET_MODAL_STATUS
});


function* addProductToBasketWorker(dataProduct) {
    try {
        const data = yield call(ApiService.create, "dataBasket", dataProduct.payload.product);
        yield put({
            type: ADD_PRODUCT_TO_BASKET_SUCCESS,
            payload: {product: data},
        });
        yield put({
            type: ADD_SUCCESS_ALERT,
            payload: {message: ` ${dataProduct.payload.product.title} додано в корзину `}
        });
        // yield put({
        //     type: CLEAR_ALERTS,
        // });

    } catch (error) {
        console.log(error);
    }
}

function* addProductToBasketWatcher() {
    yield takeEvery(ADD_PRODUCT_TO_BASKET, addProductToBasketWorker)
}

function* fetchBasketWorker() {
    const basketData = yield call(ApiService.load, "dataBasket");

    yield put({
        type: FETCH_PRODUCT_ITEMS_SUCCESS,
        payload: {product: basketData},
    })
}

function* fetchBasketWatcher() {
    yield takeEvery(FETCH_PRODUCT_ITEMS, fetchBasketWorker)
}

function* deleteProductFromBasketWorker(dataDeleteProduct) {
    const productId = dataDeleteProduct.payload.product.id;
    try {
        yield call(ApiService.remove, `dataBasket/${productId}`);
        yield put({
            type: DELETE_PRODUCT_ITEMS_SUCCESS,
            payload: {productId},
        })
    } catch (error) {
        console.log(error);
    }
}

function* deleteProductFromBasketWatcher() {
    yield takeEvery(DELETE_PRODUCT_ITEMS, deleteProductFromBasketWorker)
}

function* openBasketModalStatusWorker() {
    yield put({
        type: OPEN_BASKET_MODAL_STATUS_SUCCESS,
    });
}

function* openBasketModalStatusWatcher() {
    yield takeEvery(OPEN_BASKET_MODAL_STATUS, openBasketModalStatusWorker);
}

function* closeBasketModalStatusWorker() {
    yield put({
        type: CLOSE_BASKET_MODAL_STATUS_SUCCESS,
    });
}

function* closeBasketModalStatusWatcher() {
    yield takeEvery(CLOSE_BASKET_MODAL_STATUS, closeBasketModalStatusWorker);
}

export function* basketWatcher() {
    yield all([
        fork(addProductToBasketWatcher),
        fork(fetchBasketWatcher),
        fork(deleteProductFromBasketWatcher),
        fork(openBasketModalStatusWatcher),
        fork(closeBasketModalStatusWatcher)
    ])
}