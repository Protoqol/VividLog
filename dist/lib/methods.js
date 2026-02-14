"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Methods = void 0;
class Methods {
    static takeOver(turnOn) {
        if (turnOn) {
            if (typeof window !== "undefined") {
                window.onerror = (_message, _source, _lineno, _colno, error) => {
                    if (error) {
                        window.vividLog?.err(error.stack);
                        return true;
                    }
                    return false;
                };
            }
            else if (typeof process !== "undefined") {
                process.on("uncaughtException", (error) => {
                    const vividLog = global.vividLog;
                    if (vividLog) {
                        vividLog.err(error.stack);
                    }
                    else {
                        console.error(error);
                    }
                });
            }
            return true;
        }
        const vividLog = (typeof window !== "undefined") ? window.vividLog : global.vividLog;
        vividLog?.style("font-style: italic;").say("f v.takeOver() was called but was not turned on. Do so by using v.takeOver(true)", "VividLog", "#E3342F");
        return false;
    }
}
exports.Methods = Methods;
//# sourceMappingURL=methods.js.map