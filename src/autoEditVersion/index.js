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
const whichPM = require('which-pm')
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
        const orno = inquirer.prompt([
            {
                type: 'checkbox',
                name: 'data',
                message: `Master最新的版本为(${masterVersion}),当前分支版本:${currentVersoin}:`,
                choices: [{
                    name: `是否更新为${newVersion}`,
                    checked: true
              },{
                name: `自定义`,
                }]
            }
        ])

        if (orno.data) {
            const isValidate = this.checkVersion(answers.version)
            if (!isValidate) {
                this.stdIn()
                return  
            } 
            this.editVerion(newVersion)
        }
        
        
        
        

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
    
    async editVerion(version) {
        const usedPM = await whichPM(process.cwd())
        let updated = false
        // 对比想要使用的安装方式和正在用的安装方式是否一致，不一致给出警告并停止执行
        if (usedPM && usedPM.name !== 'npm') {
            updated = true
            shellExce(`npm --no-git-tag-version version ${version}`);
            shellExce(`git add package.json  package-lock.json`)
            shellExce(`git commit -m "ci(package.json package-lock.json): 更新项目版本号为：${version}"`)
        }
        if (usedPM && usedPM.name !== 'yarn') {
            updated = true
            shellExce(`yarn version --no-git-tag-version  --new-version=${version}`);
            shellExce(`git add package.json  yarn-lock.json`)
            shellExce(`git commit -m "ci(package.json yarn-lock.json): 更新项目版本号为：${version}"`)
        }
        if (usedPM && usedPM.name !== 'pnpm') {
            updated = true
            await this.wirtePackageVersion(version)
            shellExce(`git add package.json`)
            shellExce(`git commit -m "ci(package.json): 更新项目版本号为：${version}"`)
        }

        if (updated) {
            log.success(`\n版本更新成功，${version}: \n`)
        } else {
            log.error(`\n版本更新失败 \n`)
        }
        this.stop()
        
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
    async wirtePackageVersion(newVersion) {
        const pck = await this.readPackage()
        pck['version'] = newVersion;
    
        await fs.writeFileSync(packagePath, JSON.stringify(pck, null, 2))
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


module.exports =  EditVerion
