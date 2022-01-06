import { Component, h, State, Prop } from '@stencil/core';
import { THIS_DAY, WEEK_DAYS, CALENDAR_MONTHS, getDaysInMonth } from '../../utils/calendar';
import { DaysList } from './calendar-interface';

@Component({
  tag: 'bds-calendar',
  styleUrl: 'calendar.scss',
  shadow: true,
})
export class BdsCalendar {
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

  /**
   * DateSelected, Inserted a date to input selection.
   */
  @Prop({ mutable: true }) dateSelected?: Date = null;

  /**
   * MessageBox, Used to insert an informational message into the calendar.
   */
  @Prop() messageBox?: string = '';

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

  private checkCurrentDay(value: DaysList): boolean {
    const validateDate = `${value.date}${value.month}${value.year}`;
    const fullCurrDate = `${THIS_DAY.getDate()}${THIS_DAY.getMonth()}${THIS_DAY.getFullYear()}`;

    if (validateDate == fullCurrDate) return true;
    else return false;
  }

  private checkSelectedDay(value: DaysList): boolean {
    const validateDate = `${value.date}${value.month}${value.year}`;
    const selectedDate = `${this.dateSelected?.getDate()}${this.dateSelected?.getMonth()}${this.dateSelected?.getFullYear()}`;

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
          <bds-typo class="calendar__selectMonth__typo" variant="fs-14">
            {`${CALENDAR_MONTHS[this.monthActivated]}, ${this.yearActivated}`}
          </bds-typo>
          <bds-icon
            class="arrow-right calendar__selectMonth__icon"
            name="arrow-right"
            theme="outline"
            size="small"
            onClick={() => this.nextMonth()}
          ></bds-icon>
        </div>
        {this.messageBox && (
          <bds-chip class={{ calendar__message: true }} variant="primary">
            {this.messageBox}
          </bds-chip>
        )}
        <div class={{ calendar__week: true }}>
          {this.week.map((item, idx) => (
            <bds-typo key={idx} class={`calendar__week__day`}>
              {item.charAt(0)}
            </bds-typo>
          ))}
        </div>
        <div class={{ calendar__car: true }}>
          <div
            class={{
              calendar__car__slide: true,
              animate__prev: this.animatePrev,
              animate__next: this.animateNext,
            }}
          >
            <div class={{ calendar__car__slide__box: true, alendar__slide__box__past: true }}>
              {this.prevDays(this.pastFirstDayWeek)}
              {this.pastDays.map((item, idx) => (
                <div key={idx} class={{ calendar__car__slide__box__day: true }}>
                  <bds-typo
                    class={{
                      calendar__car__slide__box__day__typo: true,
                      calendar__car__slide__box__day__current: this.checkCurrentDay(item),
                      calendar__car__slide__box__day__selected: this.checkSelectedDay(item),
                    }}
                    onClick={() => this.selectDate(item)}
                  >
                    {item.date}
                  </bds-typo>
                </div>
              ))}
            </div>
            <div class={{ calendar__car__slide__box: true }}>
              {this.prevDays(this.presentFirstDayWeek)}
              {this.presentDays.map((item, idx) => (
                <div key={idx} class={{ calendar__car__slide__box__day: true }}>
                  <bds-typo
                    class={{
                      calendar__car__slide__box__day__typo: true,
                      calendar__car__slide__box__day__current: this.checkCurrentDay(item),
                      calendar__car__slide__box__day__selected: this.checkSelectedDay(item),
                    }}
                    onClick={() => this.selectDate(item)}
                  >
                    {item.date}
                  </bds-typo>
                </div>
              ))}
            </div>
            <div class={{ calendar__car__slide__box: true, alendar__slide__box__future: true }}>
              {this.prevDays(this.futureFirstDayWeek)}
              {this.futureDays.map((item, idx) => (
                <div key={idx} class={{ calendar__car__slide__box__day: true }}>
                  <bds-typo
                    class={{
                      calendar__car__slide__box__day__typo: true,
                      calendar__car__slide__box__day__current: this.checkCurrentDay(item),
                      calendar__car__slide__box__day__selected: this.checkSelectedDay(item),
                    }}
                    onClick={() => this.selectDate(item)}
                  >
                    {item.date}
                  </bds-typo>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
