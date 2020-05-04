import React from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets//img/logos/main.png'
const defaultTitle = 'Abogados Sin Frontera';
const defaultDescription = 'Somos un equipo de Abogados que se especializa en extranjería e inmigración.';

const domain = 'https://www.abogadosinfrontera.es/';
export default ({ _id, title = defaultTitle, description = defaultDescription }) => {

    const link = _id ? `${domain}${_id}` : domain;

    return (
        <Helmet
            title={title}
            link={[
                { rel: "canonical", href: link, }
            ]}
            meta={[
                { name: 'description', content: description },
                { name: 'theme-color', content: '#000000' },
                { property: 'og:url', content: link },
                { property: 'og:title', content: title },
                { property: `og:description`, content: description },
                { property: `og:type`, content: `website` },
                { name: `twitter:title`, content: title, },
                { name: `twitter:description`, content: description },
            ]}>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" rel="stylesheet" crossorigin="anonymous"></link>

            <script type="text/javascript">
                var infolinks_pid = 3253903;
                var infolinks_wsid = 0;
            </script>
            <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
            <script src="https://www.staxon.com/js/button.js"></script>
        </Helmet>
    )
};