export enum LogSize {
    SMALL_LOGGABLE = 0,
    BIG_LOGGABLE   = 1,
}

export interface LogTypeInfo {
    i: number;

    val: string;
}

export const DEBUG: LogTypeInfo = {
    i  : 2,
    val: "debug",
};

export const ERROR: LogTypeInfo = {
    i  : 3,
    val: "error",
};

export const INFO: LogTypeInfo = {
    i  : 4,
    val: "info",
};

export const LOG: LogTypeInfo = {
    i  : 5,
    val: "log",
};

export const WARNING: LogTypeInfo = {
    i  : 6,
    val: "warning",
};
