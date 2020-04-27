import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

import List from './List';
import Content from './Content';
import useArticles from '../../modules/articles/useHook';
const Articles = () => {

    let params = useParams()
    const [{ selected }, { dispatchLoadCategories, dispatchLoadArticleById }] = useArticles();
    useEffect(() => {
        dispatchLoadCategories(true);
        if (params && params.id) {
            dispatchLoadArticleById(params.id)
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className="black-section" />
            <section className="articles-container">
                <List />
                {selected &&
                    <Content />
                }
            </section>
        </>
    )

}

export default Articles