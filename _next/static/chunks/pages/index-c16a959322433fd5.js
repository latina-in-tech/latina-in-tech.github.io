(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(5145)}])},1342:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{noSSR:function(){return n},default:function(){return s}});let r=a(8754),i=(a(7294),r._(a(4304)));function l(e){return{default:(null==e?void 0:e.default)||e}}function n(e,t){return delete t.webpack,delete t.modules,e(t)}function s(e,t){let a=i.default,r={loading:e=>{let{error:t,isLoading:a,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e}),r={...r,...t};let s=r.loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?a({...r,loader:()=>null!=s?s().then(l):Promise.resolve(l(()=>null))}):(delete r.webpack,delete r.modules,n(a,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},43:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return l}});let r=a(8754),i=r._(a(7294)),l=i.default.createContext(null)},4304:function(e,t,a){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let r=a(8754),i=r._(a(7294)),l=a(43),n=[],s=[],o=!1;function d(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function A(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function n(){if(!r){let t=new c(e,a);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!o){let e=a.webpack?a.webpack():a.modules;e&&s.push(t=>{for(let a of e)if(t.includes(a))return n()})}function d(e,t){!function(){n();let e=i.default.useContext(l.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}();let s=i.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return i.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),i.default.useMemo(()=>{var t;return s.loading||s.error?i.default.createElement(a.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:r.retry}):s.loaded?i.default.createElement((t=s.loaded)&&t.default?t.default:t,e):null},[e,s])}return d.preload=()=>n(),d.displayName="LoadableComponent",i.default.forwardRef(d)}(d,e)}function u(e,t){let a=[];for(;e.length;){let r=e.pop();a.push(r(t))}return Promise.all(a).then(()=>{if(e.length)return u(e,t)})}A.preloadAll=()=>new Promise((e,t)=>{u(n).then(e,t)}),A.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let a=()=>(o=!0,t());u(s,e).then(a,a)})),window.__NEXT_PRELOADREADY=A.preloadReady;let h=A},283:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var r=a(5893),i=a(1664),l=a.n(i),n={src:"/_next/static/media/logo_light.c807001e.png",height:412,width:2111,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAFCAL3/ATpspeX//Qmfx5dSqAUUAA0FAnX2CQ0v+/v45BPy5XgFAWB2qMHw8QuusJmS8QcJuwv/BlztCAsr4vn33Rn575wdEtkgtYsr3OsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},s={src:"/_next/static/media/logo_dark.5014301a.png",height:412,width:2111,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAFCAL3/ATtrpeX7CwmfpnRGofLr7Avb7fv60+z6/h4NBBA4Hgr/AWBzqMHyDg2ucFQx4w4C/Ajn8vzz5PP76RgLBBQbDwUVi8MgrW46rN0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},o=a(5675),d=a.n(o),c=a(689),A=a(1415),u=a(3407),h=a(9449);function m(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}a(7294);var g=()=>(0,r.jsx)(c.p,{as:"nav",children:e=>{let{open:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"relative flex h-16 items-center justify-between",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center lg:hidden",children:(0,r.jsxs)(c.p.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 dark:focus:ring-slate-800",children:[(0,r.jsx)("span",{className:"sr-only",children:"Apri menu"}),t?(0,r.jsx)(A.Z,{className:"block h-6 w-6","aria-hidden":"true"}):(0,r.jsx)(u.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})}),(0,r.jsxs)("div",{className:"flex w-full flex-1 items-center justify-center lg:items-stretch lg:justify-between",children:[(0,r.jsx)("div",{className:"flex flex-shrink-0 items-center",children:(0,r.jsxs)(l(),{href:"/",children:[(0,r.jsx)(d(),{src:n,alt:"Logo LiT",height:60,width:250,title:"Home",className:"dark:drop-shadow-xl dark:hidden"}),(0,r.jsx)(d(),{src:s,alt:"Logo LiT",height:60,width:250,title:"Home",className:"dark:drop-shadow-xl hidden dark:block"})]})}),(0,r.jsx)("div",{className:"hidden items-center sm:ml-6 lg:flex",children:(0,r.jsx)("div",{className:"flex space-x-4",children:h.Z.map(e=>(0,r.jsxs)(l(),{href:e.href,target:"_blank",className:m(e.current?"bg-slate-700 text-white dark:bg-black dark:bg-opacity-4 dark:text-slate-300":"text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-black dark:hover:bg-opacity-20","flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium"),"aria-current":e.current?"page":void 0,children:[e.icon&&(0,r.jsx)(e.icon,{}),e.name]},e.name))})})]})]})}),(0,r.jsx)(c.p.Panel,{className:"lg:hidden",children:(0,r.jsx)("div",{className:"space-y-1 px-2 pt-2 pb-3",children:h.Z.map(e=>(0,r.jsx)(c.p.Button,{as:l(),href:e.href,"aria-current":e.current?"page":void 0,children:(0,r.jsxs)("span",{className:m(e.current?"bg-slate-700 text-white dark:bg-black dark:bg-opacity-40 dark:text-slate-300":"text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-black dark:hover:bg-opacity-20","flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-base font-medium"),children:[e.icon&&(0,r.jsx)(e.icon,{}),e.name]})},e.name))})})]})}})},9449:function(e,t,a){"use strict";var r=a(9583);let i=[{name:"Telegram",href:"https://t.me/+QazM4E1vaUM3NDQ0",icon:r.Ww5,current:!1},{name:"Twitter",href:"https://twitter.com/theLITCommunity",icon:r.fWC,current:!1},{name:"Linkedin",href:"https://www.linkedin.com/company/latina-in-tech",icon:r.ltd,current:!1},{name:"Instagram",href:"https://www.instagram.com/latinaintech_/",icon:r.Zf_,current:!1},{name:"Facebook",href:"https://www.facebook.com/LatinaInTech/",icon:r.Am9,current:!1},{name:"Github",href:"https://github.com/latina-in-tech",icon:r.hJX,current:!1},{name:"Youtube",href:"https://www.youtube.com/channel/UCSlDl55sw6QbFCDtlWn8Jig",icon:r.V2E,current:!1}];t.Z=i},5145:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return I},default:function(){return Q}});var r=a(5893),i=a(283),l=a(5675),n=a.n(l),s=a(1664),o=a.n(s),d={src:"/_next/static/media/latina.1190ebb1.png",height:1365,width:2048,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AGN5oKW4y4WXuYmgvoqctqO40HOFqQQ1fgCasceyytq81OC/ycewt7ukwtewxdZviq8Aa3J+mYaOn4GEwLGbwrSfmHd+pZKSc3mPAH1wS42AXIZ7W7CgfL+tjbWkjLajh4RwUwCSiVSBh0GFgEnIrILIqoGWkl6hk2GgjGTZx0Y/rnZsngAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},c=a(9449),A=a(7294);a(3454);let u=e=>{let[t,a]=(0,A.useState)(),r=(0,A.useCallback)(()=>{e&&fetch("https://api.codetabs.com/v1/proxy/?quest="+e).then(e=>e.text()).then(e=>{var t;let r=new DOMParser,i=r.parseFromString(e,"text/html"),l=i.getElementsByClassName("tgme_page_extra"),n=null===(t=l[0])||void 0===t?void 0:t.innerHTML;if(!n)return;let s=n.replace(/(members|online|\s+)/g,"").split(",");if(2!==s.length)return;let[o,d]=s.map(e=>parseInt(e,10));isNaN(o)||isNaN(d)||a({members:o,online:d})}).catch(e=>{})},[e]);return(0,A.useEffect)(()=>{r()},[r]),[t,r]},h=c.Z.find(e=>"Telegram"===e.name);var m=()=>{var e;let[t]=u(null!==(e=null==h?void 0:h.href)&&void 0!==e?e:"");return(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-1/2 dark:bg-black dark:bg-opacity-10"}),(0,r.jsx)("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"relative shadow-xl sm:overflow-hidden sm:rounded-2xl",children:[(0,r.jsxs)("div",{className:"absolute inset-0",children:[(0,r.jsx)(n(),{priority:!0,fill:!0,src:d,alt:"Piazza del Popolo",className:"object-cover"}),(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-primary-light to-primary-dark mix-blend-multiply"})]}),(0,r.jsxs)("div",{className:"relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8",children:[(0,r.jsxs)("h1",{className:"text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",children:[(0,r.jsx)("span",{className:"block text-white",children:"La community degli"}),(0,r.jsx)("span",{className:"block bg-primary-lighter bg-clip-text text-transparent",children:"Informatici Pontini"})]}),(0,r.jsx)("div",{className:"py-2 bg-opacity-50 mx-auto mt-6 max-w-lg rounded-md border border-transparent bg-slate-400 sm:max-w-3xl",children:(0,r.jsx)("p",{className:"text-center text-xl text-slate-100",children:"Eventi gratuiti per favorire la condivisione di conoscenze e la crescita professionale."})}),(0,r.jsx)("div",{className:"mx-auto mt-10 flex justify-center",children:h&&(0,r.jsxs)(o(),{href:h.href,target:"_blank",className:"flex items-center justify-between gap-2 rounded-md border border-transparent bg-primary bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm backdrop-blur-sm hover:bg-primary-dark sm:px-8",children:["Unisciti al Gruppo Telegram!",h.icon&&(0,r.jsx)(h.icon,{})]})}),h&&t&&(0,r.jsxs)("div",{className:"mx-auto mt-2 flex justify-center text-gray-400",children:[t.members," membri ",t.online," online"]})]})]})})]})},g=a(9008),p=a.n(g),x={src:"/_next/static/media/thespace_logo.3c333455.png",height:289,width:1043,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAPElEQVR42mN4yNJyk6HuqWrnp8rVH2vWfMhf9rF81TuHqQxAiSsM1Xc12j7XrP1QtvJj5aqP1WteO08BALw/HLn363zeAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},b={src:"/_next/static/media/grusp.9bd6323c.png",height:1700,width:2500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAhklEQVR42mOYPfHQlO5dLdXLakrmtFQvn9C2pathWX/rBoYZ/ftjw0qtzXyAZFH2xNri2V11EzrrlzIsmn46O7k9MriwOHtiXHh5UdaE+IiGpJh6huriOQHead6u8QWZfSF+2RYmHq4OoSU5kxi8XONcHSL627bMn3K8vmxBVnIbUGtL9TIAceE4dsoHyf0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},f={src:"/_next/static/media/rnh.a45b540f.png",height:685,width:1592,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AYU8/GwA/gH1AAT98wH/AhEABf0LAP0C+P8A/vkA/wHmAYh1tlMA/wIuAAH//P/7B+/78g0W/QXx+wkP+vH//QTqAYmIgEUA/wAkAgP97/XzBv3/8yMeBwr+9QMQ1OYA/Qn+KkUw8Udop3QAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},w={src:"/_next/static/media/viridex.9355d20a.png",height:203,width:161,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAxUlEQVR42mOAgwQGeRDlsTKjhKHPyZaBwYZBbfW5zWe+//j+cebRJY8Y2hlyGUBg47nt82cfX/b/15/ff6YfW/x/89kdBQwg8PDVo13nHl7+b7Qy7vOlJ9f/33h4cwYDCGw4tcX+watHv+edXPn/wcuHvzrW9hsygEExg0LWiqrAdSe3zAhZkOnOwMDAvGrPOhYGnQWR+QxTHSIYOhkSGGb7FunNjYxjYGBgYth78ZD5jnN7bfZeOuQEpJ32XDxovfPEHhYACxhau7JyLeIAAAAASUVORK5CYII=",blurWidth:6,blurHeight:8},k={src:"/_next/static/media/exo.14ae864c.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAh0lEQVR42mMgCTTuSeVs2JDC3rotmxVDsmlfuhCIrj8Tzdy2PpejeUsWO1yy/mqEW/3lqLj6q1FhQHZ4/bVI+7o16Rz118MYIQquRdjXX40MB2J/IA4GKrRuWJfOUXctnBFuSsv+NG44e00ue+POdHYUN/RszGBsOZDG2bIji6NlVzob0T4DACR/MaxIq18lAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},v={src:"/_next/static/media/klarna.886041e6.png",height:346,width:855,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZElEQVR4nA3GPRJAMBCG4f3CJH5nnIFC7do6F9AYvUrFKTRks1kp3nkfyLJfL/shM0adK0FRiABNJccLz7zqdh5q8xwGhtqyoo+ZCmt1GkYgLPv9+q8PUZRDQOUKSlcWQVc39w9Z5C4XAIqW8QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},y={src:"/_next/static/media/jetbrains.f5b8ba52.png",height:960,width:960,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA50lEQVR42mP4q1vKxAAETQ47mH6ZdfkyQMH/2ARGBhj4q5Vi9F+38uh/tda3/y3LWhmg4H+PHRPDX/VA238a8f+faac9y49PjT3FYPj5hb/hcgYY+OUUJvifISR1emDmkZkL5/1Pamr4dzza4ej/afxd+59ocDDAgJizc2B8XO5/BsXQv+smqc/+f4D/xte1QuYMu0q9wI7UZvCSObYtcvPFrQL/X+8TP/P/hqoCAwMQ/P/uxAKmf7j1/P9g/v//G/NcBij4f06RmeHHJw+wd35+8TD/8tbbmAEIKipkmP5fAEoyMDAAADUZXCWP+QnyAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};let j=[{name:"The Space",logo:{light:x,dark:x},url:"https://www.thespacecoworking.website/"},{name:"Grusp",logo:{light:b,dark:b},url:"https://www.grusp.org/"},{name:"Codemotion",logo:{light:{src:"/_next/static/media/light.71b62a0c.png",height:360,width:1468,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASklEQVR4nGPc7qzo5HmNX4iBmYGJ4T/DSwYGIIsByPrDyHDU8O13xh0uipLvfjHLirL/4RFh+/3h61/mf8yM/wXf/mJ5I8Xx6ykAoo8YrJsQW5UAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},dark:{src:"/_next/static/media/dark.c6ed9fa1.svg",height:180,width:734,blurWidth:0,blurHeight:0}},url:"https://www.codemotion.com/"},{name:"WeAreDevelopers",logo:{light:{src:"/_next/static/media/light.4dd205b3.png",height:390,width:710,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfklEQVR42mP4K+Zt/0fM2xBIRwJpOyDtBqS1gbTddzEvDob/on5a/0V91wLxHCBeDcTN/0X8Lf6L+mwDssMYGOQ5Ba5KOMYflLIxvSjpEHRU0tb0toRT7C4pawMGRQZOBl1ZFSWgImMGOUkDBnk+IwY5KSDNbgLkm5vJqsgBAImsJ+FusRkbAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},dark:{src:"/_next/static/media/dark.ca6900f1.png",height:390,width:710,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAiUlEQVR4nA3MMQrCMBhA4ZeYQlHQqoMgCCKI1tFNHPQEggdy8x7i5gU8hIuDi+imEFykS5dSkrT/8MGbngqz/YZWlJOXc2JjKX1MM7IUrs+4d1MBUlgewWQQOuIF9yusDtJnFaoq4XTZMRw8+WcjkvaXj01ZTB9s128VvJ+gdRfwQguZ0hAG5341bR8qWuOMEDkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},url:"https://www.wearedevelopers.com/"},{name:"React Native Heroes",logo:{light:f,dark:f},url:"https://reactnativeheroes.com/"},{name:"Viridex s.r.l.",logo:{light:w,dark:w},url:"https://www.viridex.it/"},{name:"Exo",logo:{light:k,dark:k},url:"https://www.exoitalia.it/"},{name:"Klarna",logo:{light:v,dark:v},url:"https://www.klarna.com/"},{name:"Jetbrains",logo:{light:y,dark:y},url:"https://www.jetbrains.com/"}],N=()=>(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-gray-900 dark:text-slate-200 sm:text-4xl",children:"Community Partners"}),(0,r.jsx)("div",{className:"mx-auto mt-6 flex justify-center",children:(0,r.jsx)("div",{className:"grid md:grid-cols-3 sm:grid-cols-1 gap-3 place-items-center px-6",children:j.map(e=>(0,r.jsxs)(o(),{href:e.url,target:"_blank",children:[(0,r.jsx)(n(),{src:e.logo.light,alt:e.name,style:{height:"auto",aspectRatio:"3/2",objectFit:"contain"},className:"rounded-md w-[180px] dark:hidden"}),(0,r.jsx)(n(),{src:e.logo.dark,alt:e.name,style:{height:"auto",aspectRatio:"3/2",objectFit:"contain"},className:"rounded-md w-[180px] dark:block hidden"})]},e.name))})})]});var _=a(120),C=a(5152),R=a.n(C);let E=A.forwardRef(function({title:e,titleId:t,...a},r){return A.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},a),e?A.createElement("title",{id:t},e):null,A.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"}))}),U=()=>(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h2",{className:"text-3xl font-bold text-gray-900 dark:text-slate-200 sm:text-4xl",children:"Feedback"}),(0,r.jsx)("p",{className:"mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-slate-400 sm:mt-4",children:"Lascia un feedback per migliorare la community!"}),(0,r.jsx)("div",{className:"mx-auto mt-6 flex justify-center",children:(0,r.jsxs)(o(),{href:"/feedback/new",className:"flex items-center justify-between gap-2 rounded-md border border-transparent bg-primary bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm backdrop-blur-sm hover:bg-primary-dark sm:px-8",children:["Lascia un Feedback! ",(0,r.jsx)(E,{className:"h-6 w-6"})]})})]}),O=R()(()=>Promise.all([a.e(406),a.e(237),a.e(295),a.e(396)]).then(a.bind(a,396)),{loadableGenerated:{webpack:()=>[396]},ssr:!1}),L=e=>{let t=_.ou.now();return e.filter(e=>{let a=_.ou.fromISO(e.date);return a<t})},D=e=>{let t=_.ou.now();return e.filter(e=>{let a=_.ou.fromISO(e.date);return a>=t})};var I=!0,Q=e=>{let{events:t}=e,a=(0,A.useMemo)(()=>L(t),[t]),l=(0,A.useMemo)(()=>D(t),[t]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p(),{children:[(0,r.jsx)("title",{children:"LiT - Latina In Tech"}),(0,r.jsx)("meta",{name:"description",content:"Community che raccoglie gli sviluppatori della provincia di Latina"}),(0,r.jsx)("meta",{name:"keywords",content:"Latina, User Group, Lazio, Roma, Sviluppatori Latina, Latina In Tech, LiT"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(i.Z,{}),(0,r.jsxs)("main",{className:"flex flex-col gap-6 px-4 pb-8",children:[(0,r.jsx)(m,{}),l.length>0&&(0,r.jsx)(O,{heading:"Prossimi Eventi",caption:"Fissa le date e non prendere impegni per i prossimi eventi della community!",events:l}),a.length>0&&(0,r.jsx)(O,{heading:"Eventi Passati",caption:"Peccato, questi eventi si sono gi\xe0 svolti! Segui la pagina per rimanere aggiornato sui prossimi appuntamenti.",events:a}),(0,r.jsx)(N,{}),(0,r.jsx)(U,{})]})]})}},5152:function(e,t,a){e.exports=a(1342)}},function(e){e.O(0,[445,216,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);