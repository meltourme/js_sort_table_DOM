parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=n(t))){var r=0,e=function(){};return{s:e,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,c=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw a}}}}function r(t){return a(t)||o(t)||n(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}function o(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function a(t){if(Array.isArray(t))return i(t)}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var c=document.querySelector("thead"),u=c.querySelector("tr"),l=document.querySelector("tbody"),f=r(l.querySelectorAll("tr"));function y(t,e){switch(e){case 0:case 1:t.sort(function(t,r){var n=t.children[e].textContent,o=r.children[e].textContent;return n.localeCompare(o)});break;case 2:case 3:t.sort(function(t,r){return d(t.children[e].textContent)-d(r.children[e].textContent)})}l.append.apply(l,r(t))}function d(r){var e,n="",o=t(r);try{for(o.s();!(e=o.n()).done;){var a=e.value;"0123456789".includes(a)&&(n+=a)}}catch(i){o.e(i)}finally{o.f()}return+n}u.addEventListener("click",function(t){y(f,r(u.children).indexOf(t.target))});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.f331149c.js.map