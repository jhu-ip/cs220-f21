(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{143:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),i=(n(0),n(143)),o=["components"],s={id:"day02_questions",title:"Day 2 Recap Questions","reference solutions":"1. `-std=c99` sets the language standard to ISO C99; `-pedantic` Issue all the warnings demanded by strict ISO C and ISO C++; `-Wall` enables all the warnings about constructions that some users consider questionable; `-Wextra` enables some extra warning flags that are not enabled by -Wall. 2. Preprocessor brings together all the code that belongs together; process together all directives that start with `#`. Compiler turns human-readable source code into object code. Linker brings together all relevant object code and into a single executable file. 3. Undefined behavior is behavior which is not specified in the language definition or (other specification) and can thus vary between implementations. We need to care about it because we want our programs to behave the same regardless of the computer they're running on. We call this property portability. 4. In a variable declaration, the keyword `const` indicates that,\tonce received, the value of the variable cannot be changed. 5. Sizes are **minimum** byte size. Actual size varies by implementation. **char** single character, 1 byte, **int** signed integer, 2 bytes (usually 4 bytes), **unsigned** unsigned intenger, 2 bytes, **long** long signed intenger, 4 bytes, **float** single-precision floating point, unspecified (usually 4 bytes), **double** double-precision floating point, unspecified (usually 8 bytes) 6. The expression 7 / 2 evaluates to 3 in C. This is because the two operands are integers, so integer division is inferred."},c={unversionedId:"questions/day02_questions",id:"questions/day02_questions",isDocsHomePage:!1,title:"Day 2 Recap Questions",description:"1. The command to compile a C program is gcc  -std=c99 -pedantic -Wall -Wextra. Use man or Google to find out the meaning of the four flags, i.e. -std=c99, -pedantic, -Wall and -Wextra.",source:"@site/docs/questions/day02_questions.md",slug:"/questions/day02_questions",permalink:"/cs220-f21/docs/questions/day02_questions",version:"current"},l=[],u={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The command to compile a C program is ",Object(i.b)("inlineCode",{parentName:"li"},"gcc <source file> -std=c99 -pedantic -Wall -Wextra"),". Use ",Object(i.b)("inlineCode",{parentName:"li"},"man")," or Google to find out the meaning of the four flags, i.e. ",Object(i.b)("inlineCode",{parentName:"li"},"-std=c99"),", ",Object(i.b)("inlineCode",{parentName:"li"},"-pedantic"),", ",Object(i.b)("inlineCode",{parentName:"li"},"-Wall")," and ",Object(i.b)("inlineCode",{parentName:"li"},"-Wextra"),"."),Object(i.b)("li",{parentName:"ol"},"Briefly describe what a preprocessor, compiler and linker do when transporting C code into executable?"),Object(i.b)("li",{parentName:"ol"},"What does an ",Object(i.b)("strong",{parentName:"li"},"undefined")," behavior mean in programming? Do we need to care about it? Why or why not?"),Object(i.b)("li",{parentName:"ol"},"What does the modifier ",Object(i.b)("inlineCode",{parentName:"li"},"const")," mean? "),Object(i.b)("li",{parentName:"ol"},"What are the primitive types in C and what are their byte sizes?"),Object(i.b)("li",{parentName:"ol"},"What is the value of 7 / 2 (a division of two integers) in a C program?"),Object(i.b)("li",{parentName:"ol"},"Is ",Object(i.b)("inlineCode",{parentName:"li"},"i=i++")," a well-defined expression in C?")))}d.isMDXComponent=!0}}]);