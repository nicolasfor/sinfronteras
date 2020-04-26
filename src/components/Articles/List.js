import React, { useState } from 'react';
import useArticles from '../../modules/articles/useHook';

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
const Titles = () => {

    const [{ list, selected }, { dispatchClearArticles, dispatchLoadArticleById }] = useArticles();
    const handleClick = (e) => {
        e.preventDefault();
        dispatchClearArticles()
    };
    const onSelectArticle = (e, id) => {
        e.preventDefault();
        dispatchLoadArticleById(id);
    };
    return (
        <>
            <button className="btn btn-primary btn-lg btn-block" onClick={handleClick}>
                <i className="fas fa-arrow-left"></i>
            </button>
            <ul className="list-group overflow-auto">
                {Object.values(list).map(({ _id, title }) =>
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    (<a
                        href="#"
                        key={_id}
                        onClick={(e) => onSelectArticle(e, _id)}
                        className={`list-group-item list-group-item-action ${selected && selected._id === _id ? 'list-group-item-warning' : ''}`}>
                        {title}
                    </a>)
                )}
            </ul>
        </>
    )
};
const List = () => {
    const [searchedValue, setSearchedValue] = useState();
    const [{ list }, { dispatchLoadArticlesByString }] = useArticles();
    const onChange = (e) => {
        setSearchedValue(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            submit();
        }
    }
    const submit = (e) => {
        e && e.preventDefault();
        if (searchedValue.replace(/\s+/, '').length > 0) {
            dispatchLoadArticlesByString(searchedValue);
        }
    }

    return (
        <div className="card articles-list" >
            <div className="card-body">
                <div className="input-group mb-2">
                    <input onKeyDown={handleKeyDown} onChange={onChange} type="text" className="form-control" id="inlineFormInputGroup" placeholder="Buscar artículo..." />
                    <div className="input-group-append">
                        <div className="input-group-text" onClick={submit}>
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                </div>
                {Object.keys(list).length > 0 ?
                    <Titles /> :
                    <Categories />
                }

            </div>
        </div>
    )
};

export default List;