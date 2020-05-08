/**
 * REDUCERS
 *
 * Ya que no podemos modificar el estado directamente
 * (tiene que ser a través de acciones) y el estado está almacenado
 * en un único Store (Store Global), para especificar como realizar los
 * cambios en el árbol del estado, utilizamos funciones puras llamadas reducers.
 *
 * Una función pura es simplemente una función que ante
 * los mismos datos de entrada devuelve el mismo resultado.
 * Es decir, la siguiente función de ejemplo sería una función pura:
 *
 * function suma (a, b) {
 *     return a + b;
 * }
 *
 * Esta función para los mismos parámetros, devuelve siempre lo mismo.
 * Si llamamos a suma(1, 2) siempre devolverá 3.
 * De ésta manera es más sencillo depurar y encontrar errores y es más fácil testear.
 *
 * El reducer es simplemente eso, una función que recibe dos parámetros,
 * el "estado inicial" y una "acción" y dependiendo del tipo de acción realizará
 * una operación u otra en el estado.
 * Siempre de manera inmutable, no podemos modificar el estado,
 * sino crear una copia a partir del anterior. De esta forma es más fácil
 * rastrear posibles errores.
 *
 * Ejemplo de reducer:
 * function reducer (state, action) {
 *     switch(action.type) {
 *         case 'ADD_ITEM':
 *             return state.concat(action.item);
 *         case 'REMOVE_ITEM':
 *             ...
 *         default:
 *             return state;
 *     }
 * }
 *
 */

// Constante que representan los tipos de acciones
import {
    SHOW_ALERT,
    HIDE_ALERT
} from './actionTypes';

export * from './actions';

/**
 * Props de la modal
 * @param {Array} state Props de la modal
 * @param {String} action Tipo de acción
 */
function alert(state = null, action) {

    switch (action.type) {
        case SHOW_ALERT:
            return action.payload
        case HIDE_ALERT:
            return null;
        default:
            return state;
    }
}

export default alert;