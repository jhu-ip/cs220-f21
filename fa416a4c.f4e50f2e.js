(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{120:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=(t(125),t(131)),s=(t(128),t(126),t(129));t(132),t(139),t(140),t(121);a.default=function(){for(var e=[{name:"Prof. Patricio Simari (Sec 1)",email:"psimari2 /AT/ jhu DOT edu",web:"http://cs.jhu.edu/~psimari/",img:"img/patricio.jpg",ohours1:"Tue 1:30-3pm",ohours2:"Thu 3:30-5pm, or by appntmnt"},{name:"Prof. Joanne Selinski (Sec 3)",email:"joanne /AT/ jhu DOT edu",web:"http://cs.jhu.edu/~joanne/",img:"img/joanne.jpg",ohours1:"see webpage"},{name:"Prof. Ali Darvish (Sec 4 and 5)",email:"darvish /AT/ jhu DOT edu",web:"http://cs.jhu.edu/~darvish/",img:"img/darvish.jpg",ohours1:"Tue 4:30-5:30pm (Zoom), Thu 4-5pm (Zoom)",ohours2:"Fri 11:30-12:30pm (Malone 205), or by apptmnt"}],a=[{name:"Ben Cillie",img:"img/ben.png"},{name:"Mark Tiavises",img:"img/mark.png"},{name:"Peter Zarakas",img:"img/peter.jpg"}],t=[{name:"Anika Misra",img:"img/anika.jpg",sec:"05"},{name:"Camden Shultz",img:"img/camden.jpg",sec:"03"},{name:"Eugene Han",img:"img/eugene.jpeg",sec:"01, 04"},{name:"Jessica Nguyen",img:"img/jessica.png",sec:"04"},{name:"Jessie Luo",img:"img/jessie.jpg",sec:"03"},{name:"Justin Winkler",img:"img/justin.jpeg",sec:"04"},{name:"Kyuhee Jo",img:"img/kyuhee.jpg",sec:"04"},{name:"Lambert Kober",img:"img/lambert.jpg",sec:"05"},{name:"Mason Albert",img:"img/masson.png",sec:"01"},{name:"Shreya Wadhwa",img:"img/shreya.jpg",sec:"03"},{name:"Stella Li",img:"img/stella.png",sec:"01"},{name:"Trisha Karani",img:"img/trisha.jpg",sec:"01"},{name:"Will Zhao",img:"img/will.jpg",sec:"05"}],n=new Array,m=0;m<e.length;m++){var i=e[m],c=new Array;c.push(r.a.createElement("div",null,"Office Hours: ",i.ohours1));var o=new Array;i.ohours2&&o.push(r.a.createElement("div",null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",i.ohours2,r.a.createElement("br",null),"Check ",r.a.createElement("a",{href:"https://piazza.com/jhu/fall2021/en601220/staff",target:"_blank"},"Piazza->Resources->Staff")," for Zoom link!")),n.push(r.a.createElement("div",{className:"card-demo",style:{display:"inline-block",padding:"1% 0 1% 4%"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:Object(s.a)(i.img)}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("h4",{className:"avatar__name"},i.name),r.a.createElement("small",{className:"avatar__subtitle"},"Department of Computer Science",r.a.createElement("br",null),"Email: ",i.email,r.a.createElement("br",null),"Web: ",r.a.createElement("a",{href:i.web,target:"_blank"},i.web),c,o)))))))}var u=new Array;for(m=0;m<a.length;m++){var d=a[m];u.push(r.a.createElement("div",{className:"card-demo",style:{display:"inline-block",padding:"1% 0 1% 4%"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:Object(s.a)(d.img)}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("h4",{className:"avatar__name"},d.name),r.a.createElement("small",{className:"avatar__subtitle"},"Head Course Assistant ",r.a.createElement("br",null))))))))}var g=new Array;for(m=0;m<t.length;m++){var p=t[m];g.push(r.a.createElement("div",{className:"card-demo",style:{display:"inline-block",padding:"1% 0 1% 4%"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:Object(s.a)(p.img)}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("h4",{className:"avatar__name"},p.name),r.a.createElement("small",{className:"avatar__subtitle"},"Course Assistant, Sec. ",p.sec," ",r.a.createElement("br",null))))))))}return r.a.createElement(l.a,{title:"Course Staff"},r.a.createElement("div",{style:{padding:"2% 0 0% 2%"}},r.a.createElement("h1",{style:{padding:"0% 0 0% 0%"}},"Instructors"),r.a.createElement("br",null),n,r.a.createElement("br",null),r.a.createElement("h2",null,"Head Course Assistants"),r.a.createElement("br",null),u,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"Course Assistants"),r.a.createElement("br",null),g))}},139:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(134),s=t(125),m=t(49),i=t.n(m);const c=37,o=39;a.a=function(e){const{block:a,children:t,defaultValue:m,values:u,groupId:d,className:g}=e,{tabGroupChoices:p,setTabGroupChoices:h}=Object(l.a)(),[v,b]=Object(n.useState)(m),[E,_]=Object(n.useState)(!1);if(null!=d){const e=p[d];null!=e&&e!==v&&u.some((a=>a.value===e))&&b(e)}const f=e=>{b(e),null!=d&&h(d,e)},j=[],w=e=>{e.metaKey||e.altKey||e.ctrlKey||_(!0)},y=()=>{_(!1)};return Object(n.useEffect)((()=>(window.addEventListener("keydown",w),window.addEventListener("mousedown",y),()=>{window.removeEventListener("keydown",w),window.removeEventListener("mousedown",y)})),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},g)},u.map((({value:e,label:a})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(s.a)("tabs__item",i.a.tabItem,{"tabs__item--active":v===e}),style:E?{}:{outline:"none"},key:e,ref:e=>j.push(e),onKeyDown:e=>{((e,a,t)=>{switch(t.keyCode){case o:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case c:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(j,e.target,e),w(e)},onFocus:()=>f(e),onClick:()=>{f(e),_(!1)},onPointerDown:()=>_(!1)},a)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((e=>e.props.value===v))[0]))}},140:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",null,e.children)}}}]);