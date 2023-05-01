(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{377:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("相关视频讲解："),a("a",{attrs:{href:"https://www.bilibili.com/video/BV188411L7d2/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Makefile 20分钟入门"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("相关资料："),a("a",{attrs:{href:"https://seisman.github.io/how-to-write-makefile/",target:"_blank",rel:"noopener noreferrer"}},[s._v("seisman/how-to-write-makefile"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://www.gnu.org/software/make/manual/make.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("GNU make"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-makefile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-makefile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## version 1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# hello: hello.cpp")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         g++ -c hello.cpp getday.cpp")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         g++ -o main hello.o getday.o")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .PHONY: clean")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clean:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#         rm -f main *.o")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## version 2")]),s._v("\nC "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" g++\nCFLAGS "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" -g\nTARGET "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" test\nSRCS "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wildcard")]),s._v(" *.cpp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nOBJS "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("patsubst")]),s._v(" %cpp,%o,"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SRCS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TARGET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("%.o")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("%.cpp\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CFLAGS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$<")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("        "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),s._v("(TARGET)")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("OBJS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CFLAGS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" -o "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$^")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[s._v("clean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        rm -rf "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("TARGET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" *.o\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("注意Tab不可以用空格代替（vim 设置中 expandtab 也需要关闭）")]),s._v(" "),a("div",{staticClass:"language-vimrc line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("syntax on\nset number\nset expandtab //删除 或 set noexpandtab\nset autoindent\nset smartindent\nset tabstop=4\nset laststatus=2\nset mouse=a\nset scrolloff=4\ninoremap { {}<ESC>i\ninoremap {<CR> {<CR>}<ESC>O\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);