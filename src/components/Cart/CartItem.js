import React from 'react'

const CartItem = ({cart, setCart, productos}) => {
    const delProduct = id =>{
        const prod = cart.filter((product) => product.id !== id)
        setCart(prod)
    }
    return (
        cart.map(producto => {
            return(
            <div className='card-container'>
                <div className='image-container'>
                    <img src={producto.imagen} alt=""></img>
                </div>
                <div className='card-content'>
                    <div className='card-title'>
                        <h3>{producto.nombre}</h3>
                    </div>
                    <div className="card-body">
                        <p>{producto.precio}</p>
                    </div>
                </div>
                <div className="btn">
                    <button onClick={() => delProduct(producto.id)}>
                        Delete
                    </button>
                </div>
            </div>
            )
        })
    )
}

export default CartItem
