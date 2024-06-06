import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Loyout from './components/Loyout/Loyout'
import ProductCard from './Pages/ProductCard/ProductCard'
import Carts from "./Pages/Carts/Carts"
import Profile from './components/Profile/Profile'

function App({ products }) {

  const [carts, setCarts] = useState([])

  const addToBasket = (item) => {

    let sameId = false

    carts.forEach((elem) => {
      if (elem.id === item.id) {
        sameId = true
        setCarts(carts.map((el) => {
          if (el.id === item.id) {
            return {
              ...el,
              count: ++el.count,
              initprice: el.price * el.count,

            }
          } else {
            return el
          }
        }))
      }
    })
    if (!sameId) {
      setCarts((prev) => {
        return [
          ...prev, item
        ]
      })
    }
  }
  const changecount = (item, count) => {
    // console.log(item,count);
    setCarts(carts.map((el) => {
      if (el.id === item.id) {
        return {
          ...el,
          count: count,
          initprice: el.price * count
        }
      } else {
        el
      }
    }))
  }

 
  return (
    <>
      <div className='main_app'>

        <Routes>
          <Route path='/' element={<Loyout carts={carts} />}>
            <Route index='/' element={<Home />} />
            <Route path='/products' element={<Products products={products} addToBasket={addToBasket} />} />
            <Route path='/carts' element={<Carts carts={carts} changecount={changecount} />} />
            <Route path='/products/:id' element={<ProductCard products={products} />} />
            <Route path='/profile' element={<Profile/>}/>
            

          </Route>
        </Routes>
      </div>

    </>
  )
}

export default App
