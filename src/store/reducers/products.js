import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS,} from '../actions/products';

const initialState = {
    product: [],

};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_REQUEST: {
            return {...state};
        }
        case PRODUCTS_SUCCESS: {

            return {
                ...state,
                product: action.payload.products,
            };

        }

        default: {
            return state;
        }
    }
}