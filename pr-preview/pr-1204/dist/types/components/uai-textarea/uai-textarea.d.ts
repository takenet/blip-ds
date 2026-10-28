import { EventEmitter } from '../../stencil-public-runtime';
import { InputAutocapitalize, InputAutoComplete, InputCounterLengthRules, UaiControlSize } from '../input/input-interface';
/**
 * Multiline text field. Use it for longer free text with an optional label, helper, error or success message.
 * Pair with UaiInput for single-line values in the same form. Avoid it for selecting from a list.
 * Wrap the app in UaiThemeProvider.
 *
 * @slot input-left - Content before the text, inside the field border.
 * @slot inside-input-left - Content before the editable text.
 * @slot input-right - Content after the editable text. Give actions an accessible name.
 * @part input-container - The field box with border, adornments and the native textarea.
 * @part input - The native textarea element.
 * @part input__message - The helper, error or success message below the field.
 */
export declare class UaiTextarea {
    el: HTMLElement;
    internals: ElementInternals;
    validationDanger: boolean;
    validationText: string;
    disabledByForm: boolean;
    private nativeTextarea?;
    private formControl?;
    private defaultValue;
    private readonly id;
    private resizeTimer?;
    private resizeObserver?;
    private observedWidth?;
    private hasExplicitName;
    private aliasName?;
    /**
     * Name of the value in submitted form data. Without name or inputName, the field is not submitted.
     */
    name?: string;
    /**
     * Name of the value in submitted form data, kept from bds-input.
     */
    inputName?: string;
    /**
     * Label shown above the field. Without a visible label, set aria-label.
     */
    label?: string;
    /**
     * Example of the expected text, shown while the field is empty. Do not use it as the label.
     */
    placeholder?: string;
    /**
     * Automatic capitalization on virtual keyboards.
     */
    autoCapitalize?: InputAutocapitalize;
    /**
     * Browser autofill hint.
     */
    autoComplete?: InputAutoComplete;
    /**
     * Largest number of characters. Typing stops at the limit.
     */
    maxlength?: number;
    /**
     * Smallest number of characters. Checked on blur and form submission.
     */
    minlength?: number;
    /**
     * If true, the value can be selected and copied but not edited.
     */
    readonly: boolean;
    /**
     * If true, an empty field blocks form submission.
     */
    required: boolean;
    /**
     * Regular expression the value must match. Checked on blur and form submission.
     */
    pattern?: string;
    /**
     * Message below the field that helps to fill it.
     */
    helperMessage?: string;
    /**
     * Message shown while danger is true.
     */
    errorMessage?: string;
    /**
     * Message shown while success is true.
     */
    successMessage?: string;
    /**
     * UaiIcon name shown before the text.
     */
    icon?: string;
    /**
     * Minimum control height. Short defaults to one row; medium defaults to three. Explicit rows takes precedence.
     */
    size: UaiControlSize;
    /**
     * If true, the field cannot be edited or submitted.
     */
    disabled?: boolean;
    /**
     * If true, shows the error state and errorMessage. Has priority over success.
     */
    danger?: boolean;
    /**
     * If true, shows the success state and successMessage.
     */
    success?: boolean;
    /**
     * Current multiline text.
     */
    value?: string | null;
    /**
     * If true, shows the number of characters typed and maxlength.
     */
    counterLength?: boolean;
    /**
     * Ranges of remaining characters that color the counter.
     */
    counterLengthRule?: InputCounterLengthRules;
    /**
     * If true, Enter clears the field after uaiSubmit and cancels the newline.
     */
    isSubmit: boolean;
    /**
     * Initial visible line count. The browser's native row sizing supplies the default height.
     */
    rows?: number;
    /**
     * Number of columns. Zero leaves the width fluid.
     */
    cols: number;
    /**
     * If true, the field grows with its content.
     */
    autoResize: boolean;
    /**
     * If true and autoResize is false, the user can resize the field vertically.
     */
    resizable: boolean;
    /**
     * Optional minimum height in CSS pixels. Omit to use the native height derived from rows.
     */
    minHeight?: number;
    /**
     * Optional maximum height in CSS pixels. Omit for unbounded automatic growth.
     */
    maxHeight?: number;
    /**
     * Optional debounce interval in milliseconds for automatic height measurement.
     */
    debounceDelay?: number;
    /**
     * Message shown when a required field is empty. Without it, the browser message is shown.
     */
    requiredErrorMessage: string;
    /**
     * Message shown when the text is shorter than minlength.
     */
    minlengthErrorMessage: string;
    /**
     * Message shown when pattern does not match.
     */
    patternErrorMessage?: string;
    /**
     * If true, uaiChange emits HTML-special characters escaped.
     */
    encode?: boolean;
    /**
     * Accessible name when there is no visible label.
     */
    ariaLabel: string;
    /**
     * Data test id, set on the native textarea.
     */
    dataTest?: string;
    /**
     * @deprecated The textarea is inherently multiline. This prop has no effect.
     */
    isTextarea?: boolean;
    /**
     * @deprecated Use the native body/base icon size. This prop has no effect.
     */
    iconSize?: 'small' | 'medium';
    /**
     * @deprecated Textareas do not support numeric input constraints. This prop has no effect.
     */
    min?: string;
    /**
     * @deprecated Textareas do not support numeric input constraints. This prop has no effect.
     */
    max?: string;
    /**
     * @deprecated Textareas do not have a type. This prop has no effect.
     */
    type?: string;
    /**
     * @deprecated Use uai-input-chips for tokenized values. This prop has no effect.
     */
    chips?: boolean;
    /**
     * @deprecated Textarea has no native e-mail validation. This prop has no effect.
     */
    emailErrorMessage?: string;
    /**
     * @deprecated Textarea has no native number validation. This prop has no effect.
     */
    numberErrorMessage?: string;
    /**
     * Emitted when the value changes, by typing or programmatically. detail: { value }.
     */
    uaiChange: EventEmitter<{
        value: string;
    }>;
    /**
     * Emitted on every keystroke with the native InputEvent.
     */
    uaiInput: EventEmitter<InputEvent>;
    /**
     * Emitted when the field loses focus.
     */
    uaiOnBlur: EventEmitter<void>;
    /**
     * Emitted when the field gains focus.
     */
    uaiFocus: EventEmitter<void>;
    /**
     * Emitted on Enter. detail: { event, value }. The native newline is retained unless isSubmit is true.
     */
    uaiSubmit: EventEmitter<{
        event: KeyboardEvent;
        value: string;
    }>;
    /**
     * Emitted when a field with pattern loses focus. detail: true if the value matches.
     */
    uaiPatternValidation: EventEmitter<boolean>;
    /**
     * Emitted on Backspace or Delete. detail: { event, value }.
     */
    uaiKeyDownBackspace: EventEmitter<{
        event: KeyboardEvent;
        value: string;
    }>;
    /**
     * Moves focus to the textarea.
     */
    setFocus(): Promise<void>;
    private get sizeValue();
    private get rowsValue();
    /**
     * Removes focus from the textarea.
     */
    removeFocus(): Promise<void>;
    /**
     * Returns the native textarea element.
     */
    getInputElement(): Promise<HTMLTextAreaElement>;
    /**
     * Checks native and pattern validity.
     */
    isValid(): Promise<boolean>;
    /**
     * Clears the textarea value.
     */
    clear(): Promise<void>;
    protected nameChanged(newValue: string): void;
    protected inputNameChanged(newValue: string, oldValue: string): void;
    protected valueChanged(newValue: string | null): void;
    protected resizeConfigurationChanged(): void;
    protected onInvalid(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    connectedCallback(): void;
    private observeSize;
    componentDidRender(): void;
    disconnectedCallback(): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    formStateRestoreCallback(state: string | null): void;
    private syncInputName;
    private warnLegacyUsage;
    private validateResizeConfiguration;
    private patternIsValid;
    private messageFor;
    private syncValidity;
    private showValidation;
    private onInput;
    private onBlur;
    private onFocus;
    private onKeyDown;
    private scheduleResize;
    private onWindowResize;
    private resizeToContent;
    private counterState;
    render(): any;
    private onControlClick;
}
