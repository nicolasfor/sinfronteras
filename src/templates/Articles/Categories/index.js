import React from 'react';
import { Link } from 'gatsby';
import Ads from '../../../components/Ads';
import Layout from '../../../layouts';
import { normalizeString } from '../../../util';

const Categories = ({ pageContext: { categories } }) => {

    return (

        <Layout navProps={{ showStart: true }} seoProps={{ title: "Categorias", description: "Todas las categorias de nuestros articulos" }}>
            <Ads />
            <section className="articles-container d-block pt-4">
                <div className="card articles-content">
                    <div className="card-body">
                        <h3 className="card-title">Nuestras Categorias:</h3>
                        <ul className="list-group overflow-auto w-100">
                            {Object.values(categories).map(({ _id, name }) =>
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                (
                                    <Link
                                        key={_id}
                                        className='list-group-item list-group-item-action'
                                        to={`/categories/${normalizeString(name)}`}>
                                        <h6 className="mb-1">{name}</h6>
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

export default Categories;