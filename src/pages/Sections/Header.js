import React from 'react';

const Header = () => {

    return (
        <>
            <header className="masthead">
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">Bienvenido a nuestro portafolio!</div>
                        <div className="intro-heading text-uppercase">Un placer conocerte</div>
                        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#start">Cuentame más</a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;