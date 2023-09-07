const fileName = '.proxy.whistle.js'
const fs = require('fs');
const path = require('path')
const cli = require('cac')()
const spawn = require("cross-spawn")
const inquirer = require('inquirer');
const template = require("art-template")
const configSrc = path.join(process.cwd(), `./${fileName}`);



function getProjectName() {
    const pPath = process.cwd();
    return pPath.substring(pPath.lastIndexOf(path.sep)+1)
}
function addConfig() {
    spawn('w2', ['add','--force',configSrc ], { stdio: 'inherit' } );
}

function tempalte() {
    const a = '`'
    return `const pkg = require('./package.json');
    exports.groupName = '项目开发环境'; // 可选，设置分组， 要求 Whistle 版本 >= v2.9.21
    exports.name = "{{data.projectName}}";
    exports.rules = ${a}/{{data.projectName}}/release/dist/app/i  https://127.0.0.1:{{data.port}}/app.js
        /{{data.projectName}}/release/dist/css/main/i https://127.0.0.1:{{data.port}}/css/main.css
        /{{data.projectName}}/release/dist/(.*)/ https://127.0.0.1:{{data.port}}/$1
        ${a}`
}
function createConfig(port) {
    const html = template.render(tempalte(), {
        data: {
            projectName: getProjectName(),
            port: port || 3000,
        }
    })

    fs.writeFileSync(`${process.cwd()}/${fileName}`, html)
    addConfig()

}

async function createFile() {
    const answers = await  inquirer.prompt([
        {
          type: 'confirm',
          name: 'type',
          message: `${fileName}不存在，是否创建`,
          default: 'yes',      
        }
    ])
    const { type } = answers
    if (!type) return

    const answersPort = await  inquirer.prompt([
        {
          type: 'input',
          name: 'port',
          message: `输入port，默认3000`,
          default: '3000',      
        }
    ])
    createConfig(answersPort.port)
}


module.exports = function () {
    fs.stat(configSrc, (error, stat) => {
        if (error) {
            createFile()
            return
        } 
        if (stat.isFile()) {
            addConfig()
        }
    })
}