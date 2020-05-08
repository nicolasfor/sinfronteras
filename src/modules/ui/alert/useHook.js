/**
 * HOOKs -> Datos de Alerta
 *
 */

// Dependencias
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { showAlert, hideAlert } from './actions';

/**
 * Hook
 *
 */
const useAlert = () => {

    const data = useSelector(state => state.ui.alert);
    const dispatch = useDispatch();

    /**
     * Muestra el elemento UI de alerta
     */
    const dispatchShowAlert = (content, type) => {
        const handlerEvent = dispatchHideAlert;
        dispatch(showAlert({ content, type, handlerEvent }));
    };

    /**
     * Oculta el elemento UI de alerta
     */
    const dispatchHideAlert = () => {
        dispatch(hideAlert());
    };



    // Retorna una matriz con el estado y los métodos disponibles
    return [
        { ...data },
        {
            dispatchShowAlert,
            dispatchHideAlert
        }
    ];

};

export default useAlert;