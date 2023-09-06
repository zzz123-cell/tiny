const pkg = require('./package.json');
const port = `3000`;
exports.groupName = '项目开发环境'; // 可选，设置分组， 要求 Whistle 版本 >= v2.9.21
exports.name = `beisen-tiny`;
exports.rules = `
    /beisen-tiny/release/dist/app/i  https://127.0.0.1:${port}/app.js
    /beisen-tiny/release/dist/css/main/i https://127.0.0.1:${port}/css/main.css
    /beisen-tiny/release/dist/(.*)/ https://127.0.0.1:${port}/$1
    
`;