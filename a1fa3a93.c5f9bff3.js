(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(2),i=n(6),o=(n(0),n(148)),r=["components"],c={id:"ex29",title:"Exercise 29 (13-1)"},s={unversionedId:"exercises/ex29",id:"exercises/ex29",isDocsHomePage:!1,title:"Exercise 29 (13-1)",description:"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting. You are encouraged to work at home to complete what you do not get through today, and ask questions over Piazza or in office hours.",source:"@site/docs/exercises/ex29.md",slug:"/exercises/ex29",permalink:"/cs220-f21/docs/exercises/ex29",version:"current"},p=[{value:"Part 1",id:"part-1",children:[]},{value:"Part 2",id:"part-2",children:[]},{value:"Part 3",id:"part-3",children:[]},{value:"Part 4",id:"part-4",children:[]},{value:"Part 5",id:"part-5",children:[]},{value:"Part 6 (optional)",id:"part-6-optional",children:[]}],d={rightToc:p};function l(e){var t=e.components,n=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions if you get stuck. Aim to complete as much as possible during our meeting. You are encouraged to work at home to complete what you do not get through today, and ask questions over Piazza or in office hours."))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Learning Objectives")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This exercise is designed to be an introduction to throwing and catching exceptions in C++.   As you work on this exercise, you may find the following list of standard C++ exceptions useful: ",Object(o.b)("a",{parentName:"p",href:"http://en.cppreference.com/w/cpp/error/exception"},"http://en.cppreference.com/w/cpp/error/exception"),"."))),Object(o.b)("h3",{id:"part-1"},"Part 1"),Object(o.b)("p",null,"Pull the starter code for this exercise from the public repo by taking the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log into ugrad, then navigate to the public repo and type ",Object(o.b)("inlineCode",{parentName:"p"},"git pull")," to synchronize your local working copy with the remote repo.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Copy the above files from the public repository (in the ",Object(o.b)("inlineCode",{parentName:"p"},"/exercises/ex29/")," directory) into your personal repo where desired. Then navigate to your personal repo folder for this exercise. Confirm that you can see the starter files for today\u2019s exercise -- files named ",Object(o.b)("inlineCode",{parentName:"p"},"exceptionExercise.cpp"),", ",Object(o.b)("inlineCode",{parentName:"p"},"goodData.txt"),", ",Object(o.b)("inlineCode",{parentName:"p"},"tooManyInts.txt"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"nonIntData.txt"),"."))),Object(o.b)("h3",{id:"part-2"},"Part 2"),Object(o.b)("p",null,"Compile ",Object(o.b)("inlineCode",{parentName:"p"},"exceptionExercise.cpp")," and run the program to see how the existing version behaves. Notice that it expects an input filename as a command-line argument, so try running it with ",Object(o.b)("inlineCode",{parentName:"p"},"goodData.txt")," as input. In the remaining parts, we will consider various types of error conditions the program might encounter and try to deal with them gracefully."),Object(o.b)("h3",{id:"part-3"},"Part 3"),Object(o.b)("p",null,"What if the file contains more than ten integers? Execute the program using ",Object(o.b)("inlineCode",{parentName:"p"},"tooManyInts.txt")," and watch what happens. You can see that the program crashes with a particular exception condition. Add a try/catch block in main that can handle the situation and print a useful error message. "),Object(o.b)("h3",{id:"part-4"},"Part 4"),Object(o.b)("p",null,"What if the user specifies the name of a file that does not exist? Execute the program and type in ",Object(o.b)("inlineCode",{parentName:"p"},"notAFile.txt")," (the name of a file that does not exist) and watch what happens. Edit ",Object(o.b)("inlineCode",{parentName:"p"},"exceptionExercise.cpp")," to handle this more gracefully. In particular, it would be useful to throw an exception from within ",Object(o.b)("inlineCode",{parentName:"p"},"readFile")," if you detect such a situation. "),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The method called ",Object(o.b)("inlineCode",{parentName:"p"},"is_open()")," can be helpful here."))),Object(o.b)("p",null,"Then add a try/catch structure in main that can handle the situation and print a useful error message. If your catch block catches an exception called ",Object(o.b)("inlineCode",{parentName:"p"},"e"),", it might be useful to output ",Object(o.b)("inlineCode",{parentName:"p"},"e.what()")," to give the user additional information.  "),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"It might be a good idea to throw and catch an ",Object(o.b)("inlineCode",{parentName:"p"},"std::ios_base::failure")," type exception in a situation like this."))),Object(o.b)("h3",{id:"part-5"},"Part 5"),Object(o.b)("p",null,"What if the input file contains something other than ",Object(o.b)("inlineCode",{parentName:"p"},"int"),"s? Execute the program with ",Object(o.b)("inlineCode",{parentName:"p"},"nonIntData.txt")," and watch what happens. Add a try/catch structure that can handle the situation and print a useful error message. "),Object(o.b)("h3",{id:"part-6-optional"},"Part 6 (optional)"),Object(o.b)("p",null,"If you have time, add a ",Object(o.b)("inlineCode",{parentName:"p"},"try/catch")," block to the ",Object(o.b)("inlineCode",{parentName:"p"},"readFile()"),' function so that if we try to go past the end of the array, the exception will be caught and things will be "fixed" (by re-sizing the array so it will hold the new element and then re-adding it).'),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Reminder")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Remember to add and commit to your local repo copy as your work. Push to your remote repo when finished and submit to Gradescope to check your solution. Use ",Object(o.b)("inlineCode",{parentName:"p"},"exit")," to logout from your ugrad account when finished. If you continue to work on the program after class, make sure to keep your repo updated as well! "))))}l.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),d=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),m=a,h=l["".concat(r,".").concat(m)]||l[m]||b[m]||o;return n?i.a.createElement(h,c(c({ref:t},p),{},{components:n})):i.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);