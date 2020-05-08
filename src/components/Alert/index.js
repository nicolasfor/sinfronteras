/**
 * Alert de la aplicación
 *
 */

// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Componentes
import { AlertDismissible as AlertComponent } from './Alert';

export const Alert = props => props.alert ?
    <AlertComponent
        handlerEvent={props.alert.handlerEvent}
        className={[
            'sticky-top',
            props.alert.type === 'warning' ? 'alert-warning' : 'alert-success'
        ].join(' ').trim()}>
        {props.alert.content}
    </AlertComponent>
    : null;

// Verificación de los tipos de las props
Alert.propTypes = {
    alert: PropTypes.object
};

// Mapea el estado a las props
const mapStateToProps = (state) => {
    return {
        alert: state.ui.alert
    };
};

// Mapea la acciones a despachar (Actions cretors) a props
const mapDispatchToProps = {};

// Utilizar la exportación predeterminada para el componente conectado para la aplicación
export default connect(mapStateToProps, mapDispatchToProps)(Alert);