const fileName = '.proxy.whistle.js'
const fs = require('fs')
const path = require('path')
const cli = require('cac')()
const spawn = require('cross-spawn')
const inquirer = require('inquirer')
const template = require('art-template')
const shell = require('shelljs')
const configSrc = path.join(process.cwd(), `./${fileName}`)
const { compareVersions } = require('compare-versions')
const { log } = require('../utils')
const getWebpackConfig = require('./webpackConfig')

function openProxy() {
  shell.exec(`w2 add --force ${configSrc}`, { silent: true }, function(
    code,
    stdout,
    stderr
  ) {
    if (code !== 0) {
      log.error(stdout.trim())
    } else {
      log.success(stdout.trim())
    }
  })
}
async function addConfig() {
  openProxy()
}

function tempalte() {
  const a = '`'
  return `const pkg = require('./package.json');
    exports.groupName = '项目开发环境'; // 可选，设置分组， 要求 Whistle 版本 >= v2.9.21
    exports.name = "{{data.projectName}}";
    exports.rules = ${a}{{data.projectNamePath}}(.*)(?:-).*(.bundle|.chunk)?(?:.min)(..*)$/  127.0.0.1:{{data.port}}/$1$3
{{data.projectNamePath}}(.*)(?:.min)(..*)$/  127.0.0.1:{{data.port}}/$1$2
{{data.projectNamePath}}images/(.*)/ 127.0.0.1:{{data.port}}/images/$1
{{data.projectNamePath}}(.*)/ 127.0.0.1:{{data.port}}/$1
    ${a}
   `
  //   return `const pkg = require('./package.json');
  //     exports.groupName = '项目开发环境'; // 可选，设置分组， 要求 Whistle 版本 >= v2.9.21
  //     exports.name = "{{data.projectName}}";
  //     exports.rules = ${a}/{{data.projectName}}/release/dist/(.*)(?:-).*(.bundle|.chunk)?(?:.min)(..*)$/  127.0.0.1:{{data.port}}/$1$3
  // /{{data.projectName}}/release/dist/(.*)(?:.min)(..*)$/  127.0.0.1:{{data.port}}/$1$2
  // /{{data.projectName}}/release/dist/images/(.*)/ 127.0.0.1:{{data.port}}/images/$1
  // /{{data.projectName}}/release/dist/(.*)/ 127.0.0.1:{{data.port}}/$1
  //     ${a}
  //    `
}
async function createConfig(projectNamePath, port) {
  //   if (projectName.slice(0, 3) == 'ux-') {
  //     // const newProjectName = projectName.slice(3)
  //     const newProjectName = projectNamePath.slice(1, projectNamePath.match(/release/).index - 1)
  //     const answers = await inquirer.prompt([
  //       {
  //         type: 'confirm',
  //         name: 'checked',
  //         message: `资源路径中ux是否删除Y/N，删除后路径为：/ux/${newProjectName}/release/dist……`,
  //         default: 'yes',
  //       },
  //     ])
  //     const { checked } = answers
  //     if (checked) {
  //       projectName = newProjectName
  //     }
  //   }
  const projectName = projectNamePath.match(/\/([a-zA-Z0-9\-]+)\/.*/)[1]

  const html = template.render(tempalte(), {
    data: {
      projectName: projectName,
      projectNamePath: projectNamePath,
      port: port || 3000,
    },
  })

  fs.writeFileSync(`${process.cwd()}/${fileName}`, html)
  await addConfig()
}

async function createFile(webpackSrc) {
  await check()
  const answers = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'type',
      message: `${fileName}不存在，是否创建`,
      default: 'yes',
    },
  ])
  const { type } = answers
  if (!type) return

  if (webpackSrc) {
    const { projectNamePath, port } = getWebpackConfig(webpackSrc)
    await createConfig(projectNamePath, port)
    return
  }

  const answersWebpack = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'isWebpack',
      message: '是否使用webpack配置',
      default: 'yes',
    },
  ])

  const { isWebpack } = answersWebpack

  if (isWebpack) {
    const defaultWebpackSrc = './webpack.config.js'
    const answersWebpackSrc = await inquirer.prompt([
      {
        type: 'input',
        name: 'webpackSrc',
        message: `输入webpack配置路径，默认${defaultWebpackSrc}`,
        default: defaultWebpackSrc,
      },
    ])
    const { projectNamePath, port } = getWebpackConfig(
      answersWebpackSrc.webpackSrc
    )
    await createConfig(projectNamePath, port)
  } else {
    const pPath = process.cwd()
    const projectName = pPath.substring(pPath.lastIndexOf(path.sep) + 1)
    const answersProjectName = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: `输入项目名，默认${projectName}`,
        default: projectName,
      },
    ])
    const answersPort = await inquirer.prompt([
      {
        type: 'input',
        name: 'port',
        message: '输入port，默认3000',
        default: 3000,
      },
    ])

    const projectNamePath = `${answersProjectName.projectName}/release/dist/`

    await createConfig(projectNamePath, answersPort.port)
  }
}

async function check() {
  let version = shell.exec(`w2 -V`, { silent: true }).stdout.trim()

  if (!version) {
    log.error(`未安装whistle，请先安装 http://wproxy.org/whistle/install.html`)
  }
  if (version && compareVersions(version, '2.9.21') < 0) {
    log.error('whistle 版本过低，请升级 whistle 到 2.9.21 以上')
    const answers = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'checked',
        message: `whistle 版本过低，是否升级到最新版本`,
        default: 'yes',
      },
    ])
    const { checked } = answers
    if (checked) {
      version = '2.9.22'
      const log1 = shell
        .exec(`npm i -g whistle && w2 restart`, { silent: true })
        .stdout.trim()
      console.log(log1)
    }
  }
}

module.exports = function(webpackSrc) {
  fs.stat(configSrc, (error, stat) => {
    if (error) {
      createFile(webpackSrc)
      return
    }
    if (stat.isFile()) {
      addConfig()
    }
  })
}
