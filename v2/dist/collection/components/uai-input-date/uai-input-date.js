import { Build, Host, forceUpdate, h, } from "@stencil/core";
import { warnLegacyValue, warnOnce } from "../../utils/deprecation";
import { UaiFormControl } from "../../utils/uai-form-control";
import { UaiOverlay } from "../../utils/uai-overlay";
import { CalendarDays, CalendarHeader, CalendarList, YEARS_PER_PAGE, addMonths, clampIso, dateForKey, outOfRange, parseIso, toIso, todayIso, } from "../../utils/uai-calendar";
import { dateLocale, displayToIso, groupDigits, isIsoDate, isoToDisplay, regionalDateFormat, } from "./uai-input-date-format";
const TAG = 'uai-input-date';
const SIZES = ['short', 'medium'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
let instances = 0;
/**
 * Date field. The person types the date in the browser's regional format or picks it in the UAI calendar that opens
 * on a click; value, min, max and the submitted form value are ISO YYYY-MM-DD. Use it for a single known date, such
 * as a birth or due date. Pair with uai-input-time for a date and time, and with UaiButton in forms. Avoid it for
 * periods (use uai-datepicker) or times (use uai-input-time). Wrap the app in UaiThemeProvider.
 *
 * @slot input-right - Content after the calendar button (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, the native input and the calendar button.
 * @part input - The native text input with the date in the browser's regional format.
 * @part input__message - The helper, error or success message below the field.
 * @part calendar-button - The button that opens and closes the calendar.
 * @part calendar - The floating calendar panel.
 * @part calendar-arrow - The previous and next buttons of the calendar header.
 * @part calendar-picker - The month and year buttons of the calendar header.
 * @part calendar-day - Each day button of the calendar.
 * @part calendar-option - Each month or year in their pickers.
 */
export class UaiInputDate {
    constructor() {
        this.display = '';
        this.validationDanger = false;
        this.disabledByForm = false;
        this.isOpen = false;
        this.view = 'days';
        /** The day with the focus in the calendar grid; its month is the month shown. */
        this.focusedDate = todayIso();
        this.firstYear = 0;
        /** Where the next month or page of years comes from, for the slide animation. */
        this.slide = null;
        /** Moves the focus into the grid on the next render (opened by the keyboard or the calendar button). */
        this.focusGrid = false;
        this.defaultValue = '';
        this.typing = false;
        this.inputId = `uai-input-date-${++instances}`;
        /**
         * Name of the value in the submitted form data. Same as name, kept from bds-input.
         */
        this.inputName = '';
        /**
         * Selected date as ISO YYYY-MM-DD, for example "2026-12-25". Empty while the typed date is incomplete or invalid.
         */
        this.value = '';
        /**
         * Language of the default texts, not the date format. Can be 'pt_BR' (default), 'en_US', 'es_ES'.
         */
        this.language = 'pt_BR';
        /**
         * Height of the field. Can be one of: 'short', 'medium' (default).
         */
        this.size = 'medium';
        /**
         * UaiIcon name shown before the date.
         */
        this.icon = '';
        /**
         * If true, the date can be selected and copied but not edited, and the calendar button is hidden.
         */
        this.readonly = false;
        /**
         * If true, the field and the calendar button cannot be used and the value is left out of the form data.
         */
        this.disabled = false;
        /**
         * If true, shows the error state and errorMessage. Has priority over success.
         */
        this.danger = false;
        /**
         * If true, shows the success state and successMessage.
         */
        this.success = false;
        /**
         * Message below the field that helps to fill it.
         */
        this.helperMessage = '';
        /**
         * Message below the field while danger is true.
         */
        this.errorMessage = '';
        /**
         * Message below the field while success is true.
         */
        this.successMessage = '';
        /**
         * Accessible name of the field when the visible label is not enough.
         */
        this.ariaLabel = null;
        /**
         * Data test id, set on the native input.
         */
        this.dataTest = null;
        this.onInput = (event) => {
            var _a, _b;
            const input = event.target;
            const raw = input.value;
            const caretDigits = raw.slice(0, (_a = input.selectionStart) !== null && _a !== void 0 ? _a : raw.length).replace(/\D/g, '').length;
            const digits = raw.replace(/\D/g, '').slice(0, 8);
            const display = groupDigits(digits);
            input.value = display;
            let caret = 0;
            for (let seen = 0; caret < display.length && seen < caretDigits; caret++) {
                if (/\d/.test(display[caret]))
                    seen++;
            }
            (_b = input.setSelectionRange) === null || _b === void 0 ? void 0 : _b.call(input, caret, caret);
            this.display = display;
            this.typing = true;
            this.value = displayToIso(digits);
            this.typing = false;
            // A complete date typed with the calendar open shows its month.
            if (this.isOpen && isIsoDate(this.value))
                this.moveTo(clampIso(this.value, this.min, this.max));
            this.uaiInput.emit(event);
        };
        this.onFocus = () => {
            this.uaiFocus.emit();
        };
        // Going into the calendar is not leaving the field: the validation waits until the calendar closes.
        this.onBlur = () => {
            if (!this.isOpen)
                this.showValidation(true);
            this.uaiOnBlur.emit();
        };
        this.onKeyDown = (event) => {
            var _a, _b;
            if (event.key === 'ArrowDown' && (event.altKey || this.isOpen)) {
                event.preventDefault();
                this.openCalendar(true);
            }
            else if (event.key === 'Tab' && this.isOpen) {
                this.closeCalendar();
            }
            else if (event.key === 'Enter' && !event.isComposing) {
                (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.requestSubmit();
            }
        };
        this.onOverlayClose = (reason) => {
            var _a;
            if (this.isOpen)
                this.isOpen = false;
            if (reason === 'escape')
                (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
            if (reason === 'outside')
                this.showValidation(true);
        };
        this.pickDate = (iso) => {
            var _a;
            if (outOfRange(iso, this.min, this.max))
                return;
            this.display = isoToDisplay(iso);
            this.value = iso;
            this.showValidation(true);
            this.closeCalendar();
            (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
        };
        // Keys move from the active day in the state, not from the button that got the event: a fast key can reach the
        // previous button before the focus moves.
        this.onDayKeyDown = (event) => {
            const target = dateForKey(this.focusedDate, event);
            if (target) {
                event.preventDefault();
                this.moveFocus(target);
            }
            else if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.pickDate(this.focusedDate);
            }
        };
        this.onView = (view) => {
            // The page of years opens with the current year in its first row, leaving the years ahead in view.
            if (view === 'years')
                this.firstYear = this.viewYear - 4;
            this.changeView(view);
        };
        this.onPickMonth = (month) => {
            const { year, day } = parseIso(this.focusedDate);
            const last = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
            this.focusedDate = clampIso(toIso(year, month, Math.min(day, last)), this.min, this.max);
            this.changeView('days');
        };
        this.onPickYear = (year) => {
            const { month, day } = parseIso(this.focusedDate);
            const last = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
            this.focusedDate = clampIso(toIso(year, month, Math.min(day, last)), this.min, this.max);
            this.changeView('months');
        };
        // The arrows turn a month, a year in the month picker, or a page of years in the year picker.
        this.onPrevious = () => {
            if (this.view === 'years') {
                this.firstYear -= YEARS_PER_PAGE;
                this.slide = 'previous';
            }
            else
                this.showMonth(this.view === 'months' ? -12 : -1);
        };
        this.onNext = () => {
            if (this.view === 'years') {
                this.firstYear += YEARS_PER_PAGE;
                this.slide = 'next';
            }
            else
                this.showMonth(this.view === 'months' ? 12 : 1);
        };
        this.onInputClick = () => {
            this.openCalendar(false);
        };
        this.onButtonClick = () => {
            var _a;
            if (this.isOpen) {
                this.closeCalendar();
                (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else {
                this.openCalendar(true);
            }
        };
        // Clicks on the field box (outside the button and slotted content) focus the input, as a native field does.
        this.onControlClick = (event) => {
            var _a, _b, _c;
            if ((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest) === null || _b === void 0 ? void 0 : _b.call(_a, 'button'))
                return;
            if (!this.el.contains(event.target)) {
                (_c = this.nativeInput) === null || _c === void 0 ? void 0 : _c.focus();
                this.openCalendar(false);
            }
        };
    }
    /**
     * Moves the focus to the field.
     */
    async setFocus() {
        var _a;
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /**
     * Removes the focus from the field.
     */
    async removeFocus() {
        var _a;
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.blur();
    }
    /**
     * Returns true when the date is complete, exists, is within min and max, and is present when required.
     */
    async isValid() {
        return !this.validity().invalid;
    }
    /**
     * Clears the date.
     */
    async clear() {
        this.display = '';
        this.value = '';
    }
    /**
     * Opens the calendar. Use for imperative control; pair with close.
     */
    async open() {
        this.openCalendar(false);
    }
    /**
     * Closes the calendar.
     */
    async close() {
        this.closeCalendar();
    }
    inputNameChanged() {
        if (!this.name && this.inputName)
            this.name = this.inputName;
    }
    valueChanged(newValue) {
        var _a;
        const value = newValue || '';
        if (!this.typing)
            this.display = isoToDisplay(value);
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(isIsoDate(value) ? value : null);
        this.uaiChange.emit({ value });
    }
    onInvalid() {
        this.showValidation(true);
    }
    // The focus moving to something outside the field and the calendar closes it. Without a target (a day button
    // replaced when the month changes, or a click on nothing), it stays: a click outside is the overlay's.
    onFocusOut(event) {
        var _a;
        const next = event.relatedTarget;
        if (next && !this.el.contains(next) && !((_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.contains(next)))
            this.closeCalendar();
    }
    componentWillLoad() {
        var _a;
        this.inputNameChanged();
        this.defaultValue = isIsoDate(this.value) ? this.value : '';
        this.display = isoToDisplay(this.defaultValue);
        // Real browsers only: the Stencil mock DOM attaches internals without the form API.
        if (typeof ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === 'function') {
            this.formControl = new UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.defaultValue || null,
                onReset: () => {
                    this.validationDanger = false;
                    this.display = isoToDisplay(this.defaultValue);
                    this.value = this.defaultValue;
                },
                onDisabledChange: (disabled) => {
                    queueMicrotask(() => {
                        var _a, _b;
                        const formDisabled = (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : disabled;
                        if (!this.disabled && this.disabledByForm !== formDisabled)
                            this.disabledByForm = formDisabled;
                    });
                },
            });
        }
        if (Build.isDev && this.label === '' && !this.ariaLabel) {
            warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
        }
    }
    componentDidLoad() {
        if (this.control && this.panel) {
            this.overlay = new UaiOverlay({
                trigger: this.control,
                panel: this.panel,
                side: 'bottom',
                align: 'start',
                onClose: this.onOverlayClose,
            });
        }
    }
    componentDidRender() {
        var _a, _b, _c, _d;
        if (this.nativeInput && this.nativeInput.value !== this.display)
            this.nativeInput.value = this.display;
        const { flags, message } = this.validity();
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValidity(flags, message, this.nativeInput);
        if (this.isOpen && this.overlay && !this.overlay.isOpen)
            this.overlay.open();
        if (this.isOpen)
            (_b = this.overlay) === null || _b === void 0 ? void 0 : _b.update();
        if (this.isOpen && this.focusGrid) {
            this.focusGrid = false;
            (_d = (_c = this.panel) === null || _c === void 0 ? void 0 : _c.querySelector(`[data-iso="${this.focusedDate}"]`)) === null || _d === void 0 ? void 0 : _d.focus();
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
    formStateRestoreCallback(state) {
        if (typeof state === 'string')
            this.value = state;
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
    validity() {
        const language = this.languageValue;
        const locale = dateLocale(language);
        const value = isIsoDate(this.value) ? this.value : '';
        if (!this.display && !value) {
            return this.required
                ? { invalid: true, flags: { valueMissing: true }, message: this.requiredErrorMessage || locale.required }
                : { invalid: false, flags: {}, message: '' };
        }
        if (!value)
            return { invalid: true, flags: { badInput: true }, message: this.dateErrorMessage || locale.date };
        if (isIsoDate(this.min) && value < this.min) {
            const message = this.minErrorMessage || locale.min(isoToDisplay(this.min));
            return { invalid: true, flags: { rangeUnderflow: true }, message };
        }
        if (isIsoDate(this.max) && value > this.max) {
            const message = this.maxErrorMessage || locale.max(isoToDisplay(this.max));
            return { invalid: true, flags: { rangeOverflow: true }, message };
        }
        return { invalid: false, flags: {}, message: '' };
    }
    // Shows the validation result from now on; the message follows the value while it stays shown.
    showValidation(show) {
        const danger = show && this.validity().invalid;
        if (danger !== this.validationDanger)
            this.validationDanger = danger;
    }
    get isDisabled() {
        return this.disabled || this.disabledByForm;
    }
    get viewYear() {
        return parseIso(this.focusedDate).year;
    }
    get viewMonth() {
        return parseIso(this.focusedDate).month;
    }
    // The calendar starts on the chosen date, or today, within min and max.
    openCalendar(focusGrid) {
        if (this.isDisabled || this.readonly)
            return;
        if (!this.isOpen) {
            const start = isIsoDate(this.value) ? this.value : todayIso();
            this.focusedDate = clampIso(start, this.min, this.max);
            this.view = 'days';
            this.slide = null;
            this.isOpen = true;
        }
        this.focusGrid = focusGrid;
        if (focusGrid)
            this.forceFocus();
    }
    // Asks for a render when the calendar is already open and only the focus has to move.
    forceFocus() {
        forceUpdate(this.el);
    }
    closeCalendar(reason = 'api') {
        var _a, _b;
        if (!this.isOpen)
            return;
        this.isOpen = false;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.close(reason);
        if (!((_b = this.el.shadowRoot) === null || _b === void 0 ? void 0 : _b.activeElement))
            this.showValidation(true);
    }
    moveFocus(iso) {
        this.moveTo(clampIso(iso, this.min, this.max));
        this.focusGrid = true;
        forceUpdate(this.el);
    }
    showMonth(months) {
        this.moveTo(clampIso(addMonths(this.focusedDate, months), this.min, this.max));
    }
    // Moves the calendar to a date; a new month slides in from the side it comes from.
    moveTo(iso) {
        const from = this.viewYear * 12 + this.viewMonth;
        const { year, month } = parseIso(iso);
        const to = year * 12 + month;
        if (to !== from)
            this.slide = to > from ? 'next' : 'previous';
        this.focusedDate = iso;
    }
    changeView(view) {
        if (view === this.view)
            return;
        this.slide = 'view';
        this.view = view;
    }
    renderCalendar() {
        if (!this.isOpen)
            return null;
        const language = this.languageValue;
        const min = parseIso(this.min);
        const max = parseIso(this.max);
        const year = this.viewYear;
        const month = this.viewMonth;
        // The arrows stop at min and max: by month, by year in the month picker, by page in the year picker.
        const position = this.view === 'days' ? year * 12 + month : year;
        const limit = (date) => (this.view === 'days' ? date.year * 12 + date.month : date.year);
        const atMin = !!min && (this.view === 'years' ? this.firstYear <= min.year : position <= limit(min));
        const atMax = !!max && (this.view === 'years' ? this.firstYear + YEARS_PER_PAGE - 1 >= max.year : position >= limit(max));
        return [
            h(CalendarHeader, { year: year, month: month, view: this.view, language: language, disablePrevious: atMin, disableNext: atMax, onPrevious: this.onPrevious, onNext: this.onNext, onView: this.onView }),
            // A new key per month, page of years or view: the body is created again and its entry animation runs.
            h("div", { key: `${this.view}-${this.view === 'years' ? this.firstYear : this.view === 'months' ? year : `${year}-${month}`}`, class: { calendar__body: true, [`calendar__body--${this.slide}`]: !!this.slide } }, this.view === 'days' ? (h(CalendarDays, { year: year, month: month, language: language, focused: this.focusedDate, min: this.min, max: this.max, idPrefix: `${this.inputId}-day`, isSelected: (iso) => iso === this.value, onPick: this.pickDate, onKeyDown: this.onDayKeyDown })) : (h(CalendarList, { kind: this.view, year: year, month: month, language: language, min: this.min, max: this.max, firstYear: this.firstYear, onPick: this.view === 'months' ? this.onPickMonth : this.onPickYear }))),
        ];
    }
    render() {
        var _a, _b;
        const disabled = this.disabled || this.disabledByForm;
        const validity = this.validity();
        const validationText = this.validationDanger && validity.invalid ? validity.message : '';
        const invalid = this.danger || !!validationText;
        const success = this.success && !invalid;
        const message = this.danger
            ? this.errorMessage || validationText
            : validationText
                ? validationText
                : success
                    ? this.successMessage
                    : this.helperMessage;
        const locale = dateLocale(this.languageValue);
        const label = (_a = this.label) !== null && _a !== void 0 ? _a : locale.label;
        return (h(Host, { key: '9efd31e9acba317390e61ccf46e2f4fd9b5ab02e', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input-date--size-${this.sizeValue}`]: true,
                'uai-input-date--danger': invalid,
                'uai-input-date--success': success,
                'uai-input-date--disabled': disabled,
                'uai-input-date--readonly': this.readonly && !disabled,
                'uai-input-date--open': this.isOpen,
            } }, h("div", { key: '909153c3e23c284aa1c54b140ab39abf73cc72d3', class: "input" }, label && (h("label", { key: '060cd637cc395c24df8ce721235fe00ca10a7a57', class: "input__label", for: this.inputId }, h("uai-typo", { key: '8a7069b3020eb153b841fbda7ad1ac70a3af04b9', variant: "caption", bold: "semibold", tag: "span", margin: false }, label))), h("div", { key: '10f01e7bcae8fa55bf39b93d48471bfecd373cc5', class: "input__control", part: "input-container", ref: (control) => (this.control = control), onClick: this.onControlClick }, this.icon && h("uai-icon", { key: '8a868c6398deeddf7a44c68d1823508201c84c29', class: "input__icon", name: this.icon, size: "medium" }), h("div", { key: 'b17a316ec5a9762c7fff92add6569332c66b7f17', class: "input__field" }, h("input", { key: 'eb10a900e41130fe6e25ae360bc3ba7771d2e199', id: this.inputId, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: "text", inputMode: "numeric", autocomplete: "off", maxLength: regionalDateFormat().placeholder.length, value: this.display, placeholder: (_b = this.placeholder) !== null && _b !== void 0 ? _b : regionalDateFormat().placeholder, required: this.required, readOnly: this.readonly, disabled: disabled, "aria-label": this.ariaLabel || null, "aria-haspopup": "dialog", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-controls": `${this.inputId}-calendar`, "aria-invalid": invalid ? 'true' : null, "aria-describedby": message ? `${this.inputId}-message` : null, "data-test": this.dataTest, onInput: this.onInput, onClick: this.onInputClick, onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.onKeyDown })), invalid && h("uai-icon", { key: 'd04965fe1bd48ff2aa90dce4fe98dd226b467e40', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && h("uai-icon", { key: '0ea1943b8b9c0d36fb321665bb503a2da92b5afe', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), !this.readonly && (h("button", { key: '3a68480e73348b64b43891b1f86e023b1eff2a76', type: "button", class: "calendar-toggle", part: "calendar-button", "aria-label": locale.calendar, "aria-haspopup": "dialog", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-controls": `${this.inputId}-calendar`, disabled: disabled, onClick: this.onButtonClick }, h("uai-icon", { key: '3cb6bacd7764e68e8c87ed5dd5db295ce5487c55', name: "calendar", size: "medium" }))), h("slot", { key: 'bc70059038f4e335c1eef69318fa895fb9bab2fe', name: "input-right" })), message && (h("div", { key: '3571e4ea271079cd7050c5889e5a1ca2de01b35b', id: `${this.inputId}-message`, class: "input__message", part: "input__message" }, h("uai-typo", { key: '6e070b1e19c00fd45757e6eff68c0998ba6e9feb', variant: "caption", tag: "span", margin: false }, message)))), h("div", { key: 'cc8ac63bf27ed9883d4b6b5ecbb0e2f289d358f4', id: `${this.inputId}-calendar`, ref: (panel) => (this.panel = panel), class: "calendar-panel", part: "calendar", role: "dialog", "aria-label": locale.calendar, onPointerDown: (event) => {
                var _a, _b;
                if (!((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest) === null || _b === void 0 ? void 0 : _b.call(_a, 'button')))
                    event.preventDefault();
            } }, this.renderCalendar())));
    }
    static get is() { return "uai-input-date"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-input-date.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-input-date.css"]
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
                    "text": "Name of the value in the submitted form data, which is the ISO date. Without name (or inputName), the field is not\nsubmitted."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "name"
            },
            "inputName": {
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
                    "text": "Name of the value in the submitted form data. Same as name, kept from bds-input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "input-name",
                "defaultValue": "''"
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Selected date as ISO YYYY-MM-DD, for example \"2026-12-25\". Empty while the typed date is incomplete or invalid."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "''"
            },
            "min": {
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
                    "text": "Earliest accepted date, as ISO YYYY-MM-DD."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min"
            },
            "max": {
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
                    "text": "Latest accepted date, as ISO YYYY-MM-DD."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiInputDateLanguage",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "UaiInputDateLanguage": {
                            "location": "import",
                            "path": "./uai-input-date-format",
                            "id": "src/components/uai-input-date/uai-input-date-format.ts::UaiInputDateLanguage",
                            "referenceLocation": "UaiInputDateLanguage"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Language of the default texts, not the date format. Can be 'pt_BR' (default), 'en_US', 'es_ES'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'pt_BR'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiInputDateSize",
                    "resolved": "\"medium\" | \"short\"",
                    "references": {
                        "UaiInputDateSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input-date/uai-input-date.tsx",
                            "id": "src/components/uai-input-date/uai-input-date.tsx::UaiInputDateSize"
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
                    "text": "Text shown while the field is empty. Defaults to the browser's regional date format, such as \"DD/MM/YYYY\"."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder"
            },
            "icon": {
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
                    "text": "UaiIcon name shown before the date."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "icon",
                "defaultValue": "''"
            },
            "required": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, an empty field blocks the form submission."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required"
            },
            "readonly": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the date can be selected and copied but not edited, and the calendar button is hidden."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "readonly",
                "defaultValue": "false"
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
                    "text": "If true, the field and the calendar button cannot be used and the value is left out of the form data."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "danger": {
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
                    "text": "If true, shows the error state and errorMessage. Has priority over success."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "danger",
                "defaultValue": "false"
            },
            "success": {
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
                    "text": "If true, shows the success state and successMessage."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "success",
                "defaultValue": "false"
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
            "errorMessage": {
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
                    "text": "Message below the field while danger is true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error-message",
                "defaultValue": "''"
            },
            "successMessage": {
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
                    "text": "Message below the field while success is true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "success-message",
                "defaultValue": "''"
            },
            "requiredErrorMessage": {
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
                    "text": "Message shown when a required field is empty. Without it, the default text of the language is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required-error-message"
            },
            "dateErrorMessage": {
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
                    "text": "Message shown when the typed date is incomplete or does not exist. Without it, the default text is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "date-error-message"
            },
            "minErrorMessage": {
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
                    "text": "Message shown when the date is before min. Without it, the default text with the min date is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min-error-message"
            },
            "maxErrorMessage": {
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
                    "text": "Message shown when the date is after max. Without it, the default text with the max date is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-error-message"
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
            "dataTest": {
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
                    "text": "Data test id, set on the native input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "display": {},
            "validationDanger": {},
            "disabledByForm": {},
            "isOpen": {},
            "view": {},
            "focusedDate": {},
            "firstYear": {},
            "slide": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiChange",
                "name": "uaiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the date changes, by typing, by the calendar or programmatically. detail: { value } as ISO\nYYYY-MM-DD, or '' while the typed date is incomplete or invalid."
                },
                "complexType": {
                    "original": "{ value: string }",
                    "resolved": "{ value: string; }",
                    "references": {}
                }
            }, {
                "method": "uaiInput",
                "name": "uaiInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted on every keystroke with the native InputEvent."
                },
                "complexType": {
                    "original": "InputEvent",
                    "resolved": "InputEvent",
                    "references": {
                        "InputEvent": {
                            "location": "global",
                            "id": "global::InputEvent"
                        }
                    }
                }
            }, {
                "method": "uaiFocus",
                "name": "uaiFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the field receives focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "uaiOnBlur",
                "name": "uaiOnBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the field loses focus."
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
            "setFocus": {
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
                    "text": "Moves the focus to the field.",
                    "tags": []
                }
            },
            "removeFocus": {
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
                    "text": "Removes the focus from the field.",
                    "tags": []
                }
            },
            "isValid": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Returns true when the date is complete, exists, is within min and max, and is present when required.",
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
                    "text": "Clears the date.",
                    "tags": []
                }
            },
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
                    "text": "Opens the calendar. Use for imperative control; pair with close.",
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
                    "text": "Closes the calendar.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "inputName",
                "methodName": "inputNameChanged"
            }, {
                "propName": "value",
                "methodName": "valueChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "invalid",
                "method": "onInvalid",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "focusout",
                "method": "onFocusOut",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
