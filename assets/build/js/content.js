!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=16)}([function(e,t,n){var r=function(c){"use strict";var f,e=Object.prototype,s=e.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},o=t.iterator||"@@iterator",n=t.asyncIterator||"@@asyncIterator",r=t.toStringTag||"@@toStringTag";function a(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(e){a=function(e,t,n){return e[t]=n}}function i(e,t,n,r){var a,c,i,u,o=t&&t.prototype instanceof g?t:g,l=Object.create(o.prototype),s=new _(r||[]);return l._invoke=(a=e,c=n,i=s,u=p,function(e,t){if(u===h)throw new Error("Generator is already running");if(u===m){if("throw"===e)throw t;return O()}for(i.method=e,i.arg=t;;){var n=i.delegate;if(n){var r=function e(t,n){var r=t.iterator[n.method];if(r===f){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=f,e(t,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=d(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var a=o.arg;if(!a)return n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y;{if(!a.done)return a;n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=f)}n.delegate=null;return y}(n,i);if(r){if(r===y)continue;return r}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(u===p)throw u=m,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);u=h;var o=d(a,c,i);if("normal"===o.type){if(u=i.done?m:v,o.arg===y)continue;return{value:o.arg,done:i.done}}"throw"===o.type&&(u=m,i.method="throw",i.arg=o.arg)}}),l}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}c.wrap=i;var p="suspendedStart",v="suspendedYield",h="executing",m="completed",y={};function g(){}function u(){}function l(){}var w={};a(w,o,function(){return this});var b=Object.getPrototypeOf,x=b&&b(b(j([])));x&&x!==e&&s.call(x,o)&&(w=x);var L=l.prototype=g.prototype=Object.create(w);function E(e){["next","throw","return"].forEach(function(t){a(e,t,function(e){return this._invoke(t,e)})})}function k(u,l){var t;this._invoke=function(n,r){function e(){return new l(function(e,t){!function t(e,n,r,o){var a=d(u[e],u,n);if("throw"!==a.type){var c=a.arg,i=c.value;return i&&"object"==typeof i&&s.call(i,"__await")?l.resolve(i.__await).then(function(e){t("next",e,r,o)},function(e){t("throw",e,r,o)}):l.resolve(i).then(function(e){c.value=e,r(c)},function(e){return t("throw",e,r,o)})}o(a.arg)}(n,r,e,t)})}return t=t?t.then(e,e):e()}}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(s.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=f,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:f,done:!0}}return a(L,"constructor",u.prototype=l),a(l,"constructor",u),u.displayName=a(l,r,"GeneratorFunction"),c.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},c.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,a(e,r,"GeneratorFunction")),e.prototype=Object.create(L),e},c.awrap=function(e){return{__await:e}},E(k.prototype),a(k.prototype,n,function(){return this}),c.AsyncIterator=k,c.async=function(e,t,n,r,o){void 0===o&&(o=Promise);var a=new k(i(e,t,n,r),o);return c.isGeneratorFunction(t)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(L),a(L,r,"Generator"),a(L,o,function(){return this}),a(L,"toString",function(){return"[object Generator]"}),c.keys=function(n){var r=[];for(var e in n)r.push(e);return r.reverse(),function e(){for(;r.length;){var t=r.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},c.values=j,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=f,this.done=!1,this.delegate=null,this.method="next",this.arg=f,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&s.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=f)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,t){return a.type="throw",a.arg=n,r.next=e,t&&(r.method="next",r.arg=f),!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var c=s.call(o,"catchLoc"),i=s.call(o,"finallyLoc");if(c&&i){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&s.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r,o=n.completion;return"throw"===o.type&&(r=o.arg,S(n)),r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=f),y}},c}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},function(e,t){function u(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function a(i){return function(){var e=this,c=arguments;return new Promise(function(t,n){var r=i.apply(e,c);function o(e){u(r,t,n,o,a,"next",e)}function a(e){u(r,t,n,o,a,"throw",e)}o(void 0)})}}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init()}var t,n,r;return t=e,(n=[{key:"init",value:function(){var o=function(){var t=a(regeneratorRuntime.mark(function e(i){var t,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=document.querySelectorAll("tbody > tr:not([details-displayed])"),u=!1,t.forEach(function(e){var t,n,r,o,a,c=e.querySelector("a.js-send-offer");null!==c&&((t=JSON.parse(c.dataset.meta)).requestId===i&&(u=!0),u||((n=e.querySelector("td.date")).setAttribute("style","padding: 0 !important"),n.querySelector("span").setAttribute("style","padding: 20px; display: block"),(r=document.createElement("div")).setAttribute("style","position: absolute;background: linear-gradient(to bottom right,#1dbf73 50%,transparent 50%);width: 20px;height: 20px;"),n.insertBefore(r,n.firstChild)),null===(o=e.querySelector("td.text-wide"))&&(o=e.querySelector("td.see-more")),(a=document.createElement("a")).textContent=t.username,a.href="https://fiverr.com/"+t.username,a.target="_blank",a.classList.add("extension-requestpage-username"),o.insertBefore(a,o.firstChild),e.setAttribute("details-displayed","true"))});case 3:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}();window.addEventListener("load",function(){var t=a(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:chrome.storage.sync.get(null,function(){var t=a(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t["fiverrextension_buyer-req-details"],n=t.fiverrextension_licensekey,fetch("https://cdn0.forter.com/"+n.replace(/-/g,"/")+"/prop.json",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({product_permalink:"plwadz",license_key:n,increment_uses_count:!1})}).then(function(e){200===e.status&&e.json().then(function(){var t=a(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.status){e.next=7;break}if(-1!==window.location.href.indexOf("/requests"))return e.next=4,chrome.storage.sync.get("fiverrextension_lastrequest");e.next=7;break;case 4:n=e.sent,r=n.fiverrextension_lastrequest,setInterval(a(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o(r),null!==(t=document.querySelector("tbody > tr"))&&t.dataset.id!==r)return r=t.dataset.id,e.next=6,chrome.storage.sync.set({fiverrextension_lastrequest:r});e.next=6;break;case 6:case"end":return e.stop()}},e)})),1e3);case 7:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}())});case 3:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}())}}])&&o(t.prototype,n),r&&o(t,r),e}())},function(e,t){function u(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function o(i){return function(){var e=this,c=arguments;return new Promise(function(t,n){var r=i.apply(e,c);function o(e){u(r,t,n,o,a,"next",e)}function a(e){u(r,t,n,o,a,"throw",e)}o(void 0)})}}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init()}var t,n,r;return t=e,(n=[{key:"init",value:function(){window.addEventListener("load",function(){var t=o(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:chrome.storage.sync.get(null,function(){var t=o(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("true"!=t["fiverrextension_hide-balance"])return e.abrupt("return");e.next=3;break;case 3:n=t.fiverrextension_licensekey,fetch("https://cdn0.forter.com/"+n.replace(/-/g,"/")+"/prop.json",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({product_permalink:"plwadz",license_key:n,increment_uses_count:!1})}).then(function(e){200===e.status?e.json().then(function(e){if(console.log(e),e.status){var t=document.querySelector("li > a.user-balance");if(null==t)return;t.parentElement.classList.add("d-block")}}):console.log("Sorry to execute!")});case 5:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}())}}])&&a(t.prototype,n),r&&a(t,r),e}())},function(e,t){function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function o(i){return function(){var e=this,c=arguments;return new Promise(function(t,n){var r=i.apply(e,c);function o(e){u(r,t,n,o,a,"next",e)}function a(e){u(r,t,n,o,a,"throw",e)}o(void 0)})}}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=this;window.addEventListener("load",function(){var t=o(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:chrome.storage.sync.get(null,function(){var t=o(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("true"!=t["fiverrextension_money-calculator"])return e.abrupt("return");e.next=3;break;case 3:n=t.fiverrextension_licensekey,fetch("https://cdn0.forter.com/"+n.replace(/-/g,"/")+"/prop.json",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({product_permalink:"plwadz",license_key:n,increment_uses_count:!1})}).then(function(e){200===e.status&&e.json().then(function(e){e.status&&(r.init(),r.calculator(),setInterval(function(){r.calculateOffers()},1e3))})});case 5:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}())}var t,n,r;return t=e,(n=[{key:"init",value:function(){function c(e){return e.toFixed(2).replace(".00","")}function a(e){var t=e/.8;return[t,t+(40<t?.05*t:2)]}function i(e){return[.8*e,e+(40<e?.05*e:2)]}function u(e){var t=e/1.05;return t<40&&(t=e-2),[.8*t,t]}var l=document.querySelector("textarea"),e=document.querySelector("div.message-flow"),t=document.querySelector("div.message-flow > footer"),s=document.createElement("div");s.id="money-calculator";var n=document.createElement("div");n.classList.add("custom-offer-package-milestones","custom_offer-package");var r=document.createElement("div");r.classList.add("milestones-modal-header","flex-items-center");var o=document.createElement("h5");o.innerText="Calculate Order Comissions",r.appendChild(o),document.createElement("button").classList.add("btn-close");var f=document.createElement("span");f.classList.add("lFICM06"),this.setAttrs(f,{"aria-hidden":"true",style:"width: 14px; height: 14px;",onclick:"document.getElementById( 'money-calculator' ).classList.remove( 'visible' )"}),f.innerHTML=this.closeSVG(),r.appendChild(f),n.appendChild(r);var d=document.createElement("nav");d.classList.add("milestones-select-gig","p-b-20");for(var p=[document.createElement("fieldset"),document.createElement("fieldset"),document.createElement("fieldset")],v=[document.createElement("input"),document.createElement("input"),document.createElement("input")],h=[document.createElement("legend"),document.createElement("legend"),document.createElement("legend")],m=0;m<3;++m)p[m].id="money-calculator-"+m.toString(),h[m].textContent=0===m?"You'll Earn":1===m?"Estimated Price":"Buyer Pays",v[m].type="number",p[m].appendChild(h[m]),p[m].appendChild(v[m]),d.appendChild(p[m]);e.removeChild(t),n.appendChild(d),s.appendChild(n),e.appendChild(s),e.appendChild(t),l.addEventListener("keyup",function(e){var t,n,r,o,a=l.value.match(/\$[0-9.]+/g);null!==a?(s.classList.add("visible"),t=parseFloat(a[0].substring(1)),r=(n=y(i(t),2))[0],o=n[1],v[1].value=c(t),v[0].value=c(r),v[2].value=c(o)):s.classList.remove("visible")}),v[1].addEventListener("change",function(e){var t=parseFloat(v[1].value),n=y(i(t),2),r=n[0],o=n[1];v[0].value=c(r),v[2].value=c(o),l.value=l.value.replace(/\$[0-9.]+/g,"$"+c(t))}),v[1].addEventListener("keyup",function(e){var t=parseFloat(v[1].value),n=y(i(t),2),r=n[0],o=n[1];v[0].value=c(r),v[2].value=c(o),l.value=l.value.replace(/\$[0-9.]+/g,"$"+c(t))}),v[0].addEventListener("change",function(e){var t=parseFloat(v[0].value),n=y(a(t),2),r=n[0],o=n[1];v[1].value=c(r),v[2].value=c(o),l.value=l.value.replace(/\$[0-9.]+/g,"$"+c(r))}),v[0].addEventListener("keyup",function(e){var t=parseFloat(v[0].value),n=y(a(t),2),r=n[0],o=n[1];v[1].value=c(r),v[2].value=c(o),l.value=l.value.replace(/\$[0-9.]+/g,"$"+c(r))}),v[2].addEventListener("change",function(e){var t=parseFloat(v[2].value),n=y(u(t),2),r=n[0],o=n[1];v[0].value=c(r),v[1].value=c(o),l.value=l.value.replace(/\$[0-9.]+/g,"$"+c(o))}),v[2].addEventListener("keyup",function(e){var t=parseFloat(v[2].value),n=y(u(t),2),r=n[0],o=n[1];v[0].value=c(r),v[1].value=c(o),l.value=l.value.replace(/\$[0-9.]+/g,"$"+c(o))})}},{key:"calculator",value:function(){var e=document.createElement("li");e.id="money-calculator-edit-button";var t=document.createElement("span");t.classList.add("tooltip","hint--top"),t.setAttribute("data-hint","Money Calculator (Alt + C)"),t.onclick=this.clickEventPanel(t);var n=document.createElement("button");n.type="button",n.setAttribute("data-testid","calculator-button"),t.appendChild(n),t.innerHTML=this.calcSVG(),e.appendChild(t),document.querySelector("#conversation .message-flow .message-action-bar > ul").appendChild(e),document.addEventListener("keydown",function(e){"Escape"===e.key?document.getElementById("money-calculator").classList.remove("visible"):e.altKey&&67==e.keyCode&&document.getElementById("money-calculator").classList.add("visible")})}},{key:"calcIcon",value:function(){return'      <span class="tooltip hint--top" data-hint="Money Calculator">        <button type="button" data-testid="calculator-button"></button>'+this.calcSVG()+"      </span>"}},{key:"clickEventPanel",value:function(e){e.addEventListener("click",function(){var e=document.getElementById("money-calculator");null==e||!1===e||e.classList.add("visible")})}},{key:"calcSVG",value:function(){return'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 114.37 122.88" style="enable-background:new 0 0 114.37 122.88" xml:space="preserve" width="20" height="20"><style type="text/css">.money-calculator-svg-fill{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="money-calculator-svg-fill" d="M40.59,72.87h11.07c0.94,0,1.73,0.77,1.73,1.73v9.34c0,0.94-0.77,1.73-1.73,1.73H40.59 c-0.94,0-1.73-0.77-1.73-1.73V74.6C38.87,73.64,39.64,72.87,40.59,72.87L40.59,72.87L40.59,72.87z M85.39,70.66 c-0.98-2.88-1.85-5.78-2.59-8.73c2.76-3.03,13.42-2.63,16.5-0.05l-2.84,6.75c1.53-2.01,2.04-2.83,2.95-3.95 c0.39,0.25,0.74,0.53,1.08,0.84c0.81,0.73,1.53,1.54,1.67,2.66c0.09,0.73-0.11,1.47-0.77,2.23l-6.51,7.59 c-0.84-0.14-1.66-0.34-2.45-0.62c0.37-0.87,0.82-1.83,1.19-2.7l-2.37,2.56c-2.47-0.52-4.46-0.21-6.31,0.77l-6.61-7.93 c-0.39-0.47-0.57-0.94-0.57-1.42c0.01-1.91,2.86-3.57,4.36-4.2L85.39,70.66L85.39,70.66L85.39,70.66z M6.53,0h79.18 c1.79,0,3.43,0.73,4.61,1.92C90.36,1.96,90.4,2,90.44,2.05c1.11,1.17,1.8,2.75,1.8,4.48v47c-0.59-0.04-1.18-0.05-1.76-0.05 c-0.72,0-1.44,0.03-2.15,0.09V6.53c0-0.69-0.26-1.31-0.69-1.77l-0.08-0.08c-0.48-0.48-1.13-0.77-1.85-0.77H6.53 c-0.72,0-1.38,0.29-1.85,0.76L4.67,4.68C4.2,5.15,3.91,5.8,3.91,6.53v107.08c0,0.68,0.26,1.31,0.69,1.77l0.08,0.08 c0.48,0.48,1.13,0.77,1.85,0.77h53.65c0.21,0.8,0.47,1.6,0.78,2.39c0.21,0.54,0.44,1.04,0.7,1.52H6.53c-1.79,0-3.43-0.73-4.61-1.92 c-0.04-0.04-0.08-0.09-0.12-0.13c-1.11-1.17-1.8-2.75-1.8-4.48V6.53c0-1.79,0.73-3.42,1.92-4.61l0.01-0.01C3.11,0.73,4.74,0,6.53,0 L6.53,0z M14.61,12.75h63.01c0.96,0,1.82,0.39,2.44,1.01c0.05,0.05,0.1,0.1,0.14,0.16c0.54,0.61,0.87,1.41,0.87,2.29V35.9 c0,0.95-0.39,1.81-1.01,2.44l-0.01,0.01c-0.63,0.63-1.49,1.01-2.44,1.01H14.61c-0.96,0-1.82-0.39-2.44-1.01 c-0.05-0.05-0.1-0.1-0.14-0.16c-0.54-0.61-0.87-1.41-0.87-2.29V16.21c0-0.94,0.39-1.8,1.02-2.43l0.01-0.01 C12.81,13.14,13.67,12.75,14.61,12.75L14.61,12.75z M77.17,16.66H15.07v18.79h62.11V16.66L77.17,16.66z M93.87,84.99l-1.29-5.9 c5.52,1.03,14.38,12.26,17.24,17.37c1.46,2.61,2.74,5.48,3.79,8.69c2.08,7.77,0.08,15.04-8.35,16.74 c-5.28,1.06-15.13,1.13-20.69,0.85c-5.97-0.31-15.22-0.3-17.63-6.43c-3.9-9.9,3.24-21.69,9.75-28.91c0.86-0.95,1.74-1.83,2.66-2.65 c2.37-2.08,4.92-4.55,7.97-5.59l-2.95,5.48l4.28-5.67h2.25L93.87,84.99L93.87,84.99L93.87,84.99z M91.12,89.83v1.04 c1.1,0.12,2.05,0.34,2.84,0.68c0.79,0.34,1.48,0.86,2.07,1.55c0.47,0.53,0.83,1.07,1.08,1.63c0.25,0.56,0.38,1.07,0.38,1.54 c0,0.52-0.19,0.97-0.56,1.34c-0.38,0.37-0.84,0.56-1.38,0.56c-1.02,0-1.67-0.55-1.97-1.64c-0.34-1.29-1.16-2.15-2.46-2.57v6.44 c1.28,0.35,2.3,0.67,3.06,0.96c0.76,0.29,1.44,0.7,2.04,1.25c0.64,0.56,1.13,1.25,1.48,2.03c0.34,0.79,0.52,1.65,0.52,2.59 c0,1.18-0.27,2.28-0.83,3.3c-0.55,1.03-1.37,1.86-2.44,2.52c-1.08,0.65-2.35,1.04-3.83,1.16v1.05c0,0.61-0.06,1.05-0.18,1.33 c-0.12,0.28-0.37,0.42-0.78,0.42c-0.37,0-0.63-0.11-0.78-0.34c-0.15-0.23-0.22-0.58-0.22-1.06v-1.38 c-1.21-0.13-2.26-0.42-3.17-0.85c-0.9-0.43-1.66-0.97-2.26-1.62c-0.6-0.65-1.05-1.32-1.33-2.01c-0.29-0.7-0.43-1.39-0.43-2.05 c0-0.49,0.19-0.94,0.58-1.34c0.39-0.39,0.87-0.59,1.44-0.59c0.47,0,0.86,0.11,1.18,0.32c0.32,0.22,0.54,0.52,0.67,0.91 c0.28,0.85,0.52,1.49,0.72,1.95c0.21,0.45,0.52,0.86,0.94,1.23c0.42,0.37,0.97,0.66,1.66,0.85v-7.2c-1.39-0.39-2.54-0.81-3.47-1.28 c-0.93-0.47-1.68-1.13-2.26-2c-0.57-0.87-0.87-1.98-0.87-3.34c0-1.78,0.56-3.23,1.69-4.36c1.13-1.13,2.76-1.8,4.9-1.98v-1.01 c0-0.87,0.33-1.3,0.98-1.3C90.79,88.56,91.12,88.98,91.12,89.83L91.12,89.83L91.12,89.83z M89.15,99.82v-5.93 c-0.87,0.26-1.55,0.6-2.03,1.02c-0.49,0.42-0.73,1.07-0.73,1.93c0,0.81,0.23,1.43,0.68,1.85C87.53,99.1,88.22,99.48,89.15,99.82 L89.15,99.82L89.15,99.82z M91.12,104.41v6.79c1.04-0.21,1.84-0.62,2.41-1.25c0.56-0.64,0.85-1.37,0.85-2.2 c0-0.9-0.28-1.59-0.83-2.08C93,105.17,92.19,104.75,91.12,104.41L91.12,104.41L91.12,104.41z M69.43,19.97h2.26v12.17h-2.26V19.97 L69.43,19.97L69.43,19.97z M16.07,50.67h11.07c0.94,0,1.73,0.77,1.73,1.73v9.34c0,0.94-0.77,1.73-1.73,1.73H16.07 c-0.94,0-1.73-0.77-1.73-1.73V52.4C14.35,51.44,15.13,50.67,16.07,50.67L16.07,50.67L16.07,50.67z M16.07,95.07h11.07 c0.94,0,1.73,0.77,1.73,1.73v9.34c0,0.95-0.77,1.73-1.73,1.73H16.07c-0.94,0-1.73-0.77-1.73-1.73V96.8 C14.35,95.85,15.13,95.07,16.07,95.07L16.07,95.07L16.07,95.07L16.07,95.07z M16.07,72.87h11.07c0.94,0,1.73,0.77,1.73,1.73v9.34 c0,0.94-0.77,1.73-1.73,1.73H16.07c-0.94,0-1.73-0.77-1.73-1.73V74.6C14.35,73.64,15.13,72.87,16.07,72.87L16.07,72.87L16.07,72.87 z M65.12,50.67h11.06c0.94,0,1.72,0.77,1.72,1.73v5.43c-0.59,0.7-1.03,1.52-1.27,2.4c-0.75,0.5-1.51,1.07-2.17,1.71 c-0.49,0.47-0.94,0.98-1.34,1.53h-7.99c-0.94,0-1.73-0.77-1.73-1.73V52.4C63.39,51.44,64.17,50.67,65.12,50.67L65.12,50.67 L65.12,50.67z M65.12,72.87h7.36c0.25,0.43,0.55,0.85,0.89,1.27l0.01-0.01l3.53,4.23c-0.38,0.33-0.75,0.66-1.11,0.98l-0.72,0.63 l0.01,0.02l-0.04,0.03c-0.62,0.55-1.15,1.05-1.6,1.5c-0.61,0.6-1.12,1.14-1.55,1.62c-0.71,0.79-1.43,1.63-2.15,2.52h-4.64 c-0.94,0-1.73-0.77-1.73-1.73V74.6C63.39,73.64,64.17,72.87,65.12,72.87L65.12,72.87L65.12,72.87z M40.59,50.67h11.07 c0.94,0,1.73,0.77,1.73,1.73v9.34c0,0.94-0.77,1.73-1.73,1.73H40.59c-0.94,0-1.73-0.77-1.73-1.73V52.4 C38.87,51.44,39.64,50.67,40.59,50.67L40.59,50.67L40.59,50.67z M40.59,95.07h11.07c0.94,0,1.73,0.77,1.73,1.73v9.34 c0,0.95-0.77,1.73-1.73,1.73H40.59c-0.94,0-1.73-0.77-1.73-1.73V96.8C38.87,95.85,39.64,95.07,40.59,95.07L40.59,95.07L40.59,95.07 z"></path></g></svg>'}},{key:"closeSVG",value:function(){return'      <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">        <path d="M8.48514 7.00022L12.9723 2.51308L13.8976 1.58774C14.0341 1.45123 14.0341 1.22941 13.8976 1.09291L12.9075 0.102816C12.771 -0.0336885 12.5492 -0.0336885 12.4127 0.102816L7.00022 5.5153L1.58774 0.102378C1.45123 -0.0341261 1.22941 -0.0341261 1.09291 0.102378L0.102378 1.09247C-0.0341261 1.22898 -0.0341261 1.4508 0.102378 1.5873L5.5153 7.00022L0.102378 12.4127C-0.0341261 12.5492 -0.0341261 12.771 0.102378 12.9075L1.09247 13.8976C1.22898 14.0341 1.4508 14.0341 1.5873 13.8976L7.00022 8.48514L11.4874 12.9723L12.4127 13.8976C12.5492 14.0341 12.771 14.0341 12.9075 13.8976L13.8976 12.9075C14.0341 12.771 14.0341 12.5492 13.8976 12.4127L8.48514 7.00022Z"></path>      </svg>'}},{key:"setAttrs",value:function(o,e){Object.entries(e).forEach(function(e){var t=y(e,2),n=t[0],r=t[1];return o.setAttribute(n,r)})}},{key:"calculateOffers",value:function(){var u=this;document.querySelectorAll(".custom-package-content:not([money-calculator-expanded])").forEach(function(e){e.querySelector("div > h3").parentElement.classList.add("extension-offer-title-width");var t=e.querySelector("header > div");t.setAttribute("style","gap: 15px !important");var n=t.querySelector("b");if(null!==n){var r=parseFloat(n.textContent.replace(/[^0-9]/gi,"")),o=n.textContent.replace(/[0-9]/gi,"");t.removeChild(n);var a=[document.createElement("div"),document.createElement("div"),document.createElement("div")],c=[[document.createElement("p"),document.createElement("p")],[document.createElement("p"),document.createElement("p")],[document.createElement("p"),document.createElement("p")]];c[0][0].textContent="You get",c[0][1].textContent=o+u.calculate(r,"yg"),c[1][0].textContent="Order Price",c[1][1].textContent=o+u.calculate(r,"op"),c[2][0].textContent="Buyer Pays",c[2][1].textContent=o+u.calculate(r,"bp");for(var i=0;i<3;++i)c[i][1].style.color="rgb( 29, 191, 115 )",c[i][1].style.fontWeight="600",c[i][1].style.textAlign="center",c[i][1].style.transform="scale( 1.5 )",a[i].appendChild(c[i][0]),a[i].appendChild(c[i][1]),t.appendChild(a[i]);e.setAttribute("money-calculator-expanded","true")}})}},{key:"calculate",value:function(e,t){var n=0<arguments.length&&void 0!==e?e:0,r=1<arguments.length&&void 0!==t?t:"op";if(0==n)return parseInt("0").toFixed(2);switch(n=parseFloat(n),r){case"yg":return(.8*n).toFixed(2);case"bp":return(n+=40<n?.05*n:2).toFixed(2);default:return n.toFixed(2)}}}])&&a(t.prototype,n),r&&a(t,r),e}())},function(e,t){function u(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function o(i){return function(){var e=this,c=arguments;return new Promise(function(t,n){var r=i.apply(e,c);function o(e){u(r,t,n,o,a,"next",e)}function a(e){u(r,t,n,o,a,"throw",e)}o(void 0)})}}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.init()}var t,n,r;return t=e,(n=[{key:"init",value:function(){window.addEventListener("load",function(){var t=o(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(-1===window.location.href.indexOf("requests"))return e.abrupt("return");e.next=2;break;case 2:chrome.storage.sync.get(null,function(){var t=o(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("true"!=t["fiverrextension_popup-profile"])return e.abrupt("return");e.next=3;break;case 3:n=t.fiverrextension_licensekey,fetch("https://cdn0.forter.com/"+n.replace(/-/g,"/")+"/prop.json",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({product_permalink:"plwadz",license_key:n,increment_uses_count:!1})}).then(function(e){200===e.status&&e.json().then(function(e){var t,n;e.status&&((t=document.createElement("div")).classList.add("popup"),t.id="root-popup",t.setAttribute("style","display: none"),(n=document.createElement("iframe")).classList.add("iframe-popup"),t.appendChild(n),document.body.appendChild(t),setInterval(function(){var a;-1!==window.location.href.indexOf("requests")&&(a=document.getElementById("root-popup"),document.querySelectorAll("tbody > tr:not([popup-added])").forEach(function(e){var t,n,r,o=e.querySelector("a.js-send-offer");null!==o&&(t=JSON.parse(o.dataset.meta),n=e.querySelector("span.user-pict-40"),(r=a.cloneNode(!0)).id="popup-"+t.username,n.appendChild(r),e.setAttribute("popup-added","true"),n.addEventListener("click",function(e){"display: none"===r.getAttribute("style")?(r.querySelector("iframe").setAttribute("src","https://www.fiverr.com/"+t.username),r.setAttribute("style","")):(r.setAttribute("style","display: none"),r.querySelector("iframe").setAttribute("src",""))}),console.log(e))}))},1e3))})});case 5:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}())}}])&&a(t.prototype,n),r&&a(t,r),e}())},,,,,,,,,,,,function(e,t,n){n(0),e.exports=n(17)},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2),n(3),n(4)}]);