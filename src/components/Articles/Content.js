import React from 'react';
import useArticles from '../../modules/articles/useHook';

const Content = () => {

    const [{ selected }] = useArticles();

    if (!selected) {
        return null;
    }
    const { date, picture, title, subtitle, content, links } = selected;
    return (
        <>
            <div className="card articles-content">

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                    {date && typeof date === 'object' && <p className="card-text"> {date.toDateString()}</p>}
                    {picture && picture.length > 0 &&
                        <div className="image-container">
                            <img className="card-img-top" src={picture} alt="Not Available" />
                        </div>}
                    {content &&
                        content.split('\\n').map((text, index) => <p key={index} className="card-text">{text}</p>)
                    }
                    {
                        links && links.length > 0 &&
                        <>
                            <h6 className="card-title">Enlaces de interes</h6>
                            {links.map((link, index) => <li><a className="card-link" key={index} href={link}>{link}</a></li>)}
                        </>
                    }
                </div>
            </div>
        </>
    )
};

export default Content;