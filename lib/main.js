window.v = (function () {
    return {
        config: {
            timeNotation: 'h:m:s:ms',
            iUseLightTheme: false,
            fontSize: "font-size: 12px;",
            timeStyle: "color: #F1F5F8; border-left: 1px solid black; border-radius: 5px; padding: 5px;",
            statusStyle: "color: #F1F5F8; border-right: 1px solid black; font-weight: bold;",
            messageStyle: "color: #F1F5F8; margin-top: 10px; margin-bottom: 5px;",
            newLine: navigator.userAgent.includes('Firefox'),
            status: {
                error: {
                    lightColor: '#da3030',
                    darkColor: '#872323',
                    code: 'ERROR'
                },
                success: {
                    lightColor: '#00b808',
                    darkColor: '#21872a',
                    code: 'SUCCESS'
                },
                warning: {
                    lightColor: '#da993e',
                    darkColor: '#875a2a',
                    code: 'WARNING'
                },
                info: {
                    lightColor: '#b0b52c',
                    darkColor: '#788738',
                    code: 'INFO'
                },
                debug: {
                    lightColor: '#da43be',
                    darkColor: '#872773',
                    code: 'DEBUG'
                },
                log: {
                    lightColor: '#65b0b9',
                    darkColor: '#4f7e87',
                    code: 'LOG'
                }
            },
        },
        debug: function (loggables) {
            logTypes.debug(loggables);
        },
        err: function (loggables) {
            logTypes.error(loggables);
        },
        warn: function (loggables) {
            logTypes.warning(loggables);
        },
        done: function (loggables) {
            logTypes.success(loggables);
        },
        log: function (loggables) {
            logTypes.log(loggables);
        },
        info: function (loggables) {
            logTypes.info(loggables);
        },
        say: function (label = document.title, loggables = 'My Custom Label', color = "brown") {
            logTypes.say(label, loggables, color);
        }
    }
}());

let logTypes = {
    debug: function (loggables) {
        if (loggables && easyLoggable(loggables)) {
            push('debug', loggables);
        }
        else {
            if (loggables === '') {
                noContextGiven();
            }

            if (!easyLoggable(loggables)) {
                pushObject('debug', loggables);
            }
        }
    },
    error: function (loggables) {
        if (loggables && easyLoggable(loggables)) {
            push('error', loggables);
        }
        else {
            if (loggables === '') {
                noContextGiven();
            }

            if (!easyLoggable(loggables)) {
                pushObject('error', loggables);
            }
        }
    },
    success: function (loggables) {
        if (loggables && easyLoggable(loggables)) {
            push('success', loggables);
        }
        else {
            if (loggables === '') {
                noContextGiven();
            }

            if (!easyLoggable(loggables)) {
                pushObject('success', loggables);
            }
        }
    },
    warning: function (loggables) {
        if (loggables && easyLoggable(loggables)) {
            push('warning', loggables);
        }
        else {
            if (loggables === '') {
                noContextGiven();
            }

            if (!easyLoggable(loggables)) {
                pushObject('warning', loggables);
            }
        }
    },
    info: function (loggables) {
        if (loggables && easyLoggable(loggables)) {
            push('info', loggables);
        }
        else {
            if (loggables === '') {
                noContextGiven();
            }

            if (!easyLoggable(loggables)) {
                pushObject('info', loggables);
            }
        }
    },
    log: function (loggables) {
        if (loggables && easyLoggable(loggables)) {
            push('log', loggables);
        }
        else {
            if (loggables === '') {
                noContextGiven();
            }

            if (!easyLoggable(loggables)) {
                pushObject('log', loggables);
            }
        }
    },
    say: function (label, loggables, color) {
        if (loggables && easyLoggable(loggables)) {
            let lightTheme = '';
            let newLine = ' ';
            let params = v.config.timeStyle + `background: ${color};`

            if (v.config.iUseLightTheme) {
                lightTheme = 'color: black;';
            }
            if (!v.config.newLine) {
                newLine = '\n';
            }

            console.log(
                `%c${label}%c${time}%c${newLine}${loggables}`,
                v.config.statusStyle + params + v.config.fontSize,
                params + v.config.fontSize,
                v.config.messageStyle + v.config.fontSize
            );
        }
        else {
            noContextGiven();
        }
    }
}

function push(type, loggables) {
    let lightTheme = '';
    let newLine = ' ';
    let params = v.config.timeStyle + `background: ${v.config.status[type].lightColor};`

    if (v.config.iUseLightTheme) {
        lightTheme = 'color: black;';
    }

    if (!v.config.newLine) {
        newLine = '\n';
    }

    console.log(
        `%c${v.config.status[type].code}%c${time}%c${typeHint(loggables)}%c${newLine}${loggables}`,
        v.config.statusStyle + params + v.config.fontSize,
        params + v.config.fontSize,
        params + `background: ${v.config.status[type].darkColor}; ${v.config.fontSize}`,
        v.config.messageStyle + v.config.fontSize + lightTheme
    );
}

function pushObject(type, loggables) {
    let params = v.config.timeStyle + `background: ${v.config.status[type].lightColor};`
    console.log(
        `%c${v.config.status[type].code}%c${time}%c${typeHint(loggables)}`,
        v.config.statusStyle + params + v.config.fontSize,
        v.config.statusStyle + params + v.config.fontSize,
        params + `background: ${v.config.status[type].darkColor}; ${v.config.fontSize}`,
    );
    console.log(loggables);
    console.log(
        '%c‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾',
        `color: ${v.config.status[type].lightColor}; padding: -5px 5px; font-weight: bolder;`
    );
}

function noContextGiven() {
    v.log('Empty logging message');
}

function typeHint(loggable) {
    let len = loggable.length;
    switch (typeof loggable) {
        case "string":
            return `string[${len}]`;
        case "boolean":
            return `boolean`;
        case "number":
            len = (loggable + '').length;
            return `integer[${len}]`;
        case "object":
            len = Object.keys(loggable).length;
            return `object[${len}]`;
        case "bigint":
            len = (loggable + '').length;
            return `big integer[${len}]`;
        case "function":
            return `function`;
        case "symbol":
            return `symbol`;
        case "undefined":
            return `undefined`;
        default:
            return 'var';
    }
}

let time = createTime();

function createTime() {
    let date = new Date(),
        h = (date.getHours() < 10 ? '0' : '') + date.getHours(),
        m = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes(),
        s = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds(),
        ms = (date.getMilliseconds() < 10 ? '0' : '') + date.getMilliseconds(),
        notation = v.config.timeNotation.split(':'),
        format = '';

    for (let i = 0; i < notation.length; i++) {
        switch (notation[i]) {
            case 'h':
                format += h;
                break;
            case 'm':
                format += m;
                break;
            case 's':
                format += s;
                break;
            case 'ms':
                format += ms;
                break;
            default:
                break;
        }
        if (i !== (notation.length - 1)) {
            format += ':';
        }
    }
    return format;
}

function easyLoggable(loggables) {
    return typeof loggables !== 'object' && typeof loggables !== 'function';
}


