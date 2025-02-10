---
title: makefile编译所有cpp文件
categories: [c++]
date: 2023-04-22
---



相关视频讲解：[Makefile 20分钟入门(opens new window)](https://www.bilibili.com/video/BV188411L7d2/)

相关资料：[seisman/how-to-write-makefile (opens new window)](https://seisman.github.io/how-to-write-makefile/)[GNU make(opens new window)](https://www.gnu.org/software/make/manual/make.html)

<!--more-->

```makefile
## version 1
# hello: hello.cpp
#         g++ -c hello.cpp getday.cpp
#         g++ -o main hello.o getday.o
# .PHONY: clean
# clean:
#         rm -f main *.o

## version 2
C := g++
CFLAGS := -g
TARGET := test
SRCS := $(wildcard *.cpp)
OBJS := $(patsubst %cpp,%o,$(SRCS))
all:$(TARGET)
%.o:%.cpp
        $(CC) $(CFLAGS) -c $<
        $(TARGET):$(OBJS)
                $(CC) $(CFLAGS) -o $@ $^
clean:
        rm -rf $(TARGET) *.o
```

注意Tab不可以用空格代替（vim 设置中 expandtab 也需要关闭）

```text
syntax on
set number
set expandtab //删除 或 set noexpandtab
set autoindent
set smartindent
set tabstop=4
set laststatus=2
set mouse=a
set scrolloff=4
inoremap { {}<ESC>i
inoremap {<CR> {<CR>}<ESC>O
```