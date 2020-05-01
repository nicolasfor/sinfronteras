import React from 'react';

const Intro = () => {
    return (
        <section className="page-section" id="start">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">¿Quíenes somos?</h2>
                        <h3 className="section-subheading text-muted">Somos un equipo de Abogados que se especializa en extranjería e inmigración. Nuestra meta es brindar soluciones y que las respuestas a sus dudas e inquietudes, sean de fácil entendimiento.  Nos preocupamos por acompañarlo en los trámites necesarios para su satisfacción.
                            </h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-flag fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Objetivo</h4>
                        <p className="text-muted">En Abogados Sin Frontera hacemos todo lo posible para brindar un excelente servicio en las consultas de nuestros usuarios. Nos enfocamos en tener el conocimiento de la legislación y los procedimientos de inmigración de distintas nacionalidades.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-suitcase fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Cualquier tramite</h4>
                        <p className="text-muted">Si usted está pensando en vivir, trabajar, estudiar en España, en Abogados Sin Frontera, encontrará unos aliados que velarán por sus intereses, asegurandonos de realizar el trabajo de la mejor manera posible para obtener el resultado esperado. De igual manera, si usted y su familia se encuentran en España en cualquier situación irregular, nuestra intención es brindarle toda la asesoría posible con el fin de obtener el servicio deseado.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Calidad</h4>
                        <p className="text-muted">En Abogados Sin Frontera ofrecemos un servicio integral de asesoramiento jurídico, además tendrá el acompañamiento de un experto para que pueda entender y solucionar la situación a consultar. Nuestro propósito es poder hacer parte de ese cambio y cumplir con los objetivos deseados.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;