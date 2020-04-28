import React from 'react';
import { useHistory } from "react-router-dom";
import Carousel from './Carousel';
import useArticles from '../modules/articles/useHook';

const SectionArticles = () => {
    const history = useHistory();

    const [{ mostRecent, mostVisited }, { dispatchLoadArticleById }] = useArticles();

    const onSelectArticle = (id) => {
        history.push(`/articles/${id}`);
        dispatchLoadArticleById(id);
    };

    if (mostRecent.length === 0 || mostVisited.length === 0) {
        return null;
    }
    return (
        <section className="page-section" id="articles">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Nuestros Artículos</h2>
                    </div>
                </div>
                <label className="articles-label-border"> Los más Recientes</label>
                <Carousel id="mostRecent" content={mostRecent} onSelectArticle={onSelectArticle} />
                <label className="articles-label-border mt-3"> Los más vistos</label>
                <Carousel id="mostVisited" content={mostVisited} onSelectArticle={onSelectArticle} />
                <button className="btn btn-primary btn-lg btn-block mt-4" onClick={() => history.push('/articles')}>
                    Más Artículos
                    <i className="ml-1 fas fa-search"></i>
                </button>
            </div>
        </section>
    );
}

export default SectionArticles;