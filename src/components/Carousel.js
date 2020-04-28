import React from 'react';

const Carousel = ({ id, content, onSelectArticle }) => {

    return (
        <div id={id} className="carousel slide articles-carousel" data-ride="carousel">
            <ol className="carousel-indicators">
                {content.map((el, index) => <li key={index} data-target={`#${id}`} data-slide-to={index} className={index === 0 ? 'active' : ''}></li>)}
            </ol>
            <div className="carousel-inner">
                {content.map(({ _id, title, subtitle }, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                        <h5 className="mb-1">{title}</h5>
                        <p className="mb-1">{subtitle}</p>
                        <div className="carousel-caption">
                            <button className="btn btn-primary " onClick={() => onSelectArticle(_id)}>
                                Ver más
                            <i className="ml-1 fas fa-search"></i>
                            </button>
                        </div>
                    </div>))}
            </div>
            <a className="carousel-control-prev" href={`#${id}`} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={`#${id}`} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div >
    );
}

export default Carousel;