parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("thead"),r=document.querySelector("tbody"),t=function(e){e.forEach(function(e){r.append(e)})};function n(e,r){return e.sort(function(e,t){return"$"===e.cells[r].innerText[0]?+e.cells[r].innerText.slice(1).replace(/,/g,"")-+t.cells[r].innerText.slice(1).replace(/,/g,""):e.cells[r].textContent.localeCompare(t.cells[r].textContent)})}e.addEventListener("click",function(e){var c=e.target.closest("th");if(c)switch(c.textContent){case"Name":t(n(Array.from(r.rows),0));break;case"Position":t(n(Array.from(r.rows),1));break;case"Age":t(n(Array.from(r.rows),2));break;case"Salary":t(n(Array.from(r.rows),3))}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.88a23e33.js.map