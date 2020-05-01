import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import articles from './modules/articles';


export default function configureStore() {

    const enhancer = applyMiddleware(thunk);

    const appReducer = combineReducers({
        articles,
    });

    const store = createStore(
        appReducer,
        enhancer
    );

    if (
        process.env.NODE_ENV === 'development' &&
        typeof window !== 'undefined'
    ) {
        window.store = store;
    }

    return store;
}