import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const items = useSelector((state) => state.cart)
    return (
        <div>
        <ul className='nav'>
        <li> <Link to ='/'> Home </Link></li>
      <li>
      <Link to ='/cart' > Favorites </Link> 
      </li>
      <span className='cartCount'>Favorites items: {items.length}</span>
     
    </ul>
    
    </div>
     
       
//   


    )
}

export default NavBar