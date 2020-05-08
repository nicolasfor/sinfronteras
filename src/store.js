import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import articles from './modules/articles';
import alert from './modules/ui/alert';


export default function configureStore() {

    const enhancer = applyMiddleware(thunk);

    const ui = combineReducers({
        alert,
    });

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