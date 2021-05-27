import React from 'react'
import { Link } from 'react-router-dom';

function Product({ product }) {

    const { title, price, category, image, id } = product;
    return (
        <Link to={`/products/${id}`} className="card">
            <div className="image">
                <img src={image} alt={title} />
            </div>
            <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
            </div>
        </Link>
    )
}

export default Product
