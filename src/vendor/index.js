import React from 'react';
import SEO from '../components/Seo'
import { OutboundLink } from "gatsby-plugin-google-analytics"

export default () => {
    return (
        <SEO
            title={'Abogados Sin Frontera'}
            meta={[
                { name: 'description', content: 'Somos un equipo de Abogados que se especializa en extranjería e inmigración.' },
                { name: 'theme-colo', content: '#000000' },

            ]}>

            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" rel="stylesheet" crossorigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
            <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css' />
            <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
            <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css' />

            <script type="text/javascript">
                var infolinks_pid = 3253903;
                var infolinks_wsid = 0;
            </script>
            <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
            <OutboundLink href="https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/">
                Visit the Google Analytics plugin page!
            </OutboundLink>
            <script src="https://www.staxon.com/js/button.js"></script>
        </SEO>
    )
}