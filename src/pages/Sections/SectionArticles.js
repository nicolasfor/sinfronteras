import React, { useEffect } from 'react';
import { Link } from "gatsby";
import Carousel from '../../components/Carousel';
import Ads from '../../components/Ads';
import ArticlesList from '../Articles/List/index'
import useArticles from '../../modules/articles/useHook';

const SectionArticles = () => {

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

    if (mostRecent.length === 0 || mostVisited.length === 0) {
        return null;
    }
    return (
        <section className="page-section articles-container" id="articles">
            <ArticlesList />
            <div className="card articles-content">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Nuestros Artículos</h2>
                        </div>
                    </div>
                    <label className="articles-label-border"> Los más Recientes</label>
                    <Carousel id="mostRecent" content={mostRecent} />
                    <label className="articles-label-border mt-3"> Los más vistos</label>
                    <Ads />
                    <Carousel id="mostVisited" content={mostVisited} />
                    <Link
                        to="/categories">
                        <button className="btn btn-primary btn-block mt-3">
                            Ver Todos
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default SectionArticles;