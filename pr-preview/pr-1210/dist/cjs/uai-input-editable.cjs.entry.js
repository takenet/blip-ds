'use strict';

var index = require('./index-BuAR9UTp.js');
var uaiFormControl = require('./uai-form-control-B_Rr3WRq.js');

const uaiInputEditableCss = () => `:host{--input-height:var(--uai-control-height-medium, 2.5rem);--input-background:var(--uai-surface-paper, #ffffff);--input-border:var(--uai-border-input, #adb4b8);--input-content:var(--uai-content-primary, #242729);--input-label:var(--uai-content-primary, #242729);--input-message:var(--uai-content-secondary, #5f676d);--input-feedback:var(--input-content);--input-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:var(--uai-input-editable-width, 100%)}:host(.uai-input-editable--size-short){--input-height:var(--uai-control-height-short, 2rem)}:host(.uai-input-editable--size-tall){--input-height:var(--uai-control-height-large, 3.5rem)}:host(.uai-input-editable--danger){--input-border:var(--uai-feedback-error, #cf0022);--input-label:var(--uai-feedback-error, #cf0022);--input-message:var(--uai-feedback-error, #cf0022);--input-feedback:var(--uai-feedback-error, #cf0022)}:host(.uai-input-editable--success){--input-border:var(--uai-feedback-success, #3da329);--input-message:var(--uai-feedback-success, #3da329);--input-feedback:var(--uai-feedback-success, #3da329)}:host(.uai-input-editable--disabled){--input-background:var(--uai-surface-muted, #f2f3f3);--input-border:var(--uai-border-default, #e4e6e7);--input-content:var(--uai-content-disabled, #848e94);--input-label:var(--uai-content-disabled, #848e94);--input-message:var(--uai-content-disabled, #848e94);--input-feedback:var(--uai-content-disabled, #848e94)}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.input__label,.input__message{--uai-typo-color:currentColor}.input__label{color:var(--input-label)}.input__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--input-message)}.input__control{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);height:var(--input-height);padding:0 var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--input-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--input-background);color:var(--input-content);-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.input__control{-webkit-transition:none;transition:none}}.input__control:focus-within{--input-border:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo)}@media (forced-colors: active){.input__control:focus-within{-webkit-box-shadow:none;box-shadow:none;outline:var(--uai-border-width-thick, 2px) solid CanvasText}}:host(:not(.uai-input-editable--disabled):not(.uai-input-editable--readonly):not(.uai-input-editable--danger):not(.uai-input-editable--success)) .input__control:hover:not(:focus-within){--input-border:var(--uai-content-secondary, #5f676d)}:host(.uai-input-editable--disabled) .input__control{cursor:not-allowed}.input__field{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;min-width:0;height:100%}.input__native{-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;height:100%;margin:0;padding:0;border:0;outline:none;background:transparent;color:inherit;font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem);text-overflow:ellipsis;-webkit-appearance:none;-moz-appearance:none;appearance:none}.input__native::-webkit-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-moz-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:disabled{cursor:not-allowed;opacity:1;-webkit-text-fill-color:currentColor}.input__native:disabled::-webkit-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-moz-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled:-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::placeholder{color:var(--uai-content-disabled, #848e94)}.view__value{-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;overflow:hidden;color:var(--input-content);font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem);text-overflow:ellipsis;white-space:nowrap;cursor:text}.view__value--placeholder{color:var(--uai-content-placeholder, #adb4b8)}:host(.uai-input-editable--disabled) .view__value{cursor:not-allowed}.action{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:0;border:0;border-radius:var(--uai-radius-md, 0.5rem);background:transparent;color:var(--input-content);cursor:pointer;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.action{-webkit-transition:none;transition:none}}.action:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.action:hover{background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}@media (forced-colors: active){.action{border:var(--uai-border-width-default, 1px) solid ButtonText}}`;

