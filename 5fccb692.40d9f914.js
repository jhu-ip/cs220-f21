(window.webpackJsonp=window.webpackJsonp||[]).push([[27,38],{155:function(e,t,a){"use strict";var l=a(0),n=a.n(l),s=a(150),i=a(141),c=a(48),r=a.n(c);const o=37,d=39;t.a=function(e){const{block:t,children:a,defaultValue:c,values:m,groupId:u,className:p}=e,{tabGroupChoices:h,setTabGroupChoices:k}=Object(s.a)(),[E,b]=Object(l.useState)(c),[f,w]=Object(l.useState)(!1);if(null!=u){const e=h[u];null!=e&&e!==E&&m.some((t=>t.value===e))&&b(e)}const y=e=>{b(e),null!=u&&k(u,e)},v=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||w(!0)},x=()=>{w(!1)};return Object(l.useEffect)((()=>(window.addEventListener("keydown",g),window.addEventListener("mousedown",x),()=>{window.removeEventListener("keydown",g),window.removeEventListener("mousedown",x)})),[]),n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},p)},m.map((({value:e,label:t})=>n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":E===e,className:Object(i.a)("tabs__item",r.a.tabItem,{"tabs__item--active":E===e}),style:f?{}:{outline:"none"},key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case d:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case o:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),g(e)},onFocus:()=>y(e),onClick:()=>{y(e),w(!1)},onPointerDown:()=>w(!1)},t)))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},l.Children.toArray(a).filter((e=>e.props.value===E))[0]))}},156:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(e){return n.a.createElement("div",null,e.children)}},166:function(e,t,a){var l={"./wk1data.json":185};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(l,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return l[e]}n.keys=function(){return Object.keys(l)},n.resolve=s,e.exports=n,n.id=166},185:function(e){e.exports=JSON.parse('{"days":["Day 1 (08/30)","Day 2 (09/01)","Day 3 (09/03)"],"videos":[[{"title":"Course intro","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=dbce7d0d-59a3-45f1-bf13-ad90013c8a82"},{"title":"Linux, ugrad accounts","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d6bb780e-7f77-423d-a5a2-acb701750ed2"}],[{"title":"Hello world program in C","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2912145c-de78-4810-8a06-acb500313555"},{"title":"C basics","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f25350a1-fca7-4a12-9f9b-acb5003133d2"}],[{"title":"Editors (emacs)","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0bc6cbce-e7db-40f4-8961-acb5003135d4"},{"title":"Git","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=695b3415-c00b-47cc-b015-acb9013c2c2e"},{"title":"Submission workflow","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ab3c5c69-5c49-452a-827a-acb500313465"}]],"slides":[[{"title":"Course intro","link":"../slides/day01_intro.pdf"},{"title":"Linux, ugrad accounts","link":"../slides/day01_linux_basics.pdf"}],[{"title":"Hello world program in C","link":"../slides/day02_hello_world_c.pdf"},{"title":"C basics","link":"../slides/day02_c_basics.pdf"}],[{"title":"Editors (emacs)","link":"../slides/day03_editors.pdf"},{"title":"Git","link":"../slides/day03_git.pdf"},{"title":"Submission workflow","link":"../slides/day03_submission_workflow.pdf"}]],"questions":[[{"title":"Day 1","link":"../docs/questions/day01_questions"}],[{"title":"Day 2","link":"../docs/questions/day02_questions"}],[{"title":"Day 3","link":"../docs/questions/day03_questions"}]],"exercises":[[{"title":"Github account","link":"../docs/exercises/github"}],[{"title":"Ex1-1","link":"../docs/exercises/ex1-1"}],[{"title":"Ex1-2","link":"../docs/exercises/ex1-2"},{"title":"Ex1-3","link":"../docs/exercises/ex1-3"}]],"resources":[[{"title":"Unix/Linux Tutorial","link":"https://cs.jhu.edu/~joanne/unix.html"},{"title":"Unix/Linux Reference Card","link":"https://cs.jhu.edu/~joanne/unixRC.pdf"},{"title":"Github SSH key setup","link":"../docs/resources/github-ssh"}],[{"title":"Online C compiler","link":"https://www.onlinegdb.com/online_c_compiler"}],[{"title":"Emacs reference card","link":"https://www.gnu.org/software/emacs/refcards/pdf/refcard.pdf"},{"title":"Interactive vim tutorial","link":"https://www.openvim.com/"},{"title":"Git cheatsheet","link":"https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf"}]],"zooms":[[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e6a7e7df-b893-49e6-8130-ad94011e7c37"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=16b06102-cde1-4cc2-a666-ad94014c5547"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b25181e8-4a12-4a84-a956-ad940109d048"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=aa5aee15-2fef-47d6-82d2-ad9400e521fa"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1d955987-0955-472c-b715-ad96011c1159"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=bd2a60bb-f36a-4ef1-ae02-ad9601526379"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d82dd874-bd6a-4179-a7dc-ad96010693ce"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e1e56dcd-e20a-4496-bd2c-ad9600e664c0"}],[{"title":"Section 1","link":""},{"title":"Section 3","link":""},{"title":"Section 4","link":""},{"title":"Section 5","link":""}]]}')},47:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(49),i=a.n(s);t.default=function(e){return e.days&&e.videos&&e.slides&&e.questions&&e.exercises&&e.resources&&e.zooms?n.a.createElement("table",{className:i.a.table},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null,e.days[0]),n.a.createElement("th",null,e.days[1]),n.a.createElement("th",null,e.days[2]))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Videos"),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.videos[0].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.videos[1].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.videos[2].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),n.a.createElement("tr",null,n.a.createElement("th",null,"Slides"),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.slides[0].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.slides[1].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.slides[2].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),n.a.createElement("tr",null,n.a.createElement("th",null,"Recap Questions"),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.questions[0].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.questions[1].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.questions[2].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link}," ",e.title," "))))))),n.a.createElement("tr",null,n.a.createElement("th",null,"Exercise"),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.exercises[0].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.exercises[1].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.exercises[2].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link}," ",e.title," "))))))),n.a.createElement("tr",null,n.a.createElement("th",null,"Additional Resources"),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.resources[0].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.resources[1].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.resources[2].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),n.a.createElement("tr",null,n.a.createElement("th",null,"Recorded Sessions"),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.zooms[0].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.zooms[1].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),n.a.createElement("th",null,n.a.createElement("ul",{className:i.a.li},e.zooms[2].map(((e,t)=>n.a.createElement("li",{key:t},n.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))))):n.a.createElement("div",null)}},86:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(147),i=a(155),c=a(156),r=a(47);t.default=function(){for(var e=new Array,t=1;t<=7;++t)try{let l=a(166)("./wk"+t+"data.json");e.push(n.a.createElement(c.a,{value:"w"+t},n.a.createElement(r.default,{days:l.days,videos:l.videos,slides:l.slides,questions:l.questions,exercises:l.exercises,resources:l.resources,zooms:l.zooms})))}catch(m){console.log("cannot read from ./data/wk"+t+"data.json")}var l=n.a.createElement(i.a,{defaultValue:"w1",values:[{label:"Wk 1",value:"w1"},{label:"Wk 2",value:"w2"},{label:"Wk 3",value:"w3"},{label:"Wk 4",value:"w4"},{label:"Wk 5",value:"w5"},{label:"Wk 6",value:"w6"},{label:"Wk 7",value:"w7"}]},e),o=new Array;for(t=8;t<=14;++t)try{let e=a(166)("./wk"+t+"data.json");o.push(n.a.createElement(c.a,{value:"w"+t},n.a.createElement(r.default,{days:e.days,videos:e.videos,slides:e.slides,questions:e.questions,exercises:e.exercises,resources:e.resources,zooms:e.zooms})))}catch(m){console.log("cannot read from ./data/wk"+t+"data.json")}var d=n.a.createElement(i.a,{defaultValue:"w8",values:[{label:"Wk 8",value:"w8"},{label:"Wk 9",value:"w9"},{label:"Wk 10",value:"w10"},{label:"Wk 11",value:"w11"},{label:"Wk 12",value:"w12"},{label:"Wk 13",value:"w13"},{label:"Wk 14",value:"w14"}]},o);return n.a.createElement(s.a,{title:"Schedule"},n.a.createElement("span",{className:"alert alert--info",style:{display:"flex",justifyContent:"center",padding:"0 0 0 0"}},"The weekly tabs will be populated with new course material as the semester progresses - see the tentative\xa0",n.a.createElement("a",{href:"../schedule"},"schedule"),"."),n.a.createElement("div",{style:{display:"block",justifyContent:"center",padding:"1% 1% 1% 1%"},class:"container"},n.a.createElement(i.a,{block:"true",defaultValue:"c",values:[{label:"C (Week 1 - Week 7)",value:"c"},{label:"C++ (Week 8 - Week 14)",value:"c++"}]},n.a.createElement(c.a,{value:"c"},l),n.a.createElement(c.a,{value:"c++"},d))))}}}]);