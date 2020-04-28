import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import HeaderImage from '../assets/img/logos/main.png'
import useArticles from '../modules/articles/useHook';

const NavBar = () => {
    const history = useHistory();
    const { mostRecent, mostVisited } = useArticles()[0];

    const goTo = (tab) => {
        history.push("/");
        const target = tab && window.$(`#${tab}`);
        let scrollTop = 0;
        if (target && target.offset()) {
            scrollTop = (target.offset().top - 90);
        }
        window.$('html, body').animate({
            scrollTop
        }, 1000, "easeInOutExpo");
    }

    const handleScroll = (event) => {
        if (window.$("#mainNav").offset().top > 20) {
            window.$("#mainNav").addClass("navbar-shrink");
        } else {
            window.$("#mainNav").removeClass("navbar-shrink");
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    const goToArticles = () => {
        if (mostRecent.length === 0 || mostVisited.length === 0) {
            history.push('/#/articles')
        }
        else {
            goTo('articles');
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <img className="logo-img" src={HeaderImage} alt="" />
                    <a className="navbar-brand js-scroll-trigger" onClick={() => goTo()} href="#page-top">Abogados Sin Frontera</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger articles-nav" onClick={goToArticles} href="#articles">Artículos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" onClick={() => goTo('start')} href="#start">Quienes somos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" onClick={() => goTo('services')} href="#services">Que hacemos</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" onClick={() => goTo('team')} href="#team">Equipo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" onClick={() => goTo('contact')} href="#contact">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;