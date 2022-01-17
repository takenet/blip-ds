import { Component, h, State, Prop, EventEmitter, Event, Watch } from '@stencil/core';
import { THIS_DAY, WEEK_DAYS, MONTHS, getYears, getMonthsSlide } from '../../../utils/calendar';
import { DaysList, MonthsSlide, Options } from '../datepicker-interface';

@Component({
  tag: 'bds-datepicker-single',
  styleUrl: '../datepicker.scss',
  shadow: true,
})
export class BdsdatepickerSingle {
  @State() week: string[];
  @State() years: Options[];
  @State() monthActivated: number = THIS_DAY.getMonth();
  @State() yearActivated: number = THIS_DAY.getFullYear();
  @State() animatePrev?: boolean = false;
  @State() animateNext?: boolean = false;
  @State() dateSelected?: Date = null;
  @State() openSelectMonth?: boolean = false;
  @State() openSelectYear?: boolean = false;
  @State() monthsSlide: MonthsSlide[];

  /**
   * SelectBeforeCurrent. Disable selection before current day.
   */
  @Prop() selectBeforeCurrent?: boolean = false;

  @Event() bdsDateSelected?: EventEmitter<Date>;

  @Event() bdsClearDate?: EventEmitter<boolean>;

  @Watch('dateSelected')
  protected startDateChanged(): void {
    this.bdsDateSelected.emit(this.dateSelected);
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
          <div class="datepicker__calendar__selectDate__select__input__icon">
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
    return (
      <div class={{ datepicker__calendar: true }}>
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
            {this.week.map((item, idx) => (
              <bds-typo key={idx} class={`datepicker__calendar__week__day`}>
                {item.charAt(0)}
              </bds-typo>
            ))}
          </div>
          <div class={{ datepicker__calendar__car: true }}>
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
              ]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
