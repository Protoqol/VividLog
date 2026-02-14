"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WARNING = exports.LOG = exports.INFO = exports.ERROR = exports.DEBUG = exports.LogSize = void 0;
var LogSize;
(function (LogSize) {
    LogSize[LogSize["SMALL_LOGGABLE"] = 0] = "SMALL_LOGGABLE";
    LogSize[LogSize["BIG_LOGGABLE"] = 1] = "BIG_LOGGABLE";
})(LogSize || (exports.LogSize = LogSize = {}));
exports.DEBUG = {
    i: 2,
    val: "debug",
};
exports.ERROR = {
    i: 3,
    val: "error",
};
exports.INFO = {
    i: 4,
    val: "info",
};
exports.LOG = {
    i: 5,
    val: "log",
};
exports.WARNING = {
    i: 6,
    val: "warning",
};
//# sourceMappingURL=enums.js.map