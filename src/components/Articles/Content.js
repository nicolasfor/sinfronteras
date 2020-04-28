import React, { useEffect } from 'react';
import Ads from '../Ads';
import useArticles from '../../modules/articles/useHook';

const Content = () => {

    const [{ selected }] = useArticles();

    useEffect(() => {
        window.$('html, body').animate({
            scrollTop: 0
        }, 1000, "easeInOutExpo");
    }, [selected])
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
                    <Ads />
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
                    <Ads />
                </div>
            </div>
        </>
    )
};

export default Content;