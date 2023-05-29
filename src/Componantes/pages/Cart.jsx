import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeitem } from '../store/CartSlice'
import './Cart.css'

const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.cart)
    const handleRemove = (productId) => {
        dispatch(removeitem(productId))

    }
    return ( 
        <div>
        <h1> Your Favorites Films </h1> 
        <div className = 'cartWrapper'> {
            products.map((film) => ( 
                <div className = 'cartCard'>
                <img src = { film.Poster }
                alt = " " />
                <h4> { film.Title } </h4>
                 <button onClick = {
                    () => handleRemove(products.id) }
                className = 'btn'> Remove </button> </div>
            ))

        }

        </div> </div>
    )
}

export default Cart