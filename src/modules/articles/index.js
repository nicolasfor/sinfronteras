import { combineReducers } from 'redux';

import { LOAD_CATEGORIES, LOAD_MOST_VISITED, LOAD_MOST_RECENT, LOAD_ARTICLES, SET_SELECTED, SET_IS_FETCHED } from './actionTypes';

export * from './actions';

function list(state = {}, action) {
    switch (action.type) {
        case LOAD_ARTICLES:
            return action.payload
        default:
            return state;
    }
};
function mostVisited(state = [], action) {
    switch (action.type) {
        case LOAD_MOST_VISITED:
            return action.payload
        default:
            return state;
    }
};
function mostRecent(state = [], action) {
    switch (action.type) {
        case LOAD_MOST_RECENT:
            return action.payload
        default:
            return state;
    }
};

function categories(state = {}, action) {
    switch (action.type) {
        case LOAD_CATEGORIES:
            return action.payload
        default:
            return state;
    }
};

function selected(state = null, action) {
    switch (action.type) {
        case SET_SELECTED:
            return action.payload
        default:
            return state;
    }
};


function isFetched(state = false, action) {
    switch (action.type) {
        case SET_IS_FETCHED:
            return action.payload
        default:
            return state;
    }
};

export default combineReducers({
    categories,
    list,
    mostVisited,
    mostRecent,
    selected,
    isFetched
});