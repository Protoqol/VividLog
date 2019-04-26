var assert = require('assert');
var jsdom = require('mocha-jsdom'); // For use of window obj in code

describe('VividLog', function () {
    jsdom({
        url: "http://localhost"
    });

    describe('vividLog.methods.takeOver()', function () {
        before(function () {
            global.methods = require('../lib/methods');
        });

        it('should return true when native error log has been taken over', function () {
            assert.strictEqual(methods.takeOver(true), true);
        });
        it('should return false when not explicitly stating true', function () {
            assert.strictEqual(methods.takeOver(), false);
        })
    });

    describe('vividLog.util.createTime()', function () {
        before(function () {
            global.util = require('../lib/utils');
        })

        it('should return a timestamp (string)', function () {
            assert.ok(util.createTime('h:m:s'));
            assert.strictEqual(typeof util.createTime('h:m:s'), 'string');
        });
    });
});