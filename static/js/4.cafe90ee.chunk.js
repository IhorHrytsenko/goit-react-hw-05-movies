(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[4],{30:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return o}))},31:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r="6456edf8e78b4973f18f7c8d63cd4cb6";function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{if(0===(t=String(t)).length)return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r)).then((function(t){return t.json()}));if(t.length>0&&!0!==e&&!0!==n)return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(r)).then((function(t){return t.json()}));if(!0===e&&t.length>0)return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(r)).then((function(t){return t.json()}));if(!0===n&&t.length>0)return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(r)).then((function(t){return t.json()}))}catch(o){return console.log(o)}}},38:function(t,e,n){"use strict";n.r(e);var r=n(30),o=n(0),i=n.n(o),a=n(1),c=n(8),u=n(31);e.default=function(){var t=Object(o.useState)(null),e=Object(r.a)(t,2),n=e[0],l=e[1],f=Object(a.g)();return Object(o.useEffect)((function(){Object(u.a)().then(l)}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"),i.a.createElement("ul",null,n&&n.results.map((function(t){return i.a.createElement("li",{key:t.id}," ",i.a.createElement(c.b,{to:{pathname:"/movies/".concat(t.id),state:{from:f}}}," ",t.original_title," ")," ")}))))}}}]);
//# sourceMappingURL=4.cafe90ee.chunk.js.map