import { Build, Host, h, } from "@stencil/core";
import { warnDeprecated, warnLegacyValue, warnOnce } from "../../utils/deprecation";
import { escapeHtml } from "../../utils/escape-html";
import { UaiFormControl } from "../../utils/uai-form-control";
const TAG = 'uai-textarea';
const SIZES = ['short', 'medium'];
const VALIDITY_FLAGS = [
    'valueMissing',
    'tooLong',
    'tooShort',
    'badInput',
    'customError',
];
let instances = 0;
/**
 * Multiline text field. Use it for longer free text with an optional label, helper, error or success message.
 * Pair with UaiInput for single-line values in the same form. Avoid it for selecting from a list.
 * Wrap the app in UaiThemeProvider.
 *
 * @slot input-left - Content before the text, inside the field border.
 * @slot inside-input-left - Content before the editable text.
 * @slot input-right - Content after the editable text. Give actions an accessible name.
 * @part input-container - The field box with border, adornments and the native textarea.
 * @part input - The native textarea element.
 * @part input__message - The helper, error or success message below the field.
 */
export class UaiTextarea {
    constructor() {
        this.validationDanger = false;
        this.validationText = '';
        this.disabledByForm = false;
        this.defaultValue = '';
        this.textareaId = `uai-textarea-${++instances}`;
        this.hasExplicitName = false;
        /**
         * Name of the value in submitted form data, kept from bds-input.
         */
        this.inputName = '';
        /**
         * Label shown above the field. Without a visible label, set aria-label.
         */
        this.label = '';
        /**
         * Example of the expected text, shown while the field is empty. Do not use it as the label.
         */
        this.placeholder = '';
        /**
         * Automatic capitalization on virtual keyboards.
         */
        this.autoCapitalize = 'off';
        /**
         * Browser autofill hint.
         */
        this.autoComplete = 'off';
        /**
         * If true, the value can be selected and copied but not edited.
         */
        this.readonly = false;
        /**
         * Message below the field that helps to fill it.
         */
        this.helperMessage = '';
        /**
         * Message shown while danger is true.
         */
        this.errorMessage = '';
        /**
         * Message shown while success is true.
         */
        this.successMessage = '';
        /**
         * UaiIcon name shown before the text.
         */
        this.icon = '';
        /**
         * Minimum control height. Short defaults to one row; medium defaults to three. Explicit rows takes precedence.
         */
        this.size = 'medium';
        /**
         * If true, the field cannot be edited or submitted.
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
         * Current multiline text.
         */
        this.value = '';
        /**
         * If true, shows the number of characters typed and maxlength.
         */
        this.counterLength = false;
        /**
         * Ranges of remaining characters that color the counter.
         */
        this.counterLengthRule = null;
        /**
         * If true, Enter clears the field after uaiSubmit and cancels the newline.
         */
        this.isSubmit = false;
        /**
         * Number of columns. Zero leaves the width fluid.
         */
        this.cols = 0;
        /**
         * If true, the field grows with its content.
         */
        this.autoResize = true;
        /**
         * If true and autoResize is false, the user can resize the field vertically.
         */
        this.resizable = false;
        /**
         * If true, uaiChange emits HTML-special characters escaped.
         */
        this.encode = false;
        /**
         * Accessible name when there is no visible label.
         */
        this.ariaLabel = null;
        /**
         * Data test id, set on the native textarea.
         */
        this.dataTest = null;
        this.onInput = (event) => {
            this.value = event.target.value;
            if (this.validationDanger)
                this.showValidation(true);
            this.syncValidity();
            this.uaiInput.emit(event);
        };
        this.onBlur = () => {
            if (this.pattern)
                this.uaiPatternValidation.emit(this.patternIsValid());
            this.showValidation(true);
            this.uaiOnBlur.emit();
        };
        this.onFocus = () => {
            this.uaiFocus.emit();
        };
        this.onKeyDown = (event) => {
            if (event.key === 'Enter' && !event.isComposing) {
                this.uaiSubmit.emit({ event, value: this.value || '' });
                if (this.isSubmit) {
                    event.preventDefault();
                    this.value = '';
                }
            }
            else if (event.key === 'Backspace' || event.key === 'Delete') {
                this.uaiKeyDownBackspace.emit({ event, value: this.value || '' });
            }
        };
        this.onWindowResize = () => this.scheduleResize(true);
        this.onControlClick = (event) => {
            var _a;
            if (event.target === event.currentTarget)
                (_a = this.nativeTextarea) === null || _a === void 0 ? void 0 : _a.focus();
        };
    }
    /**
     * Moves focus to the textarea.
     */
    async setFocus() {
        var _a;
        (_a = this.nativeTextarea) === null || _a === void 0 ? void 0 : _a.focus();
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
        warnLegacyValue(TAG, 'size', this.size, 'medium');
        return 'medium';
    }
    get rowsValue() {
        var _a;
        return (_a = this.rows) !== null && _a !== void 0 ? _a : (this.sizeValue === 'short' ? 1 : 3);
    }
    /**
     * Removes focus from the textarea.
     */
    async removeFocus() {
        var _a;
        (_a = this.nativeTextarea) === null || _a === void 0 ? void 0 : _a.blur();
    }
    /**
     * Returns the native textarea element.
     */
    async getInputElement() {
        return this.nativeTextarea;
    }
    /**
     * Checks native and pattern validity.
     */
    async isValid() {
        if (!this.nativeTextarea)
            return false;
        return (!this.nativeTextarea.validity || this.nativeTextarea.validity.valid) && this.patternIsValid();
    }
    /**
     * Clears the textarea value.
     */
    async clear() {
        this.value = '';
    }
    nameChanged(newValue) {
        if (newValue && newValue !== this.inputName)
            this.hasExplicitName = true;
        if (!newValue && this.inputName && !this.hasExplicitName)
            this.syncInputName();
    }
    inputNameChanged(newValue, oldValue) {
        if (!this.hasExplicitName && (!this.name || this.name === oldValue || this.name === this.aliasName)) {
            this.syncInputName(newValue);
        }
        this.aliasName = newValue;
    }
    valueChanged(newValue) {
        var _a;
        const value = newValue || '';
        if (this.nativeTextarea && this.nativeTextarea.value !== value)
            this.nativeTextarea.value = value;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(value);
        this.uaiChange.emit({ value: this.encode ? escapeHtml(value) : value });
        this.scheduleResize();
        if (this.validationDanger)
            this.showValidation(true);
        this.syncValidity();
    }
    resizeConfigurationChanged() {
        this.validateResizeConfiguration();
        this.scheduleResize(true);
    }
    onInvalid() {
        this.showValidation(true);
    }
    componentWillLoad() {
        var _a;
        this.defaultValue = this.value || '';
        this.hasExplicitName = this.el.hasAttribute('name');
        this.aliasName = this.inputName;
        if (!this.hasExplicitName && this.inputName)
            this.syncInputName();
        this.validateResizeConfiguration();
        this.warnLegacyUsage();
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
    }
    componentDidLoad() {
        this.observeSize();
        this.scheduleResize(true);
        this.syncValidity();
    }
    connectedCallback() {
        if (!this.nativeTextarea)
            return;
        this.observeSize();
        this.scheduleResize(true);
    }
    observeSize() {
        if (!this.nativeTextarea || this.resizeObserver)
            return;
        if (typeof ResizeObserver === 'function') {
            this.resizeObserver = new ResizeObserver((entries) => {
                var _a;
                const width = (_a = entries[0]) === null || _a === void 0 ? void 0 : _a.contentRect.width;
                if (width !== undefined && width !== this.observedWidth) {
                    this.observedWidth = width;
                    this.scheduleResize(true);
                }
            });
            this.resizeObserver.observe(this.nativeTextarea);
        }
        else {
            window.addEventListener('resize', this.onWindowResize);
        }
    }
    componentDidRender() {
        if (this.nativeTextarea && this.nativeTextarea.value !== (this.value || '')) {
            this.nativeTextarea.value = this.value || '';
        }
        this.syncValidity();
    }
    disconnectedCallback() {
        var _a;
        if (this.resizeTimer !== undefined)
            window.clearTimeout(this.resizeTimer);
        (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.resizeObserver = undefined;
        window.removeEventListener('resize', this.onWindowResize);
        this.observedWidth = undefined;
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
    warnLegacyUsage() {
        const legacyProps = [
            ['isTextarea', this.isTextarea, 'The textarea is inherently multiline.'],
            ['iconSize', this.iconSize, 'The icon follows the field typography.'],
            ['min', this.min, 'Textareas do not support numeric input constraints.'],
            ['max', this.max, 'Textareas do not support numeric input constraints.'],
            ['type', this.type, 'Textareas do not have a type.'],
            ['chips', this.chips, 'Use uai-input-chips.'],
            ['emailErrorMessage', this.emailErrorMessage, 'Textareas do not validate e-mail values.'],
            ['numberErrorMessage', this.numberErrorMessage, 'Textareas do not validate numeric values.'],
        ];
        for (const [prop, value, hint] of legacyProps) {
            if (value !== undefined && value !== null)
                warnDeprecated(TAG, prop, hint);
        }
        if (Build.isDev && !this.label && !this.ariaLabel) {
            warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
        }
    }
    validateResizeConfiguration() {
        if (this.rows !== undefined && (!Number.isInteger(this.rows) || this.rows < 1)) {
            throw new Error(`[${TAG}] rows must be a positive integer.`);
        }
        if (this.cols !== undefined && (!Number.isInteger(this.cols) || this.cols < 0)) {
            throw new Error(`[${TAG}] cols must be a non-negative integer.`);
        }
        for (const [name, value] of [
            ['minHeight', this.minHeight],
            ['maxHeight', this.maxHeight],
            ['debounceDelay', this.debounceDelay],
        ]) {
            if (value !== undefined && (!Number.isFinite(value) || value < 0)) {
                throw new Error(`[${TAG}] ${name} must be a non-negative finite number.`);
            }
        }
        if (this.minHeight !== undefined && this.maxHeight !== undefined && this.minHeight > this.maxHeight) {
            throw new Error(`[${TAG}] minHeight cannot exceed maxHeight.`);
        }
    }
    patternIsValid() {
        if (this.pattern === undefined || !this.nativeTextarea)
            return true;
        if (!this.nativeTextarea.value && !this.required)
            return true;
        try {
            return new RegExp(`^(?:${this.pattern})$`).test(this.nativeTextarea.value);
        }
        catch (error) {
            throw new Error(`[${TAG}] Invalid pattern "${this.pattern}": ${String(error)}`);
        }
    }
    messageFor(validity) {
        if (validity.valueMissing)
            return this.requiredErrorMessage || this.nativeTextarea.validationMessage;
        if (validity.tooShort)
            return this.minlengthErrorMessage || this.nativeTextarea.validationMessage;
        if (!this.patternIsValid())
            return this.patternErrorMessage || 'Use o formato indicado.';
        return this.nativeTextarea.validationMessage;
    }
    syncValidity() {
        if (!this.nativeTextarea || !this.formControl)
            return;
        const flags = {};
        for (const flag of VALIDITY_FLAGS) {
            if (flag === 'customError')
                continue;
            if (this.nativeTextarea.validity[flag])
                flags[flag] = true;
        }
        if (!this.patternIsValid())
            flags.customError = true;
        const message = Object.values(flags).some(Boolean) ? this.messageFor(this.nativeTextarea.validity) : '';
        this.formControl.setValidity(flags, message, this.nativeTextarea);
    }
    showValidation(show) {
        const nativeInvalid = !!this.nativeTextarea && !this.nativeTextarea.validity.valid;
        const patternInvalid = !this.patternIsValid();
        const danger = show && (nativeInvalid || patternInvalid);
        const text = danger ? this.messageFor(this.nativeTextarea.validity) : '';
        if (danger !== this.validationDanger)
            this.validationDanger = danger;
        if (text !== this.validationText)
            this.validationText = text;
    }
    scheduleResize(immediate = false) {
        var _a;
        if (!this.nativeTextarea || !this.autoResize)
            return;
        if (this.resizeTimer !== undefined)
            window.clearTimeout(this.resizeTimer);
        if (immediate) {
            this.resizeToContent();
            return;
        }
        const delay = (_a = this.debounceDelay) !== null && _a !== void 0 ? _a : 100;
        this.resizeTimer = window.setTimeout(() => {
            this.resizeTimer = undefined;
            this.resizeToContent();
        }, delay);
    }
    resizeToContent() {
        var _a, _b;
        const textarea = this.nativeTextarea;
        if (!textarea || !this.autoResize)
            return;
        textarea.style.height = 'auto';
        const measuredHeight = textarea.scrollHeight;
        const constrainedHeight = Math.min(Math.max(measuredHeight, (_a = this.minHeight) !== null && _a !== void 0 ? _a : 0), (_b = this.maxHeight) !== null && _b !== void 0 ? _b : Number.POSITIVE_INFINITY);
        textarea.style.height = `${constrainedHeight}px`;
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
        const describedBy = [message && `${this.textareaId}-message`, this.counterLength && `${this.textareaId}-counter`]
            .filter(Boolean)
            .join(' ');
        return (h(Host, { key: '22a7a79270f142e6b7219cd2143d021870fce348', "aria-disabled": disabled ? 'true' : null, class: {
                'uai-textarea--danger': invalid,
                'uai-textarea--success': success,
                'uai-textarea--disabled': disabled,
                'uai-textarea--readonly': this.readonly && !disabled,
                'uai-textarea--auto-resize': this.autoResize,
                'uai-textarea--resizable': this.resizable,
                [`uai-textarea--size-${this.sizeValue}`]: true,
            } }, h("div", { key: '338a1c840b6baf67c24124d430490f793bf3d4c1', class: "textarea" }, this.label && (h("label", { key: 'ed9f166b73f517f0c6278e2360a766293aac236e', class: "textarea__label", for: this.textareaId }, h("uai-typo", { key: 'bc8a454f0ed3c75cd3175d0bf53d2d7a898a049b', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), h("div", { key: '66354cd50820e45a7891c5caee6f66901c6da237', class: "textarea__control", part: "input-container", onClick: this.onControlClick }, this.icon && h("uai-icon", { key: '542aac53c2fa2c51d7513e62ad8178c4cad55bc5', class: "textarea__icon", name: this.icon, size: "medium" }), h("slot", { key: 'b930b3a26d46408281bdc59faaaeed8b151ab456', name: "input-left" }), h("div", { key: '416484b55276560e81bc0b2ea9394999e4651723', class: "textarea__field" }, h("slot", { key: 'f12d8408329c34589ea8940f6d11747e30a658fe', name: "inside-input-left" }), h("textarea", { key: '0670db654cc7db633ba0f5259648eb6dd24063e0', id: this.textareaId, ref: (textarea) => (this.nativeTextarea = textarea), class: "textarea__native", part: "input", rows: this.rowsValue, cols: this.cols || undefined, minLength: this.minlength, maxLength: this.maxlength, style: Object.assign(Object.assign({}, (this.minHeight !== undefined ? { minHeight: `${this.minHeight}px` } : {})), (this.maxHeight !== undefined ? { maxHeight: `${this.maxHeight}px` } : {})), placeholder: this.placeholder, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, required: this.required, readOnly: this.readonly, disabled: disabled, "aria-label": this.label ? null : this.ariaLabel, "aria-invalid": invalid ? 'true' : null, "aria-describedby": describedBy || null, "data-test": this.dataTest, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown })), this.counterLength && (h("uai-typo", { key: 'a28d8c945c2e39ee93c191113a8bac14e3f47fa8', id: `${this.textareaId}-counter`, class: { textarea__counter: true, [`textarea__counter--${counterState}`]: !!counterState }, variant: "caption", tag: "span", margin: false }, this.maxlength ? `${length}/${this.maxlength}` : `${length}`)), invalid && h("uai-icon", { key: '14e041be184307406141158588715001f4c7f2f9', class: "textarea__feedback", name: "error", theme: "outline", size: "medium" }), success && (h("uai-icon", { key: '7467abd347d0a38c0a9a927bd160d34e9a1cbe71', class: "textarea__feedback", name: "checkball", theme: "solid", size: "medium" })), h("slot", { key: '7befd07439c4526fdfd604f115d3f03c31dd7c4d', name: "input-right" })), message && (h("div", { key: '69b7d3536ea92b6c6a79473bbf804acd26bb8835', id: `${this.textareaId}-message`, class: "textarea__message", part: "input__message" }, h("uai-typo", { key: 'a162fd82ac452a12b27c44453a59473f51cd86d6', variant: "caption", tag: "span", margin: false }, message))))));
    }
    static get is() { return "uai-textarea"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-textarea.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-textarea.css"]
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
                    "text": "Name of the value in submitted form data, kept from bds-input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "input-name",
                "defaultValue": "''"
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
                    "text": "Browser autofill hint."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto-complete",
                "defaultValue": "'off'"
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
                    "text": "Regular expression the value must match. Checked on blur and form submission."
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
                    "text": "Message shown while danger is true."
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
                    "text": "Message shown while success is true."
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
                    "text": "UaiIcon name shown before the text."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "icon",
                "defaultValue": "''"
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
                    "text": "Minimum control height. Short defaults to one row; medium defaults to three. Explicit rows takes precedence."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'medium'"
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
                    "text": "If true, the field cannot be edited or submitted."
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
                    "text": "Current multiline text."
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
                    "text": "Ranges of remaining characters that color the counter."
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
                    "text": "If true, Enter clears the field after uaiSubmit and cancels the newline."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-submit",
                "defaultValue": "false"
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
                    "tags": [],
                    "text": "Initial visible line count. The browser's native row sizing supplies the default height."
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Number of columns. Zero leaves the width fluid."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "cols",
                "defaultValue": "0"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the field grows with its content."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto-resize",
                "defaultValue": "true"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true and autoResize is false, the user can resize the field vertically."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "resizable",
                "defaultValue": "false"
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
                    "tags": [],
                    "text": "Optional minimum height in CSS pixels. Omit to use the native height derived from rows."
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
                    "tags": [],
                    "text": "Optional maximum height in CSS pixels. Omit for unbounded automatic growth."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-height"
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
                    "tags": [],
                    "text": "Optional debounce interval in milliseconds for automatic height measurement."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "debounce-delay"
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
                    "text": "Message shown when the text is shorter than minlength."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "minlength-error-message"
            },
            "patternErrorMessage": {
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
                    "text": "Message shown when pattern does not match."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pattern-error-message"
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
                    "text": "If true, uaiChange emits HTML-special characters escaped."
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
                    "text": "Data test id, set on the native textarea."
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
                            "text": "The textarea is inherently multiline. This prop has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-textarea"
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
                            "text": "Use the native body/base icon size. This prop has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon-size"
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Textareas do not support numeric input constraints. This prop has no effect."
                        }],
                    "text": ""
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Textareas do not support numeric input constraints. This prop has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max"
            },
            "type": {
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
                    "tags": [{
                            "name": "deprecated",
                            "text": "Textareas do not have a type. This prop has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type"
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
                            "text": "Use uai-input-chips for tokenized values. This prop has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "chips"
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
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "Textarea has no native e-mail validation. This prop has no effect."
                        }],
                    "text": ""
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
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "Textarea has no native number validation. This prop has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "number-error-message"
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
                    "text": "Emitted when the field gains focus."
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
                    "text": "Emitted on Enter. detail: { event, value }. The native newline is retained unless isSubmit is true."
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
                    "text": "Moves focus to the textarea.",
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
                    "text": "Removes focus from the textarea.",
                    "tags": []
                }
            },
            "getInputElement": {
                "complexType": {
                    "signature": "() => Promise<HTMLTextAreaElement>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLTextAreaElement": {
                            "location": "global",
                            "id": "global::HTMLTextAreaElement"
                        }
                    },
                    "return": "Promise<HTMLTextAreaElement>"
                },
                "docs": {
                    "text": "Returns the native textarea element.",
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
                    "text": "Checks native and pattern validity.",
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
                    "text": "Clears the textarea value.",
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
            }, {
                "propName": "rows",
                "methodName": "resizeConfigurationChanged"
            }, {
                "propName": "size",
                "methodName": "resizeConfigurationChanged"
            }, {
                "propName": "minHeight",
                "methodName": "resizeConfigurationChanged"
            }, {
                "propName": "maxHeight",
                "methodName": "resizeConfigurationChanged"
            }, {
                "propName": "autoResize",
                "methodName": "resizeConfigurationChanged"
            }, {
                "propName": "resizable",
                "methodName": "resizeConfigurationChanged"
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
