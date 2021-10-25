(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{137:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,b=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),i=(n(0),n(137)),a=["components"],c={id:"day18_questions",title:"Day 18 Recap Questions","reference solutions":"1. We first create the new node with the new data and set its next pointer to what the HEAD is pointing to. Then, we update the HEAD pointer to point to the new node. 2. Doubly linked list is a bi-directional linked list. We can add another pointer field called previous and use it to point to the previous node. The first node's previous pointer would be NULL. 3. We need a deep copy. We traverse the list and create new node from the old one. We need to pay attention to how to setup the next pointer for the new list. It should point to the newly created node. 4. Because we need to change the HEAD pointer, we need to use pointer-to-pointer in the add_front function, so that we can change the HEAD pointer value in the function. 5. An empty list?"},l={unversionedId:"questions/day18_questions",id:"questions/day18_questions",isDocsHomePage:!1,title:"Day 18 Recap Questions",description:"1. How do you implement add_front on a linked list?",source:"@site/docs/questions/day18_questions.md",slug:"/questions/day18_questions",permalink:"/cs220-f21/docs/questions/day18_questions",version:"current"},s=[],u={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"How do you implement ",Object(i.b)("em",{parentName:"li"},"add_front")," on a linked list?"),Object(i.b)("li",{parentName:"ol"},"How do you modify a singly linked list to create a doubly linked list?"),Object(i.b)("li",{parentName:"ol"},"How do you make a copy of a singly linked list?"),Object(i.b)("li",{parentName:"ol"},"Why does ",Object(i.b)("em",{parentName:"li"},"add_after")," takes a ",Object(i.b)("inlineCode",{parentName:"li"},"Node *")," as input, but ",Object(i.b)("em",{parentName:"li"},"add_front")," takes ",Object(i.b)("inlineCode",{parentName:"li"},"Node **"),"?"),Object(i.b)("li",{parentName:"ol"},"What cases should be handled when implementing ",Object(i.b)("em",{parentName:"li"},"delete_front"),"?")))}p.isMDXComponent=!0}}]);