import { h } from '@stencil/core';
import { THIS_DAY, weekDays, defaultStartDate, defaultEndDate, changeMonths, getMonthsSlide, getYears, getMonths, fillDayList, fillDate, dateToDayList, } from '../../../utils/calendar';
export class BdsdatepickerPeriod {
  constructor() {
    /**
     * handler of select months or yaer.
     */
    this.handler = (event, ref) => {
      const { detail: { value }, } = event;
      if (ref == 'months') {
        this.monthActivated = value;
      }
      else {
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
    this.openDateSelect = (value, ref) => {
      if (ref == 'months') {
        setTimeout(() => {
          this.openSelectMonth = value;
        }, 100);
      }
      else {
        setTimeout(() => {
          this.openSelectYear = value;
        }, 100);
      }
    };
    this.week = undefined;
    this.months = undefined;
    this.years = undefined;
    this.monthActivated = this.startDateSelect ? this.startDateSelect.getMonth() : THIS_DAY.getMonth();
    this.yearActivated = this.startDateSelect ? this.startDateSelect.getFullYear() : THIS_DAY.getFullYear();
    this.animatePrev = false;
    this.animateNext = false;
    this.activeSelectYear = false;
    this.openSelectMonth = false;
    this.openSelectYear = false;
    this.monthsSlide = undefined;
    this.loadingSlide = 'await';
    this.startDate = dateToDayList(defaultStartDate);
    this.endDate = dateToDayList(defaultEndDate);
    this.startDateSelect = null;
    this.endDateSelect = null;
    this.language = 'pt_BR';
    this.stateSelect = 'start';
    this.dtButtonPrev = null;
    this.dtButtonNext = null;
    this.dtSelectMonth = null;
    this.dtSelectYear = null;
  }
  /**
   * Return the validity of the input.
   */
  async clear() {
    this.startDateSelect = null;
    this.endDateSelect = null;
  }
  /**
   * startDateSelect. Function to output selected start date.
   */
  startDateSelectChanged() {
    this.bdsStartDate.emit({ value: this.startDateSelect });
  }
  /**
   * endDateSelect. Function to output selected end date.
   */
  endDateSelectChanged() {
    this.bdsEndDate.emit({ value: this.endDateSelect });
  }
  periodToSelectChanged(newValue, _oldValue) {
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
  prevDays(value) {
    const lenghtDays = [];
    for (let i = 0; i < value; i++) {
      lenghtDays.push(i);
    }
    return lenghtDays.map((item) => h("span", { key: `id${item}`, class: `space ${item}` }));
  }
  /**
   * selectDate. Function to select the desired date.
   */
  selectDate(value) {
    const changeSelected = new Date(value.year, value.month, value.date);
    if (this.stateSelect == 'start') {
      this.startDateSelect = changeSelected;
      this.endDateSelect = null;
    }
    if (this.stateSelect == 'end')
      this.endDateSelect = changeSelected;
    this.bdsClickDayButton.emit({ state: this.stateSelect });
  }
  /**
   * prevMonth. Function to rewind the date on the calendar slide.
   */
  prevMonth() {
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
    }
    else {
      return;
    }
  }
  /**
   * nextMonth. Function to advance the date on the calendar slide.
   */
  nextMonth() {
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
    }
    else {
      return;
    }
  }
  /**
   * checkCurrentDay. Function to check the current day.
   */
  checkCurrentDay(value) {
    const validateDate = fillDayList(value);
    const fullCurrDate = fillDate(THIS_DAY);
    if (validateDate == fullCurrDate)
      return true;
    else
      return false;
  }
  /**
   * checkDisableDay. Function to check the disable day.
   */
  checkDisableDay(value) {
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
  checkSelectedDay(value) {
    const validateDate = fillDayList(value);
    const startSelectedDate = this.startDateSelect ? fillDate(this.startDateSelect) : `0`;
    const endSelectedDate = this.endDateSelect ? fillDate(this.endDateSelect) : `0`;
    if (validateDate == startSelectedDate || validateDate == endSelectedDate)
      return true;
    else
      return false;
  }
  /**
   * checkPeriodDay. Function to check the period selected day.
   */
  checkPeriodDay(value) {
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
  checkPeriodStart(value) {
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
  checkPeriodEnd(value, lastItem) {
    const validateDate = lastItem;
    const validateDay = value.day == 6;
    const selectDate = fillDayList(value);
    const endSelectedDate = this.endDateSelect ? fillDate(this.endDateSelect) : `0`;
    const validateStartDate = selectDate == endSelectedDate;
    if (validateDate || validateDay || validateStartDate) {
      return true;
    }
  }
  renderSelectData(data, selected, ref) {
    const openSelect = ref == 'months' ? this.openSelectMonth : this.openSelectYear;
    const labelSelect = data.filter((obj) => obj.value === selected);
    const iconArrow = openSelect ? 'arrow-up' : 'arrow-down';
    return (h("div", { class: {
        datepicker__calendar__selectDate__select: true,
        [`datepicker__calendar__selectDate__select__${ref}`]: true,
      } }, h("button", { onFocus: () => data.length > 1 && this.openDateSelect(true, ref), onBlur: () => data.length > 1 && this.openDateSelect(false, ref), class: {
        datepicker__calendar__selectDate__select__input: true,
        datepicker__calendar__selectDate__select__input__disable: data.length <= 1,
        [`input--pressed`]: openSelect,
      }, "data-test": ref == 'months' ? this.dtSelectMonth : this.dtSelectYear }, h("bds-typo", { variant: "fs-14" }, labelSelect[0].label), h("div", { class: "icon-arrow" }, h("bds-icon", { size: "small", name: iconArrow, color: "inherit" }))), h("div", { class: {
        datepicker__calendar__selectDate__select__options: true,
        'datepicker__calendar__selectDate__select__options--open': openSelect,
      } }, data.map((option) => (h("bds-select-option", { value: option.value, key: option.value, onOptionSelected: (event) => this.handler(event, ref), selected: option.value == selected, onClick: () => this.openDateSelect(false, ref) }, option.label))))));
  }
  renderCarSlideBox(days, firstDayWeek) {
    return (h("div", { class: { datepicker__calendar__car__slide__box: true } }, this.prevDays(firstDayWeek), days.map((item, idx) => (h("div", { key: idx, class: {
        datepicker__calendar__car__slide__box__day: true,
        datepicker__calendar__car__slide__box__day__period: this.checkPeriodDay(item),
        datepicker__calendar__car__slide__box__day__start: this.checkPeriodStart(item),
        datepicker__calendar__car__slide__box__day__end: this.checkPeriodEnd(item, days.length === idx + 1),
      } }, h("bds-typo", { class: {
        datepicker__calendar__car__slide__box__day__typo: true,
        datepicker__calendar__car__slide__box__day__current: this.checkCurrentDay(item),
        datepicker__calendar__car__slide__box__day__selected: this.checkSelectedDay(item),
        datepicker__calendar__car__slide__box__day__disable: this.checkDisableDay(item),
      }, variant: "fs-14", onClick: () => this.selectDate(item) }, item.date))))));
  }
  render() {
    const futureMonth = changeMonths(this.language).filter((obj) => obj.value === this.monthsSlide[2].month);
    const futureYear = this.monthsSlide[2].year;
    return (h("div", { class: { datepicker__calendar: true, [`period`]: true } }, h("div", { class: { datepicker__calendar__selectDate: true } }, h("bds-icon", { class: {
        [`arrow-left`]: true,
        [`arrow-left__disable`]: fillDayList(this.monthsSlide[0].days[this.monthsSlide[0].days.length - 1]) <
          fillDayList(this.startDate),
        datepicker__calendar__selectDate__icon: true,
      }, name: "arrow-left", theme: "outline", size: "small", onClick: () => this.prevMonth(), dataTest: this.dtButtonPrev }), [
      this.renderSelectData(this.months, this.monthActivated, 'months'),
      this.renderSelectData(this.years, this.yearActivated, 'years'),
    ], h("bds-typo", { class: "datepicker__calendar__selectDate__futureMonth", variant: "fs-14" }, `${futureMonth[0].label}, ${futureYear}`), h("bds-icon", { class: {
        [`arrow-right`]: true,
        [`arrow-right__disable`]: fillDayList(this.monthsSlide[2].days[0]) > fillDayList(this.endDate),
        datepicker__calendar__selectDate__icon: true,
      }, name: "arrow-right", theme: "outline", size: "small", onClick: () => this.nextMonth(), dataTest: this.dtButtonNext })), h("div", null, h("div", { class: { datepicker__calendar__week: true } }, h("div", { class: { datepicker__calendar__week__present: true } }, this.week.map((item, idx) => (h("bds-typo", { variant: "fs-14", key: idx, class: `datepicker__calendar__week__day` }, item.charAt(0))))), h("div", { class: { datepicker__calendar__week__future: true } }, this.week.map((item, idx) => (h("bds-typo", { variant: "fs-14", key: idx, class: `datepicker__calendar__week__day` }, item.charAt(0)))))), h("div", { class: { datepicker__calendar__car: true, datepicker__calendar__car__period: true } }, h("div", { class: {
        datepicker__calendar__car__slide: true,
        animate__prev: this.animatePrev,
        animate__next: this.animateNext,
      } }, [
      this.renderCarSlideBox(this.monthsSlide[0].days, this.monthsSlide[0].days[0].day),
      this.renderCarSlideBox(this.monthsSlide[1].days, this.monthsSlide[1].days[0].day),
      this.renderCarSlideBox(this.monthsSlide[2].days, this.monthsSlide[2].days[0].day),
      this.renderCarSlideBox(this.monthsSlide[3].days, this.monthsSlide[3].days[0].day),
    ])))));
  }
  static get is() { return "bds-datepicker-period"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["../datepicker.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["../datepicker.css"]
    };
  }
  static get properties() {
    return {
      "startDate": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "DaysList",
          "resolved": "DaysList",
          "references": {
            "DaysList": {
              "location": "import",
              "path": "../datepicker-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "StartDate. Insert a limiter to select the date period."
        },
        "defaultValue": "dateToDayList(defaultStartDate)"
      },
      "endDate": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "DaysList",
          "resolved": "DaysList",
          "references": {
            "DaysList": {
              "location": "import",
              "path": "../datepicker-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "EndDate. Insert a limiter to select the date period."
        },
        "defaultValue": "dateToDayList(defaultEndDate)"
      },
      "startDateSelect": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "Date",
          "resolved": "Date",
          "references": {
            "Date": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "StartDateSelect. Insert a limiter to select the date period."
        },
        "defaultValue": "null"
      },
      "endDateSelect": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "Date",
          "resolved": "Date",
          "references": {
            "Date": {
              "location": "global"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "EndDateSelect. Insert a limiter to select the date period."
        },
        "defaultValue": "null"
      },
      "language": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "languages",
          "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
          "references": {
            "languages": {
              "location": "import",
              "path": "../../../utils/languages"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Language, Entered as one of the languages. Can be one of:\n'pt_BR', 'es_ES', 'en_US'."
        },
        "attribute": "language",
        "reflect": false,
        "defaultValue": "'pt_BR'"
      },
      "stateSelect": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "stateSelect",
          "resolved": "\"end\" | \"start\"",
          "references": {
            "stateSelect": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "EndDateSelect. Insert a limiter to select the date period."
        },
        "attribute": "state-select",
        "reflect": true,
        "defaultValue": "'start'"
      },
      "dtButtonPrev": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Data test is the prop to specifically test the component action object.\ndtButtonPrev is the data-test to button prev."
        },
        "attribute": "dt-button-prev",
        "reflect": false,
        "defaultValue": "null"
      },
      "dtButtonNext": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Data test is the prop to specifically test the component action object.\ndtButtonNext is the data-test to button next."
        },
        "attribute": "dt-button-next",
        "reflect": false,
        "defaultValue": "null"
      },
      "dtSelectMonth": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Data test is the prop to specifically test the component action object.\ndtSelectMonth is the data-test to select month."
        },
        "attribute": "dt-select-month",
        "reflect": false,
        "defaultValue": "null"
      },
      "dtSelectYear": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Data test is the prop to specifically test the component action object.\ndtSelectYear is the data-test to select year."
        },
        "attribute": "dt-select-year",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
  static get states() {
    return {
      "week": {},
      "months": {},
      "years": {},
      "monthActivated": {},
      "yearActivated": {},
      "animatePrev": {},
      "animateNext": {},
      "activeSelectYear": {},
      "openSelectMonth": {},
      "openSelectYear": {},
      "monthsSlide": {},
      "loadingSlide": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsStartDate",
        "name": "bdsStartDate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "bdsStartDate. Event to return selected date value."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsEndDate",
        "name": "bdsEndDate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "bdsEndDate. Event to return selected end date value."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsClickDayButton",
        "name": "bdsClickDayButton",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "bdsClickDayButton. Event to return when click on day button."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "clear": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Return the validity of the input.",
          "tags": []
        }
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "startDateSelect",
        "methodName": "startDateSelectChanged"
      }, {
        "propName": "endDateSelect",
        "methodName": "endDateSelectChanged"
      }, {
        "propName": "endDate",
        "methodName": "periodToSelectChanged"
      }, {
        "propName": "startDate",
        "methodName": "periodToSelectChanged"
      }];
  }
}
