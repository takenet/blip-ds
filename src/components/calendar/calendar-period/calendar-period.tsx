import { Component, h, State, Prop, EventEmitter, Event, Watch } from '@stencil/core';
import { THIS_DAY, WEEK_DAYS, CALENDAR_MONTHS, getDaysInMonth } from '../../../utils/calendar';
import { DaysList } from './calendar-period-interface';

@Component({
  tag: 'bds-calendar-period',
  styleUrl: 'calendar-period.scss',
  shadow: true,
})
export class BdsCalendarPeriod {
  @State() week: string[];
  @State() pastDays: DaysList[];
  @State() pastFirstDayWeek: number;
  @State() presentDays: DaysList[];
  @State() presentFirstDayWeek: number;
  @State() futureDays: DaysList[];
  @State() futureFirstDayWeek: number;
  @State() comingDays: DaysList[];
  @State() comingFirstDayWeek: number;
  @State() monthPastSlide: number;
  @State() yearPastSlide: number;
  @State() monthActivated: number = THIS_DAY.getMonth();
  @State() yearActivated: number = THIS_DAY.getFullYear();
  @State() monthFutureSlide: number = THIS_DAY.getMonth() + 1;
  @State() yearFutureSlide: number = THIS_DAY.getFullYear();
  @State() monthComingSlide: number;
  @State() yearComingSlide: number;
  @State() animatePrev?: boolean = false;
  @State() animateNext?: boolean = false;
  @State() startDateSelected?: Date = null;
  @State() endDateSelected?: Date = null;
  @State() maxToSelectDate?: Date = null;

  /**
   * SelectBeforeCurrent. Disable selection before current day.
   */
  @Prop() selectBeforeCurrent?: boolean = false;

  /**
   * DateLimit. Insert a limiter to select the date period.
   */
  @Prop() dateLimit?: number = null;

  @Event() bdsStartDate?: EventEmitter;

