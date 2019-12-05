import React, { useEffect } from 'react';

import HeaderImage from '../assets/img/logos/main.png'

const Header = ({ goTo }) => {

    const handleScroll = (event) => {
        if (window.$("#mainNav").offset().top > 100) {
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
            <header className="masthead">
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">Bienvenido a nuestro portafolio!</div>
                        <div className="intro-heading text-uppercase">Un placer conocerte</div>
                        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" onClick={() => goTo('start')} href="#start">Cuentame más</a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;