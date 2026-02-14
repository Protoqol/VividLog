export declare enum LogSize {
    SMALL_LOGGABLE = 0,
    BIG_LOGGABLE = 1
}
export interface LogTypeInfo {
    i: number;
    val: string;
}
export declare const DEBUG: LogTypeInfo;
export declare const ERROR: LogTypeInfo;
export declare const INFO: LogTypeInfo;
export declare const LOG: LogTypeInfo;
export declare const WARNING: LogTypeInfo;
