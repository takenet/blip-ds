import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';
import { U as UaiFormControl } from './uai-form-control-BkRP7pRQ.js';

const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/;
const LENGTHS = { day: 2, month: 2, year: 4 };
const LOCALES = {
    pt_BR: {
        label: 'Data',
        calendar: 'Abrir calendário',
        required: 'Informe a data.',
        date: 'Informe uma data válida.',
        min: (date) => `Informe uma data a partir de ${date}.`,
        max: (date) => `Informe uma data até ${date}.`,
    },
    en_US: {
        label: 'Date',
        calendar: 'Open calendar',
        required: 'Enter the date.',
        date: 'Enter a valid date.',
        min: (date) => `Enter a date on or after ${date}.`,
        max: (date) => `Enter a date on or before ${date}.`,
    },
    es_ES: {
        label: 'Fecha',
        calendar: 'Abrir calendario',
        required: 'Ingrese la fecha.',
        date: 'Ingrese una fecha válida.',
        min: (date) => `Ingrese una fecha a partir del ${date}.`,
        max: (date) => `Ingrese una fecha hasta el ${date}.`,
    },
};
const dateLocale = (language) => LOCALES[language];
function regionalDateFormat(locale = typeof window === 'undefined' ? undefined : window.navigator.language) {
    const parts = new Intl.DateTimeFormat(locale, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        calendar: 'gregory',
        numberingSystem: 'latn',
    }).formatToParts(new Date(2026, 11, 25));
    const order = parts
        .map((part) => part.type)
        .filter((part) => part === 'day' || part === 'month' || part === 'year');
    const separator = parts.find((part) => part.type === 'literal').value;
    const labels = { day: 'DD', month: 'MM', year: 'YYYY' };
    return { order, separator, placeholder: order.map((part) => labels[part]).join(separator) };
}
/** True when the text is an ISO YYYY-MM-DD date that exists in the calendar. */
function isIsoDate(text) {
    const match = ISO_DATE.exec(text || '');
    if (!match)
        return false;
    const [year, month, day] = match.slice(1).map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    return year > 0 && date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}
/** Groups the typed digits in the browser's regional date format. */
function groupDigits(digits, locale) {
    const { order, separator } = regionalDateFormat(locale);
    const groups = [];
    let rest = digits;
    for (const part of order) {
        if (!rest)
            break;
        groups.push(rest.slice(0, LENGTHS[part]));
        rest = rest.slice(LENGTHS[part]);
    }
    return groups.join(separator);
}
/** ISO date for eight typed digits, or '' when they are incomplete or name a day that does not exist. */
function displayToIso(digits, locale) {
    if (digits.length !== 8)
        return '';
    const parts = {};
    let offset = 0;
    for (const part of regionalDateFormat(locale).order) {
        parts[part] = digits.slice(offset, offset + LENGTHS[part]);
        offset += LENGTHS[part];
    }
    const iso = `${parts.year}-${parts.month}-${parts.day}`;
    return isIsoDate(iso) ? iso : '';
}
/** Date in the browser's regional format for a valid ISO date, or ''. */
function isoToDisplay(iso, locale) {
    const match = ISO_DATE.exec(iso || '');
    if (!match || !isIsoDate(iso))
        return '';
    const parts = { year: match[1], month: match[2], day: match[3] };
    const { order, separator } = regionalDateFormat(locale);
    return order.map((part) => parts[part]).join(separator);
}

