import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useArticles from '../../../modules/articles/useHook';
//import { useHistory } from "react-router-dom";
import { Link } from "gatsby"
import { normalizeString } from '../../../util';

const Titles = () => {
    //const history = useHistory();
    const [{ list, selected }, { dispatchClearArticles }] = useArticles();
    const handleClick = (e) => {
        e.preventDefault();
        dispatchClearArticles()
    };
    return (
        <>
            <button className="btn btn-primary btn-lg btn-block" onClick={handleClick}>
                <FontAwesomeIcon className="ml-1" icon="arrow-left" />
            </button>
            <ul className="list-group">
                {Object.values(list).map(({ _id, title, category, subtitle }) => {
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    return (
                        <Link
                            key={_id}
                            className={`list-group-item list-group-item-action ${selected === _id ? 'list-group-item-selected' : ''}`}
                            to={`/categories/${normalizeString(category)}/${normalizeString(title)}`}>
                            <h6 className="mb-1">{title}</h6>
                            <p className="mb-1">{subtitle}</p>
                        </Link>
                    )
                }
                )}
            </ul>
        </>
    )
};

export default Titles;