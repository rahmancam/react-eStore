import * as actions from '../constants/action-types';

export const setProducts = (products) => {
    return { type: actions.SET_PRODUCTS, payload: products }
}

export const selectProduct = (product) => {
    return {
        type: actions.SELECT_PRODUCT,
        payload: product
    }
}