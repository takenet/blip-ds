import { Build, Host, h, } from "@stencil/core";
import { warnDeprecated, warnLegacyValue, warnOnce } from "../../utils/deprecation";
import { escapeHtml } from "../../utils/escape-html";
import { UaiFormControl } from "../../utils/uai-form-control";
const TAG = 'uai-input';
const TYPES = ['text', 'email', 'number', 'search'];
const SIZES = ['short', 'medium'];
// Legacy types keep working with the native type until their specialized UAI component exists.
const LEGACY_TYPES = {
    password: { native: 'password', replacement: 'uai-input-password' },
    phonenumber: { native: 'tel', replacement: 'uai-input-phone' },
    date: { native: 'date', replacement: 'uai-input-date or uai-datepicker' },
};
// bds-input props with no place in the standard field: accepted, with a one-time warning (D-6).
const LEGACY_PROPS = [
    ['isTextarea', 'Use uai-textarea for multiline text.'],
    ['rows', 'Use uai-textarea for multiline text.'],
    ['cols', 'Use uai-textarea for multiline text.'],
    ['autoResize', 'Use uai-textarea for multiline text.'],
    ['resizable', 'Use uai-textarea for multiline text.'],
    ['minHeight', 'Use uai-textarea for multiline text.'],
    ['maxHeight', 'Use uai-textarea for multiline text.'],
    ['chips', 'Use uai-input-chips.'],
    ['iconSize', 'The icon size follows the field.'],
    ['debounceDelay', undefined],
];
const VALIDITY_FLAGS = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooLong',
    'tooShort',
    'rangeUnderflow',
    'rangeOverflow',
    'stepMismatch',
    'badInput',
];
let instances = 0;
/**
 * Text field. Use it for short free text, e-mail, numbers and search, with an optional label above and a helper,
 * error or success message below. It takes part in native forms: give it a name to submit its value.
 * Pair with UaiButton in forms. Avoid it for multiline text (use uai-textarea) or for choosing from a list.
 * Wrap the app in UaiThemeProvider.
 *
 * @slot input-left - Content before the text, inside the field border (for example a prefix tag).
 * @slot inside-input-left - Content right before the typed text (for example a currency symbol).
 * @slot input-right - Content after the text (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, adornments and the native input.
 * @part input - The native input element.
 * @part input__message - The helper, error or success message below the field.
 */
