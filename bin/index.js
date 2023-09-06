var commander = require('commander');
var whistle = require('../src/whistle/index');
const pkg = require("../package.json")


const service = new commander.Command('service').description('启动项目代理');


service.version(pkg.version)
service.command("proxy").description('启动项目代理')
    .action((name, options) => {
        whistle()
})


service.parse(process.argv)
