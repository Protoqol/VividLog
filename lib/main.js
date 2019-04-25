'use strict';

var util = require('./utils');
var push = require('./pushers')
var config = require('./config');
var methods = require('./methods');
var LOG_ENUM = Object.freeze(require('./enums'));

var v = {
    config: config,
    takeOver: activate => {
        methods.takeOver(activate);
    },
    group: function () {
        this.autoGroup = true;
        return this;
    },
    style: function (customStyle) {
        this.config.customStyle = customStyle;
        return this;
    },
    debug: function () {
        var args = arguments;
        if (args.length > 1) {
            if (this.autoGroup) {
                logTypes.headLine('DEBUG GROUP CREATED');
                console.groupCollapsed('Debug (group)');
            }
            for (var i = 0; i < args.length; i++) {
                evaluate(args[i], 'debug');
            }
            if (this.autoGroup) {
                console.groupEnd();
                this.autoGroup = false;
            }
        } else {
            evaluate(args[0], 'debug');
        }
        return this;
    },
    err: function () {
        var args = arguments;
        if (args.length > 1) {
            if (this.autoGroup) {
                logTypes.headLine('ERROR GROUP CREATED');
                console.groupCollapsed('Error (group)');
            }
            for (var i = 0; i < args.length; i++) {
                evaluate(args[i], 'error');
            }
            if (this.autoGroup) {
                console.groupEnd();
                this.autoGroup = false;
            }
        } else {
            evaluate(args[0], 'error');
        }
        return this;
    },
    warn: function () {
        var args = arguments;
        if (args.length > 1) {
            if (this.autoGroup) {
                logTypes.headLine('WARNING GROUP CREATED');
                console.groupCollapsed('Warning (group)');
            }
            for (var i = 0; i < args.length; i++) {
                evaluate(args[i], 'warning');
            }
            if (this.autoGroup) {
                console.groupEnd();
                this.autoGroup = false;
            }
        } else {
            evaluate(args[0], 'error');
        }
        return this;
    },
    done: function () {
        var args = arguments;
        if (args.length > 1) {
            if (this.autoGroup) {
                logTypes.headLine('SUCCESS GROUP CREATED');
                console.groupCollapsed('Success (group)');
            }
            for (var i = 0; i < args.length; i++) {
                evaluate(args[i], 'success');
            }
            if (this.autoGroup) {
                console.groupEnd();
            }
        } else {
            evaluate(args[0], 'success');
        }
        return this;
    },
    log: function () {
        var args = arguments;
        if (args.length > 1) {
            if (this.autoGroup) {
                logTypes.headLine('LOGGING GROUP CREATED');
                console.groupCollapsed('LOG (group)');
            }
            for (var i = 0; i < args.length; i++) {
                evaluate(args[i], 'log');
            }
            if (this.autoGroup) {
                console.groupEnd();
                this.autoGroup = false;
            }
        } else {
            evaluate(args[0], 'log');
        }
        return this;
    },
    info: function () {
        var args = arguments;
        if (args.length > 1) {
            if (this.autoGroup) {
                logTypes.headLine('INFO GROUP CREATED');
                console.groupCollapsed('Info (group)');
            }
            for (var i = 0; i < args.length; i++) {
                evaluate(args[i], 'info');
            }
            if (this.autoGroup) {
                console.groupEnd();
                this.autoGroup = false;
            }
        } else {
            evaluate(args[0], 'info');
        }
        return this;
    },
    say: function (loggable = 'My Variable', label = document.title, color = 'brown') {
        if (util.checkType(loggable) === LOG_ENUM.SMALL_LOGGABLE) {
            push.customSmallLoggable(loggable, label, color);
        }

        if (util.checkType(loggable) === LOG_ENUM.BIG_LOGGABLE) {
            push.customBigLoggable(loggable, label, color);
        }
    }
};

var logTypes = {
    headLine: function (label) {
        var lightTheme = '';
        var newLine = ' ';
        var params = v.config.timeStyle + 'background: blueviolet;';

        if (v.config.iUseLightTheme) {
            lightTheme = 'color: black;';
        }

        if (!v.config.newLine) {
            newLine = '\n';
        }

        console.log(
            '%c' + label + '%c' + util.createTime(v.config.timeNotation) + '%cGroup',
            v.config.statusStyle + params + v.config.fontSize,
            params + v.config.fontSize,
            params + 'background: purple;' + v.config.fontSize
        );
    },
}

function evaluate(loggable, type) {
    if (util.checkType(loggable) === LOG_ENUM.SMALL_LOGGABLE) {
        push.smallLoggable(loggable, type);
    }

    if (util.checkType(loggable) === LOG_ENUM.BIG_LOGGABLE) {
        push.bigLoggable(loggable, type);
    }
}


if (v.config.nav !== 'node') {
    window.vividLog = v;
}

if (v.config.nav !== 'browser') {
    global.vividLog = v;
}

module.exports = v;