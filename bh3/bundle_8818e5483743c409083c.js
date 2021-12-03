/*! Copyright © 2011 - 2021 miHoYo. All Rights Reserved */!function(e){function t(t){for(var n,o,a=t[0],c=t[1],s=t[2],f=0,d=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&d.push(u[o][0]),u[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(t);d.length;)d.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==u[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={1:0},u={1:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n=e+"_"+{2:"3ccd3c4f597275a5f7e3"}[e]+".css",u=a.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=(l=i[c]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===n||s===u))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){var l;if((s=(l=f[c]).getAttribute("data-href"))===n||s===u)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||u,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.request=n,delete o[e],d.parentNode.removeChild(d),r(i)},d.href=u,document.getElementsByTagName("head")[0].appendChild(d)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+""+({}[e]||e)+"_"+{2:"ff89be8a9af80ec91238"}[e]+".js"}(e);var s=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(f);var r=u[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,r[1](s)}u[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var l=s;i.push([174,0]),r()}({105:function(e){e.exports=JSON.parse('{"router":"./lib/router/index.js"}')},106:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(107);t.default={log:function(){var e;(e=console)[n.Log].apply(e,arguments)},info:function(){var e;(e=console)[n.Info].apply(e,arguments)},warn:function(){var e;(e=console)[n.Warn].apply(e,arguments)},error:function(){var e;(e=console)[n.Error].apply(e,arguments)}}},107:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Log="log",t.Info="info",t.Warn="warn",t.Error="error"},108:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(378)),o=s(r(418)),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=s(r(163)),a=r(445),c=s(r(446));function s(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){var n=this,i=a.dealConfigsBeforeRequest?a.dealConfigsBeforeRequest.bind(this)(e):e,c=i.url,s=i.data,f=i.query,l=i.onSuccess,d=void 0===l?function(){}:l,p=i.onError,v=void 0===p?function(){}:p,m=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(i,["url","data","query","onSuccess","onError"]),h=[s,u({params:f},m)];return"get"===r?h=[u({params:s},m)]:"delete"===r&&(h=[u({params:f,data:s},m)]),t[r].apply(t,[c].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(h))).then((function(t){return a.requestComplete.bind(n)(t,e)?null:(d.bind(n)((0,o.default)(t,"data")),t)}),(function(t){var r=(0,o.default)(t,"response");return a.requestComplete.bind(n)(r,e,t)?null:(v.bind(n)(r),Promise.reject(t))}))}function l(e){var t=this;return{get:function(r){return f.bind(t)(r,e,"get")},post:function(r){return f.bind(t)(r,e,"post")},put:function(r){return f.bind(t)(r,e,"put")},delete:function(r){return f.bind(t)(r,e,"delete")}}}t.default=function(e){var t=e;(0,n.default)(i.default.defaults,c.default),Object.defineProperty(t.prototype,"$http",{get:function(){return l.bind(this)(i.default)}})}},116:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var n=function(){var e=this.$createElement;return(this._self._c||e)("router-view")},o=[];n._withStripped=!0},169:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){if("number"!=typeof e)return e;switch(t){case"split":return function(e){var t=[],r=e,n="";for(;r>1e3;)t.push(r%1e3),r=Math.floor(r/1e3);t.push(r);for(;t.length>0;)n+=t.pop()+",";return n.substr(0,n.length-1)}(e);case"byte":return function(e){var t=0;if(e>=1e3&&e<1e6)return{value:t=parseFloat(e/1024),unit:"KB",text:t+"KB"};if(e>=1e6&&e<1e9)return{value:t=parseFloat(e/1048576),unit:"MB",text:t+"MB"};if(e>=1e9)return{value:t=parseFloat(e/1073741824),unit:"GB",text:t+"GB"};return{value:e,unit:"B",text:e+"B"}}(e);case"percent":return function(e,t){var r=Math.round(100*e);"fill"===t&&r<10&&(r="0"+r);return r+"%"}(e,r);case"time":return function(e){var t=e/1e3/60/60,r=Math.floor(t),n=60*(t-r),o=Math.floor(n),u=60*(n-o),i=Math.floor(u);return{hour:r,minute:o,second:i,millisecond:1e3*(u-i)}}(e);default:return e>=1e3&&e<1e6?parseFloat((e/1e3).toFixed(r||2))+"K":e>=1e6||e<=-1e6?parseFloat((e/1e6).toFixed(r||2))+"M":e}}},170:function(e,t,r){"use strict";e.exports=function(e){return{"@configs":e("src/configs"),"@framework":e("src/framework/index.js"),"@httpService":e("src/framework/services/httpService.js"),"@cacheService":e("src/framework/services/cacheService.js"),"@routerService":e("src/framework/services/routerService.js"),"@numberFormat":e("src/framework/components/utils/numberFormat.js"),"@logger":e("src/framework/components/utils/logger.js"),"@libRegister":e("src/framework/libRegister.json")}}},174:function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=d(r(175)),u=d(r(48)),i=r(73),a=r(77);r(451);var c=d(r(455)),s=d(r(456)),f=d(r(457)),l=d(r(462));function d(e){return e&&e.__esModule?e:{default:e}}r(463),(0,l.default)(o.default),(0,f.default)(o.default),(0,s.default)(o.default),(0,u.default)(o.default).then((function(e){var t=new o.default(n({el:"#content",template:"<app />",components:{app:c.default}},e));o.default.use(window.miHoYoAnalysis,{appId:"134",router:e.router,dataBelong:["bh3"],env:a.environment,type:"event",isSea:!1}),i.memoryCache.set("vueItem",t)}))},175:function(e,t){e.exports=Vue},445:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dealConfigsBeforeRequest=function(e){return e},t.requestComplete=function(e){"request"===e||!e||e.status;return!1}},446:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(77);t.default={baseURL:n.apiBase,withCredentials:!0}},447:function(e,t,r){var n={".":48,"./":48,"./components/utils/logger":106,"./components/utils/logger.js":106,"./components/utils/loggerConfigs":107,"./components/utils/loggerConfigs.js":107,"./components/utils/numberFormat":169,"./components/utils/numberFormat.js":169,"./index":48,"./index.js":48,"./lib/router":72,"./lib/router/":72,"./lib/router/index":72,"./lib/router/index.js":72,"./libRegister":105,"./libRegister.json":105,"./services/cacheService":73,"./services/cacheService.js":73,"./services/httpService":108,"./services/httpService.js":108,"./webpackConfigs/utilWebpackAlias":170,"./webpackConfigs/utilWebpackAlias.js":170};function o(e){var t=u(e);return r(t)}function u(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=u,e.exports=o,o.id=447},449:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[{path:"/",name:"home",component:function(e){return Promise.all([r.e(0),r.e(2)]).then(function(){var t=[r(489)];e.apply(null,t)}.bind(this)).catch(r.oe)}}];t.default=n},450:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.beforeRouterUpdate=function(e,t,r){0===e.matched.length?t.path?r(!1):r("/"):r()},t.afterRouterUpdate=function(e,t){}},451:function(e,t,r){"use strict";var n=i(r(452)),o=i(r(453)),u=i(r(454));function i(e){return e&&e.__esModule?e:{default:e}}var a=navigator.userAgent.toLowerCase(),c=function(e){return e.test(a)},s=c(/windows|win32|win64|wow32|wow64/g),f=c(/ios|iphone|ipad|ipod|iwatch/g);(0,o.default)({widthParam:640,heightParam:360,widthFlex:!0,callback:function(){document.getElementById("root").style.visibility="visible"}}),s||u.default.init(),n.default.prototype.focus=function(e){var t=void 0;f&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.focus(),e.setSelectionRange(t,t)):e.focus()},n.default.attach(document.body);var l=document.getElementById("vconsole");window.location.search.indexOf("debug=1")>-1||-1===window.location.pathname.indexOf("event_preview")&&window.location.host.indexOf("-test")>-1?(l.addEventListener("load",(function(){window.vconsole=new window.VConsole})),l.setAttribute("src",l.getAttribute("data-src"))):l.parentNode.removeChild(l)},455:function(e,t,r){"use strict";r.r(t);var n=r(116),o=r(75);for(var u in o)["default"].indexOf(u)<0&&function(e){r.d(t,e,(function(){return o[e]}))}(u);var i=r(117),a=Object(i.a)(o.default,n.a,n.b,!1,null,null,null);a.options.__file="src/app.vue",t.default=a.exports},456:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.filter("filterA",(function(e){return e||e.toLowerCase()})),e.filter("filterB",(function(e){return e||e.toUpperCase()}))}},457:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(458),u=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){window.miHoYoGameJSSDK=u.default}},462:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={install:function(e){var t=new e({});e.prototype.$gemit=t.$emit.bind(t),e.prototype.$gon=t.$on.bind(t),e.prototype.$gonce=t.$once.bind(t),e.prototype.$goff=t.$off.bind(t)}};t.default=function(e){e.use(n)}},463:function(e,t,r){},48:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(176);var n,o,u=c(r(105)),i=c(r(106)),a=c(r(108));function c(e){return e&&e.__esModule?e:{default:e}}t.default=(n=regeneratorRuntime.mark((function e(t){var n,o,c,s,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,a.default)(t),n=[];try{for(o=Object.keys(u.default),c=0;c<o.length;c++)s=o[c],f=r(447)(""+u.default[s]).default,n.push(f(t))}catch(e){i.default.error(e)}return e.abrupt("return",Object.assign.apply(Object,[{}].concat(n)));case 4:case"end":return e.stop()}}),e,this)})),o=function(){var e=n.apply(this,arguments);return new Promise((function(t,r){return function n(o,u){try{var i=e[o](u),a=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(a).then((function(e){n("next",e)}),(function(e){n("throw",e)}));t(a)}("next")}))},function(e){return o.apply(this,arguments)})},72:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(r(448)),o=i(r(449)),u=r(450);function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){e.use(n.default);var t=new n.default({routes:o.default});return t.beforeEach((function(t,r,n){u.beforeRouterUpdate.bind(e)(t,r,n)})),t.afterEach((function(t,r){u.afterRouterUpdate.bind(e)(t,r)})),{router:t}}},73:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setLocalStorageCache=function(e,t){var r=window.localStorage,n=JSON.stringify({timestamp:(new Date).getTime(),value:t});r.setItem(e,n)},t.getLocalStorageCache=function(e){var t=window.localStorage.getItem(e);if(null==t)return null;return JSON.parse(t).value},t.removeLocalStorageCache=function(e){window.localStorage.removeItem(e)},t.getLocalStorageInfo=function(e){var t=window.localStorage.getItem(e);if(void 0===t)return;return JSON.parse(t)};var n;t.memoryCache=(n={},{set:function(e,t){n[e]={timestamp:Date.now(),value:t}},get:function(e){return n[e]?n[e].value:null},remove:function(e){void 0!==e&&delete n[e]},getInfo:function(e){return n[e]}})},75:function(e,t,r){"use strict";r.r(t);var n=r(76),o=r.n(n);for(var u in n)["default"].indexOf(u)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(u);t.default=o.a},76:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",beforeCreate:function(){}}},77:function(e,t,r){"use strict";e.exports={environment:"production",apiBase:"https://api-takumi.mihoyo.com/common/",cdnBase:"https://api-takumi-static.mihoyo.com/common/",webBase:"https://webstatic.mihoyo.com/bh3/upload/announcement/audio/"}}});