import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <header>



            <div className='nav_all'>
              
<NavLink to='/' className="nav_links"> HOME</NavLink> 
<NavLink to='/products' className="nav_links">PRODUCTS</NavLink>

            </div>
           
        </header>
    )
}

export default Header