(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[942],{3591:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/[slug]",function(){return n(3810)}])},8016:function(e,t,n){"use strict";var r=n(5893),i=n(1664),c=n.n(i),s=n(5675),l=n.n(s);let u=e=>{let{title:t,src:n,slug:i}=e,s=(0,r.jsx)(l(),{height:720,width:1280,src:n,alt:"Thumbnail cover image ".concat(t)});return(0,r.jsx)(r.Fragment,{children:i?(0,r.jsx)(c(),{href:"/events/".concat(i),children:s}):s})};t.Z=u},3810:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return v},default:function(){return _}});var r={};n.r(r),n.d(r,{MDXContext:function(){return l},MDXProvider:function(){return d},useMDXComponents:function(){return o},withMDXComponents:function(){return u}});var i=n(5893),c=n(7294),s=n(2746);let l=c.createContext({});function u(e){return function(t){let n=o(t.components);return c.createElement(e,{...t,allComponents:n})}}function o(e){let t=c.useContext(l);return c.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let a={};function d({components:e,children:t,disableParentContext:n}){let r=o(e);return n&&(r=e||a),c.createElement(l.Provider,{value:r},t)}function f({compiledSource:e,frontmatter:t,scope:n,components:i={},lazy:l}){let[u,o]=(0,c.useState)(!l||"undefined"==typeof window);(0,c.useEffect)(()=>{if(l){let e=window.requestIdleCallback(()=>{o(!0)});return()=>window.cancelIdleCallback(e)}},[]);let a=(0,c.useMemo)(()=>{let i=Object.assign({opts:{...r,...s.jsxRuntime}},{frontmatter:t},n),c=Object.keys(i),l=Object.values(i),u=Reflect.construct(Function,c.concat(`${e}`));return u.apply(u,l).default},[n,e]);if(!u)return c.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let f=c.createElement(d,{components:i},c.createElement(a,null));return l?c.createElement("div",null,f):f}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var h=n(8016),m=n(8391);let p=()=>{let e=(0,m.h)().prerequisites;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Prerequisites"}),(0,i.jsx)("ol",{children:e.map((e,t)=>(0,i.jsx)("li",{children:e},t))})]})},w=()=>{let e=(0,m.h)().stacks;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Stacks"}),(0,i.jsx)("ol",{children:e.map((e,t)=>(0,i.jsx)("li",{children:e},t))})]})},x={Prerequisites:p,Stacks:w},j=e=>{let{source:t,frontMatter:n}=e,{setPrerequisites:r,setStacks:s}=(0,m.h)();return(0,c.useEffect)(()=>{r(n.prerequisites),s(n.stacks)},[r,s,n.prerequisites,n.stacks]),(0,i.jsx)("div",{children:(0,i.jsxs)("article",{className:"prose prose-green",children:[(0,i.jsx)("div",{className:"mb-4",children:(0,i.jsx)(h.Z,{title:n.title,src:n.thumbnail})}),(0,i.jsx)("h1",{children:n.title}),(0,i.jsx)("p",{children:n.description}),(0,i.jsx)(f,{components:x,...t})]})})};var v=!0,_=j},2746:function(e,t,n){e.exports.jsxRuntime=n(5893)}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=3591)}),_N_E=e.O()}]);