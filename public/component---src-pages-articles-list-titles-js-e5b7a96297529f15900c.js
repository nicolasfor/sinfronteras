(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6a0A":function(e,t,n){"use strict";n.r(t);n("rzGZ"),n("Dq+y"),n("8npG"),n("cxuS");var r=n("q1tI"),a=n.n(r),c=n("Kdbf"),s=n("Wbzz"),i=n("QmAe");t.default=function(){var e=Object(c.a)(),t=e[0],n=t.list,r=t.selected,o=e[1].dispatchClearArticles;return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:"btn btn-primary btn-lg btn-block",onClick:function(e){e.preventDefault(),o()}},a.a.createElement("i",{className:"fa fa-arrow-left"})),a.a.createElement("ul",{className:"list-group"},Object.values(n).map((function(e){var t=e._id,n=e.title,c=e.category,o=e.subtitle;return console.log("_id: ",t),console.log("selected: ",r),console.log("selected === _id : ",r===t),a.a.createElement(s.Link,{key:t,className:"list-group-item list-group-item-action "+(r===t?"list-group-item-selected":""),to:"/categories/"+Object(i.b)(c)+"/"+Object(i.b)(n)},a.a.createElement("h6",{className:"mb-1"},n),a.a.createElement("p",{className:"mb-1"},o))}))))}},Kdbf:function(e,t,n){"use strict";n("6kNP"),n("8npG"),n("E5k/"),n("pJf4");var r=n("kD0k"),a=n.n(r),c=(n("ls82"),n("/MKj")),s=n("QmAe"),i=n("4pHH");function o(e,t,n,r,a,c,s){try{var i=e[c](s),o=i.value}catch(u){return void n(u)}i.done?t(o):Promise.resolve(o).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function s(e){o(c,r,a,s,i,"next",e)}function i(e){o(c,r,a,s,i,"throw",e)}s(void 0)}))}}t.a=function(){var e=Object(c.c)(),t=Object(c.d)((function(e){return e.articles})),n=function(){var t=u(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(Object(i.a)({}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),r=function(){var t=u(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(Object(i.f)(null));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var n=u(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==t.mostVisited.length){n.next=5;break}return n.next=3,Object(s.a)().fetchMostVisited();case 3:r=n.sent,e(Object(i.d)(r));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=u(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==t.mostRecent.length){n.next=10;break}return n.prev=1,n.next=4,Object(s.a)().fetchMostRecent();case 4:r=n.sent,e(Object(i.c)(r)),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=u(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(s.a)().fetchArticlesByCategory(r,t.categories[r].name);case 3:c=n.sent,e(Object(i.a)(c)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("error: ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var t=u(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(s.a)().fetchArticlesByString(n);case 3:r=t.sent,e(Object(i.a)(r)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),d=function(){var n=u(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t.isFetched){n.next=7;break}return n.next=4,Object(s.a)().fetchCategories();case 4:r=n.sent,e(Object(i.b)(r)),b(!0);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("error: ",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),h=function(){var t=u(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(i.f)(n)),t.prev=1,t.next=5,Object(s.a)().updateViewsById(n);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var e=u(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.a)().fetchArticleById(t);case 3:n=e.sent,h(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),b=function(t){e(Object(i.e)(t))};return[Object.assign({},t),{dispatchLoadCategories:d,dispatchLoadMostVisited:o,dispatchLoadMostRecent:l,dispatchClearArticles:n,dispatchClearSelected:r,dispatchSetSelected:h,dispatchSetIsFetched:b,dispatchLoadArticlesByCategory:p,dispatchLoadArticleById:v,dispatchLoadArticlesByString:f}]}}}]);
//# sourceMappingURL=component---src-pages-articles-list-titles-js-e5b7a96297529f15900c.js.map