/**
 * Alerts
 *
 */

// Dependencias
import React from 'react';


/**
 * Alert genérico
 *
 * @param {Object} props Props del componente
 */
const Alert = (props) => {
    if (props.dismissible) {
        return <AlertDismissible {...props} />;
    }
    return (
        <div
            className={[
                'alert',
                props.className ? props.className : null
            ].join(' ').trim()}>
            {props.children}
        </div>
    );
};


/**
 * Alert genérico
 *
 * @param {Object} props Props del componente
 */
const AlertDismissible = (props) => {

    const handlerEvent = () => {
        props.handlerEvent();
    };

    return (
        <div
            className={[
                'alert',
                props.className ? props.className : null
            ].join(' ').trim()}
        >
            <div
                className='alert-backdrop'
                onClick={handlerEvent} />
            {props.children}
        </div>
    );
};

export {
    Alert,
    AlertDismissible
};

export default Alert;