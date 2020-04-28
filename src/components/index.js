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
import SectionArticles from './SectionArticles'
import SectionTeam from './SectionTeam'
import SectionContact from './SectionContact'
import Footer from './Footer'
import NavBar from './NavBar';
import Ads from './Ads';
import useArticles from '../modules/articles/useHook';
const Main = () => {

    const {
        dispatchLoadMostVisited,
        dispatchLoadMostRecent,
        dispatchLoadCategories } = useArticles()[1];

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
        dispatchLoadMostRecent();
        dispatchLoadMostVisited();
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
                        <Ads />
                        <SectionArticles />
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