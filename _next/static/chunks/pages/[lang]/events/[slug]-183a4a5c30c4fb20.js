(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[376],{3293:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/events/[slug]",function(){return r(6485)}])},6485:function(e,s,r){"use strict";r.r(s),r.d(s,{__N_SSG:function(){return k},default:function(){return w}});var t=r(5893),l=r(7294),a=r(7209),n=r(5890),i=r(5266),c=r(8792),d=r(5675),x=r.n(d),o=r(7222),m=r(4229),h=r(8203),u=r(4593),p=r(4527),f=r(7735);function g(e){let{slides:s}=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-2xl font-bold",children:"Slides"}),(0,t.jsx)("div",{className:"mx-auto mt-6 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3",children:s.map(e=>(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.url,children:(0,t.jsxs)("div",{className:"flex cursor-pointer items-center justify-center align-baseline gap-2 bg-slate-300 rounded-full py-2 px-4 font-semibold hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:600 dark:hover:text-slate-600",children:[(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)(f.Z,{className:"block h-6 w-6"})}),(0,t.jsxs)("p",{className:"text-center",children:[e.speakerName," - ",e.title]})]})},e.url))})]})}var j=r(7457),v=r(495),N=r(1163);let b=(e,s)=>e.map(e=>s.safeParse(JSON.parse(e))).reduce((e,s)=>s.success?{...e,items:[...e.items,s.data]}:{...e,errors:[...e.errors,...s.error.errors.map(e=>e.message)]},{items:[],errors:[]});var k=!0,w=e=>{let{source:s,frontMatter:r}=e,d=(0,N.useRouter)(),f=v.a.locales.filter(e=>(null==d?void 0:d.query.lang)===e)[0],k=(0,l.useMemo)(()=>{var e;return b(null!==(e=r.speakers)&&void 0!==e?e:[],a.R1)},[r.speakers]),w=(0,l.useMemo)(()=>{var e;return b(null!==(e=r.slides)&&void 0!==e?e:[],a.YX)},[r.slides]),y=k.items,_=w.items,E=[...k.errors,...w.errors],Z=(0,l.useCallback)(()=>{if(r.thumbnail)return(0,t.jsx)("div",{className:"flex-shrink-0",children:(0,t.jsx)(x(),{height:250,width:442.5,src:r.thumbnail,className:"object-cover group-hover:brightness-110",alt:"Event cover image ".concat(r.title)})})},[r.thumbnail,r.title]);return E.length>0&&j.W?(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("h2",{className:"text-xl font-bold text-gray-900 dark:text-slate-200",children:"Oops! Something went wrong while parsing speakers/slides"}),(0,t.jsx)("div",{className:"text-lg text-red-500",children:E.map((e,s)=>(0,t.jsx)("div",{children:e},s))})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.q,{children:(0,t.jsxs)("title",{children:["LiT - ",r.title]})}),(0,t.jsx)(o.Z,{lang:f}),(0,t.jsxs)("article",{className:"flex flex-col gap-4 px-4 pb-8 justify-center items-center",children:[(0,t.jsx)("h2",{className:"text-3xl font-extrabold text-center text-gray-900 dark:text-slate-200 sm:text-4xl",children:r.title}),(0,t.jsx)("div",{className:"md:px-20 w-full md:max-w-[60%]",children:(0,t.jsx)(p.Z,{event:r})}),(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center px-16 gap-8 md:flex-row",children:[(0,t.jsx)(m.Z,{event:r}),y.length>0&&(0,t.jsx)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-3",children:y.map(e=>(0,t.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,t.jsx)("img",{className:"object-cover w-20 h-20 rounded-full shadow-md",src:e.thumbnail,alt:"avatar"}),(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)("p",{className:"font-bold",children:e.name}),(0,t.jsxs)("p",{className:"text-sm",children:[e.role," ",e.company&&(0,t.jsxs)("span",{className:"font-semibold",children:["@ ",e.company]})]}),(0,t.jsxs)("a",{href:e.linkedinUrl,className:"text-slate-800 hover:text-slate-600 dark:text-slate-100 dark:hover:text-white",target:"_blank",rel:"noreferrer",children:[(0,t.jsx)("span",{className:"sr-only",children:"LinkedIn"}),(0,t.jsx)(n.NQh,{})]})]})]},e.name))})]}),(0,t.jsxs)("div",{className:"p-4 md:px-16 md:py-8 flex flex-col gap-8 items-center justify-center md:flex-row",children:[Z(),(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)(h.Z,{event:r}),_.length>0&&(0,t.jsx)(g,{slides:_})]})]}),(0,t.jsx)("div",{className:"max-w-6xl",children:(0,t.jsx)(i.U,{components:{a:e=>{let{...s}=e;return(0,t.jsx)("a",{...s,target:"_blank",className:"underline hover:bg-primary-lighter hover:rounded-xl hover:p-2 dark:hover:bg-primary-dark",onClick:e=>e.stopPropagation()})},h1:e=>{let{...s}=e;return(0,t.jsx)("h1",{...s,className:"text-primary dark:text-primary-lighter text-3xl font-bold"})},h2:e=>{let{...s}=e;return(0,t.jsx)("h2",{...s,className:"text-primary-dark dark:text-primary-light text-xl font-bold"})}},rehypePlugins:[c.Z],allowedElements:["p","b","i","em","strong","a","li","ul","ol","br","h1","h2"],children:s})})]})]})}},7457:function(e,s,r){"use strict";r.d(s,{W:function(){return t}});let t=!1}},function(e){e.O(0,[317,365,738,406,698,800,664,973,604,120,514,921,660,888,774,179],function(){return e(e.s=3293)}),_N_E=e.O()}]);