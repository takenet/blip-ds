import { Component, h, State, Prop, EventEmitter, Event, Watch } from '@stencil/core';
import { THIS_DAY, WEEK_DAYS, MONTHS, getMonthsSlide, getYears } from '../../../utils/calendar';
import { DaysList, MonthsSlide, Options } from '../datepicker-interface';

@Component({
  tag: 'bds-datepicker-period',
  styleUrl: '../datepicker.scss',
  shadow: true,
})
export class BdsdatepickerPeriod {
  @State() week: string[];
  @State() years: Options[];
  @State() monthActivated: number = THIS_DAY.getMonth();
  @State() yearActivated: number = THIS_DAY.getFullYear();
  @State() animatePrev?: boolean = false;
  @State() animateNext?: boolean = false;
  @State() startDateSelected?: Date = null;
  @State() endDateSelected?: Date = null;
  @State() maxToSelectDate?: Date = null;
  @State() activeSelectYear?: boolean = false;
  @State() openSelectMonth?: boolean = false;
  @State() openSelectYear?: boolean = false;
  @State() monthsSlide: MonthsSlide[];

  /**
   * SelectBeforeCurrent. Disable selection before current day.
   */
  @Prop() selectBeforeCurrent?: boolean = false;

  /**
   * DateLimit. Insert a limiter to select the date period.
   */
  @Prop() dateLimit?: number = null;

  @Event() bdsStartDate?: EventEmitter<Date>;

  @Event() bdsEndDate?: EventEmitter<Date>;

  @Watch('maxToSelectDate')
  protected maxToSelectDateChanged(): void {
    const numbtognore = this.maxToSelectDate?.setDate(this.maxToSelectDate?.getDate() + this.dateLimit);
    numbtognore;
  }

  @Watch('startDateSelected')
  protected startDateChanged(): void {
    this.bdsStartDate.emit(this.startDateSelected);
  }

  @Watch('endDateSelected')
  protected endDateChanged(): void {
    this.bdsEndDate.emit(this.endDateSelected);
  }

  componentWillRender() {
    this.week = Object.values(WEEK_DAYS);
    this.monthsSlide = getMonthsSlide(this.yearActivated, this.monthActivated);
    this.years = getYears(this.yearActivated);
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
    const toMaxSelect = new Date(value.year, value.month, value.date);
    if (this.startDateSelected) {
      this.endDateSelected = changeSelected;
    } else {
      this.startDateSelected = changeSelected;
      this.maxToSelectDate = toMaxSelect;
    }
  }

  private prevMonth(): void {
    this.animatePrev = true;
    setTimeout(() => {
      this.animatePrev = false;
      this.monthActivated = this.monthActivated - 1;
      if (this.monthActivated < 0) {
        this.monthActivated = 11;
        this.yearActivated = this.yearActivated - 1;
      }
    }, 300);
  }

  private nextMonth(): void {
    this.animateNext = true;
    setTimeout(() => {
      this.animateNext = false;
      this.monthActivated = this.monthActivated + 1;
      if (this.monthActivated > 11) {
        this.monthActivated = 0;
        this.yearActivated = this.yearActivated + 1;
      }
    }, 300);
  }

  private fillDayListData(value: DaysList): string {
    const stringDate = `${value.year}${value.month.toString().padStart(2, '0')}${value.date
      .toString()
      .padStart(2, '0')}`;
    return stringDate;
  }

  private fillDateData(value: Date): string {
    const stringDate = `${value.getFullYear()}${value.getMonth().toString().padStart(2, '0')}${value
      .getDate()
      .toString()
      .padStart(2, '0')}`;
    return stringDate;
  }

  private checkCurrentDay(value: DaysList): boolean {
    const validateDate = this.fillDayListData(value);
    const fullCurrDate = this.fillDateData(THIS_DAY);

    if (validateDate == fullCurrDate) return true;
    else return false;
  }

  private checkDisableDay(value: DaysList): boolean {
    const validateDate = this.fillDayListData(value);
    const fullCurrDate = this.fillDateData(THIS_DAY);
    const startSelectedDate = this.startDateSelected ? this.fillDateData(this.startDateSelected) : `0`;
    const maxSelectedDate = this.maxToSelectDate ? this.fillDateData(this.maxToSelectDate) : `0`;

    if (this.selectBeforeCurrent) {
      if (validateDate < fullCurrDate) {
        return true;
      }
    }

    if (this.startDateSelected) {
      if (validateDate < startSelectedDate || (this.dateLimit && validateDate > maxSelectedDate)) {
        return true;
      }
    }
  }

  private checkSelectedDay(value: DaysList): boolean {
    const validateDate = this.fillDayListData(value);
    const startSelectedDate = this.startDateSelected ? this.fillDateData(this.startDateSelected) : `0`;
    const endSelectedDate = this.endDateSelected ? this.fillDateData(this.endDateSelected) : `0`;

    if (validateDate == startSelectedDate || validateDate == endSelectedDate) return true;
    else return false;
  }

  private checkPeriodDay(value: DaysList): boolean {
    const validateDate = this.fillDayListData(value);
    const startSelectedDate = this.startDateSelected ? this.fillDateData(this.startDateSelected) : `0`;
    const endSelectedDate = this.endDateSelected ? this.fillDateData(this.endDateSelected) : `0`;
    if (startSelectedDate && endSelectedDate) {
      if (validateDate >= startSelectedDate && validateDate <= endSelectedDate) {
        return true;
      }
    }
  }

  private checkPeriodStart(value: DaysList): boolean {
    const validateDate = value.date == 1;
    const validateDay = value.day == 0;

    const selectDate = this.fillDayListData(value);
    const startSelectedDate = this.startDateSelected ? this.fillDateData(this.startDateSelected) : `0`;

    const validateStartDate = selectDate == startSelectedDate;

    if (validateDate || validateDay || validateStartDate) {
      return true;
    }
  }

  private checkPeriodEnd(value: DaysList, lastItem: boolean): boolean {
    const validateDate = lastItem;
    const validateDay = value.day == 6;
    const selectDate = this.fillDayListData(value);
    const endSelectedDate = this.endDateSelected ? this.fillDateData(this.endDateSelected) : `0`;

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
          onFocus={() => this.openDateSelect(true, ref)}
          onBlur={() => this.openDateSelect(false, ref)}
          class={{ datepicker__calendar__selectDate__select__input: true, [`input--pressed`]: openSelect }}
        >
          <bds-typo variant="fs-14">{labelSelect[0].label}</bds-typo>
          <div slot="input-right" class="select__icon">
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
    return (
      <div class={{ datepicker__calendar: true, [`period`]: true }}>
        <div class={{ datepicker__calendar__selectDate: true }}>
          <bds-icon
            class={{
              [`arrow-left`]: true,
              [`arrow-left__disable`]: false,
              datepicker__calendar__selectDate__icon: true,
            }}
            name="arrow-left"
            theme="outline"
            size="small"
            onClick={() => this.prevMonth()}
          ></bds-icon>
          {[
            this.renderSelectData(MONTHS, this.monthActivated, 'months'),
            this.renderSelectData(this.years, this.yearActivated, 'years'),
          ]}
          <bds-typo class="datepicker__calendar__selectDate__futureMonth" variant="fs-14">
            {futureMonth[0].label}
          </bds-typo>
          <bds-icon
            class={{
              [`arrow-right`]: true,
              [`arrow-right__disable`]: false,
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
