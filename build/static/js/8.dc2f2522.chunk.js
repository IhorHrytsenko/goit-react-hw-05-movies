(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[8],{32:function(e,t,a){e.exports={search__btn:"Form_search__btn__3sNsV",search__input:"Form_search__input__2WZ8w",form:"Form_form__1dzem"}},34:function(e,t,a){"use strict";a.r(t);var n=a(30),r=a(0),c=a.n(r),s=a(1),o=a(8),u=a(32),i=a.n(u);t.default=function(e){var t=e.firstQuery,a=e.HistorySearch,u=Object(r.useState)(null),m=Object(n.a)(u,2),l=m[0],f=m[1],h=Object(s.g)();function _(e){if(e){a(e);try{return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("6456edf8e78b4973f18f7c8d63cd4cb6","&query=").concat(e)).then((function(e){return e.json()})).then((function(e){return f(e)}))}catch(t){return console.log(t)}}}return Object(r.useEffect)((function(){""!==h.search&&(a(t),_(t))}),[h.search]),c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:i.a.form,onSubmit:function(e){e.preventDefault(),_(e.target[0].value)}},c.a.createElement("input",{className:i.a.search__input}),c.a.createElement("button",{type:"submit",className:i.a.search__btn},"\u041d\u0430\u0439\u0442\u0438"),(h.search,c.a.createElement("ul",null,l&&l.results.map((function(e){return c.a.createElement("li",{key:e.id}," ",c.a.createElement(o.c,{to:{pathname:"".concat(e.id),state:{from:h}}}," ",e.title)," ")}))))))}}}]);
//# sourceMappingURL=8.dc2f2522.chunk.js.map