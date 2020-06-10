import {    LOGIN_REQUEST,LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/login';
import login from "../sagas/login";

const initialState = {
    usersData: {},
    signIn: {},

};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case LOGIN_REQUEST: {
            return {
                ...state,
                signIn: {}
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                usersData: action.payload.data
            };
        }

        case LOGIN_FAIL: {
            return {
                ...state,
                signIn: {}
            };
        }



        default: {
            return state;
        }
    }
}



