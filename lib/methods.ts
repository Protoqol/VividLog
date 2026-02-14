export class Methods {
    static takeOver(turnOn: boolean): boolean {
        if (turnOn) {
            if (typeof window !== "undefined") {
                window.onerror = (_message, _source, _lineno, _colno, error) => {
                    if (error) {
                        window.vividLog?.err(error.stack);
                        return true;
                    }

                    return false;
                };
            } else if (typeof process !== "undefined") {
                process.on("uncaughtException", (error) => {
                    const vividLog = (global as any).vividLog;
                    if (vividLog) {
                        vividLog.err(error.stack);
                    } else {
                        console.error(error);
                    }
                });
            }
            return true;
        }

        const vividLog = (typeof window !== "undefined") ? window.vividLog : (global as any).vividLog;

        vividLog?.style("font-style: italic;").say("f v.takeOver() was called but was not turned on. Do so by using v.takeOver(true)", "VividLog", "#E3342F");

        return false;
    }
}
