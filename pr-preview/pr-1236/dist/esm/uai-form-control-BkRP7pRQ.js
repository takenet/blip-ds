/**
 * Internal form-association base (w0-primitivas-internas) for UAI controls. Wraps ElementInternals so every control
 * submits its value under its `name`, restores the default on form reset, reports validity and follows a disabled
 * fieldset the same way. The component declares `formAssociated: true`, attaches the internals with
 * `@AttachInternals()` and forwards the form callbacks:
 *
 *   formResetCallback() { this.formControl.reset(); }
 *   formDisabledCallback(disabled: boolean) { this.formControl.setDisabled(disabled); }
 *
 * Without a `name` attribute the control takes part in validation and reset but is left out of the submitted data,
 * as with native inputs.
 */
const isEmpty = (value) => value === null || value === '';
class UaiFormControl {
    constructor(options) {
        this.current = null;
        this.disabledByForm = false;
        this.options = options;
        this.setValue(options.defaultValue());
    }
    get value() {
        return this.current;
    }
    get form() {
        return this.options.internals.form;
    }
    /** True when an ancestor fieldset or form disables the control. */
    get disabled() {
        return this.disabledByForm;
    }
    get validity() {
        return this.options.internals.validity;
    }
    get validationMessage() {
        return this.options.internals.validationMessage;
    }
    /** Sets the submitted value. `null` submits nothing. */
    setValue(value, state = value) {
        this.current = value;
        this.options.internals.setFormValue(value, state);
    }
    /**
     * Marks the control valid, or invalid with the given flags. The message is shown by the browser on
     * `reportValidity()`; pass the element that should receive focus as the anchor.
     */
    setValidity(flags = {}, message = '', anchor) {
        const invalid = Object.values(flags).some(Boolean);
        if (invalid)
            this.options.internals.setValidity(flags, message, anchor);
        else
            this.options.internals.setValidity({});
    }
    /** Shortcut for the `required` rule: invalid (valueMissing) while required and empty. */
    validateRequired(required, message, anchor) {
        this.setValidity({ valueMissing: required && isEmpty(this.current) }, message, anchor);
    }
    checkValidity() {
        return this.options.internals.checkValidity();
    }
    reportValidity() {
        return this.options.internals.reportValidity();
    }
    reset() {
        const value = this.options.defaultValue();
        this.setValue(value);
        this.options.onReset(value);
    }
    setDisabled(disabled) {
        var _a, _b;
        this.disabledByForm = disabled;
        (_b = (_a = this.options).onDisabledChange) === null || _b === void 0 ? void 0 : _b.call(_a, disabled);
    }
}

export { UaiFormControl as U };
