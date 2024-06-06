import React from 'react'
import './Product.css'
import { NavLink } from 'react-router-dom'
const Product = ({ product,addToBasket }) => {
  const addItem=(item)=>{
    
      addToBasket(item)
  
  }
  return (
    <div className='pr_style'>

      <div>
      <NavLink to={`/products/${product.id}`}>
      <img src={product.img} className='products_style' />
        
        </NavLink>
        <h2>{product.title}</h2>
        <p>{product.price}</p>
      </div>
     
      <button onClick={()=>addItem(product)}>add</button>
    </div>
  )
}

export default Product