var assert = require('assert');
var jsdom = require('mocha-jsdom'); // For use of window obj in code

describe('VividLog', function () {
    jsdom({
        url: "http://localhost"
    });

    before(function () {
        global.methods = require('../lib/methods');
        global.util = require('../lib/utils');

    });

    describe('vividLog.methods.takeOver()', function () {
        it('should return true when native error log has been taken over', function () {
            assert.strictEqual(methods.takeOver(true), true);
        });

        it('should return false when not explicitly stating true', function () {
            assert.strictEqual(methods.takeOver(), false);
        })
    });

    describe('vividLog.util.createTime()', function () {
        it('should return a timestamp (string)', function () {
            assert.ok(util.createTime('h:m:s'));
            assert.strictEqual(typeof util.createTime('h:m:s'), 'string');
        });
    });

    describe('vividLog.util.typeHint()', function () {
        it('should return a string[9] with typeHint(\'testValue\')', function () {
            assert.strictEqual(util.typeHint('testValue'), 'string[9]');
        });

        it('should return integer[3] with typeHint(124)', function () {
            assert.strictEqual(util.typeHint(124), 'integer[3]');
        });

        it('should return boolean with typeHint(true)', function () {
            assert.strictEqual(util.typeHint(true), 'boolean');
        });

        it('should return object[2] with typeHint({t: \'test\', s: \'stest\'})', function () {
            assert.strictEqual(util.typeHint({
                test: 'object',
                second: 'object'
            }), 'object[2]');
        });

        it('should return a function with typeHint(function)', function () {
            function test() {
                let testval = 'val';
            }
            assert.strictEqual(util.typeHint(test), 'function');
        });

        it('should return undefined with typeHint()', function () {
            assert.strictEqual(util.typeHint(true), 'boolean');
        });
    })
});