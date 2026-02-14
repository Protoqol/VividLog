import { LogSize } from "./enums";
declare global {
    interface Window {
        vividLog: any;
    }
    const vividLog: any;
}
export declare class Utils {
    static evaluate(loggable: any, type: string): boolean;
    static getType(loggable: any): string | false;
    static isTypeOfLoggable(variable: string): boolean;
    static createTime(format: string): string | false;
    static timeObj(format: string): {
        format: string[];
        h: string;
        m: string;
        s: string;
        ms: string;
    };
    static checkTypeLog(loggable: any): LogSize;
    static makeStyleCompatible(css: string): string;
    static styleBuilder(type: string, color?: string): {
        status: string;
        time: string;
        type: string;
        var: string;
    };
    static logBuilder(loggable: any, typeOrLabel: string, onlyHeader?: boolean): string;
    static resetConfs(): boolean;
    static fire(loggable: string, style: any): boolean;
    static fireLabel(label: string, type?: string): void;
    static loggable(args: IArguments | any[], type: string): boolean;
    static iterateLoggables(args: IArguments | any[], type: string): boolean;
}
