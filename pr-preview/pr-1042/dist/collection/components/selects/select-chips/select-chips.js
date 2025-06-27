import { h } from "@stencil/core";
import { getScrollParent, positionAbsoluteElement } from "../../../utils/position-element";
import { emailValidation, whitespaceValidation } from "../../../utils/validations";
export class SelectChips {
    constructor() {
        this.isOpen = false;
        this.intoView = null;
        this.selectedOptions = [];
        /**
         * Used to set the danger behavior by the internal validators
         */
        this.validationDanger = false;
        /**
         * Conditions the element to say whether it is pressed or not, to add styles.
         */
        this.isPressed = false;
        /**
         * Used to set the error message setted by the internal validators
         */
        this.validationMesage = '';
        this.internalChips = [];
        /**
         * The chips on the component
         * Should be passed this way:
         * chips='["chip1", "chip2"]'
         */
        this.chips = [];
        /**
         * Used for add prefix on new option select.
         */
        this.newPrefix = '';
        /**
         * the value of the select.
         */
        this.value = '';
        /**
         * Add state danger on input, use for use feedback.
         */
        this.danger = false;
        /**
         * Add state success on input, use for use feedback.
         */
        this.success = false;
        /**
         * Indicated to pass an feedback to user.
         */
        this.errorMessage = '';
        /**
         * Disabled input.
         */
        this.disabled = false;
        /**
         *  label in input, with he the input size increases.
         */
        this.label = '';
        /**
         * used for add icon in input left. Uses the bds-icon component.
         */
        this.icon = '';
        /**
         * Do not accept duplicate chip elements.
         */
        this.duplicated = false;
        /**
         *  Specify if is possible to create a new tag that is not on the options.
         */
        this.canAddNew = true;
        /**
         *  Specify if is possible to create a new tag that is not on the options.
         */
        this.notFoundMessage = 'No results found';
        /**
         * Defining the type is important so that it is possible to carry out validations. Can be one of:
         * 'text' and 'email;
         */
        this.type = 'text';
        /**
         * The delimiter is used to add multiple chips in the same string.
         */
        this.delimiters = /,|;/;
        /**
         * If `true`, the user cannot modify the value.
         */
        this.disableSubmit = false;
        /**
         * Indicated to pass a help the user in complex filling.
         */
        this.helperMessage = '';
        /**
         * Indicated to pass an feeback to user.
         */
        this.successMessage = '';
        /**
         * Prop to insert the name of the input
         */
        this.inputName = '';
        /**
         * A tip for the user who can enter no controls.
         */
        this.placeholder = '';
        /**
         * Set the placement of the options menu. Can be 'bottom' or 'top'.
         */
        this.optionsPosition = 'auto';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.handleChangeChipsValue = async () => {
            await this.resetFilterOptions();
        };
        this.refDropdown = (el) => {
            this.dropElement = el;
        };
        this.refIconDrop = (el) => {
            this.iconDropElement = el;
        };
        this.toggle = () => {
            if (!this.disabled) {
                this.isOpen = !this.isOpen;
            }
        };
        this.handler = async (event) => {
            const { detail: { value }, } = event;
            this.selectedOption = value;
            const text = this.getText(value);
            await this.addChip(text);
            this.bdsChangeChips.emit({ data: this.internalChips, value: this.selectedOption });
            this.bdsChange.emit({ data: this.selectedOptions });
            this.toggle();
        };
        this.handlerNewOption = async (text) => {
            await this.addChip(text);
            this.toggle();
        };
        this.getText = (value) => {
            const el = this.childOptions.find((option) => option.value === value);
            return this.getTextFromOption(el);
        };
        this.getTextFromOption = (opt) => {
            var _a, _b;
            if (this.internalOptions) {
                const internalOption = this.internalOptions.find((option) => option.value == (opt === null || opt === void 0 ? void 0 : opt.value));
                if (internalOption) {
                    return internalOption.label;
                }
            }
            return (opt === null || opt === void 0 ? void 0 : opt.titleText) ? opt.titleText : ((_b = (_a = opt === null || opt === void 0 ? void 0 : opt.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '');
        };
        this.setFocusWrapper = () => {
            if (this.nativeInput) {
                this.nativeInput.focus();
            }
        };
        this.removeFocusWrapper = () => {
            this.nativeInput.blur();
        };
        this.onClickWrapper = () => {
            this.onFocus();
            if (this.nativeInput) {
                this.nativeInput.focus();
            }
        };
        this.onFocus = () => {
            this.bdsFocus.emit();
            this.isPressed = true;
        };
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value || '';
            }
            this.bdsSelectChipsInput.emit(ev);
            this.changedInputValue();
        };
        this.keyPressWrapper = (event) => {
            switch (event.key) {
                case 'Enter':
                    if (this.canAddNew !== false) {
                        this.handleDelimiters();
                        this.setChip(this.value);
                        this.value = '';
                        this.bdsChangeChips.emit({ data: this.internalChips, value: this.selectedOption });
                        this.bdsChange.emit({ data: this.selectedOptions });
                    }
                    if (!this.disabled) {
                        this.isOpen = true;
                    }
                    break;
                case 'ArrowDown':
                    if (!this.disabled) {
                        this.isOpen = true;
                    }
                    break;
                case 'ArrowUp':
                    if (!this.disabled) {
                        this.isOpen = false;
                    }
                    break;
                case 'Backspace':
                case 'Delete':
                    if ((this.value === null || this.value.length <= 0) && this.internalChips.length) {
                        this.removeLastChip();
                        this.handleChangeChipsValue;
                        this.bdsChangeChips.emit({ data: this.internalChips, value: this.selectedOption });
                        this.bdsChange.emit({ data: this.selectedOptions });
                    }
                    break;
            }
        };
        this.changedInputValue = async () => {
            this.value = this.nativeInput.value;
            if (this.nativeInput.value) {
                await this.filterOptions(this.nativeInput.value);
            }
            else {
                await this.resetFilterOptions();
            }
            if (this.value && this.isOpen === false) {
                this.isOpen = true;
            }
        };
    }
    isOpenChanged(isOpen) {
        if (this.positionHeightDrop == 'bottom') {
            this.iconDropElement.name = this.isOpen ? 'arrow-up' : 'arrow-down';
        }
        else {
            this.iconDropElement.name = this.isOpen ? 'arrow-down' : 'arrow-up';
        }
        if (isOpen)
            if (this.optionsPosition != 'auto') {
                this.setDefaultPlacement(this.optionsPosition);
            }
            else {
                this.validatePositionDrop();
            }
    }
    handleWindow(ev) {
        if (!this.el.contains(ev.target)) {
            this.isOpen = false;
        }
    }
    optionsChanged() {
        if (typeof this.options === 'string') {
            try {
                this.internalOptions = JSON.parse(this.options);
            }
            catch (e) { }
        }
        else {
            this.internalOptions = this.options;
        }
    }
    /**
     * Call change event before alter chips values.
     */
    valueChanged() {
        if (this.chips) {
            if (typeof this.chips === 'string') {
                try {
                    this.internalChips = JSON.parse(this.chips);
                }
                catch (_a) {
                    this.internalChips = [];
                }
            }
            else {
                this.internalChips = this.chips;
            }
        }
        else {
            this.internalChips = [];
        }
    }
    internalValueChanged() {
        this.handleChangeChipsValue();
        if (this.internalChips.length > 0) {
            this.selectedOptions = this.internalChips.map((item) => {
                return {
                    label: item,
                    value: `${this.validValueChip(item, this.childOptions)}`,
                };
            });
        }
    }
    validValueChip(value, internalOptions) {
        const selectOption = internalOptions === null || internalOptions === void 0 ? void 0 : internalOptions.find((option) => option.textContent == value);
        return `${selectOption ? selectOption.value : value}`;
    }
    /**
     * Return the validity of the input chips.
     */
    async isValid() {
        return this.validateChips();
    }
    /**
     * Return the chips
     */
    async getChips() {
        return this.internalChips;
    }
    /**
     * Clear all chips
     */
    async clear() {
        this.internalChips = [];
        this.value = '';
    }
    async add(value) {
        this.handleDelimiters();
        if (value) {
            this.setChip(value);
        }
        else {
            this.setChip(this.value);
        }
        this.value = '';
    }
    async setFocus() {
        this.nativeInput.focus();
    }
    async removeFocus() {
        this.nativeInput.blur();
    }
    componentWillLoad() {
        this.valueChanged();
        this.optionsChanged();
        this.intoView = getScrollParent(this.el);
    }
    async componentDidLoad() {
        await this.resetFilterOptions();
        if (this.optionsPosition != 'auto') {
            this.setDefaultPlacement(this.optionsPosition);
        }
        else {
            this.validatePositionDrop();
        }
    }
    setDefaultPlacement(value) {
        if (value == 'bottom') {
            this.dropElement.classList.add('select__options--position-bottom');
            this.iconDropElement.name = 'arrow-down';
        }
        else {
            this.dropElement.classList.add('select__options--position-top');
            this.iconDropElement.name = 'arrow-up';
        }
    }
    validatePositionDrop() {
        const positionValue = positionAbsoluteElement({
            actionElement: this.el,
            changedElement: this.dropElement,
            intoView: this.intoView,
        });
        this.positionHeightDrop = positionValue.y;
        if (positionValue.y == 'bottom') {
            this.dropElement.classList.add('select__options--position-bottom');
            this.iconDropElement.name = 'arrow-down';
        }
        else {
            this.dropElement.classList.add('select__options--position-top');
            this.iconDropElement.name = 'arrow-up';
        }
    }
    async connectedCallback() {
        for (const option of this.childOptions) {
            option.addEventListener('optionSelected', this.handler);
        }
    }
    get childOptionsEnabled() {
        return this.options
            ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option:not([invisible]):not(#option-add):not(#no-option)'))
            : Array.from(this.el.querySelectorAll('bds-select-option:not([invisible]):not(#option-add):not(#no-option)'));
    }
    get childOptions() {
        return this.options
            ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option:not(#option-add):not(#no-option)'))
            : Array.from(this.el.querySelectorAll('bds-select-option:not(#option-add):not(#no-option)'));
    }
    async filterOptions(term) {
        if (!term) {
            await this.resetFilterOptions();
            return;
        }
        for (const option of this.childOptions) {
            const isExistsChip = this.existsChip(option.textContent, await this.getChips());
            const optionTextLower = option.textContent.toLowerCase();
            const termLower = term.toLowerCase();
            if (isExistsChip) {
                option.setAttribute('invisible', 'invisible');
            }
            if (term && optionTextLower.includes(termLower) && !isExistsChip) {
                option.removeAttribute('invisible');
            }
            if (term && !optionTextLower.includes(termLower) && !isExistsChip) {
                option.setAttribute('invisible', 'invisible');
            }
        }
    }
    async resetFilterOptions() {
        for (const option of this.childOptions) {
            if (this.existsChip(option.textContent, await this.getChips())) {
                option.setAttribute('invisible', 'invisible');
            }
            else {
                option.removeAttribute('invisible');
            }
        }
    }
    existsChip(optionChip, chips) {
        return chips.some((chip) => optionChip === chip);
    }
    enableCreateOption() {
        return !!(this.childOptionsEnabled.length === 0 && this.nativeInput && this.nativeInput.value);
    }
    async addChip(chip) {
        await this.setChip(chip);
        this.nativeInput.value = '';
    }
    validateChips() {
        if (this.type === 'email') {
            return !this.internalChips.some((chip) => !this.validateChip(chip));
        }
        else {
            return true;
        }
    }
    handleOnBlur() {
        this.bdsBlur.emit();
        this.isPressed = false;
    }
    verifyAndSubstituteDelimiters(value) {
        if (value.length === 1 && value[0].match(this.delimiters)) {
            return '';
        }
        let newValue = value.replace(/;/g, ',').replace(/\,+|;+/g, ',');
        if (newValue[0].match(this.delimiters)) {
            newValue = newValue.substring(1);
        }
        return newValue;
    }
    handleDelimiters() {
        const value = this.nativeInput.value;
        this.value = value ? value.trim() : '';
        if (value.length === 0)
            return;
        const existTerm = value.match(this.delimiters);
        if (!existTerm)
            return;
        const newValue = this.verifyAndSubstituteDelimiters(value);
        if (!newValue) {
            this.clearInputValues();
            return;
        }
        const words = newValue.split(this.delimiters);
        words.forEach((word) => {
            this.setChip(word.trimStart());
        });
        this.clearInputValues();
    }
    async handleChange(event) {
        this.changedInputValue;
        const { detail: { value }, } = event;
        this.value = value ? value.trim() : '';
        if (value.length === 0)
            return;
        const existTerm = value.match(this.delimiters);
        if (!existTerm)
            return;
        const newValue = this.verifyAndSubstituteDelimiters(value);
        if (!newValue) {
            this.clearInputValues();
            return;
        }
        const words = newValue.split(this.delimiters);
        words.forEach((word) => {
            this.setChip(word);
        });
        this.clearInputValues();
    }
    clearInputValues(value = '') {
        this.nativeInput.value = value;
        this.value = value;
    }
    setChip(name) {
        if (!this.duplicated) {
            const exists = this.internalChips.some((chip) => chip.toLowerCase() === name.toLowerCase());
            if (exists)
                return;
        }
        if (!whitespaceValidation(name)) {
            return;
        }
        this.internalChips = [...this.internalChips, name];
    }
    validateChip(name) {
        const trimmedName = name.trim();
        if (this.type === 'email' && emailValidation(trimmedName)) {
            return false;
        }
        return true;
    }
    removeLastChip() {
        this.internalChips = this.internalChips.slice(0, this.internalChips.length - 1);
    }
    removeChip(event) {
        const { detail: { id }, } = event;
        this.internalChips = this.internalChips.filter((_chip, index) => index.toString() !== id);
        this.bdsChangeChips.emit({ data: this.internalChips, value: this.selectedOption });
        this.bdsChange.emit({ data: this.selectedOptions });
    }
    renderChips() {
        if (!this.internalChips.length) {
            return [];
        }
        return this.internalChips.map((chip, index) => {
            const id = index.toString();
            const limit = 30;
            if (chip.length <= limit) {
                return (h("bds-chip-clickable", { id: id, key: id, color: "outline", close: !this.disabled, onChipClickableClose: (event) => this.removeChip(event) }, chip));
            }
            else {
                return (h("bds-tooltip", { key: id, position: "top-center", "tooltip-text": chip }, h("bds-chip-clickable", { id: id, key: id, color: "outline", close: !this.disabled, onChipClickableClose: (event) => this.removeChip(event) }, `${chip.slice(0, limit)} ...`)));
            }
        });
    }
    renderIcon() {
        return (this.icon && (h("div", { class: {
                input__icon: true,
                'input__icon--large': !!this.label,
            } }, h("bds-icon", { size: this.label ? 'medium' : 'small', name: this.icon, color: "inherit" }))));
    }
    renderLabel() {
        return (this.label && (h("label", { class: {
                input__container__label: true,
                'input__container__label--pressed': this.isPressed && !this.disabled,
            } }, h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label))));
    }
    renderMessage() {
        const icon = this.danger ? 'error' : this.success ? 'checkball' : 'info';
        let message = this.danger ? this.errorMessage : this.success ? this.successMessage : this.helperMessage;
        if (!message && this.validationDanger)
            message = this.validationMesage;
        const styles = this.danger || this.validationDanger
            ? 'input__message input__message--danger'
            : this.success
                ? 'input__message input__message--success'
                : 'input__message';
        if (message) {
            return (h("div", { class: styles, part: "input__message" }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: icon, theme: "outline", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
        }
        return undefined;
    }
    generateKey(value) {
        return value.toLowerCase().replace(/ /g, '-');
    }
    render() {
        const isPressed = this.isPressed && !this.disabled;
        let internalOptions = [];
        if (this.options) {
            if (typeof this.options === 'string') {
                try {
                    internalOptions = JSON.parse(this.options);
                }
                catch (e) { }
            }
            else {
                internalOptions = this.options;
            }
        }
        return (h("div", { key: '771bdae86d7ad715d882d15686b8d6e845e77855', class: "select", tabindex: "0", onFocus: this.setFocusWrapper, onBlur: this.removeFocusWrapper }, h("div", { key: '63b0b208a729c7fff16d578776fedd6afa89e3c0', class: { element_input: true }, "aria-disabled": this.disabled ? 'true' : null, onClick: this.toggle }, h("div", { key: '2faf389a9bf7b82f45d585c85d5ec24cc2be40ba', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
            }, onClick: this.onClickWrapper }, this.renderIcon(), h("div", { key: 'e316f6dfc1f0c3481ff145de352e2e4cd2e31394', class: "input__container" }, this.renderLabel(), h("div", { key: 'f6d25d13276d9798f25a365949dd4dcfeca6826b', class: { input__container__wrapper: true } }, this.internalChips.length > 0 && (h("span", { key: 'a79fba696a5ba00c5ac1c1e673de08896e2a57b3', style: { height: this.height, maxHeight: this.maxHeight }, class: "inside-input-left" }, this.renderChips())), h("input", { key: '624ef45abd77dc87257d04e5000d4f4926963f14', ref: (input) => (this.nativeInput = input), class: { input__container__text: true }, name: this.inputName, maxlength: this.maxlength, placeholder: this.placeholder, onInput: this.onInput, onFocus: this.onFocus, onBlur: () => this.handleOnBlur(), onChange: () => this.handleChange, value: this.value, disabled: this.disabled, "data-test": this.dataTest, onKeyDown: this.keyPressWrapper }))), h("div", { key: '16d1a7119ae5fee2876a3d2400d79dd907a751dc', class: "select__icon" }, h("bds-icon", { key: '5a93c463037473e44237a9c4674a975c6b092529', ref: (el) => this.refIconDrop(el), size: "small", color: "inherit" })), this.success && h("bds-icon", { key: '56e353e835c6c60c931fdb946b543d56a24c3513', class: "icon-success", name: "check", theme: "outline", size: "xxx-small" })), this.renderMessage()), h("div", { key: '8e105cff5fba19771e4f3b4389400a8944cea5ba', ref: (el) => this.refDropdown(el), class: {
                select__options: true,
                'select__options--open': this.isOpen,
            } }, internalOptions.map((option) => (h("bds-select-option", { key: this.generateKey(option.value), onOptionSelected: this.handler, value: option.value, status: option.status }, option.label))), h("slot", { key: '1ad71b2155f6d08f4f7e939d0d0f54aa79f5489e' }), this.canAddNew === true && this.enableCreateOption() && (h("bds-select-option", { key: '82f5eb610b42040a9df74a932432d44d47ce0e0f', id: "option-add", value: "add", onClick: () => this.handlerNewOption(this.nativeInput.value) }, this.newPrefix, this.nativeInput.value)), !this.canAddNew && this.enableCreateOption() && (h("bds-select-option", { key: '8717a46e3121f6fb27419fb90578090e643c002a', id: "no-option", value: "add" }, this.notFoundMessage)))));
    }
    static get is() { return "bds-select-chips"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["../select.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["../select.css"]
        };
    }
    static get properties() {
        return {
            "options": {
                "type": "string",
                "attribute": "options",
                "mutable": true,
                "complexType": {
                    "original": "string | Option[]",
                    "resolved": "Option[] | string",
                    "references": {
                        "Option": {
                            "location": "import",
                            "path": "../select-interface",
                            "id": "src/components/selects/select-interface.ts::Option"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The options of the select\nShould be passed this way:\noptions='[{\"value\": \"Cat\", \"label\": \"Meow\"}, {\"value\": \"Dog\", \"label\": \"Woof\"}]'\nOptions can also be passed as child by using bds-select-option component, but passing as a child you may have some compatibility problems with Angular."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "chips": {
                "type": "string",
                "attribute": "chips",
                "mutable": true,
                "complexType": {
                    "original": "string | string[]",
                    "resolved": "string | string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The chips on the component\nShould be passed this way:\nchips='[\"chip1\", \"chip2\"]'"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "[]"
            },
            "newPrefix": {
                "type": "string",
                "attribute": "new-prefix",
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
                    "text": "Used for add prefix on new option select."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "''"
            },
            "value": {
                "type": "string",
                "attribute": "value",
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
                    "text": "the value of the select."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "danger": {
                "type": "boolean",
                "attribute": "danger",
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
                    "text": "Add state danger on input, use for use feedback."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "success": {
                "type": "boolean",
                "attribute": "success",
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
                    "text": "Add state success on input, use for use feedback."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "maxlength": {
                "type": "number",
                "attribute": "maxlength",
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
                    "text": "Set maximum length value for the chip content"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "errorMessage": {
                "type": "string",
                "attribute": "error-message",
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
                    "text": "Indicated to pass an feedback to user."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                    "text": "Disabled input."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
                    "text": "label in input, with he the input size increases."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                    "text": "used for add icon in input left. Uses the bds-icon component."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "''"
            },
            "duplicated": {
                "type": "boolean",
                "attribute": "duplicated",
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
                    "text": "Do not accept duplicate chip elements."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "canAddNew": {
                "type": "boolean",
                "attribute": "can-add-new",
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
                    "text": "Specify if is possible to create a new tag that is not on the options."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "notFoundMessage": {
                "type": "string",
                "attribute": "not-found-message",
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
                    "text": "Specify if is possible to create a new tag that is not on the options."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'No results found'"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "InputChipsTypes",
                    "resolved": "\"email\" | \"text\"",
                    "references": {
                        "InputChipsTypes": {
                            "location": "import",
                            "path": "../../input-chips/input-chips-interface",
                            "id": "src/components/input-chips/input-chips-interface.ts::InputChipsTypes"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Defining the type is important so that it is possible to carry out validations. Can be one of:\n'text' and 'email;"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'text'"
            },
            "delimiters": {
                "type": "unknown",
                "attribute": "delimiters",
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
                    "text": "The delimiter is used to add multiple chips in the same string."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "/,|;/"
            },
            "disableSubmit": {
                "type": "boolean",
                "attribute": "disable-submit",
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
                    "text": "If `true`, the user cannot modify the value."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "helperMessage": {
                "type": "string",
                "attribute": "helper-message",
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
                    "text": "Indicated to pass a help the user in complex filling."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "successMessage": {
                "type": "string",
                "attribute": "success-message",
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
                    "text": "Indicated to pass an feeback to user."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "inputName": {
                "type": "string",
                "attribute": "input-name",
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
                    "text": "Prop to insert the name of the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
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
                    "text": "A tip for the user who can enter no controls."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "optionsPosition": {
                "type": "string",
                "attribute": "options-position",
                "mutable": true,
                "complexType": {
                    "original": "SelectOptionsPositionType",
                    "resolved": "\"auto\" | \"bottom\" | \"top\"",
                    "references": {
                        "SelectOptionsPositionType": {
                            "location": "import",
                            "path": "../select-interface",
                            "id": "src/components/selects/select-interface.ts::SelectOptionsPositionType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the placement of the options menu. Can be 'bottom' or 'top'."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'auto'"
            },
            "height": {
                "type": "string",
                "attribute": "height",
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
                    "text": "Prop for set the height of the component."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "maxHeight": {
                "type": "string",
                "attribute": "max-height",
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
                    "text": "Prop for set the max height of the component."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "dataTest": {
                "type": "string",
                "attribute": "data-test",
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
                    "text": "Data test is the prop to specifically test the component action object."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "internalOptions": {},
            "isOpen": {},
            "intoView": {},
            "selectedOptions": {},
            "validationDanger": {},
            "isPressed": {},
            "validationMesage": {},
            "internalChips": {},
            "selectedOption": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsChange",
                "name": "bdsChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the value has changed."
                },
                "complexType": {
                    "original": "SelectChangeEvent",
                    "resolved": "SelectChangeEvent",
                    "references": {
                        "SelectChangeEvent": {
                            "location": "import",
                            "path": "../select-interface",
                            "id": "src/components/selects/select-interface.ts::SelectChangeEvent"
                        }
                    }
                }
            }, {
                "method": "bdsCancel",
                "name": "bdsCancel",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the selection is cancelled."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bdsFocus",
                "name": "bdsFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the select loses focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bdsBlur",
                "name": "bdsBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the select loses focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "bdsChangeChips",
                "name": "bdsChangeChips",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the chip has added."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "bdsSelectChipsInput",
                "name": "bdsSelectChipsInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the chip has added."
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
                "method": "bdsSubmit",
                "name": "bdsSubmit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the chip has added."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                    "text": "Return the validity of the input chips.",
                    "tags": []
                }
            },
            "getChips": {
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
                    "text": "Return the chips",
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
                    "text": "Clear all chips",
                    "tags": []
                }
            },
            "add": {
                "complexType": {
                    "signature": "(value: string) => Promise<void>",
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
                    "text": "",
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
                    "text": "",
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
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "isOpen",
                "methodName": "isOpenChanged"
            }, {
                "propName": "options",
                "methodName": "optionsChanged"
            }, {
                "propName": "chips",
                "methodName": "valueChanged"
            }, {
                "propName": "internalChips",
                "methodName": "internalValueChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "mousedown",
                "method": "handleWindow",
                "target": "window",
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=select-chips.js.map
