import { Build, Host, h, } from "@stencil/core";
import { warnDeprecated, warnLegacyValue, warnOnce } from "../../utils/deprecation";
import { emailValidation } from "../../utils/validations";
import { UaiFormControl } from "../../utils/uai-form-control";
const TAG = 'uai-input-chips';
const SIZES = ['short', 'medium'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
const LEGACY_PROPS = ['height', 'maxHeight', 'disableSubmit'];
const TEXTS = {
    pt_BR: {
        remove: (value) => `Remover ${value}`,
        email: 'Use apenas e-mails válidos.',
        required: 'Adicione pelo menos um valor.',
    },
    en_US: {
        remove: (value) => `Remove ${value}`,
        email: 'Use only valid e-mails.',
        required: 'Add at least one value.',
    },
    es_ES: {
        remove: (value) => `Quitar ${value}`,
        email: 'Use solo correos electrónicos válidos.',
        required: 'Agregue al menos un valor.',
    },
};
function parseChips(chips) {
    if (!chips)
        return [];
    if (Array.isArray(chips))
        return chips.map(String);
    try {
        const parsed = JSON.parse(chips);
        return Array.isArray(parsed) ? parsed.map(String) : [];
    }
    catch (_a) {
        return [];
    }
}
let instances = 0;
/**
 * Field that turns free text into removable chips. The person types a value and presses Enter, or separates values
 * with comma or semicolon; Backspace on the empty field removes the last chip. It takes part in native forms: with a
 * name, each chip is submitted as one entry (read them with FormData.getAll). Use it for several open values, such as
 * e-mails or tags. Pair with UaiButton in forms. Avoid it to choose from known options (use uai-select-chips or
 * uai-autocomplete). Wrap the app in UaiThemeProvider.
 *
 * @slot input-right - Content after the chips and the text (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, chips and the native input.
 * @part chips - The list of chips.
 * @part chip - Each chip.
 * @part chip-remove - The remove button of each chip.
 * @part input - The native input where new values are typed.
 * @part input__message - The helper, error or success message below the field.
 */
export class UaiInputChips {
    constructor() {
        this.internalChips = [];
        this.validationDanger = false;
        this.disabledByForm = false;
        this.defaultChips = [];
        this.focusInputAfterRender = false;
        this.reachedLimit = false;
        this.id = `uai-input-chips-${++instances}`;
        /**
         * Values shown as chips. Accepts an array or a JSON array string, for example '["ana@blip.ai", "bia@blip.ai"]'.
         */
        this.chips = [];
        /**
         * Text being typed, before it becomes a chip.
         */
        this.value = '';
        /**
         * Characters that split the text into several chips. Default: comma and semicolon (/,|;/).
         */
        this.delimiters = /,|;/;
        /**
         * If true, repeated values are accepted. If false (default), a value equal to an existing chip, ignoring case, is
         * ignored.
         */
        this.duplicated = false;
        /**
         * If true, leaving the field turns the typed text into a chip.
         */
        this.blurCreation = false;
        /**
         * Kind of value. Can be one of: 'text' (default), 'email'. With 'email', chips that are not e-mails are marked as
         * errors and the field is invalid.
         */
        this.type = 'text';
        /**
         * Name of the values in the submitted form data. Same as name, kept from bds-input-chips.
         */
        this.inputName = '';
        /**
         * Label shown above the field. Without a visible label, set aria-label.
         */
        this.label = '';
        /**
         * Example of a value, shown while the text is empty. Do not use it as the label.
         */
        this.placeholder = '';
        /**
         * Minimum height of the field, which grows with the chips. Can be one of: 'short', 'medium' (default).
         */
        this.size = 'medium';
        /**
         * Language of the default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'.
         */
        this.language = 'pt_BR';
        /**
         * UaiIcon name shown before the chips.
         */
        this.icon = '';
        /**
         * If true, the chips are shown without remove buttons and no value can be typed.
         */
        this.readonly = false;
        /**
         * If true, the field cannot be used and the chips are left out of the form data.
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
         * If true, shows the number of chips and maxChipsLength.
         */
        this.counterLength = false;
        /**
         * Accessible name of the field when there is no visible label.
         */
        this.ariaLabel = null;
        /**
         * Data test id, set on the native input.
         */
        this.dataTest = null;
        /**
         * Data test id, set on the remove button of each chip.
         */
        this.dtButtonClose = null;
        this.onInput = (event) => {
            var _a;
            const text = event.target.value || '';
            if ((_a = this.delimiters) === null || _a === void 0 ? void 0 : _a.test(text))
                this.commitText(text);
            else
                this.value = text;
            this.uaiInputChipsInput.emit(event);
        };
        this.onKeyDown = (event) => {
            var _a, _b, _c;
            if (event.isComposing || this.readonly || this.isDisabled)
                return;
            const text = ((_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.value) || '';
            if (event.key === 'Enter') {
                if (text.trim()) {
                    event.preventDefault();
                    this.commitText(text);
                }
                else {
                    (_c = (_b = this.formControl) === null || _b === void 0 ? void 0 : _b.form) === null || _c === void 0 ? void 0 : _c.requestSubmit();
                }
            }
            else if ((event.key === 'Backspace' || event.key === 'Delete') && !text && this.internalChips.length) {
                this.internalChips = this.internalChips.slice(0, -1);
                this.emitChange();
            }
        };
        this.onFocus = () => {
            this.uaiInputChipsFocus.emit();
        };
        this.onBlur = () => {
            var _a;
            if (this.blurCreation && ((_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.value.trim()))
                this.commitText(this.nativeInput.value);
            this.uaiBlur.emit(this.internalChips);
            if (this.internalChips.length)
                this.uaiSubmit.emit({ value: this.internalChips });
            this.showValidation(true);
        };
        // Clicks on the field box (outside chips buttons and slotted content) focus the input, as a native field does.
        this.onControlClick = (event) => {
            var _a, _b, _c;
            if ((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest) === null || _b === void 0 ? void 0 : _b.call(_a, 'button'))
                return;
            if (!this.el.contains(event.target))
                (_c = this.nativeInput) === null || _c === void 0 ? void 0 : _c.focus();
        };
    }
    /**
     * Returns true when the chips are valid for the type and, if required, there is at least one.
     */
    async isValid() {
        return !this.validity().invalid;
    }
    /**
     * Returns the chips.
     */
    async get() {
        return this.internalChips;
    }
    /**
     * Removes all chips and the typed text.
     */
    async clear() {
        this.internalChips = [];
        this.value = '';
    }
    /**
     * Adds chips from the given text, or from the typed text when no value is given.
     */
    async add(value) {
        this.addFromText(value || this.value || '');
        this.value = '';
    }
    /**
     * Moves the focus to the text input.
     */
    async setFocus() {
        var _a;
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /**
     * Removes the focus from the text input.
     */
    async removeFocus() {
        var _a;
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.blur();
    }
    chipsChanged() {
        this.internalChips = parseChips(this.chips);
    }
    internalChipsChanged() {
        this.syncFormValue();
        this.checkLimit();
    }
    nameChanged() {
        if (!this.name && this.inputName)
            this.name = this.inputName;
        this.syncFormValue();
    }
    legacyPropChanged(_value, _old, prop) {
        warnDeprecated(TAG, prop, 'The field grows with the chips.');
    }
    onInvalid() {
        this.showValidation(true);
    }
    componentWillLoad() {
        var _a;
        this.internalChips = parseChips(this.chips);
        this.defaultChips = [...this.internalChips];
        if (!this.name && this.inputName)
            this.name = this.inputName;
        // Real browsers only: the Stencil mock DOM attaches internals without the form API.
        if (typeof ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === 'function') {
            this.formControl = new UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.formValue(this.defaultChips),
                onReset: () => {
                    this.validationDanger = false;
                    this.value = '';
                    this.internalChips = [...this.defaultChips];
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
        for (const prop of LEGACY_PROPS) {
            const value = this[prop];
            if (value !== undefined && value !== null)
                warnDeprecated(TAG, prop, 'The field grows with the chips.');
        }
        if (Build.isDev && !this.label && !this.ariaLabel) {
            warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
        }
        this.reachedLimit = this.isAtLimit();
    }
    componentDidRender() {
        var _a, _b;
        if (this.nativeInput && this.nativeInput.value !== (this.value || ''))
            this.nativeInput.value = this.value || '';
        const { flags, message } = this.validity();
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValidity(flags, message, this.nativeInput);
        if (this.focusInputAfterRender) {
            this.focusInputAfterRender = false;
            (_b = this.nativeInput) === null || _b === void 0 ? void 0 : _b.focus();
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
            this.internalChips = parseChips(state);
    }
    get texts() {
        if (LANGUAGES.includes(this.language))
            return TEXTS[this.language];
        warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
        return TEXTS.pt_BR;
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
        warnLegacyValue(TAG, 'size', this.size, 'medium');
        return 'medium';
    }
    get isDisabled() {
        return this.disabled || this.disabledByForm;
    }
    formValue(chips) {
        const name = this.name || this.inputName;
        if (!name || !chips.length)
            return null;
        const data = new FormData();
        for (const chip of chips)
            data.append(name, chip);
        return data;
    }
    syncFormValue() {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(this.formValue(this.internalChips), JSON.stringify(this.internalChips));
    }
    isAtLimit() {
        return !!this.maxChipsLength && this.internalChips.length >= this.maxChipsLength;
    }
    checkLimit() {
        const atLimit = this.isAtLimit();
        if (atLimit && !this.reachedLimit)
            this.uaiExtendedQuantityInput.emit({ value: true });
        this.reachedLimit = atLimit;
    }
    isInvalidChip(chip) {
        return this.type === 'email' && !!emailValidation(chip.trim());
    }
    validity() {
        const texts = this.texts;
        if (this.required && !this.internalChips.length) {
            return { invalid: true, flags: { valueMissing: true }, message: this.requiredErrorMessage || texts.required };
        }
        if (this.internalChips.some((chip) => this.isInvalidChip(chip))) {
            return { invalid: true, flags: { typeMismatch: true }, message: this.emailErrorMessage || texts.email };
        }
        return { invalid: false, flags: {}, message: '' };
    }
    // Shows the validation result from now on; the message follows the chips while it stays shown.
    showValidation(show) {
        const danger = show && this.validity().invalid;
        if (danger !== this.validationDanger)
            this.validationDanger = danger;
    }
    emitChange() {
        const detail = { data: this.internalChips, value: this.internalChips[this.internalChips.length - 1] };
        this.uaiChange.emit(detail);
        this.uaiChangeChips.emit(detail);
    }
    // Adds one chip per part of the text; returns true when at least one chip was added.
    addFromText(text) {
        const chips = [...this.internalChips];
        for (const part of text.split(this.delimiters || /,|;/)) {
            const chip = part.trim();
            if (!chip)
                continue;
            if (this.maxChipsLength && chips.length >= this.maxChipsLength)
                break;
            if (!this.duplicated && chips.some((item) => item.toLowerCase() === chip.toLowerCase()))
                continue;
            chips.push(chip);
        }
        if (chips.length === this.internalChips.length)
            return false;
        this.internalChips = chips;
        return true;
    }
    commitText(text) {
        this.value = '';
        if (this.nativeInput)
            this.nativeInput.value = '';
        if (this.addFromText(text))
            this.emitChange();
    }
    removeChip(index) {
        this.internalChips = this.internalChips.filter((_chip, position) => position !== index);
        this.focusInputAfterRender = true;
        this.emitChange();
    }
    renderChip(chip, index, removable) {
        const texts = this.texts;
        return (h("li", { key: `${index}-${chip}`, part: "chip", role: "listitem", class: { chip: true, 'chip--invalid': this.isInvalidChip(chip), 'chip--static': !removable } }, h("span", { class: "chip__label", title: chip }, chip), removable && (h("button", { type: "button", class: "chip__remove", part: "chip-remove", "aria-label": texts.remove(chip), "data-test": this.dtButtonClose, onClick: () => this.removeChip(index) }, h("span", { "aria-hidden": "true" }, "\u00D7")))));
    }
    render() {
        const disabled = this.isDisabled;
        const validity = this.validity();
        const validationText = this.validationDanger && validity.invalid ? validity.message : '';
        const invalid = this.danger || !!validationText;
        const success = this.success && !invalid;
        const message = this.danger
            ? this.errorMessage || validationText
            : validationText
                ? validationText
                : success
                    ? this.successMessage
                    : this.helperMessage;
        const removable = !disabled && !this.readonly;
        const showInput = !this.isAtLimit();
        const describedBy = [message && `${this.id}-message`, this.counterLength && `${this.id}-counter`]
            .filter(Boolean)
            .join(' ');
        return (h(Host, { key: '3f461407d5a14404dc0e535adf7848f2d9b38ae5', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input-chips--size-${this.sizeValue}`]: true,
                'uai-input-chips--danger': invalid,
                'uai-input-chips--success': success,
                'uai-input-chips--disabled': disabled,
                'uai-input-chips--readonly': this.readonly && !disabled,
            } }, h("div", { key: '389da1fc210e465b483a9b65c9124bd431368901', class: "input" }, this.label && (h("label", { key: 'da590a375d8876f71167527920025162dc9abff4', class: "input__label", for: this.id }, h("uai-typo", { key: 'dc295aa729dd1b65b4ae02848e16b80fd0fe2d5a', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), h("div", { key: 'f9344cf8aa82bf4dba25ef2a61b577d8b41bdefe', class: "input__control", part: "input-container", onClick: this.onControlClick }, this.icon && h("uai-icon", { key: 'a0034f1e6abf0cc8c180bc7624a39dc017633c3a', class: "input__icon", name: this.icon, size: "medium" }), h("div", { key: 'c9dbdde340755e6887c92fb8bb2c40be815a7a28', class: "input__field" }, h("ul", { key: '1bd6c3072e8bcb21fbba4163bb94d780343c4a62', class: "chips", part: "chips", role: "list", "aria-label": this.label || this.ariaLabel || null }, this.internalChips.map((chip, index) => this.renderChip(chip, index, removable))), showInput && (h("input", { key: '71006974ad20535dd9d597ee3a1dbdc7f2ad1009', id: this.id, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: "text", value: this.value || '', placeholder: this.placeholder, maxLength: this.maxlength, readOnly: this.readonly, disabled: disabled, "aria-label": this.label ? null : this.ariaLabel, "aria-invalid": invalid ? 'true' : null, "aria-describedby": describedBy || null, "data-test": this.dataTest, onInput: this.onInput, onKeyDown: this.onKeyDown, onFocus: this.onFocus, onBlur: this.onBlur }))), this.counterLength && (h("uai-typo", { key: 'fdb028c47adfcd4f05598dd7d14a0732db6efbef', id: `${this.id}-counter`, class: "input__counter", variant: "caption", tag: "span", margin: false }, this.maxChipsLength
            ? `${this.internalChips.length}/${this.maxChipsLength}`
            : `${this.internalChips.length}`)), invalid && h("uai-icon", { key: '4a0c4529548c145a8e58067352073adb73e415b7', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && h("uai-icon", { key: 'c59f34b7468af8c00613d7f3b3200bf2b4e4a992', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), h("slot", { key: '88bf632a6be9c7aaae0e633621fb3a96629d5e18', name: "input-right" })), message && (h("div", { key: '40460b61eb8021fff285cc211123604864b4a528', id: `${this.id}-message`, class: "input__message", part: "input__message" }, h("uai-typo", { key: 'd4f9343340c81c452871d99a7d43ea8053698cbe', variant: "caption", tag: "span", margin: false }, message))))));
    }
    static get is() { return "uai-input-chips"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-input-chips.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-input-chips.css"]
        };
    }
    static get properties() {
        return {
            "chips": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string[] | string",
                    "resolved": "string | string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Values shown as chips. Accepts an array or a JSON array string, for example '[\"ana@blip.ai\", \"bia@blip.ai\"]'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "chips",
                "defaultValue": "[]"
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
                    "text": "Text being typed, before it becomes a chip."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "value",
                "defaultValue": "''"
            },
            "delimiters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "RegExp",
                    "resolved": "RegExp",
                    "references": {
                        "RegExp": {
                            "location": "global",
                            "id": "global::RegExp"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Characters that split the text into several chips. Default: comma and semicolon (/,|;/)."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "/,|;/"
            },
            "duplicated": {
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
                    "text": "If true, repeated values are accepted. If false (default), a value equal to an existing chip, ignoring case, is\nignored."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "duplicated",
                "defaultValue": "false"
            },
            "blurCreation": {
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
                    "text": "If true, leaving the field turns the typed text into a chip."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "blur-creation",
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiInputChipsType",
                    "resolved": "\"email\" | \"text\"",
                    "references": {
                        "UaiInputChipsType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input-chips/uai-input-chips.tsx",
                            "id": "src/components/uai-input-chips/uai-input-chips.tsx::UaiInputChipsType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Kind of value. Can be one of: 'text' (default), 'email'. With 'email', chips that are not e-mails are marked as\nerrors and the field is invalid."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "type",
                "defaultValue": "'text'"
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
                    "text": "Name of the values in the submitted form data; each chip is one entry. Without name (or inputName), the field is\nnot submitted."
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
                    "text": "Name of the values in the submitted form data. Same as name, kept from bds-input-chips."
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
                    "text": "Example of a value, shown while the text is empty. Do not use it as the label."
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
                    "original": "UaiInputChipsSize",
                    "resolved": "\"medium\" | \"short\"",
                    "references": {
                        "UaiInputChipsSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input-chips/uai-input-chips.tsx",
                            "id": "src/components/uai-input-chips/uai-input-chips.tsx::UaiInputChipsSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Minimum height of the field, which grows with the chips. Can be one of: 'short', 'medium' (default)."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'medium'"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiInputChipsLanguage",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "UaiInputChipsLanguage": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input-chips/uai-input-chips.tsx",
                            "id": "src/components/uai-input-chips/uai-input-chips.tsx::UaiInputChipsLanguage"
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
                    "text": "UaiIcon name shown before the chips."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "icon",
                "defaultValue": "''"
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
                    "text": "If true, the field without chips blocks the form submission."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required"
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
                    "text": "If true, the chips are shown without remove buttons and no value can be typed."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "readonly",
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
                    "text": "If true, the field cannot be used and the chips are left out of the form data."
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
                    "text": "Message shown when type is 'email' and a chip is not an e-mail. Without it, the default text is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "email-error-message"
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
                    "text": "Message shown when a required field has no chips. Without it, the default text is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required-error-message"
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
                    "text": "Largest number of characters of each chip."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "maxlength"
            },
            "maxChipsLength": {
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
                    "text": "Largest number of chips. When it is reached, the text input is hidden."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-chips-length"
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
                    "text": "If true, shows the number of chips and maxChipsLength."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "counter-length",
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
                    "text": "Data test id, set on the remove button of each chip."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-close",
                "defaultValue": "null"
            },
            "height": {
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
                            "text": "The field grows with the chips. Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height"
            },
            "maxHeight": {
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
                            "text": "The field grows with the chips. Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-height"
            },
            "disableSubmit": {
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
                            "text": "Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disable-submit"
            }
        };
    }
    static get states() {
        return {
            "internalChips": {},
            "validationDanger": {},
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
                    "text": "Emitted when chips are added or removed. detail: { data (all chips), value (last chip) }."
                },
                "complexType": {
                    "original": "UaiInputChipsChange",
                    "resolved": "UaiInputChipsChange",
                    "references": {
                        "UaiInputChipsChange": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input-chips/uai-input-chips.tsx",
                            "id": "src/components/uai-input-chips/uai-input-chips.tsx::UaiInputChipsChange"
                        }
                    }
                }
            }, {
                "method": "uaiChangeChips",
                "name": "uaiChangeChips",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when chips are added or removed. Same as uaiChange, kept from bds-input-chips."
                },
                "complexType": {
                    "original": "UaiInputChipsChange",
                    "resolved": "UaiInputChipsChange",
                    "references": {
                        "UaiInputChipsChange": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input-chips/uai-input-chips.tsx",
                            "id": "src/components/uai-input-chips/uai-input-chips.tsx::UaiInputChipsChange"
                        }
                    }
                }
            }, {
                "method": "uaiInputChipsFocus",
                "name": "uaiInputChipsFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the text input receives focus."
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
                    "text": "Emitted when the text input loses focus. detail: all chips."
                },
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                }
            }, {
                "method": "uaiInputChipsInput",
                "name": "uaiInputChipsInput",
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
                "method": "uaiExtendedQuantityInput",
                "name": "uaiExtendedQuantityInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when maxChipsLength is reached. detail: { value: true }."
                },
                "complexType": {
                    "original": "{ value: boolean }",
                    "resolved": "{ value: boolean; }",
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
                    "text": "Emitted when the text input loses focus with chips. detail: { value (all chips) }."
                },
                "complexType": {
                    "original": "{ value: string[] }",
                    "resolved": "{ value: string[]; }",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
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
                    "text": "Returns true when the chips are valid for the type and, if required, there is at least one.",
                    "tags": []
                }
            },
            "get": {
                "complexType": {
                    "signature": "() => Promise<string[]>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<string[]>"
                },
                "docs": {
                    "text": "Returns the chips.",
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
                    "text": "Removes all chips and the typed text.",
                    "tags": []
                }
            },
            "add": {
                "complexType": {
                    "signature": "(value?: string) => Promise<void>",
                    "parameters": [{
                            "name": "value",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Adds chips from the given text, or from the typed text when no value is given.",
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
                    "text": "Moves the focus to the text input.",
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
                    "text": "Removes the focus from the text input.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "chips",
                "methodName": "chipsChanged"
            }, {
                "propName": "internalChips",
                "methodName": "internalChipsChanged"
            }, {
                "propName": "name",
                "methodName": "nameChanged"
            }, {
                "propName": "inputName",
                "methodName": "nameChanged"
            }, {
                "propName": "height",
                "methodName": "legacyPropChanged"
            }, {
                "propName": "maxHeight",
                "methodName": "legacyPropChanged"
            }, {
                "propName": "disableSubmit",
                "methodName": "legacyPropChanged"
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
