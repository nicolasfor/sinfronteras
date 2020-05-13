import React from 'react';
import { Link } from 'gatsby';
import Ads from '../../../components/Ads';
import Layout from '../../../layouts';
import { normalizeString } from '../../../util';

const Articles = ({ pageContext: { articles, category } }) => {
    return (

        <Layout navProps={{ hideButtons: true }} seoProps={{ title: category, description: `Articulos de la categoria ${category}` }}>
            <Ads />
            <section className="articles-container d-block pt-4">
                <div className="card articles-content">
                    <div className="card-body">
                        <h3 className="card-title"> {`Articulos de ${category}`}:</h3>
                        <ul className="list-group overflow-auto w-100">
                            {Object.values(articles).map(({ _id, title, subtitle }) =>
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                (
                                    <Link
                                        key={_id}
                                        className='list-group-item list-group-item-action'
                                        to={`/categories/${normalizeString(category)}/${normalizeString(title)}`}>
                                        <h6 className="mb-1">{title}</h6>
                                        <p className="mb-1">{subtitle}</p>
                                    </Link>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </section>
            <Ads />
        </Layout>
    )
};

export default Articles;