var util = require('./utils');

module.exports = new class {
    smallLoggable(loggable, type) {
        util.fire(util.logBuilder(loggable, type), util.styleBuilder(type));
    };

    bigLoggable(loggable, type) {
        var style = util.styleBuilder(type);
        console.log(
            util.logBuilder('nullObjectType', type),
            style.status,
            style.time,
            style.type
        );
        console.log(loggable);
        console.log(
            '%c                         ',
            'padding: 0 5px;font-weight: bolder; border-top: 2px solid ' + window.vividLog.config.status[type].lightColor + ';'
        );
    };

    customSmallLoggable(loggable, label, color) {
        return util.fire(util.selfLogBuilder(loggable, label), util.selfStyleBuilder(color))
    };

    customBigLoggable(loggable, label, color) {
        //TODO
    };
}