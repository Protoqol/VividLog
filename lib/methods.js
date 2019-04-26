"use strict"

var v = require('./vividLog')

module.exports = {
    // Redefine onerror | TODO Node version
    takeOver: activate => {
        if (activate) {
            window.onerror = function (message, source, lineno, colno, error) {
                if (error) {
                    window.vividLog.say('All your base are belong to us.', 'VividLog', '#3490DC');
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    window.vividLog.err(error.stack); // Might not be available
                    return true; // Prevents any event bubbling
                }
                return false; // Resume default event
            };
            return true;
        }
        return false;
    }
}