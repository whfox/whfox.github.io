　　本想折腾折腾树莓派，写个vuepress玩玩，结果一直报错JavaScript heap out of memory。查完资料发现至少需要1.4G内存，就试着改package.json的build要求，结果还是不行。


<!--more-->


　　去[官方文档][1]看看有什么解决的办法。点进去一看，赫然几个大字“我们已经不再推荐全局安装 VuePress”。彳亍，试了下直接装本地依赖，还真成了。
　　不同的npm安装区别具体如下：
```shell
npm install -D  xxx    // --save-dev把依赖写入进devDependencies对象，用于开发环境
npm install -S  xxx    // --save把依赖写入进dependencies对象，用于生产环境
npm install -g  xxx    //全局安装
npm install xxx        //本地安装，只安装在目录而不记录在package.json中
```



  [1]: https://vuepress.vuejs.org/zh/guide/getting-started.html
