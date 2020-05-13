import React from 'react';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = () => {

    return (
        <>
            <header className="masthead" id="header">
                <div className="presentation ">
                    <div className="presentation-left"></div>
                    <div className="presentation-right"></div>
                    <div className="intro-text">
                        <h3 className="text-uppercase mb-3">¿Cómo podemos ayudarte?</h3>
                        <div className="intro-lead-in">
                            La profesión legal es, por definición, una práctica: la competencia se obtiene y se mantiene solo a través del aprendizaje continuo.
                        </div>
                        <AnchorLink
                            to="/#articles"
                            title="Cuentame más"
                            className="btn btn-primary btn-xl text-uppercase"
                            stripHash
                        />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;