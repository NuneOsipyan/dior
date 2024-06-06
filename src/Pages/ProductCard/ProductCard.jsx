import React from 'react';
import './ProductCard.css';
import { useParams } from 'react-router-dom';

const ProductCard = ({ products,addToBasket } ) => {
    const { id } = useParams();

    const product = products.find((e) => e.id === +(id));
    

    return (
        <div className='product_card'>

            <div>
                <h3>{product.title}</h3>
                <img src={product.img} alt={product.title} className='img_pr_card' />
                <p>{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
