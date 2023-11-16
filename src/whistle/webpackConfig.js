const path = require('path')
function getWebpackConfig(webpackSrc) {
  const webpack = path.join(process.cwd(), `${webpackSrc}`)
  const webpackConfig = require(webpack)
  const { port = 3000 } = webpackConfig.devServer

  if (!webpackConfig) {
    log.error(`请检查webpack.config.js路径，找不到文件`)
    return
  }

  function getProjectNamePath() {
    const pPath = webpackConfig.output?.publicPath
    if (pPath) {
      const projectNamePath = pPath.slice(
        pPath.match(/ux/).index + 2,
        pPath.length
      )
      return projectNamePath
    } else {
      log.error(`请检查webpack.config.js，找不到正确path`)
    }
  }

  return {
    projectNamePath: getProjectNamePath() || '',
    port: port,
  }
}
module.exports = function(webpackSrc) {
  return getWebpackConfig(webpackSrc)
}
