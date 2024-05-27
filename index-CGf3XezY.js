(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const l of u)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(u){const l={};return u.integrity&&(l.integrity=u.integrity),u.referrerPolicy&&(l.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?l.credentials="include":u.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(u){if(u.ep)return;u.ep=!0;const l=n(u);fetch(u.href,l)}})();function _a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pa={exports:{}},Wu={},ha={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xr=Symbol.for("react.element"),t2=Symbol.for("react.portal"),n2=Symbol.for("react.fragment"),r2=Symbol.for("react.strict_mode"),u2=Symbol.for("react.profiler"),l2=Symbol.for("react.provider"),i2=Symbol.for("react.context"),o2=Symbol.for("react.forward_ref"),s2=Symbol.for("react.suspense"),a2=Symbol.for("react.memo"),c2=Symbol.for("react.lazy"),Bo=Symbol.iterator;function f2(e){return e===null||typeof e!="object"?null:(e=Bo&&e[Bo]||e["@@iterator"],typeof e=="function"?e:null)}var ma={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ya=Object.assign,ga={};function jn(e,t,n){this.props=e,this.context=t,this.refs=ga,this.updater=n||ma}jn.prototype.isReactComponent={};jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function va(){}va.prototype=jn.prototype;function Hi(e,t,n){this.props=e,this.context=t,this.refs=ga,this.updater=n||ma}var Bi=Hi.prototype=new va;Bi.constructor=Hi;ya(Bi,jn.prototype);Bi.isPureReactComponent=!0;var Wo=Array.isArray,Sa=Object.prototype.hasOwnProperty,Wi={current:null},Ea={key:!0,ref:!0,__self:!0,__source:!0};function wa(e,t,n){var r,u={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Sa.call(t,r)&&!Ea.hasOwnProperty(r)&&(u[r]=t[r]);var o=arguments.length-2;if(o===1)u.children=n;else if(1<o){for(var s=Array(o),a=0;a<o;a++)s[a]=arguments[a+2];u.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)u[r]===void 0&&(u[r]=o[r]);return{$$typeof:xr,type:e,key:l,ref:i,props:u,_owner:Wi.current}}function d2(e,t){return{$$typeof:xr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vi(e){return typeof e=="object"&&e!==null&&e.$$typeof===xr}function _2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Vo=/\/+/g;function cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_2(""+e.key):t.toString(36)}function ru(e,t,n,r,u){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case xr:case t2:i=!0}}if(i)return i=e,u=u(i),e=r===""?"."+cl(i,0):r,Wo(u)?(n="",e!=null&&(n=e.replace(Vo,"$&/")+"/"),ru(u,t,n,"",function(a){return a})):u!=null&&(Vi(u)&&(u=d2(u,n+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(Vo,"$&/")+"/")+e)),t.push(u)),1;if(i=0,r=r===""?".":r+":",Wo(e))for(var o=0;o<e.length;o++){l=e[o];var s=r+cl(l,o);i+=ru(l,t,n,s,u)}else if(s=f2(e),typeof s=="function")for(e=s.call(e),o=0;!(l=e.next()).done;)l=l.value,s=r+cl(l,o++),i+=ru(l,t,n,s,u);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function $r(e,t,n){if(e==null)return e;var r=[],u=0;return ru(e,r,"","",function(l){return t.call(n,l,u++)}),r}function p2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},uu={transition:null},h2={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:uu,ReactCurrentOwner:Wi};function Ta(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:$r,forEach:function(e,t,n){$r(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $r(e,function(){t++}),t},toArray:function(e){return $r(e,function(t){return t})||[]},only:function(e){if(!Vi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=jn;W.Fragment=n2;W.Profiler=u2;W.PureComponent=Hi;W.StrictMode=r2;W.Suspense=s2;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h2;W.act=Ta;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ya({},e.props),u=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Wi.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(s in t)Sa.call(t,s)&&!Ea.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&o!==void 0?o[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){o=Array(s);for(var a=0;a<s;a++)o[a]=arguments[a+2];r.children=o}return{$$typeof:xr,type:e.type,key:u,ref:l,props:r,_owner:i}};W.createContext=function(e){return e={$$typeof:i2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:l2,_context:e},e.Consumer=e};W.createElement=wa;W.createFactory=function(e){var t=wa.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:o2,render:e}};W.isValidElement=Vi;W.lazy=function(e){return{$$typeof:c2,_payload:{_status:-1,_result:e},_init:p2}};W.memo=function(e,t){return{$$typeof:a2,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=uu.transition;uu.transition={};try{e()}finally{uu.transition=t}};W.unstable_act=Ta;W.useCallback=function(e,t){return Ce.current.useCallback(e,t)};W.useContext=function(e){return Ce.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};W.useEffect=function(e,t){return Ce.current.useEffect(e,t)};W.useId=function(){return Ce.current.useId()};W.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ce.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};W.useRef=function(e){return Ce.current.useRef(e)};W.useState=function(e){return Ce.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Ce.current.useTransition()};W.version="18.3.1";ha.exports=W;var rt=ha.exports;const m2=_a(rt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y2=rt,g2=Symbol.for("react.element"),v2=Symbol.for("react.fragment"),S2=Object.prototype.hasOwnProperty,E2=y2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w2={key:!0,ref:!0,__self:!0,__source:!0};function Ra(e,t,n){var r,u={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)S2.call(t,r)&&!w2.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)u[r]===void 0&&(u[r]=t[r]);return{$$typeof:g2,type:e,key:l,ref:i,props:u,_owner:E2.current}}Wu.Fragment=v2;Wu.jsx=Ra;Wu.jsxs=Ra;pa.exports=Wu;var ae=pa.exports,Hl={},La={exports:{}},Ve={},ka={exports:{}},Na={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,$){var j=P.length;P.push($);e:for(;0<j;){var J=j-1>>>1,V=P[J];if(0<u(V,$))P[J]=$,P[j]=V,j=J;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var $=P[0],j=P.pop();if(j!==$){P[0]=j;e:for(var J=0,V=P.length,g=V>>>1;J<g;){var E=2*(J+1)-1,f=P[E],y=E+1,w=P[y];if(0>u(f,j))y<V&&0>u(w,f)?(P[J]=w,P[y]=j,J=y):(P[J]=f,P[E]=j,J=E);else if(y<V&&0>u(w,j))P[J]=w,P[y]=j,J=y;else break e}}return $}function u(P,$){var j=P.sortIndex-$.sortIndex;return j!==0?j:P.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,o=i.now();e.unstable_now=function(){return i.now()-o}}var s=[],a=[],c=1,h=null,m=3,R=!1,v=!1,S=!1,U=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(P){for(var $=n(a);$!==null;){if($.callback===null)r(a);else if($.startTime<=P)r(a),$.sortIndex=$.expirationTime,t(s,$);else break;$=n(a)}}function k(P){if(S=!1,_(P),!v)if(n(s)!==null)v=!0,Qt(x);else{var $=n(a);$!==null&&Kt(k,$.startTime-P)}}function x(P,$){v=!1,S&&(S=!1,p(z),z=-1),R=!0;var j=m;try{for(_($),h=n(s);h!==null&&(!(h.expirationTime>$)||P&&!ke());){var J=h.callback;if(typeof J=="function"){h.callback=null,m=h.priorityLevel;var V=J(h.expirationTime<=$);$=e.unstable_now(),typeof V=="function"?h.callback=V:h===n(s)&&r(s),_($)}else r(s);h=n(s)}if(h!==null)var g=!0;else{var E=n(a);E!==null&&Kt(k,E.startTime-$),g=!1}return g}finally{h=null,m=j,R=!1}}var O=!1,F=null,z=-1,Y=5,H=-1;function ke(){return!(e.unstable_now()-H<Y)}function xe(){if(F!==null){var P=e.unstable_now();H=P;var $=!0;try{$=F(!0,P)}finally{$?Ee():(O=!1,F=null)}}else O=!1}var Ee;if(typeof d=="function")Ee=function(){d(xe)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,Ue=at.port2;at.port1.onmessage=xe,Ee=function(){Ue.postMessage(null)}}else Ee=function(){U(xe,0)};function Qt(P){F=P,O||(O=!0,Ee())}function Kt(P,$){z=U(function(){P(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||R||(v=!0,Qt(x))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var j=m;m=$;try{return P()}finally{m=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,$){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=m;m=P;try{return $()}finally{m=j}},e.unstable_scheduleCallback=function(P,$,j){var J=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?J+j:J):j=J,P){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=j+V,P={id:c++,callback:$,priorityLevel:P,startTime:j,expirationTime:V,sortIndex:-1},j>J?(P.sortIndex=j,t(a,P),n(s)===null&&P===n(a)&&(S?(p(z),z=-1):S=!0,Kt(k,j-J))):(P.sortIndex=V,t(s,P),v||R||(v=!0,Qt(x))),P},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(P){var $=m;return function(){var j=m;m=$;try{return P.apply(this,arguments)}finally{m=j}}}})(Na);ka.exports=Na;var T2=ka.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R2=rt,We=T2;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ia=new Set,_r={};function cn(e,t){On(e,t),On(e+"Capture",t)}function On(e,t){for(_r[e]=t,e=0;e<t.length;e++)Ia.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bl=Object.prototype.hasOwnProperty,L2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Go={},Qo={};function k2(e){return Bl.call(Qo,e)?!0:Bl.call(Go,e)?!1:L2.test(e)?Qo[e]=!0:(Go[e]=!0,!1)}function N2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I2(e,t,n,r){if(t===null||typeof t>"u"||N2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,u,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=u,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gi=/[\-:]([a-z])/g;function Qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gi,Qi);Se[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gi,Qi);Se[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gi,Qi);Se[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ki(e,t,n,r){var u=Se.hasOwnProperty(t)?Se[t]:null;(u!==null?u.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(I2(t,n,u,r)&&(n=null),r||u===null?k2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):u.mustUseProperty?e[u.propertyName]=n===null?u.type===3?!1:"":n:(t=u.attributeName,r=u.attributeNamespace,n===null?e.removeAttribute(t):(u=u.type,n=u===3||u===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rt=R2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jr=Symbol.for("react.element"),hn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),Xi=Symbol.for("react.strict_mode"),Wl=Symbol.for("react.profiler"),Ca=Symbol.for("react.provider"),Aa=Symbol.for("react.context"),Yi=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),Ji=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),xa=Symbol.for("react.offscreen"),Ko=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=Ko&&e[Ko]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,fl;function er(e){if(fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fl=t&&t[1]||""}return`
`+fl+e}var dl=!1;function _l(e,t){if(!e||dl)return"";dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(a){var r=a}Reflect.construct(e,[],t)}else{try{t.call()}catch(a){r=a}e.call(t.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var u=a.stack.split(`
`),l=r.stack.split(`
`),i=u.length-1,o=l.length-1;1<=i&&0<=o&&u[i]!==l[o];)o--;for(;1<=i&&0<=o;i--,o--)if(u[i]!==l[o]){if(i!==1||o!==1)do if(i--,o--,0>o||u[i]!==l[o]){var s=`
`+u[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=o);break}}}finally{dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function C2(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function Ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case hn:return"Portal";case Wl:return"Profiler";case Xi:return"StrictMode";case Vl:return"Suspense";case Gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Aa:return(e.displayName||"Context")+".Consumer";case Ca:return(e._context.displayName||"Context")+".Provider";case Yi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ji:return t=e.displayName||null,t!==null?t:Ql(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return Ql(e(t))}catch{}}return null}function A2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ql(t);case 8:return t===Xi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function x2(e){var t=Pa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var u=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hr(e){e._valueTracker||(e._valueTracker=x2(e))}function Oa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kl(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Fa(e,t){t=t.checked,t!=null&&Ki(e,"checked",t,!1)}function Xl(e,t){Fa(e,t);var n=Ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yl(e,t.type,Ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yl(e,t,n){(t!=="number"||yu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var tr=Array.isArray;function Nn(e,t,n,r){if(e=e.options,t){t={};for(var u=0;u<n.length;u++)t["$"+n[u]]=!0;for(n=0;n<e.length;n++)u=t.hasOwnProperty("$"+e[n].value),e[n].selected!==u&&(e[n].selected=u),u&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,u=0;u<e.length;u++){if(e[u].value===n){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(tr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ht(n)}}function Ma(e,t){var n=Ht(t.value),r=Ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function za(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ql(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?za(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Br,Da=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,u){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,u)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Br=Br||document.createElement("div"),Br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P2=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){P2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function Ua(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function $a(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,u=Ua(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,u):e[n]=u}}var O2=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zl(e,t){if(t){if(O2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ei=null;function qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ti=null,In=null,Cn=null;function Zo(e){if(e=Fr(e)){if(typeof ti!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Xu(t),ti(e.stateNode,e.type,t))}}function ja(e){In?Cn?Cn.push(e):Cn=[e]:In=e}function Ha(){if(In){var e=In,t=Cn;if(Cn=In=null,Zo(e),t)for(e=0;e<t.length;e++)Zo(t[e])}}function Ba(e,t){return e(t)}function Wa(){}var pl=!1;function Va(e,t,n){if(pl)return e(t,n);pl=!0;try{return Ba(e,t,n)}finally{pl=!1,(In!==null||Cn!==null)&&(Wa(),Ha())}}function hr(e,t){var n=e.stateNode;if(n===null)return null;var r=Xu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var ni=!1;if(St)try{var Qn={};Object.defineProperty(Qn,"passive",{get:function(){ni=!0}}),window.addEventListener("test",Qn,Qn),window.removeEventListener("test",Qn,Qn)}catch{ni=!1}function F2(e,t,n,r,u,l,i,o,s){var a=Array.prototype.slice.call(arguments,3);try{t.apply(n,a)}catch(c){this.onError(c)}}var lr=!1,gu=null,vu=!1,ri=null,M2={onError:function(e){lr=!0,gu=e}};function z2(e,t,n,r,u,l,i,o,s){lr=!1,gu=null,F2.apply(M2,arguments)}function D2(e,t,n,r,u,l,i,o,s){if(z2.apply(this,arguments),lr){if(lr){var a=gu;lr=!1,gu=null}else throw Error(N(198));vu||(vu=!0,ri=a)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ga(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bo(e){if(fn(e)!==e)throw Error(N(188))}function U2(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var u=n.return;if(u===null)break;var l=u.alternate;if(l===null){if(r=u.return,r!==null){n=r;continue}break}if(u.child===l.child){for(l=u.child;l;){if(l===n)return bo(u),e;if(l===r)return bo(u),t;l=l.sibling}throw Error(N(188))}if(n.return!==r.return)n=u,r=l;else{for(var i=!1,o=u.child;o;){if(o===n){i=!0,n=u,r=l;break}if(o===r){i=!0,r=u,n=l;break}o=o.sibling}if(!i){for(o=l.child;o;){if(o===n){i=!0,n=l,r=u;break}if(o===r){i=!0,r=l,n=u;break}o=o.sibling}if(!i)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Qa(e){return e=U2(e),e!==null?Ka(e):null}function Ka(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ka(e);if(t!==null)return t;e=e.sibling}return null}var Xa=We.unstable_scheduleCallback,es=We.unstable_cancelCallback,$2=We.unstable_shouldYield,j2=We.unstable_requestPaint,ce=We.unstable_now,H2=We.unstable_getCurrentPriorityLevel,Zi=We.unstable_ImmediatePriority,Ya=We.unstable_UserBlockingPriority,Su=We.unstable_NormalPriority,B2=We.unstable_LowPriority,Ja=We.unstable_IdlePriority,Vu=null,_t=null;function W2(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Vu,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Q2,V2=Math.log,G2=Math.LN2;function Q2(e){return e>>>=0,e===0?32:31-(V2(e)/G2|0)|0}var Wr=64,Vr=4194304;function nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Eu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,u=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var o=i&~u;o!==0?r=nr(o):(l&=i,l!==0&&(r=nr(l)))}else i=n&~u,i!==0?r=nr(i):l!==0&&(r=nr(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&u)&&(u=r&-r,l=t&-t,u>=l||u===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ut(t),u=1<<n,r|=e[n],t&=~u;return r}function K2(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X2(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-ut(l),o=1<<i,s=u[i];s===-1?(!(o&n)||o&r)&&(u[i]=K2(o,t)):s<=t&&(e.expiredLanes|=o),l&=~o}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qa(){var e=Wr;return Wr<<=1,!(Wr&4194240)&&(Wr=64),e}function hl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function Y2(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var u=31-ut(n),l=1<<u;t[u]=0,r[u]=-1,e[u]=-1,n&=~l}}function bi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),u=1<<r;u&t|e[r]&t&&(e[r]|=t),n&=~u}}var Q=0;function Za(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ba,eo,ec,tc,nc,li=!1,Gr=[],Ot=null,Ft=null,Mt=null,mr=new Map,yr=new Map,Ct=[],J2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ts(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(t.pointerId)}}function Kn(e,t,n,r,u,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[u]},t!==null&&(t=Fr(t),t!==null&&eo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function q2(e,t,n,r,u){switch(t){case"focusin":return Ot=Kn(Ot,e,t,n,r,u),!0;case"dragenter":return Ft=Kn(Ft,e,t,n,r,u),!0;case"mouseover":return Mt=Kn(Mt,e,t,n,r,u),!0;case"pointerover":var l=u.pointerId;return mr.set(l,Kn(mr.get(l)||null,e,t,n,r,u)),!0;case"gotpointercapture":return l=u.pointerId,yr.set(l,Kn(yr.get(l)||null,e,t,n,r,u)),!0}return!1}function rc(e){var t=Jt(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ga(n),t!==null){e.blockedOn=t,nc(e.priority,function(){ec(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ii(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ei=r,n.target.dispatchEvent(r),ei=null}else return t=Fr(n),t!==null&&eo(t),e.blockedOn=n,!1;t.shift()}return!0}function ns(e,t,n){lu(e)&&n.delete(t)}function Z2(){li=!1,Ot!==null&&lu(Ot)&&(Ot=null),Ft!==null&&lu(Ft)&&(Ft=null),Mt!==null&&lu(Mt)&&(Mt=null),mr.forEach(ns),yr.forEach(ns)}function Xn(e,t){e.blockedOn===t&&(e.blockedOn=null,li||(li=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,Z2)))}function gr(e){function t(u){return Xn(u,e)}if(0<Gr.length){Xn(Gr[0],e);for(var n=1;n<Gr.length;n++){var r=Gr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&Xn(Ot,e),Ft!==null&&Xn(Ft,e),Mt!==null&&Xn(Mt,e),mr.forEach(t),yr.forEach(t),n=0;n<Ct.length;n++)r=Ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ct.length&&(n=Ct[0],n.blockedOn===null);)rc(n),n.blockedOn===null&&Ct.shift()}var An=Rt.ReactCurrentBatchConfig,wu=!0;function b2(e,t,n,r){var u=Q,l=An.transition;An.transition=null;try{Q=1,to(e,t,n,r)}finally{Q=u,An.transition=l}}function ed(e,t,n,r){var u=Q,l=An.transition;An.transition=null;try{Q=4,to(e,t,n,r)}finally{Q=u,An.transition=l}}function to(e,t,n,r){if(wu){var u=ii(e,t,n,r);if(u===null)Ll(e,t,r,Tu,n),ts(e,r);else if(q2(u,e,t,n,r))r.stopPropagation();else if(ts(e,r),t&4&&-1<J2.indexOf(e)){for(;u!==null;){var l=Fr(u);if(l!==null&&ba(l),l=ii(e,t,n,r),l===null&&Ll(e,t,r,Tu,n),l===u)break;u=l}u!==null&&r.stopPropagation()}else Ll(e,t,r,null,n)}}var Tu=null;function ii(e,t,n,r){if(Tu=null,e=qi(r),e=Jt(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ga(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tu=e,null}function uc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H2()){case Zi:return 1;case Ya:return 4;case Su:case B2:return 16;case Ja:return 536870912;default:return 16}default:return 16}}var xt=null,no=null,iu=null;function lc(){if(iu)return iu;var e,t=no,n=t.length,r,u="value"in xt?xt.value:xt.textContent,l=u.length;for(e=0;e<n&&t[e]===u[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===u[l-r];r++);return iu=u.slice(e,1<r?1-r:void 0)}function ou(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qr(){return!0}function rs(){return!1}function Ge(e){function t(n,r,u,l,i){this._reactName=n,this._targetInst=u,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Qr:rs,this.isPropagationStopped=rs,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qr)},persist:function(){},isPersistent:Qr}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ro=Ge(Hn),Or=ie({},Hn,{view:0,detail:0}),td=Ge(Or),ml,yl,Yn,Gu=ie({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(ml=e.screenX-Yn.screenX,yl=e.screenY-Yn.screenY):yl=ml=0,Yn=e),ml)},movementY:function(e){return"movementY"in e?e.movementY:yl}}),us=Ge(Gu),nd=ie({},Gu,{dataTransfer:0}),rd=Ge(nd),ud=ie({},Or,{relatedTarget:0}),gl=Ge(ud),ld=ie({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),id=Ge(ld),od=ie({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sd=Ge(od),ad=ie({},Hn,{data:0}),ls=Ge(ad),cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _d(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dd[e])?!!t[e]:!1}function uo(){return _d}var pd=ie({},Or,{key:function(e){if(e.key){var t=cd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ou(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uo,charCode:function(e){return e.type==="keypress"?ou(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ou(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hd=Ge(pd),md=ie({},Gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),is=Ge(md),yd=ie({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uo}),gd=Ge(yd),vd=ie({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sd=Ge(vd),Ed=ie({},Gu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wd=Ge(Ed),Td=[9,13,27,32],lo=St&&"CompositionEvent"in window,ir=null;St&&"documentMode"in document&&(ir=document.documentMode);var Rd=St&&"TextEvent"in window&&!ir,ic=St&&(!lo||ir&&8<ir&&11>=ir),os=" ",ss=!1;function oc(e,t){switch(e){case"keyup":return Td.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function Ld(e,t){switch(e){case"compositionend":return sc(t);case"keypress":return t.which!==32?null:(ss=!0,os);case"textInput":return e=t.data,e===os&&ss?null:e;default:return null}}function kd(e,t){if(yn)return e==="compositionend"||!lo&&oc(e,t)?(e=lc(),iu=no=xt=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ic&&t.locale!=="ko"?null:t.data;default:return null}}var Nd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nd[e.type]:t==="textarea"}function ac(e,t,n,r){ja(r),t=Ru(t,"onChange"),0<t.length&&(n=new ro("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var or=null,vr=null;function Id(e){Sc(e,0)}function Qu(e){var t=Sn(e);if(Oa(t))return e}function Cd(e,t){if(e==="change")return t}var cc=!1;if(St){var vl;if(St){var Sl="oninput"in document;if(!Sl){var cs=document.createElement("div");cs.setAttribute("oninput","return;"),Sl=typeof cs.oninput=="function"}vl=Sl}else vl=!1;cc=vl&&(!document.documentMode||9<document.documentMode)}function fs(){or&&(or.detachEvent("onpropertychange",fc),vr=or=null)}function fc(e){if(e.propertyName==="value"&&Qu(vr)){var t=[];ac(t,vr,e,qi(e)),Va(Id,t)}}function Ad(e,t,n){e==="focusin"?(fs(),or=t,vr=n,or.attachEvent("onpropertychange",fc)):e==="focusout"&&fs()}function xd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qu(vr)}function Pd(e,t){if(e==="click")return Qu(t)}function Od(e,t){if(e==="input"||e==="change")return Qu(t)}function Fd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Fd;function Sr(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var u=n[r];if(!Bl.call(t,u)||!ot(e[u],t[u]))return!1}return!0}function ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _s(e,t){var n=ds(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ds(n)}}function dc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _c(){for(var e=window,t=yu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yu(e.document)}return t}function io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Md(e){var t=_c(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dc(n.ownerDocument.documentElement,n)){if(r!==null&&io(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=n.textContent.length,l=Math.min(r.start,u);r=r.end===void 0?l:Math.min(r.end,u),!e.extend&&l>r&&(u=r,r=l,l=u),u=_s(n,l);var i=_s(n,r);u&&i&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zd=St&&"documentMode"in document&&11>=document.documentMode,gn=null,oi=null,sr=null,si=!1;function ps(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;si||gn==null||gn!==yu(r)||(r=gn,"selectionStart"in r&&io(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sr&&Sr(sr,r)||(sr=r,r=Ru(oi,"onSelect"),0<r.length&&(t=new ro("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gn)))}function Kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vn={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionend:Kr("Transition","TransitionEnd")},El={},pc={};St&&(pc=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function Ku(e){if(El[e])return El[e];if(!vn[e])return e;var t=vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in pc)return El[e]=t[n];return e}var hc=Ku("animationend"),mc=Ku("animationiteration"),yc=Ku("animationstart"),gc=Ku("transitionend"),vc=new Map,hs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){vc.set(e,t),cn(t,[e])}for(var wl=0;wl<hs.length;wl++){var Tl=hs[wl],Dd=Tl.toLowerCase(),Ud=Tl[0].toUpperCase()+Tl.slice(1);Wt(Dd,"on"+Ud)}Wt(hc,"onAnimationEnd");Wt(mc,"onAnimationIteration");Wt(yc,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(gc,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$d=new Set("cancel close invalid load scroll toggle".split(" ").concat(rr));function ms(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,D2(r,t,void 0,e),e.currentTarget=null}function Sc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],u=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var o=r[i],s=o.instance,a=o.currentTarget;if(o=o.listener,s!==l&&u.isPropagationStopped())break e;ms(u,o,a),l=s}else for(i=0;i<r.length;i++){if(o=r[i],s=o.instance,a=o.currentTarget,o=o.listener,s!==l&&u.isPropagationStopped())break e;ms(u,o,a),l=s}}}if(vu)throw e=ri,vu=!1,ri=null,e}function te(e,t){var n=t[_i];n===void 0&&(n=t[_i]=new Set);var r=e+"__bubble";n.has(r)||(Ec(t,e,2,!1),n.add(r))}function Rl(e,t,n){var r=0;t&&(r|=4),Ec(n,e,r,t)}var Xr="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[Xr]){e[Xr]=!0,Ia.forEach(function(n){n!=="selectionchange"&&($d.has(n)||Rl(n,!1,e),Rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xr]||(t[Xr]=!0,Rl("selectionchange",!1,t))}}function Ec(e,t,n,r){switch(uc(t)){case 1:var u=b2;break;case 4:u=ed;break;default:u=to}n=u.bind(null,t,n,e),u=void 0,!ni||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(t,n,{capture:!0,passive:u}):e.addEventListener(t,n,!0):u!==void 0?e.addEventListener(t,n,{passive:u}):e.addEventListener(t,n,!1)}function Ll(e,t,n,r,u){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var o=r.stateNode.containerInfo;if(o===u||o.nodeType===8&&o.parentNode===u)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===u||s.nodeType===8&&s.parentNode===u))return;i=i.return}for(;o!==null;){if(i=Jt(o),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}o=o.parentNode}}r=r.return}Va(function(){var a=l,c=qi(n),h=[];e:{var m=vc.get(e);if(m!==void 0){var R=ro,v=e;switch(e){case"keypress":if(ou(n)===0)break e;case"keydown":case"keyup":R=hd;break;case"focusin":v="focus",R=gl;break;case"focusout":v="blur",R=gl;break;case"beforeblur":case"afterblur":R=gl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=rd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=gd;break;case hc:case mc:case yc:R=id;break;case gc:R=Sd;break;case"scroll":R=td;break;case"wheel":R=wd;break;case"copy":case"cut":case"paste":R=sd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=is}var S=(t&4)!==0,U=!S&&e==="scroll",p=S?m!==null?m+"Capture":null:m;S=[];for(var d=a,_;d!==null;){_=d;var k=_.stateNode;if(_.tag===5&&k!==null&&(_=k,p!==null&&(k=hr(d,p),k!=null&&S.push(wr(d,k,_)))),U)break;d=d.return}0<S.length&&(m=new R(m,v,null,n,c),h.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",m&&n!==ei&&(v=n.relatedTarget||n.fromElement)&&(Jt(v)||v[Et]))break e;if((R||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,R?(v=n.relatedTarget||n.toElement,R=a,v=v?Jt(v):null,v!==null&&(U=fn(v),v!==U||v.tag!==5&&v.tag!==6)&&(v=null)):(R=null,v=a),R!==v)){if(S=us,k="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(S=is,k="onPointerLeave",p="onPointerEnter",d="pointer"),U=R==null?m:Sn(R),_=v==null?m:Sn(v),m=new S(k,d+"leave",R,n,c),m.target=U,m.relatedTarget=_,k=null,Jt(c)===a&&(S=new S(p,d+"enter",v,n,c),S.target=_,S.relatedTarget=U,k=S),U=k,R&&v)t:{for(S=R,p=v,d=0,_=S;_;_=_n(_))d++;for(_=0,k=p;k;k=_n(k))_++;for(;0<d-_;)S=_n(S),d--;for(;0<_-d;)p=_n(p),_--;for(;d--;){if(S===p||p!==null&&S===p.alternate)break t;S=_n(S),p=_n(p)}S=null}else S=null;R!==null&&ys(h,m,R,S,!1),v!==null&&U!==null&&ys(h,U,v,S,!0)}}e:{if(m=a?Sn(a):window,R=m.nodeName&&m.nodeName.toLowerCase(),R==="select"||R==="input"&&m.type==="file")var x=Cd;else if(as(m))if(cc)x=Od;else{x=xd;var O=Ad}else(R=m.nodeName)&&R.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=Pd);if(x&&(x=x(e,a))){ac(h,x,n,c);break e}O&&O(e,m,a),e==="focusout"&&(O=m._wrapperState)&&O.controlled&&m.type==="number"&&Yl(m,"number",m.value)}switch(O=a?Sn(a):window,e){case"focusin":(as(O)||O.contentEditable==="true")&&(gn=O,oi=a,sr=null);break;case"focusout":sr=oi=gn=null;break;case"mousedown":si=!0;break;case"contextmenu":case"mouseup":case"dragend":si=!1,ps(h,n,c);break;case"selectionchange":if(zd)break;case"keydown":case"keyup":ps(h,n,c)}var F;if(lo)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else yn?oc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(ic&&n.locale!=="ko"&&(yn||z!=="onCompositionStart"?z==="onCompositionEnd"&&yn&&(F=lc()):(xt=c,no="value"in xt?xt.value:xt.textContent,yn=!0)),O=Ru(a,z),0<O.length&&(z=new ls(z,e,null,n,c),h.push({event:z,listeners:O}),F?z.data=F:(F=sc(n),F!==null&&(z.data=F)))),(F=Rd?Ld(e,n):kd(e,n))&&(a=Ru(a,"onBeforeInput"),0<a.length&&(c=new ls("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:a}),c.data=F))}Sc(h,t)})}function wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ru(e,t){for(var n=t+"Capture",r=[];e!==null;){var u=e,l=u.stateNode;u.tag===5&&l!==null&&(u=l,l=hr(e,n),l!=null&&r.unshift(wr(e,l,u)),l=hr(e,t),l!=null&&r.push(wr(e,l,u))),e=e.return}return r}function _n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ys(e,t,n,r,u){for(var l=t._reactName,i=[];n!==null&&n!==r;){var o=n,s=o.alternate,a=o.stateNode;if(s!==null&&s===r)break;o.tag===5&&a!==null&&(o=a,u?(s=hr(n,l),s!=null&&i.unshift(wr(n,s,o))):u||(s=hr(n,l),s!=null&&i.push(wr(n,s,o)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var jd=/\r\n?/g,Hd=/\u0000|\uFFFD/g;function gs(e){return(typeof e=="string"?e:""+e).replace(jd,`
`).replace(Hd,"")}function Yr(e,t,n){if(t=gs(t),gs(e)!==t&&n)throw Error(N(425))}function Lu(){}var ai=null,ci=null;function fi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var di=typeof setTimeout=="function"?setTimeout:void 0,Bd=typeof clearTimeout=="function"?clearTimeout:void 0,vs=typeof Promise=="function"?Promise:void 0,Wd=typeof queueMicrotask=="function"?queueMicrotask:typeof vs<"u"?function(e){return vs.resolve(null).then(e).catch(Vd)}:di;function Vd(e){setTimeout(function(){throw e})}function kl(e,t){var n=t,r=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(r===0){e.removeChild(u),gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=u}while(n);gr(t)}function zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ss(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),dt="__reactFiber$"+Bn,Tr="__reactProps$"+Bn,Et="__reactContainer$"+Bn,_i="__reactEvents$"+Bn,Gd="__reactListeners$"+Bn,Qd="__reactHandles$"+Bn;function Jt(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ss(e);e!==null;){if(n=e[dt])return n;e=Ss(e)}return t}e=n,n=e.parentNode}return null}function Fr(e){return e=e[dt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Xu(e){return e[Tr]||null}var pi=[],En=-1;function Vt(e){return{current:e}}function ne(e){0>En||(e.current=pi[En],pi[En]=null,En--)}function Z(e,t){En++,pi[En]=e.current,e.current=t}var Bt={},Le=Vt(Bt),Fe=Vt(!1),rn=Bt;function Fn(e,t){var n=e.type.contextTypes;if(!n)return Bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var u={},l;for(l in n)u[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function Me(e){return e=e.childContextTypes,e!=null}function ku(){ne(Fe),ne(Le)}function Es(e,t,n){if(Le.current!==Bt)throw Error(N(168));Z(Le,t),Z(Fe,n)}function wc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var u in r)if(!(u in t))throw Error(N(108,A2(e)||"Unknown",u));return ie({},n,r)}function Nu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,rn=Le.current,Z(Le,e),Z(Fe,Fe.current),!0}function ws(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=wc(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,ne(Fe),ne(Le),Z(Le,e)):ne(Fe),Z(Fe,n)}var mt=null,Yu=!1,Nl=!1;function Tc(e){mt===null?mt=[e]:mt.push(e)}function Kd(e){Yu=!0,Tc(e)}function Gt(){if(!Nl&&mt!==null){Nl=!0;var e=0,t=Q;try{var n=mt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mt=null,Yu=!1}catch(u){throw mt!==null&&(mt=mt.slice(e+1)),Xa(Zi,Gt),u}finally{Q=t,Nl=!1}}return null}var wn=[],Tn=0,Iu=null,Cu=0,Qe=[],Ke=0,un=null,yt=1,gt="";function Xt(e,t){wn[Tn++]=Cu,wn[Tn++]=Iu,Iu=e,Cu=t}function Rc(e,t,n){Qe[Ke++]=yt,Qe[Ke++]=gt,Qe[Ke++]=un,un=e;var r=yt;e=gt;var u=32-ut(r)-1;r&=~(1<<u),n+=1;var l=32-ut(t)+u;if(30<l){var i=u-u%5;l=(r&(1<<i)-1).toString(32),r>>=i,u-=i,yt=1<<32-ut(t)+u|n<<u|r,gt=l+e}else yt=1<<l|n<<u|r,gt=e}function oo(e){e.return!==null&&(Xt(e,1),Rc(e,1,0))}function so(e){for(;e===Iu;)Iu=wn[--Tn],wn[Tn]=null,Cu=wn[--Tn],wn[Tn]=null;for(;e===un;)un=Qe[--Ke],Qe[Ke]=null,gt=Qe[--Ke],Qe[Ke]=null,yt=Qe[--Ke],Qe[Ke]=null}var Be=null,He=null,re=!1,nt=null;function Lc(e,t){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ts(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Be=e,He=zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Be=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:yt,overflow:gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Be=e,He=null,!0):!1;default:return!1}}function hi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function mi(e){if(re){var t=He;if(t){var n=t;if(!Ts(e,t)){if(hi(e))throw Error(N(418));t=zt(n.nextSibling);var r=Be;t&&Ts(e,t)?Lc(r,n):(e.flags=e.flags&-4097|2,re=!1,Be=e)}}else{if(hi(e))throw Error(N(418));e.flags=e.flags&-4097|2,re=!1,Be=e}}}function Rs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Be=e}function Jr(e){if(e!==Be)return!1;if(!re)return Rs(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fi(e.type,e.memoizedProps)),t&&(t=He)){if(hi(e))throw kc(),Error(N(418));for(;t;)Lc(e,t),t=zt(t.nextSibling)}if(Rs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Be?zt(e.stateNode.nextSibling):null;return!0}function kc(){for(var e=He;e;)e=zt(e.nextSibling)}function Mn(){He=Be=null,re=!1}function ao(e){nt===null?nt=[e]:nt.push(e)}var Xd=Rt.ReactCurrentBatchConfig;function Jn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var u=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var o=u.refs;i===null?delete o[l]:o[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function qr(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ls(e){var t=e._init;return t(e._payload)}function Nc(e){function t(p,d){if(e){var _=p.deletions;_===null?(p.deletions=[d],p.flags|=16):_.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function u(p,d){return p=jt(p,d),p.index=0,p.sibling=null,p}function l(p,d,_){return p.index=_,e?(_=p.alternate,_!==null?(_=_.index,_<d?(p.flags|=2,d):_):(p.flags|=2,d)):(p.flags|=1048576,d)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,d,_,k){return d===null||d.tag!==6?(d=Fl(_,p.mode,k),d.return=p,d):(d=u(d,_),d.return=p,d)}function s(p,d,_,k){var x=_.type;return x===mn?c(p,d,_.props.children,k,_.key):d!==null&&(d.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Nt&&Ls(x)===d.type)?(k=u(d,_.props),k.ref=Jn(p,d,_),k.return=p,k):(k=pu(_.type,_.key,_.props,null,p.mode,k),k.ref=Jn(p,d,_),k.return=p,k)}function a(p,d,_,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==_.containerInfo||d.stateNode.implementation!==_.implementation?(d=Ml(_,p.mode,k),d.return=p,d):(d=u(d,_.children||[]),d.return=p,d)}function c(p,d,_,k,x){return d===null||d.tag!==7?(d=tn(_,p.mode,k,x),d.return=p,d):(d=u(d,_),d.return=p,d)}function h(p,d,_){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Fl(""+d,p.mode,_),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case jr:return _=pu(d.type,d.key,d.props,null,p.mode,_),_.ref=Jn(p,null,d),_.return=p,_;case hn:return d=Ml(d,p.mode,_),d.return=p,d;case Nt:var k=d._init;return h(p,k(d._payload),_)}if(tr(d)||Gn(d))return d=tn(d,p.mode,_,null),d.return=p,d;qr(p,d)}return null}function m(p,d,_,k){var x=d!==null?d.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return x!==null?null:o(p,d,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case jr:return _.key===x?s(p,d,_,k):null;case hn:return _.key===x?a(p,d,_,k):null;case Nt:return x=_._init,m(p,d,x(_._payload),k)}if(tr(_)||Gn(_))return x!==null?null:c(p,d,_,k,null);qr(p,_)}return null}function R(p,d,_,k,x){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(_)||null,o(d,p,""+k,x);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case jr:return p=p.get(k.key===null?_:k.key)||null,s(d,p,k,x);case hn:return p=p.get(k.key===null?_:k.key)||null,a(d,p,k,x);case Nt:var O=k._init;return R(p,d,_,O(k._payload),x)}if(tr(k)||Gn(k))return p=p.get(_)||null,c(d,p,k,x,null);qr(d,k)}return null}function v(p,d,_,k){for(var x=null,O=null,F=d,z=d=0,Y=null;F!==null&&z<_.length;z++){F.index>z?(Y=F,F=null):Y=F.sibling;var H=m(p,F,_[z],k);if(H===null){F===null&&(F=Y);break}e&&F&&H.alternate===null&&t(p,F),d=l(H,d,z),O===null?x=H:O.sibling=H,O=H,F=Y}if(z===_.length)return n(p,F),re&&Xt(p,z),x;if(F===null){for(;z<_.length;z++)F=h(p,_[z],k),F!==null&&(d=l(F,d,z),O===null?x=F:O.sibling=F,O=F);return re&&Xt(p,z),x}for(F=r(p,F);z<_.length;z++)Y=R(F,p,z,_[z],k),Y!==null&&(e&&Y.alternate!==null&&F.delete(Y.key===null?z:Y.key),d=l(Y,d,z),O===null?x=Y:O.sibling=Y,O=Y);return e&&F.forEach(function(ke){return t(p,ke)}),re&&Xt(p,z),x}function S(p,d,_,k){var x=Gn(_);if(typeof x!="function")throw Error(N(150));if(_=x.call(_),_==null)throw Error(N(151));for(var O=x=null,F=d,z=d=0,Y=null,H=_.next();F!==null&&!H.done;z++,H=_.next()){F.index>z?(Y=F,F=null):Y=F.sibling;var ke=m(p,F,H.value,k);if(ke===null){F===null&&(F=Y);break}e&&F&&ke.alternate===null&&t(p,F),d=l(ke,d,z),O===null?x=ke:O.sibling=ke,O=ke,F=Y}if(H.done)return n(p,F),re&&Xt(p,z),x;if(F===null){for(;!H.done;z++,H=_.next())H=h(p,H.value,k),H!==null&&(d=l(H,d,z),O===null?x=H:O.sibling=H,O=H);return re&&Xt(p,z),x}for(F=r(p,F);!H.done;z++,H=_.next())H=R(F,p,z,H.value,k),H!==null&&(e&&H.alternate!==null&&F.delete(H.key===null?z:H.key),d=l(H,d,z),O===null?x=H:O.sibling=H,O=H);return e&&F.forEach(function(xe){return t(p,xe)}),re&&Xt(p,z),x}function U(p,d,_,k){if(typeof _=="object"&&_!==null&&_.type===mn&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case jr:e:{for(var x=_.key,O=d;O!==null;){if(O.key===x){if(x=_.type,x===mn){if(O.tag===7){n(p,O.sibling),d=u(O,_.props.children),d.return=p,p=d;break e}}else if(O.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Nt&&Ls(x)===O.type){n(p,O.sibling),d=u(O,_.props),d.ref=Jn(p,O,_),d.return=p,p=d;break e}n(p,O);break}else t(p,O);O=O.sibling}_.type===mn?(d=tn(_.props.children,p.mode,k,_.key),d.return=p,p=d):(k=pu(_.type,_.key,_.props,null,p.mode,k),k.ref=Jn(p,d,_),k.return=p,p=k)}return i(p);case hn:e:{for(O=_.key;d!==null;){if(d.key===O)if(d.tag===4&&d.stateNode.containerInfo===_.containerInfo&&d.stateNode.implementation===_.implementation){n(p,d.sibling),d=u(d,_.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=Ml(_,p.mode,k),d.return=p,p=d}return i(p);case Nt:return O=_._init,U(p,d,O(_._payload),k)}if(tr(_))return v(p,d,_,k);if(Gn(_))return S(p,d,_,k);qr(p,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,d!==null&&d.tag===6?(n(p,d.sibling),d=u(d,_),d.return=p,p=d):(n(p,d),d=Fl(_,p.mode,k),d.return=p,p=d),i(p)):n(p,d)}return U}var zn=Nc(!0),Ic=Nc(!1),Au=Vt(null),xu=null,Rn=null,co=null;function fo(){co=Rn=xu=null}function _o(e){var t=Au.current;ne(Au),e._currentValue=t}function yi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xn(e,t){xu=e,co=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(co!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(xu===null)throw Error(N(308));Rn=e,xu.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var qt=null;function po(e){qt===null?qt=[e]:qt.push(e)}function Cc(e,t,n,r){var u=t.interleaved;return u===null?(n.next=n,po(t)):(n.next=u.next,u.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var It=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var u=r.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),r.pending=t,wt(e,n)}return u=r.interleaved,u===null?(t.next=t,po(r)):(t.next=u.next,u.next=t),r.interleaved=t,wt(e,n)}function su(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bi(e,n)}}function ks(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var u=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?u=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?u=l=t:l=l.next=t}else u=l=t;n={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Pu(e,t,n,r){var u=e.updateQueue;It=!1;var l=u.firstBaseUpdate,i=u.lastBaseUpdate,o=u.shared.pending;if(o!==null){u.shared.pending=null;var s=o,a=s.next;s.next=null,i===null?l=a:i.next=a,i=s;var c=e.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==i&&(o===null?c.firstBaseUpdate=a:o.next=a,c.lastBaseUpdate=s))}if(l!==null){var h=u.baseState;i=0,c=a=s=null,o=l;do{var m=o.lane,R=o.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:R,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=e,S=o;switch(m=t,R=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){h=v.call(R,h,m);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,m=typeof v=="function"?v.call(R,h,m):v,m==null)break e;h=ie({},h,m);break e;case 2:It=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=u.effects,m===null?u.effects=[o]:m.push(o))}else R={eventTime:R,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(a=c=R,s=h):c=c.next=R,i|=m;if(o=o.next,o===null){if(o=u.shared.pending,o===null)break;m=o,o=m.next,m.next=null,u.lastBaseUpdate=m,u.shared.pending=null}}while(!0);if(c===null&&(s=h),u.baseState=s,u.firstBaseUpdate=a,u.lastBaseUpdate=c,t=u.shared.interleaved,t!==null){u=t;do i|=u.lane,u=u.next;while(u!==t)}else l===null&&(u.shared.lanes=0);on|=i,e.lanes=i,e.memoizedState=h}}function Ns(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],u=r.callback;if(u!==null){if(r.callback=null,r=n,typeof u!="function")throw Error(N(191,u));u.call(r)}}}var Mr={},pt=Vt(Mr),Rr=Vt(Mr),Lr=Vt(Mr);function Zt(e){if(e===Mr)throw Error(N(174));return e}function mo(e,t){switch(Z(Lr,t),Z(Rr,e),Z(pt,Mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ql(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ql(t,e)}ne(pt),Z(pt,t)}function Dn(){ne(pt),ne(Rr),ne(Lr)}function xc(e){Zt(Lr.current);var t=Zt(pt.current),n=ql(t,e.type);t!==n&&(Z(Rr,e),Z(pt,n))}function yo(e){Rr.current===e&&(ne(pt),ne(Rr))}var ue=Vt(0);function Ou(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Il=[];function go(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var au=Rt.ReactCurrentDispatcher,Cl=Rt.ReactCurrentBatchConfig,ln=0,le=null,_e=null,he=null,Fu=!1,ar=!1,kr=0,Yd=0;function we(){throw Error(N(321))}function vo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function So(e,t,n,r,u,l){if(ln=l,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,au.current=e===null||e.memoizedState===null?bd:e5,e=n(r,u),ar){l=0;do{if(ar=!1,kr=0,25<=l)throw Error(N(301));l+=1,he=_e=null,t.updateQueue=null,au.current=t5,e=n(r,u)}while(ar)}if(au.current=Mu,t=_e!==null&&_e.next!==null,ln=0,he=_e=le=null,Fu=!1,t)throw Error(N(300));return e}function Eo(){var e=kr!==0;return kr=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?le.memoizedState=he=e:he=he.next=e,he}function Ze(){if(_e===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=he===null?le.memoizedState:he.next;if(t!==null)he=t,_e=e;else{if(e===null)throw Error(N(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},he===null?le.memoizedState=he=e:he=he.next=e}return he}function Nr(e,t){return typeof t=="function"?t(e):t}function Al(e){var t=Ze(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=_e,u=r.baseQueue,l=n.pending;if(l!==null){if(u!==null){var i=u.next;u.next=l.next,l.next=i}r.baseQueue=u=l,n.pending=null}if(u!==null){l=u.next,r=r.baseState;var o=i=null,s=null,a=l;do{var c=a.lane;if((ln&c)===c)s!==null&&(s=s.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var h={lane:c,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};s===null?(o=s=h,i=r):s=s.next=h,le.lanes|=c,on|=c}a=a.next}while(a!==null&&a!==l);s===null?i=r:s.next=o,ot(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){u=e;do l=u.lane,le.lanes|=l,on|=l,u=u.next;while(u!==e)}else u===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xl(e){var t=Ze(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,u=n.pending,l=t.memoizedState;if(u!==null){n.pending=null;var i=u=u.next;do l=e(l,i.action),i=i.next;while(i!==u);ot(l,t.memoizedState)||(Oe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Pc(){}function Oc(e,t){var n=le,r=Ze(),u=t(),l=!ot(r.memoizedState,u);if(l&&(r.memoizedState=u,Oe=!0),r=r.queue,wo(zc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Ir(9,Mc.bind(null,n,r,u,t),void 0,null),me===null)throw Error(N(349));ln&30||Fc(n,t,u)}return u}function Fc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mc(e,t,n,r){t.value=n,t.getSnapshot=r,Dc(t)&&Uc(e)}function zc(e,t,n){return n(function(){Dc(t)&&Uc(e)})}function Dc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function Uc(e){var t=wt(e,1);t!==null&&lt(t,e,1,-1)}function Is(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},t.queue=e,e=e.dispatch=Zd.bind(null,le,e),[t.memoizedState,e]}function Ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $c(){return Ze().memoizedState}function cu(e,t,n,r){var u=ft();le.flags|=e,u.memoizedState=Ir(1|t,n,void 0,r===void 0?null:r)}function Ju(e,t,n,r){var u=Ze();r=r===void 0?null:r;var l=void 0;if(_e!==null){var i=_e.memoizedState;if(l=i.destroy,r!==null&&vo(r,i.deps)){u.memoizedState=Ir(t,n,l,r);return}}le.flags|=e,u.memoizedState=Ir(1|t,n,l,r)}function Cs(e,t){return cu(8390656,8,e,t)}function wo(e,t){return Ju(2048,8,e,t)}function jc(e,t){return Ju(4,2,e,t)}function Hc(e,t){return Ju(4,4,e,t)}function Bc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wc(e,t,n){return n=n!=null?n.concat([e]):null,Ju(4,4,Bc.bind(null,t,e),n)}function To(){}function Vc(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gc(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qc(e,t,n){return ln&21?(ot(n,t)||(n=qa(),le.lanes|=n,on|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function Jd(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=Cl.transition;Cl.transition={};try{e(!1),t()}finally{Q=n,Cl.transition=r}}function Kc(){return Ze().memoizedState}function qd(e,t,n){var r=$t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xc(e))Yc(t,n);else if(n=Cc(e,t,n,r),n!==null){var u=Ie();lt(n,e,r,u),Jc(n,t,r)}}function Zd(e,t,n){var r=$t(e),u={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xc(e))Yc(t,u);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,o=l(i,n);if(u.hasEagerState=!0,u.eagerState=o,ot(o,i)){var s=t.interleaved;s===null?(u.next=u,po(t)):(u.next=s.next,s.next=u),t.interleaved=u;return}}catch{}finally{}n=Cc(e,t,u,r),n!==null&&(u=Ie(),lt(n,e,r,u),Jc(n,t,r))}}function Xc(e){var t=e.alternate;return e===le||t!==null&&t===le}function Yc(e,t){ar=Fu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Jc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bi(e,n)}}var Mu={readContext:qe,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},bd={readContext:qe,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:Cs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,cu(4194308,4,Bc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cu(4194308,4,e,t)},useInsertionEffect:function(e,t){return cu(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qd.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Is,useDebugValue:To,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Is(!1),t=e[0];return e=Jd.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,u=ft();if(re){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),me===null)throw Error(N(349));ln&30||Fc(r,t,n)}u.memoizedState=n;var l={value:n,getSnapshot:t};return u.queue=l,Cs(zc.bind(null,r,l,e),[e]),r.flags|=2048,Ir(9,Mc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=ft(),t=me.identifierPrefix;if(re){var n=gt,r=yt;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Yd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},e5={readContext:qe,useCallback:Vc,useContext:qe,useEffect:wo,useImperativeHandle:Wc,useInsertionEffect:jc,useLayoutEffect:Hc,useMemo:Gc,useReducer:Al,useRef:$c,useState:function(){return Al(Nr)},useDebugValue:To,useDeferredValue:function(e){var t=Ze();return Qc(t,_e.memoizedState,e)},useTransition:function(){var e=Al(Nr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Pc,useSyncExternalStore:Oc,useId:Kc,unstable_isNewReconciler:!1},t5={readContext:qe,useCallback:Vc,useContext:qe,useEffect:wo,useImperativeHandle:Wc,useInsertionEffect:jc,useLayoutEffect:Hc,useMemo:Gc,useReducer:xl,useRef:$c,useState:function(){return xl(Nr)},useDebugValue:To,useDeferredValue:function(e){var t=Ze();return _e===null?t.memoizedState=e:Qc(t,_e.memoizedState,e)},useTransition:function(){var e=xl(Nr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Pc,useSyncExternalStore:Oc,useId:Kc,unstable_isNewReconciler:!1};function et(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function gi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qu={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ie(),u=$t(e),l=vt(r,u);l.payload=t,n!=null&&(l.callback=n),t=Dt(e,l,u),t!==null&&(lt(t,e,u,r),su(t,e,u))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ie(),u=$t(e),l=vt(r,u);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Dt(e,l,u),t!==null&&(lt(t,e,u,r),su(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ie(),r=$t(e),u=vt(n,r);u.tag=2,t!=null&&(u.callback=t),t=Dt(e,u,r),t!==null&&(lt(t,e,r,n),su(t,e,r))}};function As(e,t,n,r,u,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Sr(n,r)||!Sr(u,l):!0}function qc(e,t,n){var r=!1,u=Bt,l=t.contextType;return typeof l=="object"&&l!==null?l=qe(l):(u=Me(t)?rn:Le.current,r=t.contextTypes,l=(r=r!=null)?Fn(e,u):Bt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=l),t}function xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qu.enqueueReplaceState(t,t.state,null)}function vi(e,t,n,r){var u=e.stateNode;u.props=n,u.state=e.memoizedState,u.refs={},ho(e);var l=t.contextType;typeof l=="object"&&l!==null?u.context=qe(l):(l=Me(t)?rn:Le.current,u.context=Fn(e,l)),u.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(gi(e,t,l,n),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&qu.enqueueReplaceState(u,u.state,null),Pu(e,n,u,r),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Un(e,t){try{var n="",r=t;do n+=C2(r),r=r.return;while(r);var u=n}catch(l){u=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:u,digest:null}}function Pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Si(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var n5=typeof WeakMap=="function"?WeakMap:Map;function Zc(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Du||(Du=!0,Ai=r),Si(e,t)},n}function bc(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var u=t.value;n.payload=function(){return r(u)},n.callback=function(){Si(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Si(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ps(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new n5;var u=new Set;r.set(t,u)}else u=r.get(t),u===void 0&&(u=new Set,r.set(t,u));u.has(n)||(u.add(n),e=m5.bind(null,e,t,n),t.then(e,e))}function Os(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Fs(e,t,n,r,u){return e.mode&1?(e.flags|=65536,e.lanes=u,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var r5=Rt.ReactCurrentOwner,Oe=!1;function Ne(e,t,n,r){t.child=e===null?Ic(t,null,n,r):zn(t,e.child,n,r)}function Ms(e,t,n,r,u){n=n.render;var l=t.ref;return xn(t,u),r=So(e,t,n,r,l,u),n=Eo(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,Tt(e,t,u)):(re&&n&&oo(t),t.flags|=1,Ne(e,t,r,u),t.child)}function zs(e,t,n,r,u){if(e===null){var l=n.type;return typeof l=="function"&&!xo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,ef(e,t,l,r,u)):(e=pu(n.type,null,r,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&u)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Sr,n(i,r)&&e.ref===t.ref)return Tt(e,t,u)}return t.flags|=1,e=jt(l,r),e.ref=t.ref,e.return=t,t.child=e}function ef(e,t,n,r,u){if(e!==null){var l=e.memoizedProps;if(Sr(l,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=l,(e.lanes&u)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,Tt(e,t,u)}return Ei(e,t,n,r,u)}function tf(e,t,n){var r=t.pendingProps,u=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(kn,je),je|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(kn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Z(kn,je),je|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Z(kn,je),je|=r;return Ne(e,t,u,n),t.child}function nf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ei(e,t,n,r,u){var l=Me(n)?rn:Le.current;return l=Fn(t,l),xn(t,u),n=So(e,t,n,r,l,u),r=Eo(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,Tt(e,t,u)):(re&&r&&oo(t),t.flags|=1,Ne(e,t,n,u),t.child)}function Ds(e,t,n,r,u){if(Me(n)){var l=!0;Nu(t)}else l=!1;if(xn(t,u),t.stateNode===null)fu(e,t),qc(t,n,r),vi(t,n,r,u),r=!0;else if(e===null){var i=t.stateNode,o=t.memoizedProps;i.props=o;var s=i.context,a=n.contextType;typeof a=="object"&&a!==null?a=qe(a):(a=Me(n)?rn:Le.current,a=Fn(t,a));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==r||s!==a)&&xs(t,i,r,a),It=!1;var m=t.memoizedState;i.state=m,Pu(t,r,i,u),s=t.memoizedState,o!==r||m!==s||Fe.current||It?(typeof c=="function"&&(gi(t,n,c,r),s=t.memoizedState),(o=It||As(t,n,o,r,m,s,a))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=a,r=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ac(e,t),o=t.memoizedProps,a=t.type===t.elementType?o:et(t.type,o),i.props=a,h=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=qe(s):(s=Me(n)?rn:Le.current,s=Fn(t,s));var R=n.getDerivedStateFromProps;(c=typeof R=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==h||m!==s)&&xs(t,i,r,s),It=!1,m=t.memoizedState,i.state=m,Pu(t,r,i,u);var v=t.memoizedState;o!==h||m!==v||Fe.current||It?(typeof R=="function"&&(gi(t,n,R,r),v=t.memoizedState),(a=It||As(t,n,a,r,m,v,s)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),i.props=r,i.state=v,i.context=s,r=a):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return wi(e,t,n,r,l,u)}function wi(e,t,n,r,u,l){nf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return u&&ws(t,n,!1),Tt(e,t,l);r=t.stateNode,r5.current=t;var o=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=zn(t,e.child,null,l),t.child=zn(t,null,o,l)):Ne(e,t,o,l),t.memoizedState=r.state,u&&ws(t,n,!0),t.child}function rf(e){var t=e.stateNode;t.pendingContext?Es(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Es(e,t.context,!1),mo(e,t.containerInfo)}function Us(e,t,n,r,u){return Mn(),ao(u),t.flags|=256,Ne(e,t,n,r),t.child}var Ti={dehydrated:null,treeContext:null,retryLane:0};function Ri(e){return{baseLanes:e,cachePool:null,transitions:null}}function uf(e,t,n){var r=t.pendingProps,u=ue.current,l=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(u&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Z(ue,u&1),e===null)return mi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=el(i,r,0,null),e=tn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ri(n),t.memoizedState=Ti,e):Ro(t,i));if(u=e.memoizedState,u!==null&&(o=u.dehydrated,o!==null))return u5(e,t,i,r,o,u,n);if(l){l=r.fallback,i=t.mode,u=e.child,o=u.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==u?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=jt(u,s),r.subtreeFlags=u.subtreeFlags&14680064),o!==null?l=jt(o,l):(l=tn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Ri(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Ti,r}return l=e.child,e=l.sibling,r=jt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ro(e,t){return t=el({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Zr(e,t,n,r){return r!==null&&ao(r),zn(t,e.child,null,n),e=Ro(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function u5(e,t,n,r,u,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Pl(Error(N(422))),Zr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,u=t.mode,r=el({mode:"visible",children:r.children},u,0,null),l=tn(l,u,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&zn(t,e.child,null,i),t.child.memoizedState=Ri(i),t.memoizedState=Ti,l);if(!(t.mode&1))return Zr(e,t,i,null);if(u.data==="$!"){if(r=u.nextSibling&&u.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(N(419)),r=Pl(l,r,void 0),Zr(e,t,i,r)}if(o=(i&e.childLanes)!==0,Oe||o){if(r=me,r!==null){switch(i&-i){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(r.suspendedLanes|i)?0:u,u!==0&&u!==l.retryLane&&(l.retryLane=u,wt(e,u),lt(r,e,u,-1))}return Ao(),r=Pl(Error(N(421))),Zr(e,t,i,r)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=y5.bind(null,e),u._reactRetry=t,null):(e=l.treeContext,He=zt(u.nextSibling),Be=t,re=!0,nt=null,e!==null&&(Qe[Ke++]=yt,Qe[Ke++]=gt,Qe[Ke++]=un,yt=e.id,gt=e.overflow,un=t),t=Ro(t,r.children),t.flags|=4096,t)}function $s(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yi(e.return,t,n)}function Ol(e,t,n,r,u){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:u}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=u)}function lf(e,t,n){var r=t.pendingProps,u=r.revealOrder,l=r.tail;if(Ne(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$s(e,n,t);else if(e.tag===19)$s(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(ue,r),!(t.mode&1))t.memoizedState=null;else switch(u){case"forwards":for(n=t.child,u=null;n!==null;)e=n.alternate,e!==null&&Ou(e)===null&&(u=n),n=n.sibling;n=u,n===null?(u=t.child,t.child=null):(u=n.sibling,n.sibling=null),Ol(t,!1,u,n,l);break;case"backwards":for(n=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&Ou(e)===null){t.child=u;break}e=u.sibling,u.sibling=n,n=u,u=e}Ol(t,!0,n,null,l);break;case"together":Ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),on|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function l5(e,t,n){switch(t.tag){case 3:rf(t),Mn();break;case 5:xc(t);break;case 1:Me(t.type)&&Nu(t);break;case 4:mo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,u=t.memoizedProps.value;Z(Au,r._currentValue),r._currentValue=u;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?uf(e,t,n):(Z(ue,ue.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);Z(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return lf(e,t,n);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Z(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,tf(e,t,n)}return Tt(e,t,n)}var of,Li,sf,af;of=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Li=function(){};sf=function(e,t,n,r){var u=e.memoizedProps;if(u!==r){e=t.stateNode,Zt(pt.current);var l=null;switch(n){case"input":u=Kl(e,u),r=Kl(e,r),l=[];break;case"select":u=ie({},u,{value:void 0}),r=ie({},r,{value:void 0}),l=[];break;case"textarea":u=Jl(e,u),r=Jl(e,r),l=[];break;default:typeof u.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Lu)}Zl(n,r);var i;n=null;for(a in u)if(!r.hasOwnProperty(a)&&u.hasOwnProperty(a)&&u[a]!=null)if(a==="style"){var o=u[a];for(i in o)o.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(_r.hasOwnProperty(a)?l||(l=[]):(l=l||[]).push(a,null));for(a in r){var s=r[a];if(o=u!=null?u[a]:void 0,r.hasOwnProperty(a)&&s!==o&&(s!=null||o!=null))if(a==="style")if(o){for(i in o)!o.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&o[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(a,n)),n=s;else a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,o=o?o.__html:void 0,s!=null&&o!==s&&(l=l||[]).push(a,s)):a==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(a,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(_r.hasOwnProperty(a)?(s!=null&&a==="onScroll"&&te("scroll",e),l||o===s||(l=[])):(l=l||[]).push(a,s))}n&&(l=l||[]).push("style",n);var a=l;(t.updateQueue=a)&&(t.flags|=4)}};af=function(e,t,n,r){n!==r&&(t.flags|=4)};function qn(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var u=e.child;u!==null;)n|=u.lanes|u.childLanes,r|=u.subtreeFlags&14680064,r|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)n|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i5(e,t,n){var r=t.pendingProps;switch(so(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Me(t.type)&&ku(),Te(t),null;case 3:return r=t.stateNode,Dn(),ne(Fe),ne(Le),go(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nt!==null&&(Oi(nt),nt=null))),Li(e,t),Te(t),null;case 5:yo(t);var u=Zt(Lr.current);if(n=t.type,e!==null&&t.stateNode!=null)sf(e,t,n,r,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Te(t),null}if(e=Zt(pt.current),Jr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[dt]=t,r[Tr]=l,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(u=0;u<rr.length;u++)te(rr[u],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Xo(r,l),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},te("invalid",r);break;case"textarea":Jo(r,l),te("invalid",r)}Zl(n,l),u=null;for(var i in l)if(l.hasOwnProperty(i)){var o=l[i];i==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&Yr(r.textContent,o,e),u=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&Yr(r.textContent,o,e),u=["children",""+o]):_r.hasOwnProperty(i)&&o!=null&&i==="onScroll"&&te("scroll",r)}switch(n){case"input":Hr(r),Yo(r,l,!0);break;case"textarea":Hr(r),qo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Lu)}r=u,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=za(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[dt]=t,e[Tr]=r,of(e,t,!1,!1),t.stateNode=e;e:{switch(i=bl(n,r),n){case"dialog":te("cancel",e),te("close",e),u=r;break;case"iframe":case"object":case"embed":te("load",e),u=r;break;case"video":case"audio":for(u=0;u<rr.length;u++)te(rr[u],e);u=r;break;case"source":te("error",e),u=r;break;case"img":case"image":case"link":te("error",e),te("load",e),u=r;break;case"details":te("toggle",e),u=r;break;case"input":Xo(e,r),u=Kl(e,r),te("invalid",e);break;case"option":u=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},u=ie({},r,{value:void 0}),te("invalid",e);break;case"textarea":Jo(e,r),u=Jl(e,r),te("invalid",e);break;default:u=r}Zl(n,u),o=u;for(l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="style"?$a(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Da(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&pr(e,s):typeof s=="number"&&pr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(_r.hasOwnProperty(l)?s!=null&&l==="onScroll"&&te("scroll",e):s!=null&&Ki(e,l,s,i))}switch(n){case"input":Hr(e),Yo(e,r,!1);break;case"textarea":Hr(e),qo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ht(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Nn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Lu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)af(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Zt(Lr.current),Zt(pt.current),Jr(t)){if(r=t.stateNode,n=t.memoizedProps,r[dt]=t,(l=r.nodeValue!==n)&&(e=Be,e!==null))switch(e.tag){case 3:Yr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=t,t.stateNode=r}return Te(t),null;case 13:if(ne(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&He!==null&&t.mode&1&&!(t.flags&128))kc(),Mn(),t.flags|=98560,l=!1;else if(l=Jr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(N(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(N(317));l[dt]=t}else Mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),l=!1}else nt!==null&&(Oi(nt),nt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?pe===0&&(pe=3):Ao())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return Dn(),Li(e,t),e===null&&Er(t.stateNode.containerInfo),Te(t),null;case 10:return _o(t.type._context),Te(t),null;case 17:return Me(t.type)&&ku(),Te(t),null;case 19:if(ne(ue),l=t.memoizedState,l===null)return Te(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)qn(l,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Ou(e),i!==null){for(t.flags|=128,qn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(ue,ue.current&1|2),t.child}e=e.sibling}l.tail!==null&&ce()>$n&&(t.flags|=128,r=!0,qn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Ou(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!re)return Te(t),null}else 2*ce()-l.renderingStartTime>$n&&n!==1073741824&&(t.flags|=128,r=!0,qn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ce(),t.sibling=null,n=ue.current,Z(ue,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Co(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function o5(e,t){switch(so(t),t.tag){case 1:return Me(t.type)&&ku(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(),ne(Fe),ne(Le),go(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yo(t),null;case 13:if(ne(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(ue),null;case 4:return Dn(),null;case 10:return _o(t.type._context),null;case 22:case 23:return Co(),null;case 24:return null;default:return null}}var br=!1,Re=!1,s5=typeof WeakSet=="function"?WeakSet:Set,M=null;function Ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function ki(e,t,n){try{n()}catch(r){oe(e,t,r)}}var js=!1;function a5(e,t){if(ai=wu,e=_c(),io(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var u=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,o=-1,s=-1,a=0,c=0,h=e,m=null;t:for(;;){for(var R;h!==n||u!==0&&h.nodeType!==3||(o=i+u),h!==l||r!==0&&h.nodeType!==3||(s=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(R=h.firstChild)!==null;)m=h,h=R;for(;;){if(h===e)break t;if(m===n&&++a===u&&(o=i),m===l&&++c===r&&(s=i),(R=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=R}n=o===-1||s===-1?null:{start:o,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ci={focusedElem:e,selectionRange:n},wu=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,U=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?S:et(t.type,S),U);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var _=t.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(k){oe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return v=js,js=!1,v}function cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var u=r=r.next;do{if((u.tag&e)===e){var l=u.destroy;u.destroy=void 0,l!==void 0&&ki(t,n,l)}u=u.next}while(u!==r)}}function Zu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ni(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function cf(e){var t=e.alternate;t!==null&&(e.alternate=null,cf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dt],delete t[Tr],delete t[_i],delete t[Gd],delete t[Qd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ff(e){return e.tag===5||e.tag===3||e.tag===4}function Hs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ff(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ii(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Lu));else if(r!==4&&(e=e.child,e!==null))for(Ii(e,t,n),e=e.sibling;e!==null;)Ii(e,t,n),e=e.sibling}function Ci(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ci(e,t,n),e=e.sibling;e!==null;)Ci(e,t,n),e=e.sibling}var ge=null,tt=!1;function Lt(e,t,n){for(n=n.child;n!==null;)df(e,t,n),n=n.sibling}function df(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Vu,n)}catch{}switch(n.tag){case 5:Re||Ln(n,t);case 6:var r=ge,u=tt;ge=null,Lt(e,t,n),ge=r,tt=u,ge!==null&&(tt?(e=ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(tt?(e=ge,n=n.stateNode,e.nodeType===8?kl(e.parentNode,n):e.nodeType===1&&kl(e,n),gr(e)):kl(ge,n.stateNode));break;case 4:r=ge,u=tt,ge=n.stateNode.containerInfo,tt=!0,Lt(e,t,n),ge=r,tt=u;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){u=r=r.next;do{var l=u,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&ki(n,t,i),u=u.next}while(u!==r)}Lt(e,t,n);break;case 1:if(!Re&&(Ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){oe(n,t,o)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,Lt(e,t,n),Re=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function Bs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new s5),t.forEach(function(r){var u=g5.bind(null,e,r);n.has(r)||(n.add(r),r.then(u,u))})}}function be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var u=n[r];try{var l=e,i=t,o=i;e:for(;o!==null;){switch(o.tag){case 5:ge=o.stateNode,tt=!1;break e;case 3:ge=o.stateNode.containerInfo,tt=!0;break e;case 4:ge=o.stateNode.containerInfo,tt=!0;break e}o=o.return}if(ge===null)throw Error(N(160));df(l,i,u),ge=null,tt=!1;var s=u.alternate;s!==null&&(s.return=null),u.return=null}catch(a){oe(u,t,a)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_f(t,e),t=t.sibling}function _f(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(be(t,e),ct(e),r&4){try{cr(3,e,e.return),Zu(3,e)}catch(S){oe(e,e.return,S)}try{cr(5,e,e.return)}catch(S){oe(e,e.return,S)}}break;case 1:be(t,e),ct(e),r&512&&n!==null&&Ln(n,n.return);break;case 5:if(be(t,e),ct(e),r&512&&n!==null&&Ln(n,n.return),e.flags&32){var u=e.stateNode;try{pr(u,"")}catch(S){oe(e,e.return,S)}}if(r&4&&(u=e.stateNode,u!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,o=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&Fa(u,l),bl(o,i);var a=bl(o,l);for(i=0;i<s.length;i+=2){var c=s[i],h=s[i+1];c==="style"?$a(u,h):c==="dangerouslySetInnerHTML"?Da(u,h):c==="children"?pr(u,h):Ki(u,c,h,a)}switch(o){case"input":Xl(u,l);break;case"textarea":Ma(u,l);break;case"select":var m=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!l.multiple;var R=l.value;R!=null?Nn(u,!!l.multiple,R,!1):m!==!!l.multiple&&(l.defaultValue!=null?Nn(u,!!l.multiple,l.defaultValue,!0):Nn(u,!!l.multiple,l.multiple?[]:"",!1))}u[Tr]=l}catch(S){oe(e,e.return,S)}}break;case 6:if(be(t,e),ct(e),r&4){if(e.stateNode===null)throw Error(N(162));u=e.stateNode,l=e.memoizedProps;try{u.nodeValue=l}catch(S){oe(e,e.return,S)}}break;case 3:if(be(t,e),ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gr(t.containerInfo)}catch(S){oe(e,e.return,S)}break;case 4:be(t,e),ct(e);break;case 13:be(t,e),ct(e),u=e.child,u.flags&8192&&(l=u.memoizedState!==null,u.stateNode.isHidden=l,!l||u.alternate!==null&&u.alternate.memoizedState!==null||(No=ce())),r&4&&Bs(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(a=Re)||c,be(t,e),Re=a):be(t,e),ct(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!c&&e.mode&1)for(M=e,c=e.child;c!==null;){for(h=M=c;M!==null;){switch(m=M,R=m.child,m.tag){case 0:case 11:case 14:case 15:cr(4,m,m.return);break;case 1:Ln(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(S){oe(r,n,S)}}break;case 5:Ln(m,m.return);break;case 22:if(m.memoizedState!==null){Vs(h);continue}}R!==null?(R.return=m,M=R):Vs(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{u=h.stateNode,a?(l=u.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=h.stateNode,s=h.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,o.style.display=Ua("display",i))}catch(S){oe(e,e.return,S)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=a?"":h.memoizedProps}catch(S){oe(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:be(t,e),ct(e),r&4&&Bs(e);break;case 21:break;default:be(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ff(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var u=r.stateNode;r.flags&32&&(pr(u,""),r.flags&=-33);var l=Hs(e);Ci(e,l,u);break;case 3:case 4:var i=r.stateNode.containerInfo,o=Hs(e);Ii(e,o,i);break;default:throw Error(N(161))}}catch(s){oe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function c5(e,t,n){M=e,pf(e)}function pf(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var u=M,l=u.child;if(u.tag===22&&r){var i=u.memoizedState!==null||br;if(!i){var o=u.alternate,s=o!==null&&o.memoizedState!==null||Re;o=br;var a=Re;if(br=i,(Re=s)&&!a)for(M=u;M!==null;)i=M,s=i.child,i.tag===22&&i.memoizedState!==null?Gs(u):s!==null?(s.return=i,M=s):Gs(u);for(;l!==null;)M=l,pf(l),l=l.sibling;M=u,br=o,Re=a}Ws(e)}else u.subtreeFlags&8772&&l!==null?(l.return=u,M=l):Ws(e)}}function Ws(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||Zu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var u=t.elementType===t.type?n.memoizedProps:et(t.type,n.memoizedProps);r.componentDidUpdate(u,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ns(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ns(t,i,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var a=t.alternate;if(a!==null){var c=a.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&gr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Re||t.flags&512&&Ni(t)}catch(m){oe(t,t.return,m)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function Vs(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Gs(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zu(4,t)}catch(s){oe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var u=t.return;try{r.componentDidMount()}catch(s){oe(t,u,s)}}var l=t.return;try{Ni(t)}catch(s){oe(t,l,s)}break;case 5:var i=t.return;try{Ni(t)}catch(s){oe(t,i,s)}}}catch(s){oe(t,t.return,s)}if(t===e){M=null;break}var o=t.sibling;if(o!==null){o.return=t.return,M=o;break}M=t.return}}var f5=Math.ceil,zu=Rt.ReactCurrentDispatcher,Lo=Rt.ReactCurrentOwner,Ye=Rt.ReactCurrentBatchConfig,G=0,me=null,fe=null,ve=0,je=0,kn=Vt(0),pe=0,Cr=null,on=0,bu=0,ko=0,fr=null,Pe=null,No=0,$n=1/0,ht=null,Du=!1,Ai=null,Ut=null,eu=!1,Pt=null,Uu=0,dr=0,xi=null,du=-1,_u=0;function Ie(){return G&6?ce():du!==-1?du:du=ce()}function $t(e){return e.mode&1?G&2&&ve!==0?ve&-ve:Xd.transition!==null?(_u===0&&(_u=qa()),_u):(e=Q,e!==0||(e=window.event,e=e===void 0?16:uc(e.type)),e):1}function lt(e,t,n,r){if(50<dr)throw dr=0,xi=null,Error(N(185));Pr(e,n,r),(!(G&2)||e!==me)&&(e===me&&(!(G&2)&&(bu|=n),pe===4&&At(e,ve)),ze(e,r),n===1&&G===0&&!(t.mode&1)&&($n=ce()+500,Yu&&Gt()))}function ze(e,t){var n=e.callbackNode;X2(e,t);var r=Eu(e,e===me?ve:0);if(r===0)n!==null&&es(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&es(n),t===1)e.tag===0?Kd(Qs.bind(null,e)):Tc(Qs.bind(null,e)),Wd(function(){!(G&6)&&Gt()}),n=null;else{switch(Za(r)){case 1:n=Zi;break;case 4:n=Ya;break;case 16:n=Su;break;case 536870912:n=Ja;break;default:n=Su}n=wf(n,hf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hf(e,t){if(du=-1,_u=0,G&6)throw Error(N(327));var n=e.callbackNode;if(Pn()&&e.callbackNode!==n)return null;var r=Eu(e,e===me?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$u(e,r);else{t=r;var u=G;G|=2;var l=yf();(me!==e||ve!==t)&&(ht=null,$n=ce()+500,en(e,t));do try{p5();break}catch(o){mf(e,o)}while(!0);fo(),zu.current=l,G=u,fe!==null?t=0:(me=null,ve=0,t=pe)}if(t!==0){if(t===2&&(u=ui(e),u!==0&&(r=u,t=Pi(e,u))),t===1)throw n=Cr,en(e,0),At(e,r),ze(e,ce()),n;if(t===6)At(e,r);else{if(u=e.current.alternate,!(r&30)&&!d5(u)&&(t=$u(e,r),t===2&&(l=ui(e),l!==0&&(r=l,t=Pi(e,l))),t===1))throw n=Cr,en(e,0),At(e,r),ze(e,ce()),n;switch(e.finishedWork=u,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Yt(e,Pe,ht);break;case 3:if(At(e,r),(r&130023424)===r&&(t=No+500-ce(),10<t)){if(Eu(e,0)!==0)break;if(u=e.suspendedLanes,(u&r)!==r){Ie(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=di(Yt.bind(null,e,Pe,ht),t);break}Yt(e,Pe,ht);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,u=-1;0<r;){var i=31-ut(r);l=1<<i,i=t[i],i>u&&(u=i),r&=~l}if(r=u,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*f5(r/1960))-r,10<r){e.timeoutHandle=di(Yt.bind(null,e,Pe,ht),r);break}Yt(e,Pe,ht);break;case 5:Yt(e,Pe,ht);break;default:throw Error(N(329))}}}return ze(e,ce()),e.callbackNode===n?hf.bind(null,e):null}function Pi(e,t){var n=fr;return e.current.memoizedState.isDehydrated&&(en(e,t).flags|=256),e=$u(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&Oi(t)),e}function Oi(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function d5(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var u=n[r],l=u.getSnapshot;u=u.value;try{if(!ot(l(),u))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~ko,t&=~bu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),r=1<<n;e[n]=-1,t&=~r}}function Qs(e){if(G&6)throw Error(N(327));Pn();var t=Eu(e,0);if(!(t&1))return ze(e,ce()),null;var n=$u(e,t);if(e.tag!==0&&n===2){var r=ui(e);r!==0&&(t=r,n=Pi(e,r))}if(n===1)throw n=Cr,en(e,0),At(e,t),ze(e,ce()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,Pe,ht),ze(e,ce()),null}function Io(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&($n=ce()+500,Yu&&Gt())}}function sn(e){Pt!==null&&Pt.tag===0&&!(G&6)&&Pn();var t=G;G|=1;var n=Ye.transition,r=Q;try{if(Ye.transition=null,Q=1,e)return e()}finally{Q=r,Ye.transition=n,G=t,!(G&6)&&Gt()}}function Co(){je=kn.current,ne(kn)}function en(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bd(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(so(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ku();break;case 3:Dn(),ne(Fe),ne(Le),go();break;case 5:yo(r);break;case 4:Dn();break;case 13:ne(ue);break;case 19:ne(ue);break;case 10:_o(r.type._context);break;case 22:case 23:Co()}n=n.return}if(me=e,fe=e=jt(e.current,null),ve=je=t,pe=0,Cr=null,ko=bu=on=0,Pe=fr=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var u=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=u,r.next=i}n.pending=r}qt=null}return e}function mf(e,t){do{var n=fe;try{if(fo(),au.current=Mu,Fu){for(var r=le.memoizedState;r!==null;){var u=r.queue;u!==null&&(u.pending=null),r=r.next}Fu=!1}if(ln=0,he=_e=le=null,ar=!1,kr=0,Lo.current=null,n===null||n.return===null){pe=1,Cr=t,fe=null;break}e:{var l=e,i=n.return,o=n,s=t;if(t=ve,o.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var a=s,c=o,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var R=Os(i);if(R!==null){R.flags&=-257,Fs(R,i,o,l,t),R.mode&1&&Ps(l,a,t),t=R,s=a;var v=t.updateQueue;if(v===null){var S=new Set;S.add(s),t.updateQueue=S}else v.add(s);break e}else{if(!(t&1)){Ps(l,a,t),Ao();break e}s=Error(N(426))}}else if(re&&o.mode&1){var U=Os(i);if(U!==null){!(U.flags&65536)&&(U.flags|=256),Fs(U,i,o,l,t),ao(Un(s,o));break e}}l=s=Un(s,o),pe!==4&&(pe=2),fr===null?fr=[l]:fr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Zc(l,s,t);ks(l,p);break e;case 1:o=s;var d=l.type,_=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ut===null||!Ut.has(_)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=bc(l,o,t);ks(l,k);break e}}l=l.return}while(l!==null)}vf(n)}catch(x){t=x,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function yf(){var e=zu.current;return zu.current=Mu,e===null?Mu:e}function Ao(){(pe===0||pe===3||pe===2)&&(pe=4),me===null||!(on&268435455)&&!(bu&268435455)||At(me,ve)}function $u(e,t){var n=G;G|=2;var r=yf();(me!==e||ve!==t)&&(ht=null,en(e,t));do try{_5();break}catch(u){mf(e,u)}while(!0);if(fo(),G=n,zu.current=r,fe!==null)throw Error(N(261));return me=null,ve=0,pe}function _5(){for(;fe!==null;)gf(fe)}function p5(){for(;fe!==null&&!$2();)gf(fe)}function gf(e){var t=Ef(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?vf(e):fe=t,Lo.current=null}function vf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=o5(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,fe=null;return}}else if(n=i5(n,t,je),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);pe===0&&(pe=5)}function Yt(e,t,n){var r=Q,u=Ye.transition;try{Ye.transition=null,Q=1,h5(e,t,n,r)}finally{Ye.transition=u,Q=r}return null}function h5(e,t,n,r){do Pn();while(Pt!==null);if(G&6)throw Error(N(327));n=e.finishedWork;var u=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Y2(e,l),e===me&&(fe=me=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eu||(eu=!0,wf(Su,function(){return Pn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ye.transition,Ye.transition=null;var i=Q;Q=1;var o=G;G|=4,Lo.current=null,a5(e,n),_f(n,e),Md(ci),wu=!!ai,ci=ai=null,e.current=n,c5(n),j2(),G=o,Q=i,Ye.transition=l}else e.current=n;if(eu&&(eu=!1,Pt=e,Uu=u),l=e.pendingLanes,l===0&&(Ut=null),W2(n.stateNode),ze(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)u=t[n],r(u.value,{componentStack:u.stack,digest:u.digest});if(Du)throw Du=!1,e=Ai,Ai=null,e;return Uu&1&&e.tag!==0&&Pn(),l=e.pendingLanes,l&1?e===xi?dr++:(dr=0,xi=e):dr=0,Gt(),null}function Pn(){if(Pt!==null){var e=Za(Uu),t=Ye.transition,n=Q;try{if(Ye.transition=null,Q=16>e?16:e,Pt===null)var r=!1;else{if(e=Pt,Pt=null,Uu=0,G&6)throw Error(N(331));var u=G;for(G|=4,M=e.current;M!==null;){var l=M,i=l.child;if(M.flags&16){var o=l.deletions;if(o!==null){for(var s=0;s<o.length;s++){var a=o[s];for(M=a;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:cr(8,c,l)}var h=c.child;if(h!==null)h.return=c,M=h;else for(;M!==null;){c=M;var m=c.sibling,R=c.return;if(cf(c),c===a){M=null;break}if(m!==null){m.return=R,M=m;break}M=R}}}var v=l.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var U=S.sibling;S.sibling=null,S=U}while(S!==null)}}M=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,M=i;else e:for(;M!==null;){if(l=M,l.flags&2048)switch(l.tag){case 0:case 11:case 15:cr(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,M=p;break e}M=l.return}}var d=e.current;for(M=d;M!==null;){i=M;var _=i.child;if(i.subtreeFlags&2064&&_!==null)_.return=i,M=_;else e:for(i=d;M!==null;){if(o=M,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Zu(9,o)}}catch(x){oe(o,o.return,x)}if(o===i){M=null;break e}var k=o.sibling;if(k!==null){k.return=o.return,M=k;break e}M=o.return}}if(G=u,Gt(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Vu,e)}catch{}r=!0}return r}finally{Q=n,Ye.transition=t}}return!1}function Ks(e,t,n){t=Un(n,t),t=Zc(e,t,1),e=Dt(e,t,1),t=Ie(),e!==null&&(Pr(e,1,t),ze(e,t))}function oe(e,t,n){if(e.tag===3)Ks(e,e,n);else for(;t!==null;){if(t.tag===3){Ks(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=Un(n,e),e=bc(t,e,1),t=Dt(t,e,1),e=Ie(),t!==null&&(Pr(t,1,e),ze(t,e));break}}t=t.return}}function m5(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ie(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ve&n)===n&&(pe===4||pe===3&&(ve&130023424)===ve&&500>ce()-No?en(e,0):ko|=n),ze(e,t)}function Sf(e,t){t===0&&(e.mode&1?(t=Vr,Vr<<=1,!(Vr&130023424)&&(Vr=4194304)):t=1);var n=Ie();e=wt(e,t),e!==null&&(Pr(e,t,n),ze(e,n))}function y5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sf(e,n)}function g5(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(n=u.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Sf(e,n)}var Ef;Ef=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,l5(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,re&&t.flags&1048576&&Rc(t,Cu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fu(e,t),e=t.pendingProps;var u=Fn(t,Le.current);xn(t,n),u=So(null,t,r,e,u,n);var l=Eo();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(l=!0,Nu(t)):l=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,ho(t),u.updater=qu,t.stateNode=u,u._reactInternals=t,vi(t,r,e,n),t=wi(null,t,r,!0,l,n)):(t.tag=0,re&&l&&oo(t),Ne(null,t,u,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fu(e,t),e=t.pendingProps,u=r._init,r=u(r._payload),t.type=r,u=t.tag=S5(r),e=et(r,e),u){case 0:t=Ei(null,t,r,e,n);break e;case 1:t=Ds(null,t,r,e,n);break e;case 11:t=Ms(null,t,r,e,n);break e;case 14:t=zs(null,t,r,et(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,u=t.pendingProps,u=t.elementType===r?u:et(r,u),Ei(e,t,r,u,n);case 1:return r=t.type,u=t.pendingProps,u=t.elementType===r?u:et(r,u),Ds(e,t,r,u,n);case 3:e:{if(rf(t),e===null)throw Error(N(387));r=t.pendingProps,l=t.memoizedState,u=l.element,Ac(e,t),Pu(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){u=Un(Error(N(423)),t),t=Us(e,t,r,n,u);break e}else if(r!==u){u=Un(Error(N(424)),t),t=Us(e,t,r,n,u);break e}else for(He=zt(t.stateNode.containerInfo.firstChild),Be=t,re=!0,nt=null,n=Ic(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===u){t=Tt(e,t,n);break e}Ne(e,t,r,n)}t=t.child}return t;case 5:return xc(t),e===null&&mi(t),r=t.type,u=t.pendingProps,l=e!==null?e.memoizedProps:null,i=u.children,fi(r,u)?i=null:l!==null&&fi(r,l)&&(t.flags|=32),nf(e,t),Ne(e,t,i,n),t.child;case 6:return e===null&&mi(t),null;case 13:return uf(e,t,n);case 4:return mo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zn(t,null,r,n):Ne(e,t,r,n),t.child;case 11:return r=t.type,u=t.pendingProps,u=t.elementType===r?u:et(r,u),Ms(e,t,r,u,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,u=t.pendingProps,l=t.memoizedProps,i=u.value,Z(Au,r._currentValue),r._currentValue=i,l!==null)if(ot(l.value,i)){if(l.children===u.children&&!Fe.current){t=Tt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){i=l.child;for(var s=o.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=vt(-1,n&-n),s.tag=2;var a=l.updateQueue;if(a!==null){a=a.shared;var c=a.pending;c===null?s.next=s:(s.next=c.next,c.next=s),a.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),yi(l.return,n,t),o.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(N(341));i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),yi(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}Ne(e,t,u.children,n),t=t.child}return t;case 9:return u=t.type,r=t.pendingProps.children,xn(t,n),u=qe(u),r=r(u),t.flags|=1,Ne(e,t,r,n),t.child;case 14:return r=t.type,u=et(r,t.pendingProps),u=et(r.type,u),zs(e,t,r,u,n);case 15:return ef(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,u=t.pendingProps,u=t.elementType===r?u:et(r,u),fu(e,t),t.tag=1,Me(r)?(e=!0,Nu(t)):e=!1,xn(t,n),qc(t,r,u),vi(t,r,u,n),wi(null,t,r,!0,e,n);case 19:return lf(e,t,n);case 22:return tf(e,t,n)}throw Error(N(156,t.tag))};function wf(e,t){return Xa(e,t)}function v5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(e,t,n,r){return new v5(e,t,n,r)}function xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function S5(e){if(typeof e=="function")return xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Yi)return 11;if(e===Ji)return 14}return 2}function jt(e,t){var n=e.alternate;return n===null?(n=Xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function pu(e,t,n,r,u,l){var i=2;if(r=e,typeof e=="function")xo(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case mn:return tn(n.children,u,l,t);case Xi:i=8,u|=8;break;case Wl:return e=Xe(12,n,t,u|2),e.elementType=Wl,e.lanes=l,e;case Vl:return e=Xe(13,n,t,u),e.elementType=Vl,e.lanes=l,e;case Gl:return e=Xe(19,n,t,u),e.elementType=Gl,e.lanes=l,e;case xa:return el(n,u,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ca:i=10;break e;case Aa:i=9;break e;case Yi:i=11;break e;case Ji:i=14;break e;case Nt:i=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Xe(i,n,t,u),t.elementType=e,t.type=r,t.lanes=l,t}function tn(e,t,n,r){return e=Xe(7,e,r,t),e.lanes=n,e}function el(e,t,n,r){return e=Xe(22,e,r,t),e.elementType=xa,e.lanes=n,e.stateNode={isHidden:!1},e}function Fl(e,t,n){return e=Xe(6,e,null,t),e.lanes=n,e}function Ml(e,t,n){return t=Xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function E5(e,t,n,r,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hl(0),this.expirationTimes=hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hl(0),this.identifierPrefix=r,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Po(e,t,n,r,u,l,i,o,s){return e=new E5(e,t,n,o,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Xe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ho(l),e}function w5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Tf(e){if(!e)return Bt;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Me(n))return wc(e,n,t)}return t}function Rf(e,t,n,r,u,l,i,o,s){return e=Po(n,r,!0,e,u,l,i,o,s),e.context=Tf(null),n=e.current,r=Ie(),u=$t(n),l=vt(r,u),l.callback=t??null,Dt(n,l,u),e.current.lanes=u,Pr(e,u,r),ze(e,r),e}function tl(e,t,n,r){var u=t.current,l=Ie(),i=$t(u);return n=Tf(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(u,t,i),e!==null&&(lt(e,u,i,l),su(e,u,i)),i}function ju(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oo(e,t){Xs(e,t),(e=e.alternate)&&Xs(e,t)}function T5(){return null}var Lf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fo(e){this._internalRoot=e}nl.prototype.render=Fo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));tl(e,t,null,null)};nl.prototype.unmount=Fo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sn(function(){tl(null,e,null,null)}),t[Et]=null}};function nl(e){this._internalRoot=e}nl.prototype.unstable_scheduleHydration=function(e){if(e){var t=tc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ct.length&&t!==0&&t<Ct[n].priority;n++);Ct.splice(n,0,e),n===0&&rc(e)}};function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ys(){}function R5(e,t,n,r,u){if(u){if(typeof r=="function"){var l=r;r=function(){var a=ju(i);l.call(a)}}var i=Rf(t,r,e,0,null,!1,!1,"",Ys);return e._reactRootContainer=i,e[Et]=i.current,Er(e.nodeType===8?e.parentNode:e),sn(),i}for(;u=e.lastChild;)e.removeChild(u);if(typeof r=="function"){var o=r;r=function(){var a=ju(s);o.call(a)}}var s=Po(e,0,!1,null,null,!1,!1,"",Ys);return e._reactRootContainer=s,e[Et]=s.current,Er(e.nodeType===8?e.parentNode:e),sn(function(){tl(t,s,n,r)}),s}function ul(e,t,n,r,u){var l=n._reactRootContainer;if(l){var i=l;if(typeof u=="function"){var o=u;u=function(){var s=ju(i);o.call(s)}}tl(t,i,e,u)}else i=R5(n,t,e,u,r);return ju(i)}ba=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=nr(t.pendingLanes);n!==0&&(bi(t,n|1),ze(t,ce()),!(G&6)&&($n=ce()+500,Gt()))}break;case 13:sn(function(){var r=wt(e,1);if(r!==null){var u=Ie();lt(r,e,1,u)}}),Oo(e,1)}};eo=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=Ie();lt(t,e,134217728,n)}Oo(e,134217728)}};ec=function(e){if(e.tag===13){var t=$t(e),n=wt(e,t);if(n!==null){var r=Ie();lt(n,e,t,r)}Oo(e,t)}};tc=function(){return Q};nc=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};ti=function(e,t,n){switch(t){case"input":if(Xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var u=Xu(r);if(!u)throw Error(N(90));Oa(r),Xl(r,u)}}}break;case"textarea":Ma(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};Ba=Io;Wa=sn;var L5={usingClientEntryPoint:!1,Events:[Fr,Sn,Xu,ja,Ha,Io]},Zn={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k5={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qa(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||T5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{Vu=tu.inject(k5),_t=tu}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L5;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mo(t))throw Error(N(200));return w5(e,t,null,n)};Ve.createRoot=function(e,t){if(!Mo(e))throw Error(N(299));var n=!1,r="",u=Lf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Po(e,1,!1,null,null,n,!1,r,u),e[Et]=t.current,Er(e.nodeType===8?e.parentNode:e),new Fo(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Qa(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return sn(e)};Ve.hydrate=function(e,t,n){if(!rl(t))throw Error(N(200));return ul(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!Mo(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,u=!1,l="",i=Lf;if(n!=null&&(n.unstable_strictMode===!0&&(u=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Rf(t,null,e,1,n??null,u,!1,l,i),e[Et]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],u=n._getVersion,u=u(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,u]:t.mutableSourceEagerHydrationData.push(n,u);return new nl(t)};Ve.render=function(e,t,n){if(!rl(t))throw Error(N(200));return ul(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!rl(e))throw Error(N(40));return e._reactRootContainer?(sn(function(){ul(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};Ve.unstable_batchedUpdates=Io;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!rl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return ul(e,t,n,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426";function kf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf)}catch(e){console.error(e)}}kf(),La.exports=Ve;var N5=La.exports,Js=N5;Hl.createRoot=Js.createRoot,Hl.hydrateRoot=Js.hydrateRoot;var Nf={exports:{}};(function(e){const t=(()=>{const i={},o={font:"Standard",fontPath:"./fonts"};function s(g,E){let f={},y,w,L,A,C=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];for(y=E!==null?E:g,w=0,L=C.length;w<L;)A=C[w],y>=A[0]?(y=y-A[0],f[A[1]]=typeof f[A[1]]>"u"?A[2]:f[A[1]]):A[1]!=="vLayout"&&A[1]!=="hLayout"&&(f[A[1]]=!1),w++;return typeof f.hLayout>"u"?g===0?f.hLayout=1:g===-1?f.hLayout=0:f.hRule1||f.hRule2||f.hRule3||f.hRule4||f.hRule5||f.hRule6?f.hLayout=3:f.hLayout=2:f.hLayout===2&&(f.hRule1||f.hRule2||f.hRule3||f.hRule4||f.hRule5||f.hRule6)&&(f.hLayout=3),typeof f.vLayout>"u"?f.vRule1||f.vRule2||f.vRule3||f.vRule4||f.vRule5?f.vLayout=3:f.vLayout=0:f.vLayout===2&&(f.vRule1||f.vRule2||f.vRule3||f.vRule4||f.vRule5)&&(f.vLayout=3),f}function a(g,E,f){return g===E&&g!==f?g:!1}function c(g,E){let f="|/\\[]{}()<>";if(g==="_"){if(f.indexOf(E)!==-1)return E}else if(E==="_"&&f.indexOf(g)!==-1)return g;return!1}function h(g,E){let f="| /\\ [] {} () <>",y=f.indexOf(g),w=f.indexOf(E);if(y!==-1&&w!==-1&&y!==w&&Math.abs(y-w)!==1){const L=Math.max(y,w),A=L+1;return f.substring(L,A)}return!1}function m(g,E){let f="[] {} ()",y=f.indexOf(g),w=f.indexOf(E);return y!==-1&&w!==-1&&Math.abs(y-w)<=1?"|":!1}function R(g,E){let f="/\\ \\/ ><",y={0:"|",3:"Y",6:"X"},w=f.indexOf(g),L=f.indexOf(E);return w!==-1&&L!==-1&&L-w===1?y[w]:!1}function v(g,E,f){return g===f&&E===f?f:!1}function S(g,E){return g===E?g:!1}function U(g,E){let f="|/\\[]{}()<>";if(g==="_"){if(f.indexOf(E)!==-1)return E}else if(E==="_"&&f.indexOf(g)!==-1)return g;return!1}function p(g,E){let f="| /\\ [] {} () <>",y=f.indexOf(g),w=f.indexOf(E);if(y!==-1&&w!==-1&&y!==w&&Math.abs(y-w)!==1){const L=Math.max(y,w),A=L+1;return f.substring(L,A)}return!1}function d(g,E){return g==="-"&&E==="_"||g==="_"&&E==="-"?"=":!1}function _(g,E){return g==="|"&&E==="|"?"|":!1}function k(g,E,f){return E===" "||E===""||E===f&&g!==" "?g:E}function x(g,E,f){if(f.fittingRules.vLayout===0)return"invalid";let y,w=Math.min(g.length,E.length),L,A,C=!1,I;if(w===0)return"invalid";for(y=0;y<w;y++)if(L=g.substring(y,y+1),A=E.substring(y,y+1),L!==" "&&A!==" "){if(f.fittingRules.vLayout===1)return"invalid";if(f.fittingRules.vLayout===2)return"end";if(_(L,A)){C=C||!1;continue}if(I=!1,I=f.fittingRules.vRule1?S(L,A):I,I=!I&&f.fittingRules.vRule2?U(L,A):I,I=!I&&f.fittingRules.vRule3?p(L,A):I,I=!I&&f.fittingRules.vRule4?d(L,A):I,C=!0,!I)return"invalid"}return C?"end":"valid"}function O(g,E,f){let y=g.length,w=g.length;E.length;let L,A,C,I=1,D,b,X;for(;I<=y;){for(L=g.slice(Math.max(0,w-I),w),A=E.slice(0,Math.min(y,I)),C=A.length,X="",D=0;D<C;D++)if(b=x(L[D],A[D],f),b==="end")X=b;else if(b==="invalid"){X=b;break}else X===""&&(X="valid");if(X==="invalid"){I--;break}if(X==="end")break;X==="valid"&&I++}return Math.min(y,I)}function F(g,E,f){let y,w=Math.min(g.length,E.length),L,A,C="",I;for(y=0;y<w;y++)L=g.substring(y,y+1),A=E.substring(y,y+1),L!==" "&&A!==" "?f.fittingRules.vLayout===1||f.fittingRules.vLayout===2?C+=k(L,A):(I=!1,I=f.fittingRules.vRule5?_(L,A):I,I=!I&&f.fittingRules.vRule1?S(L,A):I,I=!I&&f.fittingRules.vRule2?U(L,A):I,I=!I&&f.fittingRules.vRule3?p(L,A):I,I=!I&&f.fittingRules.vRule4?d(L,A):I,C+=I):C+=k(L,A);return C}function z(g,E,f,y){let w=g.length,L=E.length,A=g.slice(0,Math.max(0,w-f)),C=g.slice(Math.max(0,w-f),w),I=E.slice(0,Math.min(f,L)),D,b,X,K=[],q,$e=[];for(b=C.length,D=0;D<b;D++)D>=L?X=C[D]:X=F(C[D],I[D],y),K.push(X);return q=E.slice(Math.min(f,L),L),$e.concat(A,K,q)}function Y(g,E){let f,y=g.length,w="";for(f=0;f<E;f++)w+=" ";for(f=0;f<y;f++)g[f]+=w}function H(g,E,f){let y=g[0].length,w=E[0].length,L;return y>w?Y(E,y-w):w>y&&Y(g,w-y),L=O(g,E,f),z(g,E,L,f)}function ke(g,E,f){if(f.fittingRules.hLayout===0)return 0;let y,w=g.length,L=E.length,A=w,C=1,I=!1,D=!1,b,X,K,q;if(w===0)return 0;e:for(;C<=A;){const $e=w-C;for(b=g.substring($e,$e+C),X=E.substring(0,Math.min(C,L)),y=0;y<Math.min(C,L);y++)if(K=b.substring(y,y+1),q=X.substring(y,y+1),K!==" "&&q!==" "){if(f.fittingRules.hLayout===1){C=C-1;break e}else if(f.fittingRules.hLayout===2){(K===f.hardBlank||q===f.hardBlank)&&(C=C-1);break e}else if(I=!0,D=!1,D=f.fittingRules.hRule1?a(K,q,f.hardBlank):D,D=!D&&f.fittingRules.hRule2?c(K,q,f.hardBlank):D,D=!D&&f.fittingRules.hRule3?h(K,q,f.hardBlank):D,D=!D&&f.fittingRules.hRule4?m(K,q,f.hardBlank):D,D=!D&&f.fittingRules.hRule5?R(K,q,f.hardBlank):D,D=!D&&f.fittingRules.hRule6?v(K,q,f.hardBlank):D,!D){C=C-1;break e}}if(I)break;C++}return Math.min(A,C)}function xe(g,E,f,y){let w,L,A=[],C,I,D,b,X,K,q,$e;for(w=0;w<y.height;w++){q=g[w],$e=E[w],X=q.length,K=$e.length,C=X-f,I=q.substr(0,Math.max(0,C)),D="";const Ho=Math.max(0,X-f);var dn=q.substring(Ho,Ho+f),Ur=$e.substring(0,Math.min(f,K));for(L=0;L<f;L++){var se=L<X?dn.substring(L,L+1):" ",ye=L<K?Ur.substring(L,L+1):" ";if(se!==" "&&ye!==" ")if(y.fittingRules.hLayout===1)D+=k(se,ye,y.hardBlank);else if(y.fittingRules.hLayout===2)D+=k(se,ye,y.hardBlank);else{var ee="";ee=!ee&&y.fittingRules.hRule1?a(se,ye,y.hardBlank):ee,ee=!ee&&y.fittingRules.hRule2?c(se,ye,y.hardBlank):ee,ee=!ee&&y.fittingRules.hRule3?h(se,ye,y.hardBlank):ee,ee=!ee&&y.fittingRules.hRule4?m(se,ye,y.hardBlank):ee,ee=!ee&&y.fittingRules.hRule5?R(se,ye,y.hardBlank):ee,ee=!ee&&y.fittingRules.hRule6?v(se,ye,y.hardBlank):ee,ee=ee||k(se,ye,y.hardBlank),D+=ee}else D+=k(se,ye,y.hardBlank)}f>=K?b="":b=$e.substring(f,f+Math.max(0,K-f)),A[w]=I+D+b}return A}function Ee(g){let E=[],f;for(f=0;f<g;f++)E[f]="";return E}const at=function(g){return Math.max.apply(Math,g.map(function(E,f){return E.length}))};function Ue(g,E,f){return g.reduce(function(y,w){return xe(y,w.fig,w.overlap,f)},Ee(E))}function Qt(g,E,f){const y={};for(let w=g.length;--w;){let L=Ue(g.slice(0,w),E,f);if(at(L)<=f.width){y.outputFigText=L,w<g.length?y.chars=g.slice(w):y.chars=[];break}}return y}function Kt(g,E,f){let y,w,L=0,A,C,I,D=f.height,b=[],X,K,q=[],$e,dn,Ur,se,ye;for(C=Ee(D),f.width>0&&f.whitespaceBreak&&(K={chars:[],overlap:L}),f.printDirection===1&&(g=g.split("").reverse().join("")),I=g.length,y=0;y<I;y++)if($e=g.substring(y,y+1),dn=$e.match(/\s/),w=E[$e.charCodeAt(0)],se=null,w){if(f.fittingRules.hLayout!==0){for(L=1e4,A=0;A<f.height;A++)L=Math.min(L,ke(C[A],w[A],f));L=L===1e4?0:L}if(f.width>0&&(f.whitespaceBreak?(Ur=Ue(K.chars.concat([{fig:w,overlap:L}]),D,f),se=Ue(q.concat([{fig:Ur,overlap:K.overlap}]),D,f),X=at(se)):(se=xe(C,w,L,f),X=at(se)),X>=f.width&&y>0&&(f.whitespaceBreak?(C=Ue(q.slice(0,-1),D,f),q.length>1&&(b.push(C),C=Ee(D)),q=[]):(b.push(C),C=Ee(D)))),f.width>0&&f.whitespaceBreak&&((!dn||y===I-1)&&K.chars.push({fig:w,overlap:L}),dn||y===I-1)){for(ye=null;se=Ue(K.chars,D,f),X=at(se),X>=f.width;)ye=Qt(K.chars,D,f),K={chars:ye.chars},b.push(ye.outputFigText);X>0&&(ye?q.push({fig:se,overlap:1}):q.push({fig:se,overlap:K.overlap})),dn&&(q.push({fig:w,overlap:L}),C=Ee(D)),y===I-1&&(C=Ue(q,D,f)),K={chars:[],overlap:L};continue}C=xe(C,w,L,f)}return at(C)>0&&b.push(C),f.showHardBlanks!==!0&&b.forEach(function(ee){for(I=ee.length,A=0;A<I;A++)ee[A]=ee[A].replace(new RegExp("\\"+f.hardBlank,"g")," ")}),b}const P=function(g,E){let f=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],y={},w;if(g==="default")for(w=0;w<f.length;w++)y[f[w]]=E.fittingRules[f[w]];else if(g==="full")y={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(g==="fitted")y={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(g==="controlled smushing")y={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(g==="universal smushing")y={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return y},$=function(g,E){let f=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],y={},w;if(g==="default")for(w=0;w<f.length;w++)y[f[w]]=E.fittingRules[f[w]];else if(g==="full")y={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(g==="fitted")y={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(g==="controlled smushing")y={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(g==="universal smushing")y={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return y},j=function(g,E,f){f=f.replace(/\r\n/g,`
`).replace(/\r/g,`
`);let y=f.split(`
`),w=[],L,A,C;for(A=y.length,L=0;L<A;L++)w=w.concat(Kt(y[L],i[g],E));for(A=w.length,C=w[0],L=1;L<A;L++)C=H(C,w[L],E);return C?C.join(`
`):""};function J(g,E){let f=JSON.parse(JSON.stringify(g)),y,w;if(typeof E.horizontalLayout<"u"){y=P(E.horizontalLayout,g);for(w in y)y.hasOwnProperty(w)&&(f.fittingRules[w]=y[w])}if(typeof E.verticalLayout<"u"){y=$(E.verticalLayout,g);for(w in y)y.hasOwnProperty(w)&&(f.fittingRules[w]=y[w])}return f.printDirection=typeof E.printDirection<"u"?E.printDirection:g.printDirection,f.showHardBlanks=E.showHardBlanks||!1,f.width=E.width||-1,f.whitespaceBreak=E.whitespaceBreak||!1,f}const V=function(g,E,f){return V.text(g,E,f)};return V.text=async function(g,E,f){let y="";return g=g+"",typeof arguments[1]=="function"&&(f=E,E={},E.font=o.font),typeof E=="string"?(y=E,E={}):(E=E||{},y=E.font||o.font),await new Promise((w,L)=>{V.loadFont(y,function(A,C){if(A){L(A),f&&f(A);return}const I=j(y,J(C,E),g);w(I),f&&f(null,I)})})},V.textSync=function(g,E){let f="";g=g+"",typeof E=="string"?(f=E,E={}):(E=E||{},f=E.font||o.font);var y=J(V.loadFontSync(f),E);return j(f,y,g)},V.metadata=function(g,E){g=g+"",V.loadFont(g,function(f,y){if(f){E(f);return}E(null,y,i[g].comment)})},V.defaults=function(g){if(typeof g=="object"&&g!==null)for(var E in g)g.hasOwnProperty(E)&&(o[E]=g[E]);return JSON.parse(JSON.stringify(o))},V.parseFont=function(g,E){E=E.replace(/\r\n/g,`
`).replace(/\r/g,`
`),i[g]={};var f=E.split(`
`),y=f.splice(0,1)[0].split(" "),w=i[g],L={};if(L.hardBlank=y[0].substr(5,1),L.height=parseInt(y[1],10),L.baseline=parseInt(y[2],10),L.maxLength=parseInt(y[3],10),L.oldLayout=parseInt(y[4],10),L.numCommentLines=parseInt(y[5],10),L.printDirection=y.length>=6?parseInt(y[6],10):0,L.fullLayout=y.length>=7?parseInt(y[7],10):null,L.codeTagCount=y.length>=8?parseInt(y[8],10):null,L.fittingRules=s(L.oldLayout,L.fullLayout),w.options=L,L.hardBlank.length!==1||isNaN(L.height)||isNaN(L.baseline)||isNaN(L.maxLength)||isNaN(L.oldLayout)||isNaN(L.numCommentLines))throw new Error("FIGlet header contains invalid values.");let A=[],C;for(C=32;C<=126;C++)A.push(C);if(A=A.concat(196,214,220,228,246,252,223),f.length<L.numCommentLines+L.height*A.length)throw new Error("FIGlet file is missing data.");let I,D,b=!1;for(w.comment=f.splice(0,L.numCommentLines).join(`
`),w.numChars=0;f.length>0&&w.numChars<A.length;){for(I=A[w.numChars],w[I]=f.splice(0,L.height),C=0;C<L.height;C++)typeof w[I][C]>"u"?w[I][C]="":(D=new RegExp("\\"+w[I][C].substr(w[I][C].length-1,1)+"+$"),w[I][C]=w[I][C].replace(D,""));w.numChars++}for(;f.length>0;){if(I=f.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(I))I=parseInt(I,16);else if(/^0[0-7]+$/.test(I))I=parseInt(I,8);else if(/^[0-9]+$/.test(I))I=parseInt(I,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(I))I=parseInt(I,16);else{if(I==="")break;console.log("Invalid data:"+I),b=!0;break}for(w[I]=f.splice(0,L.height),C=0;C<L.height;C++)typeof w[I][C]>"u"?w[I][C]="":(D=new RegExp("\\"+w[I][C].substr(w[I][C].length-1,1)+"+$"),w[I][C]=w[I][C].replace(D,""));w.numChars++}if(b===!0)throw new Error("Error parsing data.");return L},V.loadFont=function(g,E){if(i[g]){E(null,i[g].options);return}if(typeof fetch!="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");fetch(o.fontPath+"/"+g+".flf").then(function(f){if(f.ok)return f.text();throw console.log("Unexpected response",f),new Error("Network response was not ok.")}).then(function(f){E(null,V.parseFont(g,f))}).catch(E)},V.loadFontSync=function(g){if(i[g])return i[g].options;throw new Error("synchronous font loading is not implemented for the browser")},V.preloadFonts=function(g,E){let f=[];g.reduce(function(y,w){return y.then(function(){return fetch(o.fontPath+"/"+w+".flf").then(L=>L.text()).then(function(L){f.push(L)})})},Promise.resolve()).then(function(y){for(var w in g)g.hasOwnProperty(w)&&V.parseFont(g[w],f[w]);E&&E()})},V.figFonts=i,V})();e.exports=t})(Nf);var I5=Nf.exports;const qs=_a(I5);var C5=Object.defineProperty,A5=Object.getOwnPropertyNames,Zs=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),x5=(e,t)=>function(){return e&&(t=(0,e[A5(e)[0]])(e=0)),t},P5=(e,t)=>{for(var n in t)C5(e,n,{get:t[n],enumerable:!0})},bt=(e,t,n)=>new Promise((r,u)=>{var l=s=>{try{o(n.next(s))}catch(a){u(a)}},i=s=>{try{o(n.throw(s))}catch(a){u(a)}},o=s=>s.done?r(s.value):Promise.resolve(s.value).then(l,i);o((n=n.apply(e,t)).next())}),O5=(e,t,n)=>(t=e[Zs("asyncIterator")])?t.call(e):(e=e[Zs("iterator")](),t={},n=(r,u)=>(u=e[r])&&(t[r]=l=>new Promise((i,o,s)=>(l=u.call(e,l),s=l.done,Promise.resolve(l.value).then(a=>i({value:a,done:s}),o)))),n("next"),n("return"),t),If={};P5(If,{default:()=>Cf});var Cf,Af=x5({"src/fonts/Slant.js"(){Cf=`flf2a$ 6 5 16 15 10 0 18319
Slant by Glenn Chappell 3/93 -- based on Standard
Includes ISO Latin-1
figlet release 2.1 -- 12 Aug 1994
Permission is hereby given to modify this font, as long as the
modifier's name is placed on a comment line.

Modified by Paul Burton <solution@earthlink.net> 12/96 to include new parameter
supported by FIGlet and FIGWin.  May also be slightly modified for better use
of new full-width/kern/smush alternatives, but default output is NOT changed.

     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
    __@
   / /@
  / / @
 /_/  @
(_)   @
      @@
 _ _ @
( | )@
|/|/ @
 $   @
$    @
     @@
     __ __ @
  __/ // /_@
 /_  _  __/@
/_  _  __/ @
 /_//_/    @
           @@
     __@
   _/ /@
  / __/@
 (_  ) @
/  _/  @
/_/    @@
   _   __@
  (_)_/_/@
   _/_/  @
 _/_/_   @
/_/ (_)  @
         @@
   ___   @
  ( _ )  @
 / __ \\/|@
/ /_/  < @
\\____/\\/ @
         @@
  _ @
 ( )@
 |/ @
 $  @
$   @
    @@
     __@
   _/_/@
  / /  @
 / /   @
/ /    @
|_|    @@
     _ @
    | |@
    / /@
   / / @
 _/_/  @
/_/    @@
       @
  __/|_@
 |    /@
/_ __| @
 |/    @
       @@
       @
    __ @
 __/ /_@
/_  __/@
 /_/   @
       @@
   @
   @
   @
 _ @
( )@
|/ @@
       @
       @
 ______@
/_____/@
  $    @
       @@
   @
   @
   @
 _ @
(_)@
   @@
       __@
     _/_/@
   _/_/  @
 _/_/    @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
   ___@
  <  /@
  / / @
 / /  @
/_/   @
      @@
   ___ @
  |__ \\@
  __/ /@
 / __/ @
/____/ @
       @@
   _____@
  |__  /@
   /_ < @
 ___/ / @
/____/  @
        @@
   __ __@
  / // /@
 / // /_@
/__  __/@
  /_/   @
        @@
    ______@
   / ____/@
  /___ \\  @
 ____/ /  @
/_____/   @
          @@
   _____@
  / ___/@
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
 _____@
/__  /@
  / / @
 / /  @
/_/   @
      @@
   ____ @
  ( __ )@
 / __  |@
/ /_/ / @
\\____/  @
        @@
   ____ @
  / __ \\@
 / /_/ /@
 \\__, / @
/____/  @
        @@
     @
   _ @
  (_)@
 _   @
(_)  @
     @@
     @
   _ @
  (_)@
 _   @
( )  @
|/   @@
  __@
 / /@
/ / @
\\ \\ @
 \\_\\@
    @@
       @
  _____@
 /____/@
/____/ @
  $    @
       @@
__  @
\\ \\ @
 \\ \\@
 / /@
/_/ @
    @@
  ___ @
 /__ \\@
  / _/@
 /_/  @
(_)   @
      @@
   ______ @
  / ____ \\@
 / / __ \`/@
/ / /_/ / @
\\ \\__,_/  @
 \\____/   @@
    ___ @
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
    ____ @
   / __ )@
  / __  |@
 / /_/ / @
/_____/  @
         @@
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
         @@
    ____ @
   / __ \\@
  / / / /@
 / /_/ / @
/_____/  @
         @@
    ______@
   / ____/@
  / __/   @
 / /___   @
/_____/   @
          @@
    ______@
   / ____/@
  / /_    @
 / __/    @
/_/       @
          @@
   ______@
  / ____/@
 / / __  @
/ /_/ /  @
\\____/   @
         @@
    __  __@
   / / / /@
  / /_/ / @
 / __  /  @
/_/ /_/   @
          @@
    ____@
   /  _/@
   / /  @
 _/ /   @
/___/   @
        @@
       __@
      / /@
 __  / / @
/ /_/ /  @
\\____/   @
         @@
    __ __@
   / //_/@
  / ,<   @
 / /| |  @
/_/ |_|  @
         @@
    __ @
   / / @
  / /  @
 / /___@
/_____/@
       @@
    __  ___@
   /  |/  /@
  / /|_/ / @
 / /  / /  @
/_/  /_/   @
           @@
    _   __@
   / | / /@
  /  |/ / @
 / /|  /  @
/_/ |_/   @
          @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\____/  @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / ____/ @
/_/      @
         @@
   ____ @
  / __ \\@
 / / / /@
/ /_/ / @
\\___\\_\\ @
        @@
    ____ @
   / __ \\@
  / /_/ /@
 / _, _/ @
/_/ |_|  @
         @@
   _____@
  / ___/@
  \\__ \\ @
 ___/ / @
/____/  @
        @@
  ______@
 /_  __/@
  / /   @
 / /    @
/_/     @
        @@
   __  __@
  / / / /@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
 _    __@
| |  / /@
| | / / @
| |/ /  @
|___/   @
        @@
 _       __@
| |     / /@
| | /| / / @
| |/ |/ /  @
|__/|__/   @
           @@
   _  __@
  | |/ /@
  |   / @
 /   |  @
/_/|_|  @
        @@
__  __@
\\ \\/ /@
 \\  / @
 / /  @
/_/   @
      @@
 _____@
/__  /@
  / / @
 / /__@
/____/@
      @@
     ___@
    / _/@
   / /  @
  / /   @
 / /    @
/__/    @@
__    @
\\ \\   @
 \\ \\  @
  \\ \\ @
   \\_\\@
      @@
     ___@
    /  /@
    / / @
   / /  @
 _/ /   @
/__/    @@
  //|@
 |/||@
  $  @
 $   @
$    @
     @@
       @
       @
       @
       @
 ______@
/_____/@@
  _ @
 ( )@
  V @
 $  @
$   @
    @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
    __  @
   / /_ @
  / __ \\@
 / /_/ /@
/_.___/ @
        @@
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
       @@
       __@
  ____/ /@
 / __  / @
/ /_/ /  @
\\__,_/   @
         @@
      @
  ___ @
 / _ \\@
/  __/@
\\___/ @
      @@
    ____@
   / __/@
  / /_  @
 / __/  @
/_/     @
        @@
         @
   ____ _@
  / __ \`/@
 / /_/ / @
 \\__, /  @
/____/   @@
    __  @
   / /_ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
       _ @
      (_)@
     / / @
    / /  @
 __/ /   @
/___/    @@
    __  @
   / /__@
  / //_/@
 / ,<   @
/_/|_|  @
        @@
    __@
   / /@
  / / @
 / /  @
/_/   @
      @@
            @
   ____ ___ @
  / __ \`__ \\@
 / / / / / /@
/_/ /_/ /_/ @
            @@
        @
   ____ @
  / __ \\@
 / / / /@
/_/ /_/ @
        @@
       @
  ____ @
 / __ \\@
/ /_/ /@
\\____/ @
       @@
         @
    ____ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
        @
  ____ _@
 / __ \`/@
/ /_/ / @
\\__, /  @
  /_/   @@
        @
   _____@
  / ___/@
 / /    @
/_/     @
        @@
        @
   _____@
  / ___/@
 (__  ) @
/____/  @
        @@
   __ @
  / /_@
 / __/@
/ /_  @
\\__/  @
      @@
        @
  __  __@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
       @
 _   __@
| | / /@
| |/ / @
|___/  @
       @@
          @
 _      __@
| | /| / /@
| |/ |/ / @
|__/|__/  @
          @@
        @
   _  __@
  | |/_/@
 _>  <  @
/_/|_|  @
        @@
         @
   __  __@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
     @
 ____@
/_  /@
 / /_@
/___/@
     @@
     __@
   _/_/@
 _/_/  @
< <    @
/ /    @
\\_\\    @@
     __@
    / /@
   / / @
  / /  @
 / /   @
/_/    @@
     _ @
    | |@
    / /@
   _>_>@
 _/_/  @
/_/    @@
  /\\//@
 //\\/ @
  $   @
 $    @
$     @
      @@
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
160  NO-BREAK SPACE
     $$@
    $$ @
   $$  @
  $$   @
 $$    @
$$     @@
161  INVERTED EXCLAMATION MARK
    _ @
   (_)@
  / / @
 / /  @
/_/   @
      @@
162  CENT SIGN
     __@
  __/ /@
 / ___/@
/ /__  @
\\  _/  @
/_/    @@
163  POUND SIGN
     ____ @
    / ,__\\@
 __/ /_   @
 _/ /___  @
(_,____/  @
          @@
164  CURRENCY SIGN
    /|___/|@
   | __  / @
  / /_/ /  @
 /___  |   @
|/   |/    @
           @@
165  YEN SIGN
    ____@
  _| / /@
 /_  __/@
/_  __/ @
 /_/    @
        @@
166  BROKEN BAR
     __@
    / /@
   /_/ @
  __   @
 / /   @
/_/    @@
167  SECTION SIGN
     __ @
   _/ _)@
  / | | @
 | || | @
 | |_/  @
(__/    @@
168  DIAERESIS
  _   _ @
 (_) (_)@
  $   $ @
 $   $  @
$   $   @
        @@
169  COPYRIGHT SIGN
    ______  @
   / _____\\ @
  / / ___/ |@
 / / /__  / @
|  \\___/ /  @
 \\______/   @@
170  FEMININE ORDINAL INDICATOR
   ___ _@
  / _ \`/@
 _\\_,_/ @
/____/  @
 $      @
        @@
171  LEFT-POINTING DOUBLE ANGLE QUOTATION MARK
  ____@
 / / /@
/ / / @
\\ \\ \\ @
 \\_\\_\\@
      @@
172  NOT SIGN
       @
 ______@
/___  /@
   /_/ @
 $     @
       @@
173  SOFT HYPHEN
      @
      @
 _____@
/____/@
  $   @
      @@
174  REGISTERED SIGN
    ______  @
   / ___  \\ @
  / / _ \\  |@
 / / , _/ / @
| /_/|_| /  @
 \\______/   @@
175  MACRON
 ______@
/_____/@
  $    @
 $     @
$      @
       @@
176  DEGREE SIGN
  ___ @
 / _ \\@
/ // /@
\\___/ @
 $    @
      @@
177  PLUS-MINUS SIGN
      __ @
   __/ /_@
  /_  __/@
 __/_/_  @
/_____/  @
         @@
178  SUPERSCRIPT TWO
   ___ @
  |_  |@
 / __/ @
/____/ @
 $     @
       @@
179  SUPERSCRIPT THREE
   ____@
  |_  /@
 _/_ < @
/____/ @
 $     @
       @@
180  ACUTE ACCENT
  __@
 /_/@
  $ @
 $  @
$   @
    @@
181  MICRO SIGN
          @
    __  __@
   / / / /@
  / /_/ / @
 / ._,_/  @
/_/       @@
182  PILCROW SIGN
  _______@
 / _    /@
/ (/ / / @
\\_  / /  @
 /_/_/   @
         @@
183  MIDDLE DOT
   @
 _ @
(_)@
 $ @
$  @
   @@
184  CEDILLA
   @
   @
   @
   @
 _ @
/_)@@
185  SUPERSCRIPT ONE
  ___@
 <  /@
 / / @
/_/  @
$    @
     @@
186  MASCULINE ORDINAL INDICATOR
   ___ @
  / _ \\@
 _\\___/@
/____/ @
 $     @
       @@
187  RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK
____  @
\\ \\ \\ @
 \\ \\ \\@
 / / /@
/_/_/ @
      @@
188  VULGAR FRACTION ONE QUARTER
  ___   __ @
 <  / _/_/ @
 / /_/_/___@
/_//_// / /@
 /_/ /_  _/@
      /_/  @@
189  VULGAR FRACTION ONE HALF
  ___   __   @
 <  / _/_/__ @
 / /_/_/|_  |@
/_//_/ / __/ @
 /_/  /____/ @
             @@
190  VULGAR FRACTION THREE QUARTERS
   ____    __ @
  |_  /  _/_/ @
 _/_ < _/_/___@
/____//_// / /@
    /_/ /_  _/@
         /_/  @@
191  INVERTED QUESTION MARK
    _ @
   (_)@
 _/ / @
/ _/_ @
\\___/ @
      @@
192  LATIN CAPITAL LETTER A WITH GRAVE
    __ @
   _\\_\\@
  / _ |@
 / __ |@
/_/ |_|@
       @@
193  LATIN CAPITAL LETTER A WITH ACUTE
     __@
   _/_/@
  / _ |@
 / __ |@
/_/ |_|@
       @@
194  LATIN CAPITAL LETTER A WITH CIRCUMFLEX
     //|@
   _|/||@
  / _ | @
 / __ | @
/_/ |_| @
        @@
195  LATIN CAPITAL LETTER A WITH TILDE
     /\\//@
   _//\\/ @
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
196  LATIN CAPITAL LETTER A WITH DIAERESIS
    _  _ @
   (_)(_)@
  / _ |  @
 / __ |  @
/_/ |_|  @
         @@
197  LATIN CAPITAL LETTER A WITH RING ABOVE
    (())@
   /   |@
  / /| |@
 / ___ |@
/_/  |_|@
        @@
198  LATIN CAPITAL LETTER AE
    __________@
   /     ____/@
  / /|  __/   @
 / __  /___   @
/_/ /_____/   @
              @@
199  LATIN CAPITAL LETTER C WITH CEDILLA
   ______@
  / ____/@
 / /     @
/ /___   @
\\____/   @
 /_)     @@
200  LATIN CAPITAL LETTER E WITH GRAVE
    __ @
   _\\_\\@
  / __/@
 / _/  @
/___/  @
       @@
201  LATIN CAPITAL LETTER E WITH ACUTE
     __@
   _/_/@
  / __/@
 / _/  @
/___/  @
       @@
202  LATIN CAPITAL LETTER E WITH CIRCUMFLEX
     //|@
   _|/||@
  / __/ @
 / _/   @
/___/   @
        @@
203  LATIN CAPITAL LETTER E WITH DIAERESIS
    _  _ @
   (_)(_)@
  / __/  @
 / _/    @
/___/    @
         @@
204  LATIN CAPITAL LETTER I WITH GRAVE
    __ @
   _\\_\\@
  /  _/@
 _/ /  @
/___/  @
       @@
205  LATIN CAPITAL LETTER I WITH ACUTE
     __@
   _/_/@
  /  _/@
 _/ /  @
/___/  @
       @@
206  LATIN CAPITAL LETTER I WITH CIRCUMFLEX
     //|@
   _|/||@
  /  _/ @
 _/ /   @
/___/   @
        @@
207  LATIN CAPITAL LETTER I WITH DIAERESIS
    _  _ @
   (_)(_)@
  /  _/  @
 _/ /    @
/___/    @
         @@
208  LATIN CAPITAL LETTER ETH
     ____ @
    / __ \\@
 __/ /_/ /@
/_  __/ / @
 /_____/  @
          @@
209  LATIN CAPITAL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / |/ / @
 /    /  @
/_/|_/   @
         @@
210  LATIN CAPITAL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
211  LATIN CAPITAL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
212  LATIN CAPITAL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
213  LATIN CAPITAL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
214  LATIN CAPITAL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
215  MULTIPLICATION SIGN
     @
     @
 /|/|@
 > < @
|/|/ @
     @@
216  LATIN CAPITAL LETTER O WITH STROKE
   _____ @
  / _// \\@
 / //// /@
/ //// / @
\\_//__/  @
         @@
217  LATIN CAPITAL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
218  LATIN CAPITAL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
219  LATIN CAPITAL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\____/  @
        @@
220  LATIN CAPITAL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\____/   @
         @@
221  LATIN CAPITAL LETTER Y WITH ACUTE
   __ @
__/_/_@
\\ \\/ /@
 \\  / @
 /_/  @
      @@
222  LATIN CAPITAL LETTER THORN
    __  @
   / /_ @
  / __ \\@
 / ____/@
/_/     @
        @@
223  LATIN SMALL LETTER SHARP S
     ____ @
    / __ \\@
   / / / /@
  / /_| | @
 / //__/  @
/_/       @@
224  LATIN SMALL LETTER A WITH GRAVE
    __  @
  __\\_\\_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
225  LATIN SMALL LETTER A WITH ACUTE
     __ @
  __/_/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
226  LATIN SMALL LETTER A WITH CIRCUMFLEX
    //| @
  _|/||_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
227  LATIN SMALL LETTER A WITH TILDE
    /\\//@
  _//\\/_@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
228  LATIN SMALL LETTER A WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \`/ @
/ /_/ /  @
\\__,_/   @
         @@
229  LATIN SMALL LETTER A WITH RING ABOVE
     __ @
  __(())@
 / __ \`/@
/ /_/ / @
\\__,_/  @
        @@
230  LATIN SMALL LETTER AE
           @
  ____ ___ @
 / __ \` _ \\@
/ /_/   __/@
\\__,_____/ @
           @@
231  LATIN SMALL LETTER C WITH CEDILLA
       @
  _____@
 / ___/@
/ /__  @
\\___/  @
/_)    @@
232  LATIN SMALL LETTER E WITH GRAVE
   __ @
  _\\_\\@
 / _ \\@
/  __/@
\\___/ @
      @@
233  LATIN SMALL LETTER E WITH ACUTE
    __@
  _/_/@
 / _ \\@
/  __/@
\\___/ @
      @@
234  LATIN SMALL LETTER E WITH CIRCUMFLEX
    //|@
  _|/||@
 / _ \\ @
/  __/ @
\\___/  @
       @@
235  LATIN SMALL LETTER E WITH DIAERESIS
   _  _ @
  (_)(_)@
 / _ \\  @
/  __/  @
\\___/   @
        @@
236  LATIN SMALL LETTER I WITH GRAVE
   __ @
   \\_\\@
  / / @
 / /  @
/_/   @
      @@
237  LATIN SMALL LETTER I WITH ACUTE
    __@
   /_/@
  / / @
 / /  @
/_/   @
      @@
238  LATIN SMALL LETTER I WITH CIRCUMFLEX
    //|@
   |/||@
  / /  @
 / /   @
/_/    @
       @@
239  LATIN SMALL LETTER I WITH DIAERESIS
  _   _ @
 (_)_(_)@
  / /   @
 / /    @
/_/     @
        @@
240  LATIN SMALL LETTER ETH
     || @
    =||=@
 ___ || @
/ __\` | @
\\____/  @
        @@
241  LATIN SMALL LETTER N WITH TILDE
     /\\//@
   _//\\/ @
  / __ \\ @
 / / / / @
/_/ /_/  @
         @@
242  LATIN SMALL LETTER O WITH GRAVE
    __ @
  __\\_\\@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
243  LATIN SMALL LETTER O WITH ACUTE
     __@
  __/_/@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
244  LATIN SMALL LETTER O WITH CIRCUMFLEX
    //|@
  _|/||@
 / __ \\@
/ /_/ /@
\\____/ @
       @@
245  LATIN SMALL LETTER O WITH TILDE
    /\\//@
  _//\\/ @
 / __ \\ @
/ /_/ / @
\\____/  @
        @@
246  LATIN SMALL LETTER O WITH DIAERESIS
   _   _ @
  (_)_(_)@
 / __ \\  @
/ /_/ /  @
\\____/   @
         @@
247  DIVISION SIGN
       @
    _  @
 __(_)_@
/_____/@
 (_)   @
       @@
248  LATIN SMALL LETTER O WITH STROKE
        @
  _____ @
 / _// \\@
/ //// /@
\\_//__/ @
        @@
249  LATIN SMALL LETTER U WITH GRAVE
    __  @
  __\\_\\_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
250  LATIN SMALL LETTER U WITH ACUTE
     __ @
  __/_/_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
251  LATIN SMALL LETTER U WITH CIRCUMFLEX
    //| @
  _|/||_@
 / / / /@
/ /_/ / @
\\__,_/  @
        @@
252  LATIN SMALL LETTER U WITH DIAERESIS
   _   _ @
  (_) (_)@
 / / / / @
/ /_/ /  @
\\__,_/   @
         @@
253  LATIN SMALL LETTER Y WITH ACUTE
      __ @
   __/_/_@
  / / / /@
 / /_/ / @
 \\__, /  @
/____/   @@
254  LATIN SMALL LETTER THORN
     __  @
    / /_ @
   / __ \\@
  / /_/ /@
 / .___/ @
/_/      @@
255  LATIN SMALL LETTER Y WITH DIAERESIS
    _   _ @
   (_) (_)@
  / / / / @
 / /_/ /  @
 \\__, /   @
/____/    @@
`}});function nu(e,t){return e.replace(/.(?=.)/g,`$&${" ".repeat(t)}`)}function zl(e,t,n){return e.substring(0,t)+n+e.substring(t+n.length)}function xf(e){return e[Math.floor(Math.random()*e.length)]}function pn(e,t){return e.split("").map(n=>/\s/.test(n)?n:xf(t)).join("")}function F5({asciiText:e,animationDirection:t,animationCharacters:n,animationCharacterSpacing:r}){return e.reduce((u,l,i)=>{if(i===0)return u;const o=u!=null&&u[u.length-1]?[...u[u.length-1]]:void 0;if(!o)return u;const s=/\S/.test(o[i-1]),a=o.length-i,c=/\S/.test(o[a]);let h=[...o];if(s&&(t==="up"||t==="vertical")&&(o!=null&&o[i]&&(o[i]=pn(o[i],nu(n,r))),o!=null&&o[i-1]&&(o[i-1]=" ".repeat(l.length)),h[i]&&(h[i]=pn(h[i],n))),c&&(t==="down"||t==="vertical")&&(o!=null&&o[a]&&(o[a]=pn(o[a],nu(n,r))),o!=null&&o[a+1]&&(o[a+1]=" ".repeat(l.length)),h!=null&&h[a]&&(h[a]=pn(h[a],n))),(s||c)&&u.push(h,o),i===e.length-1&&t==="up"){const m=[...o];m[m.length-1]=" ".repeat(m[m.length-1].length),u.push(m)}if(i===e.length-1&&t==="down"){const m=[...o];m[h.length-i]=" ".repeat(m[h.length-i].length),u.push(m);const R=[...m];if(!/\S/.test(R[0]))return u;R[0]=pn(R[0],nu(n,r)),u.push(R);const S=[...R];if(!/\S/.test(S[0]))return u;S[0]=pn(S[0],nu(n,r)),u.push(S);const U=[...S];if(!/\S/.test(U[0]))return u;U[0]=" ".repeat(U[0].length),u.push(U)}return e.length-1,u},[[...e]])}var M5=1;function z5({asciiText:e,animationDirection:t,animationCharacters:n}){const r=[[...structuredClone(e)]],u=e[0].length/(t==="left"||t==="right"?1:2);for(let l=0;l<u;l++){if(l===0){r.push(e);continue}const i=r[l].map((o,s,a)=>{const c=o.search(/\S/),h=o.search(/\S(?!.*\S)/);if(c===-1||h===-1)return o;const m=s>M5?-1:1;if((t==="left"||t==="horizontal")&&(o=zl(o,c," ")),(t==="right"||t==="horizontal")&&(o=zl(o,h," ")),h-c<=2)return o;if(t==="left"||t==="horizontal"){const R=xf(n);a[s+m]=zl(a[s+m],c+1,R)}return o});r.push(i)}return r}function D5(e){return bt(this,arguments,function*({asciiText:t,animationDirection:n,animationCharacters:r,animationCharacterSpacing:u,fadeInOnly:l=!1,fadeOutOnly:i=!1}){try{if(n==="down"||n==="up"||n==="vertical"){const c=F5({asciiText:t,animationDirection:n,animationCharacters:r,animationCharacterSpacing:u});if(i)return c;const h=structuredClone(c).reverse();return l?h:h.concat(c)}const o=z5({asciiText:t,animationDirection:n,animationCharacters:r,animationCharacterSpacing:u});if(l)return structuredClone(o).reverse();const s=structuredClone(o).reverse();return i?o:s.concat(o)}catch(o){throw o+" @createFrames"}})}var bs="Slant";function U5(e,t){return bt(this,null,function*(){const n=t?"":(yield Promise.resolve().then(()=>(Af(),If))).default;qs.parseFont(bs,t||n);const r=a=>bt(this,null,function*(){return yield new Promise((c,h)=>{qs.text(a,{font:bs},(m,R)=>{m&&h("Failed to load font"),R?c(R.split(`
`)):h("No ASCII text generated")})})}),u=[];try{for(var l=O5(Array.isArray(e)?e:[e]),i,o,s;i=!(o=yield l.next()).done;i=!1){const a=o.value,c=yield r(a);u.push(c)}}catch(a){s=[a]}finally{try{i&&(o=l.return)&&(yield o.call(l))}finally{if(s)throw s[0]}}return u})}var $5="/*+#";function j5({animationCharacters:e=$5,animationCharacterSpacing:t=1,animationDelay:n=500,animationDirection:r="horizontal",animationInterval:u=1e3,animationIteration:l=1,animationLoop:i=!0,animationSpeed:o=20,fadeInOnly:s=!1,fadeOutOnly:a=!1,font:c,isAnimated:h=!0,isPaused:m=!1,text:R=["React","ASCII","Text"]}){const v=rt.useRef(),S=rt.useRef({animationFrameId:0,animationIndex:0,animationIterationCount:1,animations:null,frameId:0,frameIndex:0,isPaused:!1,isTimeout:!1,previousTimeStamp:0,timeoutId:0}),U=d=>bt(this,null,function*(){const{animations:_,isPaused:k,isTimeout:x,previousTimeStamp:O}=S.current;if(!v.current||!(_!=null&&_.length)||k||x)return;if(d-O>o){const{animationIndex:z,animationIterationCount:Y,animations:H,frameId:ke,frameIndex:xe}=S.current,Ee=H==null?void 0:H[z];if(!Ee||x)return;const at=xe===0,Ue=xe===Ee.length-1,Qt=z===H.length-1;if(v.current.textContent=Ee[xe].join(`
`),!i&&Y===l&&Qt&&Ue){cancelAnimationFrame(ke);return}S.current.previousTimeStamp=d;const Kt=xe===Math.floor(Ee.length/2),P=s||a,$=j=>bt(this,null,function*(){yield new Promise(J=>{S.current.isTimeout=!0,setTimeout(J,j)}),S.current.isTimeout=!1});P&&Ue&&n&&(yield $(n)),P&&at&&u&&(yield $(u)),!P&&Kt&&n&&(yield $(n)),!P&&Ue&&u&&(yield $(u)),Ue?(S.current.frameIndex=0,S.current.animationIndex++,S.current.animationIterationCount++):S.current.frameIndex++,i&&S.current.animationIndex===H.length&&(S.current.animationIndex=0)}S.current.frameId=requestAnimationFrame(U)});rt.useEffect(()=>{m?(S.current.isPaused=!0,cancelAnimationFrame(S.current.frameId)):(S.current.isPaused=!1,S.current.frameId=requestAnimationFrame(U))},[m,S]);const p=rt.useCallback(()=>bt(this,null,function*(){try{const d=yield U5(R,c);!h&&v.current?v.current.textContent=d[0].join(`
`):d.length===(Array.isArray(R)?R:[R]).length&&(S.current.animations=yield Promise.all([...d.map(_=>bt(this,null,function*(){return yield D5({asciiText:_,animationDirection:r,animationCharacters:e,animationCharacterSpacing:t,fadeInOnly:s,fadeOutOnly:a})}))]),requestAnimationFrame(U))}catch(d){console.error({error:d})}}),[]);return rt.useEffect(()=>{p()},[R,p]),v}var H5=`flf2a$ 10 5 10 0 3 0


Figlet conversion by patorjk, April 17, 2008
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@
$ $@@
$▐██▌$@
$▐██▌$@
$▐██▌$@
$▓██▒$@
$▒▄▄ $@
$░▀▀▒$@
$░  ░$@
$   ░$@
$░   $@
$    $@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
$   $@
$   $@
$   $@
$   $@
$██▓$@
$▒▓▒$@
$░▒ $@
$░  $@
$ ░ $@
$ ░ $@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
 ▄▄▄      @
▒████▄    @
▒██  ▀█▄  @
░██▄▄▄▄██ @
 ▓█   ▓██▒@
 ▒▒   ▓▒█░@
  ▒   ▒▒ ░@
  ░   ▒   @
      ░  ░@
          @@
 ▄▄▄▄   @
▓█████▄ @
▒██▒ ▄██@
▒██░█▀  @
░▓█  ▀█▓@
░▒▓███▀▒@
▒░▒   ░ @
 ░    ░ @
 ░      @
      ░ @@
 ▄████▄  @
▒██▀ ▀█  @
▒▓█    ▄ @
▒▓▓▄ ▄██▒@
▒ ▓███▀ ░@
░ ░▒ ▒  ░@
  ░  ▒   @
░        @
░ ░      @
░        @@
▓█████▄ @
▒██▀ ██▌@
░██   █▌@
░▓█▄   ▌@
░▒████▓ @
 ▒▒▓  ▒ @
 ░ ▒  ▒ @
 ░ ░  ░ @
   ░    @
 ░      @@
▓█████ @
▓█   ▀ @
▒███   @
▒▓█  ▄ @
░▒████▒@
░░ ▒░ ░@
 ░ ░  ░@
   ░   @
   ░  ░@
       @@
  █████▒@
▓██   ▒ @
▒████ ░ @
░▓█▒  ░ @
░▒█░    @
 ▒ ░    @
 ░      @
 ░ ░    @
        @
        @@
  ▄████ @
 ██▒ ▀█▒@
▒██░▄▄▄░@
░▓█  ██▓@
░▒▓███▀▒@
 ░▒   ▒ @
  ░   ░ @
░ ░   ░ @
      ░ @
        @@
 ██░ ██ @
▓██░ ██▒@
▒██▀▀██░@
░▓█ ░██ @
░▓█▒░██▓@
 ▒ ░░▒░▒@
 ▒ ░▒░ ░@
 ░  ░░ ░@
 ░  ░  ░@
        @@
 ██▓@
▓██▒@
▒██▒@
░██░@
░██░@
░▓  @
 ▒ ░@
 ▒ ░@
 ░  @
    @@
 ▄▄▄██▀▀▀@
   ▒██   @
   ░██   @
▓██▄██▓  @
 ▓███▒   @
 ▒▓▒▒░   @
 ▒ ░▒░   @
 ░ ░ ░   @
 ░   ░   @
         @@
 ██ ▄█▀@
 ██▄█▒ @
▓███▄░ @
▓██ █▄ @
▒██▒ █▄@
▒ ▒▒ ▓▒@
░ ░▒ ▒░@
░ ░░ ░ @
░  ░   @
       @@
 ██▓    @
▓██▒    @
▒██░    @
▒██░    @
░██████▒@
░ ▒░▓  ░@
░ ░ ▒  ░@
  ░ ░   @
    ░  ░@
        @@
 ███▄ ▄███▓@
▓██▒▀█▀ ██▒@
▓██    ▓██░@
▒██    ▒██ @
▒██▒   ░██▒@
░ ▒░   ░  ░@
░  ░      ░@
░      ░   @
       ░   @
           @@
 ███▄    █ @
 ██ ▀█   █ @
▓██  ▀█ ██▒@
▓██▒  ▐▌██▒@
▒██░   ▓██░@
░ ▒░   ▒ ▒ @
░ ░░   ░ ▒░@
   ░   ░ ░ @
         ░ @
           @@
 ▒█████  @
▒██▒  ██▒@
▒██░  ██▒@
▒██   ██░@
░ ████▓▒░@
░ ▒░▒░▒░ @
  ░ ▒ ▒░ @
░ ░ ░ ▒  @
    ░ ░  @
         @@
 ██▓███  @
▓██░  ██▒@
▓██░ ██▓▒@
▒██▄█▓▒ ▒@
▒██▒ ░  ░@
▒▓▒░ ░  ░@
░▒ ░     @
░░       @
         @
         @@
  █████  @
▒██▓  ██▒@
▒██▒  ██░@
░██  █▀ ░@
░▒███▒█▄ @
░░ ▒▒░ ▒ @
 ░ ▒░  ░ @
   ░   ░ @
    ░    @
         @@
 ██▀███  @
▓██ ▒ ██▒@
▓██ ░▄█ ▒@
▒██▀▀█▄  @
░██▓ ▒██▒@
░ ▒▓ ░▒▓░@
  ░▒ ░ ▒░@
  ░░   ░ @
   ░     @
         @@
  ██████ @
▒██    ▒ @
░ ▓██▄   @
  ▒   ██▒@
▒██████▒▒@
▒ ▒▓▒ ▒ ░@
░ ░▒  ░ ░@
░  ░  ░  @
      ░  @
         @@
▄▄▄█████▓@
▓  ██▒ ▓▒@
▒ ▓██░ ▒░@
░ ▓██▓ ░ @
  ▒██▒ ░ @
  ▒ ░░   @
    ░    @
  ░      @
         @
         @@
 █    ██ @
 ██  ▓██▒@
▓██  ▒██░@
▓▓█  ░██░@
▒▒█████▓ @
░▒▓▒ ▒ ▒ @
░░▒░ ░ ░ @
 ░░░ ░ ░ @
   ░     @
         @@
 ██▒   █▓@
▓██░   █▒@
 ▓██  █▒░@
  ▒██ █░░@
   ▒▀█░  @
   ░ ▐░  @
   ░ ░░  @
     ░░  @
      ░  @
     ░   @@
 █     █░@
▓█░ █ ░█░@
▒█░ █ ░█ @
░█░ █ ░█ @
░░██▒██▓ @
░ ▓░▒ ▒  @
  ▒ ░ ░  @
  ░   ░  @
    ░    @
         @@
▒██   ██▒@
▒▒ █ █ ▒░@
░░  █   ░@
 ░ █ █ ▒ @
▒██▒ ▒██▒@
▒▒ ░ ░▓ ░@
░░   ░▒ ░@
 ░    ░  @
 ░    ░  @
         @@
▓██   ██▓@
 ▒██  ██▒@
  ▒██ ██░@
  ░ ▐██▓░@
  ░ ██▒▓░@
   ██▒▒▒ @
 ▓██ ░▒░ @
 ▒ ▒ ░░  @
 ░ ░     @
 ░ ░     @@
▒███████▒@
▒ ▒ ▒ ▄▀░@
░ ▒ ▄▀▒░ @
  ▄▀▒   ░@
▒███████▒@
░▒▒ ▓░▒░▒@
░░▒ ▒ ░ ▒@
░ ░ ░ ░ ░@
  ░ ░    @
░        @@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
 ▄▄▄      @
▒████▄    @
▒██  ▀█▄  @
░██▄▄▄▄██ @
 ▓█   ▓██▒@
 ▒▒   ▓▒█░@
  ▒   ▒▒ ░@
  ░   ▒   @
      ░  ░@
          @@
 ▄▄▄▄   @
▓█████▄ @
▒██▒ ▄██@
▒██░█▀  @
░▓█  ▀█▓@
░▒▓███▀▒@
▒░▒   ░ @
 ░    ░ @
 ░      @
      ░ @@
 ▄████▄  @
▒██▀ ▀█  @
▒▓█    ▄ @
▒▓▓▄ ▄██▒@
▒ ▓███▀ ░@
░ ░▒ ▒  ░@
  ░  ▒   @
░        @
░ ░      @
░        @@
▓█████▄ @
▒██▀ ██▌@
░██   █▌@
░▓█▄   ▌@
░▒████▓ @
 ▒▒▓  ▒ @
 ░ ▒  ▒ @
 ░ ░  ░ @
   ░    @
 ░      @@
▓█████ @
▓█   ▀ @
▒███   @
▒▓█  ▄ @
░▒████▒@
░░ ▒░ ░@
 ░ ░  ░@
   ░   @
   ░  ░@
       @@
  █████▒@
▓██   ▒ @
▒████ ░ @
░▓█▒  ░ @
░▒█░    @
 ▒ ░    @
 ░      @
 ░ ░    @
        @
        @@
  ▄████ @
 ██▒ ▀█▒@
▒██░▄▄▄░@
░▓█  ██▓@
░▒▓███▀▒@
 ░▒   ▒ @
  ░   ░ @
░ ░   ░ @
      ░ @
        @@
 ██░ ██ @
▓██░ ██▒@
▒██▀▀██░@
░▓█ ░██ @
░▓█▒░██▓@
 ▒ ░░▒░▒@
 ▒ ░▒░ ░@
 ░  ░░ ░@
 ░  ░  ░@
        @@
 ██▓@
▓██▒@
▒██▒@
░██░@
░██░@
░▓  @
 ▒ ░@
 ▒ ░@
 ░  @
    @@
 ▄▄▄██▀▀▀@
   ▒██   @
   ░██   @
▓██▄██▓  @
 ▓███▒   @
 ▒▓▒▒░   @
 ▒ ░▒░   @
 ░ ░ ░   @
 ░   ░   @
         @@
 ██ ▄█▀@
 ██▄█▒ @
▓███▄░ @
▓██ █▄ @
▒██▒ █▄@
▒ ▒▒ ▓▒@
░ ░▒ ▒░@
░ ░░ ░ @
░  ░   @
       @@
 ██▓    @
▓██▒    @
▒██░    @
▒██░    @
░██████▒@
░ ▒░▓  ░@
░ ░ ▒  ░@
  ░ ░   @
    ░  ░@
        @@
 ███▄ ▄███▓@
▓██▒▀█▀ ██▒@
▓██    ▓██░@
▒██    ▒██ @
▒██▒   ░██▒@
░ ▒░   ░  ░@
░  ░      ░@
░      ░   @
       ░   @
           @@
 ███▄    █ @
 ██ ▀█   █ @
▓██  ▀█ ██▒@
▓██▒  ▐▌██▒@
▒██░   ▓██░@
░ ▒░   ▒ ▒ @
░ ░░   ░ ▒░@
   ░   ░ ░ @
         ░ @
           @@
 ▒█████  @
▒██▒  ██▒@
▒██░  ██▒@
▒██   ██░@
░ ████▓▒░@
░ ▒░▒░▒░ @
  ░ ▒ ▒░ @
░ ░ ░ ▒  @
    ░ ░  @
         @@
 ██▓███  @
▓██░  ██▒@
▓██░ ██▓▒@
▒██▄█▓▒ ▒@
▒██▒ ░  ░@
▒▓▒░ ░  ░@
░▒ ░     @
░░       @
         @
         @@
  █████  @
▒██▓  ██▒@
▒██▒  ██░@
░██  █▀ ░@
░▒███▒█▄ @
░░ ▒▒░ ▒ @
 ░ ▒░  ░ @
   ░   ░ @
    ░    @
         @@
 ██▀███  @
▓██ ▒ ██▒@
▓██ ░▄█ ▒@
▒██▀▀█▄  @
░██▓ ▒██▒@
░ ▒▓ ░▒▓░@
  ░▒ ░ ▒░@
  ░░   ░ @
   ░     @
         @@
  ██████ @
▒██    ▒ @
░ ▓██▄   @
  ▒   ██▒@
▒██████▒▒@
▒ ▒▓▒ ▒ ░@
░ ░▒  ░ ░@
░  ░  ░  @
      ░  @
         @@
▄▄▄█████▓@
▓  ██▒ ▓▒@
▒ ▓██░ ▒░@
░ ▓██▓ ░ @
  ▒██▒ ░ @
  ▒ ░░   @
    ░    @
  ░      @
         @
         @@
 █    ██ @
 ██  ▓██▒@
▓██  ▒██░@
▓▓█  ░██░@
▒▒█████▓ @
░▒▓▒ ▒ ▒ @
░░▒░ ░ ░ @
 ░░░ ░ ░ @
   ░     @
         @@
 ██▒   █▓@
▓██░   █▒@
 ▓██  █▒░@
  ▒██ █░░@
   ▒▀█░  @
   ░ ▐░  @
   ░ ░░  @
     ░░  @
      ░  @
     ░   @@
 █     █░@
▓█░ █ ░█░@
▒█░ █ ░█ @
░█░ █ ░█ @
░░██▒██▓ @
░ ▓░▒ ▒  @
  ▒ ░ ░  @
  ░   ░  @
    ░    @
         @@
▒██   ██▒@
▒▒ █ █ ▒░@
░░  █   ░@
 ░ █ █ ▒ @
▒██▒ ▒██▒@
▒▒ ░ ░▓ ░@
░░   ░▒ ░@
 ░    ░  @
 ░    ░  @
         @@
▓██   ██▓@
 ▒██  ██▒@
  ▒██ ██░@
  ░ ▐██▓░@
  ░ ██▒▓░@
   ██▒▒▒ @
 ▓██ ░▒░ @
 ▒ ▒ ░░  @
 ░ ░     @
 ░ ░     @@
▒███████▒@
▒ ▒ ▒ ▄▀░@
░ ▒ ▄▀▒░ @
  ▄▀▒   ░@
▒███████▒@
░▒▒ ▓░▒░▒@
░░▒ ▒ ░ ▒@
░ ░ ░ ░ ░@
  ░ ░    @
░        @@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@
@
@
@
@
@
@
@
@
@
@@`;Af();function Pf(e,t){return function(){return e.apply(t,arguments)}}const{toString:B5}=Object.prototype,{getPrototypeOf:zo}=Object,ll=(e=>t=>{const n=B5.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),st=e=>(e=e.toLowerCase(),t=>ll(t)===e),il=e=>t=>typeof t===e,{isArray:Wn}=Array,Ar=il("undefined");function W5(e){return e!==null&&!Ar(e)&&e.constructor!==null&&!Ar(e.constructor)&&Je(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Of=st("ArrayBuffer");function V5(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Of(e.buffer),t}const G5=il("string"),Je=il("function"),Ff=il("number"),ol=e=>e!==null&&typeof e=="object",Q5=e=>e===!0||e===!1,hu=e=>{if(ll(e)!=="object")return!1;const t=zo(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},K5=st("Date"),X5=st("File"),Y5=st("Blob"),J5=st("FileList"),q5=e=>ol(e)&&Je(e.pipe),Z5=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Je(e.append)&&((t=ll(e))==="formdata"||t==="object"&&Je(e.toString)&&e.toString()==="[object FormData]"))},b5=st("URLSearchParams"),[e_,t_,n_,r_]=["ReadableStream","Request","Response","Headers"].map(st),u_=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zr(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,u;if(typeof e!="object"&&(e=[e]),Wn(e))for(r=0,u=e.length;r<u;r++)t.call(null,e[r],r,e);else{const l=n?Object.getOwnPropertyNames(e):Object.keys(e),i=l.length;let o;for(r=0;r<i;r++)o=l[r],t.call(null,e[o],o,e)}}function Mf(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,u;for(;r-- >0;)if(u=n[r],t===u.toLowerCase())return u;return null}const zf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Df=e=>!Ar(e)&&e!==zf;function Fi(){const{caseless:e}=Df(this)&&this||{},t={},n=(r,u)=>{const l=e&&Mf(t,u)||u;hu(t[l])&&hu(r)?t[l]=Fi(t[l],r):hu(r)?t[l]=Fi({},r):Wn(r)?t[l]=r.slice():t[l]=r};for(let r=0,u=arguments.length;r<u;r++)arguments[r]&&zr(arguments[r],n);return t}const l_=(e,t,n,{allOwnKeys:r}={})=>(zr(t,(u,l)=>{n&&Je(u)?e[l]=Pf(u,n):e[l]=u},{allOwnKeys:r}),e),i_=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),o_=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},s_=(e,t,n,r)=>{let u,l,i;const o={};if(t=t||{},e==null)return t;do{for(u=Object.getOwnPropertyNames(e),l=u.length;l-- >0;)i=u[l],(!r||r(i,e,t))&&!o[i]&&(t[i]=e[i],o[i]=!0);e=n!==!1&&zo(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},a_=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},c_=e=>{if(!e)return null;if(Wn(e))return e;let t=e.length;if(!Ff(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},f_=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&zo(Uint8Array)),d_=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let u;for(;(u=r.next())&&!u.done;){const l=u.value;t.call(e,l[0],l[1])}},__=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},p_=st("HTMLFormElement"),h_=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,u){return r.toUpperCase()+u}),ea=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),m_=st("RegExp"),Uf=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};zr(n,(u,l)=>{let i;(i=t(u,l,e))!==!1&&(r[l]=i||u)}),Object.defineProperties(e,r)},y_=e=>{Uf(e,(t,n)=>{if(Je(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Je(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},g_=(e,t)=>{const n={},r=u=>{u.forEach(l=>{n[l]=!0})};return Wn(e)?r(e):r(String(e).split(t)),n},v_=()=>{},S_=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Dl="abcdefghijklmnopqrstuvwxyz",ta="0123456789",$f={DIGIT:ta,ALPHA:Dl,ALPHA_DIGIT:Dl+Dl.toUpperCase()+ta},E_=(e=16,t=$f.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function w_(e){return!!(e&&Je(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const T_=e=>{const t=new Array(10),n=(r,u)=>{if(ol(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[u]=r;const l=Wn(r)?[]:{};return zr(r,(i,o)=>{const s=n(i,u+1);!Ar(s)&&(l[o]=s)}),t[u]=void 0,l}}return r};return n(e,0)},R_=st("AsyncFunction"),L_=e=>e&&(ol(e)||Je(e))&&Je(e.then)&&Je(e.catch),T={isArray:Wn,isArrayBuffer:Of,isBuffer:W5,isFormData:Z5,isArrayBufferView:V5,isString:G5,isNumber:Ff,isBoolean:Q5,isObject:ol,isPlainObject:hu,isReadableStream:e_,isRequest:t_,isResponse:n_,isHeaders:r_,isUndefined:Ar,isDate:K5,isFile:X5,isBlob:Y5,isRegExp:m_,isFunction:Je,isStream:q5,isURLSearchParams:b5,isTypedArray:f_,isFileList:J5,forEach:zr,merge:Fi,extend:l_,trim:u_,stripBOM:i_,inherits:o_,toFlatObject:s_,kindOf:ll,kindOfTest:st,endsWith:a_,toArray:c_,forEachEntry:d_,matchAll:__,isHTMLForm:p_,hasOwnProperty:ea,hasOwnProp:ea,reduceDescriptors:Uf,freezeMethods:y_,toObjectSet:g_,toCamelCase:h_,noop:v_,toFiniteNumber:S_,findKey:Mf,global:zf,isContextDefined:Df,ALPHABET:$f,generateString:E_,isSpecCompliantForm:w_,toJSONObject:T_,isAsyncFn:R_,isThenable:L_};function B(e,t,n,r,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),u&&(this.response=u)}T.inherits(B,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:T.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const jf=B.prototype,Hf={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Hf[e]={value:e}});Object.defineProperties(B,Hf);Object.defineProperty(jf,"isAxiosError",{value:!0});B.from=(e,t,n,r,u,l)=>{const i=Object.create(jf);return T.toFlatObject(e,i,function(s){return s!==Error.prototype},o=>o!=="isAxiosError"),B.call(i,e.message,t,n,r,u),i.cause=e,i.name=e.name,l&&Object.assign(i,l),i};const k_=null;function Mi(e){return T.isPlainObject(e)||T.isArray(e)}function Bf(e){return T.endsWith(e,"[]")?e.slice(0,-2):e}function na(e,t,n){return e?e.concat(t).map(function(u,l){return u=Bf(u),!n&&l?"["+u+"]":u}).join(n?".":""):t}function N_(e){return T.isArray(e)&&!e.some(Mi)}const I_=T.toFlatObject(T,{},null,function(t){return/^is[A-Z]/.test(t)});function sl(e,t,n){if(!T.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=T.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,U){return!T.isUndefined(U[S])});const r=n.metaTokens,u=n.visitor||c,l=n.dots,i=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&T.isSpecCompliantForm(t);if(!T.isFunction(u))throw new TypeError("visitor must be a function");function a(v){if(v===null)return"";if(T.isDate(v))return v.toISOString();if(!s&&T.isBlob(v))throw new B("Blob is not supported. Use a Buffer instead.");return T.isArrayBuffer(v)||T.isTypedArray(v)?s&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,S,U){let p=v;if(v&&!U&&typeof v=="object"){if(T.endsWith(S,"{}"))S=r?S:S.slice(0,-2),v=JSON.stringify(v);else if(T.isArray(v)&&N_(v)||(T.isFileList(v)||T.endsWith(S,"[]"))&&(p=T.toArray(v)))return S=Bf(S),p.forEach(function(_,k){!(T.isUndefined(_)||_===null)&&t.append(i===!0?na([S],k,l):i===null?S:S+"[]",a(_))}),!1}return Mi(v)?!0:(t.append(na(U,S,l),a(v)),!1)}const h=[],m=Object.assign(I_,{defaultVisitor:c,convertValue:a,isVisitable:Mi});function R(v,S){if(!T.isUndefined(v)){if(h.indexOf(v)!==-1)throw Error("Circular reference detected in "+S.join("."));h.push(v),T.forEach(v,function(p,d){(!(T.isUndefined(p)||p===null)&&u.call(t,p,T.isString(d)?d.trim():d,S,m))===!0&&R(p,S?S.concat(d):[d])}),h.pop()}}if(!T.isObject(e))throw new TypeError("data must be an object");return R(e),t}function ra(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Do(e,t){this._pairs=[],e&&sl(e,this,t)}const Wf=Do.prototype;Wf.append=function(t,n){this._pairs.push([t,n])};Wf.toString=function(t){const n=t?function(r){return t.call(this,r,ra)}:ra;return this._pairs.map(function(u){return n(u[0])+"="+n(u[1])},"").join("&")};function C_(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Vf(e,t,n){if(!t)return e;const r=n&&n.encode||C_,u=n&&n.serialize;let l;if(u?l=u(t,n):l=T.isURLSearchParams(t)?t.toString():new Do(t,n).toString(r),l){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+l}return e}class ua{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){T.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Gf={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},A_=typeof URLSearchParams<"u"?URLSearchParams:Do,x_=typeof FormData<"u"?FormData:null,P_=typeof Blob<"u"?Blob:null,O_={isBrowser:!0,classes:{URLSearchParams:A_,FormData:x_,Blob:P_},protocols:["http","https","file","blob","url","data"]},Uo=typeof window<"u"&&typeof document<"u",F_=(e=>Uo&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),M_=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",z_=Uo&&window.location.href||"http://localhost",D_=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Uo,hasStandardBrowserEnv:F_,hasStandardBrowserWebWorkerEnv:M_,origin:z_},Symbol.toStringTag,{value:"Module"})),it={...D_,...O_};function U_(e,t){return sl(e,new it.classes.URLSearchParams,Object.assign({visitor:function(n,r,u,l){return it.isNode&&T.isBuffer(n)?(this.append(r,n.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)}},t))}function $_(e){return T.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function j_(e){const t={},n=Object.keys(e);let r;const u=n.length;let l;for(r=0;r<u;r++)l=n[r],t[l]=e[l];return t}function Qf(e){function t(n,r,u,l){let i=n[l++];if(i==="__proto__")return!0;const o=Number.isFinite(+i),s=l>=n.length;return i=!i&&T.isArray(u)?u.length:i,s?(T.hasOwnProp(u,i)?u[i]=[u[i],r]:u[i]=r,!o):((!u[i]||!T.isObject(u[i]))&&(u[i]=[]),t(n,r,u[i],l)&&T.isArray(u[i])&&(u[i]=j_(u[i])),!o)}if(T.isFormData(e)&&T.isFunction(e.entries)){const n={};return T.forEachEntry(e,(r,u)=>{t($_(r),u,n,0)}),n}return null}function H_(e,t,n){if(T.isString(e))try{return(t||JSON.parse)(e),T.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Dr={transitional:Gf,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",u=r.indexOf("application/json")>-1,l=T.isObject(t);if(l&&T.isHTMLForm(t)&&(t=new FormData(t)),T.isFormData(t))return u?JSON.stringify(Qf(t)):t;if(T.isArrayBuffer(t)||T.isBuffer(t)||T.isStream(t)||T.isFile(t)||T.isBlob(t)||T.isReadableStream(t))return t;if(T.isArrayBufferView(t))return t.buffer;if(T.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(l){if(r.indexOf("application/x-www-form-urlencoded")>-1)return U_(t,this.formSerializer).toString();if((o=T.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return sl(o?{"files[]":t}:t,s&&new s,this.formSerializer)}}return l||u?(n.setContentType("application/json",!1),H_(t)):t}],transformResponse:[function(t){const n=this.transitional||Dr.transitional,r=n&&n.forcedJSONParsing,u=this.responseType==="json";if(T.isResponse(t)||T.isReadableStream(t))return t;if(t&&T.isString(t)&&(r&&!this.responseType||u)){const i=!(n&&n.silentJSONParsing)&&u;try{return JSON.parse(t)}catch(o){if(i)throw o.name==="SyntaxError"?B.from(o,B.ERR_BAD_RESPONSE,this,null,this.response):o}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:it.classes.FormData,Blob:it.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};T.forEach(["delete","get","head","post","put","patch"],e=>{Dr.headers[e]={}});const B_=T.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),W_=e=>{const t={};let n,r,u;return e&&e.split(`
`).forEach(function(i){u=i.indexOf(":"),n=i.substring(0,u).trim().toLowerCase(),r=i.substring(u+1).trim(),!(!n||t[n]&&B_[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},la=Symbol("internals");function bn(e){return e&&String(e).trim().toLowerCase()}function mu(e){return e===!1||e==null?e:T.isArray(e)?e.map(mu):String(e)}function V_(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const G_=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ul(e,t,n,r,u){if(T.isFunction(r))return r.call(this,t,n);if(u&&(t=n),!!T.isString(t)){if(T.isString(r))return t.indexOf(r)!==-1;if(T.isRegExp(r))return r.test(t)}}function Q_(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function K_(e,t){const n=T.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(u,l,i){return this[r].call(this,t,u,l,i)},configurable:!0})})}class De{constructor(t){t&&this.set(t)}set(t,n,r){const u=this;function l(o,s,a){const c=bn(s);if(!c)throw new Error("header name must be a non-empty string");const h=T.findKey(u,c);(!h||u[h]===void 0||a===!0||a===void 0&&u[h]!==!1)&&(u[h||s]=mu(o))}const i=(o,s)=>T.forEach(o,(a,c)=>l(a,c,s));if(T.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(T.isString(t)&&(t=t.trim())&&!G_(t))i(W_(t),n);else if(T.isHeaders(t))for(const[o,s]of t.entries())l(s,o,r);else t!=null&&l(n,t,r);return this}get(t,n){if(t=bn(t),t){const r=T.findKey(this,t);if(r){const u=this[r];if(!n)return u;if(n===!0)return V_(u);if(T.isFunction(n))return n.call(this,u,r);if(T.isRegExp(n))return n.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=bn(t),t){const r=T.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ul(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let u=!1;function l(i){if(i=bn(i),i){const o=T.findKey(r,i);o&&(!n||Ul(r,r[o],o,n))&&(delete r[o],u=!0)}}return T.isArray(t)?t.forEach(l):l(t),u}clear(t){const n=Object.keys(this);let r=n.length,u=!1;for(;r--;){const l=n[r];(!t||Ul(this,this[l],l,t,!0))&&(delete this[l],u=!0)}return u}normalize(t){const n=this,r={};return T.forEach(this,(u,l)=>{const i=T.findKey(r,l);if(i){n[i]=mu(u),delete n[l];return}const o=t?Q_(l):String(l).trim();o!==l&&delete n[l],n[o]=mu(u),r[o]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return T.forEach(this,(r,u)=>{r!=null&&r!==!1&&(n[u]=t&&T.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(u=>r.set(u)),r}static accessor(t){const r=(this[la]=this[la]={accessors:{}}).accessors,u=this.prototype;function l(i){const o=bn(i);r[o]||(K_(u,i),r[o]=!0)}return T.isArray(t)?t.forEach(l):l(t),this}}De.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);T.reduceDescriptors(De.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});T.freezeMethods(De);function $l(e,t){const n=this||Dr,r=t||n,u=De.from(r.headers);let l=r.data;return T.forEach(e,function(o){l=o.call(n,l,u.normalize(),t?t.status:void 0)}),u.normalize(),l}function Kf(e){return!!(e&&e.__CANCEL__)}function Vn(e,t,n){B.call(this,e??"canceled",B.ERR_CANCELED,t,n),this.name="CanceledError"}T.inherits(Vn,B,{__CANCEL__:!0});function Xf(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new B("Request failed with status code "+n.status,[B.ERR_BAD_REQUEST,B.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function X_(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Y_(e,t){e=e||10;const n=new Array(e),r=new Array(e);let u=0,l=0,i;return t=t!==void 0?t:1e3,function(s){const a=Date.now(),c=r[l];i||(i=a),n[u]=s,r[u]=a;let h=l,m=0;for(;h!==u;)m+=n[h++],h=h%e;if(u=(u+1)%e,u===l&&(l=(l+1)%e),a-i<t)return;const R=c&&a-c;return R?Math.round(m*1e3/R):void 0}}function J_(e,t){let n=0;const r=1e3/t;let u=null;return function(){const i=this===!0,o=Date.now();if(i||o-n>r)return u&&(clearTimeout(u),u=null),n=o,e.apply(null,arguments);u||(u=setTimeout(()=>(u=null,n=Date.now(),e.apply(null,arguments)),r-(o-n)))}}const Hu=(e,t,n=3)=>{let r=0;const u=Y_(50,250);return J_(l=>{const i=l.loaded,o=l.lengthComputable?l.total:void 0,s=i-r,a=u(s),c=i<=o;r=i;const h={loaded:i,total:o,progress:o?i/o:void 0,bytes:s,rate:a||void 0,estimated:a&&o&&c?(o-i)/a:void 0,event:l,lengthComputable:o!=null};h[t?"download":"upload"]=!0,e(h)},n)},q_=it.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function u(l){let i=l;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=u(window.location.href),function(i){const o=T.isString(i)?u(i):i;return o.protocol===r.protocol&&o.host===r.host}}():function(){return function(){return!0}}(),Z_=it.hasStandardBrowserEnv?{write(e,t,n,r,u,l){const i=[e+"="+encodeURIComponent(t)];T.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),T.isString(r)&&i.push("path="+r),T.isString(u)&&i.push("domain="+u),l===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function b_(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ep(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Yf(e,t){return e&&!b_(t)?ep(e,t):t}const ia=e=>e instanceof De?{...e}:e;function an(e,t){t=t||{};const n={};function r(a,c,h){return T.isPlainObject(a)&&T.isPlainObject(c)?T.merge.call({caseless:h},a,c):T.isPlainObject(c)?T.merge({},c):T.isArray(c)?c.slice():c}function u(a,c,h){if(T.isUndefined(c)){if(!T.isUndefined(a))return r(void 0,a,h)}else return r(a,c,h)}function l(a,c){if(!T.isUndefined(c))return r(void 0,c)}function i(a,c){if(T.isUndefined(c)){if(!T.isUndefined(a))return r(void 0,a)}else return r(void 0,c)}function o(a,c,h){if(h in t)return r(a,c);if(h in e)return r(void 0,a)}const s={url:l,method:l,data:l,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:o,headers:(a,c)=>u(ia(a),ia(c),!0)};return T.forEach(Object.keys(Object.assign({},e,t)),function(c){const h=s[c]||u,m=h(e[c],t[c],c);T.isUndefined(m)&&h!==o||(n[c]=m)}),n}const Jf=e=>{const t=an({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:u,xsrfCookieName:l,headers:i,auth:o}=t;t.headers=i=De.from(i),t.url=Vf(Yf(t.baseURL,t.url),e.params,e.paramsSerializer),o&&i.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):"")));let s;if(T.isFormData(n)){if(it.hasStandardBrowserEnv||it.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((s=i.getContentType())!==!1){const[a,...c]=s?s.split(";").map(h=>h.trim()).filter(Boolean):[];i.setContentType([a||"multipart/form-data",...c].join("; "))}}if(it.hasStandardBrowserEnv&&(r&&T.isFunction(r)&&(r=r(t)),r||r!==!1&&q_(t.url))){const a=u&&l&&Z_.read(l);a&&i.set(u,a)}return t},tp=typeof XMLHttpRequest<"u",np=tp&&function(e){return new Promise(function(n,r){const u=Jf(e);let l=u.data;const i=De.from(u.headers).normalize();let{responseType:o}=u,s;function a(){u.cancelToken&&u.cancelToken.unsubscribe(s),u.signal&&u.signal.removeEventListener("abort",s)}let c=new XMLHttpRequest;c.open(u.method.toUpperCase(),u.url,!0),c.timeout=u.timeout;function h(){if(!c)return;const R=De.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),S={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:R,config:e,request:c};Xf(function(p){n(p),a()},function(p){r(p),a()},S),c=null}"onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(r(new B("Request aborted",B.ECONNABORTED,u,c)),c=null)},c.onerror=function(){r(new B("Network Error",B.ERR_NETWORK,u,c)),c=null},c.ontimeout=function(){let v=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const S=u.transitional||Gf;u.timeoutErrorMessage&&(v=u.timeoutErrorMessage),r(new B(v,S.clarifyTimeoutError?B.ETIMEDOUT:B.ECONNABORTED,u,c)),c=null},l===void 0&&i.setContentType(null),"setRequestHeader"in c&&T.forEach(i.toJSON(),function(v,S){c.setRequestHeader(S,v)}),T.isUndefined(u.withCredentials)||(c.withCredentials=!!u.withCredentials),o&&o!=="json"&&(c.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&c.addEventListener("progress",Hu(u.onDownloadProgress,!0)),typeof u.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Hu(u.onUploadProgress)),(u.cancelToken||u.signal)&&(s=R=>{c&&(r(!R||R.type?new Vn(null,e,c):R),c.abort(),c=null)},u.cancelToken&&u.cancelToken.subscribe(s),u.signal&&(u.signal.aborted?s():u.signal.addEventListener("abort",s)));const m=X_(u.url);if(m&&it.protocols.indexOf(m)===-1){r(new B("Unsupported protocol "+m+":",B.ERR_BAD_REQUEST,e));return}c.send(l||null)})},rp=(e,t)=>{let n=new AbortController,r;const u=function(s){if(!r){r=!0,i();const a=s instanceof Error?s:this.reason;n.abort(a instanceof B?a:new Vn(a instanceof Error?a.message:a))}};let l=t&&setTimeout(()=>{u(new B(`timeout ${t} of ms exceeded`,B.ETIMEDOUT))},t);const i=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(s=>{s&&(s.removeEventListener?s.removeEventListener("abort",u):s.unsubscribe(u))}),e=null)};e.forEach(s=>s&&s.addEventListener&&s.addEventListener("abort",u));const{signal:o}=n;return o.unsubscribe=i,[o,()=>{l&&clearTimeout(l),l=null}]},up=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,u;for(;r<n;)u=r+t,yield e.slice(r,u),r=u},lp=async function*(e,t,n){for await(const r of e)yield*up(ArrayBuffer.isView(r)?r:await n(String(r)),t)},oa=(e,t,n,r,u)=>{const l=lp(e,t,u);let i=0;return new ReadableStream({type:"bytes",async pull(o){const{done:s,value:a}=await l.next();if(s){o.close(),r();return}let c=a.byteLength;n&&n(i+=c),o.enqueue(new Uint8Array(a))},cancel(o){return r(o),l.return()}},{highWaterMark:2})},sa=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},al=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",qf=al&&typeof ReadableStream=="function",zi=al&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),ip=qf&&(()=>{let e=!1;const t=new Request(it.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),aa=64*1024,Di=qf&&!!(()=>{try{return T.isReadableStream(new Response("").body)}catch{}})(),Bu={stream:Di&&(e=>e.body)};al&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Bu[t]&&(Bu[t]=T.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new B(`Response type '${t}' is not supported`,B.ERR_NOT_SUPPORT,r)})})})(new Response);const op=async e=>{if(e==null)return 0;if(T.isBlob(e))return e.size;if(T.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(T.isArrayBufferView(e))return e.byteLength;if(T.isURLSearchParams(e)&&(e=e+""),T.isString(e))return(await zi(e)).byteLength},sp=async(e,t)=>{const n=T.toFiniteNumber(e.getContentLength());return n??op(t)},ap=al&&(async e=>{let{url:t,method:n,data:r,signal:u,cancelToken:l,timeout:i,onDownloadProgress:o,onUploadProgress:s,responseType:a,headers:c,withCredentials:h="same-origin",fetchOptions:m}=Jf(e);a=a?(a+"").toLowerCase():"text";let[R,v]=u||l||i?rp([u,l],i):[],S,U;const p=()=>{!S&&setTimeout(()=>{R&&R.unsubscribe()}),S=!0};let d;try{if(s&&ip&&n!=="get"&&n!=="head"&&(d=await sp(c,r))!==0){let O=new Request(t,{method:"POST",body:r,duplex:"half"}),F;T.isFormData(r)&&(F=O.headers.get("content-type"))&&c.setContentType(F),O.body&&(r=oa(O.body,aa,sa(d,Hu(s)),null,zi))}T.isString(h)||(h=h?"cors":"omit"),U=new Request(t,{...m,signal:R,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",withCredentials:h});let _=await fetch(U);const k=Di&&(a==="stream"||a==="response");if(Di&&(o||k)){const O={};["status","statusText","headers"].forEach(z=>{O[z]=_[z]});const F=T.toFiniteNumber(_.headers.get("content-length"));_=new Response(oa(_.body,aa,o&&sa(F,Hu(o,!0)),k&&p,zi),O)}a=a||"text";let x=await Bu[T.findKey(Bu,a)||"text"](_,e);return!k&&p(),v&&v(),await new Promise((O,F)=>{Xf(O,F,{data:x,headers:De.from(_.headers),status:_.status,statusText:_.statusText,config:e,request:U})})}catch(_){throw p(),_&&_.name==="TypeError"&&/fetch/i.test(_.message)?Object.assign(new B("Network Error",B.ERR_NETWORK,e,U),{cause:_.cause||_}):B.from(_,_&&_.code,e,U)}}),Ui={http:k_,xhr:np,fetch:ap};T.forEach(Ui,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ca=e=>`- ${e}`,cp=e=>T.isFunction(e)||e===null||e===!1,Zf={getAdapter:e=>{e=T.isArray(e)?e:[e];const{length:t}=e;let n,r;const u={};for(let l=0;l<t;l++){n=e[l];let i;if(r=n,!cp(n)&&(r=Ui[(i=String(n)).toLowerCase()],r===void 0))throw new B(`Unknown adapter '${i}'`);if(r)break;u[i||"#"+l]=r}if(!r){const l=Object.entries(u).map(([o,s])=>`adapter ${o} `+(s===!1?"is not supported by the environment":"is not available in the build"));let i=t?l.length>1?`since :
`+l.map(ca).join(`
`):" "+ca(l[0]):"as no adapter specified";throw new B("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Ui};function jl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Vn(null,e)}function fa(e){return jl(e),e.headers=De.from(e.headers),e.data=$l.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Zf.getAdapter(e.adapter||Dr.adapter)(e).then(function(r){return jl(e),r.data=$l.call(e,e.transformResponse,r),r.headers=De.from(r.headers),r},function(r){return Kf(r)||(jl(e),r&&r.response&&(r.response.data=$l.call(e,e.transformResponse,r.response),r.response.headers=De.from(r.response.headers))),Promise.reject(r)})}const bf="1.7.2",$o={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{$o[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const da={};$o.transitional=function(t,n,r){function u(l,i){return"[Axios v"+bf+"] Transitional option '"+l+"'"+i+(r?". "+r:"")}return(l,i,o)=>{if(t===!1)throw new B(u(i," has been removed"+(n?" in "+n:"")),B.ERR_DEPRECATED);return n&&!da[i]&&(da[i]=!0,console.warn(u(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(l,i,o):!0}};function fp(e,t,n){if(typeof e!="object")throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let u=r.length;for(;u-- >0;){const l=r[u],i=t[l];if(i){const o=e[l],s=o===void 0||i(o,l,e);if(s!==!0)throw new B("option "+l+" must be "+s,B.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new B("Unknown option "+l,B.ERR_BAD_OPTION)}}const $i={assertOptions:fp,validators:$o},kt=$i.validators;class nn{constructor(t){this.defaults=t,this.interceptors={request:new ua,response:new ua}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let u;Error.captureStackTrace?Error.captureStackTrace(u={}):u=new Error;const l=u.stack?u.stack.replace(/^.+\n/,""):"";try{r.stack?l&&!String(r.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+l):r.stack=l}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=an(this.defaults,n);const{transitional:r,paramsSerializer:u,headers:l}=n;r!==void 0&&$i.assertOptions(r,{silentJSONParsing:kt.transitional(kt.boolean),forcedJSONParsing:kt.transitional(kt.boolean),clarifyTimeoutError:kt.transitional(kt.boolean)},!1),u!=null&&(T.isFunction(u)?n.paramsSerializer={serialize:u}:$i.assertOptions(u,{encode:kt.function,serialize:kt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=l&&T.merge(l.common,l[n.method]);l&&T.forEach(["delete","get","head","post","put","patch","common"],v=>{delete l[v]}),n.headers=De.concat(i,l);const o=[];let s=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(n)===!1||(s=s&&S.synchronous,o.unshift(S.fulfilled,S.rejected))});const a=[];this.interceptors.response.forEach(function(S){a.push(S.fulfilled,S.rejected)});let c,h=0,m;if(!s){const v=[fa.bind(this),void 0];for(v.unshift.apply(v,o),v.push.apply(v,a),m=v.length,c=Promise.resolve(n);h<m;)c=c.then(v[h++],v[h++]);return c}m=o.length;let R=n;for(h=0;h<m;){const v=o[h++],S=o[h++];try{R=v(R)}catch(U){S.call(this,U);break}}try{c=fa.call(this,R)}catch(v){return Promise.reject(v)}for(h=0,m=a.length;h<m;)c=c.then(a[h++],a[h++]);return c}getUri(t){t=an(this.defaults,t);const n=Yf(t.baseURL,t.url);return Vf(n,t.params,t.paramsSerializer)}}T.forEach(["delete","get","head","options"],function(t){nn.prototype[t]=function(n,r){return this.request(an(r||{},{method:t,url:n,data:(r||{}).data}))}});T.forEach(["post","put","patch"],function(t){function n(r){return function(l,i,o){return this.request(an(o||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:l,data:i}))}}nn.prototype[t]=n(),nn.prototype[t+"Form"]=n(!0)});class jo{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(l){n=l});const r=this;this.promise.then(u=>{if(!r._listeners)return;let l=r._listeners.length;for(;l-- >0;)r._listeners[l](u);r._listeners=null}),this.promise.then=u=>{let l;const i=new Promise(o=>{r.subscribe(o),l=o}).then(u);return i.cancel=function(){r.unsubscribe(l)},i},t(function(l,i,o){r.reason||(r.reason=new Vn(l,i,o),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new jo(function(u){t=u}),cancel:t}}}function dp(e){return function(n){return e.apply(null,n)}}function _p(e){return T.isObject(e)&&e.isAxiosError===!0}const ji={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ji).forEach(([e,t])=>{ji[t]=e});function e2(e){const t=new nn(e),n=Pf(nn.prototype.request,t);return T.extend(n,nn.prototype,t,{allOwnKeys:!0}),T.extend(n,t,null,{allOwnKeys:!0}),n.create=function(u){return e2(an(e,u))},n}const de=e2(Dr);de.Axios=nn;de.CanceledError=Vn;de.CancelToken=jo;de.isCancel=Kf;de.VERSION=bf;de.toFormData=sl;de.AxiosError=B;de.Cancel=de.CanceledError;de.all=function(t){return Promise.all(t)};de.spread=dp;de.isAxiosError=_p;de.mergeConfig=an;de.AxiosHeaders=De;de.formToJSON=e=>Qf(T.isHTMLForm(e)?new FormData(e):e);de.getAdapter=Zf.getAdapter;de.HttpStatusCode=ji;de.default=de;function pp(){const[e,t]=rt.useState(),[n,r]=rt.useState(!0),u=j5({animationCharacters:"▒░█",animationCharacterSpacing:1,animationDelay:2e3,animationDirection:"down",animationInterval:100,animationLoop:!0,animationSpeed:30,font:H5,text:["Ferro","Velho"]});return rt.useEffect(()=>{async function l(){de.get("https://stream.zeno.fm/8llryz2hnsntv").then(t(!0)).catch(i=>{t(!1)}),setTimeout(()=>{r(!1)},"3000")}l()},[]),ae.jsx(ae.Fragment,{children:n?ae.jsxs("div",{className:"terminal",children:[ae.jsx("div",{className:"noise"}),ae.jsx("div",{className:"overlay"}),ae.jsx("p",{children:"Carregando..."})]}):ae.jsxs("div",{className:"terminal",children:[ae.jsx("div",{className:"noise"}),ae.jsx("div",{className:"overlay"}),ae.jsx("p",{children:"Executando ferro_velho_webRadio v0.1:"}),ae.jsx("div",{children:e?ae.jsx("pre",{style:{fontSize:"18px"},ref:u}):" ¯/_(ツ)_/¯ "}),ae.jsxs("h1",{children:[" WEB ",ae.jsx("span",{className:"errorcode",children:"RADIO"}),e?ae.jsx("button",{className:"Rec"}):ae.jsx("button",{className:"notRec"})]}),e?ae.jsx("video",{src:"https://stream.zeno.fm/8llryz2hnsntv",controls:!0,autoPlay:!0}):"",e?ae.jsx("p",{className:"output",children:"Aproveite a transmissão!"}):ae.jsx("p",{className:"output",children:" Que pena, não tem ninguém aqui. Volte mais tarde!"})]})})}Hl.createRoot(document.getElementById("root")).render(ae.jsx(m2.StrictMode,{children:ae.jsx(pp,{})}));
