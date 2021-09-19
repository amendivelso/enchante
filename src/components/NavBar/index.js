import logoBlanco from '../../images/logoBlanco.JPG';
import {AiOutlineShoppingCart} from 'react-icons/ai'

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,  
    CartGroup,
    Counter,
    Cart
} from './NavBarElements';



const NavBar = ({cart, setCart}) => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logoBlanco} alt="" width="100%" height="100%"></img>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/pijamas" activeStyle>
                        Pijamas
                    </NavLink>
                    <NavLink to="/conjuntos" activeStyle>
                        Conjuntos
                    </NavLink>
                    <NavLink to="/disfraces" activeStyle>
                        Disfraces
                    </NavLink>
                </NavMenu>
                <CartGroup>
                    <Cart to="/cart"><AiOutlineShoppingCart /></Cart>
                    <Counter>{cart.length}</Counter>
                </CartGroup>
                
            </Nav>
        </>
    )
}

export default NavBar;
