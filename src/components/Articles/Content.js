import React from 'react';

const Content = ({ article }) => {

    if (!article) {
        return null;
    }
    const { title, content } = article;
    return (
        <div class="card articles-content">
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{content}</p>
            </div>
        </div>
    )
};

export default Content;