import React from 'react';
import { Helmet } from 'react-helmet';
import { siteMetadata } from '../../gatsby-config';

const defaultTitle = 'Abogados Sin Frontera';
const defaultDescription = 'Somos un equipo de Abogados que se especializa en extranjería e inmigración.';

export default ({ _id, title = defaultTitle, description = defaultDescription, photoPath, url }) => {

    const link = url ? `${siteMetadata.siteUrl}${url}/` : siteMetadata.siteUrl;
    const photo = photoPath ? `${siteMetadata.siteUrl}${photoPath}` : null;

    return (
        <Helmet
            title={title}
            link={[
                { rel: "canonical", href: link },
                { itemProp: "thumbnailUrl", href: photo }
            ]}
            meta={[
                { name: 'description', content: description },
                { name: 'image', content: photo },
                { name: 'theme-color', content: '#000000' },
                { property: 'og:site_name', content: "Abogados Sin Frontera" },
                { property: 'og:title', content: title.substr(0, 62) },
                { property: `og:description`, content: description.substr(0, 155) },
                { property: 'og:url', content: link },
                { property: `og:image`, itemprop: "image", content: photo },
                { property: `og:type`, content: `article` },
                { name: `twitter:card`, content: "summary_large_image", },
                { name: `twitter:title`, content: title, },
                { name: `twitter:description`, content: description },
                { name: `twitter:image`, content: photo },
            ]}>
            <script type="text/javascript">
                var infolinks_pid = 3253903;
                var infolinks_wsid = 0;
            </script>
            <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
        </Helmet>
    )
};