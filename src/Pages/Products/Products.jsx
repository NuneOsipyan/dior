import React from 'react'
import Product from '../../components/Product/Product'
import './Products.css'
const Products = ({ products,addToBasket }) => {
  // console.log(products);
  return (
    <div className='product_page_style'>
      {
        products.map((product) => {
          return <Product key={product.id} product={product} addToBasket={addToBasket} />
        })
      }
    </div>
  )
}

export default Products