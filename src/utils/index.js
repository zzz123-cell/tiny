const chalk = require("chalk");
const log = {
    normal: (msg)=>{
        console.log(msg)
    },
    error: (msg) => {
        console.log(chalk.red(msg))
    }
}



module.exports = {
    log
}