/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/vividLog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/config/config.js":
/*!******************************!*\
  !*** ./lib/config/config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  autoGroup: false,
  timeNotation: 'h:m:s:ms',
  iUseLightTheme: false,
  customStyle: '',
  fontSize: '12px',
  newLine: typeof navigator !== 'undefined' ? navigator.userAgent.includes('Firefox') : false,
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
  }
};

/***/ }),

/***/ "./lib/enums.js":
/*!**********************!*\
  !*** ./lib/enums.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  // Size type of log
  SMALL_LOGGABLE: 0,
  BIG_LOGGABLE: 1,
  // Type of log
  DEBUG: {
    i: 2,
    val: 'debug'
  },
  ERROR: {
    i: 3,
    val: 'error'
  },
  INFO: {
    i: 4,
    val: 'info'
  },
  LOG: {
    i: 5,
    val: 'log'
  },
  WARNING: {
    i: 6,
    val: 'warning'
  }
};

/***/ }),

/***/ "./lib/methods.js":
/*!************************!*\
  !*** ./lib/methods.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  /**
   * Redefines on error event
   *
   * @returns {boolean}
   * @param turnOn
   */
  takeOver: function takeOver(turnOn) {
    if (turnOn) {
      window.onerror = function () {
        if (arguments) {
          event.preventDefault();
          event.stopImmediatePropagation();
          event.stopPropagation();
          vividLog.err(arguments[4].stack);
          return true; // Prevents any event bubbling
        }

        return false; // Resume default event
      };

      return true;
    }

    v.style('font-style: italic;').say('f v.takeOver() was called but was not turned on. Do so by using v.takeOver(true)', 'VividLog', '#E3342F');
    return false;
  }
};

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var LOG_ENUM = __webpack_require__(/*! ./enums */ "./lib/enums.js");

var util = {};
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
    console.log(util.logBuilder('nullObjectType', type), style.status, style.time, style.type);
    console.log(loggable);
    console.log('%c                         ', 'padding: 0 5px;font-weight: bolder; border-top: 2px solid ' + vividLog.config.status[type].lightColor + ';');
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

  switch (_typeof(loggable)) {
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
  return variable === 'log' || variable === 'debug' || variable === 'error' || variable === 'info' || variable === 'success' || variable === 'warning';
};
/**
 * Compile a timestamp based on the config
 *
 * @param format
 * @returns {string|boolean}
 */


util.createTime = function (format) {
  var time = util.timeObj(format);
  var returnTime = '';

  for (var iteration = 0; iteration < time.format.length; iteration++) {
    switch (time.format[iteration]) {
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

    if (iteration !== time.format.length - 1) {
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
  return typeof loggable === 'string' || typeof loggable === 'number' || typeof loggable === 'undefined' ? LOG_ENUM.SMALL_LOGGABLE : LOG_ENUM.BIG_LOGGABLE;
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
  var lightTheme = window.vividLog.config.iUseLightTheme ? 'color: white;' : '';
  var customStyle = window.vividLog.config.customStyle;
  var fontSize = 'font-size: ' + window.vividLog.config.fontSize + ';';
  var typeOrColorLight = util.isTypeOfLoggable(type) ? window.vividLog.config.status[type].lightColor : color;
  var typeOrColorDark = util.isTypeOfLoggable(type) ? window.vividLog.config.status[type].darkColor : color;
  var style = {
    "default": 'color: #F1F5F8;' + fontSize,
    labelDefault: 'border-radius: 5px; padding: 5px;' + 'background: ' + typeOrColorLight + ';',
    timeDefault: '',
    logNameDefault: 'font-weight: bold;',
    typeNameDefault: 'background: ' + typeOrColorDark + ';',
    varDefault: 'margin-top: 10px; margin-bottom: 5px;' + lightTheme,
    custom: util.makeStyleCompatible(customStyle)
  };
  return {
    status: style["default"] + style.labelDefault + style.logNameDefault,
    time: style["default"] + style.labelDefault + style.timeDefault,
    type: style["default"] + style.labelDefault + style.typeNameDefault,
    "var": style["default"] + style.varDefault + style.custom
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
    return '%c' + label + '%c' + util.createTime(vividLog.config.timeNotation) + '%c' + util.getType(loggable) + (vividLog.config.newLine ? ' ' : '\n') + '%c ' + loggable;
  }

  return '%c' + vividLog.config.status[type].code + '%c' + util.createTime(vividLog.config.timeNotation) + '%c' + util.getType(loggable);
};
/**
 * Reset chained function config changes
 *
 * @returns {boolean}
 */


util.resetConfs = function () {
  vividLog.config.customStyle = '';
  vividLog.config.autoGroup = false;
  return window.vividLog.config.customStyle === '' && window.vividLog.config.autoGroup === false;
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
    console.log(loggable, style.status, style.time, style.type, style["var"]);
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
  var style = util.styleBuilder('purple', 'purple');
  style["var"] = '';
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
/**
 * Export
 */


module.exports = util;

/***/ }),

/***/ "./lib/vividLog.js":
/*!*************************!*\
  !*** ./lib/vividLog.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Has to be immutable

var LOG_ENUM = Object.freeze(__webpack_require__(/*! ./enums */ "./lib/enums.js"));

var util = __webpack_require__(/*! ./utils */ "./lib/utils.js");

var config = __webpack_require__(/*! ./config/config */ "./lib/config/config.js");

var methods = __webpack_require__(/*! ./methods */ "./lib/methods.js");
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
    console.log(util.logBuilder('nullObjectType', type), style.status, style.time, style.type);
    console.log(loggable);
    console.log('%c                         ', 'padding: 0 5px;font-weight: bolder; border-top: 2px solid ' + window.vividLog.config.status[type].lightColor + ';');
  }
};

module.exports = window.vividLog = vividLog;

/***/ })

/******/ });
//# sourceMappingURL=vividLog.js.map