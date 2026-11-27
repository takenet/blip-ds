import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-DUwG7Zwx.js';
import { U as UaiFormControl } from './uai-form-control-BkRP7pRQ.js';

const uaiInputPasswordCss = () => `:host{--password-height:var(--uai-control-height-medium, 2.5rem);--password-background:var(--uai-surface-paper, #ffffff);--password-border:var(--uai-border-input, #adb4b8);--password-content:var(--uai-content-primary, #242729);--password-label:var(--uai-content-primary, #242729);--password-message:var(--uai-content-secondary, #5f676d);--password-feedback:var(--password-content);--password-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:100%}:host(.uai-input-password--size-short){--password-height:var(--uai-control-height-short, 2rem)}:host(.uai-input-password--danger){--password-border:var(--uai-feedback-error, #cf0022);--password-label:var(--uai-feedback-error, #cf0022);--password-message:var(--uai-feedback-error, #cf0022);--password-feedback:var(--uai-feedback-error, #cf0022)}:host(.uai-input-password--success){--password-border:var(--uai-feedback-success, #3da329);--password-message:var(--uai-feedback-success, #3da329);--password-feedback:var(--uai-feedback-success, #3da329)}:host(.uai-input-password--disabled){--password-border:var(--uai-border-default, #e4e6e7);opacity:var(--uai-opacity-disabled, 0.5)}.password{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.password__label,.password__message,.password__strength-label,.password__strength-value{--uai-typo-color:currentColor}.password__label{color:var(--password-label)}.password__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--password-message)}.password__control{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);height:var(--password-height);padding:0 var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--password-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--password-background);color:var(--password-content);cursor:text;-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.password__control{-webkit-transition:none;transition:none}}.password__control:focus-within{--password-border:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--password-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--password-halo)}@media (forced-colors: active){.password__control:focus-within{-webkit-box-shadow:none;box-shadow:none;outline:var(--uai-border-width-thick, 2px) solid CanvasText}}:host(:not(.uai-input-password--disabled):not(.uai-input-password--readonly):not(.uai-input-password--danger):not(.uai-input-password--success)) .password__control:hover:not(:focus-within){--password-border:var(--uai-content-secondary, #5f676d)}:host(.uai-input-password--disabled) .password__control{cursor:not-allowed}.password__field{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);min-width:0;height:100%}.password__native{-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;height:100%;margin:0;padding:0;border:0;outline:none;background:transparent;color:inherit;font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem);text-overflow:ellipsis;-webkit-appearance:none;-moz-appearance:none;appearance:none}.password__native::-webkit-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.password__native::-moz-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.password__native:-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.password__native::-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.password__native::placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.password__native:disabled{cursor:not-allowed;opacity:1;-webkit-text-fill-color:currentColor}.password__icon,.password__feedback{-ms-flex:none;flex:none;color:var(--password-feedback)}.password__toggle{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:var(--uai-spacing-3xs, 0.125rem);border:0;border-radius:var(--uai-radius-sm, 0.25rem);background:transparent;color:inherit;cursor:pointer}.password__toggle:disabled{cursor:not-allowed}:host(.uai-input-password--disabled) .password__toggle{color:var(--uai-content-disabled, #848e94)}.password__strength{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-3xs, 0.125rem);padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--uai-content-secondary, #5f676d)}.password__meter{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-3xs, 0.125rem)}.password__segment{-ms-flex:1 1 0px;flex:1 1 0;border-top:var(--uai-border-width-thick, 2px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-full, 624.9375rem)}.password__segment--active{border-top-color:var(--uai-content-primary, #242729)}.password__meter--low .password__segment--active{border-top-color:var(--uai-feedback-error, #cf0022)}.password__meter--high .password__segment--active{border-top-color:var(--uai-feedback-success, #3da329)}.password__strength-value{color:var(--uai-content-primary, #242729)}:host(.uai-input-password--disabled) .password__strength{color:var(--uai-content-disabled, #848e94)}:host(.uai-input-password--disabled) .password__segment{border-top-color:var(--uai-border-default, #e4e6e7)}`;