const uaiInputDateCss = () => `:host{--input-height:var(--uai-control-height-medium, 2.5rem);--input-background:var(--uai-surface-paper, #ffffff);--input-border:var(--uai-border-input, #adb4b8);--input-content:var(--uai-content-primary, #242729);--input-label:var(--uai-content-primary, #242729);--input-message:var(--uai-content-secondary, #5f676d);--input-feedback:var(--input-content);--input-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:var(--uai-input-date-width, 100%)}:host(.uai-input-date--size-short){--input-height:var(--uai-control-height-short, 2rem)}:host(.uai-input-date--danger){--input-border:var(--uai-feedback-error, #cf0022);--input-label:var(--uai-feedback-error, #cf0022);--input-message:var(--uai-feedback-error, #cf0022);--input-feedback:var(--uai-feedback-error, #cf0022)}:host(.uai-input-date--success){--input-border:var(--uai-feedback-success, #3da329);--input-message:var(--uai-feedback-success, #3da329);--input-feedback:var(--uai-feedback-success, #3da329)}:host(.uai-input-date--disabled){--input-background:var(--uai-surface-muted, #f2f3f3);--input-border:var(--uai-border-default, #e4e6e7);--input-content:var(--uai-content-disabled, #848e94);--input-label:var(--uai-content-disabled, #848e94);--input-message:var(--uai-content-disabled, #848e94);--input-feedback:var(--uai-content-disabled, #848e94)}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.input__label,.input__message{--uai-typo-color:currentColor}.input__label{color:var(--input-label)}.input__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--input-message)}.input__control{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);height:var(--input-height);position:relative;padding:0 var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--input-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--input-background);color:var(--input-content);cursor:text;-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.input__control{-webkit-transition:none;transition:none}}.input__control:focus-within{--input-border:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo)}@media (forced-colors: active){.input__control:focus-within{-webkit-box-shadow:none;box-shadow:none;outline:var(--uai-border-width-thick, 2px) solid CanvasText}}:host(:not(.uai-input-date--disabled):not(.uai-input-date--readonly):not(.uai-input-date--danger):not(.uai-input-date--success)) .input__control:hover:not(:focus-within){--input-border:var(--uai-content-secondary, #5f676d)}:host(.uai-input-date--disabled) .input__control{cursor:not-allowed}.input__icon{-ms-flex:none;flex:none;color:var(--input-content)}.input__feedback{-ms-flex:none;flex:none;color:var(--input-feedback)}.input__field{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;min-width:0;height:100%}.input__native{-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;height:100%;margin:0;padding:0;border:0;outline:none;background:transparent;color:inherit;font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem);text-overflow:ellipsis;-webkit-appearance:none;-moz-appearance:none;appearance:none}.input__native::-webkit-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-moz-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:disabled{cursor:not-allowed;opacity:1;-webkit-text-fill-color:currentColor}.input__native:disabled::-webkit-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-moz-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled:-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::placeholder{color:var(--uai-content-disabled, #848e94)}.calendar{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:var(--uai-spacing-2xs, 0.25rem);border:0;border-radius:var(--uai-radius-md, 0.5rem);background:transparent;color:var(--input-content);cursor:pointer;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.calendar{-webkit-transition:none;transition:none}}.calendar:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.calendar:hover:not(:disabled){background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}.calendar:disabled{cursor:not-allowed}@media (forced-colors: active){.calendar{border:var(--uai-border-width-default, 1px) solid ButtonText}}.picker{position:absolute;right:0;bottom:0;width:0;height:0;margin:0;padding:0;border:0;opacity:0;pointer-events:none}`;

