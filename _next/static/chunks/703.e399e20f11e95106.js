(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[703],{9826:function(e,t,l){let a=l(7294),r=a.forwardRef(function({title:e,titleId:t,...l},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},l),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"}))});e.exports=r},4981:function(e,t,l){let a=l(7294),r=a.forwardRef(function({title:e,titleId:t,...l},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":t},l),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}))});e.exports=r},3703:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return m}});var a=l(5893),r=l(1664),s=l.n(r),n=l(5675),i=l.n(n),c=l(9826),d=l(4981),o=l(120),x=l(7294);let h=e=>{let{event:t}=e,l=(0,x.useCallback)(()=>{if(t.thumbnail)return(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)(i(),{height:400,width:708,src:t.thumbnail,className:"object-cover",alt:"Event cover image ".concat(t.title)})})},[t.thumbnail,t.title]),r=(0,x.useMemo)(()=>o.ou.fromISO(t.date),[t.date]),n=(0,x.useCallback)(()=>{let e=o.ou.now()>r,t="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800";return e?"".concat(t," opacity-70 grayScale"):t},[r]),h=r.toLocaleString(o.ou.DATETIME_MED_WITH_WEEKDAY);return(0,a.jsxs)("div",{className:n(),children:[l(),(0,a.jsxs)("div",{className:"flex flex-1 flex-col gap-2 p-4",children:[(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)(c,{className:"block h-6 w-6","aria-hidden":"true"}),(0,a.jsx)("p",{children:h})]}),(0,a.jsx)("div",{className:"flex",children:(0,a.jsxs)(s(),{href:t.maps,target:"_blank",className:"flex gap-2 flex-row",children:[(0,a.jsx)(d,{className:"block h-6 w-6","aria-hidden":"true"}),(0,a.jsx)("p",{children:t.place})]})}),(0,a.jsx)("div",{className:"text-xl font-bold text-gray-900 dark:text-slate-200 sm:text-2xl",children:(0,a.jsx)("p",{children:t.title})}),(0,a.jsx)("div",{className:"italic tracking-wide",children:(0,a.jsx)("p",{children:t.description})})]})]})};function m(e){let{heading:t,caption:l,events:r}=e;return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"mx-auto max-w-7xl",children:[(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("h2",{className:"text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl",children:t}),(0,a.jsx)("p",{className:"mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-slate-400 sm:mt-4",children:l})]}),(0,a.jsx)("div",{className:"mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3",children:r.map(e=>(0,a.jsx)(h,{event:e},e.slug))})]})})}}}]);