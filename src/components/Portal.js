import { useEffect } from 'react';
import ReactDOM from 'react-dom';

/**
 * Componente Portal
 */
const Portal = ({ children }) => {

    useEffect(() => {

        document.getElementsByTagName('body')[0]
            .classList.add('portal-component');

        return () => {
            document.getElementsByTagName('body')[0]
                .classList.remove('portal-component');
        };
    });

    return ReactDOM.createPortal(
        children,
        document.body
    );

};

export default Portal;