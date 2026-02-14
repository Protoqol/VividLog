export class Methods {
    static takeOver(turnOn: boolean): boolean {
        if (turnOn) {
            window.onerror = (message, source, lineno, colno, error) => {
                if (error) {
                    // Assuming vividLog is available globally or via import
                    // Since it's often used in the browser, we use the global window.vividLog
                    window.vividLog?.err(error.stack);
                    return true; // Prevents any event bubbling
                }
                return false; // Resume default event
            };
            return true;
        }
        window.vividLog?.style("font-style: italic;")
              .say("f v.takeOver() was called but was not turned on. Do so by using v.takeOver(true)", "VividLog", "#E3342F");

        return false;
    }
}
