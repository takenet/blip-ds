import { Component, h, State, Prop, EventEmitter, Event, Method, Watch } from '@stencil/core';
import {
  THIS_DAY,
  weekDays,
  defaultStartDate,
  defaultEndDate,
  changeMonths,
  getMonthsSlide,
  getYears,
  getMonths,
  fillDayList,
  fillDate,
  dateToDayList,
} from '../../../utils/calendar';
import { DaysList, MonthsSlide, Options } from '../datepicker-interface';
import { languages } from '../../../utils/languages';

export type stateSlide = 'await' | 'pendding' | 'success';
export type stateSelect = 'start' | 'end';
@Component({
  tag: 'bds-datepicker-period',
  styleUrl: '../datepicker.scss',
  shadow: true,
})
export class BdsdatepickerPeriod {
  @State() week: string[];
  @State() months: Options[];
  @State() years: Options[];
  @State() monthActivated: number = this.startDateSelect ? this.startDateSelect.getMonth() : THIS_DAY.getMonth();
  @State() yearActivated: number = this.startDateSelect ? this.startDateSelect.getFullYear() : THIS_DAY.getFullYear();
  @State() animatePrev?: boolean = false;
  @State() animateNext?: boolean = false;
  @State() activeSelectYear?: boolean = false;
  @State() openSelectMonth?: boolean = false;
  @State() openSelectYear?: boolean = false;
  @State() monthsSlide: MonthsSlide[];
  @State() loadingSlide: stateSlide = 'await';
  /**
   * StartDate. Insert a limiter to select the date period.
   */
  @Prop() startDate?: DaysList = dateToDayList(defaultStartDate);

  /**
   * EndDate. Insert a limiter to select the date period.
   */
  @Prop() endDate?: DaysList = dateToDayList(defaultEndDate);

  /**
   * StartDateSelect. Insert a limiter to select the date period.
   */
  @Prop({ mutable: true, reflect: true }) startDateSelect?: Date = null;

  /**
   * EndDateSelect. Insert a limiter to select the date period.
   */
  @Prop({ mutable: true, reflect: true }) endDateSelect?: Date = null;
  /**
   * Language, Entered as one of the languages. Can be one of:
   * 'pt_BR', 'es_ES', 'en_US'.
   */
  @Prop() language?: languages = 'pt_BR';

  /**
   * EndDateSelect. Insert a limiter to select the date period.
   */
  @Prop({ mutable: true, reflect: true }) stateSelect?: stateSelect = 'start';

  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonPrev is the data-test to button prev.
   */
  @Prop() dtButtonPrev?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtButtonNext is the data-test to button next.
   */
  @Prop() dtButtonNext?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtSelectMonth is the data-test to select month.
   */
  @Prop() dtSelectMonth?: string = null;

  /**
   * Data test is the prop to specifically test the component action object.
   * dtSelectYear is the data-test to select year.
   */
  @Prop() dtSelectYear?: string = null;

  /**
   * bdsStartDate. Event to return selected date value.
   */
  @Event() bdsStartDate?: EventEmitter;
  /**
   * bdsEndDate. Event to return selected end date value.
   */
  @Event() bdsEndDate?: EventEmitter;
  /**
   * bdsClickDayButton. Event to return when click on day button.
   */
  @Event() bdsClickDayButton?: EventEmitter;

  /**
   * Return the validity of the input.
   */
  @Method()
  async clear(): Promise<void> {
    this.startDateSelect = null;
    this.endDateSelect = null;
  }
  /**
   * startDateSelect. Function to output selected start date.
   */
  @Watch('startDateSelect')
  protected startDateSelectChanged(): void {
    this.bdsStartDate.emit({ value: this.startDateSelect });
  }
  /**
   * endDateSelect. Function to output selected end date.
   */
  @Watch('endDateSelect')
  protected endDateSelectChanged(): void {
    this.bdsEndDate.emit({ value: this.endDateSelect });
  }

  @Watch('endDate')
  @Watch('startDate')
  protected periodToSelectChanged(newValue: DaysList, _oldValue: DaysList): void {
    const oldDate = fillDayList(_oldValue);
    const newDate = fillDayList(newValue);
    if (newDate != oldDate) {
      this.monthActivated = this.startDate.month;
      this.yearActivated = this.startDate.year;
    }
  }

