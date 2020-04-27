import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

import List from './List';
import Content from './Content';
import useArticles from '../../modules/articles/useHook';
import Ads from '../Ads';
const Articles = () => {

    let params = useParams()
    const [{ selected }, { dispatchLoadCategories, dispatchLoadArticleById }] = useArticles();
    useEffect(() => {
        dispatchLoadCategories();
        if (params && params.id) {
            dispatchLoadArticleById(params.id)
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="black-section" />
            <section className="articles-container row">
                <Ads />
                <div className={`col-sm-12 ${selected ? 'col-md-4' : 'col-md-12'}`}>
                    <List />
                </div>
                {selected &&
                    <div className="col-sm-12 col-md-8">
                        <Content />
                    </div>
                }
                <Ads />
            </section>
        </>
    )

}

export default Articles