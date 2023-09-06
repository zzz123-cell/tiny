const fileName = 'proxy.whistle.js'
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

function createConfig(port) {
    const templatePath = path.join(__dirname, './template.art')
    const html = template(templatePath, {
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