"use strict";

var commander = require('commander');
var whistle = require('./whistle/index');
var autoEditVersion = require('./autoEditVersion/index');
var pkg = require("../package.json");
var service = new commander.Command('service').description('启动项目代理');
service.version(pkg.version, '-v, --version');
service.command("proxy").description('启动项目代理').action(function (name, options) {
  whistle();
});
service.command("autoVersion").description('自动与Master版本对比，取最大版本，并自动更新版本').action(function (name, options) {
  new autoEditVersion();
});
service.parse(process.argv);