(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{5168:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/events",function(){return l(8584)}])},6590:function(e,t,l){"use strict";l.d(t,{Z:function(){return m}});var s=l(5893),n=l(1664),a=l.n(n),r=l(5675),i=l.n(r),c=l(7209),x=l(7294),u=l(4229),o=l(8203),d=l(4527),h=l(1163),g=e=>{let{event:t}=e,l=(0,h.useRouter)(),n=(0,x.useCallback)(()=>{if(t.thumbnail)return(0,s.jsx)("div",{className:"flex-shrink-0",children:(0,s.jsx)(i(),{height:400,width:708,src:t.thumbnail,className:"object-cover group-hover:brightness-110",alt:"Event cover image ".concat(t.title)})})},[t.thumbnail,t.title]),r=(0,x.useMemo)(()=>(0,c.Up)(t),[t]),g=(0,x.useCallback)(()=>{let e="flex group flex-col overflow-hidden rounded-xl bg-slate-300 shadow-lg dark:bg-slate-800 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-600";return r?"".concat(e," opacity-70 grayScale"):e},[r]);return(0,s.jsx)(a(),{href:{pathname:"/[lang]/events/[slug]",query:{lang:l.query.lang,slug:t.slug}},legacyBehavior:!0,children:(0,s.jsxs)("div",{className:g(),children:[n(),(0,s.jsxs)("div",{className:"flex flex-1 flex-col gap-2 p-4",children:[(0,s.jsx)(u.Z,{event:t}),(0,s.jsx)(d.Z,{event:t}),(0,s.jsx)("div",{className:"text-xl p-2 font-bold text-gray-900 dark:text-slate-200 sm:text-2xl",children:(0,s.jsx)("p",{children:t.title})}),(0,s.jsx)(o.Z,{event:t})]})]})})};function m(e){let{heading:t,caption:l,events:n}=e;return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"mx-auto max-w-7xl",children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("h2",{className:"text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl",children:t}),(0,s.jsx)("p",{className:"mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-slate-400 sm:mt-4",children:l})]}),(0,s.jsx)("div",{className:"mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3",children:n.map(e=>(0,s.jsx)(g,{event:e},e.slug))})]})})}},8584:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSG:function(){return d}});var s=l(5893),n=l(7294),a=l(7222),r=l(6590),i=l(7209),c=l(9008),x=l.n(c),u=l(495),o=l(1163),d=!0;t.default=e=>{let{events:t,translations:l}=e,c=(0,o.useRouter)(),d=u.a.locales.filter(e=>(null==c?void 0:c.query.lang)===e)[0],h=(0,n.useMemo)(()=>(0,i.qP)(t),[t]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x(),{children:(0,s.jsx)("title",{children:l.events.title})}),(0,s.jsx)(a.Z,{lang:d}),(0,s.jsx)("div",{className:"p-4",children:(0,s.jsx)(r.Z,{heading:l.events.events,caption:l.events.hereYouCanSee,events:h})})]})}}},function(e){e.O(0,[317,365,406,698,800,664,973,604,120,514,660,888,774,179],function(){return e(e.s=5168)}),_N_E=e.O()}]);