import React from 'react';
import './Card.css';

function Card({producto, cart, setCart, productos}) {

    const addProduct = id =>{
        const prod = productos.filter((product) => product.id === id)
        setCart([...cart, ...prod])
    }
   
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={producto.imagen} alt=""></img>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{producto.nombre}</h3>
                </div>
                <div className="card-body">
                    <p>$ {producto.precio}</p>
                    <p>{producto.talla}</p>
                    <p>{producto.piezas}</p>
                    <p>{producto.adicional}</p>
                    <p>{producto.color}</p>
                </div>
            </div>
            <div className="btn">
                <button onClick={() => addProduct(producto.id)}>
                    Add to cart
                </button>
            </div>
        </div>


    )
    
}

export default Card;

