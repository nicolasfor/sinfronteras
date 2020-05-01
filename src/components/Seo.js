import React from 'react';
import { Helmet } from 'react-helmet';

const defaultTitle = 'Abogados Sin Frontera';
const defaultDescription = 'Somos un equipo de Abogados que se especializa en extranjería e inmigración.';

export default ({ children, title = defaultTitle, description = defaultDescription }) => {
    return (
        <Helmet
            title={title}
            meta={[
                { name: 'description', content: description },
                { name: 'theme-color', content: '#000000' },
            ]}>
            {children}
        </Helmet>
    )
};