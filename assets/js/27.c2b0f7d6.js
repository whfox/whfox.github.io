(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{376:function(s,n,t){"use strict";t.r(n);var e=t(2),r=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# WSL通过Win访问网络，所以WSL的网关指向的是Windows，DNS服务器指向的也是Windows，设置WSL的proxy为win的代理ip+端口即可\n# WSL中的DNS server在/etc/resolv.conf中查看，该文件是由/etc/wsl.conf自动生成的。\n# 如果关闭了wsl.conf中自动生成resolve.conf并自行修改了resolve.conf，DNS nameserver并不是本机win ip\n# 需要开启wsl.conf的自动生成，再运行以下命令\n# https://zhuanlan.zhihu.com/p/153124468\n\n# 添加到环境变量设置中，例如~/.zshrc\nexport hostip=$(cat /etc/resolv.conf |grep -oP \'(?<=nameserver\\ ).*\')\nexport https_proxy="http://${hostip}:7890"\nexport http_proxy="http://${hostip}:7890"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("没效果的话，看看防火墙是否打开允许clash通过")])])}),[],!1,null,null,null);n.default=r.exports}}]);