import React from 'react';
import Scroll from '../../components/Scroll';

const Header = () => {

    return (
        <>
            <header className="masthead">
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">Bienvenido a nuestro portafolio!</div>
                        <div className="intro-heading text-uppercase">Un placer conocerte</div>
                        <Scroll type="id" element="articles">
                            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#">Cuentame más</a>
                        </Scroll>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;