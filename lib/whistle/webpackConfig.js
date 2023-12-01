"use strict";

var path = require('path');
function getWebpackConfig(webpackSrc) {
  var webpack = path.join(process.cwd(), "".concat(webpackSrc));
  var webpackConfig = require(webpack);
  var _webpackConfig$devSer = webpackConfig.devServer.port,
    port = _webpackConfig$devSer === void 0 ? 3000 : _webpackConfig$devSer;
  if (!webpackConfig) {
    log.error("\u8BF7\u68C0\u67E5webpack.config.js\u8DEF\u5F84\uFF0C\u627E\u4E0D\u5230\u6587\u4EF6");
    return;
  }
  function getProjectNamePath() {
    var _webpackConfig$output;
    var pPath = (_webpackConfig$output = webpackConfig.output) === null || _webpackConfig$output === void 0 ? void 0 : _webpackConfig$output.publicPath;
    if (pPath) {
      var projectNamePath = pPath.slice(pPath.match(/ux/).index + 2, pPath.length);
      return projectNamePath;
    } else {
      log.error("\u8BF7\u68C0\u67E5webpack.config.js\uFF0C\u627E\u4E0D\u5230\u6B63\u786Epath");
    }
  }
  return {
    projectNamePath: getProjectNamePath() || '',
    port: port
  };
}
module.exports = function (webpackSrc) {
  return getWebpackConfig(webpackSrc);
};