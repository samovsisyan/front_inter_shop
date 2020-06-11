import {takeLatest, call, put} from 'redux-saga/effects';
import {PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAIL} from '../actions/products';
import * as api from '../../api';

function* handleProductsRequest() {
    try {
        const data = yield call(api.fetchProductsData);
        console.log("PRODUCTS SAGAS ",data)
        yield put({
            type: PRODUCTS_SUCCESS,
            payload: {products: data.products},
        });

    } catch (e) {
        console.log(e);
        yield put({
            type: PRODUCTS_FAIL,
            message: e.message,
        });
    }
}


export default function* watchers() {
    yield takeLatest(PRODUCTS_REQUEST, handleProductsRequest);

}
