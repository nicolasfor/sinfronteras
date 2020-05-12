import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../util';
import {
    loadMostVisited,
    loadMostRecent,
    loadCategories,
    loadArticles,
    setSelected,
    setIsFetched
} from './actions'

const useArticles = () => {
    const dispatch = useDispatch();

    const _articles = useSelector(state => state.articles);


    const dispatchClearArticles = async () => {
        dispatch(loadArticles({}))
    };

    const dispatchClearSelected = async () => {
        dispatch(setSelected(null));
    };
    const dispatchLoadMostVisited = async () => {
        if (_articles.mostVisited.length === 0) {
            const docs = await api().fetchMostVisited();
            dispatch(loadMostVisited(docs))
        }
    };
    const dispatchLoadMostRecent = async () => {
        if (_articles.mostRecent.length === 0) {
            try {
                const docs = await api().fetchMostRecent();
                dispatch(loadMostRecent(docs))
            }
            catch (error) {

            }
        }
    };

    const dispatchLoadArticlesByCategory = async (categoryId) => {
        try {
            const docs = await api().fetchArticlesByCategory(categoryId, _articles.categories[categoryId].name);
            dispatch(loadArticles(docs))
        }
        catch (error) {
            console.log('error: ', error);

        }
    };

    const dispatchLoadArticlesByString = async (str) => {
        try {
            const docs = await api().fetchArticlesByString(str);
            dispatch(loadArticles(docs))
        }
        catch (error) {

        }

    };


    const dispatchLoadCategories = async () => {
        try {
            if (!_articles.isFetched) {
                const docs = await api().fetchCategories();
                dispatch(loadCategories(docs));
                dispatchSetIsFetched(true);
            }
        }
        catch (error) {
            console.log('error: ', error);
        }
    };

    const dispatchSetSelected = async (id) => {
        dispatch(setSelected(id));
        try {
            if (process.env.NODE_ENV === 'production') {
                await api().updateViewsById(id);
            }
        }
        catch (error) {

        }
    };

    const dispatchLoadArticleById = async (id) => {
        try {
            const article = await api().fetchArticleById(id);
            dispatchSetSelected(article);
        }
        catch (error) {
            console.log('error: ', error);
        }
    };


    const dispatchSetIsFetched = (payload) => {
        dispatch(setIsFetched(payload));
    };


    return [
        { ..._articles },
        {
            dispatchLoadCategories,
            dispatchLoadMostVisited,
            dispatchLoadMostRecent,
            dispatchClearArticles,
            dispatchClearSelected,
            dispatchSetSelected,
            dispatchSetIsFetched,
            dispatchLoadArticlesByCategory,
            dispatchLoadArticleById,
            dispatchLoadArticlesByString
        }
    ]
}

export default useArticles;