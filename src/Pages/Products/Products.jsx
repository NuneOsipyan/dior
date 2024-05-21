import React from 'react'
import Product from '../../components/Product/Product'
import './Products.css'
const Products = ({ products }) => {
  // console.log(products);
  return (
    <div className='product_page_style'>
      {
        products.map((product) => {
          return <Product key={product.id} product={product} />
        })
      }
    </div>
  )
}

export default Products