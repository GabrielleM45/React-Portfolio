import React from 'react';
import NavBar from '../components/NavBar/navBarIndex';
import ContactMe from '../components/ContactMe/contactIndex';
import ScrollToTop from '../components/scrollTop';




const ContactMePage = () => {
    return (
        <>
            <ScrollToTop />
            <NavBar />
            <ContactMe />

        </>

    );
};

export default ContactMePage;