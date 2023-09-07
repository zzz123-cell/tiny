var commander = require('commander');
var whistle = require('../src/whistle/index');
var autoEditVersion = require('../src/autoEditVersion/index');
const pkg = require("../package.json")


const service = new commander.Command('service').description('启动项目代理');


service.version(pkg.version,['-v, --version'])
service.command("proxy").description('启动项目代理')
    .action((name, options) => {
        whistle()
    })

service.command("autoVersion").description('自动与Master版本对比，取最大版本，并自动更新版本')
    .action((name, options) => {
        new autoEditVersion()
})




service.parse(process.argv)
