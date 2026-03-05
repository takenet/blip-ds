import { h } from "@stencil/core";
import { THIS_DAY, weekDays, defaultStartDate, defaultEndDate, changeMonths, getYears, getMonths, getMonthsSlide, fillDayList, fillDate, dateToDayList, } from "../../../utils/calendar";
export class BdsdatepickerSingle {
    constructor() {
        this.monthActivated = this.dateSelect ? this.dateSelect.getMonth() : THIS_DAY.getMonth();
        this.yearActivated = this.dateSelect ? this.dateSelect.getFullYear() : THIS_DAY.getFullYear();
        this.animatePrev = false;
        this.animateNext = false;
        this.openSelectMonth = false;
        this.openSelectYear = false;
        this.loadingSlide = 'await';
        /**
         * EndDate. Insert a limiter to select the date period.
         */
        this.endDate = dateToDayList(defaultEndDate);
        /**
         * StartDate. Insert a limiter to select the date period.
         */
        this.startDate = dateToDayList(defaultStartDate);
        /**
         * dateSelect. Insert a limiter to select the date period.
         */
        this.dateSelect = null;
        /**
         * Language, Entered as one of the languages. Can be one of:
         * 'pt_BR', 'es_ES', 'en_US'.
         */
        this.language = 'pt_BR';
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonPrev is the data-test to button prev.
         */
        this.dtButtonPrev = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonNext is the data-test to button next.
         */
        this.dtButtonNext = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtSelectMonth is the data-test to select month.
         */
        this.dtSelectMonth = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtSelectYear is the data-test to select year.
         */
        this.dtSelectYear = null;
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
    }
    /**
     * Return the validity of the input.
     */
    async clear() {
        this.dateSelect = null;
    }
    periodToSelectChanged(newValue, _oldValue) {
        const oldDate = fillDayList(_oldValue);
        const newDate = fillDayList(newValue);
        if (newDate != oldDate) {
            this.monthActivated = this.startDate.month;
            this.yearActivated = this.startDate.year;
        }
    }
    /**
     * DateSelect. Function to output selected start date.
     */
    startDateSelectChanged() {
        this.bdsDateSelected.emit({ value: this.dateSelect });
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
        this.bdsDateSelected.emit({ value: changeSelected });
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
        const fullCurrDate = fillDate(THIS_DAY);
        if (fillDayList(value) == fullCurrDate)
            return true;
        else
            return false;
    }
    /**
     * checkDisableDay. Function to check the disable day.
     */
    checkDisableDay(value) {
        const startDateLimit = this.startDate ? fillDayList(this.startDate) : `0`;
        const endDateLimit = this.endDate ? fillDayList(this.endDate) : `9999999`;
        if (this.startDate && fillDayList(value) < startDateLimit) {
            return true;
        }
        if (this.endDate && fillDayList(value) > endDateLimit) {
            return true;
        }
    }
    /**
     * checkSelectedDay. Function to check the selected day.
     */
    checkSelectedDay(value) {
        const selectedDate = this.dateSelect ? fillDate(this.dateSelect) : `0`;
        if (fillDayList(value) == selectedDate)
            return true;
        else
            return false;
    }
    renderSelectData(data, selected, ref) {
        var _a;
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
            }, "data-test": ref == 'months' ? this.dtSelectMonth : this.dtSelectYear }, h("bds-typo", { variant: "fs-14" }, (_a = labelSelect[0]) === null || _a === void 0 ? void 0 : _a.label), h("div", { class: "icon-arrow" }, h("bds-icon", { size: "small", name: iconArrow, color: "inherit" }))), h("div", { class: {
                datepicker__calendar__selectDate__select__options: true,
                'datepicker__calendar__selectDate__select__options--open': openSelect,
            } }, data.map((option) => (h("bds-select-option", { value: option.value, key: option.value, onOptionSelected: (event) => this.handler(event, ref), selected: option.value == selected, onClick: () => this.openDateSelect(false, ref) }, option.label))))));
    }
    renderCarSlideBox(days, firstDayWeek) {
        return (h("div", { class: { datepicker__calendar__car__slide__box: true } }, this.prevDays(firstDayWeek), days.map((item, idx) => (h("div", { key: idx, class: {
                datepicker__calendar__car__slide__box__day: true,
            } }, h("bds-typo", { class: {
                datepicker__calendar__car__slide__box__day__typo: true,
                datepicker__calendar__car__slide__box__day__current: this.checkCurrentDay(item),
                datepicker__calendar__car__slide__box__day__selected: this.checkSelectedDay(item),
                datepicker__calendar__car__slide__box__day__disable: this.checkDisableDay(item),
            }, onClick: () => this.selectDate(item), variant: "fs-14" }, item.date))))));
    }
    render() {
        return (h("div", { key: 'a4499886b581c8430384ea0bf8b1736019df2b1b', class: { datepicker__calendar: true } }, h("div", { key: '6b8176041f5b059b5f4cfe425ab485c6aed9f0df', class: { datepicker__calendar__selectDate: true } }, h("bds-icon", { key: '97c1c72f2ace2ead031b4861ffe0aaedf908d1ee', class: {
                [`arrow-left`]: true,
                [`arrow-left__disable`]: fillDayList(this.monthsSlide[0].days[this.monthsSlide[0].days.length - 1]) <
                    fillDayList(this.startDate),
                datepicker__calendar__selectDate__icon: true,
            }, name: "arrow-left", theme: "outline", size: "small", onClick: () => this.prevMonth(), dataTest: this.dtButtonPrev }), [
            this.renderSelectData(this.months, this.monthActivated, 'months'),
            this.renderSelectData(this.years, this.yearActivated, 'years'),
        ], h("bds-icon", { key: 'efd3014aa54c115d1edaa20d1c6e7317d9a46320', class: {
                [`arrow-right`]: true,
                [`arrow-right__disable`]: fillDayList(this.monthsSlide[2].days[0]) > fillDayList(this.endDate),
                datepicker__calendar__selectDate__icon: true,
            }, name: "arrow-right", theme: "outline", size: "small", onClick: () => this.nextMonth(), dataTest: this.dtButtonNext })), h("div", { key: '51b5786dbb28817c47bbd7142c2a855ca344ae3e' }, h("div", { key: '954a1d57f92b3b2ddeb8b8ceb8abfa5b07eea838', class: { datepicker__calendar__week: true } }, this.week.map((item, idx) => (h("bds-typo", { variant: "fs-14", key: idx, class: `datepicker__calendar__week__day` }, item.charAt(0))))), h("div", { key: 'f8ffa2b768464db0c6158676ee5ba4640cba46f1', class: { datepicker__calendar__car: true } }, h("div", { key: '6f1ec713a6dc7254e26386a306b04b01da4a460a', class: {
                datepicker__calendar__car__slide: true,
                animate__prev: this.animatePrev,
                animate__next: this.animateNext,
            } }, [
            this.renderCarSlideBox(this.monthsSlide[0].days, this.monthsSlide[0].days[0].day),
            this.renderCarSlideBox(this.monthsSlide[1].days, this.monthsSlide[1].days[0].day),
            this.renderCarSlideBox(this.monthsSlide[2].days, this.monthsSlide[2].days[0].day),
        ])))));
    }
    static get is() { return "bds-datepicker-single"; }
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
            "endDate": {
                "type": "unknown",
                "attribute": "end-date",
                "mutable": false,
                "complexType": {
                    "original": "DaysList",
                    "resolved": "DaysList",
                    "references": {
                        "DaysList": {
                            "location": "import",
                            "path": "../datepicker-interface",
                            "id": "src/components/datepicker/datepicker-interface.ts::DaysList"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "EndDate. Insert a limiter to select the date period."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "dateToDayList(defaultEndDate)"
            },
            "startDate": {
                "type": "unknown",
                "attribute": "start-date",
                "mutable": false,
                "complexType": {
                    "original": "DaysList",
                    "resolved": "DaysList",
                    "references": {
                        "DaysList": {
                            "location": "import",
                            "path": "../datepicker-interface",
                            "id": "src/components/datepicker/datepicker-interface.ts::DaysList"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "StartDate. Insert a limiter to select the date period."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "dateToDayList(defaultStartDate)"
            },
            "dateSelect": {
                "type": "unknown",
                "attribute": "date-select",
                "mutable": true,
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "dateSelect. Insert a limiter to select the date period."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            },
            "language": {
                "type": "string",
                "attribute": "language",
                "mutable": false,
                "complexType": {
                    "original": "languages",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "languages": {
                            "location": "import",
                            "path": "../../../utils/languages",
                            "id": "src/utils/languages/index.ts::languages"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Language, Entered as one of the languages. Can be one of:\n'pt_BR', 'es_ES', 'en_US'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'pt_BR'"
            },
            "dtButtonPrev": {
                "type": "string",
                "attribute": "dt-button-prev",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "dtButtonNext": {
                "type": "string",
                "attribute": "dt-button-next",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "dtSelectMonth": {
                "type": "string",
                "attribute": "dt-select-month",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "dtSelectYear": {
                "type": "string",
                "attribute": "dt-select-year",
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
                "getter": false,
                "setter": false,
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
            "openSelectMonth": {},
            "openSelectYear": {},
            "monthsSlide": {},
            "loadingSlide": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsDateSelected",
                "name": "bdsDateSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "bdsDateSelected. Event to return selected date value."
                },
                "complexType": {
                    "original": "{ value: Date | null }",
                    "resolved": "{ value: Date; }",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
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
                            "location": "global",
                            "id": "global::Promise"
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
                "propName": "endDate",
                "methodName": "periodToSelectChanged"
            }, {
                "propName": "startDate",
                "methodName": "periodToSelectChanged"
            }, {
                "propName": "dateSelect",
                "methodName": "startDateSelectChanged"
            }];
    }
}
//# sourceMappingURL=datepicker-single.js.map
