import * as assert from "assert";
import {Utils} from "../lib/utils";
import {LogSize} from "../lib/enums";
import vividLog from "../lib/vividLog";

describe("Vivid Log | Testing Suite", function () {
    let v: any;
    let ENUM: typeof LogSize;

    before(function () {
        v = vividLog;
        ENUM = LogSize;
    });

    describe("vividLog.methods.takeOver()", function () {
        it("should return true when native error log has been taken over", function () {
            assert.strictEqual(v.takeOver(true), undefined);
        });
    });

    describe("vividLog.util.createTime()", function () {
        it("should return a timestamp (string)", function () {
            assert.ok(Utils.createTime("h:m:s"));
            assert.strictEqual(typeof Utils.createTime("h:m:s"), "string");
        });
    });

    describe("vividLog.util.getType()", function () {
        it("should return a string[9] with getType('testValue')", function () {
            assert.strictEqual(Utils.getType("testValue"), "string[9]");
        });

        it("should return integer[3] with getType(124)", function () {
            assert.strictEqual(Utils.getType(124), "integer[3]");
        });

        it("should return boolean with getType(true)", function () {
            assert.strictEqual(Utils.getType(true), "boolean");
        });

        it("should return object[2] with getType({t: 'test', s: 'stest'})", function () {
            assert.strictEqual(Utils.getType({
                test  : "object",
                second: "object",
            }), "object[2]");
        });

        it("should return array[3] with getType([1, 2, 3])", function () {
            assert.strictEqual(Utils.getType([1, 2, 3]), "array[3]");
        });

        it("should return null with getType(null)", function () {
            assert.strictEqual(Utils.getType(null), "null");
        });

        it("should return error with getType(new Error())", function () {
            assert.strictEqual(Utils.getType(new Error("test")), "error");
        });

        it("should return a function with getType(function)", function () {
            assert.strictEqual(Utils.getType(function test() {
                var testval = "val";
            }), "function");
        });

        it("should return undefined with getType()", function () {
            assert.strictEqual(Utils.getType(true), "boolean");
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
            v.log({a: 1, b: 2});
            v.err(new Error("Test Error Object"));
        });
    });
});