  componentWillLoad() {
    const fillStartDate = fillDayList(this.startDate);
    const fillEndDate = fillDayList(this.endDate);
    const fillActDate = fillDate(THIS_DAY);
    if (fillStartDate > fillActDate || fillEndDate < fillActDate) {
      this.monthActivated = this.startDate.month;
      this.yearActivated = this.startDate.year;
    }
  }

  componentWillRender() {
    this.week = Object.values(weekDays(this.language));
    this.monthsSlide = getMonthsSlide(this.yearActivated, this.monthActivated);
    this.years = getYears(this.yearActivated, this.startDate.year, this.endDate.year);
    this.months = getMonths(this.yearActivated, this.startDate, this.endDate, changeMonths(this.language));
  }
  /**
   * prevDays. Function to create a gap between the beginning of the grid and the first day of the month.
   */
  private prevDays(value: number): unknown {
    const lenghtDays = [];
    for (let i = 0; i < value; i++) {
      lenghtDays.push(i);
    }
    return lenghtDays.map((item) => <span key={`id${item}`} class={`space ${item}`}></span>);
  }
  /**
   * selectDate. Function to select the desired date.
   */
  private selectDate(value: DaysList): void {
    const changeSelected = new Date(value.year, value.month, value.date);
    if (this.stateSelect == 'start') {
      this.startDateSelect = changeSelected;
      this.endDateSelect = null;
    }
    if (this.stateSelect == 'end') this.endDateSelect = changeSelected;
    this.bdsClickDayButton.emit({ state: this.stateSelect });
  }
  /**
   * prevMonth. Function to rewind the date on the calendar slide.
   */
  private prevMonth(): void {
    this.animatePrev = true;
    if (this.loadingSlide != 'pendding') {
      this.loadingSlide = 'pendding';
      setTimeout(() => {
        this.animatePrev = false;
        this.monthActivated = this.monthActivated - 1;
        if (this.monthActivated < 0) {
          this.monthActivated = 11;
          this.yearActivated = this.yearActivated - 1;
        }
        this.loadingSlide = 'success';
      }, 300);
    } else {
      return;
    }
  }
  /**
   * nextMonth. Function to advance the date on the calendar slide.
   */
  private nextMonth(): void {
    this.animateNext = true;
    if (this.loadingSlide != 'pendding') {
      this.loadingSlide = 'pendding';
      setTimeout(() => {
        this.animateNext = false;
        this.monthActivated = this.monthActivated + 1;
        if (this.monthActivated > 11) {
          this.monthActivated = 0;
          this.yearActivated = this.yearActivated + 1;
        }
        this.loadingSlide = 'success';
      }, 300);
    } else {
      return;
    }
  }
  /**
   * checkCurrentDay. Function to check the current day.
   */
  private checkCurrentDay(value: DaysList): boolean {
    const validateDate = fillDayList(value);
    const fullCurrDate = fillDate(THIS_DAY);

    if (validateDate == fullCurrDate) return true;
    else return false;
  }
  /**
   * checkDisableDay. Function to check the disable day.
   */
  private checkDisableDay(value: DaysList): boolean {
    const validateDate = fillDayList(value);
    const startDateLimit = this.startDate ? fillDayList(this.startDate) : `0`;
    const endDateLimit = this.endDate ? fillDayList(this.endDate) : `9999999`;
    const startSelectedDate = this.startDateSelect ? fillDate(this.startDateSelect) : `0`;

    if (this.startDate && validateDate < startDateLimit) {
      return true;
    }

    if (this.startDateSelect && this.stateSelect == 'end') {
      if (validateDate < startSelectedDate) {
        return true;
      }
    }

    if (this.endDate && validateDate > endDateLimit) {
      return true;
    }
  }
  /**
   * checkSelectedDay. Function to check the selected day.
   */
  private checkSelectedDay(value: DaysList): boolean {
    const validateDate = fillDayList(value);
    const startSelectedDate = this.startDateSelect ? fillDate(this.startDateSelect) : `0`;
    const endSelectedDate = this.endDateSelect ? fillDate(this.endDateSelect) : `0`;

    if (validateDate == startSelectedDate || validateDate == endSelectedDate) return true;
    else return false;
  }
  /**
   * checkPeriodDay. Function to check the period selected day.
   */
  private checkPeriodDay(value: DaysList): boolean {
    const validateDate = fillDayList(value);
    const startSelectedDate = this.startDateSelect ? fillDate(this.startDateSelect) : `0`;
    const endSelectedDate = this.endDateSelect ? fillDate(this.endDateSelect) : `0`;
    if (startSelectedDate && endSelectedDate) {
      if (validateDate >= startSelectedDate && validateDate <= endSelectedDate) {
        return true;
      }
    }
  }
  /**
   * checkPeriodStart. Function to check the period selected start day.
   */
  private checkPeriodStart(value: DaysList): boolean {
    const validateDate = value.date == 1;
    const validateDay = value.day == 0;

    const selectDate = fillDayList(value);
    const startSelectedDate = this.startDateSelect ? fillDate(this.startDateSelect) : `0`;

    const validateStartDate = selectDate == startSelectedDate;

    if (validateDate || validateDay || validateStartDate) {
      return true;
    }
  }
  /**
   * checkPeriodEnd. Function to check the period selected end day.
   */
  private checkPeriodEnd(value: DaysList, lastItem: boolean): boolean {
    const validateDate = lastItem;
    const validateDay = value.day == 6;
    const selectDate = fillDayList(value);
    const endSelectedDate = this.endDateSelect ? fillDate(this.endDateSelect) : `0`;

    const validateStartDate = selectDate == endSelectedDate;

    if (validateDate || validateDay || validateStartDate) {
      return true;
    }
  }
  /**
   * handler of select months or yaer.
   */
  private handler = (event: CustomEvent, ref: string): void => {
    const {
      detail: { value },
    } = event;
    if (ref == 'months') {
      this.monthActivated = value;
    } else {
      if (value == this.startDate.year && this.monthActivated <= this.startDate.month) {
        this.monthActivated = this.startDate.month;
      }
      if (value == this.endDate.year && this.monthActivated >= this.endDate.month) {
        this.monthActivated = this.endDate.month;
      }
      this.yearActivated = value;
    }
  };
  /**
   * openDateSelect. Function to open the year or month selector.
   */
  private openDateSelect = (value: boolean, ref: string): void => {
    if (ref == 'months') {
      setTimeout(() => {
        this.openSelectMonth = value;
      }, 100);
    } else {
      setTimeout(() => {
        this.openSelectYear = value;
      }, 100);
    }
  };