const SIZES = ['short', 'medium'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
let instances = 0;
const UaiInputDate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiChange = createEvent(this, "uaiChange");
        this.uaiInput = createEvent(this, "uaiInput");
        this.uaiFocus = createEvent(this, "uaiFocus");
        this.uaiOnBlur = createEvent(this, "uaiOnBlur");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.display = '';
        this.validationDanger = false;
        this.disabledByForm = false;
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
            this.uaiInput.emit(event);
        };
        this.onFocus = () => {
            this.uaiFocus.emit();
        };
        this.onBlur = () => {
            this.showValidation(true);
            this.uaiOnBlur.emit();
        };
        this.onKeyDown = (event) => {
            var _a, _b;
            if (event.key === 'ArrowDown' && event.altKey) {
                event.preventDefault();
                this.openCalendar();
            }
            else if (event.key === 'Enter' && !event.isComposing) {
                (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.requestSubmit();
            }
        };
        this.openCalendar = () => {
            var _a;
            if (!this.picker || this.disabled || this.disabledByForm || this.readonly)
                return;
            this.picker.value = isIsoDate(this.value) ? this.value : '';
            try {
                this.picker.showPicker();
            }
            catch (_b) {
                (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
            }
        };
        this.onPick = () => {
            var _a, _b;
            const value = ((_a = this.picker) === null || _a === void 0 ? void 0 : _a.value) || '';
            if (!isIsoDate(value))
                return;
            this.display = isoToDisplay(value);
            this.value = value;
            this.showValidation(true);
            (_b = this.nativeInput) === null || _b === void 0 ? void 0 : _b.focus();
        };
        // Clicks on the field box (outside the button and slotted content) focus the input, as a native field does.
        this.onControlClick = (event) => {
            var _a, _b, _c;
            if ((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest) === null || _b === void 0 ? void 0 : _b.call(_a, 'button'))
                return;
            if (!this.el.contains(event.target))
                (_c = this.nativeInput) === null || _c === void 0 ? void 0 : _c.focus();
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
    }
    componentDidRender() {
        var _a;
        if (this.nativeInput && this.nativeInput.value !== this.display)
            this.nativeInput.value = this.display;
        const { flags, message } = this.validity();
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValidity(flags, message, this.nativeInput);
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
        return 'pt_BR';
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
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
        return (h(Host, { key: '27d80385d9e70753b2560a4012cf2e8af63480d6', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input-date--size-${this.sizeValue}`]: true,
                'uai-input-date--danger': invalid,
                'uai-input-date--success': success,
                'uai-input-date--disabled': disabled,
                'uai-input-date--readonly': this.readonly && !disabled,
            } }, h("div", { key: 'e54e1e47dfc9c160f44cb40dad204027379a7f31', class: "input" }, label && (h("label", { key: '67eab2ed02a29bb5a374ea3f5d83415f4b76090d', class: "input__label", for: this.inputId }, h("uai-typo", { key: '19ff139c7a4c9427318ac33faff7fd54a0a7744a', variant: "caption", bold: "semibold", tag: "span", margin: false }, label))), h("div", { key: 'c864b6479c2349ce5ed5799b642d2c2400c674bb', class: "input__control", part: "input-container", onClick: this.onControlClick }, this.icon && h("uai-icon", { key: '4fb851061681c50e1ba9fc65c9a7a443762f6cde', class: "input__icon", name: this.icon, size: "medium" }), h("div", { key: 'd447d9ed2e309a4657f190c28dbc5d6c37e28466', class: "input__field" }, h("input", { key: '7d5083adfcde4060e249d7fd36c23ee656f6afc6', id: this.inputId, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: "text", inputMode: "numeric", autocomplete: "off", maxLength: regionalDateFormat().placeholder.length, value: this.display, placeholder: (_b = this.placeholder) !== null && _b !== void 0 ? _b : regionalDateFormat().placeholder, required: this.required, readOnly: this.readonly, disabled: disabled, "aria-label": this.ariaLabel || null, "aria-invalid": invalid ? 'true' : null, "aria-describedby": message ? `${this.inputId}-message` : null, "data-test": this.dataTest, onInput: this.onInput, onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.onKeyDown })), invalid && h("uai-icon", { key: 'dc0d9bb323a764701f415d04c24cee191e500831', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && h("uai-icon", { key: '958e013cc0ab8930d8d50eb21962389db904964a', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), !this.readonly && (h("button", { key: '8983ca425d0b693a663b1e79adf3854bfb802d1a', type: "button", class: "calendar", part: "calendar-button", "aria-label": locale.calendar, disabled: disabled, onClick: this.openCalendar }, h("uai-icon", { key: '6197e1086b7ed7577644b833315592bac90486ad', name: "calendar", size: "medium" }))), h("input", { key: 'a8e7f3eeb79417f1c2442e01fcc11cf3dcd7d2aa', ref: (picker) => (this.picker = picker), class: "picker", type: "date", tabindex: "-1", "aria-hidden": "true", min: isIsoDate(this.min) ? this.min : undefined, max: isIsoDate(this.max) ? this.max : undefined, disabled: disabled, onChange: this.onPick }), h("slot", { key: 'fea0b0b9e203ba7b3ad5128a4f29d6dd963bb562', name: "input-right" })), message && (h("div", { key: 'dbbb39d0eaab27751109e1fd4fd0cf2b87e8e52f', id: `${this.inputId}-message`, class: "input__message", part: "input__message" }, h("uai-typo", { key: 'd3e02da4ffdd71c9a8e7a31352fe9c320b8e9911', variant: "caption", tag: "span", margin: false }, message))))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "inputName": [{
                "inputNameChanged": 0
            }],
        "value": [{
                "valueChanged": 0
            }]
    }; }
};
UaiInputDate.style = uaiInputDateCss();

export { UaiInputDate as uai_input_date };
