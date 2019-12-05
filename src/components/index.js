import React, { useEffect } from 'react';

import Header from './Header'
import Intro from './Intro'
import SectionWeDo from './SectionWeDo'
import SectionTeam from './SectionTeam'
import SectionContact from './SectionContact'
import Footer from './Footer'

const Main = () => {

    useEffect(() => {
        // Activate scrollspy to add active class to navbar items on scroll
        window.$('body').scrollspy({
            target: '#mainNav',
            offset: 56
        });

        window.$('.js-scroll-trigger').click(function () {
            window.$('.navbar-collapse').collapse('hide');
        });
    });

    const goTo = (tab) => {
        const target = tab && window.$(`#${tab}`);
        let scrollTop = 0;
        if (target) {
            scrollTop = (target.offset().top - 54);
        }
        window.$('html, body').animate({
            scrollTop
        }, 1000, "easeInOutExpo");
    }
    return (
        <>
            <Header goTo={goTo} />
            <Intro />

            <SectionWeDo />
            <SectionTeam />
            <SectionContact />
            <Footer />

        </>
    );
};

export default Main;