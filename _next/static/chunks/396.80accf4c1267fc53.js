"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{396:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var l=a(5893),s=a(1664),n=a.n(s),i=a(5675),r=a.n(i),c=a(9871),o=a(6850),d=a(120),x=a(7294),m=a(9831),u=a(5266),h=a(8792);let g=e=>{let{eventDateTime:t,eventDuration:a,place:s,name:n,description:i}=e,r=(0,x.useMemo)(()=>"".concat(t.year,"-").concat(t.month.toString().padStart(2,"0"),"-").concat(t.day.toString().padStart(2,"0")),[t.day,t.month,t.year]),c=(0,x.useCallback)(e=>"".concat(e.hour.toString().padStart(2,"0"),":").concat(e.minute.toString().padStart(2,"0")),[]),o=(0,x.useMemo)(()=>t.plus({minutes:a}),[t,a]);return(0,l.jsx)(m.m,{name:n,description:i,startDate:r,startTime:c(t),endTime:c(o),timeZone:"Europe/Rome",location:s,buttonStyle:"date",buttonsList:!0,hideBackground:!0,size:"3",label:"aggiungi al calendario",options:["Google","Apple","Yahoo","Outlook.com","Microsoft365","iCal"]})};var p=e=>{let{event:t}=e,a=(0,x.useCallback)(()=>{if(t.thumbnail)return(0,l.jsx)("div",{className:"flex-shrink-0",children:(0,l.jsx)(r(),{height:400,width:708,src:t.thumbnail,className:"object-cover",alt:"Event cover image ".concat(t.title)})})},[t.thumbnail,t.title]),s=(0,x.useMemo)(()=>d.ou.fromISO(t.date),[t.date]),i=d.ou.now()>s,m=(0,x.useCallback)(()=>{let e=d.ou.now()>s,t="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800";return e?"".concat(t," opacity-70 grayScale"):t},[s]),p=s.toLocaleString(d.ou.DATETIME_MED_WITH_WEEKDAY);return(0,l.jsxs)("div",{className:m(),children:[a(),(0,l.jsxs)("div",{className:"flex flex-1 flex-col gap-2 p-4",children:[(0,l.jsx)("div",{className:"flex gap-2",children:i?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.Z,{className:"block h-6 w-6","aria-hidden":"true"}),(0,l.jsx)("p",{children:p})]}):(0,l.jsx)(g,{eventDuration:t.duration||120,description:t.description,eventDateTime:s,place:t.maps,name:t.title})}),(0,l.jsx)("div",{className:"flex",children:(0,l.jsxs)(n(),{href:t.maps,target:"_blank",className:"flex gap-2 flex-row",children:[(0,l.jsx)(o.Z,{className:"block h-6 w-6","aria-hidden":"true"}),(0,l.jsx)("p",{children:t.place})]})}),(0,l.jsx)("div",{className:"text-xl font-bold text-gray-900 dark:text-slate-200 sm:text-2xl",children:(0,l.jsx)("p",{children:t.title})}),(0,l.jsx)("div",{className:"italic tracking-wide",children:(0,l.jsx)(u.U,{components:{a:e=>{let{node:t,...a}=e;return(0,l.jsx)("a",{...a,target:"_blank",style:{textDecoration:"underline"}})}},rehypePlugins:[h.Z],allowedElements:["p","b","i","em","strong","a","li","ul","ol","br"],children:t.description})})]})]})};function j(e){let{heading:t,caption:a,events:s}=e;return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"mx-auto max-w-7xl",children:[(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsx)("h2",{className:"text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl",children:t}),(0,l.jsx)("p",{className:"mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-slate-400 sm:mt-4",children:a})]}),(0,l.jsx)("div",{className:"mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3",children:s.map(e=>(0,l.jsx)(p,{event:e},e.slug))})]})})}}}]);