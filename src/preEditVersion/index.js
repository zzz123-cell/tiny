/**
 * 获取远程分支
 * 获取与master远程分支的版本对比，
 * 获取主分支的版本号 
 * 修改版本号
 */

const spawn = require("cross-spawn")
const fs = require("fs")
const path = require("path");
const { exit } = require("process");
const {log} = require("../utils");
const fileName = 'package.json'
const shell = require('shelljs')
const inquirer = require('inquirer');
const packagePath = path.join(process.cwd(), fileName);


function shellExce(command) {
    return shell.exec(command,{silent:true}).stdout.trim()
}


class EditVerion { 
    constructor() {
        this.getLatest()
        this.run()
    }
    async run() {
        const currentBaranchName = this.getCurrentBranchName()
        const currentBranchVersion = this.readPackageVersion()
        this.stdIn()
    }
 
    async stdIn() {
        const masterVersion = await this.gettMasterVersion()
        const answers = await  inquirer.prompt([
            {
              type: 'input',
              name: 'newVersion',
              message: `当前Master最新的版本为：${masterVersion}`,
              default: `${masterVersion}`,      
            }
        ])

        const isValidate = this.checkVersion(answers.newVersion)
        
        if (!isValidate) {
            this.stdIn()
        }

    }
    editVerion(versionNew) {
        shellExce('npm --no-git-tag-version version ${versionNew}')
    }
    getLatest(){
        shellExce('git fetch origin')
    }
    stop() {
        process.exit(1)
    }

    async readPackageVersion() {
        fs.stat(packagePath, (error, stat) => {
            if (error) { 
                log.error(`${fileName}不存在`) 
                exit(0)
            }
        })
        const bob = fs.readFileSync('./package.json')
        return JSON.parse(bob).version
    }
    async getCurrentBranchName() {
        return shellExce('git branch --show-current');
        
    }
    checkUnCommitFile() {
        const outPut = shellExce('git status --porcelain');
        const changed = outPut.split('\n').filter(i => i).length;
        if(changed > 0) {
            log.error(`Error: 发现本地有未提交的代码,请提提交`)
            this.stop()
        }
    }
    // 检查版本是否符合规范
    checkVersion(version) {
        if(!version || (!version.match(/^\d+\.\d+\.\d+$/) && !version.match(/^\d+\.\d+\.\d+-(alpha|beta|rc)\.\d+$/))) {
            log.error('组件版本不符合规范,请参考 http://cmp-beisen.italent-inc.cn/docs?article=version-rule')
            return false
        }
        return true
    }
    async gettMasterVersion() {
        this.checkUnCommitFile()

        const currentBaranch = await this.getCurrentBranchName()

        if (currentBaranch !== 'master') {
            shellExce('git checkout master');
        }
        const version = await this.readPackageVersion()
        shellExce(`git checkout ${currentBaranch}`);
        return version
    }
    
}




// function checkoutClean() {
//     const process = 
//     return  new Promise(resolve => {
//         process.stdout.on('data', data => {
//             const name = data.toString().trim() 
//             resolve(name)
//         })
//     })
// }

async function gettMasterVersion () {
    spawn('git', ['checkout ','master']);
    return  new Promise(resolve => {
        process.stdout.on('data', data => {
            const name = data.toString().trim() 
            resolve(name)
        })
    },)
  
}

// const  = spawn('git', ['rev-parse', '--short', 'HEAD']);
// a.stdout.on('data', data => {

// })

//spawn('git', ['rev-parse', '--short', 'master'], { stdio: 'inherit' });




new  EditVerion()
