import React from 'react';
import useArticles from '../../../modules/articles/useHook';
import { useHistory } from "react-router-dom";

const Titles = () => {
    const history = useHistory();
    const [{ list, selected }, { dispatchClearArticles }] = useArticles();
    const handleClick = (e) => {
        e.preventDefault();
        dispatchClearArticles()
    };
    const onSelectArticle = (e, id) => {
        e.preventDefault();
        if (selected && selected._id === id) {
            return;
        }
        history.push(`/articles/${id}`);
    };
    return (
        <>
            <button className="btn btn-primary btn-lg btn-block" onClick={handleClick}>
                <i className="fas fa-arrow-left"></i>
            </button>
            <ul className="list-group">
                {Object.values(list).map(({ _id, title, subtitle }) =>
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    (<a
                        href="#"
                        key={_id}
                        onClick={(e) => onSelectArticle(e, _id)}
                        className={`list-group-item list-group-item-action ${selected && selected._id === _id ? 'list-group-item-warning' : ''}`}>
                        <h5 className="mb-1">{title}</h5>
                        <p className="mb-1">{subtitle}</p>
                    </a>)
                )}
            </ul>
        </>
    )
};

export default Titles;