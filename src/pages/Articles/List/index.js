import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useArticles from '../../../modules/articles/useHook';
import Categories from './Categories';
import Titles from './Titles';
import Ads from '../../../components/Ads';

const List = () => {
    const [searchedValue, setSearchedValue] = useState();
    const [{ list }, { dispatchLoadArticlesByString, dispatchLoadCategories }] = useArticles();

    useEffect(() => {
        dispatchLoadCategories();
        // eslint-disable-next-line
    }, [])
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
                            <FontAwesomeIcon icon="search" />
                        </div>
                    </div>
                </div>
                {Object.keys(list).length > 0 ?
                    <Titles /> :
                    <Categories />
                }

            </div>
            <Ads />
        </div>
    )
};

export default List;