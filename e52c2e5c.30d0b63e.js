(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(144)),i=["components"],c={id:"day09_questions",title:"Day 9 Recap Questions","reference solutions":"1. use two sets of brackets with sizes `int ra[ROWS][COLS];` include the number of columns in the function declaration/definintion `int ra[][COLS]` 2. can use nested lists of values `{{1, 2, 3}, {4, 5, 6}}` or just a single list that will assign in row order `{1, 2, 3, 4, 5, 6}` 3. compile with -g for using gdb 4. `break main` to set breakpoint and `backtrace` to check call stack 5. `display`"},s={unversionedId:"questions/day09_questions",id:"questions/day09_questions",isDocsHomePage:!1,title:"Day 9 Recap Questions",description:"1.\tHow do you declare a multi-dimensional array and pass it to a function?",source:"@site/docs/questions/day09_questions.md",slug:"/questions/day09_questions",permalink:"/cs220-f21/docs/questions/day09_questions",version:"current"},u=[],l={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"How do you declare a multi-dimensional array and pass it to a function?"),Object(a.b)("li",{parentName:"ol"},"How do you initialize a multi-dimensional array using array initialization?"),Object(a.b)("li",{parentName:"ol"},"What is the compile flag needed to compile a program such that we can debug it using gdb?"),Object(a.b)("li",{parentName:"ol"},"How do you set a break point using gdb and check the call stack?"),Object(a.b)("li",{parentName:"ol"},"Check the gdb cheat sheet and find the command to print the content of a variable per step, instead of only printing it once using ",Object(a.b)("inlineCode",{parentName:"li"},"print"),".")))}p.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);