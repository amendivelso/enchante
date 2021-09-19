import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'

export const Foot = styled.footer`
    background: #fff;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vW - 1000px)/2);
    z-index: 10;
`

export const SocialLink = styled(Link)`
    color: #000;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer; 
`

export const FooterMessage = styled.div`
    color: #000;
`

export const Social = styled.div`
    color: #000;
`