import React, { useState } from 'react';
import Modal from '../../components/Modal'

const title1 = "VISADOS Y AUTORIZACIONES";
const content1 = "Como extranjero necesitará un visado de estancia (turismo o estudio) o un permiso de residencia (que le pueda permitir trabajar o no depende del caso) para estar en España de forma legal. Por lo anterior, nuestra intención es poder asesorarle y empezar los trámites incluso antes que usted se encuentre en el país.";
const title2 = "VISADO DE ESTUDIOS, TRABAJO Y SU PRÓRROGA";
const content2 = "Este visado lo habilitará a permanecer en España para cursar cualquier tipo de estudios, trabajos de investigación, formación e intercambio de alumnos. Para su obtención le asesoraremos sobre los trámites que debe realizar y los documentos que debe aportar (tanto en la solicitud inicial como en la prórroga de estancia por estudios).De igual modo, abogados sin frontera, podremos asesorarle en aspectos como: Autorización para sus familiares a permanecer en España debido a la obtención de su visado de estudios; y Compaginación de sus estudios con una autorización de trabajo por cuenta ajena o propia.";
const title3 = "REAGRUPACIÓN FAMILIAR";
const content3 = "Los extranjeros que cuentan con una autorización de residencia o de residencia y trabajo, tienen derecho a reagruparse con ciertos miembros de su familia. Esto implica la posibilidad que esos familiares puedan estar con el/la reagrupante en España con un estatus regular (legal). En algunos casos, dependiendo del tipo de autorización que tenga, deberá esperar un año para hacerlo. En otros casos la solicitud de reagrupación familiar se puede realizar de forma simultánea a la autorización de residencia o de residencia y trabajo del familiar reagrupante. Nuestro interés es ayudarlo a obtener la referida autorización de residencia por reagrupación familiar.";
const title4 = "ARRAIGO SOCIAL, LABORAL Y FAMILIAR";
const content4 = "¿Se encuentra en España de manera irregular? Si es así, deje de preocuparse. Tramitaremos por usted la autorización por circunstancias excepcionales correspondiente para que obtenga una autorización que le permita residir y trabajar legalmente en España.";
const title5 = "SOLICITUD DE NACIONALIDAD ESPAÑOLA";
const content5 = "Una vez analizada su circunstancia y en el caso que sea factible, le ayudamos a obtener la nacionalidad española por cualquiera de los medios previstos para ello (residencia, opción, posesión de estado, etc.). De esa manera no sólo obtendrá todos los beneficios de ser español, sino también las ventajas de la ciudadanía comunitaria.";
const title6 = "AUTORIZACIÓN DE RESIDENCIA NO LUCRATIVA";
const content6 = "Este tipo de autorización le permite residir con estatus regular en España, pero no lo habilita para desarrollar actividades laborales o profesionales.Con este permiso irá acumulando el tiempo necesario para posteriormente optar a la nacionalidad española por residencia, lo cual no podría hacer si estuviese en régimen de estancia, como sucede cuando tiene un visado por turismo o estudios. Le asesoraremos sobre los requisitos que debe cumplir  para obtener este tipo de autorización en España.";
const title7 = "OTROS TRÁMITES RELACIONADOS CON LA MATERIA DE EXTRANJERÍA";
const content7 = "Los servicios antes mencionados son a título enunciativo, ya que éstos son los que normalmente nos solicitan nuestros clientes. No obstante, como despacho de abogados expertos en extranjería e inmigración, tratamos cualquier otro aspecto relacionado con esta materia.";

const SectionWeDo = () => {

    const [modalInfo, setModalInfo] = useState({ title: '', content: '', image: '01-full.jpg' })

    const updateModal = (title, content, image) => {
        setModalInfo({ title, content, image })
    }

    const { title, content, image } = modalInfo;

    return (
        <>
            <section className="page-section" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">¿Qué hacemos?</h2>
                            <h3 className="section-subheading text-muted">Estos son nuestros principales servicios:</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" onClick={() => updateModal(title1, content1, '01-full.jpg')} href="#bt-modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid img-fluid-thumbnail" src={require('../../assets/img/portfolio/01-full.jpg')} alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <h4>VISADOS Y AUTORIZACIONES</h4>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" onClick={() => updateModal(title2, content2, '02-full.jpg')} href="#bt-modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid img-fluid-thumbnail" src={require('../../assets/img/portfolio/02-full.jpg')} alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <h4>VISADO DE ESTUDIOS, TRABAJO Y SU PRÓRROGA</h4>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" onClick={() => updateModal(title3, content3, '03-full.jpg')} href="#bt-modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid img-fluid-thumbnail" src={require('../../assets/img/portfolio/03-full.jpg')} alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <h4>REAGRUPACIÓN FAMILIAR</h4>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" onClick={() => updateModal(title4, content4, '04-full.jpg')} href="#bt-modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid img-fluid-thumbnail" src={require('../../assets/img/portfolio/04-full.jpg')} alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <h4>ARRAIGO SOCIAL, LABORAL Y FAMILIAR</h4>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" onClick={() => updateModal(title5, content5, '05-full.jpg')} href="#bt-modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid img-fluid-thumbnail" src={require('../../assets/img/portfolio/05-full.jpg')} alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <h4>SOLICITUD DE NACIONALIDAD ESPAÑOLA </h4>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" onClick={() => updateModal(title6, content6, '06-full.jpg')} href="#bt-modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid img-fluid-thumbnail" src={require('../../assets/img/portfolio/06-full.jpg')} alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <h4>AUTORIZACIÓN DE RESIDENCIA NO LUCRATIVA</h4>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" onClick={() => updateModal(title7, content7, '07-full.jpg')} href="#bt-modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img className="img-fluid img-fluid-thumbnail" src={require('../../assets/img/portfolio/07-full.jpg')} alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <h4>OTROS TRÁMITES RELACIONADOS CON LA MATERIA DE EXTRANJERÍA</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal id="bt-modal" title={title} image={require(`../../assets/img/portfolio/${image}`)}>
                {content}
            </Modal>
        </>
    );
}

export default SectionWeDo;