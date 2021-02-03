import styled, { css } from 'styled-components'
import { Link } from 'react-scroll'
import Bars from '../../images/bars.svg'

export const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    transition: 0.4s all ease-in;
`

export const NavLink = css`
    font-size: 20px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    font-weight: 800;
`

export const Logo = styled(Link)`
    ${NavLink};
    color: #ffaf17;
    font-style: italic;
    font-weight: 700;
`

export const MenuBars = styled.i`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        background-image: url(${Bars});
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
`

export const NavMenuLinks = styled(Link)`
    ${NavLink};
    color: ${({scrollNav}) => (scrollNav ? '#fff' : '#000')};
    font-weight: 400;
    padding: 1.75rem 1rem;
    
    @media screen and (max-width: 768px) {
        display: none;
    }

    &.active {
        border-bottom: 5px solid #ffaf17;
    }
`

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`