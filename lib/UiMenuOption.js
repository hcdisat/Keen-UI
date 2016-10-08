/*!
 * Keen UI v0.8.9 (https://github.com/JosephusPaye/keen-ui)
 * (c) 2016 Josephus Paye II
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.UiMenuOption=t():(e.Keen=e.Keen||{},e.Keen.UiMenuOption=t())}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(60)},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var u=t[r];"number"==typeof u[0]&&o[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=l[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(a(o.parts[i],t))}else{for(var u=[],i=0;i<o.parts.length;i++)u.push(a(o.parts[i],t));l[o.id]={id:o.id,refs:1,parts:u}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],u=r[1],s=r[2],a=r[3],c={css:u,media:s,sourceMap:a};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(e,t){var n=v(),o=g[g.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function u(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function a(e,t){var n,o,r;if(t.singleton){var i=m++;n=h||(h=s(t)),o=c.bind(null,n,i,!1),r=c.bind(null,n,i,!0)}else n=s(t),o=f.bind(null,n),r=function(){u(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function c(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}function f(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},d=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,m=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=d()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var i=[],u=0;u<n.length;u++){var s=n[u],a=l[s.id];a.refs--,i.push(a)}if(e){var c=r(e);o(c,t)}for(var u=0;u<i.length;u++){var a=i[u];if(0===a.refs){for(var f=0;f<a.parts.length;f++)a.parts[f]();delete l[a.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){var n=Object;e.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){var o=n(36),r=n(31);e.exports=function(e){return o(r(e))}},function(e,t,n){var o,r;n(20),o=n(16),r=n(19),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){var n=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(e,t,n){e.exports=!n(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var o=n(4),r="__core-js_shared__",i=o[r]||(o[r]={});e.exports=function(e){return i[e]||(i[e]={})}},function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},function(e,t,n){var o=n(13)("wks"),r=n(14),i=n(4).Symbol;e.exports=function(e){return o[e]||(o[e]=i&&i[e]||(i||r)("Symbol."+e))}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"ui-icon",props:{icon:{type:String,required:!0},removeText:{type:Boolean,"default":!1}}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e){return"string"==typeof e?e.replace(v,"").split(h):e}function i(e){return f(e)?e.className.replace(v,"").split(h):[]}function u(e,t){f(e)&&(e.className=r(t).join(" "))}function s(e,t){var n=a(e,t),o=r(t);return n.push.apply(n,o),u(e,n),n}function a(e,t){var n=i(e),o=r(t);return o.forEach(function(e){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}),u(e,n),n}function c(e,t){var n=i(e),o=r(t);return o.every(function(e){return-1!==n.indexOf(e)})}function f(e){var t="object"===("undefined"==typeof HTMLElement?"undefined":(0,d["default"])(HTMLElement));return t?e instanceof HTMLElement:l(e)}function l(e){return e&&"object"===("undefined"==typeof e?"undefined":(0,d["default"])(e))&&"string"==typeof e.nodeName&&1===e.nodeType}Object.defineProperty(t,"__esModule",{value:!0});var p=n(26),d=o(p),v=/^\s+|\s+$/g,h=/\s+/g;t["default"]={add:s,remove:a,contains:c,has:c,set:u,get:i}},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".ui-icon{font-size:24px;width:1em;height:1em;display:inline-block;cursor:inherit;vertical-align:middle}",""])},function(e,t){e.exports='<i class="ui-icon material-icons" :class=[icon] v-text="removeText ? null : icon" aria-hidden=true></i>'},function(e,t,n){var o=n(18);"string"==typeof o&&(o=[[e.id,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(50),i=o(r);t["default"]={props:{hideRippleInk:{type:Boolean,"default":!1}},components:{UiRippleInk:i["default"]}}},,function(e,t,n){e.exports={"default":n(27),__esModule:!0}},function(e,t,n){"use strict";var o=n(25)["default"];t["default"]=function(e){return e&&e.constructor===o?"symbol":typeof e},t.__esModule=!0},function(e,t,n){n(44),n(43),e.exports=n(8).Symbol},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var o=n(38);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},function(e,t,n){var o=n(28);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var o=n(3);e.exports=function(e){var t=o.getKeys(e),n=o.getSymbols;if(n)for(var r,i=n(e),u=o.isEnum,s=0;i.length>s;)u.call(e,r=i[s++])&&t.push(r);return t}},function(e,t,n){var o=n(4),r=n(8),i=n(30),u="prototype",s=function(e,t,n){var a,c,f,l=e&s.F,p=e&s.G,d=e&s.S,v=e&s.P,h=e&s.B,m=e&s.W,g=p?r:r[t]||(r[t]={}),y=p?o:d?o[t]:(o[t]||{})[u];p&&(n=t);for(a in n)c=!l&&y&&a in y,c&&a in g||(f=c?y[a]:n[a],g[a]=p&&"function"!=typeof y[a]?n[a]:h&&c?i(f,o):m&&y[a]==f?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[u]=e[u],t}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((g[u]||(g[u]={}))[a]=f))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,e.exports=s},function(e,t,n){var o=n(5),r=n(3).getNames,i={}.toString,u="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return r(e)}catch(t){return u.slice()}};e.exports.get=function(e){return u&&"[object Window]"==i.call(e)?s(e):r(o(e))}},function(e,t,n){var o=n(3),r=n(12);e.exports=n(9)?function(e,t,n){return o.setDesc(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var o=n(7);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},function(e,t,n){var o=n(7);e.exports=Array.isArray||function(e){return"Array"==o(e)}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var o=n(3),r=n(5);e.exports=function(e,t){for(var n,i=r(e),u=o.getKeys(i),s=u.length,a=0;s>a;)if(i[n=u[a++]]===t)return n}},function(e,t){e.exports=!0},function(e,t,n){e.exports=n(35)},function(e,t,n){var o=n(3).setDesc,r=n(11),i=n(15)("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,i)&&o(e,i,{configurable:!0,value:t})}},function(e,t){},function(e,t,n){"use strict";var o=n(3),r=n(4),i=n(11),u=n(9),s=n(33),a=n(41),c=n(10),f=n(13),l=n(42),p=n(14),d=n(15),v=n(39),h=n(34),m=n(32),g=n(37),y=n(29),x=n(5),b=n(12),w=o.getDesc,S=o.setDesc,_=o.create,k=h.get,O=r.Symbol,M=r.JSON,j=M&&M.stringify,T=!1,E=d("_hidden"),P=o.isEnum,N=f("symbol-registry"),D=f("symbols"),C="function"==typeof O,B=Object.prototype,A=u&&c(function(){return 7!=_(S({},"a",{get:function(){return S(this,"a",{value:7}).a}})).a})?function(e,t,n){var o=w(B,t);o&&delete B[t],S(e,t,n),o&&e!==B&&S(B,t,o)}:S,I=function(e){var t=D[e]=_(O.prototype);return t._k=e,u&&T&&A(B,e,{configurable:!0,set:function(t){i(this,E)&&i(this[E],e)&&(this[E][e]=!1),A(this,e,b(1,t))}}),t},L=function(e){return"symbol"==typeof e},z=function(e,t,n){return n&&i(D,t)?(n.enumerable?(i(e,E)&&e[E][t]&&(e[E][t]=!1),n=_(n,{enumerable:b(0,!1)})):(i(e,E)||S(e,E,b(1,{})),e[E][t]=!0),A(e,t,n)):S(e,t,n)},F=function(e,t){y(e);for(var n,o=m(t=x(t)),r=0,i=o.length;i>r;)z(e,n=o[r++],t[n]);return e},U=function(e,t){return void 0===t?_(e):F(_(e),t)},R=function(e){var t=P.call(this,e);return t||!i(this,e)||!i(D,e)||i(this,E)&&this[E][e]?t:!0},K=function(e,t){var n=w(e=x(e),t);return!n||!i(D,t)||i(e,E)&&e[E][t]||(n.enumerable=!0),n},J=function(e){for(var t,n=k(x(e)),o=[],r=0;n.length>r;)i(D,t=n[r++])||t==E||o.push(t);return o},q=function(e){for(var t,n=k(x(e)),o=[],r=0;n.length>r;)i(D,t=n[r++])&&o.push(D[t]);return o},H=function(e){if(void 0!==e&&!L(e)){for(var t,n,o=[e],r=1,i=arguments;i.length>r;)o.push(i[r++]);return t=o[1],"function"==typeof t&&(n=t),!n&&g(t)||(t=function(e,t){return n&&(t=n.call(this,e,t)),L(t)?void 0:t}),o[1]=t,j.apply(M,o)}},W=c(function(){var e=O();return"[null]"!=j([e])||"{}"!=j({a:e})||"{}"!=j(Object(e))});C||(O=function(){if(L(this))throw TypeError("Symbol is not a constructor");return I(p(arguments.length>0?arguments[0]:void 0))},a(O.prototype,"toString",function(){return this._k}),L=function(e){return e instanceof O},o.create=U,o.isEnum=R,o.getDesc=K,o.setDesc=z,o.setDescs=F,o.getNames=h.get=J,o.getSymbols=q,u&&!n(40)&&a(B,"propertyIsEnumerable",R,!0));var G={"for":function(e){return i(N,e+="")?N[e]:N[e]=O(e)},keyFor:function(e){return v(N,e)},useSetter:function(){T=!0},useSimple:function(){T=!1}};o.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(e){var t=d(e);G[e]=C?t:I(t)}),T=!0,s(s.G+s.W,{Symbol:O}),s(s.S,"Symbol",G),s(s.S+s.F*!C,"Object",{create:U,defineProperty:z,defineProperties:F,getOwnPropertyDescriptor:K,getOwnPropertyNames:J,getOwnPropertySymbols:q}),M&&s(s.S+s.F*(!C||W),"JSON",{stringify:H}),l(O,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),i=o(r),u=function(e,t){var n=t.currentTarget;if(i["default"].has(n,"ui-ripple-ink")||(n=n.querySelector(".ui-ripple-ink"))){var o=n.getAttribute("data-ui-event");if(!o||o===e){n.setAttribute("data-ui-event",e);var r,u=n.getBoundingClientRect(),s=t.offsetX;void 0!==s?r=t.offsetY:(s=t.clientX-u.left,r=t.clientY-u.top);var a,c=document.createElement("div");a=u.width===u.height?1.412*u.width:Math.sqrt(u.width*u.width+u.height*u.height);var f=2*a+"px";c.style.width=f,c.style.height=f,c.style.marginLeft=-a+s+"px",c.style.marginTop=-a+r+"px",c.className="ripple",n.appendChild(c),setTimeout(function(){i["default"].add(c,"held")},0);var l="mousedown"===e?"mouseup":"touchend",p=function d(){document.removeEventListener(l,d),i["default"].add(c,"done"),setTimeout(function(){n.removeChild(c),n.children.length||(i["default"].remove(n,"active"),n.removeAttribute("data-ui-event"))},450)};document.addEventListener(l,p)}}},s=function(e){0===e.button&&u(e.type,e)},a=function(e){if(e.changedTouches)for(var t=0;t<e.changedTouches.length;++t)u(e.type,e.changedTouches[t])};t["default"]={name:"ui-ripple-ink",props:{trigger:{type:Element,required:!0}},watch:{trigger:function(){this.initialize()}},ready:function(){this.initialize()},beforeDestory:function(){this.trigger&&(this.trigger.removeEventListener("mousedown",s),this.trigger.removeEventListener("touchstart",a))},methods:{initialize:function(){this.trigger&&(this.trigger.addEventListener("touchstart",a),this.trigger.addEventListener("mousedown",s))}}}},,function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".ui-ripple-ink{display:block;overflow:hidden;border-radius:inherit;position:absolute;top:0;left:0;right:0;bottom:0;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.ui-ripple-ink .ripple{position:absolute;width:0;height:0;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:50%;background-color:currentColor;background-clip:padding-box;opacity:.2;-webkit-transform:scale(0);transform:scale(0);transition:opacity .4s ease-out,-webkit-transform .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out,-webkit-transform .4s ease-out}.ui-ripple-ink .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.ui-ripple-ink .ripple.done{opacity:0!important}",""])},function(e,t){e.exports="<div class=ui-ripple-ink></div>"},function(e,t,n){var o,r;n(51),o=n(46),r=n(49),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,n){var o=n(48);"string"==typeof o&&(o=[[e.id,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)},,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(6),i=o(r),u=n(23),s=o(u);t["default"]={name:"ui-menu-option",props:{type:String,text:String,icon:String,showIcon:{type:Boolean,"default":!1},secondaryText:String,showSecondaryText:{type:Boolean,"default":!1},partial:{type:String,"default":"ui-menu-default"},disabled:{type:Boolean,"default":!1},option:Object},computed:{isDivider:function(){return"divider"===this.type}},components:{UiIcon:i["default"]},partials:{"ui-menu-default":'\n            <ui-icon\n                class="ui-menu-option-icon" :icon="icon" v-if="showIcon && !isDivider && icon"\n            ></ui-icon>\n\n            <div class="ui-menu-option-text" v-text="text" v-if="!isDivider"></div>\n\n            <div\n                class="ui-menu-option-secondary-text" v-text="secondaryText"\n                v-if="showSecondaryText && !isDivider && secondaryText"\n            ></div>\n        '},mixins:[s["default"]]}},,function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".ui-menu-option{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ui-menu-option-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui-menu-option{font-family:Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;position:relative;display:block;height:40px}.ui-menu-option.divider{display:block;width:100%;margin:6px 0;padding:0;height:1px;background-color:rgba(0,0,0,.08)}.ui-menu-option:not(.divider){width:100%;text-decoration:none;color:rgba(0,0,0,.87);font-size:14px;font-weight:400;outline:none}.ui-menu-option:not(.divider):hover:not(.disabled){background-color:rgba(0,0,0,.06)}body[modality=keyboard] .ui-menu-option:not(.divider):focus{background-color:rgba(0,0,0,.1)}.ui-menu-option:not(.divider).disabled{opacity:.5;color:rgba(0,0,0,.54)}.ui-menu-option:not(.divider).disabled .ui-menu-option-secondary-text{color:rgba(0,0,0,.54)}.ui-menu-option:not(.divider):not(.disabled){cursor:pointer}.ui-menu-option-content.ui-menu-default{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:8px 16px}.ui-menu-option-icon{margin-right:16px;font-size:18px;color:rgba(0,0,0,.54)}.ui-menu-option-text{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.ui-menu-option-secondary-text{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-left:4px;font-size:13px;color:rgba(0,0,0,.38)}",""])},,function(e,t){e.exports="<a class=ui-menu-option role=menu-item :tabindex=\"(isDivider || disabled) ? null : '0'\" :class=\"{ 'divider': isDivider, 'disabled' : disabled }\"> <div class=ui-menu-option-content :class=[partial]> <partial :name=partial></partial> </div> <ui-ripple-ink :trigger=$el v-if=\"!hideRippleInk && !disabled && !isDivider\"></ui-ripple-ink> </a>"},,,function(e,t,n){var o,r;n(62),o=n(53),r=n(57),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},,function(e,t,n){var o=n(55);"string"==typeof o&&(o=[[e.id,o,""]]);n(2)(o,{});o.locals&&(e.exports=o.locals)}])});