import React, { useState } from 'react';
import sendMail from '../mail';

import useAlert from '../modules/ui/alert/useHook';

const ContactUs = () => {

    const [alert, { dispatchShowAlert }] = useAlert();
    const [values, setValues] = useState({
        name: '',
        city: '',
        email: '',
        phone: '',
        message: '',
        formErrors: { city: null, name: null, email: null, phone: null, message: null }
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        validateField(name, value);
    }

    const validateField = (fieldName, value) => {
        let formErrors = values.formErrors;
        formErrors[fieldName] = value.length === 0 ? ' No puede estar vacio' : null;

        if (!formErrors[fieldName]) {
            switch (fieldName) {
                case 'message':
                    {
                        if (value && value.length > 500) {
                            value = values.message;
                            formErrors.message = "El tamaño máximo permitido es de 500 caracteres"
                        }
                        else {
                            formErrors.message = null;
                        }
                        break;
                    }
                case 'email':
                    {
                        formErrors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? null : ' Email invalido'
                        break;
                    }
                case 'phone':
                    {
                        // eslint-disable-next-line no-useless-escape
                        value = value.replace(/[^0-9\+]+/g, "");
                        formErrors.phone = value.match(/[0-9]/i) ? null : ' Teléfono invalido'
                        break;
                    }
                default:
                    break;
            }
        }

        setValues({ ...values, [fieldName]: value, formErrors: { ...formErrors } })
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        let invalid = false;
        for (const key in values.formErrors) {
            if (values.formErrors[key] != null)
                invalid = true;
        }
        if (!invalid) {
            const { name, city, email, phone, message } = values;
            try {
                await sendMail({ name, city, phone, email, message })
                dispatchShowAlert("Enviado Exitosamente. Nos pondremos en contacto");
                setValues({
                    name: '',
                    city: '',
                    email: '',
                    phone: '',
                    message: '',
                    formErrors: { name: null, city: null, email: null, phone: null, message: null }
                })
            }
            catch (error) {
                dispatchShowAlert("No se ha enviado, vuelve a intentar mas tarde", 'warning');
            }
        }
    }

    const { name, city, email, phone, message, formErrors } = values;

    return (
        <div className="row">
            <div className="col-lg-12">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" name="name" onChange={handleInput} onBlur={() => validateField('name', name)} type="text" placeholder="Tu nombre *" required="required" value={name} />
                                <p className="help-block text-danger">{formErrors.name}</p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="email" onChange={handleInput} onBlur={() => validateField('email', email)} type="email" placeholder="Tu correo *" required="required" value={email} />
                                <p className="help-block text-danger">{formErrors.email}</p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="phone" onChange={handleInput} onBlur={() => validateField('phone', phone)} type="tel" placeholder="Tu teléfono *" required="required" value={phone} />
                                <p className="help-block text-danger">{formErrors.phone}</p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" name="city" onChange={handleInput} onBlur={() => validateField('city', city)} type="text" placeholder="Tu ciudad *" required="required" value={city} />
                                <p className="help-block text-danger">{formErrors.city}</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea className="form-control" name="message" onChange={handleInput} onBlur={() => validateField('message', message)} placeholder="Tu consulta *" required="required" value={message}></textarea>
                                <p className="help-block text-danger">{formErrors.message}</p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-lg-12 text-center">
                            <div id="success"></div>
                            <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Enviar mensaje</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default ContactUs;