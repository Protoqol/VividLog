var assert = require('assert');
var jsdom  = require('mocha-jsdom'); // For use of window obj in code

describe('VividLog', function () {
	jsdom({
		url: 'http://localhost'
	});

	before(function () {
		global.methods = require('../lib/methods');
		global.util    = require('../lib/utils');
		global.ENUM    = require('../lib/enums');
		global.v       = require('../lib/vividLog');

	});

	describe('vividLog.methods.takeOver()', function () {
		it('should return true when native error log has been taken over', function () {
			assert.strictEqual(methods.takeOver(true), true);
		});

		it('should return false when not explicitly stating true', function () {
			assert.strictEqual(methods.takeOver(), false);
		});
	});

	describe('vividLog.util.createTime()', function () {
		it('should return a timestamp (string)', function () {
			assert.ok(util.createTime('h:m:s'));
			assert.strictEqual(typeof util.createTime('h:m:s'), 'string');
		});
	});

	describe('vividLog.util.getType()', function () {
		it('should return a string[9] with getType(\'testValue\')', function () {
			assert.strictEqual(util.getType('testValue'), 'string[9]');
		});

		it('should return integer[3] with getType(124)', function () {
			assert.strictEqual(util.getType(124), 'integer[3]');
		});

		it('should return boolean with getType(true)', function () {
			assert.strictEqual(util.getType(true), 'boolean');
		});

		it('should return object[2] with getType({t: \'test\', s: \'stest\'})', function () {
			assert.strictEqual(util.getType({
				test: 'object',
				second: 'object'
			}), 'object[2]');
		});

		it('should return a function with getType(function)', function () {
			assert.strictEqual(util.getType(function test() {
				var testval = 'val';
			}), 'function');
		});

		it('should return undefined with getType()', function () {
			assert.strictEqual(util.getType(true), 'boolean');
		});
	});

	describe('vividLog.util.checkTypeLog', function () {
		it('should be equal to SMALL_LOGGABLE (0)', function () {
			assert.strictEqual(util.checkTypeLog('This is a small loggable'), ENUM.SMALL_LOGGABLE);
		});

		it('should be equal to BIG_LOGGABLE (1)', function () {
			assert.strictEqual(util.checkTypeLog({Type: 'This is a big loggable'}), ENUM.BIG_LOGGABLE);
		});
	});
});