  @Event() bdsEndDate?: EventEmitter;

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
      this.monthFutureSlide = this.monthFutureSlide - 1;
      if (this.monthActivated < 0) {
        this.monthActivated = 11;
        this.yearActivated = this.yearActivated - 1;
      }
      if (this.monthFutureSlide < 0) {
        this.monthFutureSlide = 11;
        this.yearFutureSlide = this.yearFutureSlide - 1;
      }
    }, 300);
  }

  private nextMonth(): void {
    this.animateNext = true;
    setTimeout(() => {
      this.animateNext = false;
      this.monthActivated = this.monthActivated + 1;
      this.monthFutureSlide = this.monthFutureSlide + 1;
      if (this.monthActivated > 11) {
        this.monthActivated = 0;
        this.yearActivated = this.yearActivated + 1;
      }
      if (this.monthFutureSlide > 11) {
        this.monthFutureSlide = 0;
        this.yearFutureSlide = this.yearFutureSlide + 1;
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

  private getPastDate = () => {
    this.monthPastSlide = this.monthActivated - 1;
    this.yearPastSlide = this.yearActivated;
    if (this.monthPastSlide < 0) {
      this.monthPastSlide = 11;
      this.yearPastSlide = this.yearActivated - 1;
    }
  };

  private getFutureDate = () => {
    if (this.monthFutureSlide > 11) {
      this.monthFutureSlide = 0;
      this.yearFutureSlide = this.yearFutureSlide + 1;
    }
  };

  private getComingDate = () => {
    this.monthComingSlide = this.monthFutureSlide + 1;
    this.yearComingSlide = this.yearFutureSlide;
    if (this.monthComingSlide > 11) {
      this.monthComingSlide = 0;
      this.yearComingSlide = this.yearComingSlide + 1;
    }
  };

  @Watch('maxToSelectDate')
  protected maxToSelectDateChanged(): void {
    const numbtognore = this.maxToSelectDate?.setDate(this.maxToSelectDate?.getDate() + this.dateLimit);
    numbtognore;
  }

  @Watch('startDateSelected')
  protected startDateChanged(): void {
    this.bdsStartDate.emit({ value: this.bdsStartDate });
  }

  @Watch('endDateSelected')
  protected endDateChanged(): void {
    this.bdsEndDate.emit({ value: this.bdsEndDate });
  }

  componentWillRender() {
    this.week = Object.values(WEEK_DAYS);

    this.getPastDate();
    this.getFutureDate();
    this.getComingDate();

    this.pastDays = getDaysInMonth(this.yearPastSlide, this.monthPastSlide);
    this.pastFirstDayWeek = this.pastDays[0].day;

    this.presentDays = getDaysInMonth(this.yearActivated, this.monthActivated);
    this.presentFirstDayWeek = this.presentDays[0].day;

    this.futureDays = getDaysInMonth(this.yearFutureSlide, this.monthFutureSlide);
    this.futureFirstDayWeek = this.futureDays[0].day;

    this.comingDays = getDaysInMonth(this.yearComingSlide, this.monthComingSlide);
    this.comingFirstDayWeek = this.comingDays[0].day;
  }

  renderCarSlideBox(days, firstDayWeek): HTMLElement {
    return (
      <div class={{ calendar__car__slide__box: true }}>
        {this.prevDays(firstDayWeek)}
        {days.map((item, idx) => (
          <div
            key={idx}
            class={{
              calendar__car__slide__box__day: true,
              calendar__car__slide__box__day__period: this.checkPeriodDay(item),
              calendar__car__slide__box__day__start: this.checkPeriodStart(item),
              calendar__car__slide__box__day__end: this.checkPeriodEnd(item, days.length === idx + 1),
            }}
          >
            <bds-typo
              class={{
                calendar__car__slide__box__day__typo: true,
                calendar__car__slide__box__day__current: this.checkCurrentDay(item),
                calendar__car__slide__box__day__selected: this.checkSelectedDay(item),
                calendar__car__slide__box__day__disable: this.checkDisableDay(item),
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

  render() {
    return (
      <div class={{ calendar: true }}>
        <div class={{ calendar__selectMonth: true }}>
          <bds-icon
            class="arrow-left calendar__selectMonth__icon"
            name="arrow-left"
            theme="outline"
            size="small"
            onClick={() => this.prevMonth()}
          ></bds-icon>
          <bds-typo class="calendar__selectMonth__typo calendar__selectMonth__typo__present" variant="fs-14">
            {`${CALENDAR_MONTHS[this.monthActivated]}, ${this.yearActivated}`}
          </bds-typo>
          <bds-typo class="calendar__selectMonth__typo calendar__selectMonth__typo__future" variant="fs-14">
            {`${CALENDAR_MONTHS[this.monthFutureSlide]}, ${this.yearFutureSlide}`}
          </bds-typo>
          <bds-icon
            class="arrow-right calendar__selectMonth__icon"
            name="arrow-right"
            theme="outline"
            size="small"
            onClick={() => this.nextMonth()}
          ></bds-icon>
        </div>
        <div class={{ calendar__week: true }}>
          <div class={{ calendar__week__present: true }}>
            {this.week.map((item, idx) => (
              <bds-typo key={idx} class={`calendar__week__day`}>
                {item.charAt(0)}
              </bds-typo>
            ))}
          </div>
          <div class={{ calendar__week__future: true }}>
            {this.week.map((item, idx) => (
              <bds-typo key={idx} class={`calendar__week__day`}>
                {item.charAt(0)}
              </bds-typo>
            ))}
          </div>
        </div>
        <div class={{ calendar__car: true }}>
          <div
            class={{
              calendar__car__slide: true,
              animate__prev: this.animatePrev,
              animate__next: this.animateNext,
            }}
          >
            {[
              this.renderCarSlideBox(this.pastDays, this.pastFirstDayWeek),
              this.renderCarSlideBox(this.presentDays, this.presentFirstDayWeek),
              this.renderCarSlideBox(this.futureDays, this.futureFirstDayWeek),
              this.renderCarSlideBox(this.comingDays, this.comingFirstDayWeek),
            ]}
          </div>
        </div>
      </div>
    );
  }
}
