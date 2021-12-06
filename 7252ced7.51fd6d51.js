(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),o=(n(0),n(148)),r=["components"],c={id:"ex28",title:"Exercise 28 (12-1)"},s={unversionedId:"exercises/ex28",id:"exercises/ex28",isDocsHomePage:!1,title:"Exercise 28 (12-1)",description:"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting. You are encouraged to work at home to complete what you do not get through today, and ask questions over Piazza or in office hours.",source:"@site/docs\\exercises\\ex28.md",slug:"/exercises/ex28",permalink:"/cs220-f21/docs/exercises/ex28",version:"current"},p=[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]},{value:"Part 3",id:"part-3",children:[]},{value:"Part 4",id:"part-4",children:[]}],l={rightToc:p};function b(e){var t=e.components,n=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting. You are encouraged to work at home to complete what you do not get through today, and ask questions over Piazza or in office hours."))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Learning Objectives")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Reinforces concepts learned in today's meeting:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Inheritance"),Object(o.b)("li",{parentName:"ul"},"Overriding"),Object(o.b)("li",{parentName:"ul"},"Abstract class")))),Object(o.b)("h3",{id:"part-1"},"Part 1"),Object(o.b)("p",null,"Pull the starter code for this exercise from the public repo by taking the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log into ugrad, then navigate to the public repo and type ",Object(o.b)("inlineCode",{parentName:"p"},"git pull")," to synchronize your local working copy with the remote repo.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Copy the starter code for today from the public repo ",Object(o.b)("inlineCode",{parentName:"p"},"exercises/ex28")," into your personal repo where desired. Then navigate to your personal repo folder for this exercise. Confirm that you can see the starter files for today\u2019s exercise by typing ",Object(o.b)("inlineCode",{parentName:"p"},"ls exercises/ex28")," -- you should see files named ",Object(o.b)("inlineCode",{parentName:"p"},"Aclass.h"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Bclass.h"),", ",Object(o.b)("inlineCode",{parentName:"p"},"main.cpp"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"README")," inside."))),Object(o.b)("h3",{id:"part-2"},"Part 2"),Object(o.b)("p",null,"Add a ",Object(o.b)("inlineCode",{parentName:"p"},"virtual")," function to ",Object(o.b)("inlineCode",{parentName:"p"},"Aclass.h")," named ",Object(o.b)("inlineCode",{parentName:"p"},"toString()"),". The function should return a string representation of ",Object(o.b)("inlineCode",{parentName:"p"},"class A")," in the format"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Aclass: a = value of a, d = value of d, size = size of object]\n")),Object(o.b)("p",null,"and has to be ",Object(o.b)("inlineCode",{parentName:"p"},"const")," protected. For instance, if we have an object named ",Object(o.b)("inlineCode",{parentName:"p"},"oA")," of type ",Object(o.b)("inlineCode",{parentName:"p"},"A")," with ",Object(o.b)("inlineCode",{parentName:"p"},"a")," value of ",Object(o.b)("inlineCode",{parentName:"p"},"10")," and ",Object(o.b)("inlineCode",{parentName:"p"},"d")," value of ",Object(o.b)("inlineCode",{parentName:"p"},"100"),", ",Object(o.b)("inlineCode",{parentName:"p"},"oA.toString()")," may return the following string:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Aclass: a = 10, d = 100, size = 24]\n")),Object(o.b)("p",null,"Override the ",Object(o.b)("inlineCode",{parentName:"p"},"toString()")," function in ",Object(o.b)("inlineCode",{parentName:"p"},"class B"),"  to return a string representation of ",Object(o.b)("inlineCode",{parentName:"p"},"B")," in the format "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Bclass: a = value of a, b = value of b, d = value of d, size = size of object]\n")),Object(o.b)("p",null,"Add ",Object(o.b)("em",{parentName:"p"},"accessor")," (i.e., ",Object(o.b)("em",{parentName:"p"},"getter"),") functions if required. Make sure you use the ",Object(o.b)("inlineCode",{parentName:"p"},"override")," keyword as necessary to force a check for proper overriding."),Object(o.b)("h3",{id:"part-3"},"Part 3"),Object(o.b)("p",null,"Make ",Object(o.b)("inlineCode",{parentName:"p"},"class A")," an abstract class by adding a ",Object(o.b)("em",{parentName:"p"},"pure")," ",Object(o.b)("inlineCode",{parentName:"p"},"virtual")," function named ",Object(o.b)("inlineCode",{parentName:"p"},"int fun() const")," in ",Object(o.b)("inlineCode",{parentName:"p"},"class A"),". Implement the function ",Object(o.b)("inlineCode",{parentName:"p"},"fun")," in ",Object(o.b)("inlineCode",{parentName:"p"},"B")," such that it returns the multiplication of ",Object(o.b)("inlineCode",{parentName:"p"},"a * b * d"),". Make use of the ",Object(o.b)("inlineCode",{parentName:"p"},"override")," keyword as applicable. Then, modify ",Object(o.b)("inlineCode",{parentName:"p"},"main.cpp")," accordingly by commenting out lines of code (if needed) to get it to compile and run. Check the results that get printed out."),Object(o.b)("h3",{id:"part-4"},"Part 4"),Object(o.b)("p",null,"Make a ",Object(o.b)("inlineCode",{parentName:"p"},"C class")," in a file named ",Object(o.b)("inlineCode",{parentName:"p"},"Cclass.h")," (possibly along with ",Object(o.b)("inlineCode",{parentName:"p"},"Cclass.cpp"),") that is derived from ",Object(o.b)("inlineCode",{parentName:"p"},"A class"),". This class has a ",Object(o.b)("inlineCode",{parentName:"p"},"private int")," field named ",Object(o.b)("inlineCode",{parentName:"p"},"e"),". The class should have at least one constructor with an ",Object(o.b)("inlineCode",{parentName:"p"},"int")," parameter used to set the value of ",Object(o.b)("inlineCode",{parentName:"p"},"e"),"; the values of ",Object(o.b)("inlineCode",{parentName:"p"},"a")," and ",Object(o.b)("inlineCode",{parentName:"p"},"d")," from the base class should be set to default values. The class should also have a function named ",Object(o.b)("inlineCode",{parentName:"p"},"sete()")," to be used for setting the value of ",Object(o.b)("inlineCode",{parentName:"p"},"e"),". Also, the class should provide its own implementation of the function named ",Object(o.b)("inlineCode",{parentName:"p"},"int fun() const")," that returns the multiplication of ",Object(o.b)("inlineCode",{parentName:"p"},"e * a * d"),", as well as the ",Object(o.b)("inlineCode",{parentName:"p"},"toString()")," function. The ",Object(o.b)("inlineCode",{parentName:"p"},"toString()")," function should return:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Cclass: a = value of a, d = value of d, e = value of e, size = size of object]\n")),Object(o.b)("p",null,"You may uncomment and run the corresponding code for part 4 (as well as the ",Object(o.b)("inlineCode",{parentName:"p"},'#include "Cclass.h"')," line on the top) in ",Object(o.b)("inlineCode",{parentName:"p"},"main.cpp")," to check the results."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Reminder")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Remember to add and commit to your local repo copy as your work. Push to your remote repo when finished and submit to Gradescope to check your solution. Use ",Object(o.b)("inlineCode",{parentName:"p"},"exit")," to logout from your ugrad account when finished. If you continue to work on the program after class, make sure to keep your repo updated as well! "))))}b.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,u=b["".concat(r,".").concat(m)]||b[m]||d[m]||o;return n?i.a.createElement(u,c(c({ref:t},p),{},{components:n})):i.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);