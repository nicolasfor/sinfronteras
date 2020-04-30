
import {
    LOAD_MOST_VISITED,
    LOAD_MOST_RECENT,
    LOAD_CATEGORIES,
    LOAD_ARTICLES,
    SET_SELECTED,
    SET_IS_FETCHED
} from './actionTypes';

export const loadMostVisited = (payload) => {
    return { type: LOAD_MOST_VISITED, payload }
}
export const loadMostRecent = (payload) => {
    return { type: LOAD_MOST_RECENT, payload }
}
export const loadArticles = (payload) => {
    return { type: LOAD_ARTICLES, payload }
}

export const loadCategories = (payload) => {
    return { type: LOAD_CATEGORIES, payload }
}

export const setSelected = (payload) => {
    return { type: SET_SELECTED, payload }
}

export const setIsFetched = (payload) => {
    return { type: SET_IS_FETCHED, payload }
}