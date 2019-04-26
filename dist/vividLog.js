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
/* WEBPACK VAR INJECTION */(function(process) {

module.exports = {
  autoGroup: false,
  timeNotation: 'h:m:s:ms',
  iUseLightTheme: false,
  customStyle: '',
  fontSize: '12px',
  newLine: typeof navigator !== 'undefined' ? navigator.userAgent.includes('Firefox') : false,
  nav: function nav() {
    if (typeof window !== 'undefined') {
      return 'browser';
    } else if (process) {
      return 'node';
    }
  },
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

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
  // Redefine onerror | TODO Node version
  takeOver: function takeOver(activate) {
    if (activate) {
      window.onerror = function (message, source, lineno, colno, error) {
        if (error) {
          // vividLog.say('All your base are belong to us.', 'VividLog', '#3490DC');
          event.preventDefault();
          event.stopImmediatePropagation();
          event.stopPropagation();
          vividLog.err(error.stack);
          return true; // Prevents any event bubbling
        }

        return false; // Resume default event
      };

      return true;
    }

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
    console.log('%c                         ', 'padding: 0 5px;font-weight: bolder; border-top: 2px solid ' + window.vividLog.config.status[type].lightColor + ';');
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
 * Compile a timestamp based on the config
 *
 * @param format
 * @returns {string|boolean}
 */


util.createTime = function (format) {
  var time = util.timeObj(format);
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

    if (i !== time.format.length - 1) {
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
 * Compile default CSS rules for log
 *
 * @param type
 * @returns {{var: *, time: string, type: *, status: string}}
 */


util.styleBuilder = function (type) {
  var lightTheme = window.vividLog.config.iUseLightTheme ? 'color: white;' : '';
  var customStyle = window.vividLog.config.customStyle;
  var fontSize = 'font-size: ' + window.vividLog.config.fontSize + ';';
  var style = {
    "default": 'color: #F1F5F8;' + fontSize,
    labelDefault: 'border-radius: 5px; padding: 5px;' + 'background: ' + window.vividLog.config.status[type].lightColor + ';',
    timeDefault: '',
    logNameDefault: 'font-weight: bold;',
    typeNameDefault: 'background: ' + window.vividLog.config.status[type].darkColor + ';',
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
 * Compile default CSS rules with custom color for log
 *
 * @param color
 * @returns {{var: *, time: string, type: *, status: string}}
 */


util.selfStyleBuilder = function (color) {
  // Build style rules for vividLog.say() function
  var lightTheme = window.vividLog.config.iUseLightTheme ? 'color: white;' : '';
  var customStyle = window.vividLog.config.customStyle;
  var fontSize = 'font-size: ' + window.vividLog.config.fontSize + ';';
  var style = {
    "default": 'color: #F1F5F8;' + fontSize,
    labelDefault: 'border-radius: 5px; padding: 5px;' + 'background: ' + color + ';',
    timeDefault: '',
    logNameDefault: 'font-weight: bold;',
    typeNameDefault: 'background: ' + color + ';',
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
 * @param type
 * @returns {string}
 */


util.logBuilder = function (loggable, type) {
  // Check if not big
  if (loggable !== 'nullObjectType') {
    return '%c' + vividLog.config.status[type].code + '%c' + util.createTime(vividLog.config.timeNotation) + '%c' + util.getType(loggable) + '%c' + (vividLog.config.newLine ? ' ' : '\n') + loggable;
  }

  return '%c' + vividLog.config.status[type].code + '%c' + util.createTime(vividLog.config.timeNotation) + '%c' + util.getType(loggable);
};
/**
 * Compile loggable with custom label
 *
 * @param loggable
 * @param label
 * @returns {string}
 */


util.selfLogBuilder = function (loggable, label) {
  // Build style rules for custom vividLog.say() function
  return '%c' + label + '%c' + util.createTime(window.vividLog.config.timeNotation) + '%c' + util.getType(loggable) + '%c' + (window.vividLog.config.newLine ? ' ' : '\n') + loggable;
};
/**
 * Reset chained function config changes
 *
 * @returns {boolean}
 */


util.resetConfs = function () {
  // Todo Expand
  window.vividLog.config.customStyle = '';
  window.vividLog.config.autoGroup = false;
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
  var style = util.selfStyleBuilder('purple');
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

  if (vividLog.config.autoGroup) {
    console.groupEnd();
    vividLog.config.autoGroup = false;
  }

  return true;
};

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
    return util.fire(util.selfLogBuilder(loggable, label || document.title), util.selfStyleBuilder(color || 'brown'));
  }

  if (util.checkTypeLog(loggable) === LOG_ENUM.BIG_LOGGABLE) {
    var style = util.styleBuilder(type);
    console.log(util.logBuilder('nullObjectType', type), style.status, style.time, style.type);
    console.log(loggable);
    console.log('%c                         ', 'padding: 0 5px;font-weight: bolder; border-top: 2px solid ' + window.vividLog.config.status[type].lightColor + ';');
  }
};

module.exports = window.vividLog = vividLog;

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ });
//# sourceMappingURL=vividLog.js.map