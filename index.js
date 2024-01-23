"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyPaths = exports.vanillaRequire = void 0;
// repository: https://github.com/wraith13/evil-tsconfig.paths.ts
var module_1 = __importDefault(require("module"));
exports.vanillaRequire = module_1.default.prototype.require;
var applyPaths = function (compilerOptions) {
    var resolvePaths = function (path) {
        var _a;
        var base = (compilerOptions === null || compilerOptions === void 0 ? void 0 : compilerOptions.baseUrl) ?
            ((compilerOptions === null || compilerOptions === void 0 ? void 0 : compilerOptions.baseUrl) + "/").replace("//", "/") :
            "";
        var paths = (_a = compilerOptions === null || compilerOptions === void 0 ? void 0 : compilerOptions.paths) !== null && _a !== void 0 ? _a : {};
        var match = Object.keys(paths).filter(function (i) { return path.startsWith(i.replace("*", "")); })[0];
        var result = match ?
            paths[match].map(function (i) { return base + path.replace(match.replace("*", ""), i.replace("*", "")); }) :
            ("" === base ? [] : [base + path,]);
        return result;
    };
    function evilRequire(path) {
        var paths = resolvePaths(path);
        for (var i = 0; i < paths.length; ++i) {
            try {
                return exports.vanillaRequire.apply(this, [paths[i]]);
            }
            catch (_a) { }
        }
        return exports.vanillaRequire.apply(this, [path]);
    }
    ;
    evilRequire.resolve = exports.vanillaRequire.resolve;
    evilRequire.cache = exports.vanillaRequire.cache;
    evilRequire.extensions = exports.vanillaRequire.extensions;
    evilRequire.main = exports.vanillaRequire.main;
    module_1.default.prototype.require = evilRequire;
};
exports.applyPaths = applyPaths;
//# sourceMappingURL=index.js.map