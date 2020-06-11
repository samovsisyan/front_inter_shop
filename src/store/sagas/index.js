import { all, fork } from 'redux-saga/effects';

// import registr from './registr';
// import login from './login';
import products from './products';

export default function* root() {
    const sagas = [
        // registr,
        // login,
        products
    ];
    yield all(sagas.map(fork));
}