'use strict';

module.exports = {
	// Redefine onerror | TODO Node version
	takeOver: function (activate) {
		if (activate) {
			window.onerror = function (message, source, lineno, colno, error) {
				if (error) {
					// vividLog.say('All your base are belong to us.', 'VividLog', '#3490DC');
					event.preventDefault();
					event.stopImmediatePropagation();
					event.stopPropagation();
					vividLog.err(error.stack);
					return true; // Prevents any event bubbling
				}
				return false; // Resume default event
			};
			return true;
		}
		return false;
	}
};