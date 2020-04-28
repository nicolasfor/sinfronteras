import { useDispatch, useSelector } from 'react-redux';
import {
    fetchMostRecent,
    fetchMostVisited,
    fetchArticlesByString,
    fetchArticleById,
    fetchArticlesByCategory,
    fetchCategories
} from '../../util';
import {
    loadMostVisited,
    loadMostRecent,
    loadCategories,
    loadArticles,
    setSelected,
    setIsFetched
} from './actions'
import { show_loading, hidden_loading } from '../ui/loading/actions'

const useArticles = () => {
    const dispatch = useDispatch();
    const _articles = useSelector(state => state.articles);


    const dispatchClearArticles = async () => {
        dispatch(loadArticles({}))
    };
    const dispatchLoadMostVisited = async () => {
        if (_articles.mostVisited.length === 0) {
            const docs = await fetchMostVisited();
            dispatch(loadMostVisited(docs))
        }
    };
    const dispatchLoadMostRecent = async () => {
        if (_articles.mostRecent.length === 0) {
            const docs = await fetchMostRecent();
            dispatch(loadMostRecent(docs))
        }
    };

    const dispatchLoadArticlesByCategory = async (categoryId) => {
        try {
            dispatch(show_loading());
            const docs = await fetchArticlesByCategory(categoryId);
            dispatch(loadArticles(docs))
        }
        catch (error) {
            console.log('error: ', error);

        }
        dispatch(hidden_loading());
    };

    const dispatchLoadArticlesByString = async (str) => {
        try {
            dispatch(show_loading());
            const docs = await fetchArticlesByString(str);
            dispatch(loadArticles(docs))
        }
        catch (error) {

        }
        dispatch(hidden_loading());

    };


    const dispatchLoadCategories = async (showLoad) => {
        try {
            if (showLoad) {
                dispatch(show_loading());
            }
            if (!_articles.isFetched) {
                const docs = await fetchCategories();
                dispatch(loadCategories(docs));
                dispatchSetIsFetched(true);
            }
        }
        catch (error) {

        }
        if (showLoad) {
            dispatch(hidden_loading());
        }
    };

    const dispatchSetSelected = (payload) => {
        dispatch(setSelected(payload));
    };

    const dispatchLoadArticleById = async (id) => {
        try {
            dispatch(show_loading());
            const article = await fetchArticleById(id);
            dispatchSetSelected(article);
        }
        catch (error) {
            console.log('error: ', error);

        }
        dispatch(hidden_loading());
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
            dispatchSetSelected,
            dispatchSetIsFetched,
            dispatchLoadArticlesByCategory,
            dispatchLoadArticleById,
            dispatchLoadArticlesByString
        }
    ]
}

export default useArticles;