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
const  { compareVersions } = require("compare-versions")


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
        const currentVersoin = await this.getCurrentVerson()
        const largeVersion = this.diffVersion(masterVersion, currentVersoin)
        const newVersion = this.increaseVerson(largeVersion)


        const answers = await  inquirer.prompt([
            {
              type: 'input',
              name: 'version',
              message: `Master最新的版本为(${masterVersion}),当前分支版本:${currentVersoin}`,
              default: `${newVersion}`,      
            }
        ])
        const isValidate = this.checkVersion(answers.version)
        if (!isValidate) {
            this.stdIn()
            return  
        }
        
        this.editVerion(answers.version)

    }
    diffVersion(masterVersion,currentVersoin) {
        const result = compareVersions(masterVersion, currentVersoin);
        //1: masterVersion > currentVersoin
        //0: masterVersion === currentVersoin
        if (result === 1 || result === 0) {
            return masterVersion
        }
        return currentVersoin
    }
    increaseVerson(version) {
        const versionArr = version.trim().split('.');
        if (/\d+-(rc|alpha|beta)/.test(versionArr[2])) {
            versionArr[3] = Number(versionArr[3]) + 1
        } else {
            versionArr[2] = Number(versionArr[2]) + 1
        }
        return versionArr.join(".")
    }

    editVerion(version) {
        shellExce(`npm --no-git-tag-version version ${version}`);
        shellExce(`git add package.json  package-lock.json`)
        shellExce(`git commit -m "ci(package.json package-lock.json): 更新项目版本号为：${version}"`)

        log.success(`版本更新成功，${version}: \n`)
        this.stop()
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
    async getCurrentVerson() {
        const version = await this.readPackageVersion()
        return version
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
