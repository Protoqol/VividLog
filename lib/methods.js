"use strict"

module.exports = {
    takeOver: (activate) => {
        window.vividLog.say('All your base are belong to us.', 'VividLog', '#3490DC');
        if (activate) {
            window.onerror = function (message, source, lineno, colno, error) {
                event.preventDefault();
                event.stopImmediatePropagation();
                event.stopPropagation();

                if (error) {
                    window.vividLog.err(error.stack);
                }

                return true;
            };
        }
    },
}