import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';
import { e as escapeHtml } from './escape-html-C0cO-JTe.js';
import { U as UaiFormControl } from './uai-form-control-BkRP7pRQ.js';

const uaiInputCss = () => `:host{--input-height:var(--uai-control-height-medium, 2.5rem);--input-background:var(--uai-surface-paper, #ffffff);--input-border:var(--uai-border-input, #adb4b8);--input-content:var(--uai-content-primary, #242729);--input-label:var(--uai-content-primary, #242729);--input-message:var(--uai-content-secondary, #5f676d);--input-feedback:var(--input-content);--input-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:var(--uai-input-width, 100%)}:host(.uai-input--size-short){--input-height:var(--uai-control-height-short, 2rem)}:host(.uai-input--danger){--input-border:var(--uai-feedback-error, #cf0022);--input-label:var(--uai-feedback-error, #cf0022);--input-message:var(--uai-feedback-error, #cf0022);--input-feedback:var(--uai-feedback-error, #cf0022)}:host(.uai-input--success){--input-border:var(--uai-feedback-success, #3da329);--input-message:var(--uai-feedback-success, #3da329);--input-feedback:var(--uai-feedback-success, #3da329)}:host(.uai-input--disabled){--input-background:var(--uai-surface-muted, #f2f3f3);--input-border:var(--uai-border-default, #e4e6e7);--input-content:var(--uai-content-disabled, #848e94);--input-label:var(--uai-content-disabled, #848e94);--input-message:var(--uai-content-disabled, #848e94);--input-feedback:var(--uai-content-disabled, #848e94)}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.input__label,.input__message{--uai-typo-color:currentColor}.input__label{color:var(--input-label)}.input__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--input-message)}.input__control{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);height:var(--input-height);padding:0 var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--input-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--input-background);color:var(--input-content);cursor:text;-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.input__control{-webkit-transition:none;transition:none}}.input__control:focus-within{--input-border:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo)}@media (forced-colors: active){.input__control:focus-within{-webkit-box-shadow:none;box-shadow:none;outline:var(--uai-border-width-thick, 2px) solid CanvasText}}:host(:not(.uai-input--disabled):not(.uai-input--readonly):not(.uai-input--danger):not(.uai-input--success)) .input__control:hover:not(:focus-within){--input-border:var(--uai-content-secondary, #5f676d)}:host(.uai-input--disabled) .input__control{cursor:not-allowed}.input__field{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);min-width:0;height:100%}.input__native{-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;height:100%;margin:0;padding:0;border:0;outline:none;background:transparent;color:inherit;font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem);text-overflow:ellipsis;-webkit-appearance:none;-moz-appearance:none;appearance:none}.input__native::-webkit-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-moz-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:disabled{cursor:not-allowed;opacity:1;-webkit-text-fill-color:currentColor}.input__native:disabled::-webkit-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-moz-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled:-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::placeholder{color:var(--uai-content-disabled, #848e94)}.input__native[type=number]{-moz-appearance:textfield}.input__native::-webkit-inner-spin-button,.input__native::-webkit-outer-spin-button,.input__native::-webkit-search-cancel-button,.input__native::-webkit-search-decoration{margin:0;-webkit-appearance:none;appearance:none}.input__icon{-ms-flex:none;flex:none;color:var(--input-content)}.input__feedback{-ms-flex:none;flex:none;color:var(--input-feedback)}.input__counter{--uai-typo-color:currentColor;-ms-flex:none;flex:none;color:var(--uai-content-secondary, #5f676d)}.input__counter--warning{color:var(--uai-feedback-warning, #ff8000)}.input__counter--delete{color:var(--uai-feedback-error, #cf0022)}:host(.uai-input--disabled) .input__counter{color:var(--uai-content-disabled, #848e94)}`;

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
const UaiInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiChange = createEvent(this, "uaiChange");
        this.uaiInput = createEvent(this, "uaiInput");
        this.uaiOnBlur = createEvent(this, "uaiOnBlur");
        this.uaiFocus = createEvent(this, "uaiFocus");
        this.uaiSubmit = createEvent(this, "uaiSubmit");
        this.uaiPatternValidation = createEvent(this, "uaiPatternValidation");
        this.uaiKeyDownBackspace = createEvent(this, "uaiKeyDownBackspace");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
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
        }
    }
    get nativeType() {
        if (TYPES.includes(this.type))
            return this.type;
        const legacy = LEGACY_TYPES[this.type];
        if (legacy)
            return legacy.native;
        return 'text';
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
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
        return (h(Host, { key: 'b32215e54b52d3cb49d6641c841c3b47d622b601', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input--size-${this.sizeValue}`]: true,
                'uai-input--danger': invalid,
                'uai-input--success': success,
                'uai-input--disabled': disabled,
                'uai-input--readonly': this.readonly && !disabled,
            } }, h("div", { key: '5c20bfe50b2bef79a6df16be22512baaeb4f61b6', class: "input" }, this.label && (h("label", { key: '10124b2b61bfe1dc4f86b8aec058775a22308c2f', class: "input__label", for: this.id }, h("uai-typo", { key: '6c8a746130ce3e7012fbda973671991ca4115059', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), h("div", { key: '809f2ce196e8f1e5c840e9e5b8f79938bfcf6de6', class: "input__control", part: "input-container", onClick: this.onControlClick }, this.icon && h("uai-icon", { key: '91117cea60acb0820e73ad15abff7364e9a872e7', class: "input__icon", name: this.icon, size: "medium" }), h("slot", { key: '81b373baac60856a042279464860ea8faaf65f92', name: "input-left" }), h("div", { key: '36fb58a30157682802507760c7a8244d0905b30f', class: "input__field" }, h("slot", { key: 'ce0f00dcc3db8b65ede71b705ee0002c2aa47e8a', name: "inside-input-left" }), h("input", { key: 'a64fc11506cee1e27cc45b598bd5bc33c998a1ac', id: this.id, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: this.nativeType, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, pattern: this.pattern, value: this.value || '', placeholder: this.placeholder, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, required: this.required, readOnly: this.readonly, disabled: disabled, "aria-label": this.label ? null : this.ariaLabel, "aria-invalid": invalid ? 'true' : null, "aria-describedby": describedBy || null, "data-test": this.dataTest, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown })), this.counterLength && (h("uai-typo", { key: '080043477b87dd23c5f5228ba3a04f268a9aba84', id: `${this.id}-counter`, class: { input__counter: true, [`input__counter--${counterState}`]: !!counterState }, variant: "caption", tag: "span", margin: false }, this.maxlength ? `${length}/${this.maxlength}` : `${length}`)), invalid && h("uai-icon", { key: '21acf14d08a460db12143ba0ac518eaeaf6f44c7', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && h("uai-icon", { key: 'fbf85f7faebfcc253b4e2b0b1a4763880fa8970e', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), h("slot", { key: '0f62b1d1f8779763a3aa8476f2149955730dccdf', name: "input-right" })), message && (h("div", { key: '0ce6580851959708468b4e4040609f3f30c4223f', id: `${this.id}-message`, class: "input__message", part: "input__message" }, h("uai-typo", { key: '6d9685511844ce8469cff403a7f1f21a85ea7f67', variant: "caption", tag: "span", margin: false }, message))))));
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
UaiInput.style = uaiInputCss();

export { UaiInput as uai_input };
