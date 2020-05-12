import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll';
import { Link } from 'gatsby';
import Overlay from './Overlay';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const NavBar = ({ hideButtons }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hideMenu = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggler navbar-toggler-right" type="button" onClick={hideMenu}>
                        Menu
                        <i className="fa fa-bars"></i>
                    </button>
                    <>
                        <img className="logo-img" src={require('../assets/img/logos/main.png')} alt="" />
                        {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <Link className="navbar-brand js-scroll-trigger" to="/">Abogados Sin Frontera</Link>
                    </>
                </div>
                {hideButtons ?
                    <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}>
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="/">Inicio</Link>
                            </li>
                            <ThemeToggler>
                                {({ theme, toggleTheme }) => (
                                    <li className="nav-item" onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>
                                        <i className={`fa ${theme === 'light' ? 'fa-moon-o text-light' : 'fa-sun-o'}`}></i>
                                    </li>
                                )}
                            </ThemeToggler>
                        </ul>
                    </div>
                    :
                    <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}>
                        <Scrollspy className="navbar-nav text-uppercase ml-auto" items={['articles', 'start', 'services', 'team', 'contact']} currentClassName="active">
                            <li className="nav-item">
                                <Scroll type="id" element="articles" onClick={hideMenu}>
                                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                    <a className="nav-link js-scroll-trigger" href="#">Articulos</a>
                                </Scroll>
                            </li>
                            <li className="nav-item">
                                <Scroll type="id" element="start" onClick={hideMenu}>
                                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                    <a className="nav-link js-scroll-trigger" href="#">Conocenos</a>
                                </Scroll>
                            </li>
                            <li className="nav-item">
                                <Scroll type="id" element="services" onClick={hideMenu}>
                                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                    <a className="nav-link js-scroll-trigger" href="#">Nuestros Servicios</a>
                                </Scroll>
                            </li>

                            <li className="nav-item">
                                <Scroll type="id" element="team" onClick={hideMenu}>
                                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                    <a className="nav-link js-scroll-trigger" href="#">Equipo</a>
                                </Scroll>
                            </li>
                            <li className="nav-item">
                                <Scroll type="id" element="contact" onClick={hideMenu}>
                                    {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                                    <a className="nav-link js-scroll-trigger" href="#">Consulta Gratuita</a>
                                </Scroll>
                            </li>
                            <ThemeToggler>
                                {({ theme, toggleTheme }) => (
                                    <li className="nav-item" onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>
                                        <i className={`fa ${theme === 'light' ? 'fa-moon-o text-light' : 'fa-sun-o'}`}></i>
                                    </li>
                                )}
                            </ThemeToggler>

                        </Scrollspy>
                    </div>
                }
            </div>
            {
                isExpanded &&
                <Overlay onClick={hideMenu} />
            }
        </nav>
    );
};

export default NavBar;