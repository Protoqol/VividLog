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
declare const config: VividLogConfig;
export default config;
