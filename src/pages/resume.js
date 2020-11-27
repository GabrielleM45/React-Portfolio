import React, { useState } from 'react';
import SideBar from '../components/SideBar/sideBarIndex';
import ResumeDoc from '../components/Resume/resumeIndex';
import NavBar from '../components/NavBar/navBarIndex';
import ScrollToTop from '../components/scrollTop';




const ResumePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
            <ScrollToTop />
            <SideBar isOpen={ isOpen } toggle={ toggle }/>
            <NavBar toggle={ toggle } />
            <ResumeDoc  />

        </>

    );
};

export default ResumePage;