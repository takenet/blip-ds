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
export type UaiFormValue = string | File | FormData | null;
export interface UaiFormControlOptions {
    internals: ElementInternals;
    /** Value restored by a form reset: usually the initial `value` prop. */
    defaultValue: () => UaiFormValue;
    /** Applies a reset value to the component state. */
    onReset: (value: UaiFormValue) => void;
    /** Called when the control or an ancestor fieldset is disabled or enabled. */
    onDisabledChange?: (disabled: boolean) => void;
}
export declare class UaiFormControl {
    private readonly options;
    private current;
    private disabledByForm;
    constructor(options: UaiFormControlOptions);
    get value(): UaiFormValue;
    get form(): HTMLFormElement;
    /** True when an ancestor fieldset or form disables the control. */
    get disabled(): boolean;
    get validity(): ValidityState;
    get validationMessage(): string;
    /** Sets the submitted value. `null` submits nothing. */
    setValue(value: UaiFormValue, state?: UaiFormValue): void;
    /**
     * Marks the control valid, or invalid with the given flags. The message is shown by the browser on
     * `reportValidity()`; pass the element that should receive focus as the anchor.
     */
    setValidity(flags?: ValidityStateFlags, message?: string, anchor?: HTMLElement): void;
    /** Shortcut for the `required` rule: invalid (valueMissing) while required and empty. */
    validateRequired(required: boolean, message: string, anchor?: HTMLElement): void;
    checkValidity(): boolean;
    reportValidity(): boolean;
    reset(): void;
    setDisabled(disabled: boolean): void;
}
