import React from 'react'
import Card from './Card';
import Products from '../../ProductList';

const Cards = ({tipo, cart, setCart}) =>{
    var lista = Products.filter(producto => producto.categoria === tipo)
    return (
        lista.map(product =>
            <div>
                <Card
                cart={cart}
                setCart={setCart}
                producto={product}
                productos={Products}
                />
            </div>
        )
    )
}

export default Cards;
