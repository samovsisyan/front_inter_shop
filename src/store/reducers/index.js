import {combineReducers} from 'redux'

import registr from './registr';
import login from './login';


export default combineReducers({
    registr,
    login,
});