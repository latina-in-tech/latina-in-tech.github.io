(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3454:function(e,t,a){"use strict";var i,r;e.exports=(null==(i=a.g.process)?void 0:i.env)&&"object"==typeof(null==(r=a.g.process)?void 0:r.env)?a.g.process:a(7663)},8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(4100)}])},3876:function(e,t,a){"use strict";a.d(t,{I:function(){return n},a:function(){return l}});var i=a(5893),r=a(7294),s=a(9831);let n=120,l=e=>{let{eventDateTime:t,eventDuration:a,place:n,name:l,description:c}=e,o=(0,r.useMemo)(()=>"".concat(t.year,"-").concat(t.month.toString().padStart(2,"0"),"-").concat(t.day.toString().padStart(2,"0")),[t.day,t.month,t.year]),A=(0,r.useCallback)(e=>"".concat(e.hour.toString().padStart(2,"0"),":").concat(e.minute.toString().padStart(2,"0")),[]),d=(0,r.useMemo)(()=>t.plus({minutes:a}),[t,a]);return(0,i.jsx)(s.m,{name:l,description:c,startDate:o,startTime:A(t),endTime:A(d),timeZone:"Europe/Rome",location:n,buttonStyle:"date",buttonsList:!0,hideBackground:!0,size:"3",label:"aggiungi al calendario",options:["Google","Apple","Yahoo","Outlook.com","Microsoft365","iCal"]})}},7997:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var i=a(5893),r=a(1664),s=a.n(r),n={src:"/_next/static/media/logo_light.c807001e.png",height:412,width:2111,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAFCAL3/ATpspeX//Qmfx5dSqAUUAA0FAnX2CQ0v+/v45BPy5XgFAWB2qMHw8QuusJmS8QcJuwv/BlztCAsr4vn33Rn575wdEtkgtYsr3OsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},l={src:"/_next/static/media/logo_dark.5014301a.png",height:412,width:2111,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAFCAL3/ATtrpeX7CwmfpnRGofLr7Avb7fv60+z6/h4NBBA4Hgr/AWBzqMHyDg2ucFQx4w4C/Ajn8vzz5PP76RgLBBQbDwUVi8MgrW46rN0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},c=a(5675),o=a.n(c),A=a(689),d=a(1415),m=a(3407),h=a(6624),u=a(7294),g=a(9332);function x(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var p=()=>{let e=(0,g.usePathname)(),t=(0,u.useMemo)(()=>h.Z.map(t=>({...t,current:t.href===e})),[e]);return(0,i.jsx)(A.p,{as:"nav",children:e=>{let{open:a}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"relative flex h-16 items-center justify-between",children:[(0,i.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center lg:hidden",children:(0,i.jsxs)(A.p.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-800 dark:focus:ring-slate-800",children:[(0,i.jsx)("span",{className:"sr-only",children:"Apri menu"}),a?(0,i.jsx)(d.Z,{className:"block h-6 w-6","aria-hidden":"true"}):(0,i.jsx)(m.Z,{className:"block h-6 w-6","aria-hidden":"true"})]})}),(0,i.jsxs)("div",{className:"flex w-full flex-1 items-center justify-center lg:items-stretch lg:justify-between",children:[(0,i.jsx)("div",{className:"flex flex-shrink-0 items-center",children:(0,i.jsxs)(s(),{href:"/",children:[(0,i.jsx)(o(),{src:n,alt:"Logo LiT",height:60,width:250,title:"Home",className:"dark:drop-shadow-xl dark:hidden"}),(0,i.jsx)(o(),{src:l,alt:"Logo LiT",height:60,width:250,title:"Home",className:"dark:drop-shadow-xl hidden dark:block"})]})}),(0,i.jsx)("div",{className:"hidden items-center sm:ml-6 lg:flex",children:(0,i.jsx)("div",{className:"flex space-x-4",children:t.map(e=>(0,i.jsx)(s(),{href:e.href,target:e.local?void 0:"_blank",className:x(e.current?"bg-slate-700 text-white dark:bg-black dark:bg-opacity-4 dark:text-slate-300":"text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-black dark:hover:bg-opacity-20","flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium"),"aria-current":e.current?"page":void 0,children:(0,i.jsx)(e.icon,{fontSize:24})},e.name))})})]})]})}),(0,i.jsx)(A.p.Panel,{className:"lg:hidden",children:(0,i.jsx)("div",{className:"space-y-1 px-2 pt-2 pb-3",children:t.map(e=>(0,i.jsx)(A.p.Button,{as:s(),href:e.href,"aria-current":e.current?"page":void 0,children:(0,i.jsxs)("span",{className:x(e.current?"bg-slate-700 text-white dark:bg-black dark:bg-opacity-40 dark:text-slate-300":"text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-black dark:hover:bg-opacity-20","flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-base font-medium"),children:[(0,i.jsx)(e.icon,{fontSize:24}),(0,i.jsx)("p",{children:e.name})]})},e.name))})})]})}})}},2756:function(e,t,a){"use strict";a.d(t,{m:function(){return s}});var i=a(5893);a(7294);var r=a(5434);let s=()=>(0,i.jsx)("section",{className:"sm:my-10",children:(0,i.jsx)("div",{className:"mx-auto px-4 sm:px-6 lg:px-8",children:(0,i.jsx)("div",{className:"relative -mx-4 overflow-hidden bg-slate-300 py-16 px-4 dark:bg-slate-800 sm:px-6 md:mx-0 md:rounded-3xl md:px-16 xl:px-24",children:(0,i.jsxs)("div",{className:"relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 text-gray-900 dark:text-slate-200 xl:max-w-none xl:grid-cols-2",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{className:"text-4xl font-extrabold tracking-tight  sm:text-4xl",children:[(0,i.jsx)("span",{children:"Rimaniamo in contatto?"}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{className:"bg-gradient-to-br from-primary-dark to-primary-light dark:from-primary dark:to-primary-lighter bg-clip-text text-transparent",children:"Tieniti sempre aggiornato."})]}),(0,i.jsx)("p",{className:"mt-2 text-lg",children:"Unisciti alla nostra community! Iscriviti per non perderti gli eventi e le attivit\xe0 che organizzeremo. Stay connected, stay tech-savvy!"})]}),(0,i.jsxs)("form",{action:"https://github.us21.list-manage.com/subscribe/post?u=08bff1fa2d8bd95bf693be2ab&id=8489b0a8a1&f_id=00bbf0e6f0",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_self",children:[(0,i.jsxs)("h3",{className:"text-lg font-semibold tracking-tight text-primary-dark dark:text-primary-light",children:["Iscriviti alla nostra newsletter",(0,i.jsx)("span",{"aria-hidden":"true",children:"↓"})]}),(0,i.jsx)("span",{className:"hidden",children:(0,i.jsx)("input",{type:"text",name:"b_08bff1fa2d8bd95bf693be2ab_8489b0a8a1",tabIndex:-1,value:"",readOnly:!0})}),(0,i.jsx)("div",{hidden:!0,children:(0,i.jsx)("input",{type:"hidden",name:"tags",value:"2971438"})}),(0,i.jsxs)("div",{className:"mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-800",children:[(0,i.jsx)("input",{type:"email",name:"EMAIL",id:"mce-EMAIL",required:!0,placeholder:"Indirizzo email",className:"-my-2.5 flex-auto border-none bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:ring-0"}),(0,i.jsxs)("button",{className:"inline-flex justify-center rounded-2xl bg-primary bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm backdrop-blur-sm hover:bg-primary-dark sm:px-8",type:"submit",children:[(0,i.jsx)("span",{className:"sr-only sm:not-sr-only",children:"Iscriviti subito"}),(0,i.jsx)("span",{className:"sm:hidden",children:(0,i.jsx)(r.LHg,{})})]})]})]}),(0,i.jsxs)("a",{href:"http://eepurl.com/iFNvbw",title:"Mailchimp: l’email marketing \xe8 facile e divertente",children:[(0,i.jsx)("span",{className:"hidden dark:block",children:(0,i.jsx)("img",{className:" refferal_badge",src:"https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-light.svg",alt:"Intuit Mailchimp",style:{width:"220px",height:"40px",display:"flex",padding:"2px 0px",justifyContent:"center",alignItems:"center"}})}),(0,i.jsx)("span",{className:"block dark:hidden",children:(0,i.jsx)("img",{className:"refferal_badge",src:"https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg",alt:"Intuit Mailchimp",style:{width:"220px",height:"40px",display:"flex",padding:"2px 0px",justifyContent:"center",alignItems:"center"}})})]})]})})})})},1814:function(e,t,a){"use strict";a.d(t,{SB:function(){return n},Up:function(){return r},Yu:function(){return l},qP:function(){return c}});var i=a(120);let r=e=>i.ou.fromISO(e.date)<i.ou.now(),s=e=>i.ou.fromISO(e.date)>=i.ou.now(),n=e=>e.filter(r),l=e=>e.filter(s),c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desc";return e.sort((e,a)=>i.ou.fromISO(("asc"===t?e:a).date).toMillis()-i.ou.fromISO(("asc"===t?a:e).date).toMillis())}},6624:function(e,t,a){"use strict";var i=a(9583);let r=[{name:"Admin team",href:"/admins/team",local:!0,icon:a(9352).Qeh,current:!1},{name:"Telegram",href:"https://t.me/+QazM4E1vaUM3NDQ0",icon:i.Ww5,current:!1},{name:"Twitter",href:"https://twitter.com/theLITCommunity",icon:i.fWC,current:!1},{name:"Linkedin",href:"https://www.linkedin.com/company/latina-in-tech",icon:i.ltd,current:!1},{name:"Instagram",href:"https://www.instagram.com/latinaintech_/",icon:i.Zf_,current:!1},{name:"Facebook",href:"https://www.facebook.com/LatinaInTech/",icon:i.Am9,current:!1},{name:"Github",href:"https://github.com/latina-in-tech",icon:i.hJX,current:!1},{name:"Youtube",href:"https://www.youtube.com/channel/UCSlDl55sw6QbFCDtlWn8Jig",icon:i.V2E,current:!1}];t.Z=r},4100:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return H},default:function(){return P}});var i=a(5893),r=a(7997),s=a(5675),n=a.n(s),l=a(1664),c=a.n(l),o={src:"/_next/static/media/latina.a6f155df.jpg",height:683,width:1024,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAKAib//EABwQAAMAAQUAAAAAAAAAAAAAAAECAwAEERIhMv/aAAgBAQABPwAUaujdaBDuTPwvY45//8QAGREAAgMBAAAAAAAAAAAAAAAAAQIAAwQh/9oACAECAQE/AE06AOWtP//EABkRAAIDAQAAAAAAAAAAAAAAAAIRAAEDE//aAAgBAwEBPwDlnaYDP//Z",blurWidth:8,blurHeight:5},A=a(6624),d=a(7294);a(3454);let m=e=>{let[t,a]=(0,d.useState)(),i=(0,d.useCallback)(()=>{e&&fetch("https://api.codetabs.com/v1/proxy/?quest="+e).then(e=>e.text()).then(e=>{var t;let i=null===(t=new DOMParser().parseFromString(e,"text/html").getElementsByClassName("tgme_page_extra")[0])||void 0===t?void 0:t.innerHTML;if(!i)return;let r=i.replace(/(members|online|\s+)/g,"").split(",");if(2!==r.length)return;let[s,n]=r.map(e=>parseInt(e,10));isNaN(s)||isNaN(n)||a({members:s,online:n})}).catch(e=>{})},[e]);return(0,d.useEffect)(()=>{i()},[i]),[t,i]},h=A.Z.find(e=>"Telegram"===e.name);var u=()=>{var e;let[t]=m(null!==(e=null==h?void 0:h.href)&&void 0!==e?e:"");return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{className:"absolute inset-x-0 bottom-0 h-1/2 dark:bg-black dark:bg-opacity-10"}),(0,i.jsx)("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"relative shadow-xl sm:overflow-hidden sm:rounded-2xl",children:[(0,i.jsxs)("div",{className:"absolute inset-0",children:[(0,i.jsx)(n(),{priority:!0,fill:!0,src:o,alt:"Piazza del Popolo",className:"object-cover"}),(0,i.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-primary-light to-primary-dark mix-blend-multiply"})]}),(0,i.jsxs)("div",{className:"relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8",children:[(0,i.jsxs)("h1",{className:"text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",children:[(0,i.jsx)("span",{className:"block text-white",children:"La community degli"}),(0,i.jsx)("span",{className:"block bg-primary-lighter bg-clip-text text-transparent",children:"Informatici Pontini"})]}),(0,i.jsx)("div",{className:"py-2 bg-opacity-50 mx-auto mt-6 max-w-lg rounded-md border border-transparent bg-slate-400 sm:max-w-3xl",children:(0,i.jsx)("p",{className:"text-center text-xl text-slate-100",children:"Eventi gratuiti per favorire la condivisione di conoscenze e la crescita professionale."})}),(0,i.jsx)("div",{className:"mx-auto mt-10 flex justify-center",children:h&&(0,i.jsxs)(c(),{href:h.href,target:"_blank",className:"flex items-center justify-between gap-2 rounded-md border border-transparent bg-primary bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm backdrop-blur-sm hover:bg-primary-dark sm:px-8",children:["Unisciti al Gruppo Telegram!",h.icon&&(0,i.jsx)(h.icon,{})]})}),h&&t&&(0,i.jsxs)("div",{className:"mx-auto mt-2 flex justify-center text-gray-400",children:[t.members," membri ",t.online," online"]})]})]})})]})},g=a(1814),x=a(9008),p=a.n(x),b={src:"/_next/static/media/thespace_logo.3c333455.png",height:289,width:1043,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAAPElEQVR42mN4yNJyk6HuqWrnp8rVH2vWfMhf9rF81TuHqQxAiSsM1Xc12j7XrP1QtvJj5aqP1WteO08BALw/HLn363zeAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},f={src:"/_next/static/media/grusp.9bd6323c.png",height:1700,width:2500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAhklEQVR42mOYPfHQlO5dLdXLakrmtFQvn9C2pathWX/rBoYZ/ftjw0qtzXyAZFH2xNri2V11EzrrlzIsmn46O7k9MriwOHtiXHh5UdaE+IiGpJh6huriOQHead6u8QWZfSF+2RYmHq4OoSU5kxi8XONcHSL627bMn3K8vmxBVnIbUGtL9TIAceE4dsoHyf0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},w={src:"/_next/static/media/italia_opensource.7819f6bf.png",height:600,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA30lEQVR42mNoXLqX4+D1N+IT11xnYSj4w+hTu5eZARnYT5jgtOPsvdw1fjWVYUVb4hlqjxbxVB9KYmAAgurDTAwMXVl863YelzjLwCAVWbzFmKHumJZo9UF5hupDjAwMQMBddUKFofxQNEPd8QqGmiPZ7NWHUhhqDosyMABBzSEmIHFQTrj2cLBE9UE3oGQ4UDKCsfqQCAMc1ByWAGI9oJGaQB3SQHutgXwjIN8OiCUYgBwTIG4ESuYCcRlQcAaQnweky4FYjwFIsAAluICCHAzVQJoBCIBsIOZnqDnECgDU2FWURZR7sAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},v={src:"/_next/static/media/rnh.a45b540f.png",height:685,width:1592,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AYU8/GwA/gH1AAT98wH/AhEABf0LAP0C+P8A/vkA/wHmAYh1tlMA/wIuAAH//P/7B+/78g0W/QXx+wkP+vH//QTqAYmIgEUA/wAkAgP97/XzBv3/8yMeBwr+9QMQ1OYA/Qn+KkUw8Udop3QAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},j={src:"/_next/static/media/viridex.9355d20a.png",height:203,width:161,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAxUlEQVR42mOAgwQGeRDlsTKjhKHPyZaBwYZBbfW5zWe+//j+cebRJY8Y2hlyGUBg47nt82cfX/b/15/ff6YfW/x/89kdBQwg8PDVo13nHl7+b7Qy7vOlJ9f/33h4cwYDCGw4tcX+watHv+edXPn/wcuHvzrW9hsygEExg0LWiqrAdSe3zAhZkOnOwMDAvGrPOhYGnQWR+QxTHSIYOhkSGGb7FunNjYxjYGBgYth78ZD5jnN7bfZeOuQEpJ32XDxovfPEHhYACxhau7JyLeIAAAAASUVORK5CYII=",blurWidth:6,blurHeight:8},k={src:"/_next/static/media/exo.14ae864c.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAh0lEQVR42mMgCTTuSeVs2JDC3rotmxVDsmlfuhCIrj8Tzdy2PpejeUsWO1yy/mqEW/3lqLj6q1FhQHZ4/bVI+7o16Rz118MYIQquRdjXX40MB2J/IA4GKrRuWJfOUXctnBFuSsv+NG44e00ue+POdHYUN/RszGBsOZDG2bIji6NlVzob0T4DACR/MaxIq18lAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},y={src:"/_next/static/media/klarna.886041e6.png",height:346,width:855,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZElEQVR4nA3GPRJAMBCG4f3CJH5nnIFC7do6F9AYvUrFKTRks1kp3nkfyLJfL/shM0adK0FRiABNJccLz7zqdh5q8xwGhtqyoo+ZCmt1GkYgLPv9+q8PUZRDQOUKSlcWQVc39w9Z5C4XAIqW8QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},N={src:"/_next/static/media/jetbrains.f5b8ba52.png",height:960,width:960,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA50lEQVR42mP4q1vKxAAETQ47mH6ZdfkyQMH/2ARGBhj4q5Vi9F+38uh/tda3/y3LWhmg4H+PHRPDX/VA238a8f+faac9y49PjT3FYPj5hb/hcgYY+OUUJvifISR1emDmkZkL5/1Pamr4dzza4ej/afxd+59ocDDAgJizc2B8XO5/BsXQv+smqc/+f4D/xte1QuYMu0q9wI7UZvCSObYtcvPFrQL/X+8TP/P/hqoCAwMQ/P/uxAKmf7j1/P9g/v//G/NcBij4f06RmeHHJw+wd35+8TD/8tbbmAEIKipkmP5fAEoyMDAAADUZXCWP+QnyAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};let E=[{name:"The Space",logo:{light:b,dark:b},url:"https://www.thespacecoworking.website/"},{name:"Grusp",logo:{light:f,dark:f},url:"https://www.grusp.org/"},{name:"Codemotion",logo:{light:{src:"/_next/static/media/light.71b62a0c.png",height:360,width:1468,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASklEQVR4nGPc7qzo5HmNX4iBmYGJ4T/DSwYGIIsByPrDyHDU8O13xh0uipLvfjHLirL/4RFh+/3h61/mf8yM/wXf/mJ5I8Xx6ykAoo8YrJsQW5UAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},dark:{src:"/_next/static/media/dark.c6ed9fa1.svg",height:180,width:734,blurWidth:0,blurHeight:0}},url:"https://www.codemotion.com/"},{name:"WeAreDevelopers",logo:{light:{src:"/_next/static/media/light.4dd205b3.png",height:390,width:710,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfklEQVR42mP4K+Zt/0fM2xBIRwJpOyDtBqS1gbTddzEvDob/on5a/0V91wLxHCBeDcTN/0X8Lf6L+mwDssMYGOQ5Ba5KOMYflLIxvSjpEHRU0tb0toRT7C4pawMGRQZOBl1ZFSWgImMGOUkDBnk+IwY5KSDNbgLkm5vJqsgBAImsJ+FusRkbAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},dark:{src:"/_next/static/media/dark.ca6900f1.png",height:390,width:710,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAiUlEQVR4nA3MMQrCMBhA4ZeYQlHQqoMgCCKI1tFNHPQEggdy8x7i5gU8hIuDi+imEFykS5dSkrT/8MGbngqz/YZWlJOXc2JjKX1MM7IUrs+4d1MBUlgewWQQOuIF9yusDtJnFaoq4XTZMRw8+WcjkvaXj01ZTB9s128VvJ+gdRfwQguZ0hAG5341bR8qWuOMEDkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},url:"https://www.wearedevelopers.com/"},{name:"React Native Heroes",logo:{light:v,dark:v},url:"https://reactnativeheroes.com/"},{name:"Viridex s.r.l.",logo:{light:j,dark:j},url:"https://www.viridex.it/"},{name:"Exo",logo:{light:k,dark:k},url:"https://www.exoitalia.it/"},{name:"Klarna",logo:{light:y,dark:y},url:"https://www.klarna.com/"},{name:"Jetbrains",logo:{light:N,dark:N},url:"https://www.jetbrains.com/"},{name:"Italia Open-Source",logo:{light:w,dark:w},url:"https://italiaopensource.com/"}],C=()=>(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("h2",{className:"text-3xl font-bold text-gray-900 dark:text-slate-200 sm:text-4xl",children:"Community Partners"}),(0,i.jsx)("div",{className:"mx-auto mt-4 md:mt-6 flex justify-center",children:(0,i.jsx)("div",{className:"grid md:grid-cols-5 grid-cols-2 gap-3 place-items-center px-6",children:E.map(e=>(0,i.jsxs)(c(),{href:e.url,target:"_blank",children:[(0,i.jsx)(n(),{src:e.logo.light,alt:e.name,style:{height:"4rem",aspectRatio:"3/2",objectFit:"contain"},className:"rounded-md w-[180px] dark:hidden"}),(0,i.jsx)(n(),{src:e.logo.dark,alt:e.name,style:{height:"4rem",aspectRatio:"3/2",objectFit:"contain"},className:"rounded-md w-[180px] dark:block hidden"})]},e.name))})})]}),U=d.forwardRef(function({title:e,titleId:t,...a},i){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":t},a),e?d.createElement("title",{id:t},e):null,d.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"}))}),I=()=>(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("h2",{className:"text-3xl font-bold text-gray-900 dark:text-slate-200 sm:text-4xl",children:"Feedback"}),(0,i.jsx)("p",{className:"mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-slate-400 sm:mt-4",children:"Lascia un feedback per migliorare la community!"}),(0,i.jsx)("div",{className:"mx-auto mt-6 flex justify-center",children:(0,i.jsxs)(c(),{href:"/feedback/new",className:"flex items-center justify-between gap-2 rounded-md border border-transparent bg-primary bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm backdrop-blur-sm hover:bg-primary-dark sm:px-8",children:["Lascia un Feedback! ",(0,i.jsx)(U,{className:"h-6 w-6"})]})})]});var Q=a(9871),R=a(6850),B=a(120),D=a(3876),S=a(5266),L=a(8792),T=a(454),M=e=>{let{event:t}=e,a=(0,d.useCallback)(()=>{if(t.thumbnail)return(0,i.jsx)("div",{className:"flex-shrink-0",children:(0,i.jsx)(n(),{height:400,width:708,src:t.thumbnail,className:"object-cover",alt:"Event cover image ".concat(t.title)})})},[t.thumbnail,t.title]),r=(0,d.useMemo)(()=>B.ou.fromISO(t.date),[t.date]),s=(0,d.useMemo)(()=>(0,g.Up)(t),[t]),l=(0,d.useCallback)(()=>{let e="flex flex-col overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-800";return s?"".concat(e," opacity-70 grayScale"):e},[s]),o=r.toLocaleString(B.ou.DATETIME_MED_WITH_WEEKDAY,{locale:"it"});return(0,i.jsxs)("div",{className:l(),children:[a(),(0,i.jsxs)("div",{className:"flex flex-1 flex-col gap-2 p-4",children:[(0,i.jsx)("div",{className:"flex gap-2",children:s?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Q.Z,{className:"block h-6 w-6","aria-hidden":"true"}),(0,i.jsx)("p",{children:o})]}):(0,i.jsx)(D.a,{eventDuration:t.duration||D.I,description:t.description,eventDateTime:r,place:t.maps,name:t.title})}),(0,i.jsx)("div",{className:"flex",children:(0,i.jsxs)(c(),{href:t.maps,target:"_blank",className:"flex gap-2 flex-row",children:[(0,i.jsx)(R.Z,{className:"block h-6 w-6","aria-hidden":"true"}),(0,i.jsx)("p",{children:t.place})]})}),t.youtubeUrl&&(0,i.jsx)("div",{className:"flex",children:(0,i.jsxs)(c(),{href:t.youtubeUrl,target:"_blank",className:"flex gap-2 flex-row",children:[(0,i.jsx)(T.Vmk,{className:"block h-6 w-6","aria-hidden":"true"}),(0,i.jsx)("p",{children:"vedi su youtube"})]})}),(0,i.jsx)("div",{className:"text-xl font-bold text-gray-900 dark:text-slate-200 sm:text-2xl",children:(0,i.jsx)("p",{children:t.title})}),(0,i.jsx)("div",{className:"italic tracking-wide",children:(0,i.jsx)(S.U,{components:{a:e=>{let{node:t,...a}=e;return(0,i.jsx)("a",{...a,target:"_blank",style:{textDecoration:"underline"}})}},rehypePlugins:[L.Z],allowedElements:["p","b","i","em","strong","a","li","ul","ol","br"],children:t.description})})]})]})};function Y(e){let{heading:t,caption:a,events:r}=e;return(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"mx-auto max-w-7xl",children:[(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("h2",{className:"text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl",children:t}),(0,i.jsx)("p",{className:"mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-slate-400 sm:mt-4",children:a})]}),(0,i.jsx)("div",{className:"mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3",children:r.map(e=>(0,i.jsx)(M,{event:e},e.slug))})]})})}var O=a(2756),H=!0,P=e=>{let{events:t}=e,a=(0,d.useMemo)(()=>(0,g.qP)((0,g.SB)(t)),[t]),s=(0,d.useMemo)(()=>(0,g.qP)((0,g.Yu)(t)),[t]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(p(),{children:[(0,i.jsx)("title",{children:"LiT - Latina In Tech"}),(0,i.jsx)("meta",{name:"description",content:"Community che raccoglie gli sviluppatori della provincia di Latina"}),(0,i.jsx)("meta",{name:"keywords",content:"Latina, User Group, Lazio, Roma, Sviluppatori Latina, Latina In Tech, LiT"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(r.Z,{}),(0,i.jsxs)("main",{className:"flex flex-col gap-6 px-4 pb-8",children:[(0,i.jsx)(u,{}),(0,i.jsx)("div",{className:"mb-4 hidden md:block"}),s.length>0&&(0,i.jsx)(Y,{heading:"Prossimi Eventi",caption:"Fissa le date e non prendere impegni per i prossimi eventi della community!",events:s}),a.length>0&&(0,i.jsx)(Y,{heading:"Eventi Passati",caption:"Peccato, questi eventi si sono gi\xe0 svolti! Segui la pagina per rimanere aggiornato sui prossimi appuntamenti.",events:a}),(0,i.jsx)(O.m,{}),(0,i.jsx)(I,{}),(0,i.jsx)("div",{className:"mb-4"}),(0,i.jsx)(C,{})]})]})}},7663:function(e){!function(){var t={229:function(e){var t,a,i,r=e.exports={};function s(){throw Error("setTimeout has not been defined")}function n(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(a){try{return t.call(null,e,0)}catch(a){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{a="function"==typeof clearTimeout?clearTimeout:n}catch(e){a=n}}();var c=[],o=!1,A=-1;function d(){o&&i&&(o=!1,i.length?c=i.concat(c):A=-1,c.length&&m())}function m(){if(!o){var e=l(d);o=!0;for(var t=c.length;t;){for(i=c,c=[];++A<t;)i&&i[A].run();A=-1,t=c.length}i=null,o=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===n||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function u(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];c.push(new h(e,t)),1!==c.length||o||l(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=u,r.addListener=u,r.once=u,r.off=u,r.removeListener=u,r.removeAllListeners=u,r.emit=u,r.prependListener=u,r.prependOnceListener=u,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},a={};function i(e){var r=a[e];if(void 0!==r)return r.exports;var s=a[e]={exports:{}},n=!0;try{t[e](s,s.exports,i),n=!1}finally{n&&delete a[e]}return s.exports}i.ab="//";var r=i(229);e.exports=r}()}},function(e){e.O(0,[937,445,228,406,237,433,120,295,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);