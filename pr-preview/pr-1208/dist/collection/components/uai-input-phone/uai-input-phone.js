import { Build, Host, h, } from "@stencil/core";
import { warnDeprecated, warnLegacyValue, warnOnce } from "../../utils/deprecation";
import { flagUrl } from "./uai-input-phone-flags";
import { UaiFormControl } from "../../utils/uai-form-control";
import { UaiOverlay } from "../../utils/uai-overlay";
import * as countriesPtBR from "../input-phone-number/countries-pt_BR.json";
import * as countriesEnUS from "../input-phone-number/countries-en_US.json";
import * as countriesEsES from "../input-phone-number/countries-es_ES.json";
const TAG = 'uai-input-phone';
const SIZES = ['short', 'medium'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
const COUNTRIES = {
    pt_BR: countriesPtBR['default'],
    en_US: countriesEnUS['default'],
    es_ES: countriesEsES['default'],
};
const TEXTS = {
    pt_BR: {
        label: 'Telefone',
        country: 'Código do país',
        list: 'Países',
        required: 'Informe o telefone.',
        number: 'Use apenas números, espaços e os caracteres + - ( ) .',
    },
    en_US: {
        label: 'Phone number',
        country: 'Country code',
        list: 'Countries',
        required: 'Enter the phone number.',
        number: 'Use only numbers, spaces and the characters + - ( ) .',
    },
    es_ES: {
        label: 'Teléfono',
        country: 'Código del país',
        list: 'Países',
        required: 'Ingrese el teléfono.',
        number: 'Use solo números, espacios y los caracteres + - ( ) .',
    },
};
const PHONE_CHARACTERS = /^[0-9+\-(). ]*$/;
const normalize = (text) => text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
let instances = 0;
/**
 * Phone number field with a country code selector. Use it to ask for a phone number when the country matters:
 * the person picks the country (flag and dial code) and types the number freely, without mask or automatic
 * formatting. It takes part in native forms: give it a name to submit "<code> <number>" (for example
 * "+55 11 99999-0000"). Pair with UaiButton in forms. Avoid it for numbers without a country, or to infer the
 * country from the number. Wrap the app in UaiThemeProvider.
 *
 * @slot input-right - Content after the number (for example a clear button). Give actions an accessible name.
 * @part input-container - The field box with border, icon, country selector and the native input.
 * @part input - The native tel input.
 * @part input__message - The helper, error or success message below the field.
 * @part country-button - The country selector button (flag, dial code and arrow).
 * @part country-list - The floating list of countries.
 * @part country-option - Each country in the list.
 */
export class UaiInputPhone {
    constructor() {
        this.isOpen = false;
        this.activeIndex = -1;
        this.validationDanger = false;
        this.disabledByForm = false;
        this.defaults = { text: '', code: '+55', country: '', isoCode: '' };
        this.id = `uai-input-phone-${++instances}`;
        /**
         * Name of the value in the submitted form data. Same as name.
         */
        this.inputName = '';
        /**
         * Phone number typed by the person, without the country code. Free text: no mask or formatting is applied.
         */
        this.text = '';
        /**
         * Dial code of the selected country, for example "+55" (default) or "+1". Use changeCountry to pick a country that
         * shares its code with others.
         */
        this.value = '+55';
        /**
         * Language of the country names and default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'.
         */
        this.language = 'pt_BR';
        /**
         * Height of the field. Can be one of: 'short', 'medium' (default).
         */
        this.size = 'medium';
        /**
         * Example of the expected number, shown while the field is empty, for example "11 99999-0000". Do not use it as
         * the label.
         */
        this.placeholder = '';
        /**
         * UaiIcon name shown before the country selector.
         */
        this.icon = '';
        /**
         * If true, the number can be selected and copied but not edited, and the country cannot be changed.
         */
        this.readonly = false;
        /**
         * If true, the field and the country selector cannot be used and the value is left out of the form data.
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
         * Message below the field that helps to fill it, for example the expected format.
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
         * Accessible name of the field when the visible label is not enough.
         */
        this.ariaLabel = null;
        /**
         * Data test id, set on the native input.
         */
        this.dataTest = null;
        /**
         * Data test id, set on the country selector button.
         */
        this.dtSelectFlag = null;
        this.onOverlayClose = (reason) => {
            if (this.isOpen)
                this.isOpen = false;
            if (reason === 'escape' || reason === 'outside')
                this.uaiCancel.emit();
        };
        this.onButtonClick = () => {
            if (this.isOpen)
                this.closeList();
            else
                this.openList();
        };
        this.onButtonKeyDown = (event) => {
            if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault();
                this.openList();
            }
        };
        this.onListKeyDown = (event) => {
            var _a, _b;
            const keys = {
                ArrowDown: () => this.moveActive(this.activeIndex + 1),
                ArrowUp: () => this.moveActive(this.activeIndex - 1),
                Home: () => this.moveActive(0),
                End: () => this.moveActive(this.countryKeys.length - 1),
                Enter: () => this.select(this.activeIndex),
                ' ': () => this.select(this.activeIndex),
            };
            if (keys[event.key]) {
                event.preventDefault();
                keys[event.key]();
            }
            else if (event.key === 'Tab') {
                event.preventDefault();
                this.closeList();
                if (event.shiftKey)
                    (_a = this.button) === null || _a === void 0 ? void 0 : _a.focus();
                else
                    (_b = this.nativeInput) === null || _b === void 0 ? void 0 : _b.focus();
            }
            else if (event.key.length === 1 && /\p{L}/u.test(event.key)) {
                event.preventDefault();
                this.typeAhead(event.key);
            }
        };
        this.onInput = (event) => {
            this.text = event.target.value;
            this.uaiInput.emit(event);
        };
        this.onFocus = () => {
            this.uaiFocus.emit();
        };
        this.onBlur = () => {
            this.showValidation(true);
            this.uaiBlur.emit();
        };
        this.onKeyDown = (event) => {
            var _a, _b;
            if (event.key === 'Enter' && !event.isComposing)
                (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.requestSubmit();
        };
        // Clicks on the field box (outside the selector and slotted content) focus the number, as a native field does.
        this.onControlClick = (event) => {
            var _a;
            const path = event.composedPath();
            if (this.button && path.includes(this.button))
                return;
            if (!this.el.contains(event.target))
                (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
        };
    }
    /**
     * Selects a country. code is the dial code ("+1"), isoCode the ISO text ("US / USA") and flag the country key
     * ("united-states-flag").
     */
    async changeCountry(code, isoCode, flag) {
        this.selectedCountry = flag;
        this.isoCode = isoCode;
        this.value = code;
        this.emitChange();
    }
    /**
     * Removes the focus from the field.
     */
    async removeFocus() {
        var _a;
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.blur();
    }
    /**
     * Moves the focus to the number.
     */
    async setFocus() {
        var _a;
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /**
     * Returns true when the number meets required and has only digits, spaces and + - ( ) .
     */
    async isValid() {
        return !this.validityFlags().invalid;
    }
    /**
     * Clears the number. The country stays selected.
     */
    async clear() {
        this.text = '';
    }
    inputNameChanged() {
        if (!this.name && this.inputName)
            this.name = this.inputName;
    }
    textChanged() {
        this.syncFormValue();
        this.emitChange();
    }
    codeChanged() {
        this.resolveCountry();
        this.syncFormValue();
    }
    languageChanged() {
        this.resolveCountry();
    }
    optionsChanged() {
        warnDeprecated(TAG, 'options');
    }
    onInvalid() {
        this.showValidation(true);
    }
    componentWillLoad() {
        var _a;
        this.inputNameChanged();
        this.resolveCountry();
        this.defaults = {
            text: this.text || '',
            code: this.value,
            country: this.selectedCountry,
            isoCode: this.isoCode,
        };
        // Real browsers only: the Stencil mock DOM attaches internals without the form API.
        if (typeof ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === 'function') {
            this.formControl = new UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.formValue(this.defaults.code, this.defaults.text),
                onReset: () => {
                    this.validationDanger = false;
                    this.selectedCountry = this.defaults.country;
                    this.isoCode = this.defaults.isoCode;
                    this.value = this.defaults.code;
                    this.text = this.defaults.text;
                },
                onDisabledChange: (disabled) => {
                    queueMicrotask(() => {
                        var _a, _b;
                        const formDisabled = (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : disabled;
                        if (!this.disabled && this.disabledByForm !== formDisabled)
                            this.disabledByForm = formDisabled;
                        if (formDisabled)
                            this.closeList();
                    });
                },
            });
        }
        this.warnLegacyUsage();
    }
    componentDidLoad() {
        if (this.button && this.list) {
            this.overlay = new UaiOverlay({
                trigger: this.button,
                panel: this.list,
                matchTriggerWidth: false,
                onClose: this.onOverlayClose,
            });
        }
    }
    componentDidRender() {
        var _a, _b, _c, _d;
        if (this.nativeInput && this.nativeInput.value !== (this.text || '')) {
            this.nativeInput.value = this.text || '';
        }
        if (this.isOpen && this.overlay && !this.overlay.isOpen) {
            this.overlay.open();
            (_a = this.list) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
        }
        if (this.isOpen) {
            (_b = this.overlay) === null || _b === void 0 ? void 0 : _b.update();
            (_d = (_c = this.activeOption()) === null || _c === void 0 ? void 0 : _c.scrollIntoView) === null || _d === void 0 ? void 0 : _d.call(_c, { block: 'nearest' });
        }
        this.syncValidity();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.destroy();
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
        if (typeof state !== 'string')
            return;
        const [code, ...number] = state.split(' ');
        if (code)
            this.value = code;
        this.text = number.join(' ');
    }
    get languageValue() {
        if (LANGUAGES.includes(this.language))
            return this.language;
        warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
        return 'pt_BR';
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
        warnLegacyValue(TAG, 'size', this.size, 'medium');
        return 'medium';
    }
    get countries() {
        return COUNTRIES[this.languageValue];
    }
    get countryKeys() {
        return Object.keys(this.countries);
    }
    get texts() {
        return TEXTS[this.languageValue];
    }
    get isDisabled() {
        return this.disabled || this.disabledByForm;
    }
    get canPick() {
        return !this.isDisabled && !this.readonly;
    }
    // Keeps the selected country when it still has the current code; otherwise picks the first country with it.
    resolveCountry() {
        const countries = this.countries;
        const current = this.selectedCountry && countries[this.selectedCountry];
        if (current && current.code === this.value) {
            this.isoCode = current.isoCode;
            return;
        }
        const key = this.countryKeys.find((name) => countries[name].code === this.value) || this.countryKeys[0];
        this.selectedCountry = key;
        this.isoCode = countries[key].isoCode;
    }
    formValue(code, text) {
        return text ? `${code || ''} ${text}`.trim() : null;
    }
    syncFormValue() {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(this.formValue(this.value, this.text || ''));
    }
    emitChange() {
        this.uaiPhoneNumberChange.emit({
            value: this.text,
            code: this.value,
            isoCode: this.isoCode,
            country: this.selectedCountry,
        });
    }
    warnLegacyUsage() {
        if (this.options !== undefined && this.options !== null)
            warnDeprecated(TAG, 'options');
        if (Build.isDev && this.label === '' && !this.ariaLabel) {
            warnOnce(TAG, 'accessible-name', 'Fields without a visible label require an aria-label.');
        }
    }
    validityFlags() {
        const text = this.text || '';
        if (this.required && !text) {
            return {
                invalid: true,
                flags: { valueMissing: true },
                message: this.requiredErrorMessage || this.texts.required,
            };
        }
        if (!PHONE_CHARACTERS.test(text)) {
            return { invalid: true, flags: { patternMismatch: true }, message: this.numberErrorMessage || this.texts.number };
        }
        return { invalid: false, flags: {}, message: '' };
    }
    syncValidity() {
        var _a;
        const { flags, message } = this.validityFlags();
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValidity(flags, message, this.nativeInput);
    }
    // Shows the validation result from now on; the message follows the value while it stays shown.
    showValidation(show) {
        const danger = show && this.validityFlags().invalid;
        if (danger !== this.validationDanger)
            this.validationDanger = danger;
    }
    activeOption() {
        var _a;
        return ((_a = this.list) === null || _a === void 0 ? void 0 : _a.querySelector('.option--active')) || null;
    }
    openList() {
        if (!this.canPick || this.isOpen)
            return;
        const selected = this.countryKeys.indexOf(this.selectedCountry);
        this.activeIndex = selected < 0 ? 0 : selected;
        this.isOpen = true;
    }
    closeList(reason = 'api') {
        var _a;
        if (!this.isOpen)
            return;
        this.isOpen = false;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.close(reason);
    }
    select(index) {
        var _a;
        const key = this.countryKeys[index];
        if (!key)
            return;
        const country = this.countries[key];
        this.closeList();
        (_a = this.button) === null || _a === void 0 ? void 0 : _a.focus();
        if (key === this.selectedCountry)
            return;
        this.changeCountry(country.code, country.isoCode, key);
    }
    moveActive(index) {
        const last = this.countryKeys.length - 1;
        this.activeIndex = Math.min(Math.max(index, 0), last);
    }
    // Activates the next country whose name starts with the typed letter, cycling from the active one.
    typeAhead(letter) {
        const keys = this.countryKeys;
        const target = normalize(letter);
        for (let step = 1; step <= keys.length; step++) {
            const index = (this.activeIndex + step) % keys.length;
            if (normalize(this.countries[keys[index]].name).startsWith(target)) {
                this.activeIndex = index;
                return;
            }
        }
    }
    renderFlag(key, className) {
        const url = key ? flagUrl(key) : null;
        return url ? h("img", { class: className, src: url, alt: "", draggable: false }) : null;
    }
    renderOptions() {
        if (!this.isOpen)
            return null;
        return this.countryKeys.map((key, index) => {
            const country = this.countries[key];
            return (h("li", { id: `${this.id}-option-${index}`, key: key, role: "option", part: "country-option", "data-country": key, "aria-selected": key === this.selectedCountry ? 'true' : 'false', class: { option: true, 'option--active': index === this.activeIndex }, onClick: () => this.select(index), onPointerMove: () => {
                    if (this.activeIndex !== index)
                        this.activeIndex = index;
                } }, h("span", { class: "option__flag" }, this.renderFlag(key, 'option__flag-image')), h("uai-typo", { class: "option__name", variant: "body-base", tag: "span", margin: false }, country.name), h("uai-typo", { class: "option__code", variant: "body-base", tag: "span", margin: false }, country.code)));
        });
    }
    render() {
        var _a;
        const disabled = this.isDisabled;
        const validity = this.validityFlags();
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
        const label = (_a = this.label) !== null && _a !== void 0 ? _a : this.texts.label;
        const country = this.countries[this.selectedCountry];
        const countryName = country ? `${country.name} ${this.value}` : this.value;
        return (h(Host, { key: '236edfb621f7267d76cb7202588d37da54b2ce9b', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input-phone--size-${this.sizeValue}`]: true,
                'uai-input-phone--danger': invalid,
                'uai-input-phone--success': success,
                'uai-input-phone--disabled': disabled,
                'uai-input-phone--readonly': this.readonly && !disabled,
                'uai-input-phone--open': this.isOpen,
            } }, h("div", { key: '31841c02f06c0d5d8e655616b6343c3e6b6289f5', class: "input" }, label && (h("label", { key: '5d7c2e8b3aa1607d37fc8cfbf7005f15758cad07', class: "input__label", for: this.id }, h("uai-typo", { key: 'e7cd6e283e6a77a03c28cddd8f181b837272d3a2', variant: "caption", bold: "semibold", tag: "span", margin: false }, label))), h("div", { key: 'bd8fa63832d97f3b8a82d8e89c8824e53074c123', class: "input__control", part: "input-container", onClick: this.onControlClick }, this.icon && h("uai-icon", { key: 'd35aad2ea45b854074337f3598514c5339c006a4', class: "input__icon", name: this.icon, size: "medium" }), h("button", { key: 'fd5fa6b753b89fcfcd3a18bbe67c8897c965d63a', type: "button", ref: (button) => (this.button = button), class: "prefix", part: "country-button", "aria-haspopup": "listbox", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-controls": `${this.id}-list`, "aria-label": `${this.texts.country}: ${countryName}`, disabled: !this.canPick, "data-test": this.dtSelectFlag, onClick: this.onButtonClick, onKeyDown: this.onButtonKeyDown }, this.renderFlag(this.selectedCountry, 'prefix__flag'), h("uai-typo", { key: '082b8d8a13c6cd3da38a2a60413bbcf0613d5acc', class: "prefix__code", variant: "body-base", tag: "span", margin: false }, this.value), !this.readonly && h("uai-icon", { key: 'e79979866c66ba4283a67fbfdb649137ab8a0f4f', class: "prefix__arrow", name: "arrow-down", size: "medium" })), h("div", { key: '24ff3774db1e91ab59dd1050a253fb1a47d08821', class: "input__field" }, h("input", { key: 'fa89020c2cf15745dc0bb59ff90415840d9c0015', id: this.id, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: "tel", inputMode: "tel", autocomplete: "tel-national", value: this.text || '', placeholder: this.placeholder, required: this.required, readOnly: this.readonly, disabled: disabled, maxLength: this.value === '+55' ? 25 : undefined, "aria-label": this.ariaLabel || null, "aria-invalid": invalid ? 'true' : null, "aria-describedby": message ? `${this.id}-message` : null, "data-test": this.dataTest, onInput: this.onInput, onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.onKeyDown })), invalid && h("uai-icon", { key: 'e86418ef8cd3fd0b5bbde48744a1c0ba72b5e267', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && h("uai-icon", { key: 'a530bf57c2e0b915f755cf8764e8d2b90d4bb573', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), h("slot", { key: '8bc6b5f4d14de8de6043542887ff0eeb5528eb65', name: "input-right" })), message && (h("div", { key: '5d1c10c100a848cbe8b1f3130cafb3dfa6a85ec2', id: `${this.id}-message`, class: "input__message", part: "input__message" }, h("uai-typo", { key: '331969a9a75fc5ac3f18f6d3c6477aedfeabce70', variant: "caption", tag: "span", margin: false }, message)))), h("ul", { key: '7f140d149eb46a3ab0d049bc9122361be8bb10b5', id: `${this.id}-list`, ref: (list) => (this.list = list), class: "list", part: "country-list", role: "listbox", tabindex: "-1", "aria-label": this.texts.list, "aria-activedescendant": this.isOpen && this.activeIndex >= 0 ? `${this.id}-option-${this.activeIndex}` : null, onKeyDown: this.onListKeyDown }, this.renderOptions())));
    }
    static get is() { return "uai-input-phone"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-input-phone.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-input-phone.css"]
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
                    "text": "Name of the value in the submitted form data, which is \"<code> <number>\". Without name (or inputName), the field\nis not submitted."
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
                    "text": "Name of the value in the submitted form data. Same as name."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "input-name",
                "defaultValue": "''"
            },
            "text": {
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
                    "text": "Phone number typed by the person, without the country code. Free text: no mask or formatting is applied."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "text",
                "defaultValue": "''"
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
                    "text": "Dial code of the selected country, for example \"+55\" (default) or \"+1\". Use changeCountry to pick a country that\nshares its code with others."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "'+55'"
            },
            "language": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "UaiInputPhoneLanguage",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "UaiInputPhoneLanguage": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input-phone/uai-input-phone.tsx",
                            "id": "src/components/uai-input-phone/uai-input-phone.tsx::UaiInputPhoneLanguage"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Language of the country names and default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'pt_BR'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiInputPhoneSize",
                    "resolved": "\"medium\" | \"short\"",
                    "references": {
                        "UaiInputPhoneSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input-phone/uai-input-phone.tsx",
                            "id": "src/components/uai-input-phone/uai-input-phone.tsx::UaiInputPhoneSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Height of the field. Can be one of: 'short', 'medium' (default)."
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
                    "text": "Label shown above the field. Without it, the default text of the language is shown (\"Telefone\")."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
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
                    "text": "Example of the expected number, shown while the field is empty, for example \"11 99999-0000\". Do not use it as\nthe label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
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
                    "text": "UaiIcon name shown before the country selector."
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
                    "text": "If true, an empty number blocks the form submission."
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
                    "text": "If true, the number can be selected and copied but not edited, and the country cannot be changed."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "readonly",
                "defaultValue": "false"
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
                    "text": "If true, the field and the country selector cannot be used and the value is left out of the form data."
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
                    "text": "Message below the field that helps to fill it, for example the expected format."
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
                    "text": "Message shown when a required field is empty. Without it, the default text of the language is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required-error-message"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Message shown when the number has characters other than digits, spaces and + - ( ) . Without it, the default\ntext of the language is shown."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "number-error-message"
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
                    "text": "Accessible name of the field when the visible label is not enough."
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
            "dtSelectFlag": {
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
                    "text": "Data test id, set on the country selector button."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-select-flag",
                "defaultValue": "null"
            },
            "options": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Array<unknown>",
                    "resolved": "unknown[]",
                    "references": {
                        "Array": {
                            "location": "global",
                            "id": "global::Array"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "The country list comes from the language. Has no effect."
                        }],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "activeIndex": {},
            "selectedCountry": {},
            "isoCode": {},
            "validationDanger": {},
            "disabledByForm": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiPhoneNumberChange",
                "name": "uaiPhoneNumberChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the number or the country changes. detail: { value (number), code, isoCode, country (flag key) }."
                },
                "complexType": {
                    "original": "UaiPhoneNumberChange",
                    "resolved": "UaiPhoneNumberChange",
                    "references": {
                        "UaiPhoneNumberChange": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-input-phone/uai-input-phone.tsx",
                            "id": "src/components/uai-input-phone/uai-input-phone.tsx::UaiPhoneNumberChange"
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
                    "text": "Emitted on every keystroke in the number with the native InputEvent."
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
                    "text": "Emitted when the country list closes without a new choice (Escape or click outside)."
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
                    "text": "Emitted when the number receives focus."
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
                    "text": "Emitted when the number loses focus."
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
            "changeCountry": {
                "complexType": {
                    "signature": "(code: string, isoCode: string, flag: string) => Promise<void>",
                    "parameters": [{
                            "name": "code",
                            "type": "string",
                            "docs": ""
                        }, {
                            "name": "isoCode",
                            "type": "string",
                            "docs": ""
                        }, {
                            "name": "flag",
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
                    "text": "Selects a country. code is the dial code (\"+1\"), isoCode the ISO text (\"US / USA\") and flag the country key\n(\"united-states-flag\").",
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
                    "text": "Removes the focus from the field.",
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
                    "text": "Moves the focus to the number.",
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
                    "text": "Returns true when the number meets required and has only digits, spaces and + - ( ) .",
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
                    "text": "Clears the number. The country stays selected.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "inputName",
                "methodName": "inputNameChanged"
            }, {
                "propName": "text",
                "methodName": "textChanged"
            }, {
                "propName": "value",
                "methodName": "codeChanged"
            }, {
                "propName": "language",
                "methodName": "languageChanged"
            }, {
                "propName": "options",
                "methodName": "optionsChanged"
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
