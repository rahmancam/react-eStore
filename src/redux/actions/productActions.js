import * as actions from '../constants/action-types';

export const setProducts = (products) => {
    return { type: actions.SET_PRODUCTS, payload: products };
}

export const selectedProduct = (product) => {
    return {
        type: actions.SELECTED_PRODUCT,
        payload: product
    }
}