
import {
    SHOW_LOADING,
    HIDE_LOADING
} from './actionTypes';

/**
* Muestra el loading de la aplicación
*/
export function show_loading() {
    return (dispatch) => {
        dispatch({
            type: SHOW_LOADING // [1]
        });
    };
}

/**
* Oculta el loading de la aplicación
*/
export function hidden_loading() {
    return (dispatch) => {
        dispatch({
            type: HIDE_LOADING // [1]
        });
    };
}