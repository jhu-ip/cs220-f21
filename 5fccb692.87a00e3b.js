(window.webpackJsonp=window.webpackJsonp||[]).push([[29,38],{149:function(e,t,a){"use strict";var i=a(0),o=a.n(i),s=a(144),n=a(135),l=a(48),d=a.n(l);const c=37,p=39;t.a=function(e){const{block:t,children:a,defaultValue:l,values:r,groupId:h,className:m}=e,{tabGroupChoices:k,setTabGroupChoices:f}=Object(s.a)(),[u,b]=Object(i.useState)(l),[P,x]=Object(i.useState)(!1);if(null!=h){const e=k[h];null!=e&&e!==u&&r.some((t=>t.value===e))&&b(e)}const w=e=>{b(e),null!=h&&f(h,e)},g=[],y=e=>{e.metaKey||e.altKey||e.ctrlKey||x(!0)},j=()=>{x(!1)};return Object(i.useEffect)((()=>(window.addEventListener("keydown",y),window.addEventListener("mousedown",j),()=>{window.removeEventListener("keydown",y),window.removeEventListener("mousedown",j)})),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(n.a)("tabs",{"tabs--block":t},m)},r.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":u===e,className:Object(n.a)("tabs__item",d.a.tabItem,{"tabs__item--active":u===e}),style:P?{}:{outline:"none"},key:e,ref:e=>g.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case p:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),y(e)},onFocus:()=>w(e),onClick:()=>{w(e),x(!1)},onPointerDown:()=>x(!1)},t)))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},i.Children.toArray(a).filter((e=>e.props.value===u))[0]))}},150:function(e,t,a){"use strict";var i=a(0),o=a.n(i);t.a=function(e){return o.a.createElement("div",null,e.children)}},160:function(e,t,a){var i={"./wk1data.json":189,"./wk2data.json":190,"./wk3data.json":191,"./wk4data.json":192,"./wk5data.json":193,"./wk6data.json":194,"./wk7data.json":195,"./wk8data.json":196};function o(e){var t=s(e);return a(t)}function s(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}o.keys=function(){return Object.keys(i)},o.resolve=s,e.exports=o,o.id=160},189:function(e){e.exports=JSON.parse('{"days":["Day 1 (08/30)","Day 2 (09/01)","Day 3 (09/03)"],"videos":[[{"title":"Course intro","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=dbce7d0d-59a3-45f1-bf13-ad90013c8a82"},{"title":"Linux, ugrad accounts","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d6bb780e-7f77-423d-a5a2-acb701750ed2"}],[{"title":"Hello world program in C","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2912145c-de78-4810-8a06-acb500313555"},{"title":"C basics","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f25350a1-fca7-4a12-9f9b-acb5003133d2"}],[{"title":"Editors (emacs)","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0bc6cbce-e7db-40f4-8961-acb5003135d4"},{"title":"Git","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=695b3415-c00b-47cc-b015-acb9013c2c2e"},{"title":"Submission workflow","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ab3c5c69-5c49-452a-827a-acb500313465"}]],"slides":[[{"title":"Course intro","link":"../slides/day01_intro.pdf"},{"title":"Linux, ugrad accounts","link":"../slides/day01_linux_basics.pdf"}],[{"title":"Hello world program in C","link":"../slides/day02_hello_world_c.pdf"},{"title":"C basics","link":"../slides/day02_c_basics.pdf"}],[{"title":"Editors (emacs)","link":"../slides/day03_editors.pdf"},{"title":"Git","link":"../slides/day03_git.pdf"},{"title":"Submission workflow","link":"../slides/day03_submission_workflow.pdf"}]],"questions":[[{"title":"Day 1","link":"../docs/questions/day01_questions"}],[{"title":"Day 2","link":"../docs/questions/day02_questions"}],[{"title":"Day 3","link":"../docs/questions/day03_questions"}]],"exercises":[[{"title":"Github account","link":"../docs/exercises/github"}],[{"title":"Ex1-1","link":"../docs/exercises/ex1-1"}],[{"title":"Ex1-2","link":"../docs/exercises/ex1-2"},{"title":"Ex1-3","link":"../docs/exercises/ex1-3"}]],"resources":[[{"title":"Unix/Linux Tutorial","link":"https://cs.jhu.edu/~joanne/unix.html"},{"title":"Unix/Linux Reference Card","link":"https://cs.jhu.edu/~joanne/unixRC.pdf"},{"title":"Github SSH key setup","link":"../docs/resources/github-ssh"}],[{"title":"Online C compiler","link":"https://www.onlinegdb.com/online_c_compiler"}],[{"title":"Emacs reference card","link":"https://www.gnu.org/software/emacs/refcards/pdf/refcard.pdf"},{"title":"Interactive vim tutorial","link":"https://www.openvim.com/"},{"title":"Git cheatsheet","link":"https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf"}]],"zooms":[[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e6a7e7df-b893-49e6-8130-ad94011e7c37"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=16b06102-cde1-4cc2-a666-ad94014c5547"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b25181e8-4a12-4a84-a956-ad940109d048"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=aa5aee15-2fef-47d6-82d2-ad9400e521fa"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1d955987-0955-472c-b715-ad96011c1159"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=bd2a60bb-f36a-4ef1-ae02-ad9601526379"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d82dd874-bd6a-4179-a7dc-ad96010693ce"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e1e56dcd-e20a-4496-bd2c-ad9600e664c0"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=48909e92-b45d-4348-aa13-ad98011cc795"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f13dac7d-a71f-43c1-a870-ad9801543d29"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=bfa3ac5b-cc82-41fd-9654-ad9800fc1a7d"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=66766265-801d-44cd-9f11-ad9800ead3f6"}]]}')},190:function(e){e.exports=JSON.parse('{"days":["Labor Day (9/6)","Day 4 (9/8)","Day 5 (9/10)"],"videos":[[{"title":"N/A","link":"#"}],[{"title":"Logical operators, control flow","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e83c3c47-6ee8-4351-b488-acb500313777"}],[{"title":"Arrays, ASCII","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d75b0b98-f404-4e00-94dd-acb500313362"},{"title":"C strings","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=aff96a7c-3c0a-4631-a005-acb5003132e3"}]],"slides":[[{"title":"N/A","link":"#"}],[{"title":"Logical operators, control flow","link":"../slides/day04_control_flow.pdf"}],[{"title":"Arrays","link":"../slides/day05_arrays.pdf"},{"title":"C Strings","link":"../slides/day05_c_strings.pdf"}]],"questions":[[{"title":"N/A","link":"#"}],[{"title":"Day 4","link":"../docs/questions/day04_questions"}],[{"title":"Day 5","link":"../docs/questions/day05_questions"}]],"exercises":[[{"title":"N/A","link":"#"}],[{"title":"Ex2-1","link":"../docs/exercises/ex2-1"}],[{"title":"Ex2-2","link":"../docs/exercises/ex2-2"}]],"resources":[[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}],[{"title":"Section 03 example","link":"../docs/resources/lect-d05-s03"}]],"zooms":[[{"title":"N/A","link":"#"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0e954cba-cc7b-42d2-82f0-ad9d01213f4b"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=603edf9d-035f-4cf2-9d63-ad9d01532b3e"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0780906e-6670-459a-94ff-ad9d01027ccb"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=26f8d198-3aa6-4a78-b700-ad9d00e86366"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=eb8c438f-1a40-4cd6-a523-ad9f011cf9b1"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d99ce167-0671-4805-931d-ad9f015293df"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c2ecfc21-dea1-424f-97fb-ad9f00fd0a3e"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7d88f157-3dad-446e-ba62-ad9f00e809e6"}]]}')},191:function(e){e.exports=JSON.parse('{"days":["Day 6 (9/13)","Day 7 (9/15)","Day 8 (9/17)"],"videos":[[{"title":"File I/O, assert, math functions","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=222af12f-e830-4f46-90d8-acb500313281"},{"title":"Writing functions, command line arguments","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d3706539-7a02-4a5d-8850-acb5003131e8"}],[{"title":"Function declarations","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f5732da2-23a6-48b6-87fb-acb500312fee"},{"title":"Passing arrays to functions","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ee062ff8-9081-494b-ac8a-acb500312f87"},{"title":"Recursion","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=95564f92-94bc-492d-930b-acc50057460a"}],[{"title":"Separate compilation","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b974c998-f6dd-440c-8887-acb50031315c"},{"title":"Makefiles","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c5d10cc2-d6ab-414e-8392-acb5003130de"},{"title":"Header guards","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ec849587-7fab-433f-9ca2-acb500313080"}]],"slides":[[{"title":"File I/O, assert, math functions","link":"../slides/day06_fileio_assertion_math.pdf"},{"title":"Writing functions, command line arguments","link":"../slides/day06_functions_command_line_arguments.pdf"}],[{"title":"Function declarations","link":"../slides/day07_function_declaration.pdf"},{"title":"Passing arrays to functions","link":"../slides/day07_passing_arrays_to_functions.pdf"},{"title":"Recursion","link":"../slides/day07_recursion.pdf"}],[{"title":"Separate compilation","link":"../slides/day08_separate_compilation.pdf"},{"title":"Makefiles","link":"../slides/day08_makefiles.pdf"},{"title":"Header guards","link":"../slides/day08_header_guards.pdf"}]],"questions":[[{"title":"Day 6","link":"../docs/questions/day06_questions"}],[{"title":"Day 7","link":"../docs/questions/day07_questions"}],[{"title":"Day 8","link":"../docs/questions/day08_questions"}]],"exercises":[[{"title":"Ex 6 (2-3)","link":"../docs/exercises/ex06"}],[{"title":"Ex 7 (3-1)","link":"../docs/exercises/ex07"}],[{"title":"Ex 8 (3-2)","link":"../docs/exercises/ex08"}]],"resources":[[{"title":"TBA","link":"#"}],[{"title":"TBA","link":"#"}],[{"title":"C Makefile Cheat Sheet","link":"https://cppcheatsheet.com/notes/c_make.html"}]],"zooms":[[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8110f83a-673c-42b8-a6fa-ada2011fda86"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d274064d-8652-4af4-a642-ada2014b6a6e"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3a3392d5-3c3b-430c-90a3-ada200fefa00"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7baaed85-951e-4935-bc9b-ada200e4ac93"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6966fc80-4423-4cb0-aa8d-ada4011ce38d"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3b2b07f7-ddb6-425e-95b1-ada40150ee5d"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f3fa16ef-9f5a-4f3a-a532-ada400fd9a8b"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ee7fdd55-d5b2-4df5-aad3-ada400e27261"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=872a5ae6-ac8e-436b-b251-ada6011fb469"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5c2cd876-dd75-423e-ad79-ada6014fd321"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cd93fe16-bb18-4a27-b3f9-ada600fcf834"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fbbae718-6519-44c2-88fd-ada600e340e5"}]]}')},192:function(e){e.exports=JSON.parse('{"days":["Day 9 (9/20)","Day 10 (9/22)","Day 11 (9/24)"],"videos":[[{"title":"Multidimensional arrays, gdb","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6d13469d-e03f-44d2-8b49-acb500312ea5"}],[{"title":"Pointer Basics","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fff26523-30d0-4dec-833e-acb500312e2b"}],[{"title":"Dynamic Memory Allocation","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=f34a6017-a4e9-4f02-9aba-acb500312d7e"},{"title":"Valgrind","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6bac2637-2609-46f8-9273-acb500312d1e"}]],"slides":[[{"title":"Multidimensional arrays, gdb","link":"../slides/day09_multidimensional_arrays_gdb.pdf"}],[{"title":"Pointer Basics","link":"../slides/day10_pointers.pdf"}],[{"title":"Dynamic Memory Allocation","link":"../slides/day11_dynamic_memory_allocation.pdf"},{"title":"Valgrind","link":"../slides/day11_valgrind.pdf"}]],"questions":[[{"title":"Day 9","link":"../docs/questions/day09_questions"}],[{"title":"Day 10","link":"../docs/questions/day10_questions"}],[{"title":"Day 11","link":"../docs/questions/day11_questions"}]],"exercises":[[{"title":"Ex 9 (3-3)","link":"../docs/exercises/ex09"}],[{"title":"Ex 10 (4-1)","link":"../docs/exercises/ex10"}],[{"title":"Ex 11 (4-2)","link":"../docs/exercises/ex11"}]],"resources":[[{"title":"GDB Cheat Sheet","link":"https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf"}],[{"title":"Binky the Pointer (video)","link":"https://www.youtube.com/watch?v=5VnDaHBi8dM"}],[{"title":"N/A","link":"#"}]],"zooms":[[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4ed2e9c0-0fef-4ccc-9a60-ada9011d011f"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0ba7ad37-0bf9-491d-8882-ada9014f1724"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0ee0d606-89ef-40f0-9768-ada900fe7cc0"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a8f13a49-f761-42f4-9b98-ada900e38cfb"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=da4988c0-a3aa-487b-8eab-adab011e26e5"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=998a17f0-b5d1-4b8f-88da-adab0152f8f2"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=96a7d96c-98f3-42c8-a737-adab00fd44e0"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6e41f462-aee0-40f1-bb7a-adab00e2b83b"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=92d689bd-d9a1-4fbd-86ee-adad011f7055"},{"title":"Section 3","link":"  https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5ee6c381-8815-4442-a710-adad0151d017"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=adb3a404-c1c2-44a8-a2f5-adad00fddf9c"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=de2be1f0-67e7-4b6e-afd3-adad00e33551"}]]}')},193:function(e){e.exports=JSON.parse('{"days":["Day 12 (9/27)","Day 13 (9/29)","Day 14 (10/1)"],"videos":[[{"title":"Pointer Arithmetic","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=27e05586-457c-40c1-99b0-acd0012ea8cf"},{"title":"Dynamic 2D Arrays, Pointers & const","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e8e772dd-e10f-4373-8968-acd001826cc7"}],[{"title":"Lifetime/scope","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=708e30e5-78bf-4b90-9739-acb500312c7e"},{"title":"Structs","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e3713ed2-286e-459b-8345-acb500312c09"},{"title":"Random number generation","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2673bca1-fe33-44be-8071-acd2001a397e"}],[{"title":"Binary file I/O","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cc5e280f-8830-4228-a464-acd1005a75b0"},{"title":"Bitwise operations","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d917e33b-f380-4459-9653-acb500312b05"}]],"slides":[[{"title":"Pointer Arithmetic","link":"../slides/day12_pointer_arithmetic.pdf"},{"title":"Dynamic 2D Arrays, Pointers & const","link":"../slides/day12_more_pointers_dynamic_2d_arrays.pdf"}],[{"title":"Lifetime/scope","link":"../slides/day13_lifetime_scope.pdf"},{"title":"Structs","link":"../slides/day13_struct_type.pdf"},{"title":"Random numbers","link":"../slides/day13_random_numbers.pdf"}],[{"title":"Binary file I/O","link":"../slides/day14_binary_file_io.pdf"},{"title":"Bitwise operations","link":"../slides/day14_bitwise_operations.pdf"}]],"questions":[[{"title":"Day 12","link":"../docs/questions/day12_questions"}],[{"title":"Day 13","link":"../docs/questions/day13_questions"}],[{"title":"Day 14","link":"../docs/questions/day14_questions"}]],"exercises":[[{"title":"Ex 12 (4-3)","link":"../docs/exercises/ex12"}],[{"title":"Ex 13 (5-1)","link":"../docs/exercises/ex13"}],[{"title":"Ex14 (5-2)","link":"../docs/exercises/ex14"}]],"resources":[[{"title":"N/A","link":""}],[{"title":"N/A","link":""}],[{"title":"N/A","link":""}]],"zooms":[[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4c2e7c5b-4e61-477f-88ab-adb0011d3115"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=bae6d341-93f3-45ed-8906-adb001512041"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=794c3189-f9d1-4663-abff-adb000ff457c"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=54fd46da-b90d-447d-887d-adb000f5b87d"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=33b4567a-db2b-4a5a-a065-adb2011d35e0"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2d13cf78-448b-400d-9eed-adb2014fb180"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b2f97152-d731-42e2-8b87-adb200fbabcd"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2e4ad048-1442-4a48-a4df-adb200e46b7e"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b717d840-7bf7-41cf-ab7b-adb4011d24e3"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=65e667a9-de35-4c95-a44e-adb4014ea92c"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d3148823-14a0-4673-8aa9-adb400fcfb1b"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2c3b0864-cf25-4f3c-8951-adb400e76d37"}]]}')},194:function(e){e.exports=JSON.parse('{"days":["Day 15 (10/04)","Day 16 (10/06)","Day 17 (10/08)"],"videos":[[{"title":"Random number generation","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2673bca1-fe33-44be-8071-acd2001a397e"},{"title":"Number representation, type conversion/casting","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7534d0e3-e420-4206-ac0f-acb500312a82"}],[{"title":"N/A","link":"#"}],[{"title":"Linked lists","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=aa5a0c06-ca88-420c-8dc9-acb500312992"}]],"slides":[[{"title":"Random numbers","link":"../slides/day13_random_numbers.pdf"},{"title":"Number representation, type conversions","link":"../slides/day15_number_rep_type_conversions.pdf"}],[{"title":"Midterm project","link":"../docs/assignments/midterm"}],[{"title":"Linked lists","link":"../slides/day16_linked_lists.pdf"}]],"questions":[[{"title":"Day 15","link":"../docs/questions/day15_questions"}],[{"title":"N/A","link":"#"}],[{"title":"Day 17","link":"../docs/questions/day17_questions"}]],"exercises":[[{"title":"Ex 15 (5-3)","link":"../docs/exercises/ex15"}],[{"title":"Midterm Project","link":"../docs/assignments/midterm"}],[{"title":"Ex 16 (6-1)","link":"../docs/exercises/ex16"}]],"resources":[[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}],[{"title":"Midterm review questions","link":"https://docs.google.com/document/d/19Wwak8BQWpML5ot-u3NRs38EtpuA-I5g5ACQbbDzg5U/edit?usp=sharing"}]],"zooms":[[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7a40a1fe-a2eb-4d55-9b73-adb7011cb4ea"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cd7108a2-e6de-4c2a-950f-adb7015639ff"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=bb6136cc-2203-4f8e-a86e-adb700fd2ace"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=72eab2f9-80de-4b3d-9a28-adb700e7e24d"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=fbd08b86-15af-413a-8940-adb9011f2827"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1fd11247-2cb3-4faa-890e-adb90154e851"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=10668705-0595-4e77-89aa-adb90106f271"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d48f4184-b13f-4446-9ecf-adb900effa35"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0d16cfcd-3c19-4a49-bf01-adbb011f251d"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=34538a66-7c8e-435a-92f2-adbb014f7b4f"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=16f75e03-16c6-4f60-bb2a-adbb00fc6b5c"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9793f30a-91c5-4f20-ac0f-adbb00e10a9b"}]]}')},195:function(e){e.exports=JSON.parse('{"days":["Day 18 (10/11)","Day 19 (10/13)","Day 20 (10/15)"],"videos":[[{"title":"More linked lists","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=194870d7-41d8-488c-9f41-acb50031292b"}],[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}]],"slides":[[{"title":"More linked lists","link":"../slides/day17_more_linked_lists.pdf"}],[{"title":"Midterm project","link":"../docs/assignments/midterm"}],[{"title":"Midterm project","link":"../docs/assignments/midterm"}]],"questions":[[{"title":"Day 18","link":"../docs/questions/day18_questions"}],[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}]],"exercises":[[{"title":"Ex 17 (6-2)","link":"../docs/exercises/ex17"}],[{"title":"Midterm Project","link":"../docs/assignments/midterm"}],[{"title":"Midterm Project","link":"../docs/assignments/midterm"}]],"resources":[[{"title":"N/A","link":"#"}],[{"title":"Midterm review answers","link":"https://docs.google.com/document/d/1f_Tp9_IKy-kdCfzrnTLuZPpsXpL0Z7YobYPnBz1T5A8/edit?usp=sharing"}],[{"title":"N/A","link":"#"}]],"zooms":[[{"title":"Section 1","link":" https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=cfb47a41-e627-4667-9f7a-adbe011d1db0"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8efb022a-db50-4861-9e63-adbe01500ec1"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4a5da3b0-7454-4d28-a7c2-adbe01005cfc"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c48ed68e-ddef-40c4-b668-adbe00e2ff28"}],[{"title":"Section 1","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5f369558-846f-4d44-8760-adc0011efc2e"},{"title":"Section 3","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=92ed395c-8dd2-45d0-be8d-adc0014d1ff7"},{"title":"Section 4","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=22efa554-a481-49f8-bb89-adc000fe0050"},{"title":"Section 5","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=2ce189f2-0f88-450f-ba20-adc000dca5ec"}],[{"title":"Section 1 (N/A)","link":"#"},{"title":"Section 3 (N/A)","link":"#"},{"title":"Section 4 (N/A)","link":"#"},{"title":"Section 5 (N/A)","link":"#"}]]}')},196:function(e){e.exports=JSON.parse('{"days":["Day 21 (10/18)","Day 22 (10/20)","Day 23 (10/22)"],"videos":[[{"title":"N/A","link":"#"}],[{"title":"Intro to C++","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=c329e877-f1b8-45b6-90de-acb50031618c"},{"title":"C++ strings","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=ce1a7ac8-7d0f-4130-81ec-acb500316125"}],[{"title":"Intro to STL","link":"https://jh.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=9c04a4c9-6962-48c0-8705-acb5003160a6"}]],"slides":[[{"title":"N/A","link":"#"}],[{"title":"Intro to C++","link":"../slides/day22_intro_cpp.pdf"},{"title":"C++ strings","link":"../slides/day22_cpp_strings.pdf"}],[{"title":"Intro to STL","link":"../slides/day23_stl_templates.pdf"}]],"questions":[[{"title":"N/A","link":"#"}],[{"title":"Day 22","link":"../docs/questions/day22_questions"}],[{"title":"Day 23","link":"../docs/questions/day23_questions"}]],"exercises":[[{"title":"Midterm Exam","link":"https://www.gradescope.com/courses/305148"}],[{"title":"Ex 18 (8-1)","link":"../docs/exercises/ex18"}],[{"title":"Ex 19 (8-2)","link":"../docs/exercises/ex19"}]],"resources":[[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}],[{"title":"N/A","link":"#"}]],"zooms":[[{"title":"Section 1 (N/A)","link":"#"},{"title":"Section 3 (N/A)","link":"#"},{"title":"Section 4 (N/A)","link":"#"},{"title":"Section 5 (N/A)","link":"#"}],[{"title":"Section 1 (TBA)","link":"#"},{"title":"Section 3 (TBA)","link":"#"},{"title":"Section 4 (TBA)","link":"#"},{"title":"Section 5 (TBA)","link":"#"}],[{"title":"Section 1 (TBA)","link":"#"},{"title":"Section 3 (TBA)","link":"#"},{"title":"Section 4 (TBA)","link":"#"},{"title":"Section 5 (TBA)","link":"#"}]]}')},47:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),s=a(49),n=a.n(s);t.default=function(e){return e.days&&e.videos&&e.slides&&e.questions&&e.exercises&&e.resources&&e.zooms?o.a.createElement("table",{className:n.a.table},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null),o.a.createElement("th",null,e.days[0]),o.a.createElement("th",null,e.days[1]),o.a.createElement("th",null,e.days[2]))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Videos"),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.videos[0].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.videos[1].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.videos[2].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),o.a.createElement("tr",null,o.a.createElement("th",null,"Slides"),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.slides[0].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.slides[1].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.slides[2].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),o.a.createElement("tr",null,o.a.createElement("th",null,"Recap Questions"),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.questions[0].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link}," ",e.title," ")))))),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.questions[1].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link}," ",e.title," ")))))),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.questions[2].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link}," ",e.title," "))))))),o.a.createElement("tr",null,o.a.createElement("th",null,"Exercise"),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.exercises[0].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link}," ",e.title," ")))))),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.exercises[1].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link}," ",e.title," ")))))),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.exercises[2].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link}," ",e.title," "))))))),o.a.createElement("tr",null,o.a.createElement("th",null,"Additional Resources"),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.resources[0].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.resources[1].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.resources[2].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))),o.a.createElement("tr",null,o.a.createElement("th",null,"Recorded Sessions"),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.zooms[0].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.zooms[1].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," ")))))),o.a.createElement("th",null,o.a.createElement("ul",{className:n.a.li},e.zooms[2].map(((e,t)=>o.a.createElement("li",{key:t},o.a.createElement("a",{href:e.link,target:"_blank"}," ",e.title," "))))))))):o.a.createElement("div",null)}},88:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),s=a(141),n=a(149),l=a(150),d=a(47);t.default=function(){for(var e=new Array,t=1;t<=7;++t)try{let i=a(160)("./wk"+t+"data.json");e.push(o.a.createElement(l.a,{value:"w"+t},o.a.createElement(d.default,{days:i.days,videos:i.videos,slides:i.slides,questions:i.questions,exercises:i.exercises,resources:i.resources,zooms:i.zooms})))}catch(r){console.log("cannot read from ./data/wk"+t+"data.json")}var i=o.a.createElement(n.a,{defaultValue:"w7",values:[{label:"Wk 1",value:"w1"},{label:"Wk 2",value:"w2"},{label:"Wk 3",value:"w3"},{label:"Wk 4",value:"w4"},{label:"Wk 5",value:"w5"},{label:"Wk 6",value:"w6"},{label:"Wk 7",value:"w7"}]},e),c=new Array;for(t=8;t<=14;++t)try{let e=a(160)("./wk"+t+"data.json");c.push(o.a.createElement(l.a,{value:"w"+t},o.a.createElement(d.default,{days:e.days,videos:e.videos,slides:e.slides,questions:e.questions,exercises:e.exercises,resources:e.resources,zooms:e.zooms})))}catch(r){console.log("cannot read from ./data/wk"+t+"data.json")}var p=o.a.createElement(n.a,{defaultValue:"w8",values:[{label:"Wk 8",value:"w8"},{label:"Wk 9",value:"w9"},{label:"Wk 10",value:"w10"},{label:"Wk 11",value:"w11"},{label:"Wk 12",value:"w12"},{label:"Wk 13",value:"w13"},{label:"Wk 14",value:"w14"}]},c);return o.a.createElement(s.a,{title:"Schedule"},o.a.createElement("span",{className:"alert alert--info",style:{display:"flex",justifyContent:"center",padding:"0 0 0 0"}},"The weekly tabs will be populated with new course material as the semester progresses - see the tentative\xa0",o.a.createElement("a",{href:"../schedule"},"schedule"),"."),o.a.createElement("div",{style:{display:"block",justifyContent:"center",padding:"1% 1% 1% 1%"},class:"container"},o.a.createElement(n.a,{block:"true",defaultValue:"c++",values:[{label:"C (Week 1 - Week 7)",value:"c"},{label:"C++ (Week 8 - Week 14)",value:"c++"}]},o.a.createElement(l.a,{value:"c"},i),o.a.createElement(l.a,{value:"c++"},p))))}}}]);