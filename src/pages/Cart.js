import React from 'react'
import CartItem from '../components/Cart/CartItem'
import './pages.css'

const Cart = ({cart, setCart}) => {
    return (
        <div className='wrapper'>
            <CartItem
                cart={cart}
                setCart={setCart}
            />
        </div>
            
    )
}

export default Cart
