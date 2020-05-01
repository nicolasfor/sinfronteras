import React from 'react';
import Vendor from '../vendor';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = ({ children, navProps }) => {

    return (
        <>
            <Vendor />
            <NavBar {...navProps} />
            {children}
            <Footer />
        </>
    )
}

export default Layout;