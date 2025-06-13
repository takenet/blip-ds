import { EventEmitter } from '../../../stencil-public-runtime';
import { DaysList, MonthsSlide, Options } from '../datepicker-interface';
import { languages } from '../../../utils/languages';
export type stateSlide = 'await' | 'pendding' | 'success';
export type stateSelect = 'start' | 'end';
export declare class BdsdatepickerPeriod {
    week: string[];
    months: Options[];
    years: Options[];
    monthActivated: number;
    yearActivated: number;
    animatePrev?: boolean;
    animateNext?: boolean;
    activeSelectYear?: boolean;
    openSelectMonth?: boolean;
    openSelectYear?: boolean;
    monthsSlide: MonthsSlide[];
    loadingSlide: stateSlide;
    /**
     * StartDate. Insert a limiter to select the date period.
     */
    startDate?: DaysList;
    /**
     * EndDate. Insert a limiter to select the date period.
     */
    endDate?: DaysList;
    /**
     * StartDateSelect. Insert a limiter to select the date period.
     */
    startDateSelect?: Date;
    /**
     * EndDateSelect. Insert a limiter to select the date period.
     */
    endDateSelect?: Date;
    /**
     * Language, Entered as one of the languages. Can be one of:
     * 'pt_BR', 'es_ES', 'en_US'.
     */
    language?: languages;
    /**
     * EndDateSelect. Insert a limiter to select the date period.
     */
    stateSelect?: stateSelect;
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
     * bdsStartDate. Event to return selected date value.
     */
    bdsStartDate?: EventEmitter;
    /**
     * bdsEndDate. Event to return selected end date value.
     */
    bdsEndDate?: EventEmitter;
    /**
     * bdsClickDayButton. Event to return when click on day button.
     */
    bdsClickDayButton?: EventEmitter;
    /**
     * Return the validity of the input.
     */
    clear(): Promise<void>;
    /**
     * startDateSelect. Function to output selected start date.
     */
    protected startDateSelectChanged(): void;
    /**
     * endDateSelect. Function to output selected end date.
     */
    protected endDateSelectChanged(): void;
    protected periodToSelectChanged(newValue: DaysList, _oldValue: DaysList): void;
    componentWillLoad(): void;
    componentWillRender(): void;
    /**
     * prevDays. Function to create a gap between the beginning of the grid and the first day of the month.
     */
    private prevDays;
    /**
     * selectDate. Function to select the desired date.
     */
    private selectDate;
    /**
     * prevMonth. Function to rewind the date on the calendar slide.
     */
    private prevMonth;
    /**
     * nextMonth. Function to advance the date on the calendar slide.
     */
    private nextMonth;
    /**
     * checkCurrentDay. Function to check the current day.
     */
    private checkCurrentDay;
    /**
     * checkDisableDay. Function to check the disable day.
     */
    private checkDisableDay;
    /**
     * checkSelectedDay. Function to check the selected day.
     */
    private checkSelectedDay;
    /**
     * checkPeriodDay. Function to check the period selected day.
     */
    private checkPeriodDay;
    /**
     * checkPeriodStart. Function to check the period selected start day.
     */
    private checkPeriodStart;
    /**
     * checkPeriodEnd. Function to check the period selected end day.
     */
    private checkPeriodEnd;
    /**
     * handler of select months or yaer.
     */
    private handler;
    /**
     * openDateSelect. Function to open the year or month selector.
     */
    private openDateSelect;
    renderSelectData(data: any, selected: any, ref: any): HTMLElement;
    renderCarSlideBox(days: any, firstDayWeek: any): HTMLElement;
    render(): HTMLElement;
}
