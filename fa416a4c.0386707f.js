(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{142:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=(t(147),t(153)),c=(t(151),t(148),t(150));t(155),t(161),t(162),t(143);a.default=function(){for(var e=[{name:"Prof. Joanne Selinski (Sec 1)",email:"joanne /AT/ jhu DOT edu",web:"http://cs.jhu.edu/~joanne/",img:"img/joanne.jpg",ohours:"TBA"},{name:"Prof. Patricio Simari (Sec 3)",email:"psimari2 /AT/ jhu DOT edu",web:"http://cs.jhu.edu/~psimari/",img:"img/patricio.jpg",ohours:"TBA"},{name:"Prof. Ali Darvish (Sec 4 and 5)",email:"darvish /AT/ jhu DOT edu",web:"http://cs.jhu.edu/~darvish/",img:"img/darvish.jpg",ohours:"TBA"}],a=[],t=[],n=new Array,s=0;s<e.length;s++){var i=e[s],m=new Array,o=new Array;o.push(r.a.createElement("div",null,"Office Hours: ",i.ohours)),n.push(r.a.createElement("div",{className:"card-demo",style:{display:"inline-block",padding:"1% 0 1% 4%"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:Object(c.a)(i.img)}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("h4",{className:"avatar__name"},i.name),r.a.createElement("small",{className:"avatar__subtitle"},"Department of Computer Science",r.a.createElement("br",null),"Email: ",i.email,r.a.createElement("br",null),"Web: ",r.a.createElement("a",{href:i.web,target:"_blank"},i.web),o,m)))))))}var u=new Array;for(s=0;s<a.length;s++){var d=a[s];u.push(r.a.createElement("div",{className:"card-demo",style:{display:"inline-block",padding:"1% 0 1% 4%"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:Object(c.a)(d.img)}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("h4",{className:"avatar__name"},d.name),r.a.createElement("small",{className:"avatar__subtitle"},"Head Course Assistant ",r.a.createElement("br",null),d.major," ",d.year," ",r.a.createElement("br",null),"Office Hours and Zoom Links: ",r.a.createElement("a",{href:"TBA"},"here"))))))))}var v=new Array;for(s=0;s<t.length;s++){var E=t[s];v.push(r.a.createElement("div",{className:"card-demo",style:{display:"inline-block",padding:"1% 0 1% 4%"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:Object(c.a)(E.img)}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("h4",{className:"avatar__name"},E.name),r.a.createElement("small",{className:"avatar__subtitle"},"Course Assistant ",r.a.createElement("br",null),E.major," ",E.year," ",r.a.createElement("br",null),"Office Hours and Zoom Links: ",r.a.createElement("a",{href:"TBA"},"here"))))))))}return r.a.createElement(l.a,{title:"Course Staff"},r.a.createElement("div",{style:{padding:"2% 0 0% 2%"}},r.a.createElement("h1",{style:{padding:"0% 0 0% 0%"}},"Instructors"),r.a.createElement("br",null),n,r.a.createElement("br",null),r.a.createElement("h2",null,"Head Course Assistants"),r.a.createElement("br",null),u,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"Course Assistants"),r.a.createElement("br",null),v))}},161:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(157),c=t(147),s=t(49),i=t.n(s),m=37,o=39;a.a=function(e){var a=e.block,t=e.children,s=e.defaultValue,u=e.values,d=e.groupId,v=e.className,E=Object(l.a)(),h=E.tabGroupChoices,f=E.setTabGroupChoices,b=Object(n.useState)(s),p=b[0],_=b[1],w=Object(n.useState)(!1),g=w[0],N=w[1];if(null!=d){var y=h[d];null!=y&&y!==p&&u.some((function(e){return e.value===y}))&&_(y)}var j=function(e){_(e),null!=d&&f(d,e)},A=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},O=function(){N(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",k),window.addEventListener("mousedown",O),function(){window.removeEventListener("keydown",k),window.removeEventListener("mousedown",O)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},v)},u.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":p===a,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":p===a}),style:g?{}:{outline:"none"},key:a,ref:function(e){return A.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case o:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case m:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(A,e.target,e),k(e)},onFocus:function(){return j(a)},onClick:function(){j(a),N(!1)},onPointerDown:function(){return N(!1)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===p}))[0]))}},162:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",null,e.children)}}}]);