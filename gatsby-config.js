module.exports = {
    siteMetadata: {
        title: `Abogados Sin Frontera`,
        siteUrl: `https://www.abogadosinfrontera.es/`,
        description: `Somos un equipo de Abogados que se especializa en extranjería e inmigración.`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                includePaths: ["src/assets/styles/scss"],
                output: 'src/assets/styles/css',
                recursive: true,
                watch: true
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-164864542-1",
                head: true,
                cookieDomain: "abogadosinfrontera.es",
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Abogados Sin Fronteras`,
                short_name: `ASF`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: 'src/assets/img/logos/main.png'
            },
        },
        {
            resolve: `gatsby-plugin-google-adsense`,
            options: {
                publisherId: `ca-pub-4408212865560272`
            },
        },
        {
            resolve: `gatsby-plugin-react-helmet`
        },
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                google: {
                    families: ['Montserrat', 'Kaushan Script', 'Droid Serif', 'Roboto Slab']
                }
            }
        }
    ]
}