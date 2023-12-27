"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var fileName = '.proxy.whistle.js';
var fs = require('fs');
var path = require('path');
var cli = require('cac')();
var spawn = require('cross-spawn');
var inquirer = require('inquirer');
var template = require('art-template');
var shell = require('shelljs');
var configSrc = path.join(process.cwd(), "./".concat(fileName));
var _require = require('compare-versions'),
  compareVersions = _require.compareVersions;
var _require2 = require('../utils'),
  log = _require2.log;
var getWebpackConfig = require('./webpackConfig');
function openProxy() {
  shell.exec("w2 add --force ".concat(configSrc), {
    silent: true
  }, function (code, stdout, stderr) {
    if (code !== 0) {
      log.error(stdout.trim());
    } else {
      log.success(stdout.trim());
    }
  });
}
function addConfig() {
  return _addConfig.apply(this, arguments);
}
function _addConfig() {
  _addConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          openProxy();
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _addConfig.apply(this, arguments);
}
function tempalte() {
  var a = '`';
  return "const pkg = require('./package.json');\n    exports.groupName = '\u9879\u76EE\u5F00\u53D1\u73AF\u5883'; // \u53EF\u9009\uFF0C\u8BBE\u7F6E\u5206\u7EC4\uFF0C \u8981\u6C42 Whistle \u7248\u672C >= v2.9.21\n    exports.name = \"{{data.projectName}}\";\n    exports.rules = ".concat(a, "{{data.projectNamePath}}(.*)(?:-).*(.bundle|.chunk)?(?:.min)(..*)$/  127.0.0.1:{{data.port}}/$1$3\n{{data.projectNamePath}}(.*)(?:.min)(..*)$/  127.0.0.1:{{data.port}}/$1$2\n{{data.projectNamePath}}images/(.*)/ 127.0.0.1:{{data.port}}/images/$1\n{{data.projectNamePath}}(.*)/ 127.0.0.1:{{data.port}}/$1\n    ").concat(a, "\n   ");
  //   return `const pkg = require('./package.json');
  //     exports.groupName = '项目开发环境'; // 可选，设置分组， 要求 Whistle 版本 >= v2.9.21
  //     exports.name = "{{data.projectName}}";
  //     exports.rules = ${a}/{{data.projectName}}/release/dist/(.*)(?:-).*(.bundle|.chunk)?(?:.min)(..*)$/  127.0.0.1:{{data.port}}/$1$3
  // /{{data.projectName}}/release/dist/(.*)(?:.min)(..*)$/  127.0.0.1:{{data.port}}/$1$2
  // /{{data.projectName}}/release/dist/images/(.*)/ 127.0.0.1:{{data.port}}/images/$1
  // /{{data.projectName}}/release/dist/(.*)/ 127.0.0.1:{{data.port}}/$1
  //     ${a}
  //    `
}
function createConfig(_x, _x2) {
  return _createConfig.apply(this, arguments);
}
function _createConfig() {
  _createConfig = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(projectNamePath, port) {
    var projectName, html;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          //   if (projectName.slice(0, 3) == 'ux-') {
          //     // const newProjectName = projectName.slice(3)
          //     const newProjectName = projectNamePath.slice(1, projectNamePath.match(/release/).index - 1)
          //     const answers = await inquirer.prompt([
          //       {
          //         type: 'confirm',
          //         name: 'checked',
          //         message: `资源路径中ux是否删除Y/N，删除后路径为：/ux/${newProjectName}/release/dist……`,
          //         default: 'yes',
          //       },
          //     ])
          //     const { checked } = answers
          //     if (checked) {
          //       projectName = newProjectName
          //     }
          //   }
          projectName = projectNamePath.match(/\/([a-zA-Z0-9\-]+)\/.*/)[1];
          html = template.render(tempalte(), {
            data: {
              projectName: projectName,
              projectNamePath: projectNamePath,
              port: port || 3000
            }
          });
          fs.writeFileSync("".concat(process.cwd(), "/").concat(fileName), html);
          _context2.next = 5;
          return addConfig();
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _createConfig.apply(this, arguments);
}
function createFile(_x3) {
  return _createFile.apply(this, arguments);
}
function _createFile() {
  _createFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(webpackSrc) {
    var answers, type, _getWebpackConfig, projectNamePath, port, answersWebpack, isWebpack, defaultWebpackSrc, answersWebpackSrc, _getWebpackConfig2, _projectNamePath, _port, pPath, projectName, answersProjectName, answersPort, _projectNamePath2;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return check();
        case 2:
          _context3.next = 4;
          return inquirer.prompt([{
            type: 'confirm',
            name: 'type',
            message: "".concat(fileName, "\u4E0D\u5B58\u5728\uFF0C\u662F\u5426\u521B\u5EFA"),
            "default": 'yes'
          }]);
        case 4:
          answers = _context3.sent;
          type = answers.type;
          if (type) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return");
        case 8:
          if (!webpackSrc) {
            _context3.next = 13;
            break;
          }
          _getWebpackConfig = getWebpackConfig(webpackSrc), projectNamePath = _getWebpackConfig.projectNamePath, port = _getWebpackConfig.port;
          _context3.next = 12;
          return createConfig(projectNamePath, port);
        case 12:
          return _context3.abrupt("return");
        case 13:
          _context3.next = 15;
          return inquirer.prompt([{
            type: 'confirm',
            name: 'isWebpack',
            message: '是否使用webpack配置',
            "default": 'yes'
          }]);
        case 15:
          answersWebpack = _context3.sent;
          isWebpack = answersWebpack.isWebpack;
          if (!isWebpack) {
            _context3.next = 27;
            break;
          }
          defaultWebpackSrc = './webpack.config.js';
          _context3.next = 21;
          return inquirer.prompt([{
            type: 'input',
            name: 'webpackSrc',
            message: "\u8F93\u5165webpack\u914D\u7F6E\u8DEF\u5F84\uFF0C\u9ED8\u8BA4".concat(defaultWebpackSrc),
            "default": defaultWebpackSrc
          }]);
        case 21:
          answersWebpackSrc = _context3.sent;
          _getWebpackConfig2 = getWebpackConfig(answersWebpackSrc.webpackSrc), _projectNamePath = _getWebpackConfig2.projectNamePath, _port = _getWebpackConfig2.port;
          _context3.next = 25;
          return createConfig(_projectNamePath, _port);
        case 25:
          _context3.next = 38;
          break;
        case 27:
          pPath = process.cwd();
          projectName = pPath.substring(pPath.lastIndexOf(path.sep) + 1);
          _context3.next = 31;
          return inquirer.prompt([{
            type: 'input',
            name: 'projectName',
            message: "\u8F93\u5165\u9879\u76EE\u540D\uFF0C\u9ED8\u8BA4".concat(projectName),
            "default": projectName
          }]);
        case 31:
          answersProjectName = _context3.sent;
          _context3.next = 34;
          return inquirer.prompt([{
            type: 'input',
            name: 'port',
            message: '输入port，默认3000',
            "default": 3000
          }]);
        case 34:
          answersPort = _context3.sent;
          _projectNamePath2 = "/ux/".concat(answersProjectName.projectName, "/release/dist/");
          _context3.next = 38;
          return createConfig(_projectNamePath2, answersPort.port);
        case 38:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _createFile.apply(this, arguments);
}
function check() {
  return _check.apply(this, arguments);
}
function _check() {
  _check = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var version, answers, checked, log1;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          version = shell.exec("w2 -V", {
            silent: true
          }).stdout.trim();
          if (!version) {
            log.error("\u672A\u5B89\u88C5whistle\uFF0C\u8BF7\u5148\u5B89\u88C5 http://wproxy.org/whistle/install.html");
          }
          if (!(version && compareVersions(version, '2.9.21') < 0)) {
            _context4.next = 9;
            break;
          }
          log.error('whistle 版本过低，请升级 whistle 到 2.9.21 以上');
          _context4.next = 6;
          return inquirer.prompt([{
            type: 'confirm',
            name: 'checked',
            message: "whistle \u7248\u672C\u8FC7\u4F4E\uFF0C\u662F\u5426\u5347\u7EA7\u5230\u6700\u65B0\u7248\u672C",
            "default": 'yes'
          }]);
        case 6:
          answers = _context4.sent;
          checked = answers.checked;
          if (checked) {
            version = '2.9.22';
            log1 = shell.exec("npm i -g whistle && w2 restart", {
              silent: true
            }).stdout.trim();
            console.log(log1);
          }
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _check.apply(this, arguments);
}
module.exports = function (webpackSrc) {
  fs.stat(configSrc, function (error, stat) {
    if (error) {
      createFile(webpackSrc);
      return;
    }
    if (stat.isFile()) {
      addConfig();
    }
  });
};