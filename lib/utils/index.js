"use strict";

var chalk = require("chalk");
var log = {
  normal: function normal(msg) {
    console.log(msg);
  },
  error: function error(msg) {
    console.log(chalk.red(msg));
  },
  success: function success(msg) {
    console.log(chalk.green(msg));
  },
  warn: function warn(msg) {
    console.yellow(chalk.green(msg));
  }
};
module.exports = {
  log: log
};