export class UaiInput {
    constructor() {
        this.validationDanger = false;
        this.validationText = '';
        this.disabledByForm = false;
        this.defaultValue = '';
        this.id = `uai-input-${++instances}`;
        /**
         * Name of the value in the submitted form data. Same as name, kept from bds-input.
         */
        this.inputName = '';
        /**
         * Kind of text. Can be one of: 'text' (default), 'email', 'number', 'search'.
         * 'password', 'phonenumber' and 'date' still work but are deprecated: use the specialized UAI inputs.
         */
        this.type = 'text';
        /**
         * Height of the field. Can be one of: 'short', 'medium' (default).
         */
        this.size = 'medium';
        /**
         * Label shown above the field. Without a visible label, set aria-label.
         */
        this.label = '';
        /**
         * Example of the expected text, shown while the field is empty. Do not use it as the label.
         */
        this.placeholder = '';
        /**
         * Automatic capitalization on virtual keyboards. Can be one of: 'off' (default), 'none', 'words', 'on', 'sentences', 'characters'.
         */
        this.autoCapitalize = 'off';
        /**
         * Browser autofill hint. Can be one of: 'off' (default), 'on', 'current-password', 'new-password', 'username'.
         */
        this.autoComplete = 'off';
        /**
         * If true, the value can be selected and copied but not edited. It looks like the default state.
         */
        this.readonly = false;
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
         * UaiIcon name shown before the text, for example "search".
         */
        this.icon = '';
        /**
         * If true, the field cannot be focused or edited and is left out of the form data.
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
         * Current text of the field.
         */
        this.value = '';
        /**
         * If true, shows the number of characters typed and maxlength.
         */
        this.counterLength = false;
        /**
         * Ranges of remaining characters that color the counter: warning (feedback/warning) and delete (feedback/error).
         */
        this.counterLengthRule = null;
        /**
         * If true, Enter clears the field after emitting uaiSubmit and does not submit the form (for chat-like fields).
         */
        this.isSubmit = false;
        /**
         * If true, uaiChange emits the value with HTML special characters escaped.
         */
        this.encode = false;
        /**
         * Accessible name of the field when there is no visible label.
         */
        this.ariaLabel = null;
        /**
         * Data test id, set on the native input.
         */
        this.dataTest = null;
        this.onInput = (event) => {
            var _a;
            this.value = event.target.value;
            if (this.type === 'email' && ((_a = this.nativeInput.validity) === null || _a === void 0 ? void 0 : _a.typeMismatch))
                this.showValidation(true);
            this.uaiInput.emit(event);
        };
        this.onBlur = () => {
            if (this.pattern)
                this.uaiPatternValidation.emit(new RegExp(this.pattern).test(this.nativeInput.value));
            this.showValidation(true);
            this.uaiOnBlur.emit();
        };
        this.onFocus = () => {
            this.uaiFocus.emit();
        };
        this.onKeyDown = (event) => {
            var _a, _b;
            if (event.key === 'Enter') {
                if (event.isComposing)
                    return;
                this.uaiSubmit.emit({ event, value: this.value });
                if (this.isSubmit) {
                    event.preventDefault();
                    this.value = '';
                    return;
                }
                if (!event.defaultPrevented)
                    (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.requestSubmit();
            }
            else if (event.key === 'Backspace' || event.key === 'Delete') {
                this.uaiKeyDownBackspace.emit({ event, value: this.value });
            }
        };
        // Clicks on the field box (outside slotted content) focus the native input, as clicking a native field does.
        this.onControlClick = (event) => {
            var _a;
            if (!this.el.contains(event.target))
                (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
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
     * Returns the native input element.
     */
    async getInputElement() {
        return this.nativeInput;
    }
    /**
     * Returns true when the value meets required, minlength, maxlength, min, max, pattern and type.
     */
    async isValid() {
        return this.nativeInput ? this.nativeInput.validity.valid : true;
    }
    /**
     * Clears the value.
     */
    async clear() {
        this.value = '';
    }
    // The browser reads the host name attribute for the form data; inputName fills it when name is not set.
    inputNameChanged() {
        if (!this.name && this.inputName)
            this.name = this.inputName;
    }
    valueChanged(newValue) {
        var _a;
        const value = newValue || '';
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(value);
        this.uaiChange.emit({ value: this.encode ? escapeHtml(value) : value });
    }
    // Native form validation of the host (submit or checkValidity) shows the error state.
    onInvalid() {
        this.showValidation(true);
    }
    componentWillLoad() {
        var _a;
        this.defaultValue = this.value || '';
        this.inputNameChanged();
        // Real browsers only: the Stencil mock DOM attaches internals without the form API.
        if (typeof ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === 'function') {
            this.formControl = new UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.defaultValue,
                onReset: (value) => {
                    this.validationDanger = false;
                    this.value = value;
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
        this.warnLegacyUsage();
    }
    componentDidRender() {
        if (this.nativeInput && this.nativeInput.value !== (this.value || '')) {
            this.nativeInput.value = this.value || '';
        }
        this.syncValidity();
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
    warnLegacyUsage() {
        for (const [prop, hint] of LEGACY_PROPS) {
            const value = this[prop];
            if (value !== undefined && value !== null)
                warnDeprecated(TAG, prop, hint);
        }
        const legacy = LEGACY_TYPES[this.type];
        if (legacy)
            warnDeprecated(TAG, `type=${this.type}`, `Use ${legacy.replacement}.`);
        if (Build.isDev && !this.label && !this.ariaLabel) {
            warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
        }
    }
    get nativeType() {
        if (TYPES.includes(this.type))
            return this.type;
        const legacy = LEGACY_TYPES[this.type];
        if (legacy)
            return legacy.native;
        warnLegacyValue(TAG, 'type', this.type, 'text');
        return 'text';
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
        warnLegacyValue(TAG, 'size', this.size, 'medium');
        return 'medium';
    }
    // Message for the first failing constraint: the contract prop or, without it, the browser message.
    messageFor(validity) {
        const native = this.nativeInput.validationMessage;
        if (validity.valueMissing)
            return this.requiredErrorMessage || native;
        if (validity.tooShort)
            return this.minlengthErrorMessage || native;
        if (validity.rangeUnderflow)
            return this.minErrorMessage || native;
        if (validity.rangeOverflow)
            return this.maxErrorMessage || native;
        if (validity.typeMismatch && this.type === 'email')
            return this.emailErrorMessage || native;
        if (validity.badInput && this.type === 'number')
            return this.numberErrorMessage || native;
        return native;
    }
    syncValidity() {
        if (!this.nativeInput || !this.formControl)
            return;
        const validity = this.nativeInput.validity;
        if (!validity)
            return;
        const flags = {};
        for (const flag of VALIDITY_FLAGS)
            if (validity[flag])
                flags[flag] = true;
        this.formControl.setValidity(flags, validity.valid ? '' : this.messageFor(validity), this.nativeInput);
        if (this.validationDanger)
            this.showValidation(!validity.valid);
    }
    showValidation(show) {
        var _a;
        const validity = (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.validity;
        const danger = show && !!validity && !validity.valid;
        const text = danger ? this.messageFor(validity) : '';
        if (danger !== this.validationDanger)
            this.validationDanger = danger;
        if (text !== this.validationText)
            this.validationText = text;
    }
    counterState(length) {
        const rule = this.counterLengthRule;
        if (!rule || !this.maxlength)
            return null;
        const remaining = this.maxlength - length;
        if (rule.delete && remaining <= rule.delete.max)
            return 'delete';
        if (rule.warning && remaining >= rule.warning.min && remaining <= rule.warning.max)
            return 'warning';
        return null;
    }
    render() {
        const disabled = this.disabled || this.disabledByForm;
        const invalid = this.danger || this.validationDanger;
        const success = this.success && !invalid;
        const message = this.danger
            ? this.errorMessage || this.validationText
            : this.validationDanger
                ? this.validationText
                : success
                    ? this.successMessage
                    : this.helperMessage;
        const length = (this.value || '').length;
        const counterState = this.counterState(length);
        const describedBy = [message && `${this.id}-message`, this.counterLength && `${this.id}-counter`]
            .filter(Boolean)
            .join(' ');
        return (h(Host, { key: '27beea14c001891ee323741cd45d7e3d8cb3fd54', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input--size-${this.sizeValue}`]: true,
                'uai-input--danger': invalid,
                'uai-input--success': success,
                'uai-input--disabled': disabled,
                'uai-input--readonly': this.readonly && !disabled,
            } }, h("div", { key: 'a7582405d2cef98a8d5a7f23f4e6ea302c5b5692', class: "input" }, this.label && (h("label", { key: 'b50a1c21f8f9ee64e19266bc4f2952eb26a9fabb', class: "input__label", for: this.id }, h("uai-typo", { key: 'afa58d7b4820e5bb16d62038685d9551da0300a2', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), h("div", { key: '88733fbbe4cae7965eb1f4d70fddc7b5a1155654', class: "input__control", part: "input-container", onClick: this.onControlClick }, this.icon && h("uai-icon", { key: '8205cf13f106b75c2b06dca9981bdc3c5260ba6e', class: "input__icon", name: this.icon, size: "medium" }), h("slot", { key: 'c4e79087c5da0e69b9cd8367de567f6707a319ec', name: "input-left" }), h("div", { key: 'd267c70bdf828fbdd558e5b152e46499fef868aa', class: "input__field" }, h("slot", { key: 'bb14fdaa65d7acec879d5cb3864f0233c9665133', name: "inside-input-left" }), h("input", { key: 'ff025b0556c227c6194fd296c134e9da7b97c865', id: this.id, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: this.nativeType, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, pattern: this.pattern, value: this.value || '', placeholder: this.placeholder, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, required: this.required, readOnly: this.readonly, disabled: disabled, "aria-label": this.label ? null : this.ariaLabel, "aria-invalid": invalid ? 'true' : null, "aria-describedby": describedBy || null, "data-test": this.dataTest, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown })), this.counterLength && (h("uai-typo", { key: '3a8b02c40510da1037fcaf519da2678f41dd1463', id: `${this.id}-counter`, class: { input__counter: true, [`input__counter--${counterState}`]: !!counterState }, variant: "caption", tag: "span", margin: false }, this.maxlength ? `${length}/${this.maxlength}` : `${length}`)), invalid && h("uai-icon", { key: '1409a8cfa275ce0153b827af7785d2a4ce4d5183', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && h("uai-icon", { key: 'bfba482d59ad8d5faf883c2c9064c278573fce6e', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), h("slot", { key: 'd02aa717a5cccafa3a46d9e3646127e10206b73f', name: "input-right" })), message && (h("div", { key: '9670679af1f3efdb35665028da83b97bf0265ee2', id: `${this.id}-message`, class: "input__message", part: "input__message" }, h("uai-typo", { key: '9de5d72132830fc98f95d3966defb4fc791f9c8a', variant: "caption", tag: "span", margin: false }, message))))));
    }
    static get is() { return "uai-input"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-input.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-input.css"]
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
                    "text": "Name of the value in the submitted form data. Without name (or inputName), the field is not submitted."
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
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiInputType | UaiInputLegacyType",
                    "resolved": "\"date\" | \"email\" | \"number\" | \"password\" | \"phonenumber\" | \"search\" | \"text\"",
                    "references": {
                        "UaiInputType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input/uai-input.tsx",
                            "id": "src/components/uai-input/uai-input.tsx::UaiInputType"
                        },
                        "UaiInputLegacyType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input/uai-input.tsx",
                            "id": "src/components/uai-input/uai-input.tsx::UaiInputLegacyType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Kind of text. Can be one of: 'text' (default), 'email', 'number', 'search'.\n'password', 'phonenumber' and 'date' still work but are deprecated: use the specialized UAI inputs."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "type",
                "defaultValue": "'text'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiInputSize",
                    "resolved": "\"medium\" | \"short\"",
                    "references": {
                        "UaiInputSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input/uai-input.tsx",
                            "id": "src/components/uai-input/uai-input.tsx::UaiInputSize"
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
                    "text": "Label shown above the field. Without a visible label, set aria-label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "''"
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
                    "text": "Example of the expected text, shown while the field is empty. Do not use it as the label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
                "defaultValue": "''"
            },
            "autoCapitalize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputAutocapitalize",
                    "resolved": "\"characters\" | \"none\" | \"off\" | \"on\" | \"sentences\" | \"words\"",
                    "references": {
                        "InputAutocapitalize": {
                            "location": "import",
                            "path": "../input/input-interface",
                            "id": "src/components/input/input-interface.ts::InputAutocapitalize",
                            "referenceLocation": "InputAutocapitalize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Automatic capitalization on virtual keyboards. Can be one of: 'off' (default), 'none', 'words', 'on', 'sentences', 'characters'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto-capitalize",
                "defaultValue": "'off'"
            },
            "autoComplete": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "InputAutoComplete",
                    "resolved": "\"current-password\" | \"new-password\" | \"off\" | \"on\" | \"username\"",
                    "references": {
                        "InputAutoComplete": {
                            "location": "import",
                            "path": "../input/input-interface",
                            "id": "src/components/input/input-interface.ts::InputAutoComplete",
                            "referenceLocation": "InputAutoComplete"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Browser autofill hint. Can be one of: 'off' (default), 'on', 'current-password', 'new-password', 'username'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto-complete",
                "defaultValue": "'off'"
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
                    "text": "Largest accepted value for type \"number\"."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max"
            },
            "maxlength": {
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
                    "text": "Largest number of characters. Typing stops at the limit."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "maxlength"
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
                    "text": "Smallest accepted value for type \"number\"."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min"
            },
            "minlength": {
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
                    "text": "Smallest number of characters. Checked when the field loses focus and on submit."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "minlength"
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
                    "text": "If true, the value can be selected and copied but not edited. It looks like the default state."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "readonly",
                "defaultValue": "false"
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
            "pattern": {
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
                    "text": "Regular expression the value must match. Checked when the field loses focus and on submit."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pattern"
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
                    "text": "UaiIcon name shown before the text, for example \"search\"."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "icon",
                "defaultValue": "''"
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
                    "text": "If true, the field cannot be focused or edited and is left out of the form data."
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
                    "text": "Current text of the field."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "''"
            },
            "counterLength": {
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
                    "text": "If true, shows the number of characters typed and maxlength."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "counter-length",
                "defaultValue": "false"
            },
            "counterLengthRule": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "InputCounterLengthRules",
                    "resolved": "{ warning: CounterTextRule; delete: CounterTextRule; }",
                    "references": {
                        "InputCounterLengthRules": {
                            "location": "import",
                            "path": "../input/input-interface",
                            "id": "src/components/input/input-interface.ts::InputCounterLengthRules",
                            "referenceLocation": "InputCounterLengthRules"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Ranges of remaining characters that color the counter: warning (feedback/warning) and delete (feedback/error)."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            },
            "isSubmit": {
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
                    "text": "If true, Enter clears the field after emitting uaiSubmit and does not submit the form (for chat-like fields)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-submit",
                "defaultValue": "false"
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
                    "text": "Message shown when a required field is empty. Without it, the browser message is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required-error-message"
            },
            "minlengthErrorMessage": {
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
                    "text": "Message shown when the text is shorter than minlength. Without it, the browser message is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "minlength-error-message"
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
                    "text": "Message shown when the number is smaller than min. Without it, the browser message is shown."
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
                    "text": "Message shown when the number is larger than max. Without it, the browser message is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-error-message"
            },
            "emailErrorMessage": {
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
                    "text": "Message shown when an e-mail is invalid. Without it, the browser message is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "email-error-message"
            },
            "numberErrorMessage": {
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
                    "text": "Message shown when a number is invalid. Without it, the browser message is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "number-error-message"
            },
            "encode": {
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
                    "text": "If true, uaiChange emits the value with HTML special characters escaped."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "encode",
                "defaultValue": "false"
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
                    "text": "Accessible name of the field when there is no visible label."
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
            },
            "isTextarea": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Use uai-textarea for multiline text. Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-textarea"
            },
            "rows": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Use uai-textarea. Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "rows"
            },
            "cols": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Use uai-textarea. Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "cols"
            },
            "autoResize": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Use uai-textarea. Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto-resize"
            },
            "resizable": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Use uai-textarea. Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "resizable"
            },
            "minHeight": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Use uai-textarea. Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min-height"
            },
            "maxHeight": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Use uai-textarea. Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-height"
            },
            "chips": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Use uai-input-chips. Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "chips"
            },
            "iconSize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'small' | 'medium'",
                    "resolved": "\"medium\" | \"small\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "The icon size follows the field. Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon-size"
            },
            "debounceDelay": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "debounce-delay"
            }
        };
    }
    static get states() {
        return {
            "validationDanger": {},
            "validationText": {},
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
                    "text": "Emitted when the value changes, by typing or programmatically. detail: { value }."
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
                "method": "uaiSubmit",
                "name": "uaiSubmit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted on Enter. detail: { event, value }. Inside a form, call detail.event.preventDefault() to stop the submission."
                },
                "complexType": {
                    "original": "{ event: KeyboardEvent; value: string }",
                    "resolved": "{ event: KeyboardEvent; value: string; }",
                    "references": {
                        "KeyboardEvent": {
                            "location": "global",
                            "id": "global::KeyboardEvent"
                        }
                    }
                }
            }, {
                "method": "uaiPatternValidation",
                "name": "uaiPatternValidation",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a field with pattern loses focus. detail: true if the value matches."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }, {
                "method": "uaiKeyDownBackspace",
                "name": "uaiKeyDownBackspace",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted on Backspace or Delete. detail: { event, value }."
                },
                "complexType": {
                    "original": "{ event: KeyboardEvent; value: string }",
                    "resolved": "{ event: KeyboardEvent; value: string; }",
                    "references": {
                        "KeyboardEvent": {
                            "location": "global",
                            "id": "global::KeyboardEvent"
                        }
                    }
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
            "getInputElement": {
                "complexType": {
                    "signature": "() => Promise<HTMLInputElement>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLInputElement": {
                            "location": "global",
                            "id": "global::HTMLInputElement"
                        }
                    },
                    "return": "Promise<HTMLInputElement>"
                },
                "docs": {
                    "text": "Returns the native input element.",
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
                    "text": "Returns true when the value meets required, minlength, maxlength, min, max, pattern and type.",
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
                    "text": "Clears the value.",
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
