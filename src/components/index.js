import React, { useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from './Header'
import Intro from './Intro'
import Articles from './Articles'
import SectionWeDo from './SectionWeDo'
import SectionTeam from './SectionTeam'
import SectionContact from './SectionContact'
import Footer from './Footer'
import NavBar from './NavBar';

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


    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/articles">
                    <Articles />
                </Route>
                <Route path="/">
                    <>
                        <Header />
                        <Intro />
                        <SectionWeDo />
                        <SectionTeam />
                        <SectionContact />
                    </>
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

export default Main;