'use strict';

module.exports = {
	/**
	 * Redefines on error event
	 *
	 * @returns {boolean}
	 * @param turnOn
	 */
	takeOver: function (turnOn) {
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
		vividLog.style('font-style: italic;')
		        .say('f v.takeOver() was called but was not turned on. Do so by using v.takeOver(true)', 'VividLog', '#E3342F');

		return false;
	}
};