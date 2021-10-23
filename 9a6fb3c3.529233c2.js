(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{135:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),m=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=m(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(135)),i=["components"],c={id:"day11_questions",title:"Day 11 Recap Questions","reference solutions":"1. Stack memory is static (i.e. sizes are known at compile-time), while heap memory is dynamic (i.e. sizes are known during runtime). Because we know the memory sizes for stack memory, variables using stack memory are allocated and freed automatically, while those using heap memory require programmer to allocate and free in code. Another big difference is heap memory requires us to use pointers. 2. It is a memory management mechanism in C that allows us to allocate memory with dynamic sizes during runtime. We do so by four allocation functions defined in stdlib.h. They are malloc, realloc, calloc and free. 3. In short, it happens when we forget to free the memory that we have allocated. 4. malloc only allocates memory with the given bytes. calloc allocates memory as malloc and initializes it to zero. realloc is used for resizing the memory. Note that the resizing can change the memory begin address. So if you have multiple pointers pointing to the same memory, you need to use caution when using realloc. You need to update all those pointers after realloc. 5. We use valgrind to check for memory leak problem and invalid read/write problem. 6. can't return local statically allocated array from function."},l={unversionedId:"questions/day11_questions",id:"questions/day11_questions",isDocsHomePage:!1,title:"Day 11 Recap Questions",description:"1.\tWhat is the difference between stack and heap memory?",source:"@site/docs/questions/day11_questions.md",slug:"/questions/day11_questions",permalink:"/cs220-f21/docs/questions/day11_questions",version:"current"},s=[],m={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"What is the difference between stack and heap memory?"),Object(o.b)("li",{parentName:"ol"},"What is dynamic memory allocation in C?"),Object(o.b)("li",{parentName:"ol"},"What is the memory leak problem?"),Object(o.b)("li",{parentName:"ol"},"What is the difference between ",Object(o.b)("em",{parentName:"li"},"malloc"),", ",Object(o.b)("em",{parentName:"li"},"realloc"),", and ",Object(o.b)("em",{parentName:"li"},"calloc"),"?"),Object(o.b)("li",{parentName:"ol"},"What do we use valgrind to check for?"),Object(o.b)("li",{parentName:"ol"},"Consider the ",Object(o.b)("inlineCode",{parentName:"li"},"exclaim")," function below. Do you see any problems with this function?")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c"},"// Return a C character string containing n exclamation points.\n// n must be less than 20.\nchar* exclaim(int n) {\n  char s[20];\n  assert(n < 20);\n  for (int i = 0; i < n; i++) {\n    s[i] = '!';\n  }\n  s[n] = '\\0';\n  return s;\n}\n")))}u.isMDXComponent=!0}}]);