import {LogSize} from "./enums";
import config from "./config/config";

// Define a type for the global vividLog if needed, or use a class.
// Based on the code, vividLog is expected to be global.
declare global {
    interface Window {
        vividLog: any;
    }

    const vividLog: any;
}

export class Utils {
    static evaluate(loggable: any, type: string): boolean {
        if (this.checkTypeLog(loggable) === LogSize.SMALL_LOGGABLE) {
            return this.fire(this.logBuilder(loggable, type), this.styleBuilder(type));
        }

        if (this.checkTypeLog(loggable) === LogSize.BIG_LOGGABLE) {
            const style = this.styleBuilder(type);
            console.log(
                this.logBuilder("nullObjectType", type),
                style.status,
                style.time,
                style.type,
            );
            console.log(loggable);
            console.log(
                "%c                         ",
                "padding: 0 5px;font-weight: bolder; border-top: 2px solid " + (window.vividLog?.config?.status[type]?.lightColor || "#000") + ";",
            );
        }
        return false;
    }

    static getType(loggable: any): string | false {
        let len: number;
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

    static isTypeOfLoggable(variable: string): boolean {
        return ["log", "debug", "error", "info", "success", "warning"].includes(variable);
    }

    static createTime(format: string): string | false {
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

    static timeObj(format: string) {
        const date = new Date();
        const cfg = window.vividLog?.config || config;
        return {
            format: format.split(":") || cfg.timeNotation.split(":"),
            h     : String(date.getHours()).padStart(2, "0"),
            m     : String(date.getMinutes()).padStart(2, "0"),
            s     : String(date.getSeconds()).padStart(2, "0"),
            ms    : String(date.getMilliseconds()).padStart(2, "0"),
        };
    }

    static checkTypeLog(loggable: any): LogSize {
        return (typeof loggable === "string" || typeof loggable === "number" || typeof loggable === "undefined")
               ? LogSize.SMALL_LOGGABLE
               : LogSize.BIG_LOGGABLE;
    }

    static makeStyleCompatible(css: string): string {
        return css;
    }

    static styleBuilder(type: string, color?: string) {
        const cfg = window.vividLog?.config || config;
        const lightTheme = cfg.iUseLightTheme ? "color: white;" : "";
        const customStyle = cfg.customStyle;
        const fontSize = `font-size: ${cfg.fontSize};`;

        const typeOrColorLight = this.isTypeOfLoggable(type) ? cfg.status[type].lightColor : color;
        const typeOrColorDark = this.isTypeOfLoggable(type) ? cfg.status[type].darkColor : color;

        const style = {
            default        : "color: #F1F5F8;" + fontSize,
            labelDefault   : `border-radius: 5px; padding: 5px; background: ${typeOrColorLight};`,
            timeDefault    : "",
            logNameDefault : "font-weight: bold;",
            typeNameDefault: `background: ${typeOrColorDark};`,
            varDefault     : "margin-top: 10px; margin-bottom: 5px;" + lightTheme,
            custom         : this.makeStyleCompatible(customStyle),
        };

        return {
            status: style.default + style.labelDefault + style.logNameDefault,
            time  : style.default + style.labelDefault + style.timeDefault,
            type  : style.default + style.labelDefault + style.typeNameDefault,
            var   : style.default + style.varDefault + style.custom,
        };
    }

    static logBuilder(loggable: any, typeOrLabel: string): string {
        const cfg = window.vividLog?.config || config;
        const label = this.isTypeOfLoggable(typeOrLabel) ? cfg.status[typeOrLabel].code : typeOrLabel;

        if (loggable !== "nullObjectType") {
            return "%c" + label +
                "%c" + this.createTime(cfg.timeNotation) +
                "%c" + this.getType(loggable) + (cfg.newLine ? " " : "\n") +
                "%c " + loggable;
        }

        // type is not defined in original code here, but it seems it should be typeOrLabel
        const typeCode = cfg.status[typeOrLabel]?.code || typeOrLabel;
        return "%c" + typeCode +
            "%c" + this.createTime(cfg.timeNotation) +
            "%c" + this.getType(loggable);
    }

    static resetConfs(): boolean {
        const cfg = window.vividLog?.config || config;
        cfg.customStyle = "";
        cfg.autoGroup = false;
        return cfg.customStyle === "" && cfg.autoGroup === false;
    }

    static fire(loggable: string, style: any): boolean {
        if (this.resetConfs()) {
            console.log(loggable, style.status, style.time, style.type, style.var);
            return true;
        }
        return false;
    }

    static fireLabel(label: string, type: string = "LABEL"): void {
        const cfg = window.vividLog?.config || config;
        const compiled = `%c${label}%c${this.createTime(cfg.timeNotation)}%c${type}`;
        const style = this.styleBuilder("purple", "purple");
        style.var = "";
        this.fire(compiled, style);
    }

    static loggable(args: IArguments | any[], type: string): boolean {
        if (args.length > 1) {
            return this.iterateLoggables(args, type);
        }
        return this.evaluate(args[0], type);
    }

    static iterateLoggables(args: IArguments | any[], type: string): boolean {
        const cfg = window.vividLog?.config || config;
        if (cfg.autoGroup) {
            this.fireLabel(type.toUpperCase(), `Group[${args.length}]`);
            console.groupCollapsed(type.toUpperCase());
        }

        for (let i = 0; i < args.length; i++) {
            this.evaluate(args[i], "log");
        }

        if (cfg.autoGroup) {
            console.groupEnd();
        }
        cfg.autoGroup = false;

        return true;
    }
}
