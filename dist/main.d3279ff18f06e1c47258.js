(()=>{"use strict";var t={434:(t,e,r)=>{r.d(e,{Z:()=>d});var n=r(933),o=r.n(n),a=r(476),i=r.n(a),s=r(678),c=r.n(s),u=new URL(r(569),r.b),l=i()(o()),p=c()(u);l.push([t.id,"@font-face{\r\n    font-family: 'Roboto';\r\n    src: url("+p+") format('truetype');\r\n}",""]);const d=l},853:(t,e,r)=>{r.d(e,{Z:()=>f});var n=r(933),o=r.n(n),a=r(476),i=r.n(a),s=r(434),c=r(678),u=r.n(c),l=new URL(r(304),r.b),p=i()(o());p.i(s.Z);var d=u()(l);p.push([t.id,"body{\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.container{\r\n    padding-top: 2rem;\r\n    min-width: 1000px;\r\n    margin: 0;\r\n}\r\n\r\nh1{\r\n    text-align: center;\r\n}\r\n\r\n.logo{\r\n    background-image: url("+d+");\r\n    background-size: cover;\r\n    height: 200px;\r\n    width: 200px;\r\n    margin: 0 auto;\r\n}",""]);const f=p},476:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},678:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},933:t=>{t.exports=function(t){return t[1]}},892:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],u=n.base?c[0]+n.base:c[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=r(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var h=o(f,n);n.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var a=n(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=n(t,o),u=0;u<a.length;u++){var l=r(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},311:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},60:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},192:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},760:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},865:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},569:(t,e,r)=>{t.exports=r.p+"6119f3a59a7988a054a1.ttf"},304:(t,e,r)=>{t.exports=r.p+"bca6d5e9db57d6210aee.png"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,r),a.exports}r.m=t,r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),r.b=document.baseURI||self.location.href,(()=>{var t=r(892),e=r.n(t),n=r(760),o=r.n(n),a=r(311),i=r.n(a),s=r(192),c=r.n(s),u=r(60),l=r.n(u),p=r(865),d=r.n(p),f=r(853),h={};h.styleTagTransform=d(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const v=JSON.parse('{"title":"I am JSON title"}'),m=r.p+"47692505d122dbcae490be2492a60b2e.png",g=new class{constructor(t,e){this.title=t,this.img=e,this.date=new Date}toString(){return JSON.stringify({title:this.title,img:this.img,date:this.date.toJSON()})}get upperCaseTitle(){return this.title.toUpperCase()}}("WebPack post title",m);console.log("Post to str: ",g.toString()),console.log("JSON",v)})()})();