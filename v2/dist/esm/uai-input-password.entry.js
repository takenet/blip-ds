import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';
import { U as UaiFormControl } from './uai-form-control-BkRP7pRQ.js';

const uaiInputPasswordCss = () => `:host{--password-height:var(--uai-control-height-medium, 2.5rem);--password-background:var(--uai-surface-paper, #ffffff);--password-border:var(--uai-border-input, #adb4b8);--password-content:var(--uai-content-primary, #242729);--password-label:var(--uai-content-primary, #242729);--password-message:var(--uai-content-secondary, #5f676d);--password-feedback:var(--password-content);--password-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:100%}:host(.uai-input-password--size-short){--password-height:var(--uai-control-height-short, 2rem)}:host(.uai-input-password--danger){--password-border:var(--uai-feedback-error, #cf0022);--password-label:var(--uai-feedback-error, #cf0022);--password-message:var(--uai-feedback-error, #cf0022);--password-feedback:var(--uai-feedback-error, #cf0022)}:host(.uai-input-password--success){--password-border:var(--uai-feedback-success, #3da329);--password-message:var(--uai-feedback-success, #3da329);--password-feedback:var(--uai-feedback-success, #3da329)}:host(.uai-input-password--disabled){--password-background:var(--uai-surface-muted, #f2f3f3);--password-border:var(--uai-border-default, #e4e6e7);--password-content:var(--uai-content-disabled, #848e94);--password-label:var(--uai-content-disabled, #848e94);--password-message:var(--uai-content-disabled, #848e94);--password-feedback:var(--uai-content-disabled, #848e94)}.password{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.password__label,.password__message,.password__strength-label,.password__strength-value{--uai-typo-color:currentColor}.password__label{color:var(--password-label)}.password__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--password-message)}.password__control{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);height:var(--password-height);padding:0 var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--password-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--password-background);color:var(--password-content);cursor:text;-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.password__control{-webkit-transition:none;transition:none}}.password__control:focus-within{--password-border:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--password-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--password-halo)}@media (forced-colors: active){.password__control:focus-within{-webkit-box-shadow:none;box-shadow:none;outline:var(--uai-border-width-thick, 2px) solid CanvasText}}:host(:not(.uai-input-password--disabled):not(.uai-input-password--readonly):not(.uai-input-password--danger):not(.uai-input-password--success)) .password__control:hover:not(:focus-within){--password-border:var(--uai-content-secondary, #5f676d)}:host(.uai-input-password--disabled) .password__control{cursor:not-allowed}.password__field{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);min-width:0;height:100%}.password__native{-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;height:100%;margin:0;padding:0;border:0;outline:none;background:transparent;color:inherit;font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem);text-overflow:ellipsis;-webkit-appearance:none;-moz-appearance:none;appearance:none}.password__native::-webkit-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.password__native::-moz-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.password__native:-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.password__native::-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.password__native::placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.password__native:disabled{cursor:not-allowed;opacity:1;-webkit-text-fill-color:currentColor}.password__native:disabled::-webkit-input-placeholder{color:var(--uai-content-disabled, #848e94)}.password__native:disabled::-moz-placeholder{color:var(--uai-content-disabled, #848e94)}.password__native:disabled:-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.password__native:disabled::-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.password__native:disabled::placeholder{color:var(--uai-content-disabled, #848e94)}.password__icon,.password__feedback{-ms-flex:none;flex:none;color:var(--password-feedback)}.password__toggle{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:var(--uai-spacing-3xs, 0.125rem);border:0;border-radius:var(--uai-radius-sm, 0.25rem);background:transparent;color:inherit;cursor:pointer}.password__toggle:disabled{cursor:not-allowed}:host(.uai-input-password--disabled) .password__toggle{color:var(--uai-content-disabled, #848e94)}.password__strength{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-3xs, 0.125rem);padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--uai-content-secondary, #5f676d)}.password__meter{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-3xs, 0.125rem)}.password__segment{-ms-flex:1 1 0px;flex:1 1 0;border-top:var(--uai-border-width-thick, 2px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-full, 624.9375rem)}.password__segment--active{border-top-color:var(--uai-content-primary, #242729)}.password__meter--low .password__segment--active{border-top-color:var(--uai-feedback-error, #cf0022)}.password__meter--high .password__segment--active{border-top-color:var(--uai-feedback-success, #3da329)}.password__strength-value{color:var(--uai-content-primary, #242729)}:host(.uai-input-password--disabled) .password__strength{color:var(--uai-content-disabled, #848e94)}:host(.uai-input-password--disabled) .password__segment{border-top-color:var(--uai-border-default, #e4e6e7)}`;

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
        this.id = `uai-input-password-${++instances}`;
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
        const describedBy = [message && `${this.id}-message`, this.showStrength && `${this.id}-strength`]
            .filter(Boolean)
            .join(' ');
        const strengthLevel = this.strengthLevelValue;
        const strengthValue = this.strengthValue;
        return (h(Host, { key: '0fc3a0fc9a1c9545db684216171223790a9d7dfc', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input-password--size-${this.sizeValue}`]: true,
                'uai-input-password--danger': invalid,
                'uai-input-password--success': success,
                'uai-input-password--disabled': disabled,
                'uai-input-password--readonly': this.readonly && !disabled,
            } }, h("div", { key: '814d49a5ead41906783d97f67086646f625577d0', class: "password" }, this.label && (h("label", { key: '6dd2db8eee80fb1eb0bd612231e02969725033fa', class: "password__label", for: this.id }, h("uai-typo", { key: 'a0e818b68faf01aea2f8cbafe196c8670e6d583c', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), h("div", { key: '7d1e9e237c0b4882b5df83d178849056d9e4da80', class: "password__control", part: "input-container", onClick: this.onControlClick }, this.icon && h("uai-icon", { key: 'd4355eecf8fb0f9fdd1defdb15964b24ef2ea7cc', class: "password__icon", name: this.icon, size: "medium" }), h("slot", { key: '565453c0ced73828efb9c92ad2a490a60cfa4a66', name: "input-left" }), h("div", { key: 'f186ce595dc80bcd1a91890f7915dc745da90772', class: "password__field" }, h("slot", { key: '1a1f338e58394a4aaf3bc312e0fbba57d16e0459', name: "inside-input-left" }), h("input", { key: 'b667428fe1a327071cc5d6b9b98aa1517e8cfa29', id: this.id, ref: (input) => (this.nativeInput = input), class: "password__native", part: "input", type: this.openEyes ? 'text' : 'password', min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, value: (_b = this.value) !== null && _b !== void 0 ? _b : '', placeholder: this.placeholder, autocapitalize: this.autoCapitalize, autocomplete: this.autocompleteValue, required: this.required, readOnly: this.readonly, disabled: disabled, "aria-label": this.label ? null : this.ariaLabel, "aria-invalid": invalid ? 'true' : null, "aria-describedby": describedBy || null, "data-test": this.dataTest, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown })), invalid && h("uai-icon", { key: 'dd43efd2ff58eed406a4f91f86ffdab7df05826c', class: "password__feedback", name: "error", theme: "outline", size: "medium" }), success && (h("uai-icon", { key: '74ae5faa500915fa41db5df6bb2c6f8371abcae9', class: "password__feedback", name: "checkball", theme: "solid", size: "medium" })), h("button", { key: '1c79aa7afa1223619f8600464d9c22464fd288ec', class: "password__toggle", type: "button", "aria-label": this.openEyes ? 'Ocultar senha' : 'Mostrar senha', "aria-pressed": this.openEyes ? 'true' : 'false', disabled: disabled, onClick: this.onVisibilityClick }, h("uai-icon", { key: 'bf9966941bbebf891727645eec52b3bed40d7f83', name: this.openEyes ? 'eye-open' : 'eye-closed', size: "medium" })), h("slot", { key: 'a2a15431801263025645833c9f54c61b5dacacc6', name: "input-right" })), message && (h("div", { key: '7bcf11b524cec518cd6fa2a83beeaacd987f54fc', id: `${this.id}-message`, class: "password__message", part: "input__message" }, h("uai-typo", { key: '241978e154d6a579e966c39fb0face304780455d', variant: "caption", tag: "span", margin: false }, message))), this.showStrength && (h("div", { key: '3020c30bd6dc96b540ac210c53d00e0c608e74a3', class: "password__strength" }, h("uai-typo", { key: 'df3c241958f5d5d0f1271cbc2842c30dbf266044', class: "password__strength-label", variant: "caption", tag: "span", margin: false }, "For\u00E7a"), h("div", { key: 'bd2e85d11b10d47e4baad59bd545b443fac61796', id: `${this.id}-strength`, class: { password__meter: true, [`password__meter--${strengthLevel}`]: true }, role: "meter", "aria-label": "For\u00E7a da senha", "aria-valuemin": "0", "aria-valuemax": "3", "aria-valuenow": strengthValue, "aria-valuetext": this.strengthLabel }, [1, 2, 3].map((segment) => (h("span", { class: {
                password__segment: true,
                'password__segment--active': segment <= strengthValue,
            } })))), strengthLevel !== 'none' && (h("uai-typo", { key: '1a4829714937cd7b81a9c7c19088eb4cf08b8574', class: "password__strength-value", variant: "caption", tag: "span", margin: false }, this.strengthLabel)))))));
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
