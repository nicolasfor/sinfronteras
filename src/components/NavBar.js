import React, { useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import HeaderImage from '../assets/img/logos/main.png'

const NavBar = () => {
    const history = useHistory();
    const goTo = (tab) => {
        history.push("/");
        const target = tab && window.$(`#${tab}`);
        let scrollTop = 0;
        if (target && target.offset()) {
            scrollTop = (target.offset().top - 54);
        }
        window.$('html, body').animate({
            scrollTop
        }, 1000, "easeInOutExpo");
    }

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
                            <li className="nav-item d-flex align-items-center">
                                <span class="badge badge-warning">
                                    <Link className="nav-link js-scroll-trigger" to="/articles">Novedades</Link>
                                </span>
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