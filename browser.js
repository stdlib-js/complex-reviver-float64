// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,o=r.toString,n=r.__defineGetter__,i=r.__defineSetter__,l=r.__lookupGetter__,u=r.__lookupSetter__,a=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,a){var c,p,f,y;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof a||null===a||"[object Array]"===o.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((p="value"in a)&&(l.call(e,t)||u.call(e,t)?(c=e.__proto__,e.__proto__=r,delete e[t],e[t]=a.value,e.__proto__=c):e[t]=a.value),f="get"in a,y="set"in a,p&&(f||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&n&&n.call(e,t,a.get),y&&i&&i.call(e,t,a.set),e};function c(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(e){return"number"==typeof e}var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return f&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,m=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",_=y()?function(e){var t,r,o,n,i;if(null==e)return b.call(e);r=e[s],i=s,t=null!=(n=e)&&m.call(n,i);try{e[s]=void 0}catch(t){return b.call(e)}return o=b.call(e),t?e[s]=r:delete e[s],o}:function(e){return b.call(e)},d=Number,v=d.prototype.toString,h=y();function g(e){return"object"==typeof e&&(e instanceof d||(h?function(e){try{return v.call(e),!0}catch(e){return!1}}(e):"[object Number]"===_(e)))}function w(e){return p(e)||g(e)}function j(e,t){if(!(this instanceof j))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!p(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!p(t))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+t+"`.");return a(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),a(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}return c(w,"isPrimitive",p),c(w,"isObject",g),c(j,"BYTES_PER_ELEMENT",8),c(j.prototype,"BYTES_PER_ELEMENT",8),c(j.prototype,"byteLength",16),c(j.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(j.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e})),function(e,t){return t&&t.type&&"Complex128"===t.type&&p(t.re)&&p(t.im)?new j(t.re,t.im):t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).reviveComplex128=t();
//# sourceMappingURL=browser.js.map
