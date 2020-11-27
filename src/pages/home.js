import React, { useState } from 'react';
import NavBar from '../components/NavBar/navBarIndex';
import HeroSection from '../components/HeroSection/heroIndex';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/infoData';
import InfoSection from '../components/InfoSection/InfoIndex';
import Portfolio from '../components/Portfolio/portfolioIndex';
import Footer from '../components/Footer/footerIndex';
import SideBar from '../components/SideBar/sideBarIndex';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
        <SideBar isOpen={ isOpen } toggle={ toggle }/>
        <NavBar toggle={ toggle } />


        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <Portfolio />



        <Footer />


    </>

    );
};

export default Home;