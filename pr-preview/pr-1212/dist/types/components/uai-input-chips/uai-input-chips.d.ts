import { EventEmitter } from '../../stencil-public-runtime';
import { UaiControlSize } from '../input/input-interface';
export type UaiInputChipsType = 'text' | 'email';
export type UaiInputChipsLanguage = 'pt_BR' | 'en_US' | 'es_ES';
export type UaiInputChipsSize = UaiControlSize;
export interface UaiInputChipsChange {
    data: string[];
    value: string;
}
/**
 * Field that turns free text into removable chips. The person types a value and presses Enter, or separates values
 * with comma or semicolon; Backspace on the empty field removes the last chip. It takes part in native forms: with a
 * name, each chip is submitted as one entry (read them with FormData.getAll). Use it for several open values, such as
 * e-mails or tags. Pair with UaiButton in forms. Avoid it to choose from known options (use uai-select-chips or
 * uai-autocomplete). Wrap the app in UaiThemeProvider.
 *
 * @slot input-right - Content after the chips and the text (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, chips and the native input.
 * @part chips - The list of chips.
 * @part chip - Each chip.
 * @part chip-remove - The remove button of each chip.
 * @part input - The native input where new values are typed.
 * @part input__message - The helper, error or success message below the field.
 */
export declare class UaiInputChips {
    el: HTMLElement;
    internals: ElementInternals;
    internalChips: string[];
    validationDanger: boolean;
    disabledByForm: boolean;
    private nativeInput?;
    private formControl?;
    private defaultChips;
    private focusInputAfterRender;
    private reachedLimit;
    private readonly id;
    /**
     * Values shown as chips. Accepts an array or a JSON array string, for example '["ana@blip.ai", "bia@blip.ai"]'.
     */
    chips: string[] | string;
    /**
     * Text being typed, before it becomes a chip.
     */
    value?: string | null;
    /**
     * Characters that split the text into several chips. Default: comma and semicolon (/,|;/).
     */
    delimiters?: RegExp;
    /**
     * If true, repeated values are accepted. If false (default), a value equal to an existing chip, ignoring case, is
     * ignored.
     */
    duplicated?: boolean;
    /**
     * If true, leaving the field turns the typed text into a chip.
     */
    blurCreation: boolean;
    /**
     * Kind of value. Can be one of: 'text' (default), 'email'. With 'email', chips that are not e-mails are marked as
     * errors and the field is invalid.
     */
    type: UaiInputChipsType;
    /**
     * Name of the values in the submitted form data; each chip is one entry. Without name (or inputName), the field is
     * not submitted.
     */
    name?: string;
    /**
     * Name of the values in the submitted form data. Same as name, kept from bds-input-chips.
     */
    inputName?: string;
    /**
     * Label shown above the field. Without a visible label, set aria-label.
     */
    label?: string;
    /**
     * Example of a value, shown while the text is empty. Do not use it as the label.
     */
    placeholder?: string;
    /**
     * Minimum height of the field, which grows with the chips. Can be one of: 'short', 'medium' (default).
     */
    size?: UaiInputChipsSize;
    /**
     * Language of the default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'.
     */
    language?: UaiInputChipsLanguage;
    /**
     * UaiIcon name shown before the chips.
     */
    icon?: string;
    /**
     * If true, the field without chips blocks the form submission.
     */
    required: boolean;
    /**
     * If true, the chips are shown without remove buttons and no value can be typed.
     */
    readonly: boolean;
    /**
     * If true, the field cannot be used and the chips are left out of the form data.
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
     * Message shown when type is 'email' and a chip is not an e-mail. Without it, the default text is shown.
     */
    emailErrorMessage: string;
    /**
     * Message shown when a required field has no chips. Without it, the default text is shown.
     */
    requiredErrorMessage: string;
    /**
     * Largest number of characters of each chip.
     */
    maxlength?: number;
    /**
     * Largest number of chips. When it is reached, the text input is hidden.
     */
    maxChipsLength?: number;
    /**
     * If true, shows the number of chips and maxChipsLength.
     */
    counterLength?: boolean;
    /**
     * Accessible name of the field when there is no visible label.
     */
    ariaLabel: string;
    /**
     * Data test id, set on the native input.
     */
    dataTest?: string;
    /**
     * Data test id, set on the remove button of each chip.
     */
    dtButtonClose?: string;
    /**
     * @deprecated The field grows with the chips. Has no effect.
     */
    height?: string;
    /**
     * @deprecated The field grows with the chips. Has no effect.
     */
    maxHeight?: string;
    /**
     * @deprecated Has no effect.
     */
    disableSubmit?: boolean;
    /**
     * Emitted when chips are added or removed. detail: { data (all chips), value (last chip) }.
     */
    uaiChange: EventEmitter<UaiInputChipsChange>;
    /**
     * Emitted when chips are added or removed. Same as uaiChange, kept from bds-input-chips.
     */
    uaiChangeChips: EventEmitter<UaiInputChipsChange>;
    /**
     * Emitted when the text input receives focus.
     */
    uaiInputChipsFocus: EventEmitter<void>;
    /**
     * Emitted when the text input loses focus. detail: all chips.
     */
    uaiBlur: EventEmitter<string[]>;
    /**
     * Emitted on every keystroke with the native InputEvent.
     */
    uaiInputChipsInput: EventEmitter<InputEvent>;
    /**
     * Emitted when maxChipsLength is reached. detail: { value: true }.
     */
    uaiExtendedQuantityInput: EventEmitter<{
        value: boolean;
    }>;
    /**
     * Emitted when the text input loses focus with chips. detail: { value (all chips) }.
     */
    uaiSubmit: EventEmitter<{
        value: string[];
    }>;
    /**
     * Returns true when the chips are valid for the type and, if required, there is at least one.
     */
    isValid(): Promise<boolean>;
    /**
     * Returns the chips.
     */
    get(): Promise<string[]>;
    /**
     * Removes all chips and the typed text.
     */
    clear(): Promise<void>;
    /**
     * Adds chips from the given text, or from the typed text when no value is given.
     */
    add(value?: string): Promise<void>;
    /**
     * Moves the focus to the text input.
     */
    setFocus(): Promise<void>;
    /**
     * Removes the focus from the text input.
     */
    removeFocus(): Promise<void>;
    protected chipsChanged(): void;
    protected internalChipsChanged(): void;
    protected nameChanged(): void;
    protected legacyPropChanged(_value: unknown, _old: unknown, prop: string): void;
    protected onInvalid(): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    formStateRestoreCallback(state: string | null): void;
    private get texts();
    private get sizeValue();
    private get isDisabled();
    private formValue;
    private syncFormValue;
    private isAtLimit;
    private checkLimit;
    private isInvalidChip;
    private validity;
    private showValidation;
    private emitChange;
    private addFromText;
    private commitText;
    private removeChip;
    private onInput;
    private onKeyDown;
    private onFocus;
    private onBlur;
    private onControlClick;
    private renderChip;
    render(): any;
}
