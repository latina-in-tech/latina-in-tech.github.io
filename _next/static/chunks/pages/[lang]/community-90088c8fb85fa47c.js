(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[420],{4739:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/community",function(){return r(7591)}])},7591:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return u},default:function(){return f}});var s=r(5893),a=r(7294),l=r(1604);l.Ry({fullname:l.Z_().min(3,{message:"Full name is required"}),bio:l.Z_().min(5).max(30),picture:l.Z_(),linkedin:l.Z_().optional(),twitter:l.Z_().optional(),github:l.Z_().optional(),website:l.Z_().optional()});let n=e=>"left"===e.kind,i=e=>"right"===e.kind;var c=r(5675),o=r.n(c),m=r(473);let d=e=>[e.github,e.linkedin,e.twitter,e.website].some(e=>!!e);var x=e=>{let{member:t}=e;return(0,s.jsxs)("div",{className:"grid grid-cols-4 gap-x-1 h-6 pt-1",children:[t.github&&(0,s.jsxs)("a",{href:t.github,className:"text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-white",target:"_blank",rel:"noreferrer",children:[(0,s.jsx)("span",{className:"sr-only",children:"GitHub"}),(0,s.jsx)(m.rFR,{})]}),t.linkedin&&(0,s.jsxs)("a",{href:t.linkedin,className:"text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-white",target:"_blank",rel:"noreferrer",children:[(0,s.jsx)("span",{className:"sr-only",children:"Linkedin"}),(0,s.jsx)(m.NQh,{})]}),t.twitter&&(0,s.jsxs)("a",{href:t.twitter,className:"text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-white",target:"_blank",rel:"noreferrer",children:[(0,s.jsx)("span",{className:"sr-only",children:"X"}),(0,s.jsx)(m.meP,{})]}),t.website&&(0,s.jsxs)("a",{href:t.website,className:"text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-white",target:"_blank",rel:"noreferrer",children:[(0,s.jsx)("span",{className:"sr-only",children:"Website"}),(0,s.jsx)(m.D14,{})]})]})},h=e=>{let{member:t}=e,[r,l]=a.useState(!1),n=d(t);return(0,s.jsxs)("div",{className:"flex items-start",onClick:()=>n?l(e=>!e):void 0,style:{cursor:n?"pointer":"default"},children:[(0,s.jsx)(o(),{height:48,width:48,src:"/assets/community/".concat(t.picture),className:"ring-2 dark:ring-gray-100 ring-gray-500 rounded-full ".concat(r?"grayscale-0":"grayscale"," hover:grayscale-0 transition-all duration-300"),alt:t.fullname}),(0,s.jsxs)("div",{className:"flex flex-col text-left ml-2 max-w-30",children:[(0,s.jsx)("p",{className:"text-sm leading-5 dark:text-slate-100 text-slate-800 font-normal",children:t.fullname}),!r&&(0,s.jsx)("p",{className:"flex text-sm h-6 dark:text-slate-400 text-slate-600 font-normal",children:t.bio}),n&&r&&(0,s.jsx)(x,{member:t})]})]})},u=!0,f=e=>{let{members:t,translations:r}=e,[l,c]=a.useState(!1),o=(0,a.useMemo)(()=>t.filter(n),[t]),m=(0,a.useMemo)(()=>{let e=t.filter(i);return l?e.sort(()=>.5-Math.random()):e},[l,t]);return(0,a.useEffect)(()=>{c(!0)},[]),o.length,(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("h2",{className:"text-xl font-bold text-gray-900 dark:text-slate-200 uppercase text-center",children:r.communityMembers.communityMembers}),(0,s.jsxs)("p",{className:"text-lg text-gray-700 dark:text-slate-200 text-center max-w-screen-md my-2",children:[r.communityMembers.doYouAttendOrFollowUs," \xa0",(0,s.jsx)("a",{href:"https://github.com/latina-in-tech/latina-in-tech.github.io/blob/main/docs/community/README.md",className:"text-blue-500 dark:text-blue-400",target:"_blank",rel:"noreferrer",children:r.communityMembers.readHere})]}),(0,s.jsx)("div",{className:"grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mt-4 max-w-screen-md gap-x-4 gap-y-6",children:m.map((e,t)=>{let{data:r}=e;return(0,s.jsx)(h,{member:r},"cm_".concat(t,"_").concat(r.fullname))})})]})}}},function(e){e.O(0,[738,872,604,888,774,179],function(){return e(e.s=4739)}),_N_E=e.O()}]);