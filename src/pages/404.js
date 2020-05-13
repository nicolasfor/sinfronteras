import React from 'react';
import Layout from '../layouts';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const NotFoundPage = () => {
    return (
        <Layout>
            <section className="page-section d-flex flex-column align-items-center justify-content-center">
                <h1>Página no encontrada</h1>
                <AnchorLink
                    to="/#articles"
                    title="Regresar"
                    className="btn btn-primary btn-xl text-uppercase m-5"
                    stripHash
                />
            </section>
        </Layout>
    );
}

export default NotFoundPage;