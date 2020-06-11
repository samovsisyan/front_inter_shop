import {    LOGIN_REQUEST,LOGIN_SUCCESS } from '../actions/login';

const initialState = {
    token : [],
    username: null,
    password: null,

};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case LOGIN_REQUEST: {
            return {
                ...state,
            };
        }
        case LOGIN_SUCCESS: {
            // const { username, password } = action.payload.data;
            return {
                ...state,
                token: action.payload.token,
            };
        }



        default: {
            return state;
        }
    }
}
