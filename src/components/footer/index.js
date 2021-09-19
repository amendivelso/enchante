import React from 'react'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'
import {
    Foot,
    SocialLink,
    FooterMessage,
    Social
} from './footerElements';

const Footer = () => {
    return (
        <>
        <Foot>
            <Social>
                <SocialLink to="/facebook"><AiOutlineFacebook /></SocialLink>
                <SocialLink to="/instagram"><AiOutlineInstagram /></SocialLink>
                <SocialLink to="/whatsapp"><AiOutlineWhatsApp /></SocialLink>
            </Social>
            <FooterMessage>Todos los derechos reservados &copy;</FooterMessage>
        </Foot>
            
            
        </>
    )
}

export default Footer
