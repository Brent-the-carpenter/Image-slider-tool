(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,'nav {\n  padding: 50px;\n  text-align: center;\n}\nnav > ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: inline-block;\n  background: #ddd;\n  border-radius: 5px;\n}\nimg {\n  width: 80px;\n  position: relative;\n  bottom: 8px;\n}\n\nnav > ul > li {\n  float: left;\n  width: 150px;\n  height: 65px;\n  line-height: 65px;\n  position: relative;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.7);\n  cursor: pointer;\n}\nnav > ul > li:hover {\n  background: #d5d5d5;\n  border-radius: 5px;\n}\n\nul.drop-menu {\n  position: absolute;\n  top: 100%;\n  left: 0%;\n  width: 100%;\n  padding: 0;\n}\nul.drop-menu li {\n  background: #666;\n  color: rgba(255, 255, 255, 0.7);\n}\nul.drop-menu li:hover {\n  background: #606060;\n}\nul.drop-menu li:last-child {\n  border-radius: 0px 0px 5px 5px;\n}\n\nul.drop-menu li {\n  display: none;\n}\n\nli:hover > ul.drop-menu li {\n  display: block;\n}\nli {\n  animation: Drop-menu 300ms ease-in-out;\n}\n@keyframes Drop-menu {\n  0% {\n    opacity: 0;\n    transform: rotateY(-90deg) translateY(30px);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateY("0deg") translateY(0px);\n  }\n}\n',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var u=e[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var d=t(p),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var u=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=u}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),u=t.n(c),s=t(216),l=t.n(s),p=t(589),d=t.n(p),f=t(426),m={};m.styleTagTransform=d(),m.setAttributes=u(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=t.p+"2d4061552fac064ed076.svg";!function(e,n){const t=document.createElement("nav"),r=document.createElement("ul"),o=document.createElement("li"),a=new Image;a.src=v;let i=1,c=document.querySelector("body");for(t.setAttribute("id","nav"),c.appendChild(t),t.appendChild(r),r.appendChild(o),o.appendChild(a),o.appendChild(document.createElement("ul")).setAttribute("class","drop-menu");i<=4;)document.querySelector(".drop-menu").appendChild(document.createElement("li")).setAttribute("id",`menu-item-${i}`),document.querySelector(`#menu-item-${i}`).textContent=`item ${i}`,i++}()})()})();