import React from 'react';
import useArticles from '../../../modules/articles/useHook';
//import { useHistory } from "react-router-dom";
import { Link } from "gatsby"

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
                <i className="fa fa-arrow-left"></i>
            </button>
            <ul className="list-group">
                {Object.values(list).map(({ _id, title, subtitle }) =>
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    (
                        <Link
                            key={_id}
                            className={`list-group-item list-group-item-action ${selected  === _id ? 'list-group-item-warning' : ''}`}
                            to={`/${_id}`}>
                            <h5 className="mb-1">{title}</h5>
                            <p className="mb-1">{subtitle}</p>
                        </Link>
                    )
                )}
            </ul>
        </>
    )
};

export default Titles;