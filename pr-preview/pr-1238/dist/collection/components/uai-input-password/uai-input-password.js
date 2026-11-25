import { Build, Host, h, } from "@stencil/core";
import { warnLegacyValue, warnOnce } from "../../utils/deprecation";
import { UaiFormControl } from "../../utils/uai-form-control";
const TAG = 'uai-input-password';
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
/**
 * Password field with native form support, an accessible visibility toggle and an optional consumer-provided
 * strength indicator. The indicator never evaluates the password or guarantees security. Wrap the app in
 * UaiThemeProvider.
 *
 * @slot input-left - Content before the password text, inside the field border.
 * @slot inside-input-left - Content right before the password text.
 * @slot input-right - Content after the password text. Give actions an accessible name.
 * @part input-container - The field box with border, adornments, input and visibility button.
 * @part input - The native password input.
 * @part input__message - The helper, error or success message below the field.
 */
export class UaiInputPassword {
    constructor() {
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
        if (Build.isDev && !this.label && !this.ariaLabel) {
            warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
        }
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
        warnLegacyValue(TAG, 'size', this.size, 'medium');
        return 'medium';
    }
    get strengthLevelValue() {
        if (STRENGTH_LEVELS.includes(this.strengthLevel))
            return this.strengthLevel;
        warnLegacyValue(TAG, 'strengthLevel', this.strengthLevel, 'none');
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
        return (h(Host, { key: '007b37d355ff5fc40c05dd106ed829f3d859358d', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input-password--size-${this.sizeValue}`]: true,
                'uai-input-password--danger': invalid,
                'uai-input-password--success': success,
                'uai-input-password--disabled': disabled,
                'uai-input-password--readonly': this.readonly && !disabled,
            } }, h("div", { key: '7f60ef5da253e28e85b08981df4c112c452ec7f6', class: "password" }, this.label && (h("label", { key: 'e167b90f35afd06ccd1ed21ffd4ed77f322a4a6c', class: "password__label", for: this.inputId }, h("uai-typo", { key: '7ef04ec084a305b26fcaf65ec96c4acde2644eec', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), h("div", { key: 'a292adf464eeffb0322f9450577089e2e0f2d320', class: "password__control", part: "input-container", onClick: this.onControlClick }, this.icon && h("uai-icon", { key: '4563a849ab75e2ad9615bf65b0242e8dee2d1277', class: "password__icon", name: this.icon, size: "medium" }), h("slot", { key: '726e264aa30cf6737cd047e02d645217233aa580', name: "input-left" }), h("div", { key: 'f7e978e665fc82a11b2136397ccfaa578dab6716', class: "password__field" }, h("slot", { key: 'f773e0132934fb9461bc88dfd4b860beb3dcd9ab', name: "inside-input-left" }), h("input", { key: 'f3158d90726fe84739af3243e276e8ecf1dfc2df', id: this.inputId, ref: (input) => (this.nativeInput = input), class: "password__native", part: "input", type: this.openEyes ? 'text' : 'password', min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, value: (_b = this.value) !== null && _b !== void 0 ? _b : '', placeholder: this.placeholder, autocapitalize: this.autoCapitalize, autocomplete: this.autocompleteValue, required: this.required, readOnly: this.readonly, disabled: disabled, "aria-label": this.label ? null : this.ariaLabel, "aria-invalid": invalid ? 'true' : null, "aria-describedby": describedBy || null, "data-test": this.dataTest, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown })), invalid && h("uai-icon", { key: '986f8ab61397a19aabe17c769e47afd880d1b523', class: "password__feedback", name: "error", theme: "outline", size: "medium" }), success && (h("uai-icon", { key: 'e90ea29aae6c93257e0ddfd64f985d56c3733b97', class: "password__feedback", name: "checkball", theme: "solid", size: "medium" })), h("button", { key: '549fd989ea0a13a84160710eba0a8c96f2011b97', class: "password__toggle", type: "button", "aria-label": this.openEyes ? 'Ocultar senha' : 'Mostrar senha', "aria-pressed": this.openEyes ? 'true' : 'false', disabled: disabled, onClick: this.onVisibilityClick }, h("uai-icon", { key: 'a7af4c79c1fc5e7d238e51a7126bdd4a8b234f1b', name: this.openEyes ? 'eye-open' : 'eye-closed', size: "medium" })), h("slot", { key: 'ca788eccb66e4b62a28825129c33176b19e9b158', name: "input-right" })), message && (h("div", { key: '1d18fff61748a523325d0ea849dff999a6e9769f', id: `${this.inputId}-message`, class: "password__message", part: "input__message" }, h("uai-typo", { key: 'b37b22a879b29fef92bd9a04734da2b08ee9d39c', variant: "caption", tag: "span", margin: false }, message))), this.showStrength && (h("div", { key: '2327a483a06ec15bd2291ebcad2c54a063a9ce36', class: "password__strength" }, h("uai-typo", { key: '526385a9d0bb29399807b5d6baae177ec35aaf99', class: "password__strength-label", variant: "caption", tag: "span", margin: false }, "For\u00E7a"), h("div", { key: '9bbe7f42da376913b4312aa23cd11fee10968cc1', id: `${this.inputId}-strength`, class: { password__meter: true, [`password__meter--${strengthLevel}`]: true }, role: "meter", "aria-label": "For\u00E7a da senha", "aria-valuemin": "0", "aria-valuemax": "3", "aria-valuenow": strengthValue, "aria-valuetext": this.strengthLabel }, [1, 2, 3].map((segment) => (h("span", { class: {
                password__segment: true,
                'password__segment--active': segment <= strengthValue,
            } })))), strengthLevel !== 'none' && (h("uai-typo", { key: '09672e7c0058e027552b72092e60c588f582cce2', class: "password__strength-value", variant: "caption", tag: "span", margin: false }, this.strengthLabel)))))));
    }
    static get is() { return "uai-input-password"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-input-password.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-input-password.css"]
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
                    "text": "Name of the value in submitted form data. Without name or inputName, the field is not submitted."
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
                    "text": "Name of the value in submitted form data, kept from bds-input-password."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "input-name",
                "defaultValue": "''"
            },
            "openEyes": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls whether the password is revealed. The visibility button updates this property."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "open-eyes",
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiControlSize",
                    "resolved": "\"medium\" | \"short\"",
                    "references": {
                        "UaiControlSize": {
                            "location": "import",
                            "path": "../input/input-interface",
                            "id": "src/components/input/input-interface.ts::UaiControlSize",
                            "referenceLocation": "UaiControlSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Height of the field. Can be 'short' or 'medium' (default)."
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
                    "text": "Largest accepted number. Kept for compatibility; password inputs do not enforce numeric bounds."
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
                    "text": "Smallest accepted number. Kept for compatibility; password inputs do not enforce numeric bounds."
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
                    "text": "Smallest number of characters. Checked on blur and form submission."
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
                    "text": "If true, the value can be selected and copied but not edited."
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
                    "text": "If true, an empty field blocks form submission."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required",
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
                    "text": "UaiIcon name shown before the password."
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
                    "text": "Automatic capitalization on virtual keyboards."
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
                    "text": "Browser autofill hint while the password is revealed. While masked, autocomplete is current-password."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto-complete",
                "defaultValue": "'off'"
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
                    "text": "Current password. It is not reflected to an attribute."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
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
                "optional": true,
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Message shown when the password is shorter than minlength."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "minlength-error-message"
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
                    "text": "Accessible name when there is no visible label."
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
            "showStrength": {
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
                    "text": "If true, shows the visual strength indicator. The level remains consumer-provided."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-strength",
                "defaultValue": "false"
            },
            "strengthLevel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiPasswordStrengthLevel",
                    "resolved": "\"high\" | \"low\" | \"medium\" | \"none\"",
                    "references": {
                        "UaiPasswordStrengthLevel": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input-password/uai-input-password.tsx",
                            "id": "src/components/uai-input-password/uai-input-password.tsx::UaiPasswordStrengthLevel"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Consumer-provided visual level. This component does not evaluate the password."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "strength-level",
                "defaultValue": "'none'"
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
                "method": "uaiInputPasswordChange",
                "name": "uaiInputPasswordChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the value changes, by typing or programmatically. detail: { value }."
                },
                "complexType": {
                    "original": "{ value: string | null }",
                    "resolved": "{ value: string; }",
                    "references": {}
                }
            }, {
                "method": "uaiInputPasswordInput",
                "name": "uaiInputPasswordInput",
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
                "method": "uaiInputPasswordBlur",
                "name": "uaiInputPasswordBlur",
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
                "method": "uaiInputPasswordFocus",
                "name": "uaiInputPasswordFocus",
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
                "method": "uaiInputPasswordSubmit",
                "name": "uaiInputPasswordSubmit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted on Enter. detail: { event, value }."
                },
                "complexType": {
                    "original": "{ event: KeyboardEvent; value: string | null }",
                    "resolved": "{ event: KeyboardEvent; value: string; }",
                    "references": {
                        "KeyboardEvent": {
                            "location": "global",
                            "id": "global::KeyboardEvent"
                        }
                    }
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
                    "original": "{ event: KeyboardEvent; value: string | null }",
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
                    "text": "Moves focus to the password field.",
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
                    "text": "Removes focus from the password field.",
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
                    "text": "Checks the native required and character-length constraints.",
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
                    "text": "Clears the password.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "name",
                "methodName": "nameChanged"
            }, {
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
