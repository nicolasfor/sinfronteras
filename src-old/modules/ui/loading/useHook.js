/**
 * HOOKs -> Datos de loading
 *
 */
import { useDispatch, useSelector } from 'react-redux';

import { show_loading, hidden_loading } from './actions'

const useLoading = () => {

    const dispatch = useDispatch();
    const _loading = useSelector(state => state.ui.loading);


    const dispatchShowLoading = () => {
        dispatch(show_loading());
    };

    const dispatchHideLoading = () => {
        dispatch(hidden_loading());
    };

    return [
        _loading,
        {
            dispatchShowLoading,
            dispatchHideLoading
        }
    ]
}

export default useLoading;