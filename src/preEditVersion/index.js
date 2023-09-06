/**
 * 获取远程分支
 * 获取与master远程分支的版本对比，
 * 获取主分支的版本号 
 * 修改版本号
 */

const spawn = require("cross-spawn")
function getLatest() {
    spawn('git', ['fetch origin'], { stdio: 'inherit' } );
}


const a = spawn('git', ['rev-parse', '--short', 'HEAD']);
a.stdout.on('data', data => {
    if (data.toString().trim() === 'e033f4e') {
   }
})

spawn('git', ['checkout master'],{ stdio: 'inherit' } );
