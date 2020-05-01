import React, { useEffect } from 'react';
import Sections from './Sections'
import Layout from '../layouts';

const Main = () => {

    /*useEffect(() => {
        // Activate scrollspy to add active class to navbar items on scroll
        window.$('body').scrollspy({
            target: '#mainNav',
            offset: 56
        });

        window.$('.js-scroll-trigger').click(function () {
            window.$('.navbar-collapse').collapse('hide');
        });
    });*/

    return (
        <>
            <Layout>
                <Sections />
            </Layout>
        </>
    );
};

export default Main;