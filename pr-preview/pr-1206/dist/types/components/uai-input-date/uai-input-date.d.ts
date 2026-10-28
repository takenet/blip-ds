import { EventEmitter } from '../../stencil-public-runtime';
import { UaiControlSize } from '../input/input-interface';
import { UaiInputDateLanguage } from './uai-input-date-format';
export type UaiInputDateSize = UaiControlSize;
/**
 * Date field. The person types the date in the format of the language (dd/mm/aaaa in pt_BR and es_ES, mm/dd/yyyy in
 * en_US) or picks it in the browser calendar; value, min, max and the submitted form value are ISO YYYY-MM-DD. Use it
 * for a single known date, such as a birth or due date. Pair with UaiButton in forms. Avoid it for periods, presets or
 * times (use uai-datepicker when available). Wrap the app in UaiThemeProvider.
 *
 * @slot input-right - Content after the calendar button (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, the native input and the calendar button.
 * @part input - The native text input with the date in the format of the language.
 * @part input__message - The helper, error or success message below the field.
 * @part calendar-button - The button that opens the browser calendar.
 */
export declare class UaiInputDate {
    el: HTMLElement;
    internals: ElementInternals;
    display: string;
    validationDanger: boolean;
    disabledByForm: boolean;
    private nativeInput?;
    private picker?;
    private formControl?;
    private defaultValue;
    private typing;
    private readonly id;
    /**
     * Name of the value in the submitted form data, which is the ISO date. Without name (or inputName), the field is not
     * submitted.
     */
    name?: string;
    /**
     * Name of the value in the submitted form data. Same as name, kept from bds-input.
     */
    inputName?: string;
    /**
     * Selected date as ISO YYYY-MM-DD, for example "2026-12-25". Empty while the typed date is incomplete or invalid.
     */
    value?: string | null;
    /**
     * Earliest accepted date, as ISO YYYY-MM-DD.
     */
    min?: string;
    /**
     * Latest accepted date, as ISO YYYY-MM-DD.
     */
    max?: string;
    /**
     * Language of the date format and default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'.
     */
    language?: UaiInputDateLanguage;
    /**
     * Height of the field. Can be one of: 'short', 'medium' (default).
     */
    size?: UaiInputDateSize;
    /**
     * Label shown above the field. Without it, the default text of the language is shown ("Data").
     */
    label?: string;
    /**
     * Text shown while the field is empty. Without it, the date format of the language is shown ("dd/mm/aaaa").
     */
    placeholder?: string;
    /**
     * UaiIcon name shown before the date.
     */
    icon?: string;
    /**
     * If true, an empty field blocks the form submission.
     */
    required: boolean;
    /**
     * If true, the date can be selected and copied but not edited, and the calendar button is hidden.
     */
    readonly: boolean;
    /**
     * If true, the field and the calendar button cannot be used and the value is left out of the form data.
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
     * Message shown when a required field is empty. Without it, the default text of the language is shown.
     */
    requiredErrorMessage: string;
    /**
     * Message shown when the typed date is incomplete or does not exist. Without it, the default text is shown.
     */
    dateErrorMessage: string;
    /**
     * Message shown when the date is before min. Without it, the default text with the min date is shown.
     */
    minErrorMessage: string;
    /**
     * Message shown when the date is after max. Without it, the default text with the max date is shown.
     */
    maxErrorMessage: string;
    /**
     * Accessible name of the field when the visible label is not enough.
     */
    ariaLabel: string;
    /**
     * Data test id, set on the native input.
     */
    dataTest?: string;
    /**
     * Emitted when the date changes, by typing, by the calendar or programmatically. detail: { value } as ISO
     * YYYY-MM-DD, or '' while the typed date is incomplete or invalid.
     */
    uaiChange: EventEmitter<{
        value: string;
    }>;
    /**
     * Emitted on every keystroke with the native InputEvent.
     */
    uaiInput: EventEmitter<InputEvent>;
    /**
     * Emitted when the field receives focus.
     */
    uaiFocus: EventEmitter<void>;
    /**
     * Emitted when the field loses focus.
     */
    uaiOnBlur: EventEmitter<void>;
    /**
     * Moves the focus to the field.
     */
    setFocus(): Promise<void>;
    /**
     * Removes the focus from the field.
     */
    removeFocus(): Promise<void>;
    /**
     * Returns true when the date is complete, exists, is within min and max, and is present when required.
     */
    isValid(): Promise<boolean>;
    /**
     * Clears the date.
     */
    clear(): Promise<void>;
    protected inputNameChanged(): void;
    protected valueChanged(newValue: string | null): void;
    protected languageChanged(): void;
    protected onInvalid(): void;
    componentWillLoad(): void;
    componentDidRender(): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    formStateRestoreCallback(state: string | null): void;
    private get languageValue();
    private get sizeValue();
    private validity;
    private showValidation;
    private onInput;
    private onFocus;
    private onBlur;
    private onKeyDown;
    private openCalendar;
    private onPick;
    private onControlClick;
    render(): any;
}
