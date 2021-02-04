import React, { useEffect, useState } from 'react'
import { NavData } from '../../data/NavData'
import {
    Nav,
    Logo,
    MenuBars,
    NavMenu,
    NavMenuLinks,
    NavBtn
} from './NavbarElements'
import { Button } from '../Button'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <Nav scrollNav={scrollNav}>
            <Logo to='home' smooth duration={1000} scrollNav={scrollNav}>EASE-IN</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {NavData.map((item, i) => (
                    <NavMenuLinks 
                        to={item.to} 
                        key={i} 
                        smooth={true} duration={1000} spy={true} exact='true' offset={-55}
                        scrollNav={scrollNav} 
                    >
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='contact' primary='true'>
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
