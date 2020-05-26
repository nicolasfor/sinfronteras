import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <span className="copyright">Copyright &copy; Abogados Sin Frontera 2020</span>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/Abogados-Sin-Frontera-108432887268111/">
                                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/abogadossinfronteraes/">
                                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://twitter.com/extranjeriaasf/">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/paola-milena-galindo-a5264b154/">
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;