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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nwindow.v = function () {\n  return {\n    config: {\n      timeNotation: 'h:m:s:ms',\n      iUseLightTheme: false,\n      fontSize: \"font-size: 12px;\",\n      timeStyle: \"color: #F1F5F8; border-left: 1px solid black; border-radius: 5px; padding: 5px;\",\n      statusStyle: \"color: #F1F5F8; border-right: 1px solid black; font-weight: bold;\",\n      messageStyle: \"color: #F1F5F8; margin-top: 10px; margin-bottom: 5px;\",\n      newLine: navigator.userAgent.includes('Firefox'),\n      status: {\n        error: {\n          lightColor: '#da3030',\n          darkColor: '#872323',\n          code: 'ERROR'\n        },\n        success: {\n          lightColor: '#00b808',\n          darkColor: '#21872a',\n          code: 'SUCCESS'\n        },\n        warning: {\n          lightColor: '#da993e',\n          darkColor: '#875a2a',\n          code: 'WARNING'\n        },\n        info: {\n          lightColor: '#b0b52c',\n          darkColor: '#788738',\n          code: 'INFO'\n        },\n        debug: {\n          lightColor: '#da43be',\n          darkColor: '#872773',\n          code: 'DEBUG'\n        },\n        log: {\n          lightColor: '#65b0b9',\n          darkColor: '#4f7e87',\n          code: 'LOG'\n        }\n      }\n    },\n    debug: function debug(loggables) {\n      logTypes.debug(loggables);\n    },\n    err: function err(loggables) {\n      logTypes.error(loggables);\n    },\n    warn: function warn(loggables) {\n      logTypes.warning(loggables);\n    },\n    done: function done(loggables) {\n      logTypes.success(loggables);\n    },\n    log: function log(loggables) {\n      logTypes.log(loggables);\n    },\n    info: function info(loggables) {\n      logTypes.info(loggables);\n    },\n    say: function say() {\n      var label = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.title;\n      var loggables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'My Custom Label';\n      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"brown\";\n      logTypes.say(label, loggables, color);\n    }\n  };\n}();\n\nvar logTypes = {\n  debug: function debug(loggables) {\n    if (loggables && easyLoggable(loggables)) {\n      push('debug', loggables);\n    } else {\n      if (loggables === '') {\n        noContextGiven();\n      }\n\n      if (!easyLoggable(loggables)) {\n        pushObject('debug', loggables);\n      }\n    }\n  },\n  error: function error(loggables) {\n    if (loggables && easyLoggable(loggables)) {\n      push('error', loggables);\n    } else {\n      if (loggables === '') {\n        noContextGiven();\n      }\n\n      if (!easyLoggable(loggables)) {\n        pushObject('error', loggables);\n      }\n    }\n  },\n  success: function success(loggables) {\n    if (loggables && easyLoggable(loggables)) {\n      push('success', loggables);\n    } else {\n      if (loggables === '') {\n        noContextGiven();\n      }\n\n      if (!easyLoggable(loggables)) {\n        pushObject('success', loggables);\n      }\n    }\n  },\n  warning: function warning(loggables) {\n    if (loggables && easyLoggable(loggables)) {\n      push('warning', loggables);\n    } else {\n      if (loggables === '') {\n        noContextGiven();\n      }\n\n      if (!easyLoggable(loggables)) {\n        pushObject('warning', loggables);\n      }\n    }\n  },\n  info: function info(loggables) {\n    if (loggables && easyLoggable(loggables)) {\n      push('info', loggables);\n    } else {\n      if (loggables === '') {\n        noContextGiven();\n      }\n\n      if (!easyLoggable(loggables)) {\n        pushObject('info', loggables);\n      }\n    }\n  },\n  log: function log(loggables) {\n    if (loggables && easyLoggable(loggables)) {\n      push('log', loggables);\n    } else {\n      if (loggables === '') {\n        noContextGiven();\n      }\n\n      if (!easyLoggable(loggables)) {\n        pushObject('log', loggables);\n      }\n    }\n  },\n  say: function say(label, loggables, color) {\n    if (loggables && easyLoggable(loggables)) {\n      var lightTheme = '';\n      var newLine = ' ';\n      var params = v.config.timeStyle + \"background: \".concat(color, \";\");\n\n      if (v.config.iUseLightTheme) {\n        lightTheme = 'color: black;';\n      }\n\n      if (!v.config.newLine) {\n        newLine = '\\n';\n      }\n\n      console.log(\"%c\".concat(label, \"%c\").concat(time, \"%c\").concat(newLine).concat(loggables), v.config.statusStyle + params + v.config.fontSize, params + v.config.fontSize, v.config.messageStyle + v.config.fontSize);\n    } else {\n      noContextGiven();\n    }\n  }\n};\n\nfunction push(type, loggables) {\n  var lightTheme = '';\n  var newLine = ' ';\n  var params = v.config.timeStyle + \"background: \".concat(v.config.status[type].lightColor, \";\");\n\n  if (v.config.iUseLightTheme) {\n    lightTheme = 'color: black;';\n  }\n\n  if (!v.config.newLine) {\n    newLine = '\\n';\n  }\n\n  console.log(\"%c\".concat(v.config.status[type].code, \"%c\").concat(time, \"%c\").concat(typeHint(loggables), \"%c\").concat(newLine).concat(loggables), v.config.statusStyle + params + v.config.fontSize, params + v.config.fontSize, params + \"background: \".concat(v.config.status[type].darkColor, \"; \").concat(v.config.fontSize), v.config.messageStyle + v.config.fontSize + lightTheme);\n}\n\nfunction pushObject(type, loggables) {\n  var params = v.config.timeStyle + \"background: \".concat(v.config.status[type].lightColor, \";\");\n  console.log(\"%c\".concat(v.config.status[type].code, \"%c\").concat(time, \"%c\").concat(typeHint(loggables)), v.config.statusStyle + params + v.config.fontSize, v.config.statusStyle + params + v.config.fontSize, params + \"background: \".concat(v.config.status[type].darkColor, \"; \").concat(v.config.fontSize));\n  console.log(loggables);\n  console.log('%c‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾', \"color: \".concat(v.config.status[type].lightColor, \"; padding: -5px 5px; font-weight: bolder;\"));\n}\n\nfunction noContextGiven() {\n  v.log('Empty logging message');\n}\n\nfunction typeHint(loggable) {\n  var len = loggable.length;\n\n  switch (_typeof(loggable)) {\n    case \"string\":\n      return \"string[\".concat(len, \"]\");\n\n    case \"boolean\":\n      return \"boolean\";\n\n    case \"number\":\n      len = (loggable + '').length;\n      return \"integer[\".concat(len, \"]\");\n\n    case \"object\":\n      len = Object.keys(loggable).length;\n      return \"object[\".concat(len, \"]\");\n\n    case \"bigint\":\n      len = (loggable + '').length;\n      return \"big integer[\".concat(len, \"]\");\n\n    case \"function\":\n      return \"function\";\n\n    case \"symbol\":\n      return \"symbol\";\n\n    case \"undefined\":\n      return \"undefined\";\n\n    default:\n      return 'var';\n  }\n}\n\nvar time = createTime();\n\nfunction createTime() {\n  var date = new Date(),\n      h = (date.getHours() < 10 ? '0' : '') + date.getHours(),\n      m = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes(),\n      s = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds(),\n      ms = (date.getMilliseconds() < 10 ? '0' : '') + date.getMilliseconds(),\n      notation = v.config.timeNotation.split(':'),\n      format = '';\n\n  for (var i = 0; i < notation.length; i++) {\n    switch (notation[i]) {\n      case 'h':\n        format += h;\n        break;\n\n      case 'm':\n        format += m;\n        break;\n\n      case 's':\n        format += s;\n        break;\n\n      case 'ms':\n        format += ms;\n        break;\n\n      default:\n        break;\n    }\n\n    if (i !== notation.length - 1) {\n      format += ':';\n    }\n  }\n\n  return format;\n}\n\nfunction easyLoggable(loggables) {\n  return _typeof(loggables) !== 'object' && typeof loggables !== 'function';\n}\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });