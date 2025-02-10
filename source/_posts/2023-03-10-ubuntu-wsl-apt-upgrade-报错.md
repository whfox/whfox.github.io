---
title: Ubuntu WSL apt upgrade 报错
categories: [linux]
date: 2023-03-10
---

> E: Could not read response to hello message from hook [ ! -f /usr/lib/ubuntu-advantage/apt-esm-json-hook ] || /usr/lib/ubuntu-advantage/apt-esm-json-hook || true: Success
> <!--more-->

apt update 正常使用，但是 apt upgrade 报错如下：

```bash
E: Could not read response to hello message from hook [ ! -f /usr/lib/ubuntu-advantage/apt-esm-json-hook ] || /usr/lib/ubuntu-advantage/apt-esm-json-hook || true: Success
```

解决方法：

```bash
sudo rm /etc/apt/apt.conf.d/20apt-esm-hook.conf
```

有需要可以删除前备份，删除后重新 apt upgrade 即可

如果遇到以下类似问题：

```bash
The following packages have been kept back: python-asn1crypto python-cffi-backend python-crypto python-cryptography python-dbus python-enum34 python-idna python-ipaddress python-keyring python-pip-whl python-pkg-resources python-setuptools python-six python-xdg
```

考虑 apt full-upgrade 或者 apt dist-upgrade