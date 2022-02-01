import React, { useState } from 'react';
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <Logo to="/">
                <span>Link</span><span>Tree</span>
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink to='/'>Home</MenuLink>
                <MenuLink to='build'>Build</MenuLink>
                <MenuLink to="view">View</MenuLink>
            </Menu>
        </Nav>
    );
};

export default Navbar;