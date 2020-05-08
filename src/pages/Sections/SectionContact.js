import React from 'react';
import ContactUs from '../../components/ContactUs';

const SectionContact = () => {

    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="call-us">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Llamanos</h2>
                            <h3 className="section-subheading text-muted">Y te asistiremos lo antes posible</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="clickme-button web_btn" id="clickme-button" data-key="paola-galindo"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Ó Contactanos</h2>
                        <h3 className="section-subheading text-muted">Dejanos tus datos para ponernos en contacto.</h3>
                    </div>
                </div>
                <div className="clearfix"></div>
                <ContactUs />
            </div>
        </section>
    );
}

export default SectionContact;