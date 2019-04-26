'use strict';

var LOG_ENUM = require('./enums');
var util     = {};

/**
 * Evaluate incoming loggable and type
 *
 * @param loggable
 * @param type
 * @returns {boolean}
 */
util.evaluate = function (loggable, type) {
	if (util.checkTypeLog(loggable) === LOG_ENUM.SMALL_LOGGABLE) {
		return util.fire(util.logBuilder(loggable, type), util.styleBuilder(type));
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
			'padding: 0 5px;font-weight: bolder; border-top: 2px solid ' + vividLog.config.status[type].lightColor + ';'
		);
	}
	return false;
};

/**
 * Find type and length of loggable
 *
 * @param loggable
 * @returns {string|boolean}
 */
util.getType = function (loggable) {
	var len;
	switch (typeof loggable) {
		case 'string':
			len = loggable.length || 0;
			return 'string[' + len + ']';
		case 'boolean':
			return 'boolean';
		case 'number':
			len = (loggable + '').length;
			return 'integer[' + len + ']';
		case 'object':
			len = Object.keys(loggable).length;
			return 'object[' + len + ']';
		case 'bigint':
			len = (loggable + '').length;
			return 'big integer[' + len + ']';
		case 'function':
			return 'function';
		case 'symbol':
			return 'symbol';
		case 'undefined':
			return 'undefined';
		default:
			return false;
	}
};

/**
 * Check if type is any of the types of logs
 *
 * @param variable
 * @returns {boolean}
 */
util.isTypeOfLoggable = function (variable) {
	return (
		variable === 'log' ||
		variable === 'debug' ||
		variable === 'error' ||
		variable === 'info' ||
		variable === 'success' ||
		variable === 'warning'
	);
};

/**
 * Compile a timestamp based on the config
 *
 * @param format
 * @returns {string|boolean}
 */
util.createTime = function (format) {
	var time       = util.timeObj(format);
	var returnTime = '';

	for (var i = 0; i < time.format.length; i++) {
		switch (time.format[i]) {
			case 'h':
				returnTime += time.h;
				break;
			case 'm':
				returnTime += time.m;
				break;
			case 's':
				returnTime += time.s;
				break;
			case 'ms':
				returnTime += time.ms;
				break;
			default:
				break;
		}
		if (i !== (time.format.length - 1)) {
			returnTime += ':';
		}
	}

	if (returnTime.length >= 1) {
		return returnTime;
	}

	return false;
};

/**
 * Return current datetime and config time notation
 *
 * @param format
 * @returns {{s: string, ms: string, format: (void|string[]), h: string, m: string}}
 */
util.timeObj = function (format) {
	var date = new Date();
	return {
		format: format.split(':') || window.vividLog.config.timeNotation.split(':'),
		h: (date.getHours() < 10 ? '0' : '') + date.getHours(),
		m: (date.getMinutes() < 10 ? '0' : '') + date.getMinutes(),
		s: (date.getSeconds() < 10 ? '0' : '') + date.getSeconds(),
		ms: (date.getMilliseconds() < 10 ? '0' : '') + date.getMilliseconds()
	};
};

/**
 * Check if loggable is a big or small loggable
 *
 * @param loggable
 * @returns {number}
 */
util.checkTypeLog = function (loggable) {
	return (typeof loggable === 'string' || typeof loggable === 'number' || typeof loggable === 'undefined')
		? LOG_ENUM.SMALL_LOGGABLE
		: LOG_ENUM.BIG_LOGGABLE;
};


/**
 * TODO | Will return verified and fixed css from user input
 *
 * @param css
 * @returns {*}
 */
util.makeStyleCompatible = function (css) {
	// Check (and fix) user written css | Todo
	return css;
};

/**
 * Compile CSS rules for log into object
 *
 * @param type
 * @param color
 * @returns {{var: *, time: string, type: *, status: string}}
 */
util.styleBuilder = function (type, color) {
	var lightTheme  = window.vividLog.config.iUseLightTheme ? 'color: white;' : '';
	var customStyle = window.vividLog.config.customStyle;
	var fontSize    = 'font-size: ' + window.vividLog.config.fontSize + ';';

	var typeOrColorLight = util.isTypeOfLoggable(type) ? window.vividLog.config.status[type].lightColor : color;
	var typeOrColorDark  = util.isTypeOfLoggable(type) ? window.vividLog.config.status[type].darkColor : color;

	var style = {
		default: 'color: #F1F5F8;' + fontSize,
		labelDefault: 'border-radius: 5px; padding: 5px;' + 'background: ' + typeOrColorLight + ';',
		timeDefault: '',
		logNameDefault: 'font-weight: bold;',
		typeNameDefault: 'background: ' + typeOrColorDark + ';',
		varDefault: 'margin-top: 10px; margin-bottom: 5px;' + lightTheme,
		custom: util.makeStyleCompatible(customStyle)
	};

	return {
		status: style.default + style.labelDefault + style.logNameDefault,
		time: style.default + style.labelDefault + style.timeDefault,
		type: style.default + style.labelDefault + style.typeNameDefault,
		var: style.default + style.varDefault + style.custom
	};
};

/**
 * Compile loggable
 *
 * @param loggable
 * @param typeOrLabel
 * @returns {string}
 */
util.logBuilder = function (loggable, typeOrLabel) {
	var label = util.isTypeOfLoggable(typeOrLabel) ? vividLog.config.status[typeOrLabel].code : typeOrLabel;

	if (loggable !== 'nullObjectType') {
		return '%c' + label +
			'%c' + util.createTime(vividLog.config.timeNotation) +
			'%c' + util.getType(loggable) + (vividLog.config.newLine ? ' ' : '\n') +
			'%c ' + loggable;
	}

	return '%c' + vividLog.config.status[type].code +
		'%c' + util.createTime(vividLog.config.timeNotation) +
		'%c' + util.getType(loggable);
};

/**
 * Reset chained function config changes
 *
 * @returns {boolean}
 */
util.resetConfs = function () {
	vividLog.config.customStyle = '';
	vividLog.config.autoGroup   = false;

	return (window.vividLog.config.customStyle === '' && window.vividLog.config.autoGroup === false);

};

/**
 * Do the actual log to console
 *
 * @param loggable
 * @param style
 * @returns {boolean}
 */
util.fire = function (loggable, style) {
	if (util.resetConfs()) {
		console.log(loggable, style.status, style.time, style.type, style.var);
		return true;
	}
	return false;
};

/**
 * Only log a label
 *
 * @param label
 * @param type
 */
util.fireLabel = function (label, type) {
	var compiled = '%c' + label + '%c' + util.createTime(v.config.timeNotation) + '%c' + type;
	var style    = util.styleBuilder('purple', 'purple');
	style.var    = '';

	util.fire(compiled, style);
};

/**
 * Iterate over all given arguments, or not depending on number of arguments
 *
 * @param args
 * @param type
 */
util.loggable = function (args, type) {
	if (args.length > 1) {
		return util.iterateLoggables(args, type);
	}

	return util.evaluate(args[0], type);
};

/**
 * If multiple loggables are given, they will be iterated through here
 *
 * @param args
 * @param type
 * @returns {boolean}
 */
util.iterateLoggables = function (args, type) {
	if (vividLog.config.autoGroup) {
		util.fireLabel(type.toUpperCase(), 'Group[' + args.length + ']');
		console.groupCollapsed(type.toUpperCase());
	}

	for (var i = 0; i < args.length; i++) {
		util.evaluate(args[i], 'log');
	}

	console.groupEnd();
	vividLog.config.autoGroup = false;

	return true;
};

module.exports = util;