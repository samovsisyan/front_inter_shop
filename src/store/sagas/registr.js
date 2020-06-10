// import {takeLatest, call, put} from 'redux-saga/effects';
// import { REGISTR_REQUEST, REGISTR_SUCCESS, REGISTR_FAIL } from '../actions/registr';
// import * as api from '../../api';
//
//
//
// function* handleRegisterRequest(action) {
//     try {
//         const { username, password, email, role} = yield call(api.AxiosRegistrData, action.payload.data);
//         yield put({
//             type: REGISTR_SUCCESS,
//             payload: { username, password, email, role },
//         });
//     } catch (e) {
//         console.log(e);
//         yield put({
//             type: REGISTR_FAIL,
//             message: e.message,
//         });
//     }
// }
//
// export default function* watchers() {
//     yield takeLatest(REGISTR_REQUEST, handleRegisterRequest);
//
// }