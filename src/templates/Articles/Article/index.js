import React, { useEffect } from 'react';
import Ads from '../../../components/Ads'
import Share from '../../../components/Share'
import ContactUs from '../../../components/ContactUs'
import List from '../../../pages/Articles/List'
import Layout from '../../../layouts';
import useArticles from '../../../modules/articles/useHook';
import { siteMetadata } from '../../../../gatsby-config';

const Article = ({ pageContext: { article } }) => {
    const { _id, title, subtitle, date, picture, imageExtension, content, links } = article;

    const { dispatchSetSelected } = useArticles()[1]
    useEffect(() => {
        dispatchSetSelected(_id);
        // eslint-disable-next-line 
    }, [])

    const staticPath = imageExtension ? `articles-img/${_id}.${imageExtension}` : null;
    const photo = imageExtension ? `../../static/${staticPath}` : picture;

    return (
        <Layout navProps={{ hideButtons: true }} seoProps={{ title, description: subtitle, _id, photo: staticPath }}>
            <section className="articles-container">
                <List />
                <div className="card articles-content">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                        {date && <p className="card-text"> {new Date(date).toDateString()}</p>}
                        {photo &&
                            <>
                                <div className="image-container">
                                    <img className="card-img-top" src={photo} alt="Not Available" />
                                </div>
                            </>}
                        <Ads />
                        {content &&
                            content.split('\\n').map((text, index) => <p key={index} className="card-text">{text}</p>)
                        }
                        {
                            links && links.length > 0 &&
                            <>
                                <h6 className="card-title">Enlaces de interes:</h6>
                                <ul className="list-group">
                                    {links.map((link, index) => <li key={index} className="list-group-item"><a className="card-link" href={link}>{link}</a></li>)}
                                </ul>
                            </>
                        }
                        <div className="mt-4">
                            <h6>Comparte:</h6>
                            <Share url={`${siteMetadata.siteUrl}${_id}`} title={title} tags={['ASF']} twitterHandle="@extranjeriaasf" />
                        </div>
                        <div className="mt-4">
                            <h6>Contactanos:</h6>
                            <div className="list-group">
                                <div className="list-group-item ">
                                    <ContactUs />
                                </div>
                            </div>
                        </div>
                        <Ads />
                    </div>
                </div>

            </section>
        </Layout>
    )
};

export default Article;