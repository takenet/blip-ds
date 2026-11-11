import { EventEmitter } from '../../stencil-public-runtime';
import { InputAutocapitalize, InputAutoComplete, UaiControlSize } from '../input/input-interface';
export type UaiPasswordStrengthLevel = 'none' | 'low' | 'medium' | 'high';
/**
 * Password field with native form support, an accessible visibility toggle and an optional consumer-provided
 * strength indicator. The indicator never evaluates the password or guarantees security. Wrap the app in
 * UaiThemeProvider.
 *
 * @slot input-left - Content before the password text, inside the field border.
 * @slot inside-input-left - Content right before the password text.
 * @slot input-right - Content after the password text. Give actions an accessible name.
 * @part input-container - The field box with border, adornments, input and visibility button.
 * @part input - The native password input.
 * @part input__message - The helper, error or success message below the field.
 */
export declare class UaiInputPassword {
    el: HTMLElement;
    internals: ElementInternals;
    validationDanger: boolean;
    validationText: string;
    disabledByForm: boolean;
    private nativeInput?;
    private formControl?;
    private defaultValue;
    private hasExplicitName;
    private aliasName?;
    private readonly inputId;
    /**
     * Name of the value in submitted form data. Without name or inputName, the field is not submitted.
     */
    name?: string;
    /**
     * Name of the value in submitted form data, kept from bds-input-password.
     */
    inputName?: string;
    /**
     * Controls whether the password is revealed. The visibility button updates this property.
     */
    openEyes: boolean;
    /**
     * Height of the field. Can be 'short' or 'medium' (default).
     */
    size: UaiControlSize;
    /**
     * Label shown above the field. Without a visible label, set aria-label.
     */
    label?: string;
    /**
     * Example of the expected text, shown while the field is empty. Do not use it as the label.
     */
    placeholder?: string;
    /**
     * Largest accepted number. Kept for compatibility; password inputs do not enforce numeric bounds.
     */
    max?: string;
    /**
     * Largest number of characters. Typing stops at the limit.
     */
    maxlength?: number;
    /**
     * Smallest accepted number. Kept for compatibility; password inputs do not enforce numeric bounds.
     */
    min?: string;
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
     * If true, shows the error state and errorMessage. Has priority over success.
     */
    danger?: boolean;
    /**
     * If true, shows the success state and successMessage.
     */
    success?: boolean;
    /**
     * UaiIcon name shown before the password.
     */
    icon?: string;
    /**
     * If true, the field cannot be focused or edited and is left out of the form data.
     */
    disabled?: boolean;
    /**
     * Automatic capitalization on virtual keyboards.
     */
    autoCapitalize?: InputAutocapitalize;
    /**
     * Browser autofill hint while the password is revealed. While masked, autocomplete is current-password.
     */
    autoComplete?: InputAutoComplete;
    /**
     * Current password. It is not reflected to an attribute.
     */
    value?: string | null;
    /**
     * Message shown when a required field is empty. Without it, the browser message is shown.
     */
    requiredErrorMessage?: string;
    /**
     * Message shown when the password is shorter than minlength.
     */
    minlengthErrorMessage?: string;
    /**
     * Accessible name when there is no visible label.
     */
    ariaLabel: string;
    /**
     * Data test id, set on the native input.
     */
    dataTest?: string;
    /**
     * If true, shows the visual strength indicator. The level remains consumer-provided.
     */
    showStrength: boolean;
    /**
     * Consumer-provided visual level. This component does not evaluate the password.
     */
    strengthLevel: UaiPasswordStrengthLevel;
    /**
     * Emitted when the value changes, by typing or programmatically. detail: { value }.
     */
    uaiInputPasswordChange: EventEmitter<{
        value: string | null;
    }>;
    /**
     * Emitted on every keystroke with the native InputEvent.
     */
    uaiInputPasswordInput: EventEmitter<InputEvent>;
    /**
     * Emitted when the field loses focus.
     */
    uaiInputPasswordBlur: EventEmitter<void>;
    /**
     * Emitted when the field receives focus.
     */
    uaiInputPasswordFocus: EventEmitter<void>;
    /**
     * Emitted on Enter. detail: { event, value }.
     */
    uaiInputPasswordSubmit: EventEmitter<{
        event: KeyboardEvent;
        value: string | null;
    }>;
    /**
     * Emitted on Backspace or Delete. detail: { event, value }.
     */
    uaiKeyDownBackspace: EventEmitter<{
        event: KeyboardEvent;
        value: string | null;
    }>;
    /**
     * Moves focus to the password field.
     */
    setFocus(): Promise<void>;
    /**
     * Removes focus from the password field.
     */
    removeFocus(): Promise<void>;
    /**
     * Returns the native input element.
     */
    getInputElement(): Promise<HTMLInputElement>;
    /**
     * Checks the native required and character-length constraints.
     */
    isValid(): Promise<boolean>;
    /**
     * Clears the password.
     */
    clear(): Promise<void>;
    protected nameChanged(newValue?: string): void;
    protected inputNameChanged(newValue?: string, oldValue?: string): void;
    protected valueChanged(newValue: string | null): void;
    protected onInvalid(): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    formStateRestoreCallback(state: string | null): void;
    private syncInputName;
    private warnForAccessibleName;
    private get sizeValue();
    private get strengthLevelValue();
    private get strengthValue();
    private get strengthLabel();
    private get autocompleteValue();
    private messageFor;
    private syncValidity;
    private showValidation;
    private onInput;
    private onBlur;
    private onFocus;
    private onKeyDown;
    private onVisibilityClick;
    private onControlClick;
    render(): any;
}
