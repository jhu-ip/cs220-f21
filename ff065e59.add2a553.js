(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(142)),i=["components"],c={id:"ex11-3",title:"Exercise 11-3"},s={unversionedId:"exercises/ex11-3",id:"exercises/ex11-3",isDocsHomePage:!1,title:"Exercise 11-3",description:"As you work, feel free to discuss with other students and ask questions of the Professor/CAs. Aim to complete as much as possible during our meeting time. Work at home to complete what you do not get through during class. You will not hand in your work.",source:"@site/docs\\exercises\\ex11-3.md",slug:"/exercises/ex11-3",permalink:"/cs220-f21/docs/exercises/ex11-3",version:"current"},p=[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]},{value:"Part 3",id:"part-3",children:[]},{value:"Part 4",id:"part-4",children:[]}],l={rightToc:p};function d(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"As you work, feel free to discuss with other students and ask questions of the Professor/CAs. Aim to complete as much as possible during our meeting time. Work at home to complete what you do not get through during class. You will not hand in your work."))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Learning Objectives")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Reinforces concepts learned in today meeting:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Inheritance"),Object(o.b)("li",{parentName:"ul"},"Polymorphism")))),Object(o.b)("h3",{id:"part-1"},"Part 1"),Object(o.b)("p",null,"Pull the starter code for this exercise from the public repo by taking the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log into ugrad, then navigate into ",Object(o.b)("inlineCode",{parentName:"p"},"cs220-sp21-public"),", type ",Object(o.b)("inlineCode",{parentName:"p"},"git status")," and confirm you have not modified any files or accidentally committed to the public repo. Ask for help if you have added or committed files there and need to undo.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Type ",Object(o.b)("inlineCode",{parentName:"p"},"git pull")," to synchronize your local repo and working copy with the remote repo.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Confirm that you can see the template files for today\u2019s exercise by typing ",Object(o.b)("inlineCode",{parentName:"p"},"ls exercises/ex11-3")," -- you should see files named ",Object(o.b)("inlineCode",{parentName:"p"},"Aclass.h"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Bclass.h"),", ",Object(o.b)("inlineCode",{parentName:"p"},"main1.cpp"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"README")," inside.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Copy the above files from the public class repository (in the ",Object(o.b)("em",{parentName:"p"},"/exercises/ex11-3/")," directory) to your personal repo in a new directory named ",Object(o.b)("inlineCode",{parentName:"p"},"ex11-3")," under ",Object(o.b)("inlineCode",{parentName:"p"},"~/cs220/exercises/"),"."))),Object(o.b)("h3",{id:"part-2"},"Part 2"),Object(o.b)("p",null,"View the ",Object(o.b)("inlineCode",{parentName:"p"},"README")," file and try to compile ",Object(o.b)("inlineCode",{parentName:"p"},"main1.cpp"),".  You will find there is at least one compiler error in ",Object(o.b)("inlineCode",{parentName:"p"},"Bclass.h")," - just comment that line out and add an annotation as to why it did not compile. You will also find there are several lines in ",Object(o.b)("inlineCode",{parentName:"p"},"main1.cpp")," that do not compile. Again, comment them out but annotate in the file why they did not compile. Ask for help if you do not understand the problems indicated."),Object(o.b)("h3",{id:"part-3"},"Part 3"),Object(o.b)("p",null,"Once the compiler errors are fixed, trace through ",Object(o.b)("inlineCode",{parentName:"p"},"main1.cpp")," by hand.  It shows an example of how inheritance related classes interact with each other. Then run the code. Did you get the expected results? Why or why not? Discuss with students, CAs, or the instructor."),Object(o.b)("h3",{id:"part-4"},"Part 4"),Object(o.b)("p",null,"Change just the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"show"))," function declaration in ",Object(o.b)("inlineCode",{parentName:"p"},"Aclass.h")," to be ",Object(o.b)("inlineCode",{parentName:"p"},"virtual"),". Does that change the results when you run ",Object(o.b)("inlineCode",{parentName:"p"},"main1.cpp"),"? Why or why not? What impact does additionally declare ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"show"))," to be ",Object(o.b)("inlineCode",{parentName:"p"},"virtual")," in ",Object(o.b)("inlineCode",{parentName:"p"},"Bclass.h")," have? Does it make a difference?"))}d.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,u=d["".concat(i,".").concat(m)]||d[m]||b[m]||o;return n?a.a.createElement(u,c(c({ref:t},p),{},{components:n})):a.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);