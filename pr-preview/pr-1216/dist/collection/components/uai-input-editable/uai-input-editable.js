import { Build, Host, h, } from "@stencil/core";
import { warnDeprecated, warnLegacyValue, warnOnce } from "../../utils/deprecation";
import { UaiFormControl } from "../../utils/uai-form-control";
const TAG = 'uai-input-editable';
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
/**
 * Value shown as text that the person can edit and confirm. In reading mode it shows the value and an Edit button;
 * in editing mode it shows a field with Save and Cancel. Enter saves, Escape cancels and the focus goes back to Edit.
 * Empty values, values shorter than minlength and values with danger are not saved. It takes part in native forms
 * with the saved value. Use it to rename or adjust an existing value in place, such as a title. Pair with a label
 * that names the value. Avoid it for forms where every field is edited at once (use uai-input). Wrap the app in
 * UaiThemeProvider.
 *
 * @part input-container - The field box, in reading and editing modes.
 * @part input - The native input, in editing mode.
 * @part input__message - The helper, error or success message below the field.
 * @part edit-button - The button that starts editing.
 * @part confirm-button - The button that saves the value.
 * @part cancel-button - The button that discards the changes.
 */
export class UaiInputEditable {
    constructor() {
        this.isEditing = false;
        this.draft = '';
        this.validationDanger = false;
        this.disabledByForm = false;
        this.defaultValue = '';
        this.focusTarget = null;
        this.inputId = `uai-input-editable-${++instances}`;
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
        warnDeprecated(TAG, 'expand', 'The field takes the width of its container.');
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
            this.formControl = new UaiFormControl({
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
        if (this.expand !== undefined && this.expand !== null) {
            warnDeprecated(TAG, 'expand', 'The field takes the width of its container.');
        }
        if (Build.isDev && !this.label && !this.ariaLabel) {
            warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
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
        warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
        return TEXTS.pt_BR;
    }
    get sizeValue() {
        if (this.size === 'medium')
            return 'standard';
        if (SIZES.includes(this.size))
            return this.size;
        warnLegacyValue(TAG, 'size', this.size, 'standard');
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
            h("span", { class: { view__value: true, 'view__value--placeholder': !value }, onClick: () => this.startEditing() }, value || this.placeholder),
            !disabled && (h("button", { type: "button", ref: (button) => (this.editButton = button), class: "action", part: "edit-button", "aria-label": this.label || this.ariaLabel ? `${texts.edit} ${this.label || this.ariaLabel}` : texts.edit, "data-test": this.dtButtonEdit, onClick: () => this.startEditing() }, h("uai-icon", { name: "edit", size: "medium" }))),
        ];
    }
    renderEdit(invalid, describedBy) {
        const texts = this.texts;
        return [
            h("input", { id: this.inputId, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: "text", value: this.draft, placeholder: this.placeholder, minLength: this.minlength || undefined, maxLength: this.maxlength, required: true, "aria-label": this.label ? null : this.ariaLabel, "aria-invalid": invalid ? 'true' : null, "aria-describedby": describedBy, "data-test": this.dataTest, onInput: this.onInput, onKeyDown: this.onKeyDown, onFocus: this.onFocus, onBlur: this.onBlur }),
            h("button", { type: "button", class: "action", part: "confirm-button", "aria-label": texts.save, "data-test": this.dtButtonConfirm, onClick: () => this.saveDraft() }, h("uai-icon", { name: "check", size: "medium" })),
            h("button", { type: "button", class: "action", part: "cancel-button", "aria-label": texts.cancel, "data-test": this.dtButtonClose, onClick: () => this.cancelEditing() }, h("uai-icon", { name: "close", size: "medium" })),
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
        const describedBy = message ? `${this.inputId}-message` : null;
        return (h(Host, { key: 'fa60aa4fa47f8bd8ce83b41e13fe7857ea14df02', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input-editable--size-${this.sizeValue}`]: true,
                'uai-input-editable--editing': editing,
                'uai-input-editable--danger': invalid,
                'uai-input-editable--success': success,
                'uai-input-editable--disabled': disabled,
            } }, h("div", { key: 'c28cb7c54354a67b161d3d81041ce6db7aae99e2', class: "input" }, this.label && (h("label", Object.assign({ key: 'e12116662f0bb5b25b6d4119e824b2f625f9f71d', class: "input__label" }, (editing ? { for: this.inputId } : {})), h("uai-typo", { key: 'f54dbf039e05e471e3909e990a0bca1efcdf0366', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), h("div", { key: 'bcd47ad672436ed2c29c8103cf1f1012f2614790', class: "input__control", part: "input-container" }, editing ? this.renderEdit(invalid, describedBy) : this.renderView(disabled)), message && (h("div", { key: '93f08c366cc6d78c36d4de9f46535f659b5b9239', id: `${this.inputId}-message`, class: "input__message", part: "input__message" }, h("uai-typo", { key: '00eebf603b8eae45cc04adea9ec514192d64e544', variant: "caption", tag: "span", margin: false }, message))))));
    }
    static get is() { return "uai-input-editable"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-input-editable.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-input-editable.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Saved value, shown in reading mode and submitted with the form."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "value",
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
                    "text": "Label shown above the field. It also names the Edit button (\"Editar <label>\")."
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
                    "text": "Text shown while the value is empty, in both modes."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
                "defaultValue": "''"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiInputEditableSize | 'medium'",
                    "resolved": "\"medium\" | \"short\" | \"standard\" | \"tall\"",
                    "references": {
                        "UaiInputEditableSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input-editable/uai-input-editable.tsx",
                            "id": "src/components/uai-input-editable/uai-input-editable.tsx::UaiInputEditableSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Height of the field. Can be one of: 'short', 'standard' (default), 'tall'. 'medium' is the same as 'standard'."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'standard'"
            },
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
                    "text": "Name of the saved value in the submitted form data. Without name (or inputName), the field is not submitted."
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
                    "text": "Name of the saved value in the submitted form data. Same as name, kept from bds-input-editable."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "input-name",
                "defaultValue": "''"
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
                    "text": "Smallest number of characters to save."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "minlength",
                "defaultValue": "0"
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
                    "text": "If true, shows the error state and errorMessage, and saving is blocked. Has priority over success."
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
            "disabled": {
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
                    "text": "If true, the value is shown without the Edit button and is left out of the form data."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disabled",
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
                    "text": "Message shown when saving an empty value. Without it, the default text of the language is shown."
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
                    "text": "Message shown when saving a value shorter than minlength. Without it, the default text is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "minlength-error-message"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiInputEditableLanguage",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "UaiInputEditableLanguage": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input-editable/uai-input-editable.tsx",
                            "id": "src/components/uai-input-editable/uai-input-editable.tsx::UaiInputEditableLanguage"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Language of the default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'pt_BR'"
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
            "dtButtonEdit": {
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
                    "text": "Data test id, set on the Edit button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-edit",
                "defaultValue": "null"
            },
            "dtButtonClose": {
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
                    "text": "Data test id, set on the Cancel button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-close",
                "defaultValue": "null"
            },
            "dtButtonConfirm": {
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
                    "text": "Data test id, set on the Save button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-confirm",
                "defaultValue": "null"
            },
            "expand": {
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
                            "text": "The field takes the width of its container (--uai-input-editable-width). Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "expand"
            }
        };
    }
    static get states() {
        return {
            "isEditing": {},
            "draft": {},
            "validationDanger": {},
            "disabledByForm": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiInputEditableSave",
                "name": "uaiInputEditableSave",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a value is saved. detail: { value (new), oldValue }."
                },
                "complexType": {
                    "original": "UaiInputEditableEventDetail",
                    "resolved": "UaiInputEditableEventDetail",
                    "references": {
                        "UaiInputEditableEventDetail": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input-editable/uai-input-editable.tsx",
                            "id": "src/components/uai-input-editable/uai-input-editable.tsx::UaiInputEditableEventDetail"
                        }
                    }
                }
            }, {
                "method": "uaiChange",
                "name": "uaiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted on every keystroke while editing. detail: { value (being typed), oldValue (saved) }."
                },
                "complexType": {
                    "original": "UaiInputEditableEventDetail",
                    "resolved": "UaiInputEditableEventDetail",
                    "references": {
                        "UaiInputEditableEventDetail": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input-editable/uai-input-editable.tsx",
                            "id": "src/components/uai-input-editable/uai-input-editable.tsx::UaiInputEditableEventDetail"
                        }
                    }
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
                "method": "uaiCancel",
                "name": "uaiCancel",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the editing is cancelled."
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
                    "text": "Emitted when the field receives focus while editing."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "uaiBlur",
                "name": "uaiBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the field loses focus while editing."
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
            "edit": {
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
                    "text": "Starts editing and moves the focus to the field.",
                    "tags": []
                }
            },
            "save": {
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
                    "text": "Saves the value being typed. Returns false when it cannot be saved (empty, shorter than minlength or danger).",
                    "tags": []
                }
            },
            "cancel": {
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
                    "text": "Discards the value being typed and returns to reading mode.",
                    "tags": []
                }
            },
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
                    "text": "Moves the focus to the field while editing, or to the Edit button.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueChanged"
            }, {
                "propName": "name",
                "methodName": "nameChanged"
            }, {
                "propName": "inputName",
                "methodName": "nameChanged"
            }, {
                "propName": "expand",
                "methodName": "expandChanged"
            }, {
                "propName": "disabled",
                "methodName": "disabledChanged"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
