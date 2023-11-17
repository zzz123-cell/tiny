/**
 * 获取远程分支
 * 获取与master远程分支的版本对比，
 * 获取主分支的版本号 
 * 修改版本号
 */
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
        this.run()
    }
    async run() {
        this.checkUnCommitFile()
        this.stdIn()
    }

    async stdIn() {
        const choices = await this.generateVersionSelectList()
        const check = await inquirer.prompt([
            {
                type: 'list',
                name: 'data',
                message: `选择要更新到的版本(非自定义的不需要手动修改版本号)`,
                choices: choices
            }
        ])
        const newVersion = check.data;
        if (check.data !== "custom" && check.data !== "no") {
            await this.editVerion(newVersion)
        }
        if (check.data === "custom") {
            await this.customStdIn()
        } 
        if (check.data === "no") {
            this.stop()
        }

    }
    async generateVersionSelectList() { 
        const remoteVersions = await this.getRemoteVersions()
        let list = Object.keys(remoteVersions).map(key => {
            const increaseVerson = this.increaseVerson(remoteVersions[key])
            return {
                name: `${key}: ${increaseVerson}`,
                value: increaseVerson,
                checked: false
            }
        })
   
        list.push({
            name: `自定义`,
            value: "custom",
        }) 
        list.push({
            name: `跳过`,
            value: "no",
        })
        return list
    }
    async editVerion(v) {
        shellExce(`npm version ${v} --no-git-tag-version`)
        const listChangeFile = shellExce(`git diff --name-only --diff-filter=ACMRTUB`)
        shellExce(`git add .`)
        shellExce(`git commit -n -m '更新项目版本号为：${v}\ncommit的文件如下：\n${listChangeFile}'`)
        shellExce(`git push --hook`)
        log.success(`更新版本成功：${v}`)
        this.stop()
        //git add package.json  package-lock.json && git commit -m 'ci(package.json package-lock.json): 更新项目版本号为：${versionNew}
    }
    async customStdIn(errorMsg) {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'version',
                message: `请输入版本：`,
            }
        ])
        const isValidate = this.checkVersion(answers.version)
        if (!isValidate) {
            this.customStdIn()
            return  
        } 
        this.editVerion(answers.version)
        
    }
    diffVersion(masterVersion, currentVersoin) {

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
    
    
    getLatest(){
        shellExce('git fetch origin')
    }
    stop() {
        process.exit(1)
    }

    async readPackage() {
        fs.stat(packagePath, (error, stat) => {
            if (error) { 
                log.error(`${fileName}不存在`) 
                exit(0)
            }
        })
        const bob = fs.readFileSync(packagePath)
        return JSON.parse(bob)
    }
    async readPackageVersion() {
        const pck = await this.readPackage()
        return pck.version
    }

    async getCurrentBranchName() {
        return shellExce('git branch --show-current');
    }
    checkUnCommitFile() {
        const outPut = shellExce('git status --porcelain');
        if (outPut) {
            log.error('有未提交的文件')
            this.stop()
        }
     
        // if(changed > 0) {
        //     log.error(`Error: 发现本地有未提交的代码,请提提交`)
        //     this.stop()
        // }
    }
    // 检查版本是否符合规范
    checkVersion(version) {
        if(!version || (!version.match(/^\d+\.\d+\.\d+$/) && !version.match(/^\d+\.\d+\.\d+-(alpha|beta|rc)\.\d+$/))) {
            log.error('组件版本不符合规范（示例：1.0.0、1.0.1-rc.1、1.0.1-alpha.1.0.1-beta.1)\n请参考 http://cmp-beisen.italent-inc.cn/docs?article=version-rule')
            return false
        }
        return true
    }
    async getCurrentVerson() {
        const version = await this.readPackageVersion()
        return version
    }
    async getRemoteVersions() {
        this.checkUnCommitFile()
        this.getLatest()
        
        let allTags = shellExce(`git ls-remote --tags  --refs --sort=-taggerdate`)
        allTags = allTags.slice(0,2000)
        const allVersion = allTags.match(/\d+\.\d+\.\d+(\-(alpha|beta|rc)\.\d+)*/g)
        const currentVersion = await this.getCurrentVerson()
        const isInRemote = allVersion.indexOf(currentVersion) > -1;
        console.log(isInRemote)

        allVersion.sort(compareVersions)
        let maxVersionMapping = {}

        for (let i = 0; i < allVersion.length; i++) { 
            const version = allVersion[i];
            if (version.indexOf('-rc')>0) {
                maxVersionMapping['rc'] = version
                if (!isInRemote && allVersion.indexOf('-rc') > 0) {
                    maxVersionMapping['rc'] = currentVersion
                }
            }else if (version.indexOf('-alpha')>0) {
                maxVersionMapping['alpha'] = version
                if (!isInRemote && allVersion.indexOf('-alpha') > 0) {
                    maxVersionMapping['alpha'] = currentVersion
                }
            }else if (version.indexOf('-beta')>0) {
                maxVersionMapping['beta'] = version
                if (!isInRemote && allVersion.indexOf('-beta') > 0) {
                    maxVersionMapping['beta'] = currentVersion
                }
            }else{
                maxVersionMapping['normal'] = version
                if (!isInRemote) {
                    maxVersionMapping['normal'] = currentVersion
                }
            }
            continue
        }
       return maxVersionMapping 
    }
    
}

module.exports =  EditVerion
