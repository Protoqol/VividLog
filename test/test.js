var assert = require('assert');
var jsdom = require('mocha-jsdom')

describe('VividLog', function () {
    jsdom({
        url: "http://localhost"
    });

    describe('vividLog.takeOver()', function () {
        before(function () {
            global.v = require('../lib/methods');
        });

        it('should return true when native error log has been taken over', function () {
            assert.strictEqual(v.takeOver(true), true);
        });
        it('should return false when not explicitly stating true', function () {
            assert.strictEqual(v.takeOver(), false);
        })
    });
});