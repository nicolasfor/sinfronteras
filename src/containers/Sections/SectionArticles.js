import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Carousel from '../../components/Carousel';
import Ads from '../../components/Ads';
import ArticlesList from '../Articles/List/index'
import useArticles from '../../modules/articles/useHook';

const SectionArticles = () => {
    const history = useHistory();

    const [{ mostRecent, mostVisited }, {
        dispatchLoadMostVisited,
        dispatchLoadMostRecent,
        dispatchClearSelected,
        dispatchClearArticles }] = useArticles();
    useEffect(() => {
        dispatchClearArticles();
        dispatchClearSelected();
        dispatchLoadMostRecent();
        dispatchLoadMostVisited();
        // eslint-disable-next-line
    }, [])

    const onSelectArticle = (id) => {
        history.push(`/articles/${id}`);
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
                <Ads />
                <Carousel id="mostVisited" content={mostVisited} onSelectArticle={onSelectArticle} />
                <label className="articles-label-border mt-3"> Todos</label>
                <ArticlesList />
            </div>
        </section>
    );
}

export default SectionArticles;