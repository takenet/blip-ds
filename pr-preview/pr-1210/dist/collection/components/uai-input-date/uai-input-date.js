import { Build, Host, h, } from "@stencil/core";
import { warnLegacyValue, warnOnce } from "../../utils/deprecation";
import { UaiFormControl } from "../../utils/uai-form-control";
import { dateLocale, displayToIso, groupDigits, isIsoDate, isoToDisplay, regionalDateFormat, } from "./uai-input-date-format";
const TAG = 'uai-input-date';
const SIZES = ['short', 'medium'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
let instances = 0;
/**
 * Date field. The person types the date in the browser's regional format or picks it in the browser calendar;
 * value, min, max and the submitted form value are ISO YYYY-MM-DD. Use it
 * for a single known date, such as a birth or due date. Pair with UaiButton in forms. Avoid it for periods, presets or
 * times (use uai-datepicker when available). Wrap the app in UaiThemeProvider.
 *
 * @slot input-right - Content after the calendar button (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, the native input and the calendar button.
 * @part input - The native text input with the date in the browser's regional format.
 * @part input__message - The helper, error or success message below the field.
 * @part calendar-button - The button that opens the browser calendar.
 */
export class UaiInputDate {
    constructor() {
        this.display = '';
        this.validationDanger = false;
        this.disabledByForm = false;
        this.defaultValue = '';
        this.typing = false;
        this.id = `uai-input-date-${++instances}`;
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
        if (Build.isDev && this.label === '' && !this.ariaLabel) {
            warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
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
        return (h(Host, { key: '6ac62dcc4473f1ac274499b532c664e6e58b2281', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input-date--size-${this.sizeValue}`]: true,
                'uai-input-date--danger': invalid,
                'uai-input-date--success': success,
                'uai-input-date--disabled': disabled,
                'uai-input-date--readonly': this.readonly && !disabled,
            } }, h("div", { key: 'a5eb18f22a16a9db0986c4c83171d76e5ab3a8c6', class: "input" }, label && (h("label", { key: '6c96c2b6fb806ff9b477bdd241880e90c17ff48d', class: "input__label", for: this.id }, h("uai-typo", { key: '5546fef7120c350a6a1c53024932edfe7833feb0', variant: "caption", bold: "semibold", tag: "span", margin: false }, label))), h("div", { key: '602ee37d407d2c3d79f720a9f21e7d0011a7c929', class: "input__control", part: "input-container", onClick: this.onControlClick }, this.icon && h("uai-icon", { key: '44c554b4afcd8dd11c3c502d51da18ceea237017', class: "input__icon", name: this.icon, size: "medium" }), h("div", { key: '2d01ae4750e678f38d86b96db85ed7c022860ddd', class: "input__field" }, h("input", { key: 'dba56191dda0124450b745c1a39f8109d41162bc', id: this.id, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: "text", inputMode: "numeric", autocomplete: "off", maxLength: regionalDateFormat().placeholder.length, value: this.display, placeholder: (_b = this.placeholder) !== null && _b !== void 0 ? _b : regionalDateFormat().placeholder, required: this.required, readOnly: this.readonly, disabled: disabled, "aria-label": this.ariaLabel || null, "aria-invalid": invalid ? 'true' : null, "aria-describedby": message ? `${this.id}-message` : null, "data-test": this.dataTest, onInput: this.onInput, onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.onKeyDown })), invalid && h("uai-icon", { key: 'c98dde920b0980a4b63a7027dc25ca93cd4ac732', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && h("uai-icon", { key: '47a424d6a327a2b685200e2d42c8f58fc8f102ac', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), !this.readonly && (h("button", { key: '390ee98efdfb90d9bd3bc969598f2c30735b0c03', type: "button", class: "calendar", part: "calendar-button", "aria-label": locale.calendar, disabled: disabled, onClick: this.openCalendar }, h("uai-icon", { key: '83491c4c2a485ef3be7d5a0be920b7a31c7a2e6b', name: "calendar", size: "medium" }))), h("input", { key: '7fa476de1580e67859b0a57b0cb8f122988a9932', ref: (picker) => (this.picker = picker), class: "picker", type: "date", tabindex: "-1", "aria-hidden": "true", min: isIsoDate(this.min) ? this.min : undefined, max: isIsoDate(this.max) ? this.max : undefined, disabled: disabled, onChange: this.onPick }), h("slot", { key: '705fe1a4c98cbad76661d564258bf302be826b37', name: "input-right" })), message && (h("div", { key: 'a9d24d335618dfb7b6dc5896ca435b934723ef64', id: `${this.id}-message`, class: "input__message", part: "input__message" }, h("uai-typo", { key: '1f23520cd7307c7d99350d0d3f9f4a31b51ec04d', variant: "caption", tag: "span", margin: false }, message))))));
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
            "disabledByForm": {}
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
