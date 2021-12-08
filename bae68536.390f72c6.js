(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(148)),o=["components"],c={id:"hw5",title:"Homework 5"},l={unversionedId:"assignments/hw5",id:"assignments/hw5",isDocsHomePage:!1,title:"Homework 5",description:"* You are expected to work individually.",source:"@site/docs/assignments/hw5.md",slug:"/assignments/hw5",permalink:"/cs220-f21/docs/assignments/hw5",version:"current"},s=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Git log",id:"git-log",children:[]},{value:"README",id:"readme",children:[]},{value:"Specific Requirements",id:"specific-requirements",children:[]},{value:"Hints and Suggestions",id:"hints-and-suggestions",children:[{value:"Makefile",id:"makefile",children:[]},{value:"Your submission to Gradescope",id:"your-submission-to-gradescope",children:[]}]}],d={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"You are expected to work individually."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Due: Tuesday ",Object(r.b)("strong",{parentName:"strong"},"November 2nd")," at 11pm (Baltimore time).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"This assignment is worth 70 points."))))),Object(r.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(r.b)("div",{className:"admonition admonition-success alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Objectives")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"C++ STL containers"),Object(r.b)("li",{parentName:"ul"},"the ",Object(r.b)("inlineCode",{parentName:"li"},"string")," class"),Object(r.b)("li",{parentName:"ul"},"file I/O"),Object(r.b)("li",{parentName:"ul"},"command-line arguments"),Object(r.b)("li",{parentName:"ul"},"input validation")))),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Before you start working on this homework, make sure you do a ",Object(r.b)("inlineCode",{parentName:"p"},"git pull")," on the ",Object(r.b)("inlineCode",{parentName:"p"},"public")," repo to get a copy of the starter code that comes with this assignment. The starter code is very minimal that includes one file only named ",Object(r.b)("inlineCode",{parentName:"p"},"digraph_analyzer.cpp"),". For this homework, you do not need to do any extra error checking other than what is already included in the instructions and starter code!"))),Object(r.b)("p",null,"In this assignment, you will write a program to analyze digraphs and trigraphs in an input text file. A digraph/trigraph is a combination of letters that form one sound in a word (e.g., ",Object(r.b)("inlineCode",{parentName:"p"},"ch")," in ",Object(r.b)("inlineCode",{parentName:"p"},"character")," or ",Object(r.b)("inlineCode",{parentName:"p"},"sch")," in ",Object(r.b)("inlineCode",{parentName:"p"},"schindler"),"). The format of an input text file is as follows:"),Object(r.b)("p",null,"There is a positive integer number ",Object(r.b)("inlineCode",{parentName:"p"},"n")," at the beginning of the file indicating how many digraphs/trigraphs will be processed; a list of ",Object(r.b)("inlineCode",{parentName:"p"},"n")," digraphs/trigraphs will then follow. After this list, there is a text. A text is a sequence of words with only a limited set of punctuations. The possible punctuations are period, comma, exclamation point and question mark. You can assume there will be no other punctuations in the text."),Object(r.b)("p",null,"Example of a valid input file (",Object(r.b)("inlineCode",{parentName:"p"},"input.txt"),"):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"5 ch ou ee sch wh\n\nI was lucky. All of a sudden I thought of something that helped make me know I was getting \nthe hell out. I suddenly remembered this time in around October that I and Robert Tichener \nand Paul Campbell were chucking a football around in front of the academic building. They \nwere nice guys, especially Tichener. It was just before dinner and it was getting pretty \ndark out but we kept chucking the ball around anyway. It kept getting darker and darker \nand we could hardly see the ball any more, but we did not want to stop doing what we were \ndoing. Finally we had to. This teacher that taught biology Mr. Zambesis stuck his head out \nof this window in the academic building and told us to go back to the dorm and get ready for \ndinner. If I get a chance to remember that kind of stuff I can get a goodby when I need one, \nat least most of the time I can. As soon as I got it, I turned around and started running down \nthe other side of the hill toward old Spencer house. He did not live on the campus. He lived \non Anthony Wayne Avenue.\n")),Object(r.b)("p",null,"The program should count how many times each of the expected digraphs/trigraphs occur in the text, ",Object(r.b)("em",{parentName:"p"},"case-insensitively"),". Then, it should print to standard output the list of all the digraphs/trigraphs and their containing words (in order of their appearance in the text) in lower case, with the digraphs/trigraphs sorted in one of the three ways specified as a command-line argument. The possible arguments are: ",Object(r.b)("inlineCode",{parentName:"p"},"a")," (ASCII order), ",Object(r.b)("inlineCode",{parentName:"p"},"r")," (reverse ASCII order), and ",Object(r.b)("inlineCode",{parentName:"p"},"c")," (count, ordered from largest to smallest, with ties broken by ASCII order)."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"./digraph_analyzer input.txt r\n")),Object(r.b)("p",null,"will run your executable named ",Object(r.b)("inlineCode",{parentName:"p"},"digraph_analyzer")," on the input file named ",Object(r.b)("inlineCode",{parentName:"p"},"input.txt")," (given above) located in the current folder and outputs the digraphs/trigraphs in reverse-ASCII order (e.g., digraph ",Object(r.b)("inlineCode",{parentName:"p"},"ou")," would be printed before digraph ",Object(r.b)("inlineCode",{parentName:"p"},"ee"),"). Note the punctuations are removed from the words and all output is lower-case only. ","[Recall: possible punctuations are limited to comma, exclamation point, question mark and period.]"," This will be the output of the above command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"wh: [what, when]\nsch: []\nou: [thought, out, around, around, out, around, could, out, around, house]\nee: [see, need]\nch: [tichener, chucking, tichener, chucking, teacher, chance]\nq?>\n")),Object(r.b)("p",null,"As can be seen, the program then awaits the user to enter queries by prompting ",Object(r.b)("inlineCode",{parentName:"p"},"q?>"),". The user can input 1) a number, 2) a digraph, or ) the word ",Object(r.b)("inlineCode",{parentName:"p"},"exit"),". If a number is entered, it should list all the digraphs/trigraphs (in ASCII order) that occur that many times and their corresponding containing words (in order of their appearance in the text), or print ",Object(r.b)("inlineCode",{parentName:"p"},"None")," if none exists. If a digraph/trigraph is entered, it should list how many times the digraph/trigraph occurs and in which words (in order of their appearance in the text) or ",Object(r.b)("inlineCode",{parentName:"p"},"No such digraph")," if it is not in the list of input digraphs/trigraphs; 0 would be printed for digraphs/trigraphs that are among the input list but not found in any word of the text. The program terminates when the word ",Object(r.b)("inlineCode",{parentName:"p"},"exit")," is typed in. All input queries should be accepted as either upper or lower case, and handled as if lower case. "),Object(r.b)("p",null,"Sample query runs on the ",Object(r.b)("inlineCode",{parentName:"p"},"input.txt")," example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"./digraph_analyzer input.txt r\nwh: [what, when]\nsch: []\nou: [thought, out, around, around, out, around, could, out, around, house]\nee: [see, need]\nch: [tichener, chucking, tichener, chucking, teacher, chance]\nq?>6\nch: [tichener, chucking, tichener, chucking, teacher, chance]\nq?>0\nsch: []\nq?>ch\n6: [tichener, chucking, tichener, chucking, teacher, chance]\nq?>sch\n0: []\nq?>CH\n6: [tichener, chucking, tichener, chucking, teacher, chance]\nq?>ck\nNo such digraph\nq?>exit\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Important Note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The program must use container classes from the C++ Standard Template Library (STL) to keep track of digraphs, words, and counts.  You must at least use ",Object(r.b)("inlineCode",{parentName:"p"},"std::string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"std::vector")," and ",Object(r.b)("inlineCode",{parentName:"p"},"std::map"),", but you are free to use others as well. Take the time to understand the STL containers; selecting the right ones will make your code cleaner and easier to write and debug."))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Special Cases")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"If a certain digraph/trigraph is contained more than once in a word, count that appearance of the word only once. For example, the digraph ",Object(r.b)("inlineCode",{parentName:"li"},"ch")," is in the word ",Object(r.b)("inlineCode",{parentName:"li"},"chacha")," twice, but should only be counted once. "),Object(r.b)("li",{parentName:"ul"},"If a digraph is found in a word that occurs more than once in the text, that word should be counted as many times as it occurs in the text.")))),Object(r.b)("h2",{id:"git-log"},"Git log"),Object(r.b)("p",null,"In the assignments folder of your private repository, create a new subfolder named ",Object(r.b)("inlineCode",{parentName:"p"},"hw5"),".  Do your work in that subfolder and use ",Object(r.b)("inlineCode",{parentName:"p"},"git add"),", ",Object(r.b)("inlineCode",{parentName:"p"},"git commit")," and ",Object(r.b)("inlineCode",{parentName:"p"},"git push")," regularly to backup your work as you make progress!"),Object(r.b)("h2",{id:"readme"},"README"),Object(r.b)("p",null,"You need to submit a file called ",Object(r.b)("inlineCode",{parentName:"p"},"README")," (not ",Object(r.b)("inlineCode",{parentName:"p"},"README.txt")," or ",Object(r.b)("inlineCode",{parentName:"p"},"README.md"),", etc -- just ",Object(r.b)("inlineCode",{parentName:"p"},"README"),"), including information about additional changes you made (besides the program specification) and anything the graders should know about your submission. In your ",Object(r.b)("inlineCode",{parentName:"p"},"README")," you should:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Write your Hopkins ID (random 6 character code) at the top of the file"),Object(r.b)("li",{parentName:"ul"},"Briefly justify the structure of your program; why you defined the functions you did, etc"),Object(r.b)("li",{parentName:"ul"},"If applicable: Highlight anything you did that was particularly clever"),Object(r.b)("li",{parentName:"ul"},"If applicable: Tell the graders if you couldn\u2019t do everything.  Where did you stop?  What did you get stuck on?  What are the parts you already know do not work according to the requirements?")),Object(r.b)("h2",{id:"specific-requirements"},"Specific Requirements"),Object(r.b)("p",null,"*Your program must have all the functionality described above."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You must use ",Object(r.b)("inlineCode",{parentName:"li"},"std::cin"),", ",Object(r.b)("inlineCode",{parentName:"li"},"std::cout"),", the insertion operator ",Object(r.b)("inlineCode",{parentName:"li"},"<<")," and the extraction operator ",Object(r.b)("inlineCode",{parentName:"li"},">>")," for all input and output.  Don't use ",Object(r.b)("inlineCode",{parentName:"li"},"printf"),", ",Object(r.b)("inlineCode",{parentName:"li"},"scanf")," or other C I/O functions."),Object(r.b)("li",{parentName:"ul"},"Your program should not directly allocate or deallocate any heap memory.  That is, you should not directly call ",Object(r.b)("inlineCode",{parentName:"li"},"malloc"),", ",Object(r.b)("inlineCode",{parentName:"li"},"free"),", ",Object(r.b)("inlineCode",{parentName:"li"},"realloc"),", ",Object(r.b)("inlineCode",{parentName:"li"},"calloc"),", ",Object(r.b)("inlineCode",{parentName:"li"},"new"),", ",Object(r.b)("inlineCode",{parentName:"li"},"delete")," or similar functions.  STL containers or other parts of the C++ library might call these functions, which is fine."),Object(r.b)("li",{parentName:"ul"},"Your solution should run very quickly, even on large input texts. If your solution is running slowly (more than a couple seconds) think again about whether you are making good use of iterators and the STL containers."),Object(r.b)("li",{parentName:"ul"},"Factor your code into functions, each function performing a distinct task.  Don't do everything in main."),Object(r.b)("li",{parentName:"ul"},"All variables must be declared inside functions. No variables should be global or extern."),Object(r.b)("li",{parentName:"ul"},"Do not use auto."),Object(r.b)("li",{parentName:"ul"},"Use header guards in all header (.h) files."),Object(r.b)("li",{parentName:"ul"},"Do not use ",Object(r.b)("inlineCode",{parentName:"li"},"using")," in header (.h) files."),Object(r.b)("li",{parentName:"ul"},"In C++ source files (.cpp files), you may import individual symbols using statements like ",Object(r.b)("inlineCode",{parentName:"li"},"using std::string"),".  "),Object(r.b)("li",{parentName:"ul"},"Do not use ",Object(r.b)("inlineCode",{parentName:"li"},"using namespace <id>"),", either in headers or in source files."),Object(r.b)("li",{parentName:"ul"},"You do not need to handle or report any errors other than what is provided in the starter code. ")),Object(r.b)("h2",{id:"hints-and-suggestions"},"Hints and Suggestions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Style matters: leave explanatory useful comments, use meaningful sensible variable/function names, use correct indentations etc."),Object(r.b)("li",{parentName:"ul"},"Decompose the entire task into a number of functions with well-defined objectives"),Object(r.b)("li",{parentName:"ul"},"One possible way to structure your code is to have two files (other than ",Object(r.b)("inlineCode",{parentName:"li"},"digraph_analyzer.cpp")," which contains the ",Object(r.b)("inlineCode",{parentName:"li"},"main")," function) named ",Object(r.b)("inlineCode",{parentName:"li"},"digraph_functions.h")," to declare all necessary auxiliary functions that (collectively) accomplish the task of digraph analysis and ",Object(r.b)("inlineCode",{parentName:"li"},"digraph_functions.cpp")," to implement the functions declared in ",Object(r.b)("inlineCode",{parentName:"li"},"digraph_functions.h"),". You would then include ",Object(r.b)("inlineCode",{parentName:"li"},"digraph_functions.h")," in ",Object(r.b)("inlineCode",{parentName:"li"},"digraph_analyzer.cpp")," and make calls to the functions decalred in ",Object(r.b)("inlineCode",{parentName:"li"},"digraph_functions.h")," (and implemented in ",Object(r.b)("inlineCode",{parentName:"li"},"digraph_functions.cpp"),") as needed."),Object(r.b)("li",{parentName:"ul"},"Write tests and test your work thoroughly, but you don\u2019t have to turn your tests in."),Object(r.b)("li",{parentName:"ul"},"Make use of gdb to debug and also run valgrind to make sure there is no memory leakage.")),Object(r.b)("h3",{id:"makefile"},"Makefile"),Object(r.b)("p",null,"Remember: You need to write your own Makefile. Make sure you have defined the target ",Object(r.b)("inlineCode",{parentName:"p"},"digraph_analyzer")," properly to compile your program. We will run ",Object(r.b)("inlineCode",{parentName:"p"},"make digraph_analyzer")," to compile your program and produce an executable named ",Object(r.b)("inlineCode",{parentName:"p"},"digraph_analyzer"),". Failure to comply with this requirement will result in a ",Object(r.b)("strong",{parentName:"p"},"zero")," score."),Object(r.b)("h3",{id:"your-submission-to-gradescope"},"Your submission to Gradescope"),Object(r.b)("p",null,"Create a ",Object(r.b)("inlineCode",{parentName:"p"},".zip")," file named ",Object(r.b)("inlineCode",{parentName:"p"},"hw5.zip")," containing your source/header files, ",Object(r.b)("inlineCode",{parentName:"p"},"Makefile"),", ",Object(r.b)("inlineCode",{parentName:"p"},"gitlog.txt"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"README"),". Do not include any ",Object(r.b)("inlineCode",{parentName:"p"},".txt")," files  and never submit any executable or object files!"),Object(r.b)("p",null,"Copy the ",Object(r.b)("inlineCode",{parentName:"p"},"hw5.zip")," file to your local machine (using ",Object(r.b)("inlineCode",{parentName:"p"},"scp")," or ",Object(r.b)("inlineCode",{parentName:"p"},"pscp"),"), and submit it to Gradescope. When you submit, Gradescope conducts a series of automatic tests. These do basic checks, e.g. to check that you submitted the right files. If you see error messages (in red), address them and resubmit. You may resubmit any number of times prior to the deadline; only your latest submission will be graded. Review the course syllabus for late submission policies (grace period and late days)."),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Remember that if your final submitted code does not compile, you will earn a zero score for the assignment."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Two notes regarding automatic checks for programming assignments:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Passing an automatic check is not itself worth points. (There might be a nominal, low point value like 0.01 associated with a check, but that won\u2019t count in the end.) The checks exist to help you and the graders find obvious errors."),Object(r.b)("li",{parentName:"ul"},"The automatic checks cover some of the requirements set out in the assignment, but not all. It is up to you to test your own work and ensure your programs satisfy all stated requirements. Passing all the automatic checks does not mean you have earned all the points.")))))}p.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,h=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return n?i.a.createElement(h,c(c({ref:t},s),{},{components:n})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);