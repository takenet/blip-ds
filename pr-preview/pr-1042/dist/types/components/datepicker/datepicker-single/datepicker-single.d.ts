import { EventEmitter } from '../../../stencil-public-runtime';
import { DaysList, MonthsSlide, Options } from '../datepicker-interface';
import { languages } from '../../../utils/languages';
export type stateSlide = 'await' | 'pendding' | 'success';
export declare class BdsdatepickerSingle {
    week: string[];
    months: Options[];
    years: Options[];
    monthActivated: number;
    yearActivated: number;
    animatePrev?: boolean;
    animateNext?: boolean;
    openSelectMonth?: boolean;
    openSelectYear?: boolean;
    monthsSlide: MonthsSlide[];
    loadingSlide: stateSlide;
    /**
     * EndDate. Insert a limiter to select the date period.
     */
    endDate?: DaysList;
    /**
     * StartDate. Insert a limiter to select the date period.
     */
    startDate?: DaysList;
    /**
     * dateSelect. Insert a limiter to select the date period.
     */
    dateSelect?: Date;
    /**
     * Language, Entered as one of the languages. Can be one of:
     * 'pt_BR', 'es_ES', 'en_US'.
     */
    language?: languages;
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
     * bdsDateSelected. Event to return selected date value.
     */
    bdsDateSelected?: EventEmitter;
    /**
     * Return the validity of the input.
     */
    clear(): Promise<void>;
    protected periodToSelectChanged(newValue: DaysList, _oldValue: DaysList): void;
    /**
     * DateSelect. Function to output selected start date.
     */
    protected startDateSelectChanged(): void;
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
