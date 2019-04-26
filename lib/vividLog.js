'use strict';

var util     = require('./utils');
var config   = require('./config/config');
var methods  = require('./methods');
var LOG_ENUM = Object.freeze(require('./enums')); // Has to be immutable

var vividLog = {};

/**
 * Holds a copy of default config
 *
 * @type {{timeNotation, autoGroup, iUseLightTheme, nav, newLine, customStyle, fontSize, status}|*}
 */
vividLog.config = config;

/**
 * Take over default error log
 *
 * @param activate
 */
vividLog.takeOver = function (activate) {
	methods.takeOver(activate || true);
};

/**
 * Chain before log to group the all logs
 *
 * @param grouped
 * @returns {vividLog}
 */
vividLog.group = function (grouped) {
	this.config.autoGroup = grouped || true;
	return this;
};

/**
 * Chain before log to give message a custom style
 *
 * @param customStyle
 * @returns {vividLog}
 */
vividLog.style = function (customStyle) {
	this.config.customStyle = customStyle || '';
	return this;
};


/**
 * Only log a label
 *
 * @param label
 */
vividLog.fireLabel = function (label) {
	util.fireLabel(label);
};


vividLog.debug = function () {
	var args = arguments;

	if (args.length > 1) {
		if (this.autoGroup) {
			vividLog.fireLabel('DEBUG GROUP CREATED');
			console.groupCollapsed('Debug (group)');
		}
		for (var i = 0; i < args.length; i++) {
			util.evaluate(args[i], 'debug');
		}
		if (this.autoGroup) {
			console.groupEnd();
			this.autoGroup = false;
		}
	} else {
		util.evaluate(args[0], 'debug');
	}

	return this;
};

vividLog.err = function () {
	var args = arguments;
	if (args.length > 1) {
		if (this.autoGroup) {
			vividLog.fireLabel('ERROR GROUP CREATED');
			console.groupCollapsed('Error (group)');
		}
		for (var i = 0; i < args.length; i++) {
			util.evaluate(args[i], 'error');
		}
		if (this.autoGroup) {
			console.groupEnd();
			this.autoGroup = false;
		}
	} else {
		util.evaluate(args[0], 'error');
	}
	return this;
};

vividLog.warn = function () {
	var args = arguments;
	if (args.length > 1) {
		if (this.autoGroup) {
			vividLog.fireLabel('WARNING GROUP CREATED');
			console.groupCollapsed('Warning (group)');
		}
		for (var i = 0; i < args.length; i++) {
			util.evaluate(args[i], 'warning');
		}
		if (this.autoGroup) {
			console.groupEnd();
			this.autoGroup = false;
		}
	} else {
		util.evaluate(args[0], 'error');
	}
	return this;
};

vividLog.done = function () {
	var args = arguments;
	if (args.length > 1) {
		if (this.autoGroup) {
			vividLog.fireLabel('SUCCESS GROUP CREATED');
			console.groupCollapsed('Success (group)');
		}
		for (var i = 0; i < args.length; i++) {
			util.evaluate(args[i], 'success');
		}
		if (this.autoGroup) {
			console.groupEnd();
		}
	} else {
		util.evaluate(args[0], 'success');
	}
	return this;
};

vividLog.log = function () {
	var args = arguments;
	if (args.length > 1) {
		if (this.autoGroup) {
			vividLog.fireLabel('LOGGING GROUP CREATED');
			console.groupCollapsed('LOG (group)');
		}
		for (var i = 0; i < args.length; i++) {
			util.evaluate(args[i], 'log');
		}
		if (this.autoGroup) {
			console.groupEnd();
			this.autoGroup = false;
		}
	} else {
		util.evaluate(args[0], 'log');
	}
	return this;
};

vividLog.info = function () {
	var args = arguments;
	if (args.length > 1) {
		if (this.autoGroup) {
			vividLog.fireLabel('INFO GROUP CREATED');
			console.groupCollapsed('Info (group)');
		}
		for (var i = 0; i < args.length; i++) {
			util.evaluate(args[i], 'info');
		}
		if (this.autoGroup) {
			console.groupEnd();
			this.autoGroup = false;
		}
	} else {
		util.evaluate(args[0], 'info');
	}
	return this;
};

vividLog.say = function (loggable, label, color) {
	if (util.checkTypeLog(loggable) === LOG_ENUM.SMALL_LOGGABLE) {
		return util.fire(util.selfLogBuilder(loggable, label || document.title), util.selfStyleBuilder(color || 'brown'));
	}

	if (util.checkTypeLog(loggable) === LOG_ENUM.BIG_LOGGABLE) {
		var style = util.styleBuilder(type);
		console.log(
			util.logBuilder('nullObjectType', type),
			style.status,
			style.time,
			style.type
		);
		console.log(loggable);
		console.log(
			'%c                         ',
			'padding: 0 5px;font-weight: bolder; border-top: 2px solid ' + window.vividLog.config.status[type].lightColor + ';'
		);
	}
};

window.vividLog = vividLog;

module.exports = vividLog;