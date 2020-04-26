
// Constante que representan los tipos de acciones
import {
    SHOW_LOADING,
    HIDE_LOADING
} from './actionTypes';

// Se hacen disponibles en este archivo las acciones disponibles
export * from './actions';

/**
* ¿Está mostrándose la carga?
* @param {Boolean} state Estado 
* @param {String} action Tipo de acción
* @return {Boolean}
*/
function isLoading(state = false, action) {
    switch (action.type) {
        case SHOW_LOADING:
            return true;
        case HIDE_LOADING:
            return false;
        default:
            return state;
    }
}

// Se exporta el Reducer
export default isLoading;