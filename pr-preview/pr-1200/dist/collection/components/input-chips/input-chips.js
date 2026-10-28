import { Host, h } from "@stencil/core";
import { emailValidation, whitespaceValidation } from "../../utils/validations";
export class InputChips {
    constructor() {
        this.InputSize = null;
        /**
         * Used to set the danger behavior by the internal validators
         */
        this.validationDanger = false;
        /**
         * Used to enable or disable input
         */
        this.inputAvalible = true;
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
         * When true, the press enter will be simulated on blur event.
         */
        this.blurCreation = false;
        /**
         * Defining the type is important so that it is possible to carry out validations. Can be one of:
         * 'text' and 'email;
         */
        this.type = 'text';
        /**
         *  label in input, with he the input size increases.
         */
        this.label = '';
        /**
         * used for add icon in input left. Uses the bds-icon component.
         */
        this.icon = '';
        /**
         * The delimiter is used to add multiple chips in the same string.
         */
        this.delimiters = /,|;/;
        /**
         * Indicated to pass an feedback to user.
         */
        this.errorMessage = '';
        /**
         * Add state danger on input, use for use feedback.
         */
        this.danger = false;
        /**
         * Add state success on input, use for use feedback.
         */
        this.success = false;
        /**
         * The value of the input.
         */
        this.value = '';
        /**
         * Do not accept duplicate chip elements.
         */
        this.duplicated = false;
        /**
         * If `true`, the user cannot modify the value.
         */
        this.disableSubmit = false;
        /**
         * Disabled input
         */
        this.disabled = false;
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
         * Passing true to display a counter of available size, it is necessary to
         * pass another maxlength property.
         */
        this.counterLength = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
        this.onClickWrapper = () => {
            this.onFocus();
            if (this.nativeInput) {
                this.nativeInput.focus();
            }
        };
        this.onFocus = () => {
            this.bdsInputChipsFocus.emit();
            this.isPressed = true;
        };
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value || '';
            }
            this.bdsInputChipsInput.emit(ev);
        };
        this.keyPressWrapper = (event) => {
            switch (event.key) {
                case 'Enter':
                    this.handleDelimiters();
                    this.setChip(this.value);
                    this.value = '';
                    this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
                    this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
                    break;
                case 'Backspace':
                case 'Delete':
                    if ((this.value === null || this.value.length <= 0) && this.internalChips.length) {
                        this.removeLastChip();
                        this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
                        this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
                    }
                    break;
            }
        };
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
        this.minMaxValidation();
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
    async get() {
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
    componentDidLoad() {
        this.minMaxValidation();
    }
    componentWillLoad() {
        this.valueChanged();
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
        this.bdsBlur.emit(this.internalChips);
        if (this.internalChips.length > 0) {
            this.bdsSubmit.emit({ value: this.internalChips });
        }
        this.handleDelimiters();
        this.isPressed = false;
        if (this.blurCreation) {
            this.setChip(this.value);
            this.value = '';
        }
    }
    minMaxValidation() {
        if (!this.maxChipsLength == undefined) {
            this.inputAvalible = true;
        }
        else if (this.internalChips.length >= this.maxChipsLength) {
            this.inputAvalible = false;
            this.bdsExtendedQuantityInput.emit({ value: !this.inputAvalible });
        }
        else {
            this.inputAvalible = true;
        }
    }
    getLastChip() {
        return this.internalChips[this.internalChips.length - 1];
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
            this.setChip(word);
        });
        this.clearInputValues();
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
    async handleChange(event) {
        const { detail: { value }, } = event;
        // console.log('TRACE [input-chips] handleChange 1:', { value });
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
        this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
        this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
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
        this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
        this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
    }
    renderChips() {
        if (!this.internalChips.length) {
            return [];
        }
        return this.internalChips.map((chip, index) => {
            const id = index.toString();
            // Reduce the limit to prevent chips from being too wide and causing scroll issues
            const limit = 20;
            if (chip.length <= limit) {
                return (h("bds-chip-clickable", { id: id, key: id, color: "outline", close: !this.disabled, onChipClickableClose: (event) => this.removeChip(event), dtButtonClose: this.dtButtonClose }, chip));
            }
            else {
                return (h("bds-tooltip", { key: id, position: "top-center", "tooltip-text": chip }, h("bds-chip-clickable", { id: id, key: id, color: "outline", close: !this.disabled, onChipClickableClose: (event) => this.removeChip(event), dtButtonClose: this.dtButtonClose }, `${chip.slice(0, limit)}...`)));
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
    render() {
        const isPressed = this.isPressed && !this.disabled;
        // Set default maxHeight if not provided to prevent UI breaking
        const defaultMaxHeight = this.maxHeight || '80px';
        return (h(Host, { key: 'ab012fd36019d8795bb93854efccbfc39a29c8df', "aria-disabled": this.disabled ? 'true' : null }, h("div", { key: 'c3c211b9efb74585b455d72f210901efe8f64d3c', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
            }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("div", { key: '1bffc1cabfa9ae74ef6173a40feea2eaa3997ca3', class: "input__container" }, this.renderLabel(), h("div", { key: '7b4407c4d7d7b9df9519331810d4051f2c6b1eb2', class: "input__container__wrapper", style: { maxHeight: defaultMaxHeight } }, this.internalChips.length > 0 && this.renderChips(), this.inputAvalible && (h("input", { key: 'c495df2933d1000a77bf18a905901486a27e148a', ref: (input) => (this.nativeInput = input), class: "input__container__text", name: this.inputName, maxlength: this.maxlength, placeholder: this.placeholder, onInput: this.onInput, onFocus: this.onFocus, onBlur: () => this.handleOnBlur(), onChange: () => this.handleChange, value: this.value, disabled: this.disabled, "data-test": this.dataTest })))), this.counterLength && (h("bds-counter-text", { key: '91918a71c67da7d9078500c4206912867bb61491', length: this.internalChips.length, max: this.maxChipsLength, active: isPressed })), this.success && h("bds-icon", { key: 'a7749399f4826c18a3ed7ea80291301ece10fabc', class: "icon-success", name: "checkb", theme: "outline", size: "xxx-small" }), h("slot", { key: '8a8a47655cc2b6b0f98a17da69dc3a31583bb1c0', name: "input-right" })), this.renderMessage()));
    }
    static get is() { return "bds-input-chips"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["input-chips.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["input-chips.css"]
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
                    "text": "The chips on the component\nShould be passed this way:\nchips='[\"chip1\", \"chip2\"]'"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "chips",
                "defaultValue": "[]"
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
                    "text": "When true, the press enter will be simulated on blur event."
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
                    "original": "InputChipsTypes",
                    "resolved": "\"email\" | \"text\"",
                    "references": {
                        "InputChipsTypes": {
                            "location": "import",
                            "path": "./input-chips-interface",
                            "id": "src/components/input-chips/input-chips-interface.ts::InputChipsTypes",
                            "referenceLocation": "InputChipsTypes"
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
                "attribute": "type",
                "defaultValue": "'text'"
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
                    "text": "label in input, with he the input size increases."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "''"
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
                    "text": "Set maximum length value for the chip content"
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
                    "text": "Set maximum length value for chips"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-chips-length"
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
                    "text": "used for add icon in input left. Uses the bds-icon component."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "icon",
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
                    "text": "The delimiter is used to add multiple chips in the same string."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "/,|;/"
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
                    "text": "Indicated to pass an feedback to user."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error-message",
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
                    "text": "Add state danger on input, use for use feedback."
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
                    "text": "Add state success on input, use for use feedback."
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
                    "text": "The value of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "value",
                "defaultValue": "''"
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
                    "text": "Do not accept duplicate chip elements."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "duplicated",
                "defaultValue": "false"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If `true`, the user cannot modify the value."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disable-submit",
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
                    "text": "Disabled input"
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
                    "text": "Indicated to pass a help the user in complex filling."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "helper-message",
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
                    "text": "Indicated to pass an feeback to user."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "success-message",
                "defaultValue": "''"
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
                    "text": "Prop to insert the name of the input"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "input-name",
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
                    "text": "A tip for the user who can enter no controls."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
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
                    "text": "Passing true to display a counter of available size, it is necessary to\npass another maxlength property."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "counter-length",
                "defaultValue": "false"
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
                    "tags": [],
                    "text": "Prop for set the height of the component."
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
                    "tags": [],
                    "text": "Prop for set the max height of the component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-height"
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
                    "text": "Data test is the prop to specifically test the component action object."
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonClose is the data-test to button close."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-close",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "InputSize": {},
            "validationDanger": {},
            "inputAvalible": {},
            "isPressed": {},
            "validationMesage": {},
            "internalChips": {}
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
                    "text": "Emitted when the chip has added."
                },
                "complexType": {
                    "original": "{ data: string[]; value: string }",
                    "resolved": "{ data: string[]; value: string; }",
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
                    "original": "{ data: string[]; value: string }",
                    "resolved": "{ data: string[]; value: string; }",
                    "references": {}
                }
            }, {
                "method": "bdsInputChipsFocus",
                "name": "bdsInputChipsFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the chip has added."
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
                    "text": "Emitted when the chip has added."
                },
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                }
            }, {
                "method": "bdsInputChipsInput",
                "name": "bdsInputChipsInput",
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
                "method": "bdsExtendedQuantityInput",
                "name": "bdsExtendedQuantityInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a maximum value defined by the \"max-chips-length\" prop is entered"
                },
                "complexType": {
                    "original": "{ value: boolean }",
                    "resolved": "{ value: boolean; }",
                    "references": {}
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
                    "text": "Return the validity of the input chips.",
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
    static get watchers() {
        return [{
                "propName": "chips",
                "methodName": "valueChanged"
            }, {
                "propName": "internalChips",
                "methodName": "internalValueChanged"
            }];
    }
}