const SIZES = ['short', 'medium'];
const STRENGTH_LEVELS = ['none', 'low', 'medium', 'high'];
const VALIDITY_FLAGS = [
    'valueMissing',
    'tooLong',
    'tooShort',
    'rangeUnderflow',
    'rangeOverflow',
    'badInput',
];
let instances = 0;
const UaiInputPassword = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiInputPasswordChange = createEvent(this, "uaiInputPasswordChange");
        this.uaiInputPasswordInput = createEvent(this, "uaiInputPasswordInput");
        this.uaiInputPasswordBlur = createEvent(this, "uaiInputPasswordBlur");
        this.uaiInputPasswordFocus = createEvent(this, "uaiInputPasswordFocus");
        this.uaiInputPasswordSubmit = createEvent(this, "uaiInputPasswordSubmit");
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
        this.hasExplicitName = false;
        this.inputId = `uai-input-password-${++instances}`;
        /**
         * Name of the value in submitted form data, kept from bds-input-password.
         */
        this.inputName = '';
        /**
         * Controls whether the password is revealed. The visibility button updates this property.
         */
        this.openEyes = false;
        /**
         * Height of the field. Can be 'short' or 'medium' (default).
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
         * If true, the value can be selected and copied but not edited.
         */
        this.readonly = false;
        /**
         * If true, an empty field blocks form submission.
         */
        this.required = false;
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
         * If true, shows the error state and errorMessage. Has priority over success.
         */
        this.danger = false;
        /**
         * If true, shows the success state and successMessage.
         */
        this.success = false;
        /**
         * UaiIcon name shown before the password.
         */
        this.icon = '';
        /**
         * If true, the field cannot be focused or edited and is left out of the form data.
         */
        this.disabled = false;
        /**
         * Automatic capitalization on virtual keyboards.
         */
        this.autoCapitalize = 'off';
        /**
         * Browser autofill hint while the password is revealed. While masked, autocomplete is current-password.
         */
        this.autoComplete = 'off';
        /**
         * Current password. It is not reflected to an attribute.
         */
        this.value = '';
        /**
         * Accessible name when there is no visible label.
         */
        this.ariaLabel = null;
        /**
         * Data test id, set on the native input.
         */
        this.dataTest = null;
        /**
         * If true, shows the visual strength indicator. The level remains consumer-provided.
         */
        this.showStrength = false;
        /**
         * Consumer-provided visual level. This component does not evaluate the password.
         */
        this.strengthLevel = 'none';
        this.onInput = (event) => {
            this.value = event.currentTarget.value;
            this.syncValidity();
            this.uaiInputPasswordInput.emit(event);
        };
        this.onBlur = () => {
            this.showValidation(true);
            this.uaiInputPasswordBlur.emit();
        };
        this.onFocus = () => {
            this.uaiInputPasswordFocus.emit();
        };
        this.onKeyDown = (event) => {
            var _a, _b;
            if (event.key === 'Enter') {
                if (event.isComposing)
                    return;
                this.uaiInputPasswordSubmit.emit({ event, value: this.value });
                if (!event.defaultPrevented)
                    (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.requestSubmit();
            }
            else if (event.key === 'Backspace' || event.key === 'Delete') {
                this.uaiKeyDownBackspace.emit({ event, value: this.value });
            }
        };
        this.onVisibilityClick = () => {
            if (!this.disabled && !this.disabledByForm)
                this.openEyes = !this.openEyes;
        };
        this.onControlClick = (event) => {
            var _a;
            if (event.target === event.currentTarget)
                (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
        };
    }
    /**
     * Moves focus to the password field.
     */
    async setFocus() {
        var _a;
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /**
     * Removes focus from the password field.
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
     * Checks the native required and character-length constraints.
     */
    async isValid() {
        return this.nativeInput ? this.nativeInput.validity.valid : true;
    }
    /**
     * Clears the password.
     */
    async clear() {
        this.value = '';
    }
    nameChanged(newValue) {
        if (newValue && newValue !== this.inputName && newValue !== this.aliasName)
            this.hasExplicitName = true;
        if (!newValue && this.inputName && !this.hasExplicitName)
            this.syncInputName();
        this.aliasName = this.inputName;
    }
    inputNameChanged(newValue, oldValue) {
        if (!this.hasExplicitName && (!this.name || this.name === oldValue || this.name === this.aliasName)) {
            this.syncInputName(newValue);
        }
        this.aliasName = newValue;
    }
    valueChanged(newValue) {
        var _a;
        const value = newValue !== null && newValue !== void 0 ? newValue : '';
        if (this.nativeInput && this.nativeInput.value !== value)
            this.nativeInput.value = value;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(value);
        this.uaiInputPasswordChange.emit({ value: newValue });
        if (this.validationDanger)
            this.showValidation(true);
        this.syncValidity();
    }
    onInvalid() {
        this.showValidation(true);
    }
    componentWillLoad() {
        var _a, _b;
        this.defaultValue = (_a = this.value) !== null && _a !== void 0 ? _a : '';
        this.hasExplicitName = this.el.hasAttribute('name');
        this.aliasName = this.inputName;
        if (!this.hasExplicitName && this.inputName)
            this.syncInputName();
        if (typeof ((_b = this.internals) === null || _b === void 0 ? void 0 : _b.setFormValue) === 'function') {
            this.formControl = new UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.defaultValue,
                onReset: (value) => {
                    this.validationDanger = false;
                    this.validationText = '';
                    this.value = typeof value === 'string' ? value : '';
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
        this.warnForAccessibleName();
    }
    componentDidRender() {
        var _a, _b;
        if (this.nativeInput && this.nativeInput.value !== ((_a = this.value) !== null && _a !== void 0 ? _a : '')) {
            this.nativeInput.value = (_b = this.value) !== null && _b !== void 0 ? _b : '';
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
    syncInputName(value = this.inputName) {
        if (this.hasExplicitName)
            return;
        this.name = value || undefined;
    }
    warnForAccessibleName() {
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
        return 'medium';
    }
    get strengthLevelValue() {
        if (STRENGTH_LEVELS.includes(this.strengthLevel))
            return this.strengthLevel;
        return 'none';
    }
    get strengthValue() {
        return { none: 0, low: 1, medium: 2, high: 3 }[this.strengthLevelValue];
    }
    get strengthLabel() {
        return { none: 'Não informada', low: 'Baixa', medium: 'Média', high: 'Alta' }[this.strengthLevelValue];
    }
    get autocompleteValue() {
        return this.openEyes ? this.autoComplete : 'current-password';
    }
    messageFor(validity) {
        var _a;
        const native = ((_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.validationMessage) || '';
        if (validity.valueMissing)
            return this.requiredErrorMessage || native;
        if (validity.tooShort)
            return this.minlengthErrorMessage || native;
        return native;
    }
    syncValidity() {
        if (!this.nativeInput || !this.formControl)
            return;
        const validity = this.nativeInput.validity;
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
    render() {
        var _a, _b;
        const disabled = this.disabled || ((_a = this.formControl) === null || _a === void 0 ? void 0 : _a.disabled) || this.disabledByForm;
        const invalid = this.danger || this.validationDanger;
        const success = this.success && !invalid;
        const message = this.danger
            ? this.errorMessage || this.validationText
            : this.validationDanger
                ? this.validationText
                : success
                    ? this.successMessage
                    : this.helperMessage;
        const describedBy = [message && `${this.inputId}-message`, this.showStrength && `${this.inputId}-strength`]
            .filter(Boolean)
            .join(' ');
        const strengthLevel = this.strengthLevelValue;
        const strengthValue = this.strengthValue;
        return (h(Host, { key: 'ba7c2e76b2b0c7b87b6a78727701c50e3d205751', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input-password--size-${this.sizeValue}`]: true,
                'uai-input-password--danger': invalid,
                'uai-input-password--success': success,
                'uai-input-password--disabled': disabled,
                'uai-input-password--readonly': this.readonly && !disabled,
            } }, h("div", { key: '41aa172ab41cc1292641a5a90075c9bba4340299', class: "password" }, this.label && (h("label", { key: 'd1ef1ed5b907db7a925da0203ffef3f705a62dab', class: "password__label", for: this.inputId }, h("uai-typo", { key: 'caa8d709ac28edc4dda16b558e487839a2fb3ee0', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), h("div", { key: '1fcb8086b2ccfc2f9179b50ed1dc2aba41cbedb9', class: "password__control", part: "input-container", onClick: this.onControlClick }, this.icon && h("uai-icon", { key: 'a5898ab156787c97a4a9d42395154acc3b1aec2a', class: "password__icon", name: this.icon, size: "medium" }), h("slot", { key: 'ab956519500347521a3fcf14ba1466914cc5d7f7', name: "input-left" }), h("div", { key: '36c5277bb88df0edcd868d691783f51f81212bc1', class: "password__field" }, h("slot", { key: 'fe4f2f8b9c4543361cc66512e7a4b5dff07d242e', name: "inside-input-left" }), h("input", { key: 'e1b84c9f4436c637e883d8791c86828924b67962', id: this.inputId, ref: (input) => (this.nativeInput = input), class: "password__native", part: "input", type: this.openEyes ? 'text' : 'password', min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, value: (_b = this.value) !== null && _b !== void 0 ? _b : '', placeholder: this.placeholder, autocapitalize: this.autoCapitalize, autocomplete: this.autocompleteValue, required: this.required, readOnly: this.readonly, disabled: disabled, "aria-label": this.label ? null : this.ariaLabel, "aria-invalid": invalid ? 'true' : null, "aria-describedby": describedBy || null, "data-test": this.dataTest, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown })), invalid && h("uai-icon", { key: '96e318ca94f14516be8b565925210e3c7a7bb959', class: "password__feedback", name: "error", theme: "outline", size: "medium" }), success && (h("uai-icon", { key: 'fd7a67454f2bc257fe7b13de063a627e271180d4', class: "password__feedback", name: "checkball", theme: "solid", size: "medium" })), h("button", { key: '8c18aab1f74dfcf425817956655843fe602ed9c5', class: "password__toggle", type: "button", "aria-label": this.openEyes ? 'Ocultar senha' : 'Mostrar senha', "aria-pressed": this.openEyes ? 'true' : 'false', disabled: disabled, onClick: this.onVisibilityClick }, h("uai-icon", { key: '9377be297207651c0ceaec63c5f82a3fb9202711', name: this.openEyes ? 'eye-open' : 'eye-closed', size: "medium" })), h("slot", { key: '99bc09ab6bcbfba1e6a6e6e58970cfd17e127109', name: "input-right" })), message && (h("div", { key: 'c2d1963c6d05ffbbd07303f17a095f6053668a33', id: `${this.inputId}-message`, class: "password__message", part: "input__message" }, h("uai-typo", { key: '335b0f33203f264e3e4d5d4636d48252ad53ad28', variant: "caption", tag: "span", margin: false }, message))), this.showStrength && (h("div", { key: 'f10c1913ac57f603111256d62431deb7ac246800', class: "password__strength" }, h("uai-typo", { key: '1bb3b7b551ed4c7f95ada38f788d7bee5f33f476', class: "password__strength-label", variant: "caption", tag: "span", margin: false }, "For\u00E7a"), h("div", { key: '4271d5bb9e74e4bdc5d6e5083b6c03ff84b7d6db', id: `${this.inputId}-strength`, class: { password__meter: true, [`password__meter--${strengthLevel}`]: true }, role: "meter", "aria-label": "For\u00E7a da senha", "aria-valuemin": "0", "aria-valuemax": "3", "aria-valuenow": strengthValue, "aria-valuetext": this.strengthLabel }, [1, 2, 3].map((segment) => (h("span", { class: {
                password__segment: true,
                'password__segment--active': segment <= strengthValue,
            } })))), strengthLevel !== 'none' && (h("uai-typo", { key: '85f9f71d79f1d9a9441f1027515a864c2cf58045', class: "password__strength-value", variant: "caption", tag: "span", margin: false }, this.strengthLabel)))))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "name": [{
                "nameChanged": 0
            }],
        "inputName": [{
                "inputNameChanged": 0
            }],
        "value": [{
                "valueChanged": 0
            }]
    }; }
};
UaiInputPassword.style = uaiInputPasswordCss();

export { UaiInputPassword as uai_input_password };
