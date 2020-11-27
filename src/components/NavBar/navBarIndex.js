import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavLink, Bars, NavMenu, MobileIcon, NavLogo, NavBarContainer, NavItem, NavLinkRoute } from './navbarElements';

//header video obtained from pexels.com*//

const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 5) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
        };

    return  (
<>
    <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={ scrollNav }>
            <NavBarContainer>
                <NavLogo to='/' onClick={ toggleHome }>GM</NavLogo>
                    <MobileIcon onClick={ toggle }>
                            <Bars />
                    </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLink to="about" smooth={true} duration={500} spy={true} exact='true' offset={ -80 } > About </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="resume" smooth={true} duration={500} spy={true} exact='true' offset={ -80 } > Resume </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="portfolio" smooth={true} duration={500} spy={true} exact='true' offset={ -80 }> Portfolio </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLinkRoute to="/contactMe" smooth={true} duration={500} spy={true} exact='true' offset={ -80 }> Contact Me </NavLinkRoute>
                            </NavItem>
                        </NavMenu>
                </NavBarContainer>
            </Nav>
        </IconContext.Provider>
</>

);
};

export default NavBar;