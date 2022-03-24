import { Component, h, State, Prop, EventEmitter, Event, Method, Watch } from '@stencil/core';
import {
  THIS_DAY,
  WEEK_DAYS,
  defaultStartDate,
  defaultEndDate,
  MONTHS,
  getMonthsSlide,
  getYears,
  getMonths,
  fillDayList,
  fillDate,
  dateToDayList,
} from '../../../utils/calendar';
import { DaysList, MonthsSlide, Options } from '../datepicker-interface';

export type stateSlide = 'await' | 'pendding' | 'success';
@Component({
  tag: 'bds-datepicker-period',
  styleUrl: '../datepicker.scss',
  shadow: true,
})
export class BdsdatepickerPeriod {
  @State() week: string[];
  @State() months: Options[];
  @State() years: Options[];
  @State() monthActivated: number = THIS_DAY.getMonth();
  @State() yearActivated: number = THIS_DAY.getFullYear();
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

  @Event() bdsStartDate?: EventEmitter;

  @Event() bdsEndDate?: EventEmitter;

  /**
   * Return the validity of the input.
   */
  @Method()
  async clear(): Promise<void> {
    this.startDateSelect = null;
    this.endDateSelect = null;
  }

  @Watch('startDateSelect')
  protected startDateSelectChanged(): void {
    this.bdsStartDate.emit({ value: this.startDateSelect });
    this.monthActivated = this.startDateSelect ? this.startDateSelect?.getMonth() : this.startDate.month;
    this.yearActivated = this.startDateSelect ? this.startDateSelect.getFullYear() : this.startDate.year;
  }

  @Watch('endDateSelect')
  protected endDateSelectChanged(): void {
    this.bdsEndDate.emit({ value: this.endDateSelect });
    this.monthActivated = this.endDateSelect
      ? this.startDateSelect.getMonth() == this.endDateSelect.getMonth() &&
        this.startDateSelect.getFullYear() == this.endDateSelect.getFullYear()
        ? this.startDateSelect.getMonth()
        : this.endDateSelect.getMonth() - 1
      : this.startDate.month;
    this.yearActivated = this.endDateSelect ? this.endDateSelect.getFullYear() : this.startDate.year;
    if (this.monthActivated < 0) {
      this.monthActivated = 11;
      this.yearActivated = this.yearActivated - 1;
    }
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
    if (this.startDate) {
      this.monthActivated = this.startDate.month;
      this.yearActivated = this.startDate.year;
    }
  }

  componentWillRender() {
    this.week = Object.values(WEEK_DAYS);
    this.monthsSlide = getMonthsSlide(this.yearActivated, this.monthActivated);
    this.years = getYears(this.yearActivated, this.startDate.year, this.endDate.year);
    this.months = getMonths(this.yearActivated, this.startDate, this.endDate);
  }

  private prevDays(value: number): unknown {
    const lenghtDays = [];
    for (let i = 0; i < value; i++) {
      lenghtDays.push(i);
    }
    return lenghtDays.map((item) => <span key={`id${item}`} class={`space ${item}`}></span>);
  }

  private selectDate(value: DaysList): void {
    const changeSelected = new Date(value.year, value.month, value.date);
    if (this.startDateSelect) {
      this.endDateSelect = changeSelected;
    } else {
      this.startDateSelect = changeSelected;
    }
  }

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

  private checkCurrentDay(value: DaysList): boolean {
    const validateDate = fillDayList(value);
    const fullCurrDate = fillDate(THIS_DAY);

    if (validateDate == fullCurrDate) return true;
    else return false;
  }

  private checkDisableDay(value: DaysList): boolean {
    const validateDate = fillDayList(value);
    const startDateLimit = this.startDate ? fillDayList(this.startDate) : `0`;
    const endDateLimit = this.endDate ? fillDayList(this.endDate) : `9999999`;
    const startSelectedDate = this.startDateSelect ? fillDate(this.startDateSelect) : `0`;

    if (this.startDate && validateDate < startDateLimit) {
      return true;
    }

    if (this.startDateSelect) {
      if (validateDate < startSelectedDate) {
        return true;
      }
    }

    if (this.endDate && validateDate > endDateLimit) {
      return true;
    }
  }

  private checkSelectedDay(value: DaysList): boolean {
    const validateDate = fillDayList(value);
    const startSelectedDate = this.startDateSelect ? fillDate(this.startDateSelect) : `0`;
    const endSelectedDate = this.endDateSelect ? fillDate(this.endDateSelect) : `0`;

    if (validateDate == startSelectedDate || validateDate == endSelectedDate) return true;
    else return false;
  }

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

  private handler = (event: CustomEvent, ref: string): void => {
    const {
      detail: { value },
    } = event;
    if (ref == 'months') {
      this.monthActivated = value;
    } else {
      if (value == this.endDate.year) this.monthActivated = 0;
      if (value == this.startDate.year) this.monthActivated = this.startDate.month;
      this.yearActivated = value;
    }
  };

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
    const futureMonth = MONTHS.filter((obj) => obj.value === this.monthsSlide[2].month);
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
          ></bds-icon>
        </div>
        <div>
          <div class={{ datepicker__calendar__week: true }}>
            <div class={{ datepicker__calendar__week__present: true }}>
              {this.week.map((item, idx) => (
                <bds-typo key={idx} class={`datepicker__calendar__week__day`}>
                  {item.charAt(0)}
                </bds-typo>
              ))}
            </div>
            <div class={{ datepicker__calendar__week__future: true }}>
              {this.week.map((item, idx) => (
                <bds-typo key={idx} class={`datepicker__calendar__week__day`}>
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
