(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8+s/":function(e,t,n){"use strict";n("pJf4");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},F0uZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=s;var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("Wbzz"),i=n("dj5g"),c=n("PDH8");function s(e){var t=e.to,n=e.title,r=e.children,c=e.className,s=e.stripHash,l=void 0!==s&&s,u={to:l?(0,i.stripHashedLocation)(t):t,onClick:function(e){return l?(0,i.handleStrippedLinkClick)(t,e):(0,i.handleLinkClick)(t,e)}};return n&&(u.title=n),c&&(u.className=c),a.default.createElement(o.Link,u,Boolean(r)?r:n)}s.propTypes=c.anchorLinkTypes},N8DM:function(e,t,n){"use strict";var r=n("5NKs");t.__esModule=!0;var a=r(n("QL1J"));t.ThemeToggler=a.default},PDH8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.anchorLinkTypes=void 0;var r,a=(r=n("17x9"))&&r.__esModule?r:{default:r};var o={to:a.default.string.isRequired,title:a.default.string,className:a.default.string,stripHash:a.default.bool,children:a.default.node};t.anchorLinkTypes=o},QL1J:function(e,t,n){"use strict";var r=n("5NKs");t.__esModule=!0,t.default=void 0;var a=r(n("v06X")),o=r(n("XEEL")),i=r(n("0jh0")),c=r(n("q1tI")),s=r(n("17x9")),l=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,(0,i.default)((0,a.default)(t),"state",{theme:null}),t}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.setState({theme:window.__theme}),window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return c.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(c.default.Component);l.propTypes={children:s.default.func.isRequired};var u=l;t.default=u},S1u2:function(e,t,n){e.exports=n.p+"static/main-90422c2d03f1718921ceeb6cf45bc0fe.png"},aArQ:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("7O5W"),i=n("8tEE"),c=n("wHSu"),s=n("oEq0"),l=n("IP2g"),u=n("i8i4"),f=n.n(u),p=function(e){var t=e.children;return Object(r.useEffect)((function(){return document.getElementsByTagName("body")[0].classList.add("portal-component"),function(){document.getElementsByTagName("body")[0].classList.remove("portal-component")}})),f.a.createPortal(t,document.body)},m=function(e){var t=e.className,n=e.onClick;return a.a.createElement(p,null,a.a.createElement("div",{onClick:n,className:["c-overlay",t].join(" ").trim()}))},d=n("N8DM"),h=function(e){var t=e.showStart,o=Object(r.useState)(!1),i=o[0],c=o[1],u=function(){c(!i)};return a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"navbar-header"},a.a.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button",onClick:u},"Menu",a.a.createElement(l.a,{icon:"bars"})),a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{className:"logo-img",src:n("S1u2"),alt:""}),a.a.createElement(s.AnchorLink,{to:"/#header",title:"Abogados Sin Frontera",className:"navbar-brand",stripHash:!0}))),a.a.createElement("div",{className:"collapse navbar-collapse "+(i?"show":"")},a.a.createElement("ul",{className:"navbar-nav text-uppercase ml-auto"},t&&a.a.createElement("li",{className:"nav-item"},a.a.createElement(s.AnchorLink,{to:"/",title:"Inicio",className:"nav-link",stripHash:!0})),a.a.createElement("li",{className:"nav-item"},a.a.createElement(s.AnchorLink,{to:"/#articles",title:"Artículos",className:"nav-link",stripHash:!0})),a.a.createElement("li",{className:"nav-item"},a.a.createElement(s.AnchorLink,{to:"/#start",title:"Conocenos",className:"nav-link",stripHash:!0})),a.a.createElement("li",{className:"nav-item"},a.a.createElement(s.AnchorLink,{to:"/#services",title:"Nuestros Servicios",className:"nav-link",stripHash:!0})),a.a.createElement("li",{className:"nav-item"},a.a.createElement(s.AnchorLink,{to:"/#contact",title:"Consulta Gratuita",className:"nav-link",stripHash:!0})),a.a.createElement(d.ThemeToggler,null,(function(e){var t=e.theme,n=e.toggleTheme;return a.a.createElement("li",{className:"nav-item",onClick:function(){return n("light"===t?"dark":"light")}},a.a.createElement("i",{className:"fa "+("light"===t?"fa-moon-o text-light":"fa-sun-o")}))}))))),i&&a.a.createElement(m,{onClick:u}))},g=n("qhky"),y=n("jFb6"),b=function(e){e._id;var t=e.title,n=void 0===t?"Abogados Sin Frontera":t,r=e.description,o=void 0===r?"Somos un equipo de Abogados que se especializa en extranjería e inmigración.":r,i=e.photoPath,c=e.url,s=c?""+y.siteMetadata.siteUrl+c+"/":y.siteMetadata.siteUrl,l=i?""+y.siteMetadata.siteUrl+i:null;return a.a.createElement(g.a,{title:n,link:[{rel:"canonical",href:s},{itemProp:"thumbnailUrl",href:l}],meta:[{name:"description",content:o},{name:"image",content:l},{name:"theme-color",content:"#000000"},{property:"og:site_name",content:"Abogados Sin Frontera"},{property:"og:title",content:n.substr(0,62)},{property:"og:description",content:o.substr(0,155)},{property:"og:url",content:s},{property:"og:image",itemprop:"image",content:l},{property:"og:type",content:"article"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:n},{name:"twitter:description",content:o},{name:"twitter:image",content:l}]},a.a.createElement("script",{type:"text/javascript"},"var infolinks_pid = 3253903; var infolinks_wsid = 0;"),a.a.createElement("script",{type:"text/javascript",src:"//resources.infolinks.com/js/infolinks_main.js"}))},v=function(){return a.a.createElement("footer",{className:"footer"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row align-items-center"},a.a.createElement("div",{className:"col-md-4"},a.a.createElement("span",{className:"copyright"},"Copyright © Abogados Sin Frontera 2020")),a.a.createElement("div",{className:"col-md-4"},a.a.createElement("ul",{className:"list-inline social-buttons"},a.a.createElement("li",{className:"list-inline-item"},a.a.createElement("a",{href:"https://www.facebook.com/Abogados-Sin-Frontera-108432887268111/"},a.a.createElement(l.a,{icon:["fab","facebook"]}))),a.a.createElement("li",{className:"list-inline-item"},a.a.createElement("a",{href:"https://www.instagram.com/abogadossinfronteraes/"},a.a.createElement(l.a,{icon:["fab","instagram"]}))),a.a.createElement("li",{className:"list-inline-item"},a.a.createElement("a",{href:"https://twitter.com/extranjeriaasf/"},a.a.createElement(l.a,{icon:["fab","twitter"]}))),a.a.createElement("li",{className:"list-inline-item"},a.a.createElement("a",{href:"https://www.linkedin.com/in/paola-milena-galindo-a5264b154/"},a.a.createElement(l.a,{icon:["fab","linkedin"]}))))))))},E=n("/MKj"),T=function(e){return a.a.createElement("div",{className:["alert",e.className?e.className:null].join(" ").trim()},a.a.createElement("div",{className:"alert-backdrop",onClick:function(){e.handlerEvent()}}),e.children)},w=Object(E.b)((function(e){return{alert:e.ui.alert}}),{})((function(e){return e.alert?a.a.createElement(T,{handlerEvent:e.alert.handlerEvent,className:["sticky-top","warning"===e.alert.type?"alert-warning":"alert-success"].join(" ").trim()},e.alert.content):null}));o.b.add(i.a,c.a);t.a=function(e){var t=e.children,n=e.navProps,r=e.seoProps;return a.a.createElement("div",{className:"root",style:{backgroundColor:"var(--bg)",color:"var(--textNormal)",transition:"color 0.2s ease-out, background 0.2s ease-out"}},a.a.createElement(w,null),a.a.createElement(b,r),a.a.createElement(h,n),t,a.a.createElement(v,null))}},bmMU:function(e,t,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,l,u=r(t),f=r(n);if(u&&f){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=f)return!1;var p=t instanceof Date,m=n instanceof Date;if(p!=m)return!1;if(p&&m)return t.getTime()==n.getTime();var d=t instanceof RegExp,h=n instanceof RegExp;if(d!=h)return!1;if(d&&h)return t.toString()==n.toString();var g=a(t);if((s=g.length)!==a(n).length)return!1;for(c=s;0!=c--;)if(!o.call(n,g[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(l=g[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},jFb6:function(e,t){e.exports={siteMetadata:{title:"Abogados Sin Frontera",siteUrl:"https://www.abogadosinfrontera.es/",description:"Somos un equipo de Abogados que se especializa en extranjería e inmigración."},plugins:[{resolve:"gatsby-plugin-sass",options:{includePaths:["src/assets/styles/scss"],output:"src/assets/styles/css",recursive:!0,watch:!0}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-164864542-1",head:!0,cookieDomain:"abogadosinfrontera.es"}},{resolve:"gatsby-plugin-manifest",options:{name:"Abogados Sin Fronteras",short_name:"ASF",start_url:"/",background_color:"#f7f0eb",theme_color:"#a2466c",display:"standalone",icon:"src/assets/img/logos/main-small.png"}},{resolve:"gatsby-plugin-google-adsense",options:{publisherId:"ca-pub-4408212865560272"}},{resolve:"gatsby-plugin-react-helmet"},{resolve:"gatsby-plugin-prefetch-google-fonts",options:{fonts:[{family:"Montserrat",variants:["400","700"]},{family:"Oranienbaum"},{family:"Droid Serif",variants:["400","700","400italic","700italic"]},{family:"Roboto Slab",variants:["400","100","300","700"]}]}},{resolve:"gatsby-plugin-dark-mode"},{resolve:"gatsby-plugin-anchor-links",options:{offset:0}}]}},oEq0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return r.AnchorLink}});var r=n("F0uZ")},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("HQhv"),n("sC2a"),n("LagC"),n("E5k/"),n("m210"),n("4DPX"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi");var r,a,o,i,c=n("17x9"),s=n.n(c),l=n("8+s/"),u=n.n(l),f=n("bmMU"),p=n.n(f),m=n("q1tI"),d=n.n(m),h=n("MgzW"),g=n.n(h),y="bodyAttributes",b="htmlAttributes",v="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(E).map((function(e){return E[e]})),"charset"),w="cssText",A="href",k="http-equiv",C="innerHTML",S="itemprop",O="name",N="property",j="rel",L="src",P="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",I="defer",M="encodeSpecialCharacters",q="onChangeClientState",H="titleTemplate",R=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),D=[E.NOSCRIPT,E.SCRIPT,E.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=$(e,E.TITLE),n=$(e,H);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,_);return t||r||void 0},W=function(e){return $(e,q)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===j&&"canonical"===e[n].toLowerCase()||s===j&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==C&&c!==w&&c!==S||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=g()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},V=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){V(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||V:e.requestAnimationFrame||V,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;se(E.BODY,r),se(E.HTML,a),ce(f,p);var m={baseTag:le(E.BASE,n),linkTags:le(E.LINK,o),metaTags:le(E.META,i),noscriptTags:le(E.NOSCRIPT,c),scriptTags:le(E.SCRIPT,l),styleTags:le(E.STYLE,u)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),s(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(E.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=o.indexOf(s);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[d.a.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+G(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===C||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+G(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(E.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(b,a,r),link:pe(E.LINK,o,r),meta:pe(E.META,i,r),noscript:pe(E.NOSCRIPT,c,r),script:pe(E.SCRIPT,s,r),style:pe(E.STYLE,l,r),title:pe(E.TITLE,{title:f,titleAttributes:p},r)}},de=u()((function(e){return{baseTag:Z([A,P],e),bodyAttributes:Q(y,e),defer:$(e,I),encode:$(e,M),htmlAttributes:Q(b,e),linkTags:X(E.LINK,[j,A],e),metaTags:X(E.META,[O,T,k,N,S],e),noscriptTags:X(E.NOSCRIPT,[C],e),onChangeClientState:W(e),scriptTags:X(E.SCRIPT,[L,C],e),styleTags:X(E.STYLE,[w],e),title:J(e),titleAttributes:Q(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),me)((function(){return null})),he=(a=de,i=o=function(e){function t(){return U(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case E.TITLE:return Y({},a,((t={})[r.type]=i,t.titleAttributes=Y({},o),t));case E.BODY:return Y({},a,{bodyAttributes:Y({},o)});case E.HTML:return Y({},a,{htmlAttributes:Y({},o)})}return Y({},a,((n={})[r.type]=Y({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(K(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=K(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.a.createElement(a,r)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("eKGF"))},w2l6:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("aArQ"),i=n("oEq0");t.default=function(){return a.a.createElement(o.a,null,a.a.createElement("section",{className:"page-section d-flex flex-column align-items-center justify-content-center"},a.a.createElement("h1",null,"Página no encontrada"),a.a.createElement(i.AnchorLink,{to:"/#articles",title:"Regresar",className:"btn btn-primary btn-xl text-uppercase m-5",stripHash:!0})))}}}]);
//# sourceMappingURL=component---src-pages-404-js-51dc7529b1ac591ce197.js.map