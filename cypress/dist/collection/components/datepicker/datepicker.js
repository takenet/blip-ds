import { Host, h } from '@stencil/core';
import { defaultStartDate, defaultEndDate, fillDayList, dateToDayList, dateToInputDate, dateToTypeDate, typeDateToStringDate, } from '../../utils/calendar';
import { dateValidation } from '../../utils/validations';
import { getScrollParent, positionElement } from '../../utils/position-element';
import { termTranslate, messageTranslate } from '../../utils/languages';
export class DatePicker {
  constructor() {
    this.refActionElement = (el) => {
      this.actionElement = el;
    };
    this.refMenuElement = (el) => {
      this.menuElement = el;
    };
    this.refInputSetDate = (el) => {
      this.inputSetDate = el;
    };
    this.refInputSetEndDate = (el) => {
      this.inputSetEndDate = el;
    };
    this.refDatepickerPeriod = (el) => {
      this.datepickerPeriod = el;
    };
    this.refDatepickerSingle = (el) => {
      this.datepickerSingle = el;
    };
    /**
     * clearDatepicker. Function to clear datepicker
     */
    this.clearDate = () => {
      this.valueDate = null;
      this.bdsStartDate.emit({ value: null });
      if (this.typeOfDate == 'single') {
        this.datepickerSingle.clear();
      }
      else {
        this.datepickerPeriod.clear();
        this.valueEndDate = null;
        this.bdsEndDate.emit({ value: null });
        setTimeout(() => {
          var _a;
          (_a = this.inputSetDate) === null || _a === void 0 ? void 0 : _a.setFocus();
        }, 10);
      }
    };
    this.onInputDateSelected = (ev) => {
      const input = ev.target;
      this.valueDate = input.value;
      this.validationDateSelected(this.valueDate);
    };
    /**
     * validationDateSelected. Function to validate date field
     */
    this.validationDateSelected = (value) => {
      const formatData = typeDateToStringDate(value);
      const valueSelected = formatData && dateToDayList(formatData);
      const start = this.startDateLimit && dateToDayList(this.startDateLimit);
      const end = this.endDateLimit && dateToDayList(this.endDateLimit);
      if (!dateValidation(formatData)) {
        this.errorMsgDate = `${messageTranslate(this.language, 'dateFormatIsIncorrect')}!`;
      }
      else {
        if (fillDayList(valueSelected) < fillDayList(start) || fillDayList(valueSelected) > fillDayList(end)) {
          this.errorMsgDate = `${messageTranslate(this.language, 'betweenPeriodOf')} ${this.startDateLimit} - ${this.endDateLimit}`;
        }
        else {
          this.errorMsgDate = null;
          this.dateSelected = new Date(valueSelected.year, valueSelected.month, valueSelected.date);
        }
      }
    };
    this.onInputEndDateSelected = (ev) => {
      const input = ev.target;
      this.valueEndDate = input.value;
      this.validationEndDateSelected(this.valueEndDate);
    };
    /**
     * maskEndDateSelected. Function to add mask to the end date field
     */
    this.validationEndDateSelected = (value) => {
      const formatData = typeDateToStringDate(value);
      const formatValueDateSelected = typeDateToStringDate(this.valueDate);
      const valueSelected = formatData && dateToDayList(formatData);
      const start = formatValueDateSelected ? dateToDayList(formatValueDateSelected) : dateToDayList(this.startDateLimit);
      const end = this.endDateLimit && dateToDayList(this.endDateLimit);
      if (!dateValidation(formatData)) {
        this.errorMsgEndDate = `${messageTranslate(this.language, 'dateFormatIsIncorrect')}!`;
      }
      else {
        if (fillDayList(valueSelected) < fillDayList(start) || fillDayList(valueSelected) > fillDayList(end)) {
          this.errorMsgEndDate = `${messageTranslate(this.language, 'betweenPeriodOf')} ${formatValueDateSelected} - ${this.endDateLimit}`;
        }
        else {
          this.errorMsgEndDate = null;
          this.endDateSelected = new Date(valueSelected.year, valueSelected.month, valueSelected.date);
        }
      }
    };
    this.openDatepicker = () => {
      if (!this.disabled) {
        const positionValue = positionElement({
          actionElement: this.actionElement,
          changedElement: this.menuElement,
          intoView: this.intoView,
        });
        this.menupositionTop = positionValue.top;
        this.menupositionLeft = positionValue.left;
        this.open = true;
      }
    };
    this.clickConcludeDatepicker = () => {
      const data = this.typeOfDate === 'single'
        ? { startDate: typeDateToStringDate(this.valueDate) }
        : {
          startDate: typeDateToStringDate(this.valueDate),
          endDate: typeDateToStringDate(this.valueEndDate),
        };
      this.concludeDatepicker.emit(data);
      this.open = false;
      if (this.typeOfDate == 'period') {
        this.inputSetEndDate.removeFocus();
      }
    };
    this.onClickCloseButtom = () => {
      this.open = false;
    };
    this.onFocusDateSelect = () => {
      this.stateSelect = 'start';
    };
    this.onFocusEndDateSelect = () => {
      this.stateSelect = 'end';
    };
    this.open = false;
    this.stateSelect = 'start';
    this.dateSelected = null;
    this.endDateSelected = null;
    this.errorMsgDate = null;
    this.errorMsgEndDate = null;
    this.intoView = null;
    this.scrollingTop = 0;
    this.menupositionTop = 0;
    this.menupositionLeft = 0;
    this.valueDate = undefined;
    this.valueEndDate = undefined;
    this.typeOfDate = 'single';
    this.startDateLimit = defaultStartDate;
    this.endDateLimit = defaultEndDate;
    this.label = '';
    this.message = null;
    this.variantBanner = 'warning';
    this.language = 'pt_BR';
    this.disabled = false;
    this.valueDateSelected = null;
    this.valueEndDateSelected = null;
    this.dtInputStart = null;
    this.dtInputEnd = null;
    this.dtOutzone = null;
    this.dtButtonPrev = null;
    this.dtButtonNext = null;
    this.dtSelectMonth = null;
    this.dtSelectYear = null;
    this.dtButtonClear = null;
    this.dtButtonConfirm = null;
  }
  valueDateSelectedChanged() {
    this.valueDate = this.valueDateSelected && dateToInputDate(this.valueDateSelected);
    if (this.valueDate)
      this.validationDateSelected(this.valueDate);
  }
  valueEndDateSelectedChanged() {
    this.valueEndDate = this.valueEndDateSelected && dateToInputDate(this.valueEndDateSelected);
    if (this.valueEndDate)
      this.validationEndDateSelected(this.valueEndDate);
  }
  /**
   * startDateLimit validation.
   */
  startDateLimitChanged() {
    if (!dateValidation(this.startDateLimit)) {
      this.startDateLimit = defaultStartDate;
    }
  }
  /**
   * endDateLimit validation.
   */
  endDateLimitChanged() {
    const dlStartDate = dateToDayList(this.startDateLimit);
    const dlEndDate = dateToDayList(this.endDateLimit);
    if (!dateValidation(this.endDateLimit)) {
      this.endDateLimit = defaultEndDate;
    }
    if (fillDayList(dlEndDate) < fillDayList(dlStartDate)) {
      this.endDateLimit = `${dlEndDate.date.toString().padStart(2, '0')}/${(dlEndDate.month + 1)
        .toString()
        .padStart(2, '0')}/${dlStartDate.year + 1}`;
    }
  }
  dateSelectedChanged() {
    this.stateSelect = 'end';
  }
  componentWillLoad() {
    this.endDateLimitChanged();
    this.startDateLimitChanged();
    this.valueDateSelectedChanged();
    this.valueEndDateSelectedChanged();
    this.intoView = getScrollParent(this.element);
    if (this.valueDate)
      this.validationDateSelected(this.valueDate);
    if (this.valueEndDate)
      this.validationEndDateSelected(this.valueEndDate);
  }
  /**
   * whenClickCalendar. Function to output selected date.
   */
  whenClickCalendar(event) {
    var _a;
    const { detail: { value }, } = event;
    if (value == 'start') {
      (_a = this.inputSetEndDate) === null || _a === void 0 ? void 0 : _a.setFocus();
    }
  }
  /**
   * selectDate. Function to output selected date.
   */
  selectDate(event) {
    const { detail: { value }, } = event;
    this.dateSelected = value;
    this.bdsStartDate.emit({ value: this.dateSelected });
    this.valueDate = this.dateSelected && dateToTypeDate(this.dateSelected);
    this.errorMsgDate = null;
  }
  /**
   * selectEndDate. Function to issue selected end date..
   */
  selectEndDate(event) {
    const { detail: { value }, } = event;
    this.endDateSelected = value;
    this.bdsEndDate.emit({ value: this.endDateSelected });
    this.valueEndDate = this.endDateSelected && dateToTypeDate(this.endDateSelected);
    this.errorMsgEndDate = null;
  }
  render() {
    const menuPosition = {
      top: `${this.menupositionTop}px`,
      left: `${this.menupositionLeft}px`,
    };
    return (h(Host, null, h("div", { ref: this.refActionElement, class: { datepicker: true } }, this.typeOfDate == 'single' ? (h("div", { class: {
        datepicker__inputs: true,
        [`datepicker__inputs__${this.typeOfDate}`]: true,
        datepicker__inputs__open: this.open,
      } }, h("bds-input", { label: this.label.length > 0 ? this.label : termTranslate(this.language, 'setTheDate'), value: this.valueDate, disabled: this.disabled, type: "date", maxlength: 10, icon: "calendar", onClick: () => this.openDatepicker(), onBdsInput: (ev) => this.onInputDateSelected(ev), danger: this.errorMsgDate ? true : false, errorMessage: this.errorMsgDate, dataTest: this.dtInputStart }))) : (h("div", { class: {
        datepicker__inputs: true,
        [`datepicker__inputs__${this.typeOfDate}`]: true,
        datepicker__inputs__open: this.open,
      } }, h("bds-input", { ref: this.refInputSetDate, label: termTranslate(this.language, 'from'), value: this.valueDate, disabled: this.disabled, type: "date", maxlength: 10, icon: "calendar", onClick: () => this.openDatepicker(), onFocus: () => this.onFocusDateSelect(), onBdsInput: (ev) => this.onInputDateSelected(ev), danger: this.errorMsgDate ? true : false, errorMessage: this.errorMsgDate, dataTest: this.dtInputStart }), h("bds-input", { ref: this.refInputSetEndDate, label: termTranslate(this.language, 'to'), value: this.valueEndDate, disabled: this.disabled || !this.dateSelected, type: "date", maxlength: 10, icon: "calendar", onClick: () => this.openDatepicker(), onFocus: () => this.onFocusEndDateSelect(), onBdsInput: (ev) => this.onInputEndDateSelected(ev), danger: this.errorMsgEndDate ? true : false, errorMessage: this.errorMsgEndDate, dataTest: this.dtInputEnd }))), h("div", { ref: this.refMenuElement, class: {
        datepicker__menu: true,
        datepicker__menu__open: this.open,
      }, style: menuPosition }, this.message && (h("bds-grid", { margin: "b-2" }, h("bds-banner", { variant: this.variantBanner, context: "inside" }, this.message))), this.typeOfDate == 'single' ? (h("bds-datepicker-single", { ref: this.refDatepickerSingle, startDate: this.startDateLimit && dateToDayList(this.startDateLimit), endDate: this.endDateLimit && dateToDayList(this.endDateLimit), dateSelect: this.dateSelected, onBdsDateSelected: (event) => this.selectDate(event), language: this.language, dtButtonPrev: this.dtButtonPrev, dtButtonNext: this.dtButtonNext, dtSelectMonth: this.dtSelectMonth, dtSelectYear: this.dtSelectYear })) : (h("bds-datepicker-period", { ref: this.refDatepickerPeriod, startDate: this.startDateLimit && dateToDayList(this.startDateLimit), endDate: this.endDateLimit && dateToDayList(this.endDateLimit), startDateSelect: this.dateSelected, stateSelect: this.stateSelect, endDateSelect: this.endDateSelected, onBdsStartDate: (event) => this.selectDate(event), onBdsEndDate: (event) => this.selectEndDate(event), onBdsClickDayButton: (event) => this.whenClickCalendar(event), language: this.language, dtButtonPrev: this.dtButtonPrev, dtButtonNext: this.dtButtonNext, dtSelectMonth: this.dtSelectMonth, dtSelectYear: this.dtSelectYear })), h("div", { class: { datepicker__menu__footer: true } }, h("bds-button", { variant: "secondary", onClick: () => this.clearDate(), dataTest: this.dtButtonClear }, termTranslate(this.language, 'reset')), h("bds-button", { onClick: this.clickConcludeDatepicker, dataTest: this.dtButtonConfirm }, termTranslate(this.language, 'conclude'))))), this.open && (h("div", { class: { outzone: true }, onClick: () => this.onClickCloseButtom(), "data-test": this.dtOutzone }))));
  }
  static get is() { return "bds-datepicker"; }
  static get originalStyleUrls() {
    return {
      "$": ["datepicker.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["datepicker.css"]
    };
  }
  static get properties() {
    return {
      "typeOfDate": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "typeDate",
          "resolved": "\"period\" | \"single\"",
          "references": {
            "typeDate": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "TypeOfDate. Select type of date."
        },
        "attribute": "type-of-date",
        "reflect": false,
        "defaultValue": "'single'"
      },
      "startDateLimit": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "StartDateLimit. Insert a limiter to select the date period."
        },
        "attribute": "start-date-limit",
        "reflect": true,
        "defaultValue": "defaultStartDate"
      },
      "endDateLimit": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "EndDateLimit. Insert a limiter to select the date period."
        },
        "attribute": "end-date-limit",
        "reflect": true,
        "defaultValue": "defaultEndDate"
      },
      "label": {
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
          "text": "label in input, with he the input size increases."
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      },
      "message": {
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
          "text": "Message. Select type of date."
        },
        "attribute": "message",
        "reflect": false,
        "defaultValue": "null"
      },
      "variantBanner": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "BannerVariant",
          "resolved": "\"error\" | \"info\" | \"success\" | \"system\" | \"warning\"",
          "references": {
            "BannerVariant": {
              "location": "import",
              "path": "../banner/banner"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Message. Select type of date."
        },
        "attribute": "variant-banner",
        "reflect": true,
        "defaultValue": "'warning'"
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
              "path": "../../utils/languages"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Language, Entered as one of the languages. Can be one of:\r\n'pt_BR', 'es_ES', 'en_US'."
        },
        "attribute": "language",
        "reflect": false,
        "defaultValue": "'pt_BR'"
      },
      "disabled": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Disabled input."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "valueDateSelected": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Default value input."
        },
        "attribute": "value-date-selected",
        "reflect": true,
        "defaultValue": "null"
      },
      "valueEndDateSelected": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Default value input."
        },
        "attribute": "value-end-date-selected",
        "reflect": true,
        "defaultValue": "null"
      },
      "dtInputStart": {
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtInputStart is the data-test to input start."
        },
        "attribute": "dt-input-start",
        "reflect": false,
        "defaultValue": "null"
      },
      "dtInputEnd": {
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtInputEnd is the data-test to input end."
        },
        "attribute": "dt-input-end",
        "reflect": false,
        "defaultValue": "null"
      },
      "dtOutzone": {
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtOutzone is the data-test to outzone."
        },
        "attribute": "dt-outzone",
        "reflect": false,
        "defaultValue": "null"
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtButtonPrev is the data-test to button prev."
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtButtonNext is the data-test to button next."
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtSelectMonth is the data-test to select month."
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtSelectYear is the data-test to select year."
        },
        "attribute": "dt-select-year",
        "reflect": false,
        "defaultValue": "null"
      },
      "dtButtonClear": {
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtButtonClear is the data-test to button clear."
        },
        "attribute": "dt-button-clear",
        "reflect": false,
        "defaultValue": "null"
      },
      "dtButtonConfirm": {
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtButtonConfirm is the data-test to button confirm."
        },
        "attribute": "dt-button-confirm",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
  static get states() {
    return {
      "open": {},
      "stateSelect": {},
      "dateSelected": {},
      "endDateSelected": {},
      "errorMsgDate": {},
      "errorMsgEndDate": {},
      "intoView": {},
      "scrollingTop": {},
      "menupositionTop": {},
      "menupositionLeft": {},
      "valueDate": {},
      "valueEndDate": {}
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
          "text": "bdsStartDate. Event to return selected end date value."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "concludeDatepicker",
        "name": "concludeDatepicker",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "bdsStartDate. Event to return selected end date value."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "valueDateSelected",
        "methodName": "valueDateSelectedChanged"
      }, {
        "propName": "valueEndDateSelected",
        "methodName": "valueEndDateSelectedChanged"
      }, {
        "propName": "startDateLimit",
        "methodName": "startDateLimitChanged"
      }, {
        "propName": "endDateLimit",
        "methodName": "endDateLimitChanged"
      }, {
        "propName": "dateSelected",
        "methodName": "dateSelectedChanged"
      }];
  }
}
