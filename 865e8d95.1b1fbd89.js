(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(a,".").concat(f)]||p[f]||b[f]||i;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=(n(0),n(121));const i={id:"day04_questions",title:"Day 4 Recap Questions","reference solutions":'1. "&&" is logical "and", "&" is bitwise (will cover later) 2. "!" is logical "not", \'~\' is bit op (will cover later) 3. 0 || true && 3 -> false || true -> true 4. exit the current block, skipping to the enclosing "}" 5. skip to the end of the current iteration 6. just once at the beginning'},a={unversionedId:"questions/day04_questions",id:"questions/day04_questions",isDocsHomePage:!1,title:"Day 4 Recap Questions",description:'1. Which one is the logical "and" operator in C, "&&" or "&" or both?',source:"@site/docs\\questions\\day04_questions.md",slug:"/questions/day04_questions",permalink:"/cs220-f21/docs/questions/day04_questions",version:"current"},c=[],l={rightToc:c};function s({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Which one is the logical "and" operator in C, "&&" or "&" or both?'),Object(o.b)("li",{parentName:"ol"},'Which one is the logical "negation" operator in C, "~" or "!" or both?'),Object(o.b)("li",{parentName:"ol"},"What is the result of evaluating ",Object(o.b)("inlineCode",{parentName:"li"},"(34 + 2) / 40 || 80 > 'A' && 15 % 4")," ?"),Object(o.b)("li",{parentName:"ol"},"What does the keyword ",Object(o.b)("strong",{parentName:"li"},"break")," do in a control structure?"),Object(o.b)("li",{parentName:"ol"},"What does the keyword ",Object(o.b)("strong",{parentName:"li"},"continue")," do in loops?"),Object(o.b)("li",{parentName:"ol"},"How many times is the ",Object(o.b)("em",{parentName:"li"},"initialize")," statement in a ",Object(o.b)("em",{parentName:"li"},"for loop")," executed?")))}s.isMDXComponent=!0}}]);