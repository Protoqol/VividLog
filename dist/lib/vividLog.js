"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VividLog = void 0;
const utils_1 = require("./utils");
const methods_1 = require("./methods");
const config_1 = __importDefault(require("./config/config"));
const enums_1 = require("./enums");
class VividLog {
    config = config_1.default;
    constructor() {
        if (typeof window !== "undefined") {
            window.vividLog = this;
        }
        else if (typeof global !== "undefined") {
            global.vividLog = this;
        }
    }
    /**
     * Take over default error log
     */
    takeOver(activate = false) {
        methods_1.Methods.takeOver(activate);
    }
    /**
     * Chain before log to group the all logs
     */
    group(grouped = true) {
        this.config.autoGroup = grouped;
        return this;
    }
    /**
     * Chain before log to give message a custom style
     */
    style(customStyle = "") {
        this.config.customStyle = customStyle;
        return this;
    }
    /**
     * Only log a label
     */
    fireLabel(label) {
        utils_1.Utils.fireLabel(label);
        return this;
    }
    /**
     * Normal priority log
     */
    log(...args) {
        utils_1.Utils.loggable(args, "log");
        return this;
    }
    /**
     * Debug priority log
     */
    debug(...args) {
        utils_1.Utils.loggable(args, "debug");
        return this;
    }
    /**
     * Error priority log
     */
    err(...args) {
        utils_1.Utils.loggable(args, "error");
        return this;
    }
    /**
     * Warning priority log
     */
    warn(...args) {
        utils_1.Utils.loggable(args, "warning");
        return this;
    }
    /**
     * Success priority log
     */
    done(...args) {
        utils_1.Utils.loggable(args, "success");
        return this;
    }
    /**
     * Information priority log
     */
    info(...args) {
        utils_1.Utils.loggable(args, "info");
        return this;
    }
    /**
     * Custom logging utility
     */
    say(loggable, label, color) {
        const type = utils_1.Utils.checkTypeLog(loggable);
        if (type === enums_1.LogSize.SMALL_LOGGABLE) {
            return utils_1.Utils.fire(utils_1.Utils.logBuilder(loggable, label || (typeof document !== "undefined" ? document.title : (typeof process !== "undefined" ? "node" : "vividLog"))), utils_1.Utils.styleBuilder(color || "brown", color || "brown"));
        }
        if (type === enums_1.LogSize.BIG_LOGGABLE) {
            const style = utils_1.Utils.styleBuilder("log"); // Default to log style if big
            console.log(utils_1.Utils.logBuilder(loggable, "log", true), style.status, style.time, style.type);
            console.log(loggable);
            console.log("%c                         ", "padding: 0 5px;font-weight: bolder; border-top: 2px solid " + this.config.status["log"].lightColor + ";");
            return true;
        }
    }
}
exports.VividLog = VividLog;
const vividLogInstance = new VividLog();
exports.default = vividLogInstance;
if (typeof window !== "undefined") {
    window.vividLog = vividLogInstance;
}
else if (typeof global !== "undefined") {
    global.vividLog = vividLogInstance;
}
//# sourceMappingURL=vividLog.js.map