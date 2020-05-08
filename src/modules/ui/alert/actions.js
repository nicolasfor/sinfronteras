/**
 * ACTIONS CREATORS
 *
 * Son funciones que crean acciones.
 *
 * Es fácil confundir "acción" y "accion creadora" (action creators),
 * por eso en Redux, un creador de acción es simplemente el retorno de una acción.
 * Redux, no es Flux, que despacha directamente una acción, sino que para despachar
 * realmente la acción hay que pasarle el resultado.
 *
 * [1] Tipo de acción
 * [2] Payload
 *
 */

// Tipos de acciones
import {
    SHOW_ALERT,
    HIDE_ALERT
} from './actionTypes';


/**
 * Muestra el elemento UI de alerta
 */
export function showAlert(props) {
    return (dispatch) => {
        dispatch({
            type: SHOW_ALERT,
            payload: props
        });
    };
}

/**
 * Oculta el elemento UI de alerta
 */
export function hideAlert() {
    return (dispatch) => {
        dispatch({
            type: HIDE_ALERT
        });
    };
}

