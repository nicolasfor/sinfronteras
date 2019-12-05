import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <span className="copyright">Copyright &copy; Abogados sin Frontera 2019</span>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/Abogados-Sin-Frontera-108432887268111/">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/abogadossinfronteraes/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/paola-milena-galindo-a5264b154/">
                                    <i className="fab fa-linkedin-in"></i>
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