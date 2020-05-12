import React from 'react';
import ContactUs from '../../components/ContactUs';
import Ads from '../../components/Ads';

const SectionContact = () => {

    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Consulta Gratuita</h2>
                        <h3 className="section-subheading text-muted">Dejanos tu consulta web gratuita junto con tus datos, nos pondremos en contacto</h3>
                    </div>
                </div>
                <ContactUs />
                <Ads />
                <div className="call-us mt-5">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Ó Llamanos</h2>
                            <h3 className="section-subheading text-muted">Y te asistiremos lo antes posible</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="clickme-button web_btn" id="clickme-button" data-key="paola-galindo"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionContact;