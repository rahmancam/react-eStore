import React from 'react'
import { useSelector } from 'react-redux';
import { productsSelector } from '../redux/selectors';

function ProductListing() {

    const products = useSelector(productsSelector);

    return (
        <div>
            <h1>Prodcut Listing</h1>
        </div>
    )
}

export default ProductListing
