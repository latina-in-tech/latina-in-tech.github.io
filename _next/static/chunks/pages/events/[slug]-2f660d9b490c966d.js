(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[942],{3591:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/[slug]",function(){return t(7519)}])},7519:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return C},default:function(){return E}});var r={};t.r(r),t.d(r,{MDXContext:function(){return s},MDXProvider:function(){return d},useMDXComponents:function(){return o},withMDXComponents:function(){return u}});var i=t(5893),c=t(7294),l=t(2746);let s=c.createContext({});function u(e){return function(n){let t=o(n.components);return c.createElement(e,{...n,allComponents:t})}}function o(e){let n=c.useContext(s);return c.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}let a={};function d({components:e,children:n,disableParentContext:t}){let r=o(e);return t&&(r=e||a),c.createElement(s.Provider,{value:r},n)}function f({compiledSource:e,frontmatter:n,scope:t,components:i={},lazy:s}){let[u,o]=(0,c.useState)(!s||"undefined"==typeof window);(0,c.useEffect)(()=>{if(s){let e=window.requestIdleCallback(()=>{o(!0)});return()=>window.cancelIdleCallback(e)}},[]);let a=(0,c.useMemo)(()=>{let i=Object.assign({opts:{...r,...l.jsxRuntime}},{frontmatter:n},t),c=Object.keys(i),s=Object.values(i),u=Reflect.construct(Function,c.concat(`${e}`));return u.apply(u,s).default},[t,e]);if(!u)return c.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let f=c.createElement(d,{components:i},c.createElement(a,null));return s?c.createElement("div",null,f):f}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var h=t(1664),m=t.n(h),p=t(5675),w=t.n(p);let x=e=>{let{title:n,src:t,slug:r}=e,c=(0,i.jsx)(w(),{height:720,width:1280,src:t,alt:"Thumbnail cover image ".concat(n)});return(0,i.jsx)(i.Fragment,{children:r?(0,i.jsx)(m(),{href:"/events/".concat(r),children:c}):c})};var j=t(8391);let v=()=>{let e=(0,j.h)().prerequisites;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Prerequisites"}),(0,i.jsx)("ol",{children:e.map((e,n)=>(0,i.jsx)("li",{children:e},n))})]})},_=()=>{let e=(0,j.h)().stacks;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Stacks"}),(0,i.jsx)("ol",{children:e.map((e,n)=>(0,i.jsx)("li",{children:e},n))})]})},k={Prerequisites:v,Stacks:_},b=e=>{let{source:n,frontMatter:t}=e,{setPrerequisites:r,setStacks:l}=(0,j.h)();return(0,c.useEffect)(()=>{r(t.prerequisites),l(t.stacks)},[r,l,t.prerequisites,t.stacks]),(0,i.jsx)("div",{children:(0,i.jsxs)("article",{className:"prose prose-green",children:[(0,i.jsx)("div",{className:"mb-4",children:(0,i.jsx)(x,{title:t.title,src:t.thumbnail})}),(0,i.jsx)("h1",{children:t.title}),(0,i.jsx)("p",{children:t.description}),(0,i.jsx)(f,{components:k,...n})]})})};var C=!0,E=b},2746:function(e,n,t){e.exports.jsxRuntime=t(5893)}},function(e){e.O(0,[61,774,888,179],function(){return e(e.s=3591)}),_N_E=e.O()}]);