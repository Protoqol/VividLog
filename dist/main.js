!function(o){var n={};function t(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return o[e].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=o,t.c=n,t.d=function(o,n,e){t.o(o,n)||Object.defineProperty(o,n,{enumerable:!0,get:e})},t.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,n){if(1&n&&(o=t(o)),8&n)return o;if(4&n&&"object"==typeof o&&o&&o.__esModule)return o;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:o}),2&n&&"string"!=typeof o)for(var c in o)t.d(e,c,function(n){return o[n]}.bind(null,c));return e},t.n=function(o){var n=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(n,"a",n),n},t.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)},t.p="",t(t.s=0)}([function(o,n){function t(o){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}window.v={config:{timeNotation:"h:m:s:ms",iUseLightTheme:!1,fontSize:"font-size: 12px;",timeStyle:"color: #F1F5F8; border-left: 1px solid black; border-radius: 5px; padding: 5px;",statusStyle:"color: #F1F5F8; border-right: 1px solid black; font-weight: bold;",messageStyle:"color: #F1F5F8; margin-top: 10px; margin-bottom: 5px;",newLine:navigator.userAgent.includes("Firefox"),status:{error:{lightColor:"#da3030",darkColor:"#872323",code:"ERROR"},success:{lightColor:"#00b808",darkColor:"#21872a",code:"SUCCESS"},warning:{lightColor:"#da993e",darkColor:"#875a2a",code:"WARNING"},info:{lightColor:"#b0b52c",darkColor:"#788738",code:"INFO"},debug:{lightColor:"#da43be",darkColor:"#872773",code:"DEBUG"},log:{lightColor:"#65b0b9",darkColor:"#4f7e87",code:"LOG"}}},debug:function(o){e.debug(o)},err:function(o){e.error(o)},warn:function(o){e.warning(o)},done:function(o){e.success(o)},log:function(o){e.log(o)},info:function(o){e.info(o)},say:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.title,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"My Custom Label",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"brown";e.say(o,n,t)}};var e={debug:function(o){o&&f(o)?c("debug",o):(""===o&&i(),f(o)||r("debug",o))},error:function(o){o&&f(o)?c("error",o):(""===o&&i(),f(o)||r("error",o))},success:function(o){o&&f(o)?c("success",o):(""===o&&i(),f(o)||r("success",o))},warning:function(o){o&&f(o)?c("warning",o):(""===o&&i(),f(o)||r("warning",o))},info:function(o){o&&f(o)?c("info",o):(""===o&&i(),f(o)||r("info",o))},log:function(o){o&&f(o)?c("log",o):(""===o&&i(),f(o)||r("log",o))},say:function(o,n,t){if(n&&f(n)){var e=" ",c=v.config.timeStyle+"background: ".concat(t,";");v.config.iUseLightTheme&&"color: black;",v.config.newLine||(e="\n"),console.log("%c".concat(o,"%c").concat(l,"%c").concat(e).concat(n),v.config.statusStyle+c+v.config.fontSize,c+v.config.fontSize,v.config.messageStyle+v.config.fontSize)}else i()}};function c(o,n){var t="",e=" ",c=v.config.timeStyle+"background: ".concat(v.config.status[o].lightColor,";");v.config.iUseLightTheme&&(t="color: black;"),v.config.newLine||(e="\n"),console.log("%c".concat(v.config.status[o].code,"%c").concat(l,"%c").concat(a(n),"%c").concat(e).concat(n),v.config.statusStyle+c+v.config.fontSize,c+v.config.fontSize,c+"background: ".concat(v.config.status[o].darkColor,"; ").concat(v.config.fontSize),v.config.messageStyle+v.config.fontSize+t)}function r(o,n){var t=v.config.timeStyle+"background: ".concat(v.config.status[o].lightColor,";");console.log("%c".concat(v.config.status[o].code,"%c").concat(l,"%c").concat(a(n)),v.config.statusStyle+t+v.config.fontSize,v.config.statusStyle+t+v.config.fontSize,t+"background: ".concat(v.config.status[o].darkColor,"; ").concat(v.config.fontSize)),console.log(n),console.log("%c‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾","color: ".concat(v.config.status[o].lightColor,"; padding: -5px 5px; font-weight: bolder;"))}function i(){v.log("Empty logging message")}function a(o){var n=o.length;switch(t(o)){case"string":return"string[".concat(n,"]");case"boolean":return"boolean";case"number":return"integer[".concat(n=(o+"").length,"]");case"object":return n=Object.keys(o).length,"object[".concat(n,"]");case"bigint":return"big integer[".concat(n=(o+"").length,"]");case"function":return"function";case"symbol":return"symbol";case"undefined":return"undefined";default:return"var"}}var l=function(){for(var o=new Date,n=(o.getHours()<10?"0":"")+o.getHours(),t=(o.getMinutes()<10?"0":"")+o.getMinutes(),e=(o.getSeconds()<10?"0":"")+o.getSeconds(),c=(o.getMilliseconds()<10?"0":"")+o.getMilliseconds(),r=v.config.timeNotation.split(":"),i="",a=0;a<r.length;a++){switch(r[a]){case"h":i+=n;break;case"m":i+=t;break;case"s":i+=e;break;case"ms":i+=c}a!==r.length-1&&(i+=":")}return i}();function f(o){return"object"!==t(o)&&"function"!=typeof o}}]);
//# sourceMappingURL=main.js.map