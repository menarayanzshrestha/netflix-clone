(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(45),o=a.n(c),i=(a(65),a(18)),s=a.n(i),l=a(26),u=a(19),m=a(46),d=a.n(m).a.create({baseURL:"https://api.themoviedb.org/3"}),f=(a(83),a(47)),v=a(50),h=a.n(v);var p=function(e){var t=e.title,a=e.fetchUrl,c=e.isLargeRow,o=Object(n.useState)([]),i=Object(u.a)(o,2),m=i[0],v=i[1],p=Object(n.useState)(""),g=Object(u.a)(p,2),b=g[0],_=g[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(a);case 2:return t=e.sent,v(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,t),r.a.createElement("div",{className:"row__posters"},m&&m.map((function(e){return r.a.createElement("img",{className:"row__poster ".concat(c&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(c?e.poster_path:e.backdrop_path),alt:e.name,key:e.id,onClick:function(){return function(e){b?_(""):h()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);_(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)}})}))),b&&r.a.createElement(f.a,{videoId:b,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))},g=(a(105),"be79b8d0662e4e948ef44cf4afd1018d"),b={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceOriginals:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentares:"/discover/movie?api_key=".concat(g,"&with_genres=99")};a(106);var _=function(){var e,t,a=Object(n.useState)([]),c=Object(u.a)(a,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(b.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original/").concat(null===o||void 0===o?void 0:o.backdrop_path,")"),backgroundPosition:"center center"}},r.a.createElement("div",{className:"banner__contents"},r.a.createElement("h1",{className:"banner__title"},(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)),r.a.createElement("div",{className:"banner__buttons"},r.a.createElement("button",{className:"banner__button"},"Play"),r.a.createElement("button",{className:"banner__button"},"My List")),r.a.createElement("div",{className:"banner__description"},(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),r.a.createElement("div",{className:"banner__fadeBottom"}))};a(107);var w=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>10?c(!0):c(!1)})),function(){window.removeEventListener("scroll")}}),[]),r.a.createElement("div",{className:"nav ".concat(a&&"nav__black")},r.a.createElement("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedaia/commons/0/0f/",alt:"Netflix logo"}),r.a.createElement("img",{className:"nav__avatar",src:"https://pbs.twing.com/profile_images/124011999041155",alt:"login"}))};var E=a(115).a((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(_,null),r.a.createElement(p,{title:"NETFLIX ORIGINALS",fetchUrl:b.fetchNetflixOriginals,isLargeRow:!0}),r.a.createElement("button",{type:"button",onClick:function(){throw Error("OOpps")}},"Donot click"),r.a.createElement(p,{title:"Trending Nows",fetchUrl:b.fetchTrending}),r.a.createElement(p,{title:"Top Rated",fetchUrl:b.fetchTopRated}),r.a.createElement(p,{title:"Action Movies",fetchUrl:b.fetchActionMovies}),r.a.createElement(p,{title:"Comedy Movies",fetchUrl:b.fetchComedyMovies}),r.a.createElement(p,{title:"Horror Movies",fetchUrl:b.fetchHorrorMovies}),r.a.createElement(p,{title:"Romance Movies",fetchUrl:b.fetchRomanceOriginals}),r.a.createElement(p,{title:"Documentaries",fetchUrl:b.fetchDocumentares}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(114),y=a(54);k.a({dsn:"https://c80a565c1e28444888d052352c9584a8@o1019030.ingest.sentry.io/5984932",integrations:[new y.a.BrowserTracing],tracesSampleRate:1}),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){e.exports=a(110)},65:function(e,t,a){},83:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.aab76f47.chunk.js.map