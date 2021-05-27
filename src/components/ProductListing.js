import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { productsSelector } from '../redux/selectors';
import Product from './Product';
import { setProducts } from '../redux/actions/productActions';

function ProductListing() {

    const products = useSelector(productsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        getProducts().then((res) => dispatch(setProducts(res)));
    }, []);

    return (
        <div className="four column wide">
            <div className="ui link cards">
                {products.map((product) => <Product key={product.id} product={product} />)}
            </div>
        </div>
    )
}

async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const json = await res.json();
    return json;
}

export default ProductListing
