import React from 'react';
import { Helmet } from 'react-helmet';
import { siteMetadata } from '../../gatsby-config';

const defaultTitle = 'Abogados Sin Frontera';
const defaultDescription = 'Somos un equipo de Abogados que se especializa en extranjería e inmigración.';

export default ({ _id, title = defaultTitle, description = defaultDescription, photo, url }) => {

    const link = url ? `${siteMetadata.siteUrl}${url}` : siteMetadata.siteUrl;

    return (
        <Helmet
            title={title}
            link={[
                { rel: "canonical", href: link, }
            ]}
            meta={[
                { name: 'description', content: description },
                { name: 'image', content: photo ? photo : null },
                { name: 'theme-color', content: '#000000' },
                { property: 'og:url', content: link },
                { property: 'og:title', content: title },
                { property: `og:description`, content: description },
                { property: `og:image`, itemprop: "image", content: photo ? photo : null },
                { property: `og:type`, content: `article` },
                { name: `twitter:card`, content: "summary_large_image", },
                { name: `twitter:title`, content: title, },
                { name: `twitter:description`, content: description },
                { name: `twitter:image`, content: photo ? photo : null },
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