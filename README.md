# Vue + TypeScript 启动脚手架
vue-hellots-cli 是在 vue-cli 的基础上进行进一步封装的开发模板

集成 Vuex的支持。

集成 vue-class-component 和 vuex-class。
## 快速开始
```javascript
安装
yarn add vue-hellots-cli 或 npm install vue-hellots-cli -s

使用
vhc init 项目名 
```
## 快速命令
```javascript
快速生成 src 文件夹下的模板文件
yarn tep 或 npm run tep

快速添加功能模块
yarn addone xxx 或 npm run addone xxx  
```
## 模板地址
> <https://github.com/linsicong003/vue-ts-template>
## 目录结构

```bash
.
+-- assets                                   静态资源
+-- config                                   配置文件
+-- http                                     HTTP网络请求相关配置
+-- router                                   路由相关目录
|   +-- index.ts                                路由总入口
|   +-- routes.ts                               路由聚合
|   +-- home                                    模块路由配置
+-- store                                    数据仓库相关目录
|   +-- index.ts                             数据仓库总入口
|   +-- stores.ts                            数据仓库聚合
|   +-- home                                    模块仓库配置
+-- types                                    数据结构类型
|   +-- store                                   数据仓库数据结构
|   +-- views                                   视图层数据结构
|   +-- index.ts                                总入口
+-- utils                                    工具库
+-- views                                    视图模板
```

## 提示

目前变量命名方式全为小驼峰。

## 可能错误

- 报 sass 依赖错误
>Node Sass could not find a binding for your current environment: W indows 64-bit with Node.js 10.x

问题原因: node-sass 库在安装依赖过程中发生错误

解决方法: npm rebuild node-sass

