import React from 'react';
import { IconContext } from 'react-icons/lib';
import { SideBarContainer, Icon, CloseIcon, SideBarLink, SideBarMenu, SideBarWrapper, SideBarRoute } from './sideBarElements';

const SideBar = ({ isOpen, toggle }) => {
    return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <SideBarContainer isOpen={ isOpen } onClick={ toggle }>
                <Icon onClick={ toggle }>
                    <CloseIcon />
                </Icon>
                <SideBarWrapper>
                    <SideBarMenu>

                        <SideBarLink to="about" smooth={true} duration={500} spy={true} exact='true' offset={ -80 }  onClick={ toggle }> About Me </SideBarLink>
                        <SideBarLink to="portfolio" smooth={true} duration={500} spy={true} exact='true' offset={ -80 }> Portfolio </SideBarLink>
                        <SideBarRoute to="/contactMe" > Contact Me </SideBarRoute>

                    </SideBarMenu>
                </SideBarWrapper>
            </SideBarContainer>
        </IconContext.Provider>
    </>
);
};

export default SideBar;
