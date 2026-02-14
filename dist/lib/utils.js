"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const enums_1 = require("./enums");
const config_1 = __importDefault(require("./config/config"));
const ansi_1 = require("./ansi");
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
class Utils {
    static evaluate(loggable, type) {
        if (this.checkTypeLog(loggable) === enums_1.LogSize.SMALL_LOGGABLE) {
            return this.fire(this.logBuilder(loggable, type), this.styleBuilder(type));
        }
        if (this.checkTypeLog(loggable) === enums_1.LogSize.BIG_LOGGABLE) {
            const style = this.styleBuilder(type);
            if (isBrowser) {
                console.log(this.logBuilder(loggable, type, true), style.status, style.time, style.type);
                console.log(loggable);
                console.log("%c                         ", "padding: 0 5px;font-weight: bolder; border-top: 2px solid " + (window.vividLog?.config?.status[type]?.lightColor || "#000") + ";");
            }
            else {
                console.log(this.logBuilder(loggable, type, true));
                console.log(loggable);
                const color = global.vividLog?.config?.status[type]?.lightColor || config_1.default.status[type]?.lightColor || "#000";
                console.log((0, ansi_1.hexToAnsi)(color) + "-------------------------" + ansi_1.ANSI.reset);
            }
        }
        return false;
    }
    static getType(loggable) {
        let len;
        if (loggable instanceof Error) {
            return "error";
        }
        switch (typeof loggable) {
            case "string":
                len = loggable.length || 0;
                return `string[${len}]`;
            case "boolean":
                return "boolean";
            case "number":
                len = String(loggable).length;
                return `integer[${len}]`;
            case "object":
                if (loggable === null) {
                    return "null";
                }
                if (Array.isArray(loggable)) {
                    len = loggable.length;
                    return `array[${len}]`;
                }
                len = Object.keys(loggable).length;
                return `object[${len}]`;
            case "bigint":
                len = String(loggable).length;
                return `big integer[${len}]`;
            case "function":
                return "function";
            case "symbol":
                return "symbol";
            case "undefined":
                return "undefined";
            default:
                return false;
        }
    }
    static isTypeOfLoggable(variable) {
        return ["log", "debug", "error", "info", "success", "warning"].includes(variable);
    }
    static createTime(format) {
        const time = this.timeObj(format);
        let returnTime = "";
        const formats = time.format;
        for (let iteration = 0; iteration < formats.length; iteration++) {
            switch (formats[iteration]) {
                case "h":
                    returnTime += time.h;
                    break;
                case "m":
                    returnTime += time.m;
                    break;
                case "s":
                    returnTime += time.s;
                    break;
                case "ms":
                    returnTime += time.ms;
                    break;
            }
            if (iteration !== (formats.length - 1)) {
                returnTime += ":";
            }
        }
        return returnTime.length >= 1 ? returnTime : false;
    }
    static timeObj(format) {
        const date = new Date();
        const cfg = (isBrowser ? window.vividLog?.config : global.vividLog?.config) || config_1.default;
        return {
            format: format.split(":") || cfg.timeNotation.split(":"),
            h: String(date.getHours()).padStart(2, "0"),
            m: String(date.getMinutes()).padStart(2, "0"),
            s: String(date.getSeconds()).padStart(2, "0"),
            ms: String(date.getMilliseconds()).padStart(2, "0"),
        };
    }
    static checkTypeLog(loggable) {
        return (typeof loggable === "string" || typeof loggable === "number" || typeof loggable === "undefined")
            ? enums_1.LogSize.SMALL_LOGGABLE
            : enums_1.LogSize.BIG_LOGGABLE;
    }
    static makeStyleCompatible(css) {
        return css;
    }
    static styleBuilder(type, color) {
        const cfg = (isBrowser ? window.vividLog?.config : global.vividLog?.config) || config_1.default;
        const lightTheme = cfg.iUseLightTheme ? "color: white;" : "";
        const customStyle = cfg.customStyle;
        const fontSize = `font-size: ${cfg.fontSize};`;
        const typeOrColorLight = this.isTypeOfLoggable(type) ? cfg.status[type].lightColor : color;
        const typeOrColorDark = this.isTypeOfLoggable(type) ? cfg.status[type].darkColor : color;
        const style = {
            default: "color: #F1F5F8;" + fontSize,
            labelDefault: `border-radius: 5px; padding: 5px; background: ${typeOrColorLight};`,
            timeDefault: "",
            logNameDefault: "font-weight: bold;",
            typeNameDefault: `background: ${typeOrColorDark};`,
            varDefault: "margin-top: 10px; margin-bottom: 5px;" + lightTheme,
            custom: this.makeStyleCompatible(customStyle),
        };
        return {
            status: style.default + style.labelDefault + style.logNameDefault,
            time: style.default + style.labelDefault + style.timeDefault,
            type: style.default + style.labelDefault + style.typeNameDefault,
            var: style.default + style.varDefault + style.custom,
        };
    }
    static logBuilder(loggable, typeOrLabel, onlyHeader = false) {
        const cfg = (isBrowser ? window.vividLog?.config : global.vividLog?.config) || config_1.default;
        const label = this.isTypeOfLoggable(typeOrLabel) ? cfg.status[typeOrLabel].code : typeOrLabel;
        if (!isBrowser) {
            const time = this.createTime(cfg.timeNotation);
            const type = this.getType(loggable);
            const statusColor = this.isTypeOfLoggable(typeOrLabel) ? cfg.status[typeOrLabel].lightColor : (typeOrLabel === "LABEL" ? "#800080" : "#A52A2A");
            const typeColor = this.isTypeOfLoggable(typeOrLabel) ? cfg.status[typeOrLabel].darkColor : (typeOrLabel === "LABEL" ? "#800080" : "#A52A2A");
            const labelStyled = (0, ansi_1.hexToAnsiBg)(statusColor) + ansi_1.ANSI.white + ansi_1.ANSI.bold + ` ${label} ` + ansi_1.ANSI.reset;
            const timeStyled = (0, ansi_1.hexToAnsiBg)("#444") + ansi_1.ANSI.white + ` ${time} ` + ansi_1.ANSI.reset;
            const typeStyled = (0, ansi_1.hexToAnsiBg)(typeColor) + ansi_1.ANSI.white + ` ${type} ` + ansi_1.ANSI.reset;
            if (!onlyHeader) {
                return `${labelStyled}${timeStyled}${typeStyled}${cfg.newLine ? " " : "\n"} ${loggable}`;
            }
            return `${labelStyled}${timeStyled}${typeStyled}`;
        }
        if (!onlyHeader) {
            return "%c" + label +
                "%c" + this.createTime(cfg.timeNotation) +
                "%c" + this.getType(loggable) + (cfg.newLine ? " " : "\n") +
                "%c " + loggable;
        }
        const typeCode = cfg.status[typeOrLabel]?.code || typeOrLabel;
        return "%c" + typeCode +
            "%c" + this.createTime(cfg.timeNotation) +
            "%c" + this.getType(loggable);
    }
    static resetConfs() {
        const cfg = (isBrowser ? window.vividLog?.config : global.vividLog?.config) || config_1.default;
        cfg.customStyle = "";
        cfg.autoGroup = false;
        return cfg.customStyle === "" && cfg.autoGroup === false;
    }
    static fire(loggable, style) {
        if (this.resetConfs()) {
            if (isBrowser) {
                console.log(loggable, style.status, style.time, style.type, style.var);
            }
            else {
                console.log(loggable);
            }
            return true;
        }
        return false;
    }
    static fireLabel(label, type = "LABEL") {
        const cfg = (isBrowser ? window.vividLog?.config : global.vividLog?.config) || config_1.default;
        if (isBrowser) {
            const compiled = `%c${label}%c${this.createTime(cfg.timeNotation)}%c${type}`;
            const style = this.styleBuilder("purple", "purple");
            style.var = "";
            this.fire(compiled, style);
        }
        else {
            const compiled = this.logBuilder(null, label, true);
            this.fire(compiled, {});
        }
    }
    static loggable(args, type) {
        if (args.length > 1) {
            return this.iterateLoggables(args, type);
        }
        return this.evaluate(args[0], type);
    }
    static iterateLoggables(args, type) {
        const cfg = (isBrowser ? window.vividLog?.config : global.vividLog?.config) || config_1.default;
        if (cfg.autoGroup) {
            this.fireLabel(type.toUpperCase(), `Group[${args.length}]`);
            if (isBrowser && console.groupCollapsed) {
                console.groupCollapsed(type.toUpperCase());
            }
        }
        for (let i = 0; i < args.length; i++) {
            this.evaluate(args[i], "log");
        }
        if (cfg.autoGroup) {
            if (isBrowser && console.groupEnd) {
                console.groupEnd();
            }
        }
        cfg.autoGroup = false;
        return true;
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map