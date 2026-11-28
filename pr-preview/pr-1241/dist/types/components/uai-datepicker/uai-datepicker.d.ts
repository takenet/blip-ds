import { EventEmitter } from '../../stencil-public-runtime';
import { UaiControlSize } from '../input/input-interface';
import { UaiCalendarView } from '../../utils/uai-calendar';
import { UaiDatepickerBannerVariant, UaiDatepickerConclude, UaiDatepickerLanguage, UaiDatepickerPosition, UaiDatepickerType } from './uai-datepicker-interface';
export type UaiDatepickerSize = UaiControlSize;
type Edge = 'start' | 'end';
/**
 * Field to choose a date or a period in the UAI calendar. With typeOfDate "single" (default) the panel shows a month
 * and a date field; with "period" it shows two months side by side with the "Starts" and "Ends" fields, fills the days
 * between them and previews the period under the pointer. The choice is a draft until Apply; Reset clears it and
 * closing without applying discards it. Dates are ISO YYYY-MM-DD. Use it for filters and reports over a period, or
 * when the choice should be confirmed. Pair with a visible label. Avoid it for a single date typed in a form (use
 * uai-input-date). Wrap the app in UaiThemeProvider.
 *
 * @part input-container - The field that shows the chosen date or period and opens the panel.
 * @part input__message - The helper or error message below the field.
 * @part panel - The floating panel with the calendars, the date fields and the buttons.
 * @part calendar-arrow - The previous and next buttons of a calendar header.
 * @part calendar-picker - The month and year buttons of a calendar header.
 * @part calendar-day - Each day button of the calendars.
 * @part calendar-option - Each month or year in their pickers.
 * @part date-input - The date fields inside the panel.
 * @part message - The message shown inside the panel.
 */
export declare class UaiDatepicker {
    el: HTMLElement;
    internals: ElementInternals;
    isOpen: boolean;
    view: UaiCalendarView;
    /** The month on the left (or the only month), as an ISO date on its first day. */
    shownMonth: string;
    /** The day with the focus in the grids. */
    focusedDate: string;
    firstYear: number;
    slide: 'next' | 'previous' | 'view' | null;
    /** The draft: what the person chooses before applying. */
    draftStart: string | null;
    draftEnd: string | null;
    /** What the date fields of the panel show while being typed. */
    typed: Record<Edge, string | null>;
    hovered: string | null;
    disabledByForm: boolean;
    private trigger?;
    private panel?;
    private overlay?;
    private formControl?;
    private focusGrid;
    private readonly baseId;
    /** Name of the value in the submitted form data: the date, or the start and the end of the period. */
    name?: string;
    /** One date or a period. Can be one of: 'single' (default), 'period'. */
    typeOfDate?: UaiDatepickerType;
    /**
     * Earliest date that can be chosen, as ISO YYYY-MM-DD. The legacy DD/MM/YYYY still works, with a warning.
     * Earlier days are disabled.
     */
    startDateLimit?: string;
    /**
     * Latest date that can be chosen, as ISO YYYY-MM-DD. The legacy DD/MM/YYYY still works, with a warning. Later days
     * are disabled.
     */
    endDateLimit?: string;
    /** Label shown above the field. Without it, the default text of the language is shown ("Data"). */
    label?: string;
    /** Text shown in the field while nothing is chosen. Defaults to the browser's regional date format. */
    placeholder?: string;
    /** Message shown inside the panel, above the buttons, such as a rule about the period. */
    message?: string;
    /** Tone of the message inside the panel. Can be one of: 'system', 'info', 'success', 'warning' (default), 'error'. */
    variantBanner?: UaiDatepickerBannerVariant;
    /** Language of the texts and of the calendar. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'. */
    language?: UaiDatepickerLanguage;
    /** If true, the field cannot be used and is left out of the form data. */
    disabled?: boolean;
    /** Chosen date, or the start of the period, as ISO YYYY-MM-DD (the legacy DD/MM/YYYY still works, with a warning). */
    valueDateSelected?: string;
    /** End of the period, as ISO YYYY-MM-DD (the legacy DD/MM/YYYY still works, with a warning). */
    valueEndDateSelected?: string;
    /**
     * Side and alignment of the panel. Can be 'auto' (default) or a side and an edge such as 'bottom-left',
     * 'bottom-right', 'top-left', 'top-right'. 'top-center' and 'bottom-center' keep only the side; the right and
     * left sides of the legacy fall back to 'auto'.
     */
    positionOptions?: UaiDatepickerPosition | string;
    /** Height of the field. Can be one of: 'short', 'medium' (default). */
    size?: UaiDatepickerSize;
    /** Message below the field that helps to fill it. */
    helperMessage?: string;
    /** If true, shows the error state and errorMessage. */
    danger?: boolean;
    /** Message below the field while danger is true. */
    errorMessage?: string;
    /** Accessible name of the field when the visible label is not enough. */
    ariaLabel: string;
    /** Data test id of the start date field of the panel (or the only one). */
    dtInputStart?: string;
    /** Data test id of the end date field of the panel. */
    dtInputEnd?: string;
    /** Data test id of the field that opens the panel. Kept from bds-datepicker, where it was the outside area. */
    dtOutzone?: string;
    /** Data test id of the previous month button. */
    dtButtonPrev?: string;
    /** Data test id of the next month button. */
    dtButtonNext?: string;
    /** Data test id of the month button. */
    dtSelectMonth?: string;
    /** Data test id of the year button. */
    dtSelectYear?: string;
    /** Data test id of the Reset button. */
    dtButtonClear?: string;
    /** Data test id of the Apply button. */
    dtButtonConfirm?: string;
    /** Emitted when the start date of the draft changes (or the date, with "single"). detail: { value } as ISO or null. */
    uaiStartDate: EventEmitter<{
        value: string | null;
    }>;
    /** Emitted when the end date of the draft changes. detail: { value } as ISO or null. */
    uaiEndDate: EventEmitter<{
        value: string | null;
    }>;
    /** Emitted on Apply with a choice. detail: { startDate, endDate? } as ISO. */
    uaiConcludeDatepicker: EventEmitter<UaiDatepickerConclude>;
    /** Emitted on Apply with nothing chosen. */
    uaiEmptyConcludeDatepicker: EventEmitter<void>;
    /** Opens the panel. */
    open(): Promise<void>;
    /** Closes the panel, discarding the draft. */
    close(): Promise<void>;
    /** Clears the chosen date or period. */
    clear(): Promise<void>;
    protected valueChanged(): void;
    protected positionChanged(): void;
    protected onFocusOut(event: FocusEvent): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    private iso;
    private get startValue();
    private get endValue();
    private get min();
    private get max();
    private get isPeriod();
    private get languageValue();
    private get sizeValue();
    private get placement();
    private get isDisabled();
    private formValue;
    private syncFormValue;
    private resetDraft;
    private openPanel;
    private closePanel;
    private onOverlayClose;
    private firstOfMonth;
    private get monthsShown();
    private showMonthOf;
    private turn;
    private pick;
    private setDraft;
    private get canApply();
    private apply;
    private reset;
    private rangeOf;
    private onDayKeyDown;
    private onView;
    private pickMonth;
    private pickYear;
    private onTyped;
    private fieldText;
    private fieldInvalid;
    private renderField;
    private renderMonth;
    private renderBody;
    private renderPanel;
    render(): any;
}
export {};
