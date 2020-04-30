import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import Ads from '../../../components/Ads';
import List from '../List/index';
import useArticles from '../../../modules/articles/useHook';
import { useParams } from "react-router-dom";

const Content = () => {

    const { id } = useParams();
    const [{ selected }, { dispatchLoadArticleById }] = useArticles();

    useEffect(() => {
        if (id && id.length > 0) {
            dispatchLoadArticleById(id);
        }
        // eslint-disable-next-line
    }, [id]);

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
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={subtitle} />
            </Helmet>

            <div className="black-section" />
            <section className="articles-container">
                <List />
                <div className="card articles-content">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                        {date && typeof date === 'object' && <p className="card-text"> {date.toDateString()}</p>}
                        {picture && picture.length > 0 &&
                            <>
                                <div className="image-container">
                                    <img className="card-img-top" src={picture} alt="Not Available" />
                                </div>
                                <Ads />
                            </>}

                        {content &&
                            content.split('\\n').map((text, index) => <p key={index} className="card-text">{text}</p>)
                        }
                        {
                            links && links.length > 0 &&
                            <>
                                <h6 className="card-title">Enlaces de interes</h6>
                                {links.map((link, index) => <li key={index}><a className="card-link" key={index} href={link}>{link}</a></li>)}
                                <Ads />
                            </>
                        }
                    </div>
                </div>
            </section>
        </>
    )
};

export default Content;