import React from 'react';
import Scroll from '../../components/Scroll';

const Header = () => {

    return (
        <>
            <header className="masthead">
                <div className="presentation ">
                    <div className="presentation-left"></div>
                    <div className="presentation-right"></div>
                    <div className="intro-text">
                        <h3 className="text-uppercase mb-3">¿Cómo podemos ayudarte?</h3>
                        <div className="intro-lead-in">
                            La profesión legal es, por definición, una práctica: la competencia se obtiene y se mantiene solo a través del aprendizaje continuo.
                        </div>
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