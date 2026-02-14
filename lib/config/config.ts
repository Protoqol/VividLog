export interface StatusConfig {
    lightColor: string;

    darkColor: string;

    code: string;
}

export interface VividLogConfig {
    autoGroup: boolean;

    timeNotation: string;

    iUseLightTheme: boolean;

    customStyle: string;

    fontSize: string;

    newLine: boolean;

    status: {
        [key: string]: StatusConfig;
    };
}

const config: VividLogConfig = {
    autoGroup     : false,
    timeNotation  : "h:m:s:ms",
    iUseLightTheme: false,
    customStyle   : "",
    fontSize      : "12px",
    newLine       : typeof navigator !== "undefined" ? navigator.userAgent.includes("Firefox") : false,
    status        : {
        error  : {
            lightColor: "#da3030",
            darkColor : "#872323",
            code      : "ERROR",
        },
        success: {
            lightColor: "#00b808",
            darkColor : "#21872a",
            code      : "SUCCESS",
        },
        warning: {
            lightColor: "#da993e",
            darkColor : "#875a2a",
            code      : "WARNING",
        },
        info   : {
            lightColor: "#b0b52c",
            darkColor : "#788738",
            code      : "INFO",
        },
        debug  : {
            lightColor: "#da43be",
            darkColor : "#872773",
            code      : "DEBUG",
        },
        log    : {
            lightColor: "#65b0b9",
            darkColor : "#4f7e87",
            code      : "LOG",
        },
    },
};

export default config;
