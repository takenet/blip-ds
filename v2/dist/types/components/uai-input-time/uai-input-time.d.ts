import { EventEmitter } from '../../stencil-public-runtime';
import { UaiControlSize } from '../input/input-interface';
import { UaiInputTimeLanguage } from './uai-input-time-format';
export type UaiInputTimeSize = UaiControlSize;
type Column = 'hour' | 'minute';
/**
 * Time field. The person types the time of day as HH:mm (24 hours), and digits that cannot make a time are refused,
 * or picks the hour and the minutes in the panel that opens on a click; value, min, max and the submitted form value
 * are HH:mm. Use it for a time of day, such as an opening hour or a return time. Pair with uai-input-date for a date
 * and time, and with UaiButton in forms. Avoid it for durations or periods. Wrap the app in UaiThemeProvider.
 *
 * @slot input-right - Content after the picker button (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, the native input and the picker button.
 * @part input - The native text input with the time as HH:mm.
 * @part input__message - The helper, error or success message below the field.
 * @part picker-button - The button that opens and closes the time panel.
 * @part picker - The floating panel with the hour and minute columns.
 * @part picker-option - Each hour or minute in the panel.
 */
export declare class UaiInputTime {
    el: HTMLElement;
    internals: ElementInternals;
    display: string;
    validationDanger: boolean;
    disabledByForm: boolean;
    isOpen: boolean;
    activeColumn: Column;
    activeHour: number;
    activeMinute: number;
    private nativeInput?;
    private control?;
    private panel?;
    private overlay?;
    private formControl?;
    private defaultValue;
    private typing;
    private readonly inputId;
    /**
     * Name of the value in the submitted form data, which is the time as HH:mm. Without name (or inputName), the field
     * is not submitted.
     */
    name?: string;
    /**
     * Name of the value in the submitted form data. Same as name, kept from bds-input.
     */
    inputName?: string;
    /**
     * Chosen time as HH:mm, from "00:00" to "23:59". Empty while the typed time is incomplete.
     */
    value?: string | null;
    /**
     * Earliest accepted time, as HH:mm. Earlier hours and minutes are disabled in the panel.
     */
    min?: string;
    /**
     * Latest accepted time, as HH:mm. Later hours and minutes are disabled in the panel.
     */
    max?: string;
    /**
     * Interval of the minutes offered in the panel, from 1 to 30: 5 (default) offers 00, 05, 10… Typing accepts any
     * minute. Use 15 or 30 for appointments; avoid 1, which makes a long list.
     */
    minuteStep?: number;
    /**
     * Language of the default texts. Can be 'pt_BR' (default), 'en_US', 'es_ES'.
     */
    language?: UaiInputTimeLanguage;
    /**
     * Height of the field. Can be one of: 'short', 'medium' (default).
     */
    size?: UaiInputTimeSize;
    /**
     * Label shown above the field. Without it, the default text of the language is shown ("Horário").
     */
    label?: string;
    /**
     * Text shown while the field is empty. Defaults to "hh:mm".
     */
    placeholder?: string;
    /**
     * UaiIcon name shown before the time.
     */
    icon?: string;
    /**
     * If true, an empty field blocks the form submission.
     */
    required: boolean;
    /**
     * If true, the time can be selected and copied but not edited; the panel does not open and its button is hidden.
     */
    readonly: boolean;
    /**
     * If true, the field and the picker button cannot be used and the value is left out of the form data.
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
     * Message shown when the typed time is incomplete. Without it, the default text is shown.
     */
    timeErrorMessage: string;
    /**
     * Message shown when the time is before min. Without it, the default text with the min time is shown.
     */
    minErrorMessage: string;
    /**
     * Message shown when the time is after max. Without it, the default text with the max time is shown.
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
     * Emitted when the time changes, by typing, by the panel or programmatically. detail: { value } as HH:mm, or ''
     * while the typed time is incomplete.
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
     * Returns true when the time is complete, within min and max, and present when required.
     */
    isValid(): Promise<boolean>;
    /**
     * Clears the time.
     */
    clear(): Promise<void>;
    /**
     * Opens the time panel. Use for imperative control; pair with close.
     */
    open(): Promise<void>;
    /**
     * Closes the time panel.
     */
    close(): Promise<void>;
    protected inputNameChanged(): void;
    protected valueChanged(newValue: string | null): void;
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
    private get minutes();
    private get isDisabled();
    private inRange;
    private hourDisabled;
    private minuteDisabled;
    private validity;
    private showValidation;
    private setTime;
    private openPanel;
    private closePanel;
    private onOverlayClose;
    private pickHour;
    private pickMinute;
    private moveActive;
    private onInput;
    private onFocus;
    private onBlur;
    private onKeyDown;
    private onInputClick;
    private onButtonClick;
    private onControlClick;
    private optionId;
    private renderColumn;
    render(): any;
}
export {};
