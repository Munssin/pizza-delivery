import { all, fork } from 'redux-saga/effects';
import { pizzaWatcher } from './redux/actions/pizzaActions';
import { drinkWatcher } from './redux/actions/drinkActions';

export function* rootSaga() {
    yield all([
        fork(pizzaWatcher),
        fork(drinkWatcher),
    ])
}