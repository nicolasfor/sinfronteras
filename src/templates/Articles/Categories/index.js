import React from 'react';
import { Link } from 'gatsby';

const Categories = ({ pageContext: { categories } }) => {

    return (
        <ul className="list-group overflow-auto">
            {Object.values(categories).map(({ _id, name }) =>
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                (<li
                    key={_id}
                    style={{
                        textAlign: 'center',
                        listStyle: 'none',
                        display: 'inline-block'
                    }}
                >
                    <Link to={`/categories/${name}`}>
                        <p>{name}</p>
                    </Link>
                </li>)
            )}
        </ul>
    )
};

export default Categories;