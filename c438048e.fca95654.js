(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{113:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(2),i=t(6),a=(t(0),t(134)),o=["components"],c={id:"day12_questions",title:"Day 12 Recap Questions","reference solutions":"1.  94 72 35  \n  3 2 1 \n  -3 \n  1 0 \n 2.  it will compile and run without error 3.  it will result in invalid read memory access because the address in *p doesn't necessarily belong to the program 4.  result=274  (adds 42+67+89+76) 5.  Yes in all cases. The const in the altered function declaration applies to the values in the array, and we can make things more restrictive."},l={unversionedId:"questions/day12_questions",id:"questions/day12_questions",isDocsHomePage:!1,title:"Day 12 Recap Questions",description:'1. What output is printed by the "Example code" below?',source:"@site/docs/questions/day12_questions.md",slug:"/questions/day12_questions",permalink:"/cs220-f21/docs/questions/day12_questions",version:"current"},p=[],s={rightToc:p};function u(e){var n=e.components,t=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},'What output is printed by the "Example code" below?'),Object(a.b)("li",{parentName:"ol"},"Assume that ",Object(a.b)("inlineCode",{parentName:"li"},"arr")," is an array of 5 ",Object(a.b)("inlineCode",{parentName:"li"},"int")," elements. Is the code ",Object(a.b)("inlineCode",{parentName:"li"},"int *p = arr + 5;")," legal?"),Object(a.b)("li",{parentName:"ol"},"Assume that ",Object(a.b)("inlineCode",{parentName:"li"},"arr")," is an array of 5 ",Object(a.b)("inlineCode",{parentName:"li"},"int")," elements. Is the code ",Object(a.b)("inlineCode",{parentName:"li"},'int *p = arr + 5; printf("%d\\n", *p);')," legal?"),Object(a.b)("li",{parentName:"ol"},'What output is printed by the "Example code 2" below?'),Object(a.b)("li",{parentName:"ol"},"Suppose we have variables ",Object(a.b)("inlineCode",{parentName:"li"},"int ra1[10] = { 1, 2, 3};"),", ",Object(a.b)("inlineCode",{parentName:"li"},"int * ra2 = ra1;")," and ",Object(a.b)("inlineCode",{parentName:"li"},"int fun(int *ra);")," declarations. Will ",Object(a.b)("inlineCode",{parentName:"li"},"fun(ra1);")," compile? Will ",Object(a.b)("inlineCode",{parentName:"li"},"fun(ra2);")," compile? What if we change the function declaration to ",Object(a.b)("inlineCode",{parentName:"li"},"int fun(const int ra[]);"),"? ")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},'// Example code\nint arr[] = { 94, 69, 35, 72, 9 };\nint *p = arr;\nint *q = p + 3;\nint *r = q - 1;\nprintf("%d %d %d\\n", *p, *q, *r);\nptrdiff_t x = q - p;\nptrdiff_t y = r - p;\nptrdiff_t z = q - r;\nprintf("%d %d %d\\n", (int)x, (int)y, (int)z);\nptrdiff_t m = p - q;\nprintf("%d\\n", (int)m);\nint c = (p < q);\nint d = (q < p);\nprintf("%d %d\\n", c, d);\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-c"},'// Example code 2\n\n#include <stdio.h>\n\nint sum(int a[], int n) {\n  int x = 0;\n  for (int i = 0; i < n; i++) {\n    x += a[i];\n  }\n  return x;\n}\n\nint main(void) {\n  int data[] = { 23, 59, 82, 42, 67, 89, 76, 44, 85, 81 };\n  int result = sum(data + 3, 4);\n  printf("result=%d\\n", result);\n  return 0;\n}\n')))}u.isMDXComponent=!0},134:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||a;return t?i.a.createElement(m,c(c({ref:n},p),{},{components:t})):i.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);