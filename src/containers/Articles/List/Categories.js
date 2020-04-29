import React from 'react';
import useArticles from '../../../modules/articles/useHook';

const Categories = () => {

    const [{ categories }, { dispatchLoadArticlesByCategory }] = useArticles();
    const handleClick = (e, id) => {
        e.preventDefault();
        dispatchLoadArticlesByCategory(id);
    }

    return (
        <ul className="list-group overflow-auto">
            {Object.values(categories).map(({ _id, name }) =>
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                (<a
                    href="#"
                    key={_id}
                    onClick={(e) => handleClick(e, _id)}
                    className='list-group-item list-group-item-action'>
                    {name}
                </a>)
            )}
        </ul>
    )
};

export default Categories;