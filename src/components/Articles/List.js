import React, { useEffect, useState } from 'react';

const List = ({ articles, selected, onSelect }) => {

    const [filteredArticles, setFilteredArticles] = useState({});

    useEffect(() => {
        setFilteredArticles(articles)
    }, [articles])
    const handleClick = (e, id) => {
        e.preventDefault();
        onSelect(id);
    }

    const onChange = (e) => {
        const searched = e.target.value;
        if (searched.replace(/\s+/, '').length > 0) {
            //setFilter();
            const newObject = {};
            Object.values(articles).forEach(({ _id, title, content }) => {
                if (title.toLowerCase().includes(searched.toLowerCase())
                    || content.toLowerCase().includes(searched.toLowerCase())) {
                    newObject[_id] = { _id, title, content };
                }
            })
            setFilteredArticles(newObject);
        }
        else {
            setFilteredArticles(articles);
        }
    }
    return (
        <div className="card articles-list" >
            <div class="card-body">
                <div class="input-group mb-2">
                    <input onChange={onChange} type="text" class="form-control" id="inlineFormInputGroup" placeholder="Buscar artículo..." />
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                </div>
                <ul className="list-group overflow-auto">
                    {Object.values(filteredArticles).map(({ title, _id }) =>
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        (<a
                            href="#"
                            key={title}
                            onClick={(e) => handleClick(e, _id)}
                            class={`list-group-item list-group-item-action ${selected === _id ? 'list-group-item-warning' : ''}`}>
                            {title}
                        </a>)
                    )}
                </ul>
            </div>
        </div>
    )
};

export default List;