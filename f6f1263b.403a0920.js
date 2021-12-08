(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{141:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return s})),n.d(r,"rightToc",(function(){return u})),n.d(r,"default",(function(){return l}));var t=n(2),o=n(6),c=(n(0),n(148)),a=["components"],i={id:"lect-d05-s03",title:"Lecture Example - strings.c"},s={unversionedId:"resources/lect-d05-s03",id:"resources/lect-d05-s03",isDocsHomePage:!1,title:"Lecture Example - strings.c",description:"Here is the strings sample program that we wrote during Joanne's section today.",source:"@site/docs/resources/lect-d05-s03.md",slug:"/resources/lect-d05-s03",permalink:"/cs220-f21/docs/resources/lect-d05-s03",version:"current"},u=[],p={rightToc:u};function l(e){var r=e.components,n=Object(o.a)(e,a);return Object(c.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Here is the strings sample program that we wrote during Joanne's section today."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-c"},'#include <string.h>\n#include <stdio.h>\n\nint main() {\n\n  char word1[5] = "java";  // four letter word + null char\n  char word2[10];\n\n  printf("enter word < 10 characters: ");\n  scanf(" %s", word2);\n\n  if (word1 == word2) {\n    printf("same");\n  }\n\n  printf("%s\\n", !strcmp(word1, word2) ? "same" : "diff");\n\n}\n\n')))}l.isMDXComponent=!0},148:function(e,r,n){"use strict";n.d(r,"a",(function(){return l})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var r=o.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=p(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=t,m=l["".concat(a,".").concat(d)]||l[d]||f[d]||c;return n?o.a.createElement(m,i(i({ref:r},u),{},{components:n})):o.a.createElement(m,i({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);