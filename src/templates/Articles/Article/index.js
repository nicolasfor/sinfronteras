import React, { useEffect } from 'react';
import Ads from '../../../components/Ads'
import Share from '../../../components/Share'
import List from '../../../pages/Articles/List'
import Layout from '../../../layouts';
import useArticles from '../../../modules/articles/useHook';
import { siteMetadata } from '../../../../gatsby-config';

const Article = ({ pageContext: { article } }) => {
    const { _id, title, subtitle, date, picture, content, links } = article;

    const { dispatchSetSelected } = useArticles()[1]
    useEffect(() => {
        dispatchSetSelected(_id);
        // eslint-disable-next-line 
    }, [])

    return (
        <Layout navProps={{ hideButtons: true }} seoProps={{ title, description: subtitle, _id }}>
            <section className="articles-container">
                <List />
                <div className="card articles-content">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                        {date && <p className="card-text"> {new Date(date).toDateString()}</p>}
                        {picture && picture.length > 0 &&
                            <>
                                <div className="image-container">
                                    <img className="card-img-top" src={picture} alt="Not Available" />
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
                                <ul class="list-group">
                                    {links.map((link, index) => <li class="list-group-item"><a className="card-link" key={index} href={link}>{link}</a></li>)}
                                </ul>
                            </>
                        }

                        <Share url={`${siteMetadata.siteUrl}${_id}`} title={title} tags={['ASF']} twitterHandle="@extranjeriaasf" />
                        <Ads />
                    </div>
                </div>

            </section>
        </Layout>
    )
};

export default Article;