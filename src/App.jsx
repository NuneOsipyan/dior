import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Loyout from './components/Loyout/Loyout'
import ProductCard from './Pages/ProductCard/ProductCard'
function App({ products }) {


  return (
    <>
      <div className='main_app'>

        <Routes>
          <Route path='/' element={<Loyout />}>
            <Route index='/' element={<Home />} />
            <Route path='/products' element={<Products products={products} />} />
            <Route path='/products/:id' element={<ProductCard products={products} />} />
          </Route>
        </Routes>
      </div>

    </>
  )
}

export default App
