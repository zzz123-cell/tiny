"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * 获取远程分支
 * 获取与master远程分支的版本对比，
 * 获取主分支的版本号 
 * 修改版本号
 */

var spawn = require("cross-spawn");
var fs = require("fs");
var path = require("path");
var _require = require("process"),
  exit = _require.exit;
var _require2 = require("../utils"),
  log = _require2.log;
var fileName = 'package.json';
var shell = require('shelljs');
var inquirer = require('inquirer');
var packagePath = path.join(process.cwd(), fileName);
var whichPM = require('which-pm');
var _require3 = require("compare-versions"),
  compareVersions = _require3.compareVersions;
function shellExce(command) {
  return shell.exec(command, {
    silent: true
  }).stdout.trim();
}
var EditVerion = /*#__PURE__*/function () {
  function EditVerion() {
    _classCallCheck(this, EditVerion);
    this.getLatest();
    this.run();
  }
  _createClass(EditVerion, [{
    key: "run",
    value: function () {
      var _run = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var currentBaranchName, currentBranchVersion;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              currentBaranchName = this.getCurrentBranchName();
              currentBranchVersion = this.readPackageVersion();
              this.stdIn();
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function run() {
        return _run.apply(this, arguments);
      }
      return run;
    }()
  }, {
    key: "stdIn",
    value: function () {
      var _stdIn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var masterVersion, currentVersoin, largeVersion, newVersion, check;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.gettMasterVersion();
            case 2:
              masterVersion = _context2.sent;
              _context2.next = 5;
              return this.getCurrentVerson();
            case 5:
              currentVersoin = _context2.sent;
              largeVersion = this.diffVersion(masterVersion, currentVersoin);
              newVersion = this.increaseVerson(largeVersion);
              _context2.next = 10;
              return inquirer.prompt([{
                type: 'list',
                name: 'data',
                message: "Master\u6700\u65B0\u7684\u7248\u672C\u4E3A(".concat(masterVersion, "),\u5F53\u524D\u5206\u652F\u7248\u672C:").concat(currentVersoin, ":"),
                choices: [{
                  name: "\u662F\u5426\u66F4\u65B0\u4E3A: ".concat(newVersion),
                  value: "version",
                  checked: true
                }, {
                  name: "\u81EA\u5B9A\u4E49",
                  value: "custom"
                }, {
                  name: "\u4E0D\u66F4\u65B0",
                  value: "no"
                }]
              }]);
            case 10:
              check = _context2.sent;
              if (!(check.data === "version")) {
                _context2.next = 14;
                break;
              }
              _context2.next = 14;
              return this.editVerion(newVersion);
            case 14:
              if (!(check.data === "custom")) {
                _context2.next = 17;
                break;
              }
              _context2.next = 17;
              return this.customStdIn(newVersion);
            case 17:
              if (check.data === "no") {
                this.stop();
              }
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function stdIn() {
        return _stdIn.apply(this, arguments);
      }
      return stdIn;
    }()
  }, {
    key: "customStdIn",
    value: function () {
      var _customStdIn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(newVersion) {
        var answers, isValidate;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return inquirer.prompt([{
                type: 'input',
                name: 'version',
                message: "\u8BF7\u8F93\u5165\u7248\u672C\uFF1A",
                "default": "".concat(newVersion)
              }]);
            case 2:
              answers = _context3.sent;
              isValidate = this.checkVersion(answers.version);
              if (isValidate) {
                _context3.next = 7;
                break;
              }
              this.customStdIn();
              return _context3.abrupt("return");
            case 7:
              _context3.next = 9;
              return this.editVerion(answers.version);
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function customStdIn(_x) {
        return _customStdIn.apply(this, arguments);
      }
      return customStdIn;
    }()
  }, {
    key: "diffVersion",
    value: function diffVersion(masterVersion, currentVersoin) {
      var result = compareVersions(masterVersion, currentVersoin);
      //1: masterVersion > currentVersoin
      //0: masterVersion === currentVersoin
      if (result === 1 || result === 0) {
        return masterVersion;
      }
      return currentVersoin;
    }
  }, {
    key: "increaseVerson",
    value: function increaseVerson(version) {
      var versionArr = version.trim().split('.');
      if (/\d+-(rc|alpha|beta)/.test(versionArr[2])) {
        versionArr[3] = Number(versionArr[3]) + 1;
      } else {
        versionArr[2] = Number(versionArr[2]) + 1;
      }
      return versionArr.join(".");
    }
  }, {
    key: "editVerion",
    value: function () {
      var _editVerion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(version) {
        var usedPM, updated;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return whichPM(process.cwd());
            case 2:
              usedPM = _context4.sent;
              updated = false; // 对比想要使用的安装方式和正在用的安装方式是否一致，不一致给出警告并停止执行
              if (usedPM && usedPM.name === 'npm') {
                updated = true;
                shellExce("npm --no-git-tag-version version ".concat(version));
                shellExce("git add package.json  package-lock.json");
                shellExce("git commit -m \"ci(package.json package-lock.json): \u66F4\u65B0\u7248\u672C\u53F7\u4E3A\uFF1A".concat(version, "\""));
              }
              if (usedPM && usedPM.name === 'yarn') {
                updated = true;
                shellExce("yarn version --no-git-tag-version  --new-version=".concat(version));
                shellExce("git add package.json  yarn-lock.json");
                shellExce("git commit -m \"ci(package.json yarn-lock.json): \u66F4\u65B0\u7248\u672C\u53F7\u4E3A\uFF1A".concat(version, "\""));
              }
              if (!(usedPM && usedPM.name === 'pnpm')) {
                _context4.next = 12;
                break;
              }
              updated = true;
              _context4.next = 10;
              return this.wirtePackageVersion(version);
            case 10:
              shellExce("git add package.json");
              shellExce("git commit -m \"ci(package.json): \u66F4\u65B0\u9879\u76EE\u7248\u672C\u53F7\u4E3A\uFF1A".concat(version, "\""));
            case 12:
              if (updated) {
                log.success("\n\u7248\u672C\u66F4\u65B0\u6210\u529F\uFF0C".concat(version, ": \n"));
              } else {
                log.error("\n\u7248\u672C\u66F4\u65B0\u5931\u8D25 \n");
              }
              this.stop();
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function editVerion(_x2) {
        return _editVerion.apply(this, arguments);
      }
      return editVerion;
    }()
  }, {
    key: "getLatest",
    value: function getLatest() {
      shellExce('git fetch origin');
    }
  }, {
    key: "stop",
    value: function stop() {
      process.exit(1);
    }
  }, {
    key: "readPackage",
    value: function () {
      var _readPackage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var bob;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              fs.stat(packagePath, function (error, stat) {
                if (error) {
                  log.error("".concat(fileName, "\u4E0D\u5B58\u5728"));
                  exit(0);
                }
              });
              bob = fs.readFileSync(packagePath);
              return _context5.abrupt("return", JSON.parse(bob));
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function readPackage() {
        return _readPackage.apply(this, arguments);
      }
      return readPackage;
    }()
  }, {
    key: "readPackageVersion",
    value: function () {
      var _readPackageVersion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var pck;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.readPackage();
            case 2:
              pck = _context6.sent;
              return _context6.abrupt("return", pck.version);
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function readPackageVersion() {
        return _readPackageVersion.apply(this, arguments);
      }
      return readPackageVersion;
    }()
  }, {
    key: "wirtePackageVersion",
    value: function () {
      var _wirtePackageVersion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(newVersion) {
        var pck;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.readPackage();
            case 2:
              pck = _context7.sent;
              pck['version'] = newVersion;
              _context7.next = 6;
              return fs.writeFileSync(packagePath, JSON.stringify(pck, null, 2));
            case 6:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function wirtePackageVersion(_x3) {
        return _wirtePackageVersion.apply(this, arguments);
      }
      return wirtePackageVersion;
    }()
  }, {
    key: "getCurrentBranchName",
    value: function () {
      var _getCurrentBranchName = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", shellExce('git branch --show-current'));
            case 1:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function getCurrentBranchName() {
        return _getCurrentBranchName.apply(this, arguments);
      }
      return getCurrentBranchName;
    }()
  }, {
    key: "checkUnCommitFile",
    value: function checkUnCommitFile() {
      var outPut = shellExce('git status --porcelain');
      var changed = outPut.split('\n').filter(function (i) {
        return i;
      }).length;
      // if(changed > 0) {
      //     log.error(`Error: 发现本地有未提交的代码,请提提交`)
      //     this.stop()
      // }
    }
    // 检查版本是否符合规范
  }, {
    key: "checkVersion",
    value: function checkVersion(version) {
      if (!version || !version.match(/^\d+\.\d+\.\d+$/) && !version.match(/^\d+\.\d+\.\d+-(alpha|beta|rc)\.\d+$/)) {
        log.error('组件版本不符合规范,请参考 http://cmp-beisen.italent-inc.cn/docs?article=version-rule');
        return false;
      }
      return true;
    }
  }, {
    key: "getCurrentVerson",
    value: function () {
      var _getCurrentVerson = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var version;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.readPackageVersion();
            case 2:
              version = _context9.sent;
              return _context9.abrupt("return", version);
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function getCurrentVerson() {
        return _getCurrentVerson.apply(this, arguments);
      }
      return getCurrentVerson;
    }()
  }, {
    key: "gettMasterVersion",
    value: function () {
      var _gettMasterVersion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var currentBaranch, version;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              this.checkUnCommitFile();
              _context10.next = 3;
              return this.getCurrentBranchName();
            case 3:
              currentBaranch = _context10.sent;
              if (currentBaranch !== 'master') {
                shellExce('git checkout master');
              }
              _context10.next = 7;
              return this.readPackageVersion();
            case 7:
              version = _context10.sent;
              shellExce("git checkout ".concat(currentBaranch));
              return _context10.abrupt("return", version);
            case 10:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function gettMasterVersion() {
        return _gettMasterVersion.apply(this, arguments);
      }
      return gettMasterVersion;
    }()
  }]);
  return EditVerion;
}();
module.exports = EditVerion;