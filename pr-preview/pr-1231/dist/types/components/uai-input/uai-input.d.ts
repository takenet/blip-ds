import { EventEmitter } from '../../stencil-public-runtime';
import { InputAutocapitalize, InputAutoComplete, InputCounterLengthRules, UaiControlSize } from '../input/input-interface';
export type UaiInputType = 'text' | 'email' | 'number' | 'search';
export type UaiInputLegacyType = 'password' | 'phonenumber' | 'date';
export type UaiInputSize = UaiControlSize;
/**
 * Text field. Use it for short free text, e-mail, numbers and search, with an optional label above and a helper,
 * error or success message below. It takes part in native forms: give it a name to submit its value.
 * Pair with UaiButton in forms. Avoid it for multiline text (use uai-textarea) or for choosing from a list.
 * Wrap the app in UaiThemeProvider.
 *
 * @slot input-left - Content before the text, inside the field border (for example a prefix tag).
 * @slot inside-input-left - Content right before the typed text (for example a currency symbol).
 * @slot input-right - Content after the text (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, adornments and the native input.
 * @part input - The native input element.
 * @part input__message - The helper, error or success message below the field.
 */
export declare class UaiInput {
    el: HTMLElement;
    internals: ElementInternals;
    validationDanger: boolean;
    validationText: string;
    disabledByForm: boolean;
    private nativeInput?;
    private formControl?;
    private defaultValue;
    /**
     * Not `id`: that is the native element property, and in the custom elements build the component class is the
     * element, so assigning it in the constructor writes an `id` attribute and `document.createElement` throws.
     */
    private readonly inputId;
    /**
     * Name of the value in the submitted form data. Without name (or inputName), the field is not submitted.
     */
    name?: string;
    /**
     * Name of the value in the submitted form data. Same as name, kept from bds-input.
     */
    inputName?: string;
    /**
     * Kind of text. Can be one of: 'text' (default), 'email', 'number', 'search'.
     * 'password', 'phonenumber' and 'date' still work but are deprecated: use the specialized UAI inputs.
     */
    type?: UaiInputType | UaiInputLegacyType;
    /**
     * Height of the field. Can be one of: 'short', 'medium' (default).
     */
    size?: UaiInputSize;
    /**
     * Label shown above the field. Without a visible label, set aria-label.
     */
    label?: string;
    /**
     * Example of the expected text, shown while the field is empty. Do not use it as the label.
     */
    placeholder?: string;
    /**
     * Automatic capitalization on virtual keyboards. Can be one of: 'off' (default), 'none', 'words', 'on', 'sentences', 'characters'.
     */
    autoCapitalize?: InputAutocapitalize;
    /**
     * Browser autofill hint. Can be one of: 'off' (default), 'on', 'current-password', 'new-password', 'username'.
     */
    autoComplete?: InputAutoComplete;
    /**
     * Largest accepted value for type "number".
     */
    max?: string;
    /**
     * Largest number of characters. Typing stops at the limit.
     */
    maxlength?: number;
    /**
     * Smallest accepted value for type "number".
     */
    min?: string;
    /**
     * Smallest number of characters. Checked when the field loses focus and on submit.
     */
    minlength?: number;
    /**
     * If true, the value can be selected and copied but not edited. It looks like the default state.
     */
    readonly: boolean;
    /**
     * If true, an empty field blocks the form submission.
     */
    required: boolean;
    /**
     * Regular expression the value must match. Checked when the field loses focus and on submit.
     */
    pattern?: string;
    /**
     * Message below the field that helps to fill it.
     */
    helperMessage?: string;
    /**
     * Message below the field while danger is true.
     */
    errorMessage?: string;
    /**
     * Message below the field while success is true.
     */
    successMessage?: string;
    /**
     * UaiIcon name shown before the text, for example "search".
     */
    icon?: string;
    /**
     * If true, the field cannot be focused or edited and is left out of the form data.
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
     * Current text of the field.
     */
    value?: string | null;
    /**
     * If true, shows the number of characters typed and maxlength.
     */
    counterLength?: boolean;
    /**
     * Ranges of remaining characters that color the counter: warning (feedback/warning) and delete (feedback/error).
     */
    counterLengthRule?: InputCounterLengthRules;
    /**
     * If true, Enter clears the field after emitting uaiSubmit and does not submit the form (for chat-like fields).
     */
    isSubmit: boolean;
    /**
     * Message shown when a required field is empty. Without it, the browser message is shown.
     */
    requiredErrorMessage: string;
    /**
     * Message shown when the text is shorter than minlength. Without it, the browser message is shown.
     */
    minlengthErrorMessage: string;
    /**
     * Message shown when the number is smaller than min. Without it, the browser message is shown.
     */
    minErrorMessage: string;
    /**
     * Message shown when the number is larger than max. Without it, the browser message is shown.
     */
    maxErrorMessage: string;
    /**
     * Message shown when an e-mail is invalid. Without it, the browser message is shown.
     */
    emailErrorMessage: string;
    /**
     * Message shown when a number is invalid. Without it, the browser message is shown.
     */
    numberErrorMessage: string;
    /**
     * If true, uaiChange emits the value with HTML special characters escaped.
     */
    encode?: boolean;
    /**
     * Accessible name of the field when there is no visible label.
     */
    ariaLabel: string;
    /**
     * Data test id, set on the native input.
     */
    dataTest?: string;
    /**
     * @deprecated Use uai-textarea for multiline text. Has no effect.
     */
    isTextarea?: boolean;
    /**
     * @deprecated Use uai-textarea. Has no effect.
     */
    rows?: number;
    /**
     * @deprecated Use uai-textarea. Has no effect.
     */
    cols?: number;
    /**
     * @deprecated Use uai-textarea. Has no effect.
     */
    autoResize?: boolean;
    /**
     * @deprecated Use uai-textarea. Has no effect.
     */
    resizable?: boolean;
    /**
     * @deprecated Use uai-textarea. Has no effect.
     */
    minHeight?: number;
    /**
     * @deprecated Use uai-textarea. Has no effect.
     */
    maxHeight?: number;
    /**
     * @deprecated Use uai-input-chips. Has no effect.
     */
    chips?: boolean;
    /**
     * @deprecated The icon size follows the field. Has no effect.
     */
    iconSize?: 'small' | 'medium';
    /**
     * @deprecated Has no effect.
     */
    debounceDelay?: number;
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
     * Emitted when the field receives focus.
     */
    uaiFocus: EventEmitter<void>;
    /**
     * Emitted on Enter. detail: { event, value }. Inside a form, call detail.event.preventDefault() to stop the submission.
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
     * Moves the focus to the field.
     */
    setFocus(): Promise<void>;
    /**
     * Removes the focus from the field.
     */
    removeFocus(): Promise<void>;
    /**
     * Returns the native input element.
     */
    getInputElement(): Promise<HTMLInputElement>;
    /**
     * Returns true when the value meets required, minlength, maxlength, min, max, pattern and type.
     */
    isValid(): Promise<boolean>;
    /**
     * Clears the value.
     */
    clear(): Promise<void>;
    protected inputNameChanged(): void;
    protected valueChanged(newValue: string | null): void;
    protected onInvalid(): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    formStateRestoreCallback(state: string | null): void;
    private warnLegacyUsage;
    private get nativeType();
    private get sizeValue();
    private messageFor;
    private syncValidity;
    private showValidation;
    private onInput;
    private onBlur;
    private onFocus;
    private onKeyDown;
    private onControlClick;
    private counterState;
    render(): any;
}
