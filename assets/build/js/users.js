!function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=21)}({0:function(t,e,r){var n=function(a){"use strict";var l,t=Object.prototype,f=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",n=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i,a,u,c,o=e&&e.prototype instanceof g?e:g,s=Object.create(o.prototype),f=new S(n||[]);return s._invoke=(i=t,a=r,u=f,c=h,function(t,e){if(c===y)throw new Error("Generator is already running");if(c===v){if("throw"===t)throw e;return q()}for(u.method=t,u.arg=e;;){var r=u.delegate;if(r){var n=function t(e,r){var n=e.iterator[r.method];if(n===l){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=l,t(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=p(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;if(!i)return r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m;{if(!i.done)return i;r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=l)}r.delegate=null;return m}(r,u);if(n){if(n===m)continue;return n}}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(c===h)throw c=v,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);c=y;var o=p(i,a,u);if("normal"===o.type){if(c=u.done?v:d,o.arg===m)continue;return{value:o.arg,done:u.done}}"throw"===o.type&&(c=v,u.method="throw",u.arg=o.arg)}}),s}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=u;var h="suspendedStart",d="suspendedYield",y="executing",v="completed",m={};function g(){}function c(){}function s(){}var w={};i(w,o,function(){return this});var b=Object.getPrototypeOf,x=b&&b(b(O([])));x&&x!==t&&f.call(x,o)&&(w=x);var _=s.prototype=g.prototype=Object.create(w);function k(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function E(c,s){var e;this._invoke=function(r,n){function t(){return new s(function(t,e){!function e(t,r,n,o){var i=p(c[t],c,r);if("throw"!==i.type){var a=i.arg,u=a.value;return u&&"object"==typeof u&&f.call(u,"__await")?s.resolve(u.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):s.resolve(u).then(function(t){a.value=t,n(a)},function(t){return e("throw",t,n,o)})}o(i.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(f.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=l,t.done=!0,t};return n.next=n}}return{next:q}}function q(){return{value:l,done:!0}}return i(_,"constructor",c.prototype=s),i(s,"constructor",c),c.displayName=i(s,n,"GeneratorFunction"),a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===c||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,s):(t.__proto__=s,i(t,n,"GeneratorFunction")),t.prototype=Object.create(_),t},a.awrap=function(t){return{__await:t}},k(E.prototype),i(E.prototype,r,function(){return this}),a.AsyncIterator=E,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new E(u(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},k(_),i(_,n,"Generator"),i(_,o,function(){return this}),i(_,"toString",function(){return"[object Generator]"}),a.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&f.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=l)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=l),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=f.call(o,"catchLoc"),u=f.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&f.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n,o=r.completion;return"throw"===o.type&&(n=o.arg,j(r)),n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=l),m}},a}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},1:function(t,e){function c(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function a(u){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=u.apply(t,a);function o(t){c(n,e,r,o,i,"next",t)}function i(t){c(n,e,r,o,i,"throw",t)}o(void 0)})}}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.init()}var e,r,n,o;function i(t){return o.apply(this,arguments)}return e=t,(r=[{key:"init",value:function(){var o=this,i=function(){var e=a(regeneratorRuntime.mark(function t(u){var e,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=document.querySelectorAll("tbody > tr:not([details-displayed])"),c=!1,e.forEach(function(t){var e,r,n,o,i,a=t.querySelector("a.js-send-offer");null!==a&&((e=JSON.parse(a.dataset.meta)).requestId===u&&(c=!0),c||((r=t.querySelector("td.date")).setAttribute("style","padding: 0 !important"),r.querySelector("span").setAttribute("style","padding: 20px; display: block"),(n=document.createElement("div")).setAttribute("style","position: absolute;background: linear-gradient(to bottom right,#1dbf73 50%,transparent 50%);width: 20px;height: 20px;"),r.insertBefore(n,r.firstChild)),null===(o=t.querySelector("td.text-wide"))&&(o=t.querySelector("td.see-more")),(i=document.createElement("a")).textContent=e.username,i.href="https://fiverr.com/"+e.username,i.target="_blank",i.classList.add("extension-requestpage-username"),o.insertBefore(i,o.firstChild),t.setAttribute("details-displayed","true"))});case 3:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}();window.addEventListener("load",function(){var e=a(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:chrome.storage.sync.get(null,function(){var e=a(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e["fiverrextension_buyer-req-details"],o.fetch(e)){t.next=3;break}return t.abrupt("return");case 3:if(-1!==window.location.href.indexOf("/requests"))return t.next=6,chrome.storage.sync.get("fiverrextension_lastrequest");t.next=9;break;case 6:r=t.sent,n=r.fiverrextension_lastrequest,setInterval(a(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i(n),null!==(e=document.querySelector("tbody > tr"))&&e.dataset.id!==n)return n=e.dataset.id,t.next=6,chrome.storage.sync.set({fiverrextension_lastrequest:n});t.next=6;break;case 6:case"end":return t.stop()}},t)})),1e3);case 9:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}())}},{key:"fetch",value:(o=function(t){var e=t.fiverrextension_licensekey,r=new Date,n=r.getMonth()+"-"+r.getDay()+"-"+r.getFullYear();return!(!t.fiverrextension_licensevalid||t.fiverrextension_licensevalid!=n)||(fetch("https://api.futurewordpress.com/v1/licenses/fiverr.chrome/"+e+"/verify/json/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({product_id:"fiverr.chrome",license_key:e,json:!0})}).then(function(t){200===t.status&&t.json().then(function(){var e=a(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,chrome.storage.sync.set({fiverrextension_licensevalid:e.status?n:""});case 2:if(e.status)return t.abrupt("return",!0);t.next=4;break;case 4:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}())}),!1)},i.toString=function(){return o.toString()},i)}])&&u(e.prototype,r),n&&u(e,n),t}())},21:function(t,e,r){r(0),t.exports=r(22)},22:function(t,e,r){"use strict";r.r(e);r(0),r(1),r(4),r(23)},23:function(t,e,r){},4:function(t,e){function c(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(u){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=u.apply(t,a);function o(t){c(n,e,r,o,i,"next",t)}function i(t){c(n,e,r,o,i,"throw",t)}o(void 0)})}}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.init()}var e,r,n;return e=t,(r=[{key:"init",value:function(){window.addEventListener("load",function(){var e=o(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(-1===window.location.href.indexOf("requests"))return t.abrupt("return");t.next=2;break;case 2:chrome.storage.sync.get(null,function(){var e=o(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("true"!=e["fiverrextension_popup-profile"])return t.abrupt("return");t.next=3;break;case 3:r=e.fiverrextension_licensekey,fetch("https://api.futurewordpress.com/v1/licenses/fiverr.chrome/"+r+"/verify/json/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({product_id:"fiverr.chrome",license_key:r,json:!0})}).then(function(t){200===t.status&&t.json().then(function(t){var e,r;t.status&&((e=document.createElement("div")).classList.add("popup"),e.id="root-popup",e.setAttribute("style","display: none"),(r=document.createElement("iframe")).classList.add("iframe-popup"),e.appendChild(r),document.body.appendChild(e),setInterval(function(){var i;-1!==window.location.href.indexOf("requests")&&(i=document.getElementById("root-popup"),document.querySelectorAll("tbody > tr:not([popup-added])").forEach(function(t){var e,r,n,o=t.querySelector("a.js-send-offer");null!==o&&(e=JSON.parse(o.dataset.meta),r=t.querySelector("span.user-pict-40"),(n=i.cloneNode(!0)).id="popup-"+e.username,r.appendChild(n),t.setAttribute("popup-added","true"),r.addEventListener("click",function(t){"display: none"===n.getAttribute("style")?(n.querySelector("iframe").setAttribute("src","https://www.fiverr.com/"+e.username),n.setAttribute("style","")):(n.setAttribute("style","display: none"),n.querySelector("iframe").setAttribute("src",""))}),console.log(t))}))},1e3))})});case 5:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}())}}])&&i(e.prototype,r),n&&i(e,n),t}())}});