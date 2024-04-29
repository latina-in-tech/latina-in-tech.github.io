(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{3809:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return r}});let r=(0,n(8267).createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8267:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return u}});let n=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class r{disable(){throw n}getStore(){}run(){throw n}exit(){throw n}enterWith(){throw n}}let o=globalThis.AsyncLocalStorage;function u(){return o?new o:new r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1770:function(e,t,n){"use strict";function r(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return r}}),n(8754),n(7294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6612:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ReadonlyURLSearchParams:function(){return m},useSearchParams:function(){return y},usePathname:function(){return b},ServerInsertedHTMLContext:function(){return s.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return s.useServerInsertedHTML},useRouter:function(){return g},useParams:function(){return h},useSelectedLayoutSegments:function(){return v},useSelectedLayoutSegment:function(){return S},redirect:function(){return c.redirect},permanentRedirect:function(){return c.permanentRedirect},RedirectType:function(){return c.RedirectType},notFound:function(){return f.notFound}});let r=n(7294),o=n(6216),u=n(349),l=n(1770),i=n(8865),a=n(5160),s=n(594),c=n(7573),f=n(9249),d=Symbol("internal for urlsearchparams readonly");function p(){return Error("ReadonlyURLSearchParams cannot be modified")}class m{[Symbol.iterator](){return this[d][Symbol.iterator]()}append(){throw p()}delete(){throw p()}set(){throw p()}sort(){throw p()}constructor(e){this[d]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}}function y(){(0,l.clientHookInServerComponentError)("useSearchParams");let e=(0,r.useContext)(u.SearchParamsContext);return(0,r.useMemo)(()=>e?new m(e):null,[e])}function b(){return(0,l.clientHookInServerComponentError)("usePathname"),(0,r.useContext)(u.PathnameContext)}function g(){(0,l.clientHookInServerComponentError)("useRouter");let e=(0,r.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function h(){(0,l.clientHookInServerComponentError)("useParams");let e=(0,r.useContext)(o.GlobalLayoutRouterContext),t=(0,r.useContext)(u.PathParamsContext);return(0,r.useMemo)(()=>(null==e?void 0:e.tree)?function e(t,n){for(let r of(void 0===n&&(n={}),Object.values(t[1]))){let t=r[0],o=Array.isArray(t),u=o?t[1]:t;!u||u.startsWith(a.PAGE_SEGMENT_KEY)||(o&&("c"===t[2]||"oc"===t[2])?n[t[0]]=t[1].split("/"):o&&(n[t[0]]=t[1]),n=e(r,n))}return n}(e.tree):t,[null==e?void 0:e.tree,t])}function v(e){void 0===e&&(e="children"),(0,l.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,r.useContext)(o.LayoutRouterContext);return function e(t,n,r,o){let u;if(void 0===r&&(r=!0),void 0===o&&(o=[]),r)u=t[1][n];else{var l;let e=t[1];u=null!=(l=e.children)?l:Object.values(e)[0]}if(!u)return o;let s=u[0],c=(0,i.getSegmentValue)(s);return!c||c.startsWith(a.PAGE_SEGMENT_KEY)?o:(o.push(c),e(u,n,!1,o))}(t,e)}function S(e){void 0===e&&(e="children"),(0,l.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=v(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9249:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{notFound:function(){return r},isNotFoundError:function(){return o}});let n="NEXT_NOT_FOUND";function r(){let e=Error(n);throw e.digest=n,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2445:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return n}}),(r=n||(n={}))[r.SeeOther=303]="SeeOther",r[r.TemporaryRedirect=307]="TemporaryRedirect",r[r.PermanentRedirect=308]="PermanentRedirect",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7573:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{RedirectType:function(){return r},getRedirectError:function(){return s},redirect:function(){return c},permanentRedirect:function(){return f},isRedirectError:function(){return d},getURLFromRedirectError:function(){return p},getRedirectTypeFromError:function(){return m},getRedirectStatusCodeFromError:function(){return y}});let u=n(7714),l=n(3809),i=n(2445),a="NEXT_REDIRECT";function s(e,t,n){void 0===n&&(n=i.RedirectStatusCode.TemporaryRedirect);let r=Error(a);r.digest=a+";"+t+";"+e+";"+n+";";let o=u.requestAsyncStorage.getStore();return o&&(r.mutableCookies=o.mutableCookies),r}function c(e,t){void 0===t&&(t="replace");let n=l.actionAsyncStorage.getStore();throw s(e,t,(null==n?void 0:n.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.TemporaryRedirect)}function f(e,t){void 0===t&&(t="replace");let n=l.actionAsyncStorage.getStore();throw s(e,t,(null==n?void 0:n.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.PermanentRedirect)}function d(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,n,r,o]=e.digest.split(";",4),u=Number(o);return t===a&&("replace"===n||"push"===n)&&"string"==typeof r&&!isNaN(u)&&u in i.RedirectStatusCode}function p(e){return d(e)?e.digest.split(";",3)[2]:null}function m(e){if(!d(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function y(e){if(!d(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(o=r||(r={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7714:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return r}});let r=(0,n(8267).createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8865:function(e,t){"use strict";function n(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},594:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ServerInsertedHTMLContext:function(){return o},useServerInsertedHTML:function(){return u}});let r=n(1757)._(n(7294)),o=r.default.createContext(null);function u(e){let t=(0,r.useContext)(o);t&&t(e)}},6384:function(){},9332:function(e,t,n){e.exports=n(6612)},1163:function(e,t,n){e.exports=n(3035)},689:function(e,t,n){"use strict";n.d(t,{p:function(){return Z}});var r,o,u,l,i,a,s,c,f=n(7294),d=n.t(f,2),p=Object.defineProperty,m=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t,n)=>(m(e,"symbol"!=typeof t?t+"":t,n),n);class b{constructor(){y(this,"current",this.detect()),y(this,"handoffState","pending"),y(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}let g=new b,h=(e,t)=>{g.isServer?(0,f.useEffect)(e,t):(0,f.useLayoutEffect)(e,t)},v=function(e){let t;let n=(t=(0,f.useRef)(e),h(()=>{t.current=e},[e]),t);return f.useCallback((...e)=>n.current(...e),[n])},S=null!=(s=f.useId)?s:function(){let e=function(){let e;let t=(e="undefined"==typeof document,(0,d.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[n,r]=f.useState(g.isHandoffComplete);return n&&!1===g.isHandoffComplete&&r(!1),f.useEffect(()=>{!0!==n&&r(!0)},[n]),f.useEffect(()=>g.handoff(),[]),!t&&n}(),[t,n]=f.useState(e?()=>g.nextId():null);return h(()=>{null===t&&n(g.nextId())},[t]),null!=t?""+t:void 0};function E(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}let P=Symbol();function j(...e){let t=(0,f.useRef)(e);(0,f.useEffect)(()=>{t.current=e},[e]);let n=v(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[P]))?void 0:n}let O=(0,f.createContext)(null);O.displayName="OpenClosedContext";var C=((r=C||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function w({value:e,children:t}){return f.createElement(O.Provider,{value:e},t)}function _(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,_),r}function R(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}var M=((o=M||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),k=((u=k||{})[u.Unmount=0]="Unmount",u[u.Hidden=1]="Hidden",u);function x({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:u=!0,name:l,mergeRefs:i}){i=null!=i?i:L;let a=N(t,e);if(u)return I(a,n,r,l,i);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=a;if(e)return I(t,n,r,l,i)}if(1&s){let{unmount:e=!0,...t}=a;return _(e?0:1,{0:()=>null,1:()=>I({...t,hidden:!0,style:{display:"none"}},n,r,l,i)})}return I(a,n,r,l,i)}function I(e,t={},n,r,o){let{as:u=n,children:l,refName:i="ref",...a}=H(e,["unmount","static"]),s=void 0!==e.ref?{[i]:e.ref}:{},c="function"==typeof l?l(t):l;"className"in a&&a.className&&"function"==typeof a.className&&(a.className=a.className(t));let d={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(d["data-headlessui-state"]=n.join(" "))}if(u===f.Fragment&&Object.keys(D(a)).length>0){if(!(0,f.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=c.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>R(null==e?void 0:e.className(...t),a.className):R(null==e?void 0:e.className,a.className);return(0,f.cloneElement)(c,Object.assign({},N(c.props,D(H(a,["ref"]))),d,s,{ref:o(c.ref,s.ref)},t?{className:t}:{}))}return(0,f.createElement)(u,Object.assign({},H(a,["ref"]),u!==f.Fragment&&s,u!==f.Fragment&&d),c)}function T(){let e=(0,f.useRef)([]),t=(0,f.useCallback)(t=>{for(let n of e.current)null!=n&&("function"==typeof n?n(t):n.current=t)},[]);return(...n)=>{if(!n.every(e=>null==e))return e.current=n,t}}function L(...e){return e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}function N(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function A(e){var t;return Object.assign((0,f.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function D(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function H(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}let F=null!=(c=f.startTransition)?c:function(e){e()};var B=((l=B||{}).Space=" ",l.Enter="Enter",l.Escape="Escape",l.Backspace="Backspace",l.Delete="Delete",l.ArrowLeft="ArrowLeft",l.ArrowUp="ArrowUp",l.ArrowRight="ArrowRight",l.ArrowDown="ArrowDown",l.Home="Home",l.End="End",l.PageUp="PageUp",l.PageDown="PageDown",l.Tab="Tab",l),U=((i=U||{})[i.Open=0]="Open",i[i.Closed=1]="Closed",i),$=((a=$||{})[a.ToggleDisclosure=0]="ToggleDisclosure",a[a.CloseDisclosure=1]="CloseDisclosure",a[a.SetButtonId=2]="SetButtonId",a[a.SetPanelId=3]="SetPanelId",a[a.LinkPanel=4]="LinkPanel",a[a.UnlinkPanel=5]="UnlinkPanel",a);let W={0:e=>({...e,disclosureState:_(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},G=(0,f.createContext)(null);function K(e){let t=(0,f.useContext)(G);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,K),t}return t}G.displayName="DisclosureContext";let V=(0,f.createContext)(null);V.displayName="DisclosureAPIContext";let Y=(0,f.createContext)(null);function q(e,t){return _(t.type,W,e,t)}Y.displayName="DisclosurePanelContext";let z=f.Fragment,X=M.RenderStrategy|M.Static,Z=Object.assign(A(function(e,t){let{defaultOpen:n=!1,...r}=e,o=(0,f.useRef)(null),u=j(t,function(e,t=!0){return Object.assign(e,{[P]:t})}(e=>{o.current=e},void 0===e.as||e.as===f.Fragment)),l=(0,f.useRef)(null),i=(0,f.useRef)(null),a=(0,f.useReducer)(q,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:i,panelRef:l,buttonId:null,panelId:null}),[{disclosureState:s,buttonId:c},d]=a,p=v(e=>{d({type:1});let t=g.isServer?null:o instanceof Node?o.ownerDocument:null!=o&&o.hasOwnProperty("current")&&o.current instanceof Node?o.current.ownerDocument:document;if(!t||!c)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(c):t.getElementById(c);null==n||n.focus()}),m=(0,f.useMemo)(()=>({close:p}),[p]),y=(0,f.useMemo)(()=>({open:0===s,close:p}),[s,p]);return f.createElement(G.Provider,{value:a},f.createElement(V.Provider,{value:m},f.createElement(w,{value:_(s,{0:C.Open,1:C.Closed})},x({ourProps:{ref:u},theirProps:r,slot:y,defaultTag:z,name:"Disclosure"}))))}),{Button:A(function(e,t){let n=S(),{id:r=`headlessui-disclosure-button-${n}`,...o}=e,[u,l]=K("Disclosure.Button"),i=(0,f.useContext)(Y),a=null!==i&&i===u.panelId,s=(0,f.useRef)(null),c=j(s,t,a?null:u.buttonRef),d=T();(0,f.useEffect)(()=>{if(!a)return l({type:2,buttonId:r}),()=>{l({type:2,buttonId:null})}},[r,l,a]);let p=v(e=>{var t;if(a){if(1===u.disclosureState)return;switch(e.key){case B.Space:case B.Enter:e.preventDefault(),e.stopPropagation(),l({type:0}),null==(t=u.buttonRef.current)||t.focus()}}else switch(e.key){case B.Space:case B.Enter:e.preventDefault(),e.stopPropagation(),l({type:0})}}),m=v(e=>{e.key===B.Space&&e.preventDefault()}),y=v(t=>{var n;(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r})(t.currentTarget)||e.disabled||(a?(l({type:0}),null==(n=u.buttonRef.current)||n.focus()):l({type:0}))}),b=(0,f.useMemo)(()=>({open:0===u.disclosureState}),[u]),g=function(e,t){let[n,r]=(0,f.useState)(()=>E(e));return h(()=>{r(E(e))},[e.type,e.as]),h(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,s);return x({mergeRefs:d,ourProps:a?{ref:c,type:g,onKeyDown:p,onClick:y}:{ref:c,id:r,type:g,"aria-expanded":0===u.disclosureState,"aria-controls":u.linkedPanel?u.panelId:void 0,onKeyDown:p,onKeyUp:m,onClick:y},theirProps:o,slot:b,defaultTag:"button",name:"Disclosure.Button"})}),Panel:A(function(e,t){let n=S(),{id:r=`headlessui-disclosure-panel-${n}`,...o}=e,[u,l]=K("Disclosure.Panel"),{close:i}=function e(t){let n=(0,f.useContext)(V);if(null===n){let n=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),a=T(),s=j(t,u.panelRef,e=>{F(()=>l({type:e?4:5}))});(0,f.useEffect)(()=>(l({type:3,panelId:r}),()=>{l({type:3,panelId:null})}),[r,l]);let c=(0,f.useContext)(O),d=null!==c?(c&C.Open)===C.Open:0===u.disclosureState,p=(0,f.useMemo)(()=>({open:0===u.disclosureState,close:i}),[u,i]);return f.createElement(Y.Provider,{value:u.panelId},x({mergeRefs:a,ourProps:{ref:s,id:r},theirProps:o,slot:p,defaultTag:"div",features:X,visible:d,name:"Disclosure.Panel"}))})})},3407:function(e,t,n){"use strict";var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});t.Z=o},1415:function(e,t,n){"use strict";var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))});t.Z=o}}]);