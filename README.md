# Vue + TypeScript 启动脚手架
vue-ts-cli 是在 vue-cli 的基础上进行进一步封装的开发模板

集成 Vuex的支持。

集成 vue-class-component 和 vuex-class。
## 快速开始
```javascript
安装
yarn add vue-hellots-cli 或 npm install vue-hellots-cli -s

使用
vue-hellots-cli 项目名 
```
## 快速命令
```javascript
快速生成 src 文件夹下的模板文件
yarn tep 或 npm run tep 

快速添加功能模块
yarn addone 或 npm run addone   
```
## 模板地址
> <https://gitlab.deeptel.com.cn:linsicong/vue-ts-template>
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

