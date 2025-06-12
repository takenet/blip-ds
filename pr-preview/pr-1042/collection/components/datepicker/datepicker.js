import { Host, h } from "@stencil/core";
import { defaultStartDate, defaultEndDate, fillDayList, dateToDayList, dateToInputDate, dateToTypeDate, typeDateToStringDate, } from "../../utils/calendar";
import { dateValidation } from "../../utils/validations";
import { getScrollParent, positionAbsoluteElement } from "../../utils/position-element";
import { termTranslate, messageTranslate } from "../../utils/languages";
export class DatePicker {
    constructor() {
        this.open = false;
        this.stateSelect = 'start';
        this.dateSelected = null;
        this.endDateSelected = null;
        this.errorMsgDate = null;
        this.errorMsgEndDate = null;
        this.intoView = null;
        this.scrollingTop = 0;
        /**
         * TypeOfDate. Select type of date.
         */
        this.typeOfDate = 'single';
        /**
         * StartDateLimit. Insert a limiter to select the date period.
         */
        this.startDateLimit = defaultStartDate;
        /**
         * EndDateLimit. Insert a limiter to select the date period.
         */
        this.endDateLimit = defaultEndDate;
        /**
         *  label in input, with he the input size increases.
         */
        this.label = '';
        /**
         * Message. Select type of date.
         */
        this.message = null;
        /**
         * Message. Select type of date.
         */
        this.variantBanner = 'warning';
        /**
         * Language, Entered as one of the languages. Can be one of:
         * 'pt_BR', 'es_ES', 'en_US'.
         */
        this.language = 'pt_BR';
        /**
         * Disabled input.
         */
        this.disabled = false;
        /**
         * Default value input.
         */
        this.valueDateSelected = null;
        /**
         * Default value input.
         */
        this.valueEndDateSelected = null;
        /**
         * Used to set drop position
         */
        this.positionOptions = 'auto';
        /**
         * Data test is the prop to specifically test the component action object.
         * dtInputStart is the data-test to input start.
         */
        this.dtInputStart = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtInputEnd is the data-test to input end.
         */
        this.dtInputEnd = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtOutzone is the data-test to outzone.
         */
        this.dtOutzone = null;
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
         * Data test is the prop to specifically test the component action object.
         * dtButtonClear is the data-test to button clear.
         */
        this.dtButtonClear = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonConfirm is the data-test to button confirm.
         */
        this.dtButtonConfirm = null;
        this.centerDropElement = (value) => {
            const arrayPosition = value.split('-');
            if ((arrayPosition[0] == 'left' || arrayPosition[0] == 'right') && arrayPosition[1] == 'center') {
                this.menuElement.style.top = `calc(50% - ${this.menuElement.offsetHeight / 2}px)`;
            }
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
                    this.inputSetDate?.setFocus();
                }, 10);
            }
        };
        this.onInputDateSelected = (ev) => {
            const input = ev.target;
            this.valueDate = input.value;
            if (!this.valueDate) {
                this.valueEndDate = null;
            }
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
                this.open = true;
            }
        };
        this.clickConcludeDatepicker = () => {
            if (this.typeOfDate == 'period') {
                if (this.valueEndDate) {
                    const data = {
                        startDate: typeDateToStringDate(this.valueDate),
                        endDate: typeDateToStringDate(this.valueEndDate),
                    };
                    this.open = false;
                    this.concludeDatepicker.emit(data);
                    this.inputSetEndDate.removeFocus();
                    this.errorMsgEndDate = null;
                }
                else {
                    if (!this.valueDate && !this.valueEndDate) {
                        this.open = false;
                        this.emptyConcludeDatepicker.emit();
                    }
                    else {
                        this.open = true;
                        this.errorMsgEndDate = messageTranslate(this.language, 'endDateIsEmpty');
                    }
                }
            }
            else {
                if (this.valueDate != null) {
                    const data = {
                        startDate: typeDateToStringDate(this.valueDate),
                    };
                    this.concludeDatepicker.emit(data);
                }
                this.open = false;
            }
        };
        this.onFocusDateSelect = () => {
            this.stateSelect = 'start';
        };
        this.onFocusEndDateSelect = () => {
            this.stateSelect = 'end';
        };
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
    componentDidLoad() {
        if (this.positionOptions != 'auto') {
            this.centerDropElement(this.positionOptions);
            this.setDefaultPlacement(this.positionOptions);
        }
        else {
            this.validatePositionDrop();
        }
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
    setDefaultPlacement(value) {
        if (this.typeOfDate == 'single') {
            this.menuElement.classList.add(`datepicker__menu__single__${value}`);
        }
        else {
            this.menuElement.classList.add(`datepicker__menu__period__${value}`);
        }
    }
    validatePositionDrop() {
        const positionValue = positionAbsoluteElement({
            actionElement: this.element,
            changedElement: this.menuElement,
            intoView: this.intoView,
        });
        if (this.typeOfDate == 'single') {
            this.menuElement.classList.add(`datepicker__menu__single__${positionValue.y}-${positionValue.x}`);
        }
        else {
            this.menuElement.classList.add(`datepicker__menu__period__${positionValue.y}-${positionValue.x}`);
        }
    }
    /**
     * whenClickCalendar. Function to output selected date.
     */
    whenClickCalendar(event) {
        const { detail: { value }, } = event;
        if (value == 'start') {
            this.inputSetEndDate?.setFocus();
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
        return (h(Host, { key: '2dd7618e8fafd6db281dec46f33753299e07c2bb', class: { datepicker: true } }, this.typeOfDate == 'single' ? (h("div", { class: {
                datepicker__inputs: true,
                [`datepicker__inputs__${this.typeOfDate}`]: true,
                datepicker__inputs__open: this.open,
            } }, h("bds-input", { class: "input-start", label: this.label.length > 0 ? this.label : termTranslate(this.language, 'setTheDate'), value: this.valueDate, disabled: this.disabled, type: "date", maxlength: 10, icon: "calendar", onClick: () => this.openDatepicker(), onBdsInput: (ev) => this.onInputDateSelected(ev), danger: this.errorMsgDate ? true : false, errorMessage: this.errorMsgDate, dataTest: this.dtInputStart }))) : (h("div", { class: {
                datepicker__inputs: true,
                [`datepicker__inputs__${this.typeOfDate}`]: true,
                datepicker__inputs__open: this.open,
            } }, h("bds-input", { class: "input-start", ref: this.refInputSetDate, label: termTranslate(this.language, 'from'), value: this.valueDate, disabled: this.disabled, type: "date", maxlength: 10, icon: "calendar", onClick: () => this.openDatepicker(), onFocus: () => this.onFocusDateSelect(), onBdsInput: (ev) => this.onInputDateSelected(ev), danger: this.errorMsgDate ? true : false, errorMessage: this.errorMsgDate, dataTest: this.dtInputStart }), h("bds-input", { class: "input-end", ref: this.refInputSetEndDate, label: termTranslate(this.language, 'to'), value: this.valueEndDate, disabled: this.disabled || this.errorMsgDate ? true : false || !this.dateSelected, type: "date", maxlength: 10, icon: "calendar", onClick: () => this.openDatepicker(), onFocus: () => this.onFocusEndDateSelect(), onBdsInput: (ev) => this.onInputEndDateSelected(ev), danger: this.errorMsgEndDate ? true : false, errorMessage: this.errorMsgEndDate, dataTest: this.dtInputEnd }))), h("div", { key: 'e1472753b1ae3469598a77a071506953e023c035', ref: this.refMenuElement, class: {
                datepicker__menu: true,
                datepicker__menu__open: this.open,
            } }, this.message && (h("bds-grid", { key: '4bace4cd26638457b0a0e3e7cd86c94566705b38', margin: "b-2" }, h("bds-banner", { key: '193fccda3092aacc5eb29da2384d0beadc752ed5', variant: this.variantBanner, context: "inside" }, this.message))), this.typeOfDate == 'single' ? (h("bds-datepicker-single", { ref: this.refDatepickerSingle, startDate: this.startDateLimit && dateToDayList(this.startDateLimit), endDate: this.endDateLimit && dateToDayList(this.endDateLimit), dateSelect: this.dateSelected, onBdsDateSelected: (event) => this.selectDate(event), language: this.language, dtButtonPrev: this.dtButtonPrev, dtButtonNext: this.dtButtonNext, dtSelectMonth: this.dtSelectMonth, dtSelectYear: this.dtSelectYear })) : (h("bds-datepicker-period", { ref: this.refDatepickerPeriod, startDate: this.startDateLimit && dateToDayList(this.startDateLimit), endDate: this.endDateLimit && dateToDayList(this.endDateLimit), startDateSelect: this.dateSelected, stateSelect: this.stateSelect, endDateSelect: this.endDateSelected, onBdsStartDate: (event) => this.selectDate(event), onBdsEndDate: (event) => this.selectEndDate(event), onBdsClickDayButton: (event) => this.whenClickCalendar(event), language: this.language, dtButtonPrev: this.dtButtonPrev, dtButtonNext: this.dtButtonNext, dtSelectMonth: this.dtSelectMonth, dtSelectYear: this.dtSelectYear })), h("div", { key: 'd3f16ed6e11a167522e4c11144c177837d569695', class: { datepicker__menu__footer: true } }, h("bds-button", { key: '5c14cc95392bd57aa8b24144ea41ef3764d68265', class: "bt-reset", size: "short", variant: "secondary", onClick: () => this.clearDate(), dataTest: this.dtButtonClear }, termTranslate(this.language, 'reset')), h("bds-button", { key: '4530e0d14fbcdf25174ed1f7560f4b8a2357a7aa', class: "bt-conclude", size: "short", onClick: this.clickConcludeDatepicker, dataTest: this.dtButtonConfirm }, termTranslate(this.language, 'conclude')))), this.open && (h("div", { key: '07fe0b04d1d922184ba993bc70eee9de13b97596', class: { outzone: true }, onClick: () => this.clickConcludeDatepicker(), "data-test": this.dtOutzone }))));
    }
    static get is() { return "bds-datepicker"; }
    static get encapsulation() { return "shadow"; }
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
                "attribute": "type-of-date",
                "mutable": false,
                "complexType": {
                    "original": "typeDate",
                    "resolved": "\"period\" | \"single\"",
                    "references": {
                        "typeDate": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/datepicker/datepicker.tsx",
                            "id": "src/components/datepicker/datepicker.tsx::typeDate"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "TypeOfDate. Select type of date."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'single'"
            },
            "startDateLimit": {
                "type": "string",
                "attribute": "start-date-limit",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "defaultStartDate"
            },
            "endDateLimit": {
                "type": "string",
                "attribute": "end-date-limit",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "defaultEndDate"
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "message": {
                "type": "string",
                "attribute": "message",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "variantBanner": {
                "type": "string",
                "attribute": "variant-banner",
                "mutable": true,
                "complexType": {
                    "original": "BannerVariant",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"system\" | \"warning\"",
                    "references": {
                        "BannerVariant": {
                            "location": "import",
                            "path": "../banner/banner",
                            "id": "src/components/banner/banner.tsx::BannerVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Message. Select type of date."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'warning'"
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
                            "path": "../../utils/languages",
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
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "valueDateSelected": {
                "type": "string",
                "attribute": "value-date-selected",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "null"
            },
            "valueEndDateSelected": {
                "type": "string",
                "attribute": "value-end-date-selected",
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
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "null"
            },
            "positionOptions": {
                "type": "string",
                "attribute": "position-options",
                "mutable": false,
                "complexType": {
                    "original": "DropdownPostionType",
                    "resolved": "\"auto\" | \"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"left-bottom\" | \"left-center\" | \"left-top\" | \"right-bottom\" | \"right-center\" | \"right-top\" | \"top-center\" | \"top-left\" | \"top-right\"",
                    "references": {
                        "DropdownPostionType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/datepicker/datepicker.tsx",
                            "id": "src/components/datepicker/datepicker.tsx::DropdownPostionType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Used to set drop position"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'auto'"
            },
            "dtInputStart": {
                "type": "string",
                "attribute": "dt-input-start",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtInputStart is the data-test to input start."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "dtInputEnd": {
                "type": "string",
                "attribute": "dt-input-end",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtInputEnd is the data-test to input end."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "dtOutzone": {
                "type": "string",
                "attribute": "dt-outzone",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtOutzone is the data-test to outzone."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
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
            },
            "dtButtonClear": {
                "type": "string",
                "attribute": "dt-button-clear",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonClear is the data-test to button clear."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "dtButtonConfirm": {
                "type": "string",
                "attribute": "dt-button-confirm",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonConfirm is the data-test to button confirm."
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
            "open": {},
            "stateSelect": {},
            "dateSelected": {},
            "endDateSelected": {},
            "errorMsgDate": {},
            "errorMsgEndDate": {},
            "intoView": {},
            "scrollingTop": {},
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
            }, {
                "method": "emptyConcludeDatepicker",
                "name": "emptyConcludeDatepicker",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "emptyConcludeDatepicker. Event to emit when the datepicker is concluded without any date selected."
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
//# sourceMappingURL=datepicker.js.map
