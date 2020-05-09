const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-articles-list-categories-js": hot(preferDefault(require("/Users/nicolasfor/Documents/Juridica/sinfronteras-React/src/pages/Articles/List/Categories.js"))),
  "component---src-pages-articles-list-index-js": hot(preferDefault(require("/Users/nicolasfor/Documents/Juridica/sinfronteras-React/src/pages/Articles/List/index.js"))),
  "component---src-pages-articles-list-titles-js": hot(preferDefault(require("/Users/nicolasfor/Documents/Juridica/sinfronteras-React/src/pages/Articles/List/Titles.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/nicolasfor/Documents/Juridica/sinfronteras-React/src/pages/index.js"))),
  "component---src-pages-sections-header-js": hot(preferDefault(require("/Users/nicolasfor/Documents/Juridica/sinfronteras-React/src/pages/Sections/Header.js"))),
  "component---src-pages-sections-index-js": hot(preferDefault(require("/Users/nicolasfor/Documents/Juridica/sinfronteras-React/src/pages/Sections/index.js"))),
  "component---src-pages-sections-intro-js": hot(preferDefault(require("/Users/nicolasfor/Documents/Juridica/sinfronteras-React/src/pages/Sections/Intro.js"))),
  "component---src-pages-sections-section-articles-js": hot(preferDefault(require("/Users/nicolasfor/Documents/Juridica/sinfronteras-React/src/pages/Sections/SectionArticles.js"))),
  "component---src-pages-sections-section-contact-js": hot(preferDefault(require("/Users/nicolasfor/Documents/Juridica/sinfronteras-React/src/pages/Sections/SectionContact.js"))),
  "component---src-pages-sections-section-team-js": hot(preferDefault(require("/Users/nicolasfor/Documents/Juridica/sinfronteras-React/src/pages/Sections/SectionTeam.js"))),
  "component---src-pages-sections-section-we-do-js": hot(preferDefault(require("/Users/nicolasfor/Documents/Juridica/sinfronteras-React/src/pages/Sections/SectionWeDo.js"))),
  "component---src-templates-articles-article-index-js": hot(preferDefault(require("/Users/nicolasfor/Documents/Juridica/sinfronteras-React/src/templates/Articles/Article/index.js")))
}

