'use strict';

// Has to be immutable
var LOG_ENUM = Object.freeze(require('./enums'));

var util    = require('./utils');
var config  = require('./config/config');
var methods = require('./methods');

/**
 * Create vividLog object
 *
 */
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
	methods.takeOver(activate || false);
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
	return this;
};

/**
 * Normal priority log
 *
 * @returns {vividLog}
 */
vividLog.log = function () {
	util.loggable(arguments, 'log');
	return this;
};

/**
 * Debug priority log
 *
 * @returns {vividLog}
 */
vividLog.debug = function () {
	util.loggable(arguments, 'debug');
	return this;
};

/**
 * Error priority log
 *
 * @returns {vividLog}
 */
vividLog.err = function () {
	util.loggable(arguments, 'error');
	return this;
};

/**
 * Warning priority log
 *
 * @returns {vividLog}
 */
vividLog.warn = function () {
	util.loggable(arguments, 'warning');
	return this;
};

/**
 * Success priority log
 *
 * @returns {vividLog}
 */
vividLog.done = function () {
	util.loggable(arguments, 'success');
	return this;
};

/**
 * Information priority log
 *
 * @returns {vividLog}
 */
vividLog.info = function () {
	util.loggable(arguments, 'info');
	return this;
};

/**
 * Custom logging utility
 *
 * @param loggable
 * @param label
 * @param color
 * @returns {boolean}
 */
vividLog.say = function (loggable, label, color) {
	if (util.checkTypeLog(loggable) === LOG_ENUM.SMALL_LOGGABLE) {
		return util.fire(util.logBuilder(loggable, label || document.title), util.styleBuilder(color || 'brown', color || 'brown'));
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
		return true;
	}
};

module.exports = window.vividLog = vividLog;