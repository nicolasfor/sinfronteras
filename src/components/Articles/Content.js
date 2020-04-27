import React from 'react';
import useArticles from '../../modules/articles/useHook';
import Ads from '../Ads';

const Content = () => {

    const [{ selected }] = useArticles();

    if (!selected) {
        return null;
    }
    const { title, content } = selected;
    return (
        <>
            <div className="card articles-content">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <Ads />
                </div>
            </div>
        </>
    )
};

export default Content;