
### tiny autoVersion
自动与Master版本对比，取最大版本，并自动更新版本

方法一：在pub前执行

```
"scripts": {
    "pub": "tiny autoVersion && {当前命令}",
}
```

方法二：在pub前执行

```
"scripts": {
    "autoVersion": "tiny autoVersion",
}
```

方法三：hooks 
安装husky,版本大于>8
To add another hook use husky add. For example:

```
npx husky add .husky/post-commit 'exec < /dev/tty && npx tiny autoVersion'
```

```
{
    "scripts": {
        "prepare": "husky install",
    }
}
```



## tiny proxy
如果有proxy.whistle.js ，会在起动时，自动开开启代理
如果没有proxy.whistle.js，会帮你创建，默认生成一个符合扩展项目的代理规则
可在proxy.whistle.js 修改 

```
"scripts": {
    "start": "tiny proxy && webpack-dev-server",
}
```
