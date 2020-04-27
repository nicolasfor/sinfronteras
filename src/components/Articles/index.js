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
            <Ads />
            <section className="articles-container">
                <List />
                {selected &&
                    <Content />
                }
            </section>
            <Ads />
        </>
    )

}

export default Articles