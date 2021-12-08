(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{148:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(a,".").concat(m)]||d[m]||p[m]||i;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(2),o=n(6),i=(n(0),n(148)),a=["components"],c={id:"day23_questions",title:"Day 23 Recap Questions","reference solutions":'1. A way of defining something (function or class) so that it can work with multiple types. 2. A collection of standardly used, templated objects and functions. 3. "for( int i=0 ; i<v.size() ; i++ ) std::cout << v[i] << std::endl;" or " for( vector<type>::iterator it=v.begin() ; it!=v.end ; it++ ) std::cout << *it << std::endl; 4. A clever pointer that knows how to move over the components of a data structure (e.g. supports increment and dereferencing). 5. Use the push_back method. 6. "first == 4.5  middle1 == 0.5   middle2 == 4  last == 20"  (separate lines)'},s={unversionedId:"questions/day23_questions",id:"questions/day23_questions",isDocsHomePage:!1,title:"Day 23 Recap Questions",description:"1. What is a template in C++?",source:"@site/docs/questions/day23_questions.md",slug:"/questions/day23_questions",permalink:"/cs220-f21/docs/questions/day23_questions",version:"current"},u=[],l={rightToc:u};function d(e){var t=e.components,n=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"What is a template in C++?"),Object(i.b)("li",{parentName:"ol"},"What is the standard template library (STL)?"),Object(i.b)("li",{parentName:"ol"},"How do you iterate over a ",Object(i.b)("inlineCode",{parentName:"li"},"std::vector")," and print out its elements?"),Object(i.b)("li",{parentName:"ol"},"What is an iterator in C++?"),Object(i.b)("li",{parentName:"ol"},"How do you add an element to an existing vector."),Object(i.b)("li",{parentName:"ol"},"(Bonus) What is the output of the program below?")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'#include <iostream>\n#include <vector>\n\nusing std::cin; using std::cout; using std::endl;\nusing std::vector;\n\nint main() {\n\n  vector<double> numbers;\n  for (int i = 1; i <= 10; i++) {\n    if (i % 2 == 1)\n      numbers.insert(numbers.begin(), i / 2.0);\n    else\n      numbers.push_back(i * 2.0);\n  }\n\n  vector<double>::iterator it = numbers.begin();\n  cout << "first == " << *it << endl;\n  cout << "middle1 == " << *(it + 4) << endl;\n  cout << "middle2 == " << *(it + 5) << endl;\n  cout << "last == " << *(it + 9) << endl;\n  \n}\n')))}d.isMDXComponent=!0}}]);