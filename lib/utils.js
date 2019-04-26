'use strict';

var LOG_ENUM = require('./enums');
var util     = {};

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
			'padding: 0 5px;font-weight: bolder; border-top: 2px solid ' + window.vividLog.config.status[type].lightColor + ';'
		);
	}

	return false;
};

util.getType = function (loggable) {
	// Return type and length of loggable
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

util.createTime = function (format) {
	// Generate timestamp based on config
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

util.checkTypeLog = function (loggable) {
	// Check if big or small loggable
	return (typeof loggable === 'string' || typeof loggable === 'number' || typeof loggable === 'undefined')
		? LOG_ENUM.SMALL_LOGGABLE
		: LOG_ENUM.BIG_LOGGABLE;
};


util.makeStyleCompatible = function (css) {
	// Check (and fix) user written css | Todo
	return css;
};

util.styleBuilder = function (type) {
	// Build CSS rules
	var lightTheme  = window.vividLog.config.iUseLightTheme ? 'color: white;' : '';
	var customStyle = window.vividLog.config.customStyle;
	var fontSize    = 'font-size: ' + window.vividLog.config.fontSize + ';';
	var style       = {
		default: 'color: #F1F5F8;' + fontSize,
		labelDefault: 'border-radius: 5px; padding: 5px;' + 'background: ' + window.vividLog.config.status[type].lightColor + ';',
		timeDefault: '',
		logNameDefault: 'font-weight: bold;',
		typeNameDefault: 'background: ' + window.vividLog.config.status[type].darkColor + ';',
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

util.selfStyleBuilder = function (color) {
	// Build style rules for vividLog.say() function
	var lightTheme  = window.vividLog.config.iUseLightTheme ? 'color: white;' : '';
	var customStyle = window.vividLog.config.customStyle;
	var fontSize    = 'font-size: ' + window.vividLog.config.fontSize + ';';
	var style       = {
		default: 'color: #F1F5F8;' + fontSize,
		labelDefault: 'border-radius: 5px; padding: 5px;' + 'background: ' + color + ';',
		timeDefault: '',
		logNameDefault: 'font-weight: bold;',
		typeNameDefault: 'background: ' + color + ';',
		varDefault: 'margin-top: 10px; margin-bottom: 5px;' + lightTheme,
		custom: util.makeStyleCompatible(customStyle)
	};

	return {
		status: style.default.concat([style.labelDefault, style.logNameDefault]),
		time: style.default.concat([style.labelDefault, style.timeDefault]),
		type: style.default.concat([style.labelDefault + style.typeNameDefault]),
		var: style.default.concat([style.varDefault]) + style.custom
	};
};

util.logBuilder = function (loggable, type) {
	// Build log message

	// Status | Name of label
	// Timestamp
	// Type[length]
	// [newLine?] + loggable

	// Check if not big | Todo better check
	if (loggable !== 'nullObjectType') {
		return '%c' + vividLog.config.status[type].code +
			'%c' + util.createTime(vividLog.config.timeNotation) +
			'%c' + util.getType(loggable) +
			'%c' + (vividLog.config.newLine ? ' ' : '\n') + loggable;
	}
	;
	return '%c' + vividLog.config.status[type].code +
		'%c' + util.createTime(vividLog.config.timeNotation) +
		'%c' + util.getType(loggable);
};

util.selfLogBuilder = function (loggable, label) {
	// Build style rules for custom vividLog.say() function
	return '%c' + label +
		'%c' + util.createTime(window.vividLog.config.timeNotation) +
		'%c' + util.getType(loggable) +
		'%c' + (window.vividLog.config.newLine ? ' ' : '\n') + loggable;
};


util.resetConfs = function () {
	// Todo Expand
	return window.vividLog.config.customStyle === '';

};

util.fire = function (loggable, style) {
	if (util.resetConfs()) {
		console.log(loggable, style.status, style.time, style.type, style.var);
		return true;
	}
	return false;
};

util.fireLabel = function (label) {
	var compiled = '%c' + label + '%c' + util.createTime(v.config.timeNotation) + '%cGroup';
	var style    = util.selfStyleBuilder('purple');
	style.var    = '';

	util.fire(compiled, style);
};

module.exports = util;