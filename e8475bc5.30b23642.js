(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(119)),i=["components"],c={id:"day07_questions",title:"Day 7 Recap Questions","reference solutions":"1. sizeof(array_name) / sizeof(int) 2. no - sizeof(array_name) vs. strlen(array_name) 3. declaration is the function header only; definition is header + body 4. yes if their parameter lists are different in size or types (or both) 5. array contents are passed by reference; array parameter type is int[] 6. const ar[] 7. tricky to conceive; might use extra space"},s={unversionedId:"questions/day07_questions",id:"questions/day07_questions",isDocsHomePage:!1,title:"Day 7 Recap Questions",description:"1. How do you get the number of elements of an integer array?",source:"@site/docs/questions/day07_questions.md",slug:"/questions/day07_questions",permalink:"/cs220-f21/docs/questions/day07_questions",version:"current"},u=[],f={rightToc:u};function l(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"How do you get the number of elements of an integer array?"),Object(o.b)("li",{parentName:"ol"},"Is the size of a string array the same as the string length?\t"),Object(o.b)("li",{parentName:"ol"},"What is the difference between a function declaration and a function definition?"),Object(o.b)("li",{parentName:"ol"},"Can you have two functions with the same function name in a program?"),Object(o.b)("li",{parentName:"ol"},"How does passing an integer array to a function differ from passing a single integer variable into a function?"),Object(o.b)("li",{parentName:"ol"},"How can you make an array that is passed into a function not modifiable?"),Object(o.b)("li",{parentName:"ol"},"What is the down-side to recursion?")))}l.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),f=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=f(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=f(n),y=r,d=l["".concat(i,".").concat(y)]||l[y]||p[y]||o;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);