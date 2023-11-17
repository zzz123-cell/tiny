### tiny autoVersion

自动与 Master 版本对比，取最大版本，并自动版本+1

#### 方法一：在 pub 前执行

```
"scripts": {
    "pub": "tiny autoVersion && {当前命令}",
}
```

#### 方法二：在 pub 前执行

```
"scripts": {
    "autoVersion": "tiny autoVersion",
}
```

#### 方法三：

==注：使用 hooks 只能放在 pre-push 下面==
① husky 版本小于<8

在 .huskyrc 文件填加

```
{
  "hooks": {
    "pre-push":"exec < /dev/tty && tiny autoVersion"
  }
}

```

② husky 版本大于>8
To add another hook use husky add. For example:

```
npx husky add .husky/pre-push 'exec < /dev/tty && npx tiny autoVersion'
```

## tiny proxy

如果有 proxy.whistle.js ，会在起动时，自动开开启代理
如果没有 proxy.whistle.js，会帮你创建，默认生成一个符合扩展项目的代理规则
可在 proxy.whistle.js 修改

```
"scripts": {
    "start": "tiny proxy && webpack-dev-server",
}
```

代理规则支持直接根据 webpack.config 生成，默认路径'./webpack.config.js'。
如果不通过配置文件，可以选择自己输入项目名和端口号

webpack 路径可在命令行直接取，按配置文件生成代理规则

```
proxy --webpackSrc="./"
```

###
