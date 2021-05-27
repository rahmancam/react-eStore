import * as actions from '../constants/action-types';

const initialState = {
    products: [{
        id: 1,
        title: "Tata Tiago XZ+",
        categort: "Automobile"
    }],
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};