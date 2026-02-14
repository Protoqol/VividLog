import { VividLogConfig } from "./config/config";
export declare class VividLog {
    config: VividLogConfig;
    constructor();
    /**
     * Take over default error log
     */
    takeOver(activate?: boolean): void;
    /**
     * Chain before log to group the all logs
     */
    group(grouped?: boolean): this;
    /**
     * Chain before log to give message a custom style
     */
    style(customStyle?: string): this;
    /**
     * Only log a label
     */
    fireLabel(label: string): this;
    /**
     * Normal priority log
     */
    log(...args: any[]): this;
    /**
     * Debug priority log
     */
    debug(...args: any[]): this;
    /**
     * Error priority log
     */
    err(...args: any[]): this;
    /**
     * Warning priority log
     */
    warn(...args: any[]): this;
    /**
     * Success priority log
     */
    done(...args: any[]): this;
    /**
     * Information priority log
     */
    info(...args: any[]): this;
    /**
     * Custom logging utility
     */
    say(loggable: any, label?: string, color?: string): boolean | void;
}
declare const vividLogInstance: VividLog;
export default vividLogInstance;
