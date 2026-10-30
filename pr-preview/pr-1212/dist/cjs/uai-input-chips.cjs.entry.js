'use strict';

var index = require('./index-BuAR9UTp.js');
var validations = require('./validations-BrQ_igDv.js');
var uaiFormControl = require('./uai-form-control-B_Rr3WRq.js');

const uaiInputChipsCss = () => `:host{--input-height:var(--uai-control-height-medium, 2.5rem);--input-background:var(--uai-surface-paper, #ffffff);--input-border:var(--uai-border-input, #adb4b8);--input-content:var(--uai-content-primary, #242729);--input-label:var(--uai-content-primary, #242729);--input-message:var(--uai-content-secondary, #5f676d);--input-feedback:var(--input-content);--input-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:var(--uai-input-chips-width, 100%)}:host(.uai-input-chips--size-short){--input-height:var(--uai-control-height-short, 2rem)}:host(.uai-input-chips--danger){--input-border:var(--uai-feedback-error, #cf0022);--input-label:var(--uai-feedback-error, #cf0022);--input-message:var(--uai-feedback-error, #cf0022);--input-feedback:var(--uai-feedback-error, #cf0022)}:host(.uai-input-chips--success){--input-border:var(--uai-feedback-success, #3da329);--input-message:var(--uai-feedback-success, #3da329);--input-feedback:var(--uai-feedback-success, #3da329)}:host(.uai-input-chips--disabled){--input-background:var(--uai-surface-muted, #f2f3f3);--input-border:var(--uai-border-default, #e4e6e7);--input-content:var(--uai-content-disabled, #848e94);--input-label:var(--uai-content-disabled, #848e94);--input-message:var(--uai-content-disabled, #848e94);--input-feedback:var(--uai-content-disabled, #848e94)}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.input__label,.input__message{--uai-typo-color:currentColor}.input__label{color:var(--input-label)}.input__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--input-message)}.input__control{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);min-height:var(--input-height);padding:var(--uai-spacing-2xs, 0.25rem) var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--input-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--input-background);color:var(--input-content);cursor:text;-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.input__control{-webkit-transition:none;transition:none}}.input__control:focus-within{--input-border:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo)}@media (forced-colors: active){.input__control:focus-within{-webkit-box-shadow:none;box-shadow:none;outline:var(--uai-border-width-thick, 2px) solid CanvasText}}:host(:not(.uai-input-chips--disabled):not(.uai-input-chips--readonly):not(.uai-input-chips--danger):not(.uai-input-chips--success)) .input__control:hover:not(:focus-within){--input-border:var(--uai-content-secondary, #5f676d)}:host(.uai-input-chips--disabled) .input__control{cursor:not-allowed}.input__icon{-ms-flex:none;flex:none;color:var(--input-content)}.input__feedback{-ms-flex:none;flex:none;color:var(--input-feedback)}.input__field{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-2xs, 0.25rem);min-width:0}.input__native{-ms-flex:1 1 0px;flex:1 1 0;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:25%;margin:0;padding:0;border:0;outline:none;background:transparent;color:inherit;font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem);text-overflow:ellipsis;-webkit-appearance:none;-moz-appearance:none;appearance:none}.input__native::-webkit-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-moz-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:disabled{cursor:not-allowed;opacity:1;-webkit-text-fill-color:currentColor}.input__native:disabled::-webkit-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-moz-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled:-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::placeholder{color:var(--uai-content-disabled, #848e94)}.input__counter{--uai-typo-color:currentColor;-ms-flex:none;flex:none;color:var(--uai-content-secondary, #5f676d)}:host(.uai-input-chips--disabled) .input__counter{color:var(--uai-content-disabled, #848e94)}.chips{display:contents;margin:0;padding:0;list-style:none}.chip{display:-ms-inline-flexbox;display:inline-flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-2xs, 0.25rem);max-width:100%;padding:var(--uai-spacing-3xs, 0.125rem) var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid transparent;border-radius:var(--uai-radius-full, 624.9375rem);background:var(--uai-surface-muted, #f2f3f3);color:var(--uai-content-secondary, #5f676d);font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--uai-caption-font-size, 0.75rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-caption-line-height, 1.25rem)}.chip--static{border-color:var(--uai-border-input, #adb4b8)}.chip--invalid{border-color:var(--uai-feedback-error, #cf0022);color:var(--uai-feedback-error, #cf0022)}@media (forced-colors: active){.chip{border-color:CanvasText}}:host(.uai-input-chips--disabled) .chip{color:var(--uai-content-disabled, #848e94)}.chip__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.chip__remove{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:0;border:0;border-radius:var(--uai-radius-full, 624.9375rem);background:transparent;color:inherit;font:inherit;font-weight:var(--uai-font-weight-semibold, 600);cursor:pointer;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.chip__remove{-webkit-transition:none;transition:none}}.chip__remove:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.chip__remove:hover{background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}`;

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
const UaiInputChips = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiChange = index.createEvent(this, "uaiChange");
        this.uaiChangeChips = index.createEvent(this, "uaiChangeChips");
        this.uaiInputChipsFocus = index.createEvent(this, "uaiInputChipsFocus");
        this.uaiBlur = index.createEvent(this, "uaiBlur");
        this.uaiInputChipsInput = index.createEvent(this, "uaiInputChipsInput");
        this.uaiExtendedQuantityInput = index.createEvent(this, "uaiExtendedQuantityInput");
        this.uaiSubmit = index.createEvent(this, "uaiSubmit");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
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
            this.formControl = new uaiFormControl.UaiFormControl({
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
        return TEXTS.pt_BR;
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
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
        return this.type === 'email' && !!validations.emailValidation(chip.trim());
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
    renderChip(chip, index$1, removable) {
        const texts = this.texts;
        return (index.h("li", { key: `${index$1}-${chip}`, part: "chip", role: "listitem", class: { chip: true, 'chip--invalid': this.isInvalidChip(chip), 'chip--static': !removable } }, index.h("span", { class: "chip__label", title: chip }, chip), removable && (index.h("button", { type: "button", class: "chip__remove", part: "chip-remove", "aria-label": texts.remove(chip), "data-test": this.dtButtonClose, onClick: () => this.removeChip(index$1) }, index.h("span", { "aria-hidden": "true" }, "\u00D7")))));
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
        return (index.h(index.Host, { key: '3f461407d5a14404dc0e535adf7848f2d9b38ae5', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input-chips--size-${this.sizeValue}`]: true,
                'uai-input-chips--danger': invalid,
                'uai-input-chips--success': success,
                'uai-input-chips--disabled': disabled,
                'uai-input-chips--readonly': this.readonly && !disabled,
            } }, index.h("div", { key: '389da1fc210e465b483a9b65c9124bd431368901', class: "input" }, this.label && (index.h("label", { key: 'da590a375d8876f71167527920025162dc9abff4', class: "input__label", for: this.id }, index.h("uai-typo", { key: 'dc295aa729dd1b65b4ae02848e16b80fd0fe2d5a', variant: "caption", bold: "semibold", tag: "span", margin: false }, this.label))), index.h("div", { key: 'f9344cf8aa82bf4dba25ef2a61b577d8b41bdefe', class: "input__control", part: "input-container", onClick: this.onControlClick }, this.icon && index.h("uai-icon", { key: 'a0034f1e6abf0cc8c180bc7624a39dc017633c3a', class: "input__icon", name: this.icon, size: "medium" }), index.h("div", { key: 'c9dbdde340755e6887c92fb8bb2c40be815a7a28', class: "input__field" }, index.h("ul", { key: '1bd6c3072e8bcb21fbba4163bb94d780343c4a62', class: "chips", part: "chips", role: "list", "aria-label": this.label || this.ariaLabel || null }, this.internalChips.map((chip, index) => this.renderChip(chip, index, removable))), showInput && (index.h("input", { key: '71006974ad20535dd9d597ee3a1dbdc7f2ad1009', id: this.id, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: "text", value: this.value || '', placeholder: this.placeholder, maxLength: this.maxlength, readOnly: this.readonly, disabled: disabled, "aria-label": this.label ? null : this.ariaLabel, "aria-invalid": invalid ? 'true' : null, "aria-describedby": describedBy || null, "data-test": this.dataTest, onInput: this.onInput, onKeyDown: this.onKeyDown, onFocus: this.onFocus, onBlur: this.onBlur }))), this.counterLength && (index.h("uai-typo", { key: 'fdb028c47adfcd4f05598dd7d14a0732db6efbef', id: `${this.id}-counter`, class: "input__counter", variant: "caption", tag: "span", margin: false }, this.maxChipsLength
            ? `${this.internalChips.length}/${this.maxChipsLength}`
            : `${this.internalChips.length}`)), invalid && index.h("uai-icon", { key: '4a0c4529548c145a8e58067352073adb73e415b7', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && index.h("uai-icon", { key: 'c59f34b7468af8c00613d7f3b3200bf2b4e4a992', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), index.h("slot", { key: '88bf632a6be9c7aaae0e633621fb3a96629d5e18', name: "input-right" })), message && (index.h("div", { key: '40460b61eb8021fff285cc211123604864b4a528', id: `${this.id}-message`, class: "input__message", part: "input__message" }, index.h("uai-typo", { key: 'd4f9343340c81c452871d99a7d43ea8053698cbe', variant: "caption", tag: "span", margin: false }, message))))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "chips": [{
                "chipsChanged": 0
            }],
        "internalChips": [{
                "internalChipsChanged": 0
            }],
        "name": [{
                "nameChanged": 0
            }],
        "inputName": [{
                "nameChanged": 0
            }],
        "height": [{
                "legacyPropChanged": 0
            }],
        "maxHeight": [{
                "legacyPropChanged": 0
            }],
        "disableSubmit": [{
                "legacyPropChanged": 0
            }]
    }; }
};
UaiInputChips.style = uaiInputChipsCss();

exports.uai_input_chips = UaiInputChips;
