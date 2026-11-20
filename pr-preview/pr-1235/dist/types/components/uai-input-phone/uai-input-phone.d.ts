import { EventEmitter } from '../../stencil-public-runtime';
import { UaiControlSize } from '../input/input-interface';
export type UaiInputPhoneLanguage = 'pt_BR' | 'en_US' | 'es_ES';
export type UaiInputPhoneSize = UaiControlSize;
export interface UaiPhoneNumberChange {
    value: string | null;
    code: string | null;
    isoCode: string | null;
    country: string | null;
}
/**
 * Phone number field with a country code selector. Use it to ask for a phone number when the country matters:
 * the person picks the country (flag and dial code) and types the number freely, without mask or automatic
 * formatting. It takes part in native forms: give it a name to submit "<code> <number>" (for example
 * "+55 11 99999-0000"). Pair with UaiButton in forms. Avoid it for numbers without a country, or to infer the
 * country from the number. Wrap the app in UaiThemeProvider.
 *
 * @slot input-right - Content after the number (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, country selector and the native input.
 * @part input - The native tel input.
 * @part input__message - The helper, error or success message below the field.
 * @part country-button - The country selector button (flag, dial code and arrow).
 * @part country-list - The floating list of countries.
 * @part country-option - Each country in the list.
 */
export declare class UaiInputPhone {
    el: HTMLElement;
    internals: ElementInternals;
    isOpen: boolean;
    activeIndex: number;
    selectedCountry: string;
    isoCode: string;
    validationDanger: boolean;
    disabledByForm: boolean;
    private nativeInput?;
    private button?;
    private list?;
    private overlay?;
    private formControl?;
    private defaults;
    private readonly inputId;
    /**
     * Name of the value in the submitted form data, which is "<code> <number>". Without name (or inputName), the field
     * is not submitted.
     */
    name?: string;
    /**
     * Name of the value in the submitted form data. Same as name.
     */
    inputName?: string;
    /**
     * Phone number typed by the person, without the country code. Free text: no mask or formatting is applied.
     */
    text?: string;
    /**
     * Dial code of the selected country, for example "+55" (default) or "+1". Use changeCountry to pick a country that
     * shares its code with others.
     */
    value?: string | null;
    /**
     * Language of the country names and default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'.
     */
    language?: UaiInputPhoneLanguage;
    /**
     * Height of the field. Can be one of: 'short', 'medium' (default).
     */
    size?: UaiInputPhoneSize;
    /**
     * Label shown above the field. Without it, the default text of the language is shown ("Telefone").
     */
    label?: string;
    /**
     * Example of the expected number, shown while the field is empty, for example "11 99999-0000". Do not use it as
     * the label.
     */
    placeholder?: string;
    /**
     * UaiIcon name shown before the country selector.
     */
    icon?: string;
    /**
     * If true, an empty number blocks the form submission.
     */
    required: boolean;
    /**
     * If true, the number can be selected and copied but not edited, and the country cannot be changed.
     */
    readonly: boolean;
    /**
     * If true, the field and the country selector cannot be used and the value is left out of the form data.
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
     * Message below the field that helps to fill it, for example the expected format.
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
     * Message shown when a required field is empty. Without it, the default text of the language is shown.
     */
    requiredErrorMessage: string;
    /**
     * Message shown when the number has characters other than digits, spaces and + - ( ) . Without it, the default
     * text of the language is shown.
     */
    numberErrorMessage: string;
    /**
     * Accessible name of the field when the visible label is not enough.
     */
    ariaLabel: string;
    /**
     * Data test id, set on the native input.
     */
    dataTest?: string;
    /**
     * Data test id, set on the country selector button.
     */
    dtSelectFlag?: string;
    /**
     * @deprecated The country list comes from the language. Has no effect.
     */
    options?: Array<unknown>;
    /**
     * Emitted when the number or the country changes. detail: { value (number), code, isoCode, country (flag key) }.
     */
    uaiPhoneNumberChange: EventEmitter<UaiPhoneNumberChange>;
    /**
     * Emitted on every keystroke in the number with the native InputEvent.
     */
    uaiInput: EventEmitter<InputEvent>;
    /**
     * Emitted when the country list closes without a new choice (Escape or click outside).
     */
    uaiCancel: EventEmitter<void>;
    /**
     * Emitted when the number receives focus.
     */
    uaiFocus: EventEmitter<void>;
    /**
     * Emitted when the number loses focus.
     */
    uaiBlur: EventEmitter<void>;
    /**
     * Selects a country. code is the dial code ("+1"), isoCode the ISO text ("US / USA") and flag the country key
     * ("united-states-flag").
     */
    changeCountry(code: string, isoCode: string, flag: string): Promise<void>;
    /**
     * Removes the focus from the field.
     */
    removeFocus(): Promise<void>;
    /**
     * Moves the focus to the number.
     */
    setFocus(): Promise<void>;
    /**
     * Returns true when the number meets required and has only digits, spaces and + - ( ) .
     */
    isValid(): Promise<boolean>;
    /**
     * Clears the number. The country stays selected.
     */
    clear(): Promise<void>;
    protected inputNameChanged(): void;
    protected textChanged(): void;
    protected codeChanged(): void;
    protected languageChanged(): void;
    protected optionsChanged(): void;
    protected onInvalid(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    formStateRestoreCallback(state: string | null): void;
    private get languageValue();
    private get sizeValue();
    private get countries();
    private get countryKeys();
    private get texts();
    private get isDisabled();
    private get canPick();
    private resolveCountry;
    private formValue;
    private syncFormValue;
    private emitChange;
    private warnLegacyUsage;
    private validityFlags;
    private syncValidity;
    private showValidation;
    private activeOption;
    private openList;
    private closeList;
    private onOverlayClose;
    private select;
    private moveActive;
    private typeAhead;
    private onButtonClick;
    private onButtonKeyDown;
    private onListKeyDown;
    private onInput;
    private onFocus;
    private onBlur;
    private onKeyDown;
    private onControlClick;
    private renderFlag;
    private renderOptions;
    render(): any;
}
