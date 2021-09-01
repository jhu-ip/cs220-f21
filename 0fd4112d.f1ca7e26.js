(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,d=p["".concat(a,".").concat(b)]||p[b]||f[b]||i;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),i=(n(0),n(140)),a=["components"],c={id:"day14_questions",title:"Day 14 Recap Questions","reference solutions":'1. Open the file with "b" attribute and use fread/fwrite instead of fscanf/fprintf. 2. ^, which is mutually exclusive. i.e. only true if and only if one of the two is true, but not both. 3. it will perform the operation bit by bit. (extra - You cannot. They are not defined for floats. A compilation error will occur.) 4. 1 [(00001111 >> 2) || 00000111 <==> 00000011 || 00000111 <=> 3 || 7 <==> 1] 5. 7 [(00001111 >> 2) | 00000111 <==> 00000011 | 00000111 <=> 00000111 <==> 7]'},u={unversionedId:"questions/day14_questions",id:"questions/day14_questions",isDocsHomePage:!1,title:"Day 14 Recap Questions",description:"1.\tHow do we read/write binary files in C?",source:"@site/docs\\questions\\day14_questions.md",slug:"/questions/day14_questions",permalink:"/cs220-f21/docs/questions/day14_questions",version:"current"},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"How do we read/write binary files in C?"),Object(i.b)("li",{parentName:"ol"},"What character represents the bitwise XOR operation? How does it differ from the OR operation?"),Object(i.b)("li",{parentName:"ol"},"What happens if you apply the bitwise operation on an integer value? (extra: what if we apply to floats)"),Object(i.b)("li",{parentName:"ol"},"What is the result of ",Object(i.b)("inlineCode",{parentName:"li"},"(15 >> 2) || 7"),"?"),Object(i.b)("li",{parentName:"ol"},"What is the result of ",Object(i.b)("inlineCode",{parentName:"li"},"(15 >> 2) | 7"),"?")))}p.isMDXComponent=!0}}]);