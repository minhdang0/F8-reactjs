import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
function Header() {
  return (
    <header>
       <nav>
         <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink  to="/shop">Shop</NavLink></li>
         </ul>
       </nav>
    </header>
  )
}

export default Header
