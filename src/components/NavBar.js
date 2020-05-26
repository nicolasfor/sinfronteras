import React, { useState } from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Overlay from './Overlay';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const NavBar = ({ showStart }) => {
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
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <>
                        <img className="logo-img" src={require('../assets/img/logos/main.png')} alt="" />
                        {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <AnchorLink
                            to="/#header"
                            title="Abogados Sin Frontera"
                            className="navbar-brand"
                            stripHash
                        />
                    </>
                </div>

                <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}>
                    <ul className="navbar-nav text-uppercase ml-auto">
                        {
                            showStart &&
                            <li className="nav-item">
                                <AnchorLink
                                    to="/"
                                    title="Inicio"
                                    className="nav-link"
                                    stripHash
                                />
                            </li>

                        }
                        <li className="nav-item">
                            <AnchorLink
                                to="/#articles"
                                title="Artículos"
                                className="nav-link"
                                stripHash
                            />
                        </li>
                        <li className="nav-item">
                            <AnchorLink
                                to="/#start"
                                title="Conocenos"
                                className="nav-link"
                                stripHash
                            />
                        </li>
                        <li className="nav-item">
                            <AnchorLink
                                to="/#services"
                                title="Nuestros Servicios"
                                className="nav-link"
                                stripHash
                            />
                        </li>

                        {/* <li className="nav-item">
                            <AnchorLink
                                to="/#team"
                                title="Equipo"
                                className="nav-link"
                                stripHash
                            />
                        </li> */}
                        <li className="nav-item">
                            <AnchorLink
                                to="/#contact"
                                title="Consulta Gratuita"
                                className="nav-link"
                                stripHash
                            />
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
            </div>
            {
                isExpanded &&
                <Overlay onClick={hideMenu} />
            }
        </nav>
    );
};

export default NavBar;