(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){e.exports={title:"BlogPostLayout_title__2gSEA",header:"BlogPostLayout_header__1YOoc",footer:"BlogPostLayout_footer__3YCRF",bio:"BlogPostLayout_bio__29tNR",links:"BlogPostLayout_links__g6OrT",next:"BlogPostLayout_next__3gV5y",content:"BlogPostLayout_content__2rXbv"}},,,function(e,t,a){e.exports={Pagination:"Pagination_Pagination__3jfhg",previous:"Pagination_previous__bxj4k",next:"Pagination_next__2kERV"}},,,function(e,t,a){"use strict";var n=a(6),r=a(0),o=a.n(r),c=a(3),i=["January","February","March","April","May","June","July","August","September","October","November","December"];var l=a(12),u=a.n(l);t.a=function(e){var t,a=e.blogRoot,r=e.data,l=e.readingTime;if(l){var s=Math.max(Math.round(l.minutes),1),m=Math.round(s/5);t=o.a.createElement(o.a.Fragment,null," ","\u2022"," ",o.a.createElement("span",{className:u.a.readingTime},new Array(m||1).fill("\u2615\ufe0f").join("")," ",s," min read"))}return o.a.createElement("small",{className:u.a.ArticleMeta},o.a.createElement("time",{dateTime:r.date.toUTCString()},function(e){var t=new Date(e),a=i[t.getMonth()],n=t.getDate(),r=t.getFullYear();return"".concat(a," ").concat(n,", ").concat(r)}(r.date)),r.tags&&r.tags.length&&o.a.createElement(o.a.Fragment,null," ","\u2022"," ",o.a.createElement("ul",{className:u.a.tags},r.tags.map(function(e){return o.a.createElement("li",{key:e},o.a.createElement(c.Link,{href:Object(n.join)(a,"tags",e)},e))}))),t||null)}},function(e,t,a){e.exports={tags:"ArticleMeta_tags__2hntd"}},function(e,t,a){e.exports={title:"BlogIndexPage_title__3SDg5",articlesList:"BlogIndexPage_articlesList__13CaB",footer:"BlogIndexPage_footer__21wWV"}},,function(e,t,a){"use strict";var n=a(10),r=a(4),o=a.n(r),c=a(7),i=a(1),l=a(0),u=a.n(l),s=a(6),m=a(9),g=a(3),p={title:"Juan Liberato Blog",author:"Juan Liberato",description:"A blog about web development, data visualization and Data science.",indexPageSize:30},b=a(23),f=a(28),d=a.n(f),h=a(29),E=a.n(h);var v=function(e){var t=function(e){var t=e.email,a=e.size,n=e.defaultURL,r=void 0===n?"identicon":n,o=E()(t.toLowerCase().trim());return"https://www.gravatar.com/avatar/".concat(o,".jpg?s=").concat(a,"&d=").concat(encodeURIComponent(r))}({email:"artemisaliberato@gmail.com",size:56});return u.a.createElement("div",{className:"\n      ".concat(d.a.Bio,"\n      ").concat(e.className||"","\n    ")},u.a.createElement("img",{src:t,alt:"Me"}),u.a.createElement("p",null,"Hi, i'm Juan, Computer Scientist, this blog is about Front end Development, Data visualization and Data Science, in Spanish and English",u.a.createElement("br",null),"Checkout my website "," ",u.a.createElement("a",{href:"https://dascire.com/"},"dascire.com"),".",u.a.createElement("br",null),"Contact me : "," ",u.a.createElement("a",{href:"https://jcliberatol.github.io/"},"CV"),", ",u.a.createElement("a",{href:"https://github.com/jcliberatol"},"github"),", and"," ",u.a.createElement("a",{href:"https://www.linkedin.com/in/juan-camilo-liberato-luna-100a2b33/"},"Linkedin"),".",u.a.createElement("br",null),"jcliberatol@unal.edu.co",u.a.createElement("br",null),"+57 3193686868"))},_=a(8),j=a.n(_);var x=function(e){var t=e.blogRoot,a=e.pageCount,n=e.pageNumber;return u.a.createElement("small",{className:j.a.Pagination},1!==n&&u.a.createElement(g.Link,{className:j.a.previous,href:Object(s.join)(t,"page",String(n-1))},"\u2190 Previous"),u.a.createElement("span",{className:j.a.pages}," ","Page ",u.a.createElement("span",{className:j.a.current},n),"/",u.a.createElement("span",{className:j.a.count},a)," "),n<a&&u.a.createElement(g.Link,{className:j.a.next,href:Object(s.join)(t,"page",String(n+1))},"Next \u2192"))},O=a(13),w=a.n(O);var k=function(e){var t=e.blogRoot,a=e.pageCount,n=e.pageNumber,r=e.postRoutes;return u.a.createElement("div",null,u.a.createElement("header",null,u.a.createElement("h1",{className:w.a.title},u.a.createElement(g.Link,{href:t},p.title)),u.a.createElement(v,null)),u.a.createElement("ul",{className:w.a.articlesList},r.map(function(e){return u.a.createElement("li",{key:e.url.href},u.a.createElement(b.a,{blogRoot:t,route:e}))})),a>1&&u.a.createElement(x,{blogRoot:t,pageCount:a,pageNumber:n}),u.a.createElement("footer",{className:w.a.footer},u.a.createElement("div",null,u.a.createElement("a",{href:"./rss.xml",target:"_blank",style:{float:"right"}},"RSS"),u.a.createElement(g.Link,{href:"./about"},"About")," \u2022"," ",u.a.createElement(g.Link,{href:"./tags"},"Tags")," \u2022"," ",u.a.createElement("a",{href:"https://github.com/frontarm/create-react-blog"},"Source"))))},L=a(30),N=a.n(L);var y=function(){return u.a.createElement("div",{className:N.a.NotFound},u.a.createElement("h1",null,"404 - Not Found"))},R=a(18),P=a.n(R);var B=function(e){var t=e.active,a=e.className,n=e.style;return u.a.createElement("div",{className:"\n        ".concat(P.a.LoadingIndicator,"\n        ").concat(t?P.a.active:"","\n        ").concat(a,"\n      "),style:n})},D=a(19),I=a.n(D);var S=function(e){var t=e.blogRoot,a=e.isViewingIndex,n=Object(g.useLoadingRoute)();return u.a.createElement("div",{className:I.a.container},u.a.createElement(B,{active:!!n}),!a&&u.a.createElement("header",null,u.a.createElement("h3",{className:I.a.title},u.a.createElement(g.Link,{href:t},p.title))),u.a.createElement("main",null,u.a.createElement(g.NotFoundBoundary,{render:function(){return u.a.createElement(y,null)}},u.a.createElement(g.View,null))))},C=a(20),A=a(11),V=a(5),M=a.n(V);var F=function(e){var t=e.blogRoot,a=Object(g.useCurrentRoute)(),n=a.title,r=a.data,o=a.url,c=Object(g.useView)(),i=c.connect,l=c.content,s=c.head,m=l.MDXComponent,b=l.readingTime;return i(u.a.createElement(u.a.Fragment,null,s,u.a.createElement("article",{className:M.a.container},u.a.createElement("header",{className:M.a.header},u.a.createElement("h1",{className:M.a.title},u.a.createElement(g.Link,{href:o.pathname},n)),u.a.createElement(A.a,{blogRoot:t,data:r,readingTime:b})),u.a.createElement(C.a,{components:{a:g.Link,wrapper:function(e){var t=e.children;return u.a.createElement("div",{className:M.a.content},t)}}},u.a.createElement(m,null)),u.a.createElement("footer",{className:M.a.footer},u.a.createElement("h3",{className:M.a.title},u.a.createElement(g.Link,{href:t},p.title)),u.a.createElement(v,{className:M.a.bio}),u.a.createElement("section",{className:M.a.links},r.previousDetails&&u.a.createElement(g.Link,{className:M.a.previous,href:r.previousDetails.href},"\u2190 ",r.previousDetails.title),r.nextDetails&&u.a.createElement(g.Link,{className:M.a.next,href:r.nextDetails.href},r.nextDetails.title," \u2192"))))))},J=a(14),T=a(31),$=a.n(T),z={"./2019-01-05-welcome/post.ts":function(){return a.e(7).then(a.bind(null,55))}},H=function(e){return z[e]()},U=Object.keys(z),W=/^((\d{1,4})-(\d{1,4})-(\d{1,4}))[\/-]/,X=U.map(function(e){var t,a=$()(e.replace(/post.tsx?$/,"").replace(/(\d)\/(\d)/,"$1-$2")).replace(/^[-.]+|[.-]+$/g,"").replace(W,"$1/"),n=a.match(W);return n&&(t=new Date(parseInt(n[2],10),parseInt(n[3],10)-1,parseInt(n[4],10))),{slug:a,pathname:e,date:t}}),Y=(X=Object(m.sortBy)(X,["slug"]).reverse()).map(function(e,t){var a=e.slug,r=e.pathname,l=e.date;return{getPage:i.h(Object(c.a)(o.a.mark(function e(){var u,m,g,p,b,f,d,h,E,v,_;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(r);case 2:if(u=e.sent,m=u.default,g=m.title,p=m.getContent,b=Object(J.a)(m,["title","getContent"]),0===t){e.next=11;break}return v=X[t-1],e.next=9,H(v.pathname);case 9:d=e.sent.default,f=v.slug;case 11:if(!(t+1<X.length)){e.next=17;break}return _=X[t+1],e.next=15,H(_.pathname);case 15:E=e.sent.default,h=_.slug;case 17:return e.abrupt("return",i.m({title:g,getData:function(e,t){return Object(n.a)({date:l,pathname:r,slug:a,previousDetails:d&&{title:d.title,href:Object(s.join)(t.blogRoot,"posts",f)},nextDetails:E&&{title:E.title,href:Object(s.join)(t.blogRoot,"posts",h)}},b)},getView:function(){var e=Object(c.a)(o.a.mark(function e(){var t,a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return t=e.sent,a=t.default,r=Object(J.a)(t,["default"]),e.abrupt("return",Object(n.a)({MDXComponent:a},r));case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}));case 18:case"end":return e.stop()}},e)}))),slug:a}}),K=Object(m.chunk)(Y,p.indexPageSize),q=K.map(function(e,t){return["/"+(t+1),Object(i.h)(function(){var a=Object(c.a)(o.a.mark(function a(n,r){var l,m;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("HEAD"!==n.method){a.next=2;break}return a.abrupt("return",Object(i.m)());case 2:return a.next=4,Promise.all(e.map(function(){var e=Object(c.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(s.join)(r.blogRoot,"posts",t.slug),e.next=3,Object(i.l)({method:"HEAD",routes:G,url:a});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()));case 4:return l=a.sent,m=p.title,t>0&&(m+=" \u2013 page ".concat(t+1)),a.abrupt("return",Object(i.m)({title:m,getView:function(){return u.a.createElement(k,{blogRoot:r.blogRoot,pageNumber:t+1,pageCount:K.length,postRoutes:l})}}));case 8:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}())]}),G=Object(i.b)(Object(i.n)(function(e,t){return Object(n.a)({blogRoot:e.mountpath||"/"},t)}),Object(i.p)(function(e,t){var a="/"===e.path||/^\/page\/\d+\/$/.test(e.path);return u.a.createElement(S,{blogRoot:t.blogRoot,isViewingIndex:a})}),Object(i.j)({"/":q.shift()[1],"/page":Object(i.j)(Object(n.a)({"/1":Object(i.k)(function(e,t){return t.blogRoot})},Object(m.fromPairs)(q))),"/posts":Object(i.b)(Object(i.p)(function(e,t){return u.a.createElement(F,{blogRoot:t.blogRoot})}),Object(i.j)(Object(m.fromPairs)(Y.map(function(e){return["/"+e.slug,e.getPage]})))),"/tags":Object(i.g)(function(){return a.e(4).then(a.bind(null,56))}),"/about":Object(i.g)(function(){return a.e(6).then(a.bind(null,54))}),"/rss":Object(i.m)()}));t.a=G},,,function(e,t,a){e.exports={LoadingIndicator:"LoadingIndicator_LoadingIndicator__3LEKJ",active:"LoadingIndicator_active__2AnkV","LoadingIndicator-animation":"LoadingIndicator_LoadingIndicator-animation__1a7u9"}},function(e,t,a){e.exports={container:"BlogLayout_container__2a-4f",title:"BlogLayout_title__1H4hc"}},,,,function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(3),c=a(11),i=a(27),l=a.n(i);t.a=function(e){var t=e.blogRoot,a=e.route;return r.a.createElement("article",{className:l.a.ArticleSummary},r.a.createElement("h2",null,r.a.createElement(o.Link,{href:a.url.href},a.title)),r.a.createElement(c.a,{blogRoot:t,data:a.data}),r.a.createElement("p",null,a.data.spoiler))}},,,,function(e,t,a){e.exports={ArticleSummary:"ArticleSummary_ArticleSummary__3IHE2"}},function(e,t,a){e.exports={Bio:"Bio_Bio__3aVsv"}},,function(e,t,a){},,,function(e,t,a){e.exports=a(44)},,,,,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),o=a(7),c=a(24),i=a(1),l=a(0),u=a.n(l),s=a(16),m=a.n(s),g=a(3),p=a(32),b=(a(41),a(15));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(c.a)({routes:b.a,main:function(){var e=Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(i.d)({routes:b.a}),e.next=3,t.getRoute();case 3:!0,(0,m.a.hydrate)(u.a.createElement(p.a,null,u.a.createElement(g.Router,{hashScrollBehavior:"smooth",navigation:t})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()});case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()})}],[[33,1,2]]]);
//# sourceMappingURL=main.0f759a91.chunk.js.map