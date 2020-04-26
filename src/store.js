import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import articles from './modules/articles';
import loading from './modules/ui/loading';


export default function configureStore() {

    const enhancer = applyMiddleware(thunk);
    const ui = combineReducers({
        loading
    })
    const appReducer = combineReducers({
        articles,
        ui
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