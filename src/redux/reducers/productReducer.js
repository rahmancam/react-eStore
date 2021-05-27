import * as actions from '../constants/action-types';

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actions.SELECTED_PRODUCT:
            return { ...state, ...payload };
        default:
            return state;
    }
};