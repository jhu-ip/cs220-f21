(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),i=(n(0),n(141));const o={id:"day16_questions",title:"Day 16 Recap Questions","reference solutions":"1. HEAD -> [Node 1 | next-]-> [Node 2 | next-]-> ... [Node n | next-]-> NULL 2. Array is linear in memory, so it is faster in access by indexing, but it has a fixed size and inserting new element is expensive. Linked list has a dynamic size and we can insert new element more efficiently, but it requires more memory spaces and is slower in access (by traversing the whole list). 3. HEAD is a just pointer to the first node or NULL if it is an empty list, while a node contains the data and a pointer to the next node or NULL if it is a tail. 4. We traverse the list starting from the HEAD pointer, advance using the next pointer until it reaches the end (i.e. NULL). Increase the length by 1 for each advancement. 5. First, we allocate a new node for the new data and set its next pointer to be the same as the current node's next pointer, where current node is the node that we want to insert data after it. Last, we update the current node's next pointer to point to this new node."},a={unversionedId:"questions/day16_questions",id:"questions/day16_questions",isDocsHomePage:!1,title:"Day 16 Recap Questions",description:"1. Describe the linked list structure by a diagram.",source:"@site/docs\\questions\\day16_questions.md",slug:"/questions/day16_questions",permalink:"/cs220-f21/docs/questions/day16_questions",version:"current"},s=[],c={rightToc:s};function l({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Describe the linked list structure by a diagram."),Object(i.b)("li",{parentName:"ol"},"Compare arrays and linked lists. Write down their pros and cons."),Object(i.b)("li",{parentName:"ol"},"What is a linked list's head? How is it different from a node? Explain. "),Object(i.b)("li",{parentName:"ol"},"How do you calculate ",Object(i.b)("inlineCode",{parentName:"li"},"length")," of a linked list?"),Object(i.b)("li",{parentName:"ol"},"How do you implement ",Object(i.b)("inlineCode",{parentName:"li"},"add_after")," of a linked list?")))}l.isMDXComponent=!0},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||o;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);