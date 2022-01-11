import { Component, h, State, Prop, EventEmitter, Event, Watch } from '@stencil/core';
import { THIS_DAY, WEEK_DAYS, CALENDAR_MONTHS, getDaysInMonth } from '../../../utils/calendar';
import { DaysList } from './calendar-single-interface';

@Component({
  tag: 'bds-calendar-single',
  styleUrl: 'calendar-single.scss',
  shadow: true,
})
export class BdsCalendarSingle {
  @State() week: string[];
  @State() pastDays: DaysList[];
  @State() pastFirstDayWeek: number;
  @State() presentDays: DaysList[];
  @State() presentFirstDayWeek: number;
  @State() futureDays: DaysList[];
  @State() futureFirstDayWeek: number;
  @State() monthPastSlide: number;
  @State() yearPastSlide: number;
  @State() monthActivated: number = THIS_DAY.getMonth();
  @State() yearActivated: number = THIS_DAY.getFullYear();
  @State() monthFutureSlide: number;
  @State() yearFutureSlide: number;
  @State() animatePrev?: boolean = false;
  @State() animateNext?: boolean = false;
  @State() dateSelected?: Date = null;

  /**
   * SelectBeforeCurrent. Disable selection before current day.
   */
  @Prop() selectBeforeCurrent?: boolean = false;

  @Event() bdsDateSelected?: EventEmitter;

  private prevDays(value: number): unknown {
    const lenghtDays = [];
    for (let i = 0; i < value; i++) {
      lenghtDays.push(i);
    }
    return lenghtDays.map((item) => <span key={`id${item}`} class={`space ${item}`}></span>);
  }

  private selectDate(value: DaysList): void {
    const changeSelected = new Date(value.year, value.month, value.date);
    this.dateSelected = changeSelected;
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

    if (this.selectBeforeCurrent) {
      if (validateDate < fullCurrDate) {
        return true;
      }
    }
  }

  private checkSelectedDay(value: DaysList): boolean {
    const validateDate = this.fillDayListData(value);
    const selectedDate = this.dateSelected ? this.fillDateData(this.dateSelected) : `0`;

    if (validateDate == selectedDate) return true;
    else return false;
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
    this.monthFutureSlide = this.monthActivated + 1;
    this.yearFutureSlide = this.yearActivated;
    if (this.monthFutureSlide > 11) {
      this.monthFutureSlide = 0;
      this.yearFutureSlide = this.yearActivated + 1;
    }
  };

  @Watch('dateSelected')
  protected startDateChanged(): void {
    this.bdsDateSelected.emit({ value: this.bdsDateSelected });
  }

  componentWillRender() {
    this.week = Object.values(WEEK_DAYS);

    this.getPastDate();
    this.getFutureDate();

    this.pastDays = getDaysInMonth(this.yearPastSlide, this.monthPastSlide);
    this.pastFirstDayWeek = this.pastDays[0].day;

    this.presentDays = getDaysInMonth(this.yearActivated, this.monthActivated);
    this.presentFirstDayWeek = this.presentDays[0].day;

    this.futureDays = getDaysInMonth(this.yearFutureSlide, this.monthFutureSlide);
    this.futureFirstDayWeek = this.futureDays[0].day;
  }

  renderCarSlideBox(days, firstDayWeek): HTMLElement {
    return (
      <div class={{ calendarSingle__car__slide__box: true }}>
        {this.prevDays(firstDayWeek)}
        {days.map((item, idx) => (
          <div
            key={idx}
            class={{
              calendarSingle__car__slide__box__day: true,
            }}
          >
            <bds-typo
              class={{
                calendarSingle__car__slide__box__day__typo: true,
                calendarSingle__car__slide__box__day__current: this.checkCurrentDay(item),
                calendarSingle__car__slide__box__day__selected: this.checkSelectedDay(item),
                calendarSingle__car__slide__box__day__disable: this.checkDisableDay(item),
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
      <div class={{ calendarSingle: true }}>
        <div class={{ calendarSingle__selectMonth: true }}>
          <bds-icon
            class="arrow-left calendarSingle__selectMonth__icon"
            name="arrow-left"
            theme="outline"
            size="small"
            onClick={() => this.prevMonth()}
          ></bds-icon>
          <bds-typo class="calendarSingle__selectMonth__typo" variant="fs-14">
            {`${CALENDAR_MONTHS[this.monthActivated]}, ${this.yearActivated}`}
          </bds-typo>
          <bds-icon
            class="arrow-right calendarSingle__selectMonth__icon"
            name="arrow-right"
            theme="outline"
            size="small"
            onClick={() => this.nextMonth()}
          ></bds-icon>
        </div>
        <div class={{ calendarSingle__week: true }}>
          {this.week.map((item, idx) => (
            <bds-typo key={idx} class={`calendarSingle__week__day`}>
              {item.charAt(0)}
            </bds-typo>
          ))}
        </div>
        <div class={{ calendarSingle__car: true }}>
          <div
            class={{
              calendarSingle__car__slide: true,
              animate__prev: this.animatePrev,
              animate__next: this.animateNext,
            }}
          >
            {[
              this.renderCarSlideBox(this.pastDays, this.pastFirstDayWeek),
              this.renderCarSlideBox(this.presentDays, this.presentFirstDayWeek),
              this.renderCarSlideBox(this.futureDays, this.futureFirstDayWeek),
            ]}
          </div>
        </div>
      </div>
    );
  }
}
