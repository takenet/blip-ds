import { Component, h, State, Prop } from '@stencil/core';
import { THIS_DAY, WEEK_DAYS, CALENDAR_MONTHS, getDaysInMonth } from '../../utils/calendar';
import { DaysList } from './calendar-interface';

@Component({
  tag: 'bds-calendar',
  styleUrl: 'calendar.scss',
  shadow: true,
})
export class BdsCalendar {
  @State() days: DaysList[];
  @State() week: string[];
  @State() fristDayWeek: number;
  @State() monthActivated: number = THIS_DAY.getMonth();
  @State() yearActivated: number = THIS_DAY.getFullYear();
  /**
   * Date, Inserted a date.
   */
  @Prop({ mutable: true }) dateSelected?: Date = null;

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
    this.monthActivated = this.monthActivated - 1;
    if (this.monthActivated < 0) {
      this.monthActivated = 11;
      this.yearActivated = this.yearActivated - 1;
    }
  }

  private nextMonth(): void {
    this.monthActivated = this.monthActivated + 1;
    if (this.monthActivated > 11) {
      this.monthActivated = 0;
      this.yearActivated = this.yearActivated + 1;
    }
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

  componentWillRender() {
    this.days = getDaysInMonth(this.yearActivated, this.monthActivated);
    this.week = Object.values(WEEK_DAYS);
    this.fristDayWeek = this.days[0].day;
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
        <div class={{ calendar__box: true }}>
          {this.week.map((item, idx) => (
            <bds-typo key={idx} class={`calendar__box__week`}>
              {item.charAt(0)}
            </bds-typo>
          ))}
          {this.prevDays(this.fristDayWeek)}
          {this.days.map((item, idx) => (
            <div key={idx} class={{ calendar__box__day: true }}>
              <bds-typo
                class={{
                  calendar__box__day__typo: true,
                  calendar__box__day__current: this.checkCurrentDay(item),
                  calendar__box__day__selected: this.checkSelectedDay(item),
                }}
                onClick={() => this.selectDate(item)}
              >
                {item.date}
              </bds-typo>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
