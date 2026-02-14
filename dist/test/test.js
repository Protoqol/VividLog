"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __importStar(require("assert"));
const utils_1 = require("../lib/utils");
const enums_1 = require("../lib/enums");
const vividLog_1 = __importDefault(require("../lib/vividLog"));
describe("Vivid Log | Testing Suite", function () {
    let v;
    let ENUM;
    before(function () {
        v = vividLog_1.default;
        ENUM = enums_1.LogSize;
    });
    describe("vividLog.methods.takeOver()", function () {
        it("should return true when native error log has been taken over", function () {
            assert.strictEqual(v.takeOver(true), undefined);
        });
    });
    describe("vividLog.util.createTime()", function () {
        it("should return a timestamp (string)", function () {
            assert.ok(utils_1.Utils.createTime("h:m:s"));
            assert.strictEqual(typeof utils_1.Utils.createTime("h:m:s"), "string");
        });
    });
    describe("vividLog.util.getType()", function () {
        it("should return a string[9] with getType('testValue')", function () {
            assert.strictEqual(utils_1.Utils.getType("testValue"), "string[9]");
        });
        it("should return integer[3] with getType(124)", function () {
            assert.strictEqual(utils_1.Utils.getType(124), "integer[3]");
        });
        it("should return boolean with getType(true)", function () {
            assert.strictEqual(utils_1.Utils.getType(true), "boolean");
        });
        it("should return object[2] with getType({t: 'test', s: 'stest'})", function () {
            assert.strictEqual(utils_1.Utils.getType({
                test: "object",
                second: "object",
            }), "object[2]");
        });
        it("should return array[3] with getType([1, 2, 3])", function () {
            assert.strictEqual(utils_1.Utils.getType([1, 2, 3]), "array[3]");
        });
        it("should return null with getType(null)", function () {
            assert.strictEqual(utils_1.Utils.getType(null), "null");
        });
        it("should return error with getType(new Error())", function () {
            assert.strictEqual(utils_1.Utils.getType(new Error("test")), "error");
        });
        it("should return a function with getType(function)", function () {
            assert.strictEqual(utils_1.Utils.getType(function test() {
                var testval = "val";
            }), "function");
        });
        it("should return undefined with getType()", function () {
            assert.strictEqual(utils_1.Utils.getType(true), "boolean");
        });
    });
    describe("Terminal logging", function () {
        it("should log to terminal without crashing", function () {
            v.log("Test terminal log");
            v.done("Test success");
            v.warn("Test warning");
            v.err("Test error");
            v.info("Test info");
            v.debug("Test debug");
            v.say("Test say", "CUSTOM", "#ff00ff");
            v.fireLabel("TEST LABEL");
        });
        it("should log complex objects to terminal without crashing", function () {
            v.log({ a: 1, b: 2 });
            v.err(new Error("Test Error Object"));
        });
    });
});
//# sourceMappingURL=test.js.map