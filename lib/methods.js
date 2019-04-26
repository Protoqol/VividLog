'use strict';

module.exports = {
	/**
	 * Redefines on error event
	 *
	 * @param activate
	 * @returns {boolean}
	 */
	takeOver: function (activate) {
		if (activate) {
			window.onerror = function () {
				console.log(arguments);
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
		v.style('font-style: italic;')
		 .say('f v.takeOver() was called but was not turned on. Do so by using v.takeOver(true)', 'VividLog', '#E3342F');
		return false;
	}
};