// import {takeLatest, call, put} from 'redux-saga/effects';
// import * as api from '../../api';
//
// import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions/login';
//
//
// function* handleLoginRequest(action) {
//     try {
//         const data = yield call(api.axiosLoginData, action.payload.data);
//         yield put({
//             type: LOGIN_SUCCESS,
//             payload: {data},
//             // payload: {user: data.user},
//         });
//
//     } catch (e) {
//         console.log(e);
//         yield put({
//             type: LOGIN_FAIL,
//             message: e.message,
//         });
//     }
// }
//
// export default function* watchers() {
//     yield takeLatest(LOGIN_REQUEST, handleLoginRequest);
//
// }
//
//
//
//
//
//
