import React, { useState } from 'react'
import './Cart.css'

const Cart = ({ cart, changecount }) => {
  const [count, setquantity] = useState(cart.count)
  const minus = () => {
    if (count > 1) {
      setquantity(count - 1)
      changecount(cart, count)
    }
  }

  const plus = () => {
    setquantity(count + 1)
    changecount(cart, count)
  }
  return (
    <div className='basket_main'>

      <div className='basket_text'>
        <h2 className='basket_titile'>{cart.title}</h2>
        <img src={cart.img} className='basket_img' />
      </div>

      <div className='plus_or_minus'>
        <button onClick={plus} className='add_or_min'> +</button>
        <span >{cart.initprice}</span>
        <button onClick={minus} className='add_or_min'>-</button>
       
      </div>
     
    </div>

  )
}

export default Cart