import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vW - 1000px)/2);
    z-index: 10;
`

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #000;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transaform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`
export const Cart = styled(Link)`
    color: #000;
    font-size: 2.5rem;
    margin: 5px 6px;
`

export const CartGroup = styled.div`
    border-radius: 25px;
    border: 2px solid #000;
    padding: 3px;
    width: 120px;
    height: 65px;
    display: inline-grid;
    grid-template-columns: auto auto;
    grid-gap: 0px;
    
`
export const Counter = styled.div`
    height: 30px;
    width: 30px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #000;
    align-items: center;
    padding-top: 3px;
    text-align: center;
    margin: 10px 0;
`