import { Build, Host, forceUpdate, h, } from "@stencil/core";
import { warnLegacyValue, warnOnce } from "../../utils/deprecation";
import { UaiFormControl } from "../../utils/uai-form-control";
import { UaiOverlay } from "../../utils/uai-overlay";
import { CalendarDays, CalendarHeader, CalendarList, YEARS_PER_PAGE, addMonths, clampIso, dateForKey, outOfRange, parseIso, toIso, todayIso, } from "../../utils/uai-calendar";
import { displayToIso, groupDigits, isoToDisplay, regionalDateFormat } from "../uai-input-date/uai-input-date-format";
import { datepickerTexts, } from "./uai-datepicker-interface";
const TAG = 'uai-datepicker';
const SIZES = ['short', 'medium'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
const TYPES = ['single', 'period'];
const LEGACY_DATE = /^(\d{2})\/(\d{2})\/(\d{4})$/;
const BANNER_ICONS = {
    system: 'info',
    info: 'info',
    success: 'checkball',
    warning: 'warning',
    error: 'error',
};
let instances = 0;
/**
 * Field to choose a date or a period in the UAI calendar. With typeOfDate "single" (default) the panel shows a month
 * and a date field; with "period" it shows two months side by side with the "Starts" and "Ends" fields, fills the days
 * between them and previews the period under the pointer. The choice is a draft until Apply; Reset clears it and
 * closing without applying discards it. Dates are ISO YYYY-MM-DD. Use it for filters and reports over a period, or
 * when the choice should be confirmed. Pair with a visible label. Avoid it for a single date typed in a form (use
 * uai-input-date). Wrap the app in UaiThemeProvider.
 *
 * @part input-container - The field that shows the chosen date or period and opens the panel.
 * @part input__message - The helper or error message below the field.
 * @part panel - The floating panel with the calendars, the date fields and the buttons.
 * @part calendar-arrow - The previous and next buttons of a calendar header.
 * @part calendar-picker - The month and year buttons of a calendar header.
 * @part calendar-day - Each day button of the calendars.
 * @part calendar-option - Each month or year in their pickers.
 * @part date-input - The date fields inside the panel.
 * @part message - The message shown inside the panel.
 */
export class UaiDatepicker {
    constructor() {
        this.isOpen = false;
        this.view = 'days';
        /** The month on the left (or the only month), as an ISO date on its first day. */
        this.shownMonth = todayIso().slice(0, 8) + '01';
        /** The day with the focus in the grids. */
        this.focusedDate = todayIso();
        this.firstYear = 0;
        this.slide = null;
        /** The draft: what the person chooses before applying. */
        this.draftStart = null;
        this.draftEnd = null;
        /** What the date fields of the panel show while being typed. */
        this.typed = { start: null, end: null };
        this.hovered = null;
        this.disabledByForm = false;
        this.focusGrid = false;
        this.baseId = `uai-datepicker-${++instances}`;
        /** One date or a period. Can be one of: 'single' (default), 'period'. */
        this.typeOfDate = 'single';
        /** Message shown inside the panel, above the buttons, such as a rule about the period. */
        this.message = null;
        /** Tone of the message inside the panel. Can be one of: 'system', 'info', 'success', 'warning' (default), 'error'. */
        this.variantBanner = 'warning';
        /** Language of the texts and of the calendar. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'. */
        this.language = 'pt_BR';
        /** If true, the field cannot be used and is left out of the form data. */
        this.disabled = false;
        /** Chosen date, or the start of the period, as ISO YYYY-MM-DD (the legacy DD/MM/YYYY still works, with a warning). */
        this.valueDateSelected = null;
        /** End of the period, as ISO YYYY-MM-DD (the legacy DD/MM/YYYY still works, with a warning). */
        this.valueEndDateSelected = null;
        /**
         * Side and alignment of the panel. Can be 'auto' (default) or a side and an edge such as 'bottom-left',
         * 'bottom-right', 'top-left', 'top-right'. 'top-center' and 'bottom-center' keep only the side; the right and
         * left sides of the legacy fall back to 'auto'.
         */
        this.positionOptions = 'auto';
        /** Height of the field. Can be one of: 'short', 'medium' (default). */
        this.size = 'medium';
        /** Message below the field that helps to fill it. */
        this.helperMessage = '';
        /** If true, shows the error state and errorMessage. */
        this.danger = false;
        /** Message below the field while danger is true. */
        this.errorMessage = '';
        /** Accessible name of the field when the visible label is not enough. */
        this.ariaLabel = null;
        /** Data test id of the start date field of the panel (or the only one). */
        this.dtInputStart = null;
        /** Data test id of the end date field of the panel. */
        this.dtInputEnd = null;
        /** Data test id of the field that opens the panel. Kept from bds-datepicker, where it was the outside area. */
        this.dtOutzone = null;
        /** Data test id of the previous month button. */
        this.dtButtonPrev = null;
        /** Data test id of the next month button. */
        this.dtButtonNext = null;
        /** Data test id of the month button. */
        this.dtSelectMonth = null;
        /** Data test id of the year button. */
        this.dtSelectYear = null;
        /** Data test id of the Reset button. */
        this.dtButtonClear = null;
        /** Data test id of the Apply button. */
        this.dtButtonConfirm = null;
        this.onOverlayClose = (reason) => {
            var _a;
            if (this.isOpen)
                this.isOpen = false;
            if (reason === 'escape')
                (_a = this.trigger) === null || _a === void 0 ? void 0 : _a.focus();
        };
        // ---- choosing ------------------------------------------------------------------------------
        // A single date is the start. In a period, a click starts it, the next click after the start ends it, and a click
        // before the start (or after a complete period) starts again.
        this.pick = (iso) => {
            if (outOfRange(iso, this.min, this.max))
                return;
            this.focusedDate = iso;
            this.typed = { start: null, end: null };
            if (!this.isPeriod || !this.draftStart || this.draftEnd || iso < this.draftStart) {
                this.setDraft(iso, null);
            }
            else {
                this.setDraft(this.draftStart, iso);
            }
        };
        this.apply = () => {
            var _a;
            if (!this.canApply)
                return;
            this.valueDateSelected = this.draftStart;
            this.valueEndDateSelected = this.isPeriod ? this.draftEnd : null;
            if (this.draftStart) {
                this.uaiConcludeDatepicker.emit(this.isPeriod ? { startDate: this.draftStart, endDate: this.draftEnd } : { startDate: this.draftStart });
            }
            else {
                this.uaiEmptyConcludeDatepicker.emit();
            }
            this.closePanel();
            (_a = this.trigger) === null || _a === void 0 ? void 0 : _a.focus();
        };
        this.reset = () => {
            this.setDraft(null, null);
            this.typed = { start: null, end: null };
        };
        this.rangeOf = (iso) => {
            var _a;
            if (!this.isPeriod || !this.draftStart)
                return null;
            const end = (_a = this.draftEnd) !== null && _a !== void 0 ? _a : (this.hovered && this.hovered > this.draftStart ? this.hovered : null);
            if (!end || end === this.draftStart)
                return null;
            if (iso === this.draftStart)
                return 'start';
            if (iso === end)
                return 'end';
            return iso > this.draftStart && iso < end ? 'between' : null;
        };
        // ---- keyboard and views --------------------------------------------------------------------
        this.onDayKeyDown = (event) => {
            const target = dateForKey(this.focusedDate, event);
            if (target) {
                event.preventDefault();
                this.focusedDate = clampIso(target, this.min, this.max);
                this.showMonthOf(this.focusedDate);
                this.focusGrid = true;
                forceUpdate(this.el);
            }
            else if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.pick(this.focusedDate);
            }
        };
        this.onView = (view, month) => {
            this.shownMonth = month;
            if (view === 'years')
                this.firstYear = parseIso(month).year - 4;
            this.slide = 'view';
            this.view = view;
        };
        // A month or year picked in the pickers of the right month moves the left one too, a month before.
        this.pickMonth = (month, offset) => {
            const { year } = parseIso(addMonths(this.shownMonth, offset));
            this.shownMonth = addMonths(toIso(year, month, 1), -offset);
            this.slide = 'view';
            this.view = 'days';
        };
        this.pickYear = (year, offset) => {
            const { month } = parseIso(addMonths(this.shownMonth, offset));
            this.shownMonth = addMonths(toIso(year, month, 1), -offset);
            this.slide = 'view';
            this.view = 'months';
        };
    }
    /** Opens the panel. */
    async open() {
        this.openPanel(false);
    }
    /** Closes the panel, discarding the draft. */
    async close() {
        this.closePanel();
    }
    /** Clears the chosen date or period. */
    async clear() {
        this.valueDateSelected = null;
        this.valueEndDateSelected = null;
        this.resetDraft();
    }
    valueChanged() {
        this.syncFormValue();
    }
    positionChanged() {
        var _a;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.setPlacement(this.placement);
    }
    // The focus moving to something outside the field and the panel closes it, discarding the draft.
    onFocusOut(event) {
        var _a;
        const next = event.relatedTarget;
        if (next && !this.el.contains(next) && !((_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.contains(next)))
            this.closePanel();
    }
    componentWillLoad() {
        var _a;
        if (typeof ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === 'function') {
            const initial = { start: this.startValue, end: this.endValue };
            this.formControl = new UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.formValue(initial.start, initial.end),
                onReset: () => {
                    this.valueDateSelected = initial.start;
                    this.valueEndDateSelected = initial.end;
                },
                onDisabledChange: (disabled) => {
                    queueMicrotask(() => {
                        var _a, _b;
                        const formDisabled = (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : disabled;
                        if (!this.disabled && this.disabledByForm !== formDisabled)
                            this.disabledByForm = formDisabled;
                        if (formDisabled)
                            this.closePanel();
                    });
                },
            });
            this.syncFormValue();
        }
        if (Build.isDev && this.label === '' && !this.ariaLabel) {
            warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
        }
    }
    componentDidLoad() {
        if (this.trigger && this.panel) {
            this.overlay = new UaiOverlay(Object.assign({ trigger: this.trigger, panel: this.panel, onClose: this.onOverlayClose }, this.placement));
        }
    }
    componentDidRender() {
        var _a, _b, _c;
        if (this.isOpen && this.overlay && !this.overlay.isOpen)
            this.overlay.open();
        if (this.isOpen)
            (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.update();
        if (this.isOpen && this.focusGrid) {
            this.focusGrid = false;
            (_c = (_b = this.panel) === null || _b === void 0 ? void 0 : _b.querySelector(`[data-iso="${this.focusedDate}"]`)) === null || _c === void 0 ? void 0 : _c.focus();
        }
    }
    disconnectedCallback() {
        var _a;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    formResetCallback() {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.reset();
    }
    formDisabledCallback(disabled) {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setDisabled(disabled);
    }
    // ---- values --------------------------------------------------------------------------------
    // ISO dates from the props: ISO as is, the legacy DD/MM/YYYY converted with a warning, anything else ignored.
    iso(value, prop) {
        if (!value)
            return null;
        if (parseIso(value))
            return value;
        const legacy = LEGACY_DATE.exec(value);
        if (legacy) {
            const iso = `${legacy[3]}-${legacy[2]}-${legacy[1]}`;
            if (parseIso(iso)) {
                warnLegacyValue(TAG, prop, value, iso);
                return iso;
            }
        }
        warnOnce(TAG, `${prop}-invalid`, `${prop} must be an ISO date (YYYY-MM-DD).`);
        return null;
    }
    get startValue() {
        return this.iso(this.valueDateSelected, 'valueDateSelected');
    }
    get endValue() {
        return this.isPeriod ? this.iso(this.valueEndDateSelected, 'valueEndDateSelected') : null;
    }
    get min() {
        return this.iso(this.startDateLimit, 'startDateLimit');
    }
    get max() {
        return this.iso(this.endDateLimit, 'endDateLimit');
    }
    get isPeriod() {
        if (TYPES.includes(this.typeOfDate))
            return this.typeOfDate === 'period';
        warnLegacyValue(TAG, 'typeOfDate', this.typeOfDate, 'single');
        return false;
    }
    get languageValue() {
        if (LANGUAGES.includes(this.language))
            return this.language;
        warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
        return 'pt_BR';
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
        warnLegacyValue(TAG, 'size', this.size, 'medium');
        return 'medium';
    }
    get placement() {
        const position = String(this.positionOptions || 'auto');
        if (position === 'auto')
            return {};
        const [side, edge] = position.split('-');
        if (side !== 'top' && side !== 'bottom') {
            warnLegacyValue(TAG, 'positionOptions', position, 'auto');
            return {};
        }
        const align = edge === 'left' || edge === 'start' ? 'start' : edge === 'right' || edge === 'end' ? 'end' : undefined;
        return { side, align };
    }
    get isDisabled() {
        return this.disabled || this.disabledByForm;
    }
    formValue(start, end) {
        if (!start)
            return null;
        if (!this.isPeriod)
            return start;
        if (!this.name)
            return null;
        const data = new FormData();
        data.append(this.name, start);
        if (end)
            data.append(this.name, end);
        return data;
    }
    syncFormValue() {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(this.formValue(this.startValue, this.endValue));
    }
    // ---- panel ---------------------------------------------------------------------------------
    resetDraft() {
        this.draftStart = this.startValue;
        this.draftEnd = this.endValue;
        this.typed = { start: null, end: null };
        this.hovered = null;
    }
    // The panel starts on the chosen date (or today, within the limits); a period shows it and the next month.
    openPanel(focusGrid) {
        var _a;
        if (this.isDisabled)
            return;
        if (!this.isOpen) {
            this.resetDraft();
            const start = clampIso((_a = this.draftStart) !== null && _a !== void 0 ? _a : todayIso(), this.min, this.max);
            this.focusedDate = start;
            this.shownMonth = this.firstOfMonth(start);
            if (this.isPeriod && this.max && this.firstOfMonth(this.max) === this.shownMonth) {
                this.shownMonth = addMonths(this.shownMonth, -1);
            }
            this.view = 'days';
            this.slide = null;
            this.isOpen = true;
        }
        this.focusGrid = focusGrid;
        if (focusGrid)
            forceUpdate(this.el);
    }
    closePanel(reason = 'api') {
        var _a;
        if (!this.isOpen)
            return;
        this.isOpen = false;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.close(reason);
    }
    firstOfMonth(iso) {
        return `${iso.slice(0, 8)}01`;
    }
    get monthsShown() {
        return this.isPeriod ? 2 : 1;
    }
    // Shows a month: the grids move only when it is not already in view, sliding from the side it comes from.
    showMonthOf(iso) {
        const target = this.firstOfMonth(iso);
        const last = addMonths(this.shownMonth, this.monthsShown - 1);
        if (target >= this.shownMonth && target <= last)
            return;
        const next = target > last ? addMonths(target, 1 - this.monthsShown) : target;
        this.slide = next > this.shownMonth ? 'next' : 'previous';
        this.shownMonth = next;
    }
    turn(months) {
        this.slide = months > 0 ? 'next' : 'previous';
        this.shownMonth = addMonths(this.shownMonth, months);
    }
    setDraft(start, end) {
        if (start !== this.draftStart)
            this.uaiStartDate.emit({ value: start });
        if (this.isPeriod && end !== this.draftEnd)
            this.uaiEndDate.emit({ value: end });
        this.draftStart = start;
        this.draftEnd = end;
    }
    get canApply() {
        return !this.isPeriod || !this.draftStart || !!this.draftEnd;
    }
    // ---- date fields of the panel --------------------------------------------------------------
    onTyped(edge, event) {
        const input = event.target;
        const digits = input.value.replace(/\D/g, '').slice(0, 8);
        const display = groupDigits(digits);
        input.value = display;
        this.typed = Object.assign(Object.assign({}, this.typed), { [edge]: display });
        const iso = displayToIso(digits);
        if (!iso || outOfRange(iso, this.min, this.max))
            return;
        if (edge === 'start')
            this.setDraft(iso, this.draftEnd && this.draftEnd >= iso ? this.draftEnd : null);
        else if (this.draftStart && iso >= this.draftStart)
            this.setDraft(this.draftStart, iso);
        this.focusedDate = iso;
        this.showMonthOf(iso);
    }
    fieldText(edge) {
        const typed = this.typed[edge];
        if (typed !== null)
            return typed;
        return isoToDisplay(edge === 'start' ? this.draftStart : this.draftEnd);
    }
    fieldInvalid(edge) {
        const typed = this.typed[edge];
        if (!typed)
            return false;
        const iso = displayToIso(typed.replace(/\D/g, ''));
        return typed.replace(/\D/g, '').length === 8 && (!iso || outOfRange(iso, this.min, this.max));
    }
    // ---- render --------------------------------------------------------------------------------
    renderField(edge, label, dataTest) {
        const id = `${this.baseId}-${edge}`;
        const invalid = this.fieldInvalid(edge);
        return (h("div", { class: { field: true, 'field--danger': invalid } }, h("label", { class: "field__label", for: id }, h("uai-typo", { variant: "caption", bold: "semibold", tag: "span", margin: false }, label)), h("input", { id: id, class: "field__input", part: "date-input", type: "text", inputMode: "numeric", autocomplete: "off", maxLength: regionalDateFormat().placeholder.length, placeholder: regionalDateFormat().placeholder, value: this.fieldText(edge), "aria-invalid": invalid ? 'true' : null, "data-test": dataTest, onInput: (event) => this.onTyped(edge, event), onKeyDown: (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    this.apply();
                }
            } })));
    }
    renderMonth(offset) {
        const language = this.languageValue;
        const month = addMonths(this.shownMonth, offset);
        const { year, month: monthIndex } = parseIso(month);
        const min = parseIso(this.min);
        const max = parseIso(this.max);
        const last = this.monthsShown - 1;
        const position = this.view === 'days' ? year * 12 + monthIndex : year;
        const limit = (date) => (this.view === 'days' ? date.year * 12 + date.month : date.year);
        const atMin = !!min && (this.view === 'years' ? this.firstYear <= min.year : position - offset <= limit(min));
        const atMax = !!max && (this.view === 'years' ? this.firstYear + YEARS_PER_PAGE - 1 >= max.year : position + (last - offset) >= limit(max));
        return (h("div", { class: "month" }, h(CalendarHeader, { year: year, month: monthIndex, view: this.view, language: language, showPrevious: offset === 0, showNext: offset === last, disablePrevious: atMin, disableNext: atMax, onPrevious: () => (this.view === 'years' ? ((this.firstYear -= YEARS_PER_PAGE), (this.slide = 'previous')) : this.turn(this.view === 'months' ? -12 : -1)), onNext: () => (this.view === 'years' ? ((this.firstYear += YEARS_PER_PAGE), (this.slide = 'next')) : this.turn(this.view === 'months' ? 12 : 1)), onView: (view) => this.onView(view, addMonths(month, -offset)), dataTest: { previous: this.dtButtonPrev, next: this.dtButtonNext, month: this.dtSelectMonth, year: this.dtSelectYear } })));
    }
    renderBody(offset) {
        var _a, _b, _c, _d;
        const language = this.languageValue;
        const month = addMonths(this.shownMonth, offset);
        const { year, month: monthIndex } = parseIso(month);
        const texts = datepickerTexts(language);
        const edge = offset === 0 ? 'start' : 'end';
        const key = this.view === 'years' ? `years-${this.firstYear}` : this.view === 'months' ? `months-${year}` : `days-${month}`;
        return (h("div", { class: "month__body" }, this.renderField(edge, this.isPeriod ? (edge === 'start' ? texts.start : texts.end) : texts.date, edge === 'start' ? this.dtInputStart : this.dtInputEnd), h("div", { key: key, class: { calendar__body: true, [`calendar__body--${this.slide}`]: !!this.slide } }, this.view === 'days' ? (h(CalendarDays, { year: year, month: monthIndex, language: language, focused: this.focusedDate, min: (_a = this.min) !== null && _a !== void 0 ? _a : undefined, max: (_b = this.max) !== null && _b !== void 0 ? _b : undefined, idPrefix: `${this.baseId}-day`, isSelected: (iso) => iso === this.draftStart || iso === this.draftEnd, rangeOf: this.rangeOf, onPick: this.pick, onKeyDown: this.onDayKeyDown, onHover: (iso) => {
                if (this.isPeriod && this.draftStart && !this.draftEnd)
                    this.hovered = iso;
            } })) : (h(CalendarList, { kind: this.view, year: year, month: monthIndex, language: language, min: (_c = this.min) !== null && _c !== void 0 ? _c : undefined, max: (_d = this.max) !== null && _d !== void 0 ? _d : undefined, firstYear: this.firstYear, onPick: (value) => (this.view === 'months' ? this.pickMonth(value, offset) : this.pickYear(value, offset)) })))));
    }
    renderPanel() {
        if (!this.isOpen)
            return null;
        const texts = datepickerTexts(this.languageValue);
        const offsets = this.isPeriod ? [0, 1] : [0];
        const variant = Object.keys(BANNER_ICONS).includes(this.variantBanner) ? this.variantBanner : 'warning';
        return [
            h("div", { class: "panel__months" }, offsets.map((offset) => (h("div", { class: "panel__column" }, this.renderMonth(offset), this.renderBody(offset))))),
            this.message && (h("div", { class: `panel__message panel__message--${variant}`, part: "message", role: "status" }, h("uai-icon", { name: BANNER_ICONS[variant], size: "small" }), h("uai-typo", { variant: "caption", tag: "span", margin: false }, this.message))),
            h("div", { class: "panel__footer" }, h("uai-button", { variant: "outline", color: "content", size: "medium", "data-test": this.dtButtonClear, onUaiClick: this.reset }, texts.reset), h("uai-button", { variant: "solid", color: "primary", size: "medium", "data-test": this.dtButtonConfirm, disabled: !this.canApply, onUaiClick: this.apply }, texts.apply)),
        ];
    }
    render() {
        var _a, _b;
        const disabled = this.isDisabled;
        const texts = datepickerTexts(this.languageValue);
        const label = (_a = this.label) !== null && _a !== void 0 ? _a : texts.label;
        const start = this.startValue;
        const end = this.endValue;
        const shown = start ? (end ? `${isoToDisplay(start)} – ${isoToDisplay(end)}` : isoToDisplay(start)) : '';
        const placeholder = (_b = this.placeholder) !== null && _b !== void 0 ? _b : (this.isPeriod ? `${regionalDateFormat().placeholder} – ${regionalDateFormat().placeholder}` : regionalDateFormat().placeholder);
        const message = this.danger ? this.errorMessage : this.helperMessage;
        const panelId = `${this.baseId}-panel`;
        return (h(Host, { key: 'ae0b2a0b26cf47c361cdb2616a58047c6bd20ef4', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-datepicker--size-${this.sizeValue}`]: true,
                'uai-datepicker--danger': this.danger,
                'uai-datepicker--disabled': disabled,
                'uai-datepicker--open': this.isOpen,
                'uai-datepicker--period': this.isPeriod,
            } }, h("div", { key: 'ce89dd99c56d2f09670fdc934b85e72ff884354a', class: "input" }, label && (h("label", { key: '0bd21102576f33b065091728f4b71ff7c1c7341f', class: "input__label", for: `${this.baseId}-trigger` }, h("uai-typo", { key: '12f4a83ab230684a30d1f1843b72170c5df7522f', variant: "caption", bold: "semibold", tag: "span", margin: false }, label))), h("button", { key: '1e5923b6d2027b29abc1202a6ff29ad8cafa27cb', id: `${this.baseId}-trigger`, type: "button", ref: (trigger) => (this.trigger = trigger), class: "input__control", part: "input-container", "aria-haspopup": "dialog", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-controls": panelId, "aria-label": this.ariaLabel || null, "aria-invalid": this.danger ? 'true' : null, "aria-describedby": message ? `${this.baseId}-message` : null, disabled: disabled, "data-test": this.dtOutzone, onClick: () => (this.isOpen ? this.closePanel() : this.openPanel(false)), onKeyDown: (event) => {
                if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    this.openPanel(true);
                }
            } }, h("uai-typo", { key: 'eb1f964c43dfa78dc42a4f10c9533f6a9bd3a427', class: { input__value: true, 'input__value--placeholder': !shown }, variant: "body-base", tag: "span", margin: false }, shown || placeholder), this.danger && h("uai-icon", { key: '8b0e66d1780af2b479ea9027333a8ce7ba71f09b', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), h("uai-icon", { key: '599ee0161c3a2ba6714636a785b2680d7fd59788', class: "input__icon", name: "calendar", size: "medium", "aria-hidden": "true" })), message && (h("div", { key: '26dbed4e38850f25d5dc8e4d8f8417321db72ff4', id: `${this.baseId}-message`, class: "input__message", part: "input__message" }, h("uai-typo", { key: '7202bfd2ac9b971bdfbd86b3486c526f5695cdd2', variant: "caption", tag: "span", margin: false }, message)))), h("div", { key: '5713479d6f622aa84887b0a2b801d9fe2b4b3c72', id: panelId, ref: (panel) => (this.panel = panel), class: "panel", part: "panel", role: "dialog", "aria-label": texts.dialog, onPointerDown: (event) => {
                var _a, _b;
                if (!((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest) === null || _b === void 0 ? void 0 : _b.call(_a, 'button, input, uai-button')))
                    event.preventDefault();
            }, onPointerLeave: () => (this.hovered = null) }, this.renderPanel())));
    }
    static get is() { return "uai-datepicker"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-datepicker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-datepicker.css"]
        };
    }
    static get properties() {
        return {
            "name": {
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
                    "text": "Name of the value in the submitted form data: the date, or the start and the end of the period."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "name"
            },
            "typeOfDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiDatepickerType",
                    "resolved": "\"period\" | \"single\"",
                    "references": {
                        "UaiDatepickerType": {
                            "location": "import",
                            "path": "./uai-datepicker-interface",
                            "id": "src/components/uai-datepicker/uai-datepicker-interface.ts::UaiDatepickerType",
                            "referenceLocation": "UaiDatepickerType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "One date or a period. Can be one of: 'single' (default), 'period'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type-of-date",
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
                    "text": "Earliest date that can be chosen, as ISO YYYY-MM-DD. The legacy DD/MM/YYYY still works, with a warning.\nEarlier days are disabled."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "start-date-limit"
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
                    "text": "Latest date that can be chosen, as ISO YYYY-MM-DD. The legacy DD/MM/YYYY still works, with a warning. Later days\nare disabled."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "end-date-limit"
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
                    "text": "Label shown above the field. Without it, the default text of the language is shown (\"Data\")."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "placeholder": {
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
                    "text": "Text shown in the field while nothing is chosen. Defaults to the browser's regional date format."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder"
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
                    "text": "Message shown inside the panel, above the buttons, such as a rule about the period."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "message",
                "defaultValue": "null"
            },
            "variantBanner": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "UaiDatepickerBannerVariant",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"system\" | \"warning\"",
                    "references": {
                        "UaiDatepickerBannerVariant": {
                            "location": "import",
                            "path": "./uai-datepicker-interface",
                            "id": "src/components/uai-datepicker/uai-datepicker-interface.ts::UaiDatepickerBannerVariant",
                            "referenceLocation": "UaiDatepickerBannerVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Tone of the message inside the panel. Can be one of: 'system', 'info', 'success', 'warning' (default), 'error'."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "variant-banner",
                "defaultValue": "'warning'"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiDatepickerLanguage",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "UaiDatepickerLanguage": {
                            "location": "import",
                            "path": "./uai-datepicker-interface",
                            "id": "src/components/uai-datepicker/uai-datepicker-interface.ts::UaiDatepickerLanguage",
                            "referenceLocation": "UaiDatepickerLanguage"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Language of the texts and of the calendar. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
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
                    "text": "If true, the field cannot be used and is left out of the form data."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disabled",
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
                    "text": "Chosen date, or the start of the period, as ISO YYYY-MM-DD (the legacy DD/MM/YYYY still works, with a warning)."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "value-date-selected",
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
                    "text": "End of the period, as ISO YYYY-MM-DD (the legacy DD/MM/YYYY still works, with a warning)."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "value-end-date-selected",
                "defaultValue": "null"
            },
            "positionOptions": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiDatepickerPosition | string",
                    "resolved": "string",
                    "references": {
                        "UaiDatepickerPosition": {
                            "location": "import",
                            "path": "./uai-datepicker-interface",
                            "id": "src/components/uai-datepicker/uai-datepicker-interface.ts::UaiDatepickerPosition",
                            "referenceLocation": "UaiDatepickerPosition"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Side and alignment of the panel. Can be 'auto' (default) or a side and an edge such as 'bottom-left',\n'bottom-right', 'top-left', 'top-right'. 'top-center' and 'bottom-center' keep only the side; the right and\nleft sides of the legacy fall back to 'auto'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "position-options",
                "defaultValue": "'auto'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiDatepickerSize",
                    "resolved": "\"medium\" | \"short\"",
                    "references": {
                        "UaiDatepickerSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-datepicker/uai-datepicker.tsx",
                            "id": "src/components/uai-datepicker/uai-datepicker.tsx::UaiDatepickerSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Height of the field. Can be one of: 'short', 'medium' (default)."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'medium'"
            },
            "helperMessage": {
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
                    "text": "Message below the field that helps to fill it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "helper-message",
                "defaultValue": "''"
            },
            "danger": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If true, shows the error state and errorMessage."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "danger",
                "defaultValue": "false"
            },
            "errorMessage": {
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
                    "text": "Message below the field while danger is true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error-message",
                "defaultValue": "''"
            },
            "ariaLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible name of the field when the visible label is not enough."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-label",
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
                    "text": "Data test id of the start date field of the panel (or the only one)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-input-start",
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
                    "text": "Data test id of the end date field of the panel."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-input-end",
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
                    "text": "Data test id of the field that opens the panel. Kept from bds-datepicker, where it was the outside area."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-outzone",
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
                    "text": "Data test id of the previous month button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-prev",
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
                    "text": "Data test id of the next month button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-next",
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
                    "text": "Data test id of the month button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-select-month",
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
                    "text": "Data test id of the year button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-select-year",
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
                    "text": "Data test id of the Reset button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-clear",
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
                    "text": "Data test id of the Apply button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-confirm",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "view": {},
            "shownMonth": {},
            "focusedDate": {},
            "firstYear": {},
            "slide": {},
            "draftStart": {},
            "draftEnd": {},
            "typed": {},
            "hovered": {},
            "disabledByForm": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiStartDate",
                "name": "uaiStartDate",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the start date of the draft changes (or the date, with \"single\"). detail: { value } as ISO or null."
                },
                "complexType": {
                    "original": "{ value: string | null }",
                    "resolved": "{ value: string; }",
                    "references": {}
                }
            }, {
                "method": "uaiEndDate",
                "name": "uaiEndDate",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the end date of the draft changes. detail: { value } as ISO or null."
                },
                "complexType": {
                    "original": "{ value: string | null }",
                    "resolved": "{ value: string; }",
                    "references": {}
                }
            }, {
                "method": "uaiConcludeDatepicker",
                "name": "uaiConcludeDatepicker",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted on Apply with a choice. detail: { startDate, endDate? } as ISO."
                },
                "complexType": {
                    "original": "UaiDatepickerConclude",
                    "resolved": "UaiDatepickerConclude",
                    "references": {
                        "UaiDatepickerConclude": {
                            "location": "import",
                            "path": "./uai-datepicker-interface",
                            "id": "src/components/uai-datepicker/uai-datepicker-interface.ts::UaiDatepickerConclude",
                            "referenceLocation": "UaiDatepickerConclude"
                        }
                    }
                }
            }, {
                "method": "uaiEmptyConcludeDatepicker",
                "name": "uaiEmptyConcludeDatepicker",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted on Apply with nothing chosen."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "open": {
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
                    "text": "Opens the panel.",
                    "tags": []
                }
            },
            "close": {
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
                    "text": "Closes the panel, discarding the draft.",
                    "tags": []
                }
            },
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
                    "text": "Clears the chosen date or period.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "valueDateSelected",
                "methodName": "valueChanged"
            }, {
                "propName": "valueEndDateSelected",
                "methodName": "valueChanged"
            }, {
                "propName": "positionOptions",
                "methodName": "positionChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "focusout",
                "method": "onFocusOut",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
