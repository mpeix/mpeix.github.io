var MyScroll=function(r){var o={};function e(t){if(o[t])return o[t].exports;var c=o[t]={i:t,l:!1,exports:{}};return r[t].call(c.exports,c,c.exports,e),c.l=!0,c.exports}return e.m=r,e.c=o,e.d=function(r,o,t){e.o(r,o)||Object.defineProperty(r,o,{enumerable:!0,get:t})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,o){if(1&o&&(r=e(r)),8&o)return r;if(4&o&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&o&&"string"!=typeof r)for(var c in r)e.d(t,c,function(o){return r[o]}.bind(null,c));return t},e.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(o,"a",o),o},e.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},e.p="",e(e.s=1)}([function(r,o,e){"use strict";r.exports={firefox:"FIREFOX",webkit:"WEBKIT",ie:"IE",edge:"EDGE"}},function(r,o,e){"use strict";var t;(t=e(0))&&t.__esModule,e(2);var c=function(r){var o="\n    ".concat(r.selector,"::-webkit-scrollbar{\n      width:").concat(r.scrollWidth,"px;\n    }\n    ").concat(r.selector,"::-webkit-scrollbar-track{\n      background:").concat(r.scrollTrackColor,";\n    }\n    ").concat(r.selector,"::-webkit-scrollbar-thumb{\n      background:").concat(r.scrollThumbColor,";\n    }\n    ").concat(r.selector,"::-webkit-scrollbar-thumb:hover{\n      background:").concat(r.scrollThumbHoverColor,";\n    }\n    ").concat(r.selector,"{\n      scrollbar-face-color:").concat(r.scrollThumbColor,";\n      scrollbar-arrow-color:pink;\n      scrollbar-track-color:").concat(r.scrollTrackColor,";\n      scrollbar-shadow-color:").concat(r.scrollThumbColor,";\n      scrollbar-highlight-color:green;\n      scrollbar-3dlight-color:blue;\n      scrollbar-darkshadow-Color:red;\n    }\n    ").concat(r.selector,"{\n      scrollbar-color: ").concat(r.scrollThumbBackground," ").concat(r.scrollTrackColor,";\n      scrollbar-width: ").concat(r.scrollWidth,";\n    }\n  ");return r.useArrows&&(o+="".concat(r.selector,"::-webkit-scrollbar-button:vertical:increment{\n      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMiA5LjI5TDEyIDEzLjE3bDMuODgtMy44OGMuMzktLjM5IDEuMDItLjM5IDEuNDEgMCAuMzkuMzkuMzkgMS4wMiAwIDEuNDFsLTQuNTkgNC41OWMtLjM5LjM5LTEuMDIuMzktMS40MSAwTDYuNyAxMC43Yy0uMzktLjM5LS4zOS0xLjAyIDAtMS40MS4zOS0uMzggMS4wMy0uMzkgMS40MiAweiIvPjwvc3ZnPg==) center center no-repeat;\n      display: block;\n      background-size: contain; }\n      ").concat(r.selector,"::-webkit-scrollbar-button:vertical:decrement{\n        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMiAxNC43MUwxMiAxMC44M2wzLjg4IDMuODhjLjM5LjM5IDEuMDIuMzkgMS40MSAwIC4zOS0uMzkuMzktMS4wMiAwLTEuNDFMMTIuNyA4LjcxYy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEw2LjcgMTMuM2MtLjM5LjM5LS4zOSAxLjAyIDAgMS40MS4zOS4zOCAxLjAzLjM5IDEuNDIgMHoiLz48L3N2Zz4=) center center no-repeat;\n        display: block;\n        background-size: contain;}")),o};r.exports={run:function(r){var o={selector:r.selector||"",scrollWidth:r.scrollWidth||5,scrollTrackColor:r.scrollTrackColor||"#f5f5f6",scrollThumbColor:r.scrollThumbColor||"#4f5b62",scrollThumbHoverColor:r.scrollThumbHoverColor||"#000a12",useArrows:r.useArrows||!1},e=document.getElementById("my-scroll-style");e||((e=document.createElement("style")).id="my-scroll-style",e.type="text/css"),e.innerText="";var t=c(o);console.log(t),e.appendChild(document.createTextNode(t)),document.head.appendChild(e)}}},function(r,o,e){"use strict";var t,c=(t=e(0))&&t.__esModule?t:{default:t};r.exports={detectBrowser:function(){return navigator.userAgent.match(/firefox/i)?c.default.firefox:"webkitTransformOriginZ"in document.documentElement.style?c.default.webkit:window.navigator.msPointerEnabled?c.default.ie:void 0}}}]);