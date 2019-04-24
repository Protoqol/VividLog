// QuintenJustus 2019 https://gitlab.com/QuintenJustus/vividlog

window.vividLog = (function () {
    return {
        config: {
            autoGroup: false,
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
        takeOver: function () {
            window.onerror = function (message, source, lineno, colno, error) {
                event.preventDefault();
                if (error) {
                    logTypes.error(error.stack);
                }
            };
        },
        group: function () {
            this.autoGroup = true;
            return this;
        },
        debug: function (...loggables) {
            if (loggables.length > 1) {
                if (this.autoGroup) {
                    logTypes.headLine('DEBUG GROUP CREATED');
                    console.groupCollapsed('Debug (group)');
                }
                for (let i = 0; i < loggables.length; i++) {
                    logTypes.debug(loggables[i]);
                }
                if (this.autoGroup) {
                    console.groupEnd();
                    this.autoGroup = false;
                }
            } else {
                logTypes.debug(loggables[0]);
            }
        },
        err: function (...loggables) {
            if (loggables.length > 1) {
                if (this.autoGroup) {
                    logTypes.headLine('ERROR GROUP CREATED');
                    console.groupCollapsed('Error (group)');
                }
                for (let i = 0; i < loggables.length; i++) {
                    logTypes.error(loggables[i]);
                }
                if (this.autoGroup) {
                    console.groupEnd();
                    this.autoGroup = false;
                }
            } else {
                logTypes.error(loggables[0]);
            }
        },
        warn: function (...loggables) {
            if (loggables.length > 1) {
                if (this.autoGroup) {
                    logTypes.headLine('WARNING GROUP CREATED');
                    console.groupCollapsed('Warning (group)');
                }
                for (let i = 0; i < loggables.length; i++) {
                    logTypes.warning(loggables[i]);
                }
                if (this.autoGroup) {
                    console.groupEnd();
                    this.autoGroup = false;
                }
            } else {
                logTypes.warning(loggables[0]);
            }
        },
        done: function (...loggables) {
            if (loggables.length > 1) {
                if (this.autoGroup) {
                    logTypes.headLine('SUCCESS GROUP CREATED');
                    console.groupCollapsed('Success (group)');
                }
                for (let i = 0; i < loggables.length; i++) {
                    logTypes.success(loggables[i]);
                }
                if (this.autoGroup) {
                    console.groupEnd();
                }
            } else {
                logTypes.success(loggables[0]);
            }
        },
        log: function (...loggables) {
            if (loggables.length > 1) {
                if (this.autoGroup) {
                    logTypes.headLine('LOGGING GROUP CREATED');
                    console.groupCollapsed('LOG (group)');
                }
                for (let i = 0; i < loggables.length; i++) {
                    logTypes.log(loggables[i]);
                }
                if (this.autoGroup) {
                    console.groupEnd();
                    this.autoGroup = false;
                }
            } else {
                logTypes.log(loggables[0]);
            }
        },
        info: function (...loggables) {
            if (loggables.length > 1) {
                if (this.autoGroup) {
                    logTypes.headLine('INFO GROUP CREATED');
                    console.groupCollapsed('Info (group)');
                }
                for (let i = 0; i < loggables.length; i++) {
                    logTypes.info(loggables[i]);
                }
                if (this.autoGroup) { 
                    console.groupEnd();
                    this.autoGroup = false;
                }
            } else {
                logTypes.info(loggables[0]);
            }
        },
        say: function (label = document.title, loggables = 'My Custom Label', color = "brown") {
            logTypes.say(label, loggables, color);
        }
    }
}());

let v = window.vividLog;

let time = createTime();

const logTypes = {
    debug: function (loggables) {
        resolve(loggables, 'debug');
    },
    error: function (loggables) {
        resolve(loggables, 'error');
    },
    success: function (loggables) {
        resolve(loggables, 'success');
    },
    warning: function (loggables) {
        resolve(loggables, 'warning');
    },
    info: function (loggables) {
        resolve(loggables, 'info');
    },
    log: function (loggables) {
        resolve(loggables, 'log');
    },
    headLine: function (label) {
        let lightTheme = '';
        let newLine = ' ';
        let params = v.config.timeStyle + `background: blueviolet;`;

        if (v.config.iUseLightTheme) {
            lightTheme = 'color: black;';
        }

        if (!v.config.newLine) {
            newLine = '\n';
        }

        console.log(
            `%c${label}%c${time}%cGroup`,
            v.config.statusStyle + params + v.config.fontSize,
            params + v.config.fontSize,
            params + `background: purple; ${v.config.fontSize}`,
        );
    },
    say: function (label, loggables, color = "brown") {
        if (loggables && singleLineLoggable(loggables)) {
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
                `%c${label}%c${time}%c${typeHint(loggables)}%c${newLine}${loggables}`,
                v.config.statusStyle + params + v.config.fontSize,
                params + v.config.fontSize,
                params + `background: ${color}; ${v.config.fontSize}`,
                v.config.messageStyle + v.config.fontSize
            );
        } else {
            noContextGiven();
        }
    }
}

function resolve(loggables, type) {
    let check = typeof loggables;

    if (check === 'string' || check === 'number' || check === 'undefined') {
        if (loggables !== '') {
            push(type, loggables);
        } else {
            noContextGiven();
        }
    } else {
        pushVar(type, loggables);
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

function pushVar(type, loggables) {
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
    v.say('Empty log', 'Oops... \nThere is nothing to log here\n' + getLine(), '#6F213F');
}

function typeHint(loggable) {
    let len = '';

    if (loggable) {
        len = loggable.length;
    }

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
            return 'unknown';
    }
}

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

function singleLineLoggable(loggables) {
    return (typeof loggables !== 'object' && typeof loggables !== 'function' && typeof loggables !== 'undefined' && loggables != '');
}

function getLine() {
    return new Error().stack;
}

function getParams(args, nr) {

}