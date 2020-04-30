import React, { useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Article from './Articles/Article'
import Sections from './Sections'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar';
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
        <Router basename="#">
            <NavBar />
            <Switch>
                <Route path="/articles/:id?">
                    <Article />
                </Route>
                <Route path="/">
                    <>
                        <Sections />
                    </>
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

export default Main;