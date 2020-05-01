import React from 'react';
import NavBar from '../components/NavBar';
import SEO from '../components/Seo';
import Footer from '../components/Footer';

const Layout = ({ children, navProps, seoProps }) => {

    return (
        <>
            <SEO {...seoProps} />
            <NavBar {...navProps} />
            {children}
            <Footer />
        </>
    )
}

export default Layout;