import React from 'react'
import Cards from '../components/cards/Cards';
import './pages.css'

const Pijamas = ({cart, setCart}) => {
    return (
        <div className='wrapper'>
            <Cards
            cart={cart}
            setCart={setCart}
            tipo='pijamas'
            />
        </div>
    )
}

export default Pijamas