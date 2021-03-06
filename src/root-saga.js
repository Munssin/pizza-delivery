import { all, fork } from 'redux-saga/effects';
import { pizzaWatcher } from './redux/actions/pizzaActions';
import { drinkWatcher } from './redux/actions/drinkActions';
import { salatWatcher } from './redux/actions/salatActions';
import { basketWatcher } from './redux/actions/basketAction';

export function* rootSaga() {
    yield all([
        fork(pizzaWatcher),
        fork(drinkWatcher),
        fork(salatWatcher),
        fork(basketWatcher),
    ])
}