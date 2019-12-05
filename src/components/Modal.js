import React from 'react';

const Modal = ({ id, title, image, children }) => {
    return (
        <div className="portfolio-modal modal fade" id={id} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal">
                        <div className="lr">
                            <div className="rl"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <div className="modal-body">
                                    <h2 className="text-uppercase text-wrap text-truncate">{title}</h2>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img className="img-fluid d-block mx-auto" src={image} alt="" />
                                        </div>
                                        <div className="col-md-6">
                                            <p>{children}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;