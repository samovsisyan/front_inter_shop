import { all, fork } from 'redux-saga/effects';

import registr from './registr';
import login from './login';

export default function* root() {
    const sagas = [
        registr,
        login
    ];
    yield all(sagas.map(fork));
}