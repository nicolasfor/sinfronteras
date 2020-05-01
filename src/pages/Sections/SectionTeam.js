import React from 'react';

const SectionTeam = () => {
    return (
        <section className="page-section" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Nuestro Equipo</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={require('../../assets/img/team/paola.jpg')} alt="" />
                            <h4>Paola Galindo</h4>
                            <p className="text-muted">Abogada</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/in/paola-milena-galindo-a5264b154/">
                                        <i className="fa fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={require('../../assets/img/team/Nicolas.jpg')} alt="" />
                            <h4>Nicolás Forero</h4>
                            <p className="text-muted">Web Designer</p>
                            <ul className="list-inline social-buttons">
                                <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/in/nicolasfor/">
                                        <i className="fa fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionTeam;