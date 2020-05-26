import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'


import NavBar from '../components/NavBar';
import SEO from '../components/Seo';
import Footer from '../components/Footer';
import Alert from '../components/Alert'

library.add(fab, fas);

const Layout = ({ children, navProps, seoProps }) => {

    return (
        <div className="root" style={{
            backgroundColor: 'var(--bg)',
            color: 'var(--textNormal)',
            transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }}>
            <Alert />
            <SEO {...seoProps} />
            <NavBar {...navProps} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;