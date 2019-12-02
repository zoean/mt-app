# mt-app

> My kickass Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# 启动redis
$ redis-server 
#启动mongodb
$ mongod --dbpath '路径'

# 代码管理流程
$ git branch ***          创建业务功能分支
$ git add .               开发完成之后添加代码到本地仓库
$ git commit -m '描述'    提交代码
$ git push                推送代码到远程仓库
$ git checkout master     切换到master分支
$ git merge ***           把当前分支合并到master分支
$ git push                将本次分支合并推送到远程仓库


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
