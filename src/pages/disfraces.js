import React from 'react'
import Cards from '../components/cards/Cards'

const Disfraces = ({cart, setCart}) => {
    return (
        <div className='wrapper'>
            <Cards
            cart={cart}
            setCart={setCart}
            tipo='disfraz'
            />
        </div>
    )
}

export default Disfraces
