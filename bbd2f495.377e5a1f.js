(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{112:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var a=t(2),r=t(6),i=(t(0),t(135)),o=["components"],c={id:"day10_questions",title:"Day 10 Recap Questions","reference solutions":'1. Pointer is a data type in C that stores a memory address. We can dereference it to retrieve the value in the memory. 2. `p = &a` 3. use `*p` in place of `a` as in `printf("%d", *p)` and `*p = 10;` 4. because in order to change the variable in the calling function, you need to pass the address of the variable 5. 1.00, 32.00, 13.00, 40'},l={unversionedId:"questions/day10_questions",id:"questions/day10_questions",isDocsHomePage:!1,title:"Day 10 Recap Questions",description:"1. What is a pointer?",source:"@site/docs/questions/day10_questions.md",slug:"/questions/day10_questions",permalink:"/cs220-f21/docs/questions/day10_questions",version:"current"},p=[],u={rightToc:p};function s(e){var n=e.components,t=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"What is a pointer?"),Object(i.b)("li",{parentName:"ol"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"a")," is an int variable, and ",Object(i.b)("inlineCode",{parentName:"li"},"p")," is a variable whose type is ",Object(i.b)("em",{parentName:"li"},"pointer-to-int"),", how do you make ",Object(i.b)("inlineCode",{parentName:"li"},"p")," point to ",Object(i.b)("inlineCode",{parentName:"li"},"a"),"?"),Object(i.b)("li",{parentName:"ol"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"p")," is a ",Object(i.b)("em",{parentName:"li"},"pointer-to-int")," variable that points to an ",Object(i.b)("inlineCode",{parentName:"li"},"int")," variable ",Object(i.b)("inlineCode",{parentName:"li"},"a"),", how can you access the value of ",Object(i.b)("inlineCode",{parentName:"li"},"a")," or assign a value to ",Object(i.b)("inlineCode",{parentName:"li"},"a")," without directly referring to ",Object(i.b)("inlineCode",{parentName:"li"},"a"),"?  Show examples of printing the value of ",Object(i.b)("inlineCode",{parentName:"li"},"a")," and modifying the value of ",Object(i.b)("inlineCode",{parentName:"li"},"a"),", but without directly referring to ",Object(i.b)("inlineCode",{parentName:"li"},"a"),"."),Object(i.b)("li",{parentName:"ol"},"When calling ",Object(i.b)("inlineCode",{parentName:"li"},"scanf"),", why do you need to put a ",Object(i.b)("inlineCode",{parentName:"li"},"&")," symbol in front of a variable in which you want ",Object(i.b)("inlineCode",{parentName:"li"},"scanf")," to store an input value?"),Object(i.b)("li",{parentName:"ol"},"Trace the little program below and determine what the output will be.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'int func(float ra[], float x, float *y) {\n    ra[0] += 10;\n    x *= 20;\n    *y += 30;\n    return 40;\n}\nint main() {\n    float a = 1;\n    float b = 2;\n    float c[] = {3, 4, 5, 6};\n    int d;\n    d = func(c, a, &b);\n    printf("%.2f, %.2f, %.2f, %d\\n", a, b, c[0], d);\n}\n')))}s.isMDXComponent=!0},135:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,d=s["".concat(o,".").concat(f)]||s[f]||b[f]||i;return t?r.a.createElement(d,c(c({ref:n},p),{},{components:t})):r.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);