  renderSelectData(data, selected, ref): HTMLElement {
    const openSelect = ref == 'months' ? this.openSelectMonth : this.openSelectYear;
    const labelSelect = data.filter((obj) => obj.value === selected);
    const iconArrow = openSelect ? 'arrow-up' : 'arrow-down';
    return (
      <div
        class={{
          datepicker__calendar__selectDate__select: true,
          [`datepicker__calendar__selectDate__select__${ref}`]: true,
        }}
      >
        <button
          onFocus={() => data.length > 1 && this.openDateSelect(true, ref)}
          onBlur={() => data.length > 1 && this.openDateSelect(false, ref)}
          class={{
            datepicker__calendar__selectDate__select__input: true,
            datepicker__calendar__selectDate__select__input__disable: data.length <= 1,
            [`input--pressed`]: openSelect,
          }}
          data-test={ref == 'months' ? this.dtSelectMonth : this.dtSelectYear}
        >
          <bds-typo variant="fs-14">{labelSelect[0].label}</bds-typo>
          <div class="icon-arrow">
            <bds-icon size="small" name={iconArrow} color="inherit"></bds-icon>
          </div>
        </button>
        <div
          class={{
            datepicker__calendar__selectDate__select__options: true,
            'datepicker__calendar__selectDate__select__options--open': openSelect,
          }}
        >
          {data.map((option) => (
            <bds-select-option
              value={option.value}
              key={option.value}
              onOptionSelected={(event) => this.handler(event, ref)}
              selected={option.value == selected}
              onClick={() => this.openDateSelect(false, ref)}
            >
              {option.label}
            </bds-select-option>
          ))}
        </div>
      </div>
    );
  }

  renderCarSlideBox(days, firstDayWeek): HTMLElement {
    return (
      <div class={{ datepicker__calendar__car__slide__box: true }}>
        {this.prevDays(firstDayWeek)}
        {days.map((item, idx) => (
          <div
            key={idx}
            class={{
              datepicker__calendar__car__slide__box__day: true,
              datepicker__calendar__car__slide__box__day__period: this.checkPeriodDay(item),
              datepicker__calendar__car__slide__box__day__start: this.checkPeriodStart(item),
              datepicker__calendar__car__slide__box__day__end: this.checkPeriodEnd(item, days.length === idx + 1),
            }}
          >
            <bds-typo
              class={{
                datepicker__calendar__car__slide__box__day__typo: true,
                datepicker__calendar__car__slide__box__day__current: this.checkCurrentDay(item),
                datepicker__calendar__car__slide__box__day__selected: this.checkSelectedDay(item),
                datepicker__calendar__car__slide__box__day__disable: this.checkDisableDay(item),
              }}
              variant="fs-14"
              onClick={() => this.selectDate(item)}
            >
              {item.date}
            </bds-typo>
          </div>
        ))}
      </div>
    );
  }

  render(): HTMLElement {
    const futureMonth = changeMonths(this.language).filter((obj) => obj.value === this.monthsSlide[2].month);
    const futureYear = this.monthsSlide[2].year;
    return (
      <div class={{ datepicker__calendar: true, [`period`]: true }}>
        <div class={{ datepicker__calendar__selectDate: true }}>
          <bds-icon
            class={{
              [`arrow-left`]: true,
              [`arrow-left__disable`]:
                fillDayList(this.monthsSlide[0].days[this.monthsSlide[0].days.length - 1]) <
                fillDayList(this.startDate),
              datepicker__calendar__selectDate__icon: true,
            }}
            name="arrow-left"
            theme="outline"
            size="small"
            onClick={() => this.prevMonth()}
            dataTest={this.dtButtonPrev}
          ></bds-icon>
          {[
            this.renderSelectData(this.months, this.monthActivated, 'months'),
            this.renderSelectData(this.years, this.yearActivated, 'years'),
          ]}
          <bds-typo class="datepicker__calendar__selectDate__futureMonth" variant="fs-14">
            {`${futureMonth[0].label}, ${futureYear}`}
          </bds-typo>
          <bds-icon
            class={{
              [`arrow-right`]: true,
              [`arrow-right__disable`]: fillDayList(this.monthsSlide[2].days[0]) > fillDayList(this.endDate),
              datepicker__calendar__selectDate__icon: true,
            }}
            name="arrow-right"
            theme="outline"
            size="small"
            onClick={() => this.nextMonth()}
            dataTest={this.dtButtonNext}
          ></bds-icon>
        </div>
        <div>
          <div class={{ datepicker__calendar__week: true }}>
            <div class={{ datepicker__calendar__week__present: true }}>
              {this.week.map((item, idx) => (
                <bds-typo variant="fs-14" key={idx} class={`datepicker__calendar__week__day`}>
                  {item.charAt(0)}
                </bds-typo>
              ))}
            </div>
            <div class={{ datepicker__calendar__week__future: true }}>
              {this.week.map((item, idx) => (
                <bds-typo variant="fs-14" key={idx} class={`datepicker__calendar__week__day`}>
                  {item.charAt(0)}
                </bds-typo>
              ))}
            </div>
          </div>
          <div class={{ datepicker__calendar__car: true, datepicker__calendar__car__period: true }}>
            <div
              class={{
                datepicker__calendar__car__slide: true,
                animate__prev: this.animatePrev,
                animate__next: this.animateNext,
              }}
            >
              {[
                this.renderCarSlideBox(this.monthsSlide[0].days, this.monthsSlide[0].days[0].day),
                this.renderCarSlideBox(this.monthsSlide[1].days, this.monthsSlide[1].days[0].day),
                this.renderCarSlideBox(this.monthsSlide[2].days, this.monthsSlide[2].days[0].day),
                this.renderCarSlideBox(this.monthsSlide[3].days, this.monthsSlide[3].days[0].day),
              ]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
