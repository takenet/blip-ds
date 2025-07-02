import { EventEmitter } from '../../stencil-public-runtime';
import { languages } from '../../utils/languages';
import { BannerVariant } from '../banner/banner';
export type typeDate = 'single' | 'period';
export type stateSelect = 'start' | 'end';
export type DropdownPostionType = 'auto' | 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-right' | 'bottom-left' | 'right-center' | 'right-top' | 'right-bottom' | 'left-center' | 'left-top' | 'left-bottom';
export declare class DatePicker {
    private menuElement?;
    private inputSetDate?;
    private inputSetEndDate?;
    private datepickerPeriod?;
    private datepickerSingle?;
    element: HTMLElement;
    open?: boolean;
    stateSelect?: stateSelect;
    dateSelected?: Date;
    endDateSelected?: Date;
    errorMsgDate?: string;
    errorMsgEndDate?: string;
    intoView?: HTMLElement;
    scrollingTop?: number;
    valueDate?: string;
    valueEndDate?: string;
    /**
     * TypeOfDate. Select type of date.
     */
    typeOfDate?: typeDate;
    /**
     * StartDateLimit. Insert a limiter to select the date period.
     */
    startDateLimit?: string;
    /**
     * EndDateLimit. Insert a limiter to select the date period.
     */
    endDateLimit?: string;
    /**
     *  label in input, with he the input size increases.
     */
    label?: string;
    /**
     * Message. Select type of date.
     */
    message?: string;
    /**
     * Message. Select type of date.
     */
    variantBanner?: BannerVariant;
    /**
     * Language, Entered as one of the languages. Can be one of:
     * 'pt_BR', 'es_ES', 'en_US'.
     */
    language?: languages;
    /**
     * Disabled input.
     */
    disabled?: boolean;
    /**
     * Default value input.
     */
    valueDateSelected?: string;
    /**
     * Default value input.
     */
    valueEndDateSelected?: string;
    /**
     * Used to set drop position
     */
    positionOptions?: DropdownPostionType;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtInputStart is the data-test to input start.
     */
    dtInputStart?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtInputEnd is the data-test to input end.
     */
    dtInputEnd?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtOutzone is the data-test to outzone.
     */
    dtOutzone?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonPrev is the data-test to button prev.
     */
    dtButtonPrev?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonNext is the data-test to button next.
     */
    dtButtonNext?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtSelectMonth is the data-test to select month.
     */
    dtSelectMonth?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtSelectYear is the data-test to select year.
     */
    dtSelectYear?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonClear is the data-test to button clear.
     */
    dtButtonClear?: string;
    /**
     * Data test is the prop to specifically test the component action object.
     * dtButtonConfirm is the data-test to button confirm.
     */
    dtButtonConfirm?: string;
    /**
     * bdsStartDate. Event to return selected date value.
     */
    bdsStartDate?: EventEmitter;
    /**
     * bdsStartDate. Event to return selected end date value.
     */
    bdsEndDate?: EventEmitter;
    /**
     * bdsStartDate. Event to return selected end date value.
     */
    concludeDatepicker?: EventEmitter;
    /**
     * emptyConcludeDatepicker. Event to emit when the datepicker is concluded without any date selected.
     */
    emptyConcludeDatepicker?: EventEmitter;
    componentWillLoad(): void;
    componentDidLoad(): void;
    valueDateSelectedChanged(): void;
    valueEndDateSelectedChanged(): void;
    /**
     * startDateLimit validation.
     */
    startDateLimitChanged(): void;
    /**
     * endDateLimit validation.
     */
    endDateLimitChanged(): void;
    dateSelectedChanged(): void;
    private setDefaultPlacement;
    private validatePositionDrop;
    private centerDropElement;
    private refMenuElement;
    private refInputSetDate;
    private refInputSetEndDate;
    private refDatepickerPeriod;
    private refDatepickerSingle;
    /**
     * whenClickCalendar. Function to output selected date.
     */
    private whenClickCalendar;
    /**
     * selectDate. Function to output selected date.
     */
    private selectDate;
    /**
     * selectEndDate. Function to issue selected end date..
     */
    private selectEndDate;
    /**
     * clearDatepicker. Function to clear datepicker
     */
    private clearDate;
    private onInputDateSelected;
    /**
     * validationDateSelected. Function to validate date field
     */
    private validationDateSelected;
    private onInputEndDateSelected;
    /**
     * maskEndDateSelected. Function to add mask to the end date field
     */
    private validationEndDateSelected;
    private openDatepicker;
    private clickConcludeDatepicker;
    private onFocusDateSelect;
    private onFocusEndDateSelect;
    render(): any;
}
