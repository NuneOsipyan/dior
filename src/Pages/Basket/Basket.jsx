import React from 'react'
import './Basket.css'

const Basket = ({carts}) => {
  return (
    <div>
        {
carts.map((cart)=>{
return <Basket cart={
    cart
} key={cart.id}/>
})
        }
    </div>
  )
}

export default Basket