var plugins = [{
      plugin: require('/Users/nicolasfor/Documents/Juridica/sinfronteras-React/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-164864542-1","head":true,"cookieDomain":"abogadosinfrontera.es"},
    },{
      plugin: require('/Users/nicolasfor/Documents/Juridica/sinfronteras-React/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Abogados Sin Fronteras","short_name":"ASF","start_url":"/","background_color":"#f7f0eb","theme_color":"#a2466c","display":"standalone","icon":"src/assets/img/logos/main.png"},
    },{
      plugin: require('/Users/nicolasfor/Documents/Juridica/sinfronteras-React/node_modules/gatsby-plugin-google-adsense/gatsby-ssr'),
      options: {"plugins":[],"publisherId":"ca-pub-4408212865560272"},
    },{
      plugin: require('/Users/nicolasfor/Documents/Juridica/sinfronteras-React/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/nicolasfor/Documents/Juridica/sinfronteras-React/node_modules/gatsby-plugin-prefetch-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":[{"family":"Montserrat","variants":["400","700"]},{"family":"Kaushan Script"},{"family":"Droid Serif","variants":["400","700","400italic","700italic"]},{"family":"Roboto Slab","variants":["400","100","300","700"]}]},
    },{
      plugin: require('/Users/nicolasfor/Documents/Juridica/sinfronteras-React/node_modules/gatsby-plugin-dark-mode/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/nicolasfor/Documents/Juridica/sinfronteras-React/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
