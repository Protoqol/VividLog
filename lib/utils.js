"use strict";

var LOG_ENUM = require('./enums');

module.exports = new class {
    // Return type and length of loggable
    typeHint(loggable) {
        var len = loggable.length || 0;
        switch (typeof loggable) {
            case "string":
                return 'string[' + len + ']';
            case "boolean":
                return 'boolean';
            case "number":
                len = (loggable + '').length;
                return 'integer[' + len + ']';
            case "object":
                len = Object.keys(loggable).length;
                return 'object[' + len + ']';
            case "bigint":
                len = (loggable + '').length;
                return 'big integer[' + len + ']';
            case "function":
                return 'function';
            case "symbol":
                return 'symbol';
            case "undefined":
                return 'undefined';
            default:
                return 'unknown';
        }
    };

    // Generate timestamp based on config
    createTime(format) {
        var d = this.timeObj(format);
        var str = '';

        for (var i = 0; i < d.format.length; i++) {
            switch (d.format[i]) {
                case 'h':
                    str += d.h;
                    break;
                case 'm':
                    str += d.m;
                    break;
                case 's':
                    str += d.s;
                    break;
                case 'ms':
                    str += d.ms;
                    break;
                default:
                    break;
            }
            if (i !== (d.format.length - 1)) {
                str += ':';
            }
        }

        if (typeof str === 'string' && str.length >= 1) {
            return str;
        }
        
        return false;
    };

    timeObj(format) {
        var date = new Date();
        return {
            format: format.split(':') || window.vividLog.config.timeNotation.split(':'),
            h: (date.getHours() < 10 ? '0' : '') + date.getHours(),
            m: (date.getMinutes() < 10 ? '0' : '') + date.getMinutes(),
            s: (date.getSeconds() < 10 ? '0' : '') + date.getSeconds(),
            ms: (date.getMilliseconds() < 10 ? '0' : '') + date.getMilliseconds()
        }
    };


    // Check if big or small loggable
    checkType(loggable) {
        if (typeof loggable === 'string' || typeof loggable === 'number' || typeof loggable === 'undefined') {
            return LOG_ENUM.SMALL_LOGGABLE;
        } else {
            return LOG_ENUM.BIG_LOGGABLE;
        }
    };

    // Check (and fix) user written css
    makeStyleCompatible(css) {
        // Todo
        return css;
    };

    // Build CSS rules
    styleBuilder(type) {
        var lightTheme = window.vividLog.config.iUseLightTheme ? 'color: white;' : '';
        var customStyle = window.vividLog.config.customStyle;
        var fontSize = 'font-size: ' + window.vividLog.config.fontSize + ';';
        var style = {
            default: 'color: #F1F5F8;' + fontSize,
            labelDefault: 'border-radius: 5px; padding: 5px;' + 'background: ' + window.vividLog.config.status[type].lightColor + ';',
            timeDefault: '',
            logNameDefault: 'font-weight: bold;',
            typeNameDefault: 'background: ' + window.vividLog.config.status[type].darkColor + ';',
            varDefault: 'margin-top: 10px; margin-bottom: 5px;' + lightTheme,
            custom: this.makeStyleCompatible(customStyle)
        };

        return {
            status: style.default.concat([style.labelDefault, style.logNameDefault]),
            time: style.default.concat([style.labelDefault, style.timeDefault]),
            type: style.default.concat([style.labelDefault + style.typeNameDefault]),
            var: style.default.concat([style.varDefault]) + style.custom
        }
    };

    // Build style rules for vividLog.say() function
    selfStyleBuilder(color) {
        var lightTheme = window.vividLog.config.iUseLightTheme ? 'color: white;' : '';
        var customStyle = window.vividLog.config.customStyle;
        var fontSize = 'font-size: ' + window.vividLog.config.fontSize + ';';
        var style = {
            default: 'color: #F1F5F8;' + fontSize,
            labelDefault: 'border-radius: 5px; padding: 5px;' + 'background: ' + color + ';',
            timeDefault: '',
            logNameDefault: 'font-weight: bold;',
            typeNameDefault: 'background: ' + color + ';',
            varDefault: 'margin-top: 10px; margin-bottom: 5px;' + lightTheme,
            custom: this.makeStyleCompatible(customStyle)
        };

        return {
            status: style.default.concat([style.labelDefault, style.logNameDefault]),
            time: style.default.concat([style.labelDefault, style.timeDefault]),
            type: style.default.concat([style.labelDefault + style.typeNameDefault]),
            var: style.default.concat([style.varDefault]) + style.custom
        }
    };

    // Build log message
    logBuilder(loggable, type) {
        // Status | Name of label 
        // Timestamp 
        // Type[length]
        // [newLine?] + loggable

        // Check if not big | Todo better check
        if (loggable !== 'nullObjectType') {
            return '%c' + window.vividLog.config.status[type].code +
                '%c' + this.createTime(window.vividLog.config.timeNotation) +
                '%c' + this.typeHint(loggable) +
                '%c' + (window.vividLog.config.newline ? ' ' : '\n') + loggable;
        };
        return '%c' + window.vividLog.config.status[type].code +
            '%c' + this.createTime(window.vividLog.config.timeNotation) +
            '%c' + this.typeHint(loggable);
    }

    // Build style rules for custom vividLog.say() function
    selfLogBuilder(loggable, label) {
        return '%c' + label +
            '%c' + this.createTime(window.vividLog.config.timeNotation) +
            '%c' + this.typeHint(loggable) +
            '%c' + (window.vividLog.config.newline ? ' ' : '\n') + loggable;
    };

    fire(loggable, style) {
        this.resetConfs();
        console.log(loggable, style.status, style.time, style.type, style.var);
    };

    resetConfs(properties) {
        // Todo Expand
        window.vividLog.config.customStyle = '';
    }
};