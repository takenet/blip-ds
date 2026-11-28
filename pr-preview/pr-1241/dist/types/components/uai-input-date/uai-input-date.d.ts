import { EventEmitter } from '../../stencil-public-runtime';
import { UaiControlSize } from '../input/input-interface';
import { UaiCalendarView } from '../../utils/uai-calendar';
import { UaiInputDateLanguage } from './uai-input-date-format';
export type UaiInputDateSize = UaiControlSize;
/**
 * Date field. The person types the date in the browser's regional format or picks it in the UAI calendar that opens
 * on a click; value, min, max and the submitted form value are ISO YYYY-MM-DD. Use it for a single known date, such
 * as a birth or due date. Pair with uai-input-time for a date and time, and with UaiButton in forms. Avoid it for
 * periods (use uai-datepicker) or times (use uai-input-time). Wrap the app in UaiThemeProvider.
 *
 * @slot input-right - Content after the calendar button (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, the native input and the calendar button.
 * @part input - The native text input with the date in the browser's regional format.
 * @part input__message - The helper, error or success message below the field.
 * @part calendar-button - The button that opens and closes the calendar.
 * @part calendar - The floating calendar panel.
 * @part calendar-arrow - The previous and next buttons of the calendar header.
 * @part calendar-picker - The month and year buttons of the calendar header.
 * @part calendar-day - Each day button of the calendar.
 * @part calendar-option - Each month or year in their pickers.
 */
export declare class UaiInputDate {
    el: HTMLElement;
    internals: ElementInternals;
    display: string;
    validationDanger: boolean;
    disabledByForm: boolean;
    isOpen: boolean;
    view: UaiCalendarView;
    /** The day with the focus in the calendar grid; its month is the month shown. */
    focusedDate: string;
    firstYear: number;
    /** Where the next month or page of years comes from, for the slide animation. */
    slide: 'next' | 'previous' | 'view' | null;
    private nativeInput?;
    private control?;
    private panel?;
    private overlay?;
    /** Moves the focus into the grid on the next render (opened by the keyboard or the calendar button). */
    private focusGrid;
    private formControl?;
    private defaultValue;
    private typing;
    private readonly inputId;
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
     * Language of the default texts, not the date format. Can be 'pt_BR' (default), 'en_US', 'es_ES'.
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
     * Text shown while the field is empty. Defaults to the browser's regional date format, such as "DD/MM/YYYY".
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
    /**
     * Opens the calendar. Use for imperative control; pair with close.
     */
    open(): Promise<void>;
    /**
     * Closes the calendar.
     */
    close(): Promise<void>;
    protected inputNameChanged(): void;
    protected valueChanged(newValue: string | null): void;
    protected onInvalid(): void;
    protected onFocusOut(event: FocusEvent): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
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
    private get isDisabled();
    private get viewYear();
    private get viewMonth();
    private openCalendar;
    private forceFocus;
    private closeCalendar;
    private onOverlayClose;
    private pickDate;
    private moveFocus;
    private onDayKeyDown;
    private showMonth;
    private moveTo;
    private changeView;
    private onView;
    private onPickMonth;
    private onPickYear;
    private onPrevious;
    private onNext;
    private onInputClick;
    private onButtonClick;
    private renderCalendar;
    private onControlClick;
    render(): any;
}
