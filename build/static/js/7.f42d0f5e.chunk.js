(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[7],{35:function(e,a,t){e.exports={general:"MovieDetailView_general__HgSio",general__list:"MovieDetailView_general__list__Sb8Ge",genetal__item:"MovieDetailView_genetal__item__1uJ0_",general__back:"MovieDetailView_general__back__22wu8"}},40:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(1),i=t(8),r=t(35),m=t.n(r),s=Object(l.lazy)((function(){return t.e(10).then(t.bind(null,36))})),o=Object(l.lazy)((function(){return t.e(9).then(t.bind(null,37))}));a.default=function(e){var a=e.movie,t=e.location,r=Object(c.f)();return n.a.createElement("div",null,n.a.createElement("section",{className:m.a.general},n.a.createElement("button",{onClick:function(){r.push(t.state.from)}}," \u041d\u0430\u0437\u0430\u0434 "),n.a.createElement("ul",{className:m.a.general__list},n.a.createElement("li",{className:m.a.genetal__item},n.a.createElement("img",{alt:"\u041f\u043b\u0430\u043a\u0430\u0442 \u0444\u0438\u043b\u044c\u043c\u0430",src:"https://image.tmdb.org/t/p/w500/".concat(a.backdrop_path)})),n.a.createElement("li",{className:m.a.genetal__item},n.a.createElement("h2",null,a.original_title),n.a.createElement("p",null,"\u041e\u0446\u0435\u043d\u043a\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439: ",10*a.vote_average,"%"),n.a.createElement("h2",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),n.a.createElement("p",null,a.overview),n.a.createElement("h2",null,"\u0416\u0430\u043d\u0440\u044b"),a.genres&&a.genres.map((function(e){return n.a.createElement("span",{key:e.id}," ",e.name," ")}))))),n.a.createElement("section",{className:m.a.general},n.a.createElement("p",null,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(i.c,{to:"/movies/".concat(a.id,"/cast")},"\u0410\u043a\u0442\u0435\u0440\u044b")),n.a.createElement("li",null,n.a.createElement(i.c,{to:"/movies/".concat(a.id,"/reviews")},"\u041e\u0442\u0437\u044b\u0432\u044b")))),n.a.createElement(c.c,null,n.a.createElement(c.a,{path:"/movies/:movieId/cast"},n.a.createElement("section",{className:m.a.general},n.a.createElement(l.Suspense,{fallback:n.a.createElement("h1",null,"AAAAAaaaaaaa.....")},n.a.createElement(o,{movieId:a.id})))),n.a.createElement(c.a,{path:"/movies/:movieId/reviews"},n.a.createElement("section",{className:m.a.general},n.a.createElement(l.Suspense,{fallback:n.a.createElement("h1",null,"AAAAAaaaaaaa.....")},n.a.createElement(s,{movieId:a.id}))))))}}}]);
//# sourceMappingURL=7.f42d0f5e.chunk.js.map