import React from 'react'
import Cards from '../components/cards/Cards';
import './pages.css'

const Conjuntos = ({cart, setCart}) => {
    return (
        <div className='wrapper'>
            <Cards
            cart={cart}
            setCart={setCart}
            tipo='conjuntos'
            />
        </div>
    )
}

export default Conjuntos;