const SIZES = ['short', 'standard', 'tall'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
const TEXTS = {
    pt_BR: {
        edit: 'Editar',
        save: 'Salvar',
        cancel: 'Cancelar',
        required: 'Informe um valor.',
        minlength: (length) => `Use pelo menos ${length} caracteres.`,
    },
    en_US: {
        edit: 'Edit',
        save: 'Save',
        cancel: 'Cancel',
        required: 'Enter a value.',
        minlength: (length) => `Use at least ${length} characters.`,
    },
    es_ES: {
        edit: 'Editar',
        save: 'Guardar',
        cancel: 'Cancelar',
        required: 'Ingrese un valor.',
        minlength: (length) => `Use al menos ${length} caracteres.`,
    },
};
let instances = 0;
const UaiInputEditable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiInputEditableSave = index.createEvent(this, "uaiInputEditableSave");
        this.uaiChange = index.createEvent(this, "uaiChange");
        this.uaiInput = index.createEvent(this, "uaiInput");
        this.uaiCancel = index.createEvent(this, "uaiCancel");
        this.uaiFocus = index.createEvent(this, "uaiFocus");
        this.uaiBlur = index.createEvent(this, "uaiBlur");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.isEditing = false;
        this.draft = '';
        this.validationDanger = false;
        this.disabledByForm = false;
        this.defaultValue = '';
        this.focusTarget = null;
        this.id = `uai-input-editable-${++instances}`;
        /**
         * Saved value, shown in reading mode and submitted with the form.
         */
        this.value = '';
        /**
         * Label shown above the field. It also names the Edit button ("Editar <label>").
         */
        this.label = '';
        /**
         * Text shown while the value is empty, in both modes.
         */
        this.placeholder = '';
        /**
         * Height of the field. Can be one of: 'short', 'standard' (default), 'tall'. 'medium' is the same as 'standard'.
         */
        this.size = 'standard';
        /**
         * Name of the saved value in the submitted form data. Same as name, kept from bds-input-editable.
         */
        this.inputName = '';
        /**
         * Smallest number of characters to save.
         */
        this.minlength = 0;
        /**
         * If true, shows the error state and errorMessage, and saving is blocked. Has priority over success.
         */
        this.danger = false;
        /**
         * If true, shows the success state and successMessage.
         */
        this.success = false;
        /**
         * If true, the value is shown without the Edit button and is left out of the form data.
         */
        this.disabled = false;
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
         * Language of the default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'.
         */
        this.language = 'pt_BR';
        /**
         * Accessible name of the field when there is no visible label.
         */
        this.ariaLabel = null;
        /**
         * Data test id, set on the native input.
         */
        this.dataTest = null;
        /**
         * Data test id, set on the Edit button.
         */
        this.dtButtonEdit = null;
        /**
         * Data test id, set on the Cancel button.
         */
        this.dtButtonClose = null;
        /**
         * Data test id, set on the Save button.
         */
        this.dtButtonConfirm = null;
        this.onInput = (event) => {
            this.draft = event.target.value;
            this.uaiInput.emit(event);
            this.uaiChange.emit({ value: this.draft, oldValue: this.value || '' });
        };
        this.onKeyDown = (event) => {
            if (event.isComposing)
                return;
            if (event.key === 'Enter') {
                event.preventDefault();
                this.saveDraft();
            }
            else if (event.key === 'Escape') {
                event.preventDefault();
                event.stopPropagation();
                this.cancelEditing();
            }
        };
        this.onFocus = () => {
            this.uaiFocus.emit();
        };
        this.onBlur = () => {
            if (this.draftError())
                this.validationDanger = true;
            this.uaiBlur.emit();
        };
    }
    /**
     * Starts editing and moves the focus to the field.
     */
    async edit() {
        this.startEditing();
    }
    /**
     * Saves the value being typed. Returns false when it cannot be saved (empty, shorter than minlength or danger).
     */
    async save() {
        return this.saveDraft();
    }
    /**
     * Discards the value being typed and returns to reading mode.
     */
    async cancel() {
        this.cancelEditing();
    }
    /**
     * Moves the focus to the field while editing, or to the Edit button.
     */
    async setFocus() {
        var _a;
        (_a = (this.isEditing ? this.nativeInput : this.editButton)) === null || _a === void 0 ? void 0 : _a.focus();
    }
    valueChanged() {
        this.syncFormValue();
    }
    nameChanged() {
        if (!this.name && this.inputName)
            this.name = this.inputName;
    }
    expandChanged() {
    }
    disabledChanged(disabled) {
        if (disabled)
            this.isEditing = false;
    }
    componentWillLoad() {
        var _a;
        this.defaultValue = this.value || '';
        this.draft = this.defaultValue;
        if (!this.name && this.inputName)
            this.name = this.inputName;
        // Real browsers only: the Stencil mock DOM attaches internals without the form API.
        if (typeof ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === 'function') {
            this.formControl = new uaiFormControl.UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.defaultValue || null,
                onReset: () => {
                    this.isEditing = false;
                    this.validationDanger = false;
                    this.draft = this.defaultValue;
                    this.value = this.defaultValue;
                },
                onDisabledChange: (disabled) => {
                    queueMicrotask(() => {
                        var _a, _b;
                        const formDisabled = (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : disabled;
                        if (!this.disabled && this.disabledByForm !== formDisabled)
                            this.disabledByForm = formDisabled;
                        if (formDisabled)
                            this.isEditing = false;
                    });
                },
            });
        }
    }
    componentDidRender() {
        var _a, _b, _c;
        if (this.isEditing && this.nativeInput && this.nativeInput.value !== this.draft) {
            this.nativeInput.value = this.draft;
        }
        const target = this.focusTarget;
        this.focusTarget = null;
        if (target === 'input' && this.nativeInput) {
            this.nativeInput.focus();
            (_b = (_a = this.nativeInput).select) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
        else if (target === 'edit') {
            (_c = this.editButton) === null || _c === void 0 ? void 0 : _c.focus();
        }
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
    get texts() {
        if (LANGUAGES.includes(this.language))
            return TEXTS[this.language];
        return TEXTS.pt_BR;
    }
    get sizeValue() {
        if (this.size === 'medium')
            return 'standard';
        if (SIZES.includes(this.size))
            return this.size;
        return 'standard';
    }
    get isDisabled() {
        return this.disabled || this.disabledByForm;
    }
    syncFormValue() {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(this.value || null);
    }
    draftError() {
        const texts = this.texts;
        if (!this.draft)
            return this.requiredErrorMessage || texts.required;
        if (this.minlength && this.draft.length < this.minlength) {
            return this.minlengthErrorMessage || texts.minlength(this.minlength);
        }
        return '';
    }
    startEditing() {
        if (this.isDisabled || this.isEditing)
            return;
        this.draft = this.value || '';
        this.validationDanger = false;
        this.isEditing = true;
        this.focusTarget = 'input';
    }
    saveDraft() {
        var _a;
        if (!this.isEditing)
            return false;
        if (this.draftError() || this.danger) {
            this.validationDanger = true;
            (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
            return false;
        }
        const oldValue = this.value || '';
        const value = this.draft;
        this.value = value;
        this.isEditing = false;
        this.validationDanger = false;
        this.focusTarget = 'edit';
        this.uaiInputEditableSave.emit({ value, oldValue });
        return true;
    }
    cancelEditing() {
        if (!this.isEditing)
            return;
        this.draft = this.value || '';
        this.isEditing = false;
        this.validationDanger = false;
        this.focusTarget = 'edit';
        this.uaiCancel.emit();
    }
    renderView(disabled) {
        const texts = this.texts;
        const value = this.value || '';
        return [
            index.h("span", { class: { view__value: true, 'view__value--placeholder': !value }, onClick: () => this.startEditing() }, value || this.placeholder),
            !disabled && (index.h("button", { type: "button", ref: (button) => (this.editButton = button), class: "action", part: "edit-button", "aria-label": this.label || this.ariaLabel ? `${texts.edit} ${this.label || this.ariaLabel}` : texts.edit, "data-test": this.dtButtonEdit, onClick: () => this.startEditing() }, index.h("uai-icon", { name: "edit", size: "medium" }))),
        ];
    }
    renderEdit(invalid, describedBy) {
        const texts = this.texts;
        return [
            index.h("input", { id: this.id, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: "text", value: this.draft, placeholder: this.placeholder, minLength: this.minlength || undefined, maxLength: this.maxlength, required: true, "aria-label": this.label ? null : this.ariaLabel, "aria-invalid": invalid ? 'true' : null, "aria-describedby": describedBy, "data-test": this.dataTest, onInput: this.onInput, onKeyDown: this.onKeyDown, onFocus: this.onFocus, onBlur: this.onBlur }),
            index.h("button", { type: "button", class: "action", part: "confirm-button", "aria-label": texts.save, "data-test": this.dtButtonConfirm, onClick: () => this.saveDraft() }, index.h("uai-icon", { name: "check", size: "medium" })),
            index.h("button", { type: "button", class: "action", part: "cancel-button", "aria-label": texts.cancel, "data-test": this.dtButtonClose, onClick: () => this.cancelEditing() }, index.h("uai-icon", { name: "close", size: "medium" })),
        ];
    }
    render() {
        const disabled = this.isDisabled;
        const editing = this.isEditing && !disabled;
        const validationText = editing && this.validationDanger ? this.draftError() : '';
        const invalid = this.danger || !!validationText;
        const success = this.success && !invalid;
        const message = this.danger
            ? this.errorMessage || validationText
            : validationText
                ? validationText
                : success
                    ? this.successMessage
                    : this.helperMessage;
        const describedBy = message ? `${this.id}-message` : null;
        return (index.h(index.Host, { key: 'cea18ef1e3a0cec92887ceb54d7fb2d256097c6b', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input-editable--size-${this.sizeValue}`]: true,
                'uai-input-editable--editing': editing,
                'uai-input-editable--danger': invalid,
                'uai-input-editable--success': success,
                'uai-input-editable--disabled': disabled,
            } }, index.h("div", { key: 'c22e47d4582867d8994e01b6b3dea3f3edc430dd', class: "input" }, this.label && (index.h("label", Object.assign({ key: '2ebe992db70f13d585002b25e5bcfa12e9894575', class: "input__label" }, (editing ? { for: this.id } : {})), index.h("uai-typo", { key: '20b6c06804d48f5580f84bba7f15925e8aeaab10', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), index.h("div", { key: '9eebecf88d26872c36aac8571cfbbc92cfa09566', class: "input__control", part: "input-container" }, editing ? this.renderEdit(invalid, describedBy) : this.renderView(disabled)), message && (index.h("div", { key: '3444caa60053fe562be71ba1927d2a1c50fca457', id: `${this.id}-message`, class: "input__message", part: "input__message" }, index.h("uai-typo", { key: '48585028aa09ad8702fc3f33a504414cf24d66ff', variant: "caption", tag: "span", margin: false }, message))))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "value": [{
                "valueChanged": 0
            }],
        "name": [{
                "nameChanged": 0
            }],
        "inputName": [{
                "nameChanged": 0
            }],
        "expand": [{
                "expandChanged": 0
            }],
        "disabled": [{
                "disabledChanged": 0
            }]
    }; }
};
UaiInputEditable.style = uaiInputEditableCss();

exports.uai_input_editable = UaiInputEditable;
