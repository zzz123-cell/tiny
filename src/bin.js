var commander = require('commander')
var whistle = require('./whistle/index')
var autoEditVersion = require('./autoEditVersion/index')
const pkg = require('../package.json')

const service = new commander.Command('service').description('启动项目代理')

service.version(pkg.version, '-v, --version')
service
  .command('proxy')
  .description('启动项目代理')
  .option('-w, --webpackSrc <file>', '根据webpackconfig相对路径生成代理规则')
  .action((obj) => {
    whistle(obj.webpackSrc)
  })

service
  .command('autoVersion')
  .description('自动与Master版本对比，取最大版本，并自动更新版本')
  .action((name, options) => {
    new autoEditVersion()
  })

service.parse(process.argv)


