(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(121)),i=["components"],c={id:"day13_questions",title:"Day 13 Recap Questions","reference solutions":"1. A user defined data type, which is a collection of related variables, called fields. 2. Passed by value - each field is copied. Note that if the field is a pointer. The address is copied. 3. It is the total byte sizes of all fields in a struct + padding. Typically C compiler pad the struct to align with 4-bytes. 4. Lifetime is the lifespan of a variable in the memory. Scope is where the variable can be accessed. 5. When an inner scope variable and an outer scope variable have the same name. The inner one hides the outer one. [May need to clarify what file scope, function scope, and block scope are] 6. 0; 3; 5; 2; [global variable is initialized, demonstrated to use extern get access to the global]"},s={unversionedId:"questions/day13_questions",id:"questions/day13_questions",isDocsHomePage:!1,title:"Day 13 Recap Questions",description:"1.\tWhat is struct in C?",source:"@site/docs/questions/day13_questions.md",slug:"/questions/day13_questions",permalink:"/cs220-f21/docs/questions/day13_questions",version:"current"},l=[],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"What is ",Object(o.b)("em",{parentName:"li"},"struct")," in C?"),Object(o.b)("li",{parentName:"ol"},"How are the fields of a struct passed into a function - by value or by reference?"),Object(o.b)("li",{parentName:"ol"},"What is the size of a ",Object(o.b)("em",{parentName:"li"},"struct"),"? What is structure padding in C?"),Object(o.b)("li",{parentName:"ol"},"What is the difference between lifetime and scope of a variable?"),Object(o.b)("li",{parentName:"ol"},"What is variable shadowing (i.e. hiding)?"),Object(o.b)("li",{parentName:"ol"},"What is the output of the below program?")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\nint foo;\nvoid bar() {\n    int foo = 3;\n    {\n        extern int foo;\n        printf("%d; ", foo);\n        foo = 2;\n    }\n    printf("%d; ", foo);\n}\nvoid baz() { printf("%d; ", foo); }\nint main() {\n    {\n        int foo = 5;\n        bar();\n        printf("%d; ", foo);\n    }\n    baz();\n    return 0;\n}\n')))}p.isMDXComponent=!0}}]);