import React from 'react';
import { Link } from 'gatsby';

const Articles = ({ pageContext: { articles } }) => {
    return (
        <ul className="list-group overflow-auto">
            {Object.values(articles).map(({ _id, title }) =>
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                (<li
                    key={_id}
                    style={{
                        textAlign: 'center',
                        listStyle: 'none',
                        display: 'inline-block'
                    }}
                >
                    <Link to={`/articles/${title}`}>
                        <p>{title}</p>
                    </Link>
                </li>)
            )}
        </ul>
    )
};

export default Articles;