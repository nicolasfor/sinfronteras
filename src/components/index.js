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
import useArticles from '../modules/articles/useHook';
import Ads from './Ads';
const Main = () => {

    const { dispatchLoadCategories } = useArticles()[1];

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

    useEffect(() => {
        dispatchLoadCategories();
        // eslint-disable-next-line
    }, [])


    return (
        <Router basename="#">
            <NavBar />
            <Switch>
                <Route path="/articles/:id?">
                    <Articles />
                </Route>
                <Route path="/">
                    <>
                        <Header />
                        <Intro />
                        <Ads />
                        <SectionWeDo />
                        <Ads />
                        <SectionTeam />
                        <Ads />
                        <SectionContact />
                        <Ads />
                    </>
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

export default Main;