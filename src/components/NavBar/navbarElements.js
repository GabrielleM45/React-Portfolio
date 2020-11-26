import { FaBars } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkRoute } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import styled from 'styled-components';

export const Nav = styled.nav `
    background: ${({ scrollNav}) => (scrollNav ? '#2f3136' : 'transparent' )};
    margin-top: -80px;
    height: 80px;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    justify-content: space-between;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavBarContainer = styled.div `
    display:flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 25px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)
`
    color: #fff;
    justify-self: flex-start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-family: 'Allura', cursive;
`;

export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff
    }
`

export const NavLinkRoute = styled(LinkRoute)
`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active  {
    color: #99bcc4;
    border-bottom: 4px solid #99bcc4;
}

    &:hover {
    color: #99bcc4;
}
`
export const NavLink = styled(LinkScroll)
`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active  {
    color: #99bcc4;
    border-bottom: 4px solid #99bcc4;
}

    &:hover {
    color: #99bcc4;
}
`

export const Bars = styled(FaBars)
`    color: #fff;

@media screen and(max - width: 768 px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100 % , 75 % );
    font-size: 1.8 rem;
    cursor: pointer;
}
`
export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
}
`
export const NavItem = styled.li `
    height: 80px;
`

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;
    margin-right: 24px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkRouter)
`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;

    &:hover {
    transition: all 0.2s ease-in-out;
    border-bottom: 4px solid #fff;
    background: #fff;
    color: #010606;
}
`