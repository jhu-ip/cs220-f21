(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),i=(n(0),n(140));const r={id:"ex13-1",title:"Exercise 13-1"},o={unversionedId:"exercises/ex13-1",id:"exercises/ex13-1",isDocsHomePage:!1,title:"Exercise 13-1",description:"As you work, feel free to discuss with other students and ask questions of the Professor/CAs. Aim to complete as much as possible during our meeting time. Work at home to complete what you do not get through during class. You will not hand in your work.",source:"@site/docs\\exercises\\ex13-1.md",slug:"/exercises/ex13-1",permalink:"/cs220-f21/docs/exercises/ex13-1",version:"current"},c=[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]},{value:"Part 3",id:"part-3",children:[]},{value:"Part 4",id:"part-4",children:[]},{value:"Part 5",id:"part-5",children:[]},{value:"Part 6",id:"part-6",children:[]}],p={rightToc:c};function s({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"As you work, feel free to discuss with other students and ask questions of the Professor/CAs. Aim to complete as much as possible during our meeting time. Work at home to complete what you do not get through during class. You will not hand in your work."))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Learning Objectives")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This exercise is designed to be an introduction to throwing and catching exceptions in C++.   As you work on this exercise, you may find the following list of standard C++ exceptions useful: ",Object(i.b)("a",{parentName:"p",href:"http://en.cppreference.com/w/cpp/error/exception"},"http://en.cppreference.com/w/cpp/error/exception"),"."))),Object(i.b)("h3",{id:"part-1"},"Part 1"),Object(i.b)("p",null,"Pull the starter code for this exercise from the public repo by taking the following steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log into ugrad, then navigate into ",Object(i.b)("inlineCode",{parentName:"p"},"cs220-sp21-public"),", type ",Object(i.b)("inlineCode",{parentName:"p"},"git status")," and confirm you have not modified any files or accidentally committed to the public repo. Ask for help if you have added or committed files there and need to undo.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Type ",Object(i.b)("inlineCode",{parentName:"p"},"git pull")," to synchronize your local repo and working copy with the remote repo.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Confirm that you can see the template files for today\u2019s exercise by typing ",Object(i.b)("inlineCode",{parentName:"p"},"ls exercises/ex13-1")," -- you should see files named ",Object(i.b)("inlineCode",{parentName:"p"},"exceptionExercise.cpp"),", ",Object(i.b)("inlineCode",{parentName:"p"},"goodData.txt"),", ",Object(i.b)("inlineCode",{parentName:"p"},"tooManyInts.txt"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"nonIntData.txt")," inside.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Copy the above files from the public class repository (in the ",Object(i.b)("inlineCode",{parentName:"p"},"/exercises/ex13-1/")," directory) to your personal repo in a new directory named ",Object(i.b)("inlineCode",{parentName:"p"},"ex13-1")," under ",Object(i.b)("inlineCode",{parentName:"p"},"~/cs220/exercises/"),"."))),Object(i.b)("h3",{id:"part-2"},"Part 2"),Object(i.b)("p",null,"Compile ",Object(i.b)("inlineCode",{parentName:"p"},"exceptionExercise.cpp")," and run the program to see how the existing version behaves. Notice that it expects an input filename as a command-line argument, so try running it with ",Object(i.b)("inlineCode",{parentName:"p"},"goodData.txt")," as input. In the remaining parts, we will consider various types of error conditions the program might encounter and try to deal with them gracefully."),Object(i.b)("h3",{id:"part-3"},"Part 3"),Object(i.b)("p",null,"What if the file contains more than ten integers? Execute the program using ",Object(i.b)("inlineCode",{parentName:"p"},"tooManyInts.txt")," and watch what happens. You can see that the program crashes with a particular exception condition. Add a try/catch block in main that can handle the situation and print a useful error message. "),Object(i.b)("h3",{id:"part-4"},"Part 4"),Object(i.b)("p",null,"What if the user specifies the name of a file that does not exist? Execute the program and type in ",Object(i.b)("inlineCode",{parentName:"p"},"notAFile.txt")," (the name of a file that does not exist) and watch what happens. Edit ",Object(i.b)("inlineCode",{parentName:"p"},"exceptionExercise.cpp")," to handle this more gracefully. In particular, it would be useful to throw an exception from within ",Object(i.b)("inlineCode",{parentName:"p"},"readFile")," if you detect such a situation. "),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The method called ",Object(i.b)("inlineCode",{parentName:"p"},"is_open()")," can be helpful here."))),Object(i.b)("p",null,"Then add a try/catch structure in main that can handle the situation and print a useful error message. If your catch block catches an exception called ",Object(i.b)("inlineCode",{parentName:"p"},"e"),", it might be useful to output ",Object(i.b)("inlineCode",{parentName:"p"},"e.what()")," to give the user additional information.  "),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"It might be a good idea to throw and catch an ",Object(i.b)("inlineCode",{parentName:"p"},"std::ios_base::failure")," type exception in a situation like this."))),Object(i.b)("h3",{id:"part-5"},"Part 5"),Object(i.b)("p",null,"What if the input file contains something other than ",Object(i.b)("inlineCode",{parentName:"p"},"int"),"s? Execute the program with ",Object(i.b)("inlineCode",{parentName:"p"},"nonIntData.txt")," and watch what happens. Add a try/catch structure that can handle the situation and print a useful error message. "),Object(i.b)("h3",{id:"part-6"},"Part 6"),Object(i.b)("p",null,"Add a ",Object(i.b)("inlineCode",{parentName:"p"},"try/catch")," block to the ",Object(i.b)("inlineCode",{parentName:"p"},"readFile()"),' function so that if we try to go past the end of the array, the exception will be caught and things will be "fixed" (by re-sizing the array so it will hold the new element and then re-adding it). '))}s.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(o,".").concat(m)]||d[m]||b[m]||r;return n?i.a.createElement(h,c(c({ref:t},s),{},{components:n})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);