(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[5],{30:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,c=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return o}))},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r="6456edf8e78b4973f18f7c8d63cd4cb6";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{if(0===(e=String(e)).length)return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r)).then((function(e){return e.json()}));if(e.length>0&&!0!==t&&!0!==n)return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(r)).then((function(e){return e.json()}));if(!0===t&&e.length>0)return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(r)).then((function(e){return e.json()}));if(!0===n&&e.length>0)return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(r)).then((function(e){return e.json()}))}catch(o){return console.log(o)}}},41:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t);var a=n(30),i=n(0),u=n.n(i),l=n(31),f=n(1),s=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,40))})),h=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,34))}));t.default=function(){var e=Object(f.h)().movieid,t=Object(i.useState)(null),n=Object(a.a)(t,2),r=n[0],o=n[1],b=Object(f.g)(),p=Object(f.f)(),y=b.search.substring(7,b.search.length);return Object(i.useEffect)((function(){Object(l.a)(e).then((function(e){return o(e)}))}),[e]),u.a.createElement(u.a.Fragment,null,e&&r?u.a.createElement(i.Suspense,{fallback:u.a.createElement("h1",null,"AAAAAaaaaaaa.....")}," ",u.a.createElement(s,{movie:r,location:b,firstQuery:y})," "):u.a.createElement(i.Suspense,{fallback:u.a.createElement("h1",null,"AAAAAaaaaaaa.....")}," ",u.a.createElement(h,{firstQuery:y,HistorySearch:function(e){p.push(c(c({},b),{},{search:"query=".concat(e)}))}})))}}}]);
//# sourceMappingURL=5.cc3ce8fa.chunk.js.map