import { all, fork } from 'redux-saga/effects';
import products from './products';
import login from './login';


export default function* root() {
    const sagas = [
        products,
        login,
    ];
    yield all(sagas.map(fork));
}
