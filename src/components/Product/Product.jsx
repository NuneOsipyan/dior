import React from 'react'
import './Product.css'
import { NavLink } from 'react-router-dom'
const Product = ({ product }) => {
  return (
    <div className='pr_style'>

      <div>
        <img src={product.img} className='products_style' />
        <h2>{product.title}</h2>
        <p>{product.price}</p>
      </div>
      <NavLink to={`/products/${product.id}`}>
        <button>see more information</button>
      </NavLink>
    </div>
  )
}

export default Product