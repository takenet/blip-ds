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
        /**
         * Not `id`: that is the native element property, and in the custom elements build the component class is the
         * element, so assigning it in the constructor writes an `id` attribute and `document.createElement` throws.
         */
        this.inputId = `uai-input-${++instances}`;
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
        const describedBy = [message && `${this.inputId}-message`, this.counterLength && `${this.inputId}-counter`]
            .filter(Boolean)
            .join(' ');
        return (h(Host, { key: 'd0cd99e9f015d87fc18d19b1b768299df6a968e2', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input--size-${this.sizeValue}`]: true,
                'uai-input--danger': invalid,
                'uai-input--success': success,
                'uai-input--disabled': disabled,
                'uai-input--readonly': this.readonly && !disabled,
            } }, h("div", { key: 'f9860e3446b671026fd871b9f947f4421d7e2847', class: "input" }, this.label && (h("label", { key: 'b5b5f250cda3de818fc1d73950d99eadfca37b8c', class: "input__label", for: this.inputId }, h("uai-typo", { key: 'aec3417a9098fc1bf87d7a08350726605663cd9d', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), h("div", { key: '9bd8350aa8768c31a232023391aa199aee1b98ec', class: "input__control", part: "input-container", onClick: this.onControlClick }, this.icon && h("uai-icon", { key: '35475191aadac62cd517e78661329093df2f2bfc', class: "input__icon", name: this.icon, size: "medium" }), h("slot", { key: 'd131ea0fd89cca34070e614dfee2460c9c30d7a7', name: "input-left" }), h("div", { key: '96b467086d65dec83a14c9a5d5d761aaaa2e886b', class: "input__field" }, h("slot", { key: 'f797f9a5907002db47fdc74316e374fe63e9ecc4', name: "inside-input-left" }), h("input", { key: 'c5a1aac868bdd1f8d38f17296ae28345b654e940', id: this.inputId, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: this.nativeType, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, pattern: this.pattern, value: this.value || '', placeholder: this.placeholder, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, required: this.required, readOnly: this.readonly, disabled: disabled, "aria-label": this.label ? null : this.ariaLabel, "aria-invalid": invalid ? 'true' : null, "aria-describedby": describedBy || null, "data-test": this.dataTest, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown })), this.counterLength && (h("uai-typo", { key: 'f61369c20f567154337a4919d6573716c7d2c3c8', id: `${this.inputId}-counter`, class: { input__counter: true, [`input__counter--${counterState}`]: !!counterState }, variant: "caption", tag: "span", margin: false }, this.maxlength ? `${length}/${this.maxlength}` : `${length}`)), invalid && h("uai-icon", { key: 'ba5b9bb8de7bafff9b70a1671106cde5f654ce77', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && h("uai-icon", { key: 'e02e8d2246beb2da1f8ed66c31d1974350aa304c', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), h("slot", { key: '9688ac8c11ee9fbcc533da317e4a727ece3e360e', name: "input-right" })), message && (h("div", { key: 'e1b484ee80ba0e7409279c1ac26714f6608d9c15', id: `${this.inputId}-message`, class: "input__message", part: "input__message" }, h("uai-typo", { key: '54a31419e2797d4c89d3913275b724b32760393b', variant: "caption", tag: "span", margin: false }, message))))));
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
