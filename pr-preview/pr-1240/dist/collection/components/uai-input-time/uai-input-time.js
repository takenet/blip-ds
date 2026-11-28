import { Build, Host, h, } from "@stencil/core";
import { warnLegacyValue, warnOnce } from "../../utils/deprecation";
import { UaiFormControl } from "../../utils/uai-form-control";
import { UaiOverlay } from "../../utils/uai-overlay";
import { acceptDigits, digitsToTime, groupTime, isTime, pad, timeLocale, } from "./uai-input-time-format";
const TAG = 'uai-input-time';
const SIZES = ['short', 'medium'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
const HOURS = Array.from({ length: 24 }, (_, hour) => hour);
let instances = 0;
/**
 * Time field. The person types the time of day as HH:mm (24 hours), and digits that cannot make a time are refused,
 * or picks the hour and the minutes in the panel that opens on a click; value, min, max and the submitted form value
 * are HH:mm. Use it for a time of day, such as an opening hour or a return time. Pair with uai-input-date for a date
 * and time, and with UaiButton in forms. Avoid it for durations or periods. Wrap the app in UaiThemeProvider.
 *
 * @slot input-right - Content after the picker button (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, the native input and the picker button.
 * @part input - The native text input with the time as HH:mm.
 * @part input__message - The helper, error or success message below the field.
 * @part picker-button - The button that opens and closes the time panel.
 * @part picker - The floating panel with the hour and minute columns.
 * @part picker-option - Each hour or minute in the panel.
 */
export class UaiInputTime {
    constructor() {
        this.display = '';
        this.validationDanger = false;
        this.disabledByForm = false;
        this.isOpen = false;
        this.activeColumn = 'hour';
        this.activeHour = 0;
        this.activeMinute = 0;
        this.defaultValue = '';
        this.typing = false;
        this.inputId = `uai-input-time-${++instances}`;
        /**
         * Name of the value in the submitted form data. Same as name, kept from bds-input.
         */
        this.inputName = '';
        /**
         * Chosen time as HH:mm, from "00:00" to "23:59". Empty while the typed time is incomplete.
         */
        this.value = '';
        /**
         * Interval of the minutes offered in the panel, from 1 to 30: 5 (default) offers 00, 05, 10… Typing accepts any
         * minute. Use 15 or 30 for appointments; avoid 1, which makes a long list.
         */
        this.minuteStep = 5;
        /**
         * Language of the default texts. Can be 'pt_BR' (default), 'en_US', 'es_ES'.
         */
        this.language = 'pt_BR';
        /**
         * Height of the field. Can be one of: 'short', 'medium' (default).
         */
        this.size = 'medium';
        /**
         * UaiIcon name shown before the time.
         */
        this.icon = '';
        /**
         * If true, the time can be selected and copied but not edited; the panel does not open and its button is hidden.
         */
        this.readonly = false;
        /**
         * If true, the field and the picker button cannot be used and the value is left out of the form data.
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
        this.onOverlayClose = (reason) => {
            var _a;
            if (this.isOpen)
                this.isOpen = false;
            if (reason === 'escape')
                (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
            if (reason === 'outside')
                this.showValidation(true);
        };
        this.onInput = (event) => {
            var _a, _b;
            const input = event.target;
            const raw = input.value;
            const previous = this.display.replace(/\D/g, '');
            const digits = acceptDigits(raw, previous);
            const refused = digits === previous && raw.replace(/\D/g, '') !== previous;
            const caretDigits = refused
                ? previous.length
                : raw.slice(0, (_a = input.selectionStart) !== null && _a !== void 0 ? _a : raw.length).replace(/\D/g, '').length;
            const display = groupTime(digits);
            input.value = display;
            let caret = 0;
            for (let seen = 0; caret < display.length && seen < caretDigits; caret++) {
                if (/\d/.test(display[caret]))
                    seen++;
            }
            (_b = input.setSelectionRange) === null || _b === void 0 ? void 0 : _b.call(input, caret, caret);
            this.display = display;
            this.typing = true;
            this.value = digitsToTime(digits);
            this.typing = false;
            // While the panel is open, it follows the hour being typed.
            if (this.isOpen && digits.length >= 2 && !this.hourDisabled(Number(digits.slice(0, 2)))) {
                this.activeHour = Number(digits.slice(0, 2));
            }
            this.uaiInput.emit(event);
        };
        this.onFocus = () => {
            this.uaiFocus.emit();
        };
        this.onBlur = () => {
            if (!this.isOpen)
                this.showValidation(true);
            this.uaiOnBlur.emit();
        };
        this.onKeyDown = (event) => {
            var _a, _b;
            if (event.key === 'ArrowDown' && event.altKey) {
                event.preventDefault();
                this.openPanel();
                return;
            }
            if (this.isOpen) {
                const keys = {
                    ArrowDown: () => this.moveActive(1),
                    ArrowUp: () => this.moveActive(-1),
                    ArrowRight: () => (this.activeColumn = 'minute'),
                    ArrowLeft: () => (this.activeColumn = 'hour'),
                    Enter: () => this.activeColumn === 'hour' ? this.pickHour(this.activeHour) : this.pickMinute(this.activeMinute),
                };
                if (keys[event.key]) {
                    event.preventDefault();
                    keys[event.key]();
                }
                else if (event.key === 'Tab') {
                    this.closePanel();
                }
                return;
            }
            if (event.key === 'Enter' && !event.isComposing)
                (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.requestSubmit();
        };
        // A click on the field opens the panel; on the button, it opens or closes it.
        this.onInputClick = () => {
            this.openPanel();
        };
        this.onButtonClick = () => {
            var _a;
            if (this.isOpen)
                this.closePanel();
            else {
                this.openPanel();
                (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
            }
        };
        // Clicks on the field box (outside the button and slotted content) focus the input and open the panel.
        this.onControlClick = (event) => {
            var _a, _b, _c;
            if ((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest) === null || _b === void 0 ? void 0 : _b.call(_a, 'button'))
                return;
            if (!this.el.contains(event.target)) {
                (_c = this.nativeInput) === null || _c === void 0 ? void 0 : _c.focus();
                this.openPanel();
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
     * Returns true when the time is complete, within min and max, and present when required.
     */
    async isValid() {
        return !this.validity().invalid;
    }
    /**
     * Clears the time.
     */
    async clear() {
        this.display = '';
        this.value = '';
    }
    /**
     * Opens the time panel. Use for imperative control; pair with close.
     */
    async open() {
        this.openPanel();
    }
    /**
     * Closes the time panel.
     */
    async close() {
        this.closePanel();
    }
    inputNameChanged() {
        if (!this.name && this.inputName)
            this.name = this.inputName;
    }
    valueChanged(newValue) {
        var _a;
        const value = newValue || '';
        if (!this.typing)
            this.display = isTime(value) ? value : '';
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(isTime(value) ? value : null);
        this.uaiChange.emit({ value });
    }
    onInvalid() {
        this.showValidation(true);
    }
    componentWillLoad() {
        var _a;
        this.inputNameChanged();
        this.defaultValue = isTime(this.value) ? this.value : '';
        this.display = this.defaultValue;
        // Real browsers only: the Stencil mock DOM attaches internals without the form API.
        if (typeof ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === 'function') {
            this.formControl = new UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.defaultValue || null,
                onReset: () => {
                    this.validationDanger = false;
                    this.display = this.defaultValue;
                    this.value = this.defaultValue;
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
        var _a, _b, _c;
        if (this.nativeInput && this.nativeInput.value !== this.display)
            this.nativeInput.value = this.display;
        const { flags, message } = this.validity();
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValidity(flags, message, this.nativeInput);
        if (this.isOpen && this.overlay && !this.overlay.isOpen)
            this.overlay.open();
        if (this.isOpen) {
            (_b = this.overlay) === null || _b === void 0 ? void 0 : _b.update();
            // Keeps the active hour and minute in view, each in its own column.
            (_c = this.panel) === null || _c === void 0 ? void 0 : _c.querySelectorAll('.option--current').forEach((option) => { var _a; return (_a = option.scrollIntoView) === null || _a === void 0 ? void 0 : _a.call(option, { block: 'nearest' }); });
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
    get minutes() {
        const step = Math.round(Number(this.minuteStep));
        const valid = step >= 1 && step <= 30 ? step : 5;
        if (valid !== step)
            warnLegacyValue(TAG, 'minuteStep', String(this.minuteStep), '5');
        return Array.from({ length: Math.ceil(60 / valid) }, (_, index) => index * valid);
    }
    get isDisabled() {
        return this.disabled || this.disabledByForm;
    }
    // HH:mm compares in the order of the day, so min and max compare as text.
    inRange(time) {
        return (!isTime(this.min) || time >= this.min) && (!isTime(this.max) || time <= this.max);
    }
    hourDisabled(hour) {
        const first = `${pad(hour)}:00`;
        const last = `${pad(hour)}:59`;
        return (isTime(this.min) && last < this.min) || (isTime(this.max) && first > this.max);
    }
    minuteDisabled(minute) {
        return !this.inRange(`${pad(this.activeHour)}:${pad(minute)}`);
    }
    validity() {
        const locale = timeLocale(this.languageValue);
        const value = isTime(this.value) ? this.value : '';
        if (!this.display && !value) {
            return this.required
                ? { invalid: true, flags: { valueMissing: true }, message: this.requiredErrorMessage || locale.required }
                : { invalid: false, flags: {}, message: '' };
        }
        if (!value)
            return { invalid: true, flags: { badInput: true }, message: this.timeErrorMessage || locale.time };
        if (isTime(this.min) && value < this.min) {
            return { invalid: true, flags: { rangeUnderflow: true }, message: this.minErrorMessage || locale.min(this.min) };
        }
        if (isTime(this.max) && value > this.max) {
            return { invalid: true, flags: { rangeOverflow: true }, message: this.maxErrorMessage || locale.max(this.max) };
        }
        return { invalid: false, flags: {}, message: '' };
    }
    // Shows the validation result from now on; the message follows the value while it stays shown.
    showValidation(show) {
        const danger = show && this.validity().invalid;
        if (danger !== this.validationDanger)
            this.validationDanger = danger;
    }
    setTime(time) {
        this.display = time;
        this.value = time;
    }
    // The panel starts on the hour and minute of the value, or on the first ones it can offer.
    openPanel() {
        var _a, _b;
        if (this.isDisabled || this.readonly || this.isOpen)
            return;
        const [hour, minute] = isTime(this.value) ? this.value.split(':').map(Number) : [null, null];
        this.activeHour = (_a = hour !== null && hour !== void 0 ? hour : HOURS.find((candidate) => !this.hourDisabled(candidate))) !== null && _a !== void 0 ? _a : 0;
        const minutes = this.minutes;
        this.activeMinute =
            minute === null
                ? ((_b = minutes.find((candidate) => !this.minuteDisabled(candidate))) !== null && _b !== void 0 ? _b : 0)
                : minutes.reduce((best, candidate) => (Math.abs(candidate - minute) < Math.abs(best - minute) ? candidate : best));
        this.activeColumn = 'hour';
        this.isOpen = true;
    }
    closePanel(reason = 'api') {
        var _a;
        if (!this.isOpen)
            return;
        this.isOpen = false;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.close(reason);
    }
    // The hour fills the field at once, with the minute already shown (or the first one offered), and moves to the minutes.
    pickHour(hour) {
        var _a;
        if (this.hourDisabled(hour))
            return;
        this.activeHour = hour;
        const minutes = this.minutes;
        if (this.minuteDisabled(this.activeMinute)) {
            this.activeMinute = (_a = minutes.find((candidate) => !this.minuteDisabled(candidate))) !== null && _a !== void 0 ? _a : this.activeMinute;
        }
        this.setTime(`${pad(hour)}:${pad(this.activeMinute)}`);
        this.activeColumn = 'minute';
    }
    pickMinute(minute) {
        var _a;
        if (this.minuteDisabled(minute))
            return;
        this.activeMinute = minute;
        this.setTime(`${pad(this.activeHour)}:${pad(minute)}`);
        this.showValidation(true);
        this.closePanel();
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
    }
    moveActive(step) {
        if (this.activeColumn === 'hour') {
            for (let hour = this.activeHour + step; hour >= 0 && hour < 24; hour += step) {
                if (!this.hourDisabled(hour))
                    return void (this.activeHour = hour);
            }
            return;
        }
        const minutes = this.minutes;
        for (let index = minutes.indexOf(this.activeMinute) + step; index >= 0 && index < minutes.length; index += step) {
            if (!this.minuteDisabled(minutes[index]))
                return void (this.activeMinute = minutes[index]);
        }
    }
    optionId(column, value) {
        return `${this.inputId}-${column}-${value}`;
    }
    renderColumn(column, label, values) {
        const [hour, minute] = isTime(this.value) ? this.value.split(':').map(Number) : [null, null];
        const chosen = column === 'hour' ? hour : hour === this.activeHour ? minute : null;
        const active = column === 'hour' ? this.activeHour : this.activeMinute;
        return (h("ul", { class: "column", role: "listbox", "aria-label": label }, values.map((item) => {
            const disabled = column === 'hour' ? this.hourDisabled(item) : this.minuteDisabled(item);
            return (h("li", { id: this.optionId(column, item), role: "option", part: "picker-option", "aria-selected": chosen === item ? 'true' : 'false', "aria-disabled": disabled ? 'true' : null, class: {
                    option: true,
                    'option--current': item === active,
                    'option--active': item === active && this.activeColumn === column,
                    'option--disabled': disabled,
                }, onClick: () => (column === 'hour' ? this.pickHour(item) : this.pickMinute(item)) }, h("uai-typo", { variant: "body-base", tag: "span", margin: false }, pad(item))));
        })));
    }
    render() {
        var _a, _b;
        const disabled = this.isDisabled;
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
        const locale = timeLocale(this.languageValue);
        const label = (_a = this.label) !== null && _a !== void 0 ? _a : locale.label;
        const panelId = `${this.inputId}-picker`;
        const activeValue = this.activeColumn === 'hour' ? this.activeHour : this.activeMinute;
        return (h(Host, { key: '1cca79b469cbdd2118ddcc01eea1edaf934b9ab3', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input-time--size-${this.sizeValue}`]: true,
                'uai-input-time--danger': invalid,
                'uai-input-time--success': success,
                'uai-input-time--disabled': disabled,
                'uai-input-time--readonly': this.readonly && !disabled,
                'uai-input-time--open': this.isOpen,
            } }, h("div", { key: 'dd1f4b9b41094c91e081b5d45f8eca02f9cd38b4', class: "input" }, label && (h("label", { key: '6493d75d5f23f17ea8dc42beb8f60780c8e478d0', class: "input__label", for: this.inputId }, h("uai-typo", { key: '20c8a5c99d73fb242563ce99814e0f72ebdb6a27', variant: "caption", bold: "semibold", tag: "span", margin: false }, label))), h("div", { key: 'fec2e79a8b73004c01a3ddc8b0d288e1c143f600', class: "input__control", part: "input-container", ref: (control) => (this.control = control), onClick: this.onControlClick }, this.icon && h("uai-icon", { key: '5baf0c543f70c8891900804bcd6e179aeb05699c', class: "input__icon", name: this.icon, size: "medium" }), h("div", { key: '1c02602f7e09a965d7d1fccc041998e844b566df', class: "input__field" }, h("input", { key: '85300d45b1ea6200867b80c365ad14a5598bc8e2', id: this.inputId, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: "text", role: "combobox", inputMode: "numeric", autocomplete: "off", maxLength: 5, value: this.display, placeholder: (_b = this.placeholder) !== null && _b !== void 0 ? _b : 'hh:mm', required: this.required, readOnly: this.readonly, disabled: disabled, "aria-label": this.ariaLabel || null, "aria-haspopup": "listbox", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-controls": panelId, "aria-activedescendant": this.isOpen ? this.optionId(this.activeColumn, activeValue) : null, "aria-invalid": invalid ? 'true' : null, "aria-describedby": message ? `${this.inputId}-message` : null, "data-test": this.dataTest, onInput: this.onInput, onClick: this.onInputClick, onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.onKeyDown })), invalid && h("uai-icon", { key: 'fd95c33a9471828a529b4b883372e559025fe0bf', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && h("uai-icon", { key: '818363272c5dd39721c67cd620878e560a35abc8', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), !this.readonly && (h("button", { key: '8ae0e730e07b9913eb698eefa6e25af2fdb187b8', type: "button", class: "clock", part: "picker-button", "aria-label": locale.picker, "aria-expanded": this.isOpen ? 'true' : 'false', "aria-controls": panelId, disabled: disabled, onClick: this.onButtonClick }, h("uai-icon", { key: 'e047943c8ceb9644341a47fc8168465727dfb3eb', name: "clock", size: "medium" }))), h("slot", { key: '07eb42e7afde8ec93144be87fedfec1a95a2388b', name: "input-right" })), message && (h("div", { key: '454f2a99ac832d078ca9bf07f1e102a5f91aeeee', id: `${this.inputId}-message`, class: "input__message", part: "input__message" }, h("uai-typo", { key: 'ad2866a17879cb789e8664a1d33aebdc0faebfa4', variant: "caption", tag: "span", margin: false }, message)))), h("div", { key: '820e93dea830902990b0da29d201fcf01c247bd6', id: panelId, ref: (panel) => (this.panel = panel), class: "panel", part: "picker", role: "group", "aria-label": locale.picker, onPointerDown: (event) => event.preventDefault() }, this.isOpen && this.renderColumn('hour', locale.hours, HOURS), this.isOpen && this.renderColumn('minute', locale.minutes, this.minutes))));
    }
    static get is() { return "uai-input-time"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-input-time.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-input-time.css"]
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
                    "text": "Name of the value in the submitted form data, which is the time as HH:mm. Without name (or inputName), the field\nis not submitted."
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
                    "text": "Chosen time as HH:mm, from \"00:00\" to \"23:59\". Empty while the typed time is incomplete."
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
                    "text": "Earliest accepted time, as HH:mm. Earlier hours and minutes are disabled in the panel."
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
                    "text": "Latest accepted time, as HH:mm. Later hours and minutes are disabled in the panel."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max"
            },
            "minuteStep": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Interval of the minutes offered in the panel, from 1 to 30: 5 (default) offers 00, 05, 10\u2026 Typing accepts any\nminute. Use 15 or 30 for appointments; avoid 1, which makes a long list."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "minute-step",
                "defaultValue": "5"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiInputTimeLanguage",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "UaiInputTimeLanguage": {
                            "location": "import",
                            "path": "./uai-input-time-format",
                            "id": "src/components/uai-input-time/uai-input-time-format.ts::UaiInputTimeLanguage",
                            "referenceLocation": "UaiInputTimeLanguage"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Language of the default texts. Can be 'pt_BR' (default), 'en_US', 'es_ES'."
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
                    "original": "UaiInputTimeSize",
                    "resolved": "\"medium\" | \"short\"",
                    "references": {
                        "UaiInputTimeSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input-time/uai-input-time.tsx",
                            "id": "src/components/uai-input-time/uai-input-time.tsx::UaiInputTimeSize"
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
                    "text": "Label shown above the field. Without it, the default text of the language is shown (\"Hor\u00E1rio\")."
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
                    "text": "Text shown while the field is empty. Defaults to \"hh:mm\"."
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
                    "text": "UaiIcon name shown before the time."
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
                    "text": "If true, the time can be selected and copied but not edited; the panel does not open and its button is hidden."
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
                    "text": "If true, the field and the picker button cannot be used and the value is left out of the form data."
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
            "timeErrorMessage": {
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
                    "text": "Message shown when the typed time is incomplete. Without it, the default text is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "time-error-message"
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
                    "text": "Message shown when the time is before min. Without it, the default text with the min time is shown."
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
                    "text": "Message shown when the time is after max. Without it, the default text with the max time is shown."
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
            "activeColumn": {},
            "activeHour": {},
            "activeMinute": {}
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
                    "text": "Emitted when the time changes, by typing, by the panel or programmatically. detail: { value } as HH:mm, or ''\nwhile the typed time is incomplete."
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
                    "text": "Returns true when the time is complete, within min and max, and present when required.",
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
                    "text": "Clears the time.",
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
                    "text": "Opens the time panel. Use for imperative control; pair with close.",
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
                    "text": "Closes the time panel.",
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
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
