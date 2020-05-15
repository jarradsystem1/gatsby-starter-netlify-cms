import React from 'react';
import {Link} from 'gatsby';
import {FooterMenuWrap, FooterMenuList} from './footer-menu.stc'

const FooterMenu = () => {
    return (
        <FooterMenuWrap>
            <FooterMenuList>
                <Link to="/" className="no-cursor">Home</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/company" className="no-cursor">About Us</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/project" className="no-cursor">projects</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/service" className="no-cursor">Services</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/blog" className="no-cursor">blog</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/contact" className="no-cursor">contact us</Link>
            </FooterMenuList>
        </FooterMenuWrap>
    )
}

export default FooterMenu;