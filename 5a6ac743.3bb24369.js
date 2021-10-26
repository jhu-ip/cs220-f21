(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{137:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return t?o.a.createElement(b,s(s({ref:n},l),{},{components:t})):o.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(2),o=(t(0),t(137));const a={id:"day30_questions",title:"Day 30 Recap Questions","reference solutions":"1. Initialization happens when the variable is declared. 2. Assignment 3. Initialization 4. Shallow copy copies pointers. Deep copy allocates memory and copies over values. 5. If you need a non-default destructor to release resources, then you will mostly likely need a non-default copy constructor and a non-default assignment operator."},i={unversionedId:"questions/day30_questions",id:"questions/day30_questions",isDocsHomePage:!1,title:"Day 30 Recap Questions",description:"1. What is difference between initialization and assignment?",source:"@site/docs\\questions\\day30_questions.md",slug:"/questions/day30_questions",permalink:"/cs220-f21/docs/questions/day30_questions",version:"current"},s=[],c={rightToc:s};function l({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"What is difference between initialization and assignment?"),Object(o.b)("li",{parentName:"ol"},"Does the line ",Object(o.b)("inlineCode",{parentName:"li"},"f2 = f1;")," use initialization or assignment (assume ",Object(o.b)("inlineCode",{parentName:"li"},"Foo")," is a class and ",Object(o.b)("inlineCode",{parentName:"li"},"f1")," and ",Object(o.b)("inlineCode",{parentName:"li"},"f2")," are both of type ",Object(o.b)("inlineCode",{parentName:"li"},"Foo"),")?"),Object(o.b)("li",{parentName:"ol"},"Does the line ",Object(o.b)("inlineCode",{parentName:"li"},"Foo f2 = f1;")," use initialization or assignment (assume ",Object(o.b)("inlineCode",{parentName:"li"},"Foo")," is a class and ",Object(o.b)("inlineCode",{parentName:"li"},"f1")," is of type ",Object(o.b)("inlineCode",{parentName:"li"},"Foo"),")?"),Object(o.b)("li",{parentName:"ol"},"What is a shallow copy and what is a deep copy?"),Object(o.b)("li",{parentName:"ol"},"What is the rule of 3?")))}l.isMDXComponent=!0}}]);