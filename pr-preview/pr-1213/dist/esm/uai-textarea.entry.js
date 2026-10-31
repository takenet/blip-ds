import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';
import { e as escapeHtml } from './escape-html-C0cO-JTe.js';
import { U as UaiFormControl } from './uai-form-control-BkRP7pRQ.js';

const uaiTextareaCss = () => `:host{--textarea-control-min-height:var(--uai-control-height-medium, 2.5rem);--textarea-control-padding-y:var(--uai-spacing-xs, 0.5rem);--textarea-background:var(--uai-surface-paper, #ffffff);--textarea-border:var(--uai-border-input, #adb4b8);--textarea-content:var(--uai-content-primary, #242729);--textarea-label:var(--uai-content-primary, #242729);--textarea-message:var(--uai-content-secondary, #5f676d);--textarea-feedback:var(--textarea-content);--textarea-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:100%}:host(.uai-textarea--size-short){--textarea-control-min-height:var(--uai-control-height-short, 2rem);--textarea-control-padding-y:var(--uai-spacing-3xs, 0.125rem)}:host(.uai-textarea--danger){--textarea-border:var(--uai-feedback-error, #cf0022);--textarea-label:var(--uai-feedback-error, #cf0022);--textarea-message:var(--uai-feedback-error, #cf0022);--textarea-feedback:var(--uai-feedback-error, #cf0022)}:host(.uai-textarea--success){--textarea-border:var(--uai-feedback-success, #3da329);--textarea-message:var(--uai-feedback-success, #3da329);--textarea-feedback:var(--uai-feedback-success, #3da329)}:host(.uai-textarea--disabled){--textarea-background:var(--uai-surface-muted, #f2f3f3);--textarea-border:var(--uai-border-default, #e4e6e7);--textarea-content:var(--uai-content-disabled, #848e94);--textarea-label:var(--uai-content-disabled, #848e94);--textarea-message:var(--uai-content-disabled, #848e94);--textarea-feedback:var(--uai-content-disabled, #848e94)}.textarea{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.textarea__label,.textarea__message{--uai-typo-color:currentColor}.textarea__label{color:var(--textarea-label)}.textarea__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--textarea-message)}.textarea__control{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:start;align-items:flex-start;gap:var(--uai-spacing-xs, 0.5rem);min-height:var(--textarea-control-min-height);padding-block:var(--textarea-control-padding-y);padding-inline:var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--textarea-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--textarea-background);color:var(--textarea-content);cursor:text;-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.textarea__control{-webkit-transition:none;transition:none}}.textarea__control:focus-within{--textarea-border:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--textarea-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--textarea-halo)}@media (forced-colors: active){.textarea__control:focus-within{-webkit-box-shadow:none;box-shadow:none;outline:var(--uai-border-width-thick, 2px) solid CanvasText}}:host(:not(.uai-textarea--disabled):not(.uai-textarea--readonly):not(.uai-textarea--danger):not(.uai-textarea--success)) .textarea__control:hover:not(:focus-within){--textarea-border:var(--uai-content-secondary, #5f676d)}:host(.uai-textarea--disabled) .textarea__control{cursor:not-allowed}.textarea__icon,.textarea__feedback{-ms-flex:none;flex:none;-webkit-margin-before:var(--uai-spacing-2xs, 0.25rem);margin-block-start:var(--uai-spacing-2xs, 0.25rem);color:var(--textarea-feedback)}.textarea__field{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:start;align-items:flex-start;gap:var(--uai-spacing-xs, 0.5rem);min-width:0}.textarea__native{display:block;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;min-width:0;margin:0;padding:0;border:0;outline:none;background:transparent;color:inherit;font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem);resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.textarea__native::-webkit-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.textarea__native::-moz-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.textarea__native:-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.textarea__native::-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.textarea__native::placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.textarea__native:disabled{cursor:not-allowed;opacity:1;-webkit-text-fill-color:currentColor}.textarea__native:disabled::-webkit-input-placeholder{color:var(--uai-content-disabled, #848e94)}.textarea__native:disabled::-moz-placeholder{color:var(--uai-content-disabled, #848e94)}.textarea__native:disabled:-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.textarea__native:disabled::-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.textarea__native:disabled::placeholder{color:var(--uai-content-disabled, #848e94)}:host(.uai-textarea--auto-resize) .textarea__native{overflow-y:auto;resize:none}:host(:not(.uai-textarea--auto-resize):not(.uai-textarea--disabled):not(.uai-textarea--readonly).uai-textarea--resizable) .textarea__native{resize:vertical}:host(.uai-textarea--disabled) .textarea__native{resize:none}:host(.uai-textarea--readonly) .textarea__native{resize:none}.textarea__counter{--uai-typo-color:currentColor;-ms-flex:none;flex:none;-webkit-margin-before:var(--uai-spacing-2xs, 0.25rem);margin-block-start:var(--uai-spacing-2xs, 0.25rem);color:var(--uai-content-secondary, #5f676d)}.textarea__counter--warning{color:var(--uai-feedback-warning, #ff8000)}.textarea__counter--delete{color:var(--uai-feedback-error, #cf0022)}:host(.uai-textarea--disabled) .textarea__counter{color:var(--uai-content-disabled, #848e94)}`;

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
const UaiTextarea = class {
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
        this.id = `uai-textarea-${++instances}`;
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
        const describedBy = [message && `${this.id}-message`, this.counterLength && `${this.id}-counter`]
            .filter(Boolean)
            .join(' ');
        return (h(Host, { key: 'cf08dd7e568af4d6ce6b59437b5a814202b3ce0a', "aria-disabled": disabled ? 'true' : null, class: {
                'uai-textarea--danger': invalid,
                'uai-textarea--success': success,
                'uai-textarea--disabled': disabled,
                'uai-textarea--readonly': this.readonly && !disabled,
                'uai-textarea--auto-resize': this.autoResize,
                'uai-textarea--resizable': this.resizable,
                [`uai-textarea--size-${this.sizeValue}`]: true,
            } }, h("div", { key: '2b73448e3ce605669d906a94a4ef429765820d36', class: "textarea" }, this.label && (h("label", { key: '5698640de10a1163c3c7e9dec3645f30b5dc644c', class: "textarea__label", for: this.id }, h("uai-typo", { key: '0c28804ec545b4b36c3c58dc8e087b1824a42eb4', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), h("div", { key: 'e101e6d860c7ccf9b39642f5127232f1edd9ecb6', class: "textarea__control", part: "input-container", onClick: this.onControlClick }, this.icon && h("uai-icon", { key: '9456eeed3b26b4100336a56954c78f19c054f5be', class: "textarea__icon", name: this.icon, size: "medium" }), h("slot", { key: '994feb17a1c2d846e49319205df2aaa8c27824c0', name: "input-left" }), h("div", { key: '466c0b86549741e28cabffad0955ccaaa54a82ce', class: "textarea__field" }, h("slot", { key: '92c7384ff6118730ff755ccdea3f3b54fac88fc6', name: "inside-input-left" }), h("textarea", { key: '6a608ebe43c924520222591538f087edfc89c6e6', id: this.id, ref: (textarea) => (this.nativeTextarea = textarea), class: "textarea__native", part: "input", rows: this.rowsValue, cols: this.cols || undefined, minLength: this.minlength, maxLength: this.maxlength, style: Object.assign(Object.assign({}, (this.minHeight !== undefined ? { minHeight: `${this.minHeight}px` } : {})), (this.maxHeight !== undefined ? { maxHeight: `${this.maxHeight}px` } : {})), placeholder: this.placeholder, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, required: this.required, readOnly: this.readonly, disabled: disabled, "aria-label": this.label ? null : this.ariaLabel, "aria-invalid": invalid ? 'true' : null, "aria-describedby": describedBy || null, "data-test": this.dataTest, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown })), this.counterLength && (h("uai-typo", { key: '74a661fdf15838b70c2f0f0ab866cea930c2238f', id: `${this.id}-counter`, class: { textarea__counter: true, [`textarea__counter--${counterState}`]: !!counterState }, variant: "caption", tag: "span", margin: false }, this.maxlength ? `${length}/${this.maxlength}` : `${length}`)), invalid && h("uai-icon", { key: '7acf74176829ffa2d147cd94e1d9adc2162e6850', class: "textarea__feedback", name: "error", theme: "outline", size: "medium" }), success && (h("uai-icon", { key: 'b0361a3f2ffe4e73a280ca4d5fb3cecd1b960d7e', class: "textarea__feedback", name: "checkball", theme: "solid", size: "medium" })), h("slot", { key: 'a9b7448aaa52efc91dea722ffdc798041a23db1b', name: "input-right" })), message && (h("div", { key: '298c4d4a9a829d6ae8c4420b8ed144bc5fde20e7', id: `${this.id}-message`, class: "textarea__message", part: "input__message" }, h("uai-typo", { key: '32c2a7ea210a29cb05bb2e019162081051d161ad', variant: "caption", tag: "span", margin: false }, message))))));
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
            }],
        "rows": [{
                "resizeConfigurationChanged": 0
            }],
        "size": [{
                "resizeConfigurationChanged": 0
            }],
        "minHeight": [{
                "resizeConfigurationChanged": 0
            }],
        "maxHeight": [{
                "resizeConfigurationChanged": 0
            }],
        "autoResize": [{
                "resizeConfigurationChanged": 0
            }],
        "resizable": [{
                "resizeConfigurationChanged": 0
            }]
    }; }
};
UaiTextarea.style = uaiTextareaCss();

export { UaiTextarea as uai_textarea };
