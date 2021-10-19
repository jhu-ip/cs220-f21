(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{134:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,b=l["".concat(i,".").concat(d)]||l[d]||f[d]||a;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),o=(n(0),n(134));const a={id:"day35_questions",title:"Day 35 Recap Questions","reference solutions":"1. There are no implicit conversions from the values of a scoped enum to an integer. 2. To indicate a fatal error has occured where there is no reasonable way to continue from the point of the error (but there might be a way to continue from somewhere else) 3. `throw`, `try`, `catch` 4. The first one whose type equals to, or is a base of, the class of the thrown exception 5. Call the exception's `what` member function"},i={unversionedId:"questions/day35_questions",id:"questions/day35_questions",isDocsHomePage:!1,title:"Day 35 Recap Questions",description:"1. What is the difference between an unscoped and a scoped enum?",source:"@site/docs\\questions\\day35_questions.md",slug:"/questions/day35_questions",permalink:"/cs220-f21/docs/questions/day35_questions",version:"current"},c=[],s={rightToc:c};function u({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"What is the difference between an unscoped and a scoped enum?"),Object(o.b)("li",{parentName:"ol"},"Why do we use exceptions?"),Object(o.b)("li",{parentName:"ol"},"What keyword is used to generate an exception? What keyword indicates that the block of code may generate an exception? What keyword indicates what should be done in the case of an exception?"),Object(o.b)("li",{parentName:"ol"},"In the case of multiple matching ",Object(o.b)("inlineCode",{parentName:"li"},"catch")," blocks, which one catches the exception?"),Object(o.b)("li",{parentName:"ol"},"How do you get the message associated with an exception?")))}u.isMDXComponent=!0}}]);