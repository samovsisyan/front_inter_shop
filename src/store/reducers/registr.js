import {    REGISTR_REQUEST, REGISTR_SUCCESS, REGISTR_FAIL} from '../actions/registr';

const initialState = {
    regitr: [],
    username: null,
    password: null,
    email: null,
    role: null,

};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case REGISTR_REQUEST: {
            return {
                ...state,
                regitr: [],
            };
        }
        case REGISTR_SUCCESS: {
            const { username, password, email, role } = action.payload.data;
            return {
                ...state,
                username,
                password,
                email,
                role,

            };
        }
        case REGISTR_FAIL: {
            return {
                ...state,
                regitr: [],
            };
        }


        default: {
            return state;
        }
    }
}