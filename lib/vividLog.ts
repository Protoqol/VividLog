import {Utils} from "./utils";
import {Methods} from "./methods";
import config, {VividLogConfig} from "./config/config";
import {LogSize} from "./enums";

export class VividLog {
    public config: VividLogConfig = config;

    constructor() {
        if (typeof window !== "undefined") {
            (window as any).vividLog = this;
        }
    }

    /**
     * Take over default error log
     */
    public takeOver(activate: boolean = false): void {
        Methods.takeOver(activate);
    }

    /**
     * Chain before log to group the all logs
     */
    public group(grouped: boolean = true): this {
        this.config.autoGroup = grouped;
        return this;
    }

    /**
     * Chain before log to give message a custom style
     */
    public style(customStyle: string = ""): this {
        this.config.customStyle = customStyle;
        return this;
    }

    /**
     * Only log a label
     */
    public fireLabel(label: string): this {
        Utils.fireLabel(label);
        return this;
    }

    /**
     * Normal priority log
     */
    public log(...args: any[]): this {
        Utils.loggable(args, "log");
        return this;
    }

    /**
     * Debug priority log
     */
    public debug(...args: any[]): this {
        Utils.loggable(args, "debug");
        return this;
    }

    /**
     * Error priority log
     */
    public err(...args: any[]): this {
        Utils.loggable(args, "error");
        return this;
    }

    /**
     * Warning priority log
     */
    public warn(...args: any[]): this {
        Utils.loggable(args, "warning");
        return this;
    }

    /**
     * Success priority log
     */
    public done(...args: any[]): this {
        Utils.loggable(args, "success");
        return this;
    }

    /**
     * Information priority log
     */
    public info(...args: any[]): this {
        Utils.loggable(args, "info");
        return this;
    }

    /**
     * Custom logging utility
     */
    public say(loggable: any, label?: string, color?: string): boolean | void {
        const type = Utils.checkTypeLog(loggable);

        if (type === LogSize.SMALL_LOGGABLE) {
            return Utils.fire(
                Utils.logBuilder(loggable, label || (typeof document !== "undefined" ? document.title : "vividLog")),
                Utils.styleBuilder(color || "brown", color || "brown"),
            );
        }

        if (type === LogSize.BIG_LOGGABLE) {
            const style = Utils.styleBuilder("log"); // Default to log style if big
            console.log(
                Utils.logBuilder("nullObjectType", "log"),
                style.status,
                style.time,
                style.type,
            );
            console.log(loggable);
            console.log(
                "%c                         ",
                "padding: 0 5px;font-weight: bolder; border-top: 2px solid " + this.config.status["log"].lightColor + ";",
            );
            return true;
        }
    }
}

const vividLogInstance = new VividLog();
export default vividLogInstance;

if (typeof window !== "undefined") {
    (window as any).vividLog = vividLogInstance;
}
