import React from 'react';
import NavBar from '../components/NavBar';
import SEO from '../components/Seo';
import Footer from '../components/Footer';

const Layout = ({ children, navProps, seoProps }) => {

    return (
        <div style={{
            backgroundColor: 'var(--bg)',
            color: 'var(--textNormal)',
            transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }}>
            <SEO {...seoProps} />
            <NavBar {...navProps} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;