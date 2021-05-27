import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';
import { selectedProductSelector } from '../redux/selectors'

function ProductDetail() {
    const product = useSelector(selectedProductSelector);
    const { image, price, title, category, description } = product;
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            getProductById(id).then((res) => dispatch(selectedProduct(res)));
        }

        return () => dispatch(selectedProduct({}));
    }, [])
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ?
                (
                    <div>...Loading</div>
                ) : (
                    <div className="ui placeholder segment">
                        <div className="ui two column stackable center aligned grid">
                            <div className="ui vertical divider">AND</div>
                            <div className="middle aligned row">
                                <div className="column 1p">
                                    <img className="ui fluid image" src={image} alt={title} />
                                </div>
                                <div className="column rp">
                                    <h1>{title}</h1>
                                    <h2>
                                        <a href="#" className="ui teal tag label">${price}</a>
                                    </h2>
                                    <h3 className="ui brown block header">{category}</h3>
                                    <p>{description}</p>
                                    <div className="ui vertical animated button" tabIndex="0">
                                        <div className="hidden content">
                                            <i className="shop icon"></i>
                                        </div>
                                        <div className="visible content">Add to Cart</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
        </div>
    )
}

async function getProductById(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await res.json();
    return json;
}

export default ProductDetail
