
### tiny autoVersion
自动与Master版本对比，取最大版本，并自动更新版本

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
如果没有roxy.whistle.js，会帮你创建

```
"scripts": {
    "start": "tiny proxy && webpack-dev-server",
}
```
