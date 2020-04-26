import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import useLoading from '../modules/ui/loading/useHook'


/**
 * React Portal para las modales
 *
 */
const Portal = (props) => {

    useEffect(() => {

        document.getElementsByTagName('body')[0]
            .classList.add('portal');

        return () => {
            document.getElementsByTagName('body')[0]
                .classList.remove('portal');
        };
    });

    return ReactDOM.createPortal(
        props.children,
        document.body
    );

};

const Loading = () => {
    const isLoading = useLoading()[0];
    if(!isLoading){
        return null;
    }
    return (
        <Portal>
            <div className="loading-component">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </Portal>
    )
}

export default Loading;