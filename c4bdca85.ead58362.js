(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(128)),i=["components"],c={id:"day36_questions",title:"Day 36 Recap Questions","reference solutions":"1. Iterators unify the manner in which we step through the elements in a container. 2. When data is not stored sequentially in memory 3. Inequality, dereference, and preincrement 4. As a nested subclass of the container 5. Define `begin` and `end` member functions 6. You won't be able to iterator over a const object of that container class."},s={unversionedId:"questions/day36_questions",id:"questions/day36_questions",isDocsHomePage:!1,title:"Day 36 Recap Questions",description:"1. Why use iterators?",source:"@site/docs/questions/day36_questions.md",slug:"/questions/day36_questions",permalink:"/cs220-f21/docs/questions/day36_questions",version:"current"},u=[],l={rightToc:u};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Why use iterators?"),Object(a.b)("li",{parentName:"ol"},"When won't a pointer work for representing an iterator?"),Object(a.b)("li",{parentName:"ol"},"What are the bare minimum operators that need to be overloaded by an iterator?"),Object(a.b)("li",{parentName:"ol"},"Given a container how/where should the iterator class be specified?"),Object(a.b)("li",{parentName:"ol"},"In addition to defining the iterator class, what else should the container do to support iterators?"),Object(a.b)("li",{parentName:"ol"},"What might go wrong if we don't also define a const_iterator for a container?")))}p.isMDXComponent=!0},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);