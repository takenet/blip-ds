import { EventEmitter } from '../../stencil-public-runtime';
/**
 * Checkbox for selecting any combination of options. Use a visible label, and use indeterminate only to
 * represent a parent selection whose children are partially selected. Wrap the app in UaiThemeProvider.
 *
 * @part label - The label and control layout.
 * @part control - The native checkbox input.
 * @part indicator - The visual checkbox and selection mark.
 */
export declare class UaiCheckbox {
    el: HTMLElement;
    internals: ElementInternals;
    disabledByForm: boolean;
    invalid: boolean;
    private nativeInput?;
    private formControl?;
    private defaultChecked;
    private defaultIndeterminate;
    private readonly generatedId;
    /**
     * ID applied to the native checkbox. Kept for compatibility with bds-checkbox.
     */
    refer?: string;
    /**
     * Visible label for the checkbox. Use aria-label when no visible label is appropriate.
     */
    label?: string;
    /**
     * Control size. Use standard by default; pair with equally sized selection controls.
     * Avoid changing label typography to compensate for the control size.
     */
    size: 'short' | 'standard' | 'tall';
    /**
     * Name used in submitted form data. Without a name, the checkbox is not submitted.
     */
    name?: string;
    /**
     * If true, the checkbox is selected.
     */
    checked: boolean;
    /**
     * If true, the checkbox represents a partially selected set of child options.
     */
    indeterminate: boolean;
    /**
     * Value submitted when the checkbox is selected.
     */
    value: string;
    /**
     * If true, an unchecked checkbox blocks form submission.
     */
    required: boolean;
    /**
     * Message announced when required validation fails. Defaults to the browser's localized message.
     */
    requiredErrorMessage?: string;
    /**
     * If true, the user cannot interact with the checkbox.
     */
    disabled: boolean;
    /**
     * Accessible name used when no visible label is provided.
     */
    ariaLabel: string;
    /**
     * Value of the data-test attribute on the native checkbox.
     */
    dataTest?: string;
    /**
     * Emitted on a user-initiated change. detail: { checked, indeterminate }.
     */
    uaiChange: EventEmitter<{
        checked: boolean;
        indeterminate: boolean;
    }>;
    /**
     * @deprecated This event was never emitted by bds-checkbox. Listen to uaiChange instead.
     */
    uaiInput: EventEmitter<KeyboardEvent>;
    /**
     * Returns the native checkbox input.
     */
    getInputElement(): Promise<HTMLInputElement>;
    /**
     * Returns whether the checkbox is selected.
     */
    getValue(): Promise<boolean>;
    /**
     * Toggles the checkbox. When indeterminate, the next state is checked.
     */
    toggle(): Promise<void>;
    protected checkedChanged(): void;
    protected indeterminateChanged(): void;
    protected valueChanged(): void;
    protected requiredChanged(): void;
    protected disabledChanged(): void;
    protected onInvalid(): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    formStateRestoreCallback(state: string | null): void;
    private get effectiveDisabled();
    private get inputId();
    private syncNativeState;
    private syncFormValue;
    private syncValidity;
    private setFromUser;
    private onChange;
    private onKeyDown;
    render(): any;
}
