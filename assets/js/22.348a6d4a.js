(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{371:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("E: Could not read response to hello message from hook [ ! -f /usr/lib/ubuntu-advantage/apt-esm-json-hook ] || /usr/lib/ubuntu-advantage/apt-esm-json-hook || true: Success")])]),s._v(" "),a("p",[s._v("apt update 正常使用，但是 apt upgrade 报错如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("E: Could not "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" response to hello message from hook "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /usr/lib/ubuntu-advantage/apt-esm-json-hook "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" /usr/lib/ubuntu-advantage/apt-esm-json-hook "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" true: Success\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("解决方法：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" /etc/apt/apt.conf.d/20apt-esm-hook.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("有需要可以删除前备份，删除后重新 apt upgrade 即可")]),s._v(" "),a("p",[s._v("如果遇到以下类似问题：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("The following packages have been kept back: python-asn1crypto python-cffi-backend python-crypto python-cryptography python-dbus python-enum34 python-idna python-ipaddress python-keyring python-pip-whl python-pkg-resources python-setuptools python-six python-xdg\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("考虑 apt full-upgrade 或者 apt dist-upgrade")])])}),[],!1,null,null,null);a.default=n.exports}}]);