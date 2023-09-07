const chalk = require("chalk");
const log = {
    normal: (msg) => {
        console.log(msg)
    },
    error: (msg) => {
        console.log(chalk.red(msg))
    },
    success: (msg) => {
        console.log(chalk.green(msg))
    },
    warn: (msg) => {
        console.yellow(chalk.green(msg))
    }

}

module.exports = {
    log
}