import React from 'react'
import { NavLink } from 'react-router-dom'
import basket from './basket.png'
import profile from './profile.png'
import './Header.css'
const Header = ({ carts }) => {
    return (
        <header>



            <div className='nav_all'>

                <NavLink to='/' className="nav_links"> HOME</NavLink>
                <NavLink to='/products' className="nav_links">PRODUCTS</NavLink>

                <div className='backet_and_pr'>

                <NavLink to="/carts">
                        <img src={basket} alt="" className='basket' />
                    </NavLink>
                    <NavLink to="/profile" >
                        <div className='sign_in'>
                        <img src={profile} className='profile' />
                    <span className='profile_text'>sign in</span>
                        </div>
                    </NavLink>
                 
                </div>

            </div>

        </header>
    )
}

export default Header