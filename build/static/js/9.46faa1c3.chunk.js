(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[9],{37:function(e,t,a){"use strict";a.r(t);var n=a(30),c=a(0),r=a.n(c),l=a(31);t.default=function(e){var t=e.movieId,a=Object(c.useState)(null),i=Object(n.a)(a,2),u=i[0],o=i[1];return Object(c.useEffect)((function(){Object(l.a)(t,!0).then((function(e){return o(e.cast)}))}),[t]),r.a.createElement("ul",null,u?u.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("p",null,e.character),r.a.createElement("img",{src:e.profile_path&&"https://image.tmdb.org/t/p/w500".concat(e.profile_path),width:"200px",alt:"Actor face"}),r.a.createElement("p",null," ",e.name," "))})):r.a.createElement("p",null,"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u043e \u0430\u043a\u0442\u0435\u0440\u0430\u043c \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0444\u0438\u043b\u044c\u043c\u0430"))}}}]);
//# sourceMappingURL=9.46faa1c3.chunk.js.map