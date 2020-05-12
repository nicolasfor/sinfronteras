import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../../layouts';
import { normalizeString } from '../../../util';

const Categories = ({ pageContext: { categories } }) => {

    return (

        <Layout navProps={{ hideButtons: true }} seoProps={{ title: "Categorias", description: "Todas las categorias de nuestros articulos" }}>
            <section className="articles-container d-block">
                <h3>
                    Nuestras Categorias:
                </h3>
                <ul className="list-group overflow-auto w-100">
                    {Object.values(categories).map(({ _id, name }) =>
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        (
                            <Link
                                key={_id}
                                className='list-group-item list-group-item-action'
                                to={`/categories/${normalizeString(name)}`}>
                                <h5 className="mb-1">{name}</h5>
                            </Link>
                        )
                    )}
                </ul>
            </section>
        </Layout>
    )
};

export default Categories;