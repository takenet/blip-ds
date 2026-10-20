import { h } from "@stencil/core";
import { getScrollParent, positionAbsoluteElement } from "../../../utils/position-element";
export class Select {
    constructor() {
        this.intoView = null;
        this.isOpen = false;
        this.text = '';
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
        /**
         * Add state danger on input, use for use feedback.
         */
        this.danger = false;
        /**
         * Add state success on input, use for use feedback.
         */
        this.success = false;
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
         * Placeholder for native input element.
         */
        this.placeholder = '';
        /**
         * Indicated to pass a help the user in complex filling.
         */
        this.helperMessage = '';
        /**
         * Indicated to pass an feeback to user.
         */
        this.errorMessage = '';
        /**
         * Indicated to pass an feeback to user.
         */
        this.successMessage = '';
        /**
         * Set the placement of the options menu. Can be 'bottom' or 'top'.
         */
        this.optionsPosition = 'auto';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.refNativeInput = (el) => {
            this.nativeInput = el;
        };
        this.refDropdown = (el) => {
            this.dropElement = el;
        };
        this.refIconDrop = (el) => {
            this.iconDropElement = el;
        };
        this.onClickWrapper = () => {
            this.onFocus();
            this.isOpen = true;
            if (this.nativeInput) {
                this.nativeInput.focus();
            }
        };
        this.onFocus = () => {
            this.bdsFocus.emit();
            this.isPressed = true;
        };
        this.onBlur = () => {
            this.bdsBlur.emit();
            this.isPressed = false;
        };
        this.toggle = () => {
            if (!this.disabled) {
                this.isOpen = !this.isOpen;
            }
        };
        this.getText = (value) => {
            var _a;
            const opt = this.childOptions.find((option) => option.value == value);
            if (this.internalOptions) {
                const internalOption = this.internalOptions.find((option) => option.value == (opt === null || opt === void 0 ? void 0 : opt.value));
                if (internalOption) {
                    return internalOption.titleText ? internalOption.titleText : internalOption.label;
                }
            }
            return (opt === null || opt === void 0 ? void 0 : opt.titleText) ? opt === null || opt === void 0 ? void 0 : opt.titleText : ((_a = opt === null || opt === void 0 ? void 0 : opt.innerText) !== null && _a !== void 0 ? _a : '');
        };
        this.handler = (event) => {
            const { detail: { value }, } = event;
            this.value = value;
            this.toggle();
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
    valueChanged() {
        this.bdsChange.emit({ value: this.value });
        for (const option of this.childOptions) {
            option.selected = this.value === option.value;
        }
        this.text = this.getText(this.value);
    }
    handleWindow(ev) {
        const path = ev.composedPath();
        if (!path.find((element) => element == this.el)) {
            this.isOpen = false;
        }
    }
    componentWillLoad() {
        this.options && this.optionsChanged();
        this.intoView = getScrollParent(this.el);
    }
    componentWillRender() {
        this.options && this.updateOptions();
        this.getValueSelected();
    }
    componentDidLoad() {
        this.getValueSelected();
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
    optionsChanged() {
        this.updateOptions();
    }
    getValueSelected() {
        for (const option of this.childOptions) {
            option.selected = this.value === option.value;
            option.addEventListener('optionSelected', this.handler);
        }
        this.text = this.getText(this.value);
    }
    updateOptions() {
        if (this.options) {
            if (typeof this.options === 'string') {
                this.internalOptions = JSON.parse(this.options);
            }
            else {
                this.internalOptions = this.options;
            }
        }
    }
    get childOptions() {
        return this.options
            ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option'))
            : Array.from(this.el.querySelectorAll('bds-select-option'));
    }
    get childOptionSelected() {
        return this.options
            ? Array.from(this.el.shadowRoot.querySelectorAll('bds-select-option')).find((option) => option.selected)
            : Array.from(this.el.querySelectorAll('bds-select-option')).find((option) => option.selected);
    }
    keyPressWrapper(event) {
        var _a, _b, _c, _d;
        switch (event.key) {
            case 'Enter':
                this.toggle();
                break;
            case 'ArrowDown':
                if (!this.disabled) {
                    this.isOpen = true;
                }
                if (this.childOptionSelected) {
                    this.value = (_a = this.childOptionSelected.nextSibling) === null || _a === void 0 ? void 0 : _a.value;
                    return;
                }
                this.value = (_b = this.el.firstElementChild) === null || _b === void 0 ? void 0 : _b.value;
                break;
            case 'ArrowUp':
                if (this.childOptionSelected) {
                    this.value = (_c = this.childOptionSelected.previousSibling) === null || _c === void 0 ? void 0 : _c.value;
                    return;
                }
                this.value = (_d = this.el.lastElementChild) === null || _d === void 0 ? void 0 : _d.value;
                break;
        }
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
        return (h("div", { key: 'd7730cb76798ada0a4e9f940360bbb8082210abd', class: "select" }, h("div", { key: '9ab70776d9269eaa4d2633c91aac529130f52164', class: { element_input: true }, "aria-disabled": this.disabled ? 'true' : null }, h("div", { key: 'cf0297b6dc91116e452a5ecb5b554b3ec258777e', class: {
                input: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--state-disabled': this.disabled,
                'input--label': !!this.label,
                'input--pressed': isPressed,
            }, onClick: this.onClickWrapper, part: "input-container" }, this.renderIcon(), h("div", { key: '14186d2e5c468715e18fc07d23ebd63d7ec7a58d', class: "input__container" }, this.renderLabel(), h("div", { key: '892aaa4d448c718b39884558e9165547bfdb78ae', class: { input__container__wrapper: true } }, h("input", { key: '6ab4560f369787642d72933b227b319c213b2a6f', ref: this.refNativeInput, class: { input__container__text: true }, onFocus: this.onFocus, onBlur: this.onBlur, value: this.text, disabled: this.disabled, placeholder: this.placeholder, readonly: true, "data-test": this.dataTest, onKeyDown: this.keyPressWrapper.bind(this) }))), h("div", { key: 'ed16f046df88e1dee7b48dac58169124f1d266fd', class: "select__icon" }, h("bds-icon", { key: '7a17db07d08864c1c795d5968a79f8ec371254a5', ref: (el) => this.refIconDrop(el), size: "small", color: "inherit" })), this.success && h("bds-icon", { key: '5671081a9076d85576405dc153762199e71df1fe', class: "icon-success", name: "check", theme: "outline", size: "xxx-small" })), this.renderMessage()), h("div", { key: '0c04d519e7c50413099da01e1bf69cb52b67b6af', ref: (el) => this.refDropdown(el), class: {
                select__options: true,
                'select__options--open': this.isOpen,
            }, role: "application" }, this.internalOptions ? (this.internalOptions.map((option, idx) => option.icon || option.titleText ? (h("bds-select-option", { key: idx, value: option.value, "title-text": option.titleText, "slot-align": option.slotAlign, bulkOption: option.bulkOption, status: option.status }, option.icon && (h("bds-icon", { slot: "input-left", name: option.icon, size: "medium", color: option.iconColor })), option.label)) : (h("bds-select-option", { key: idx, value: option.value, bulkOption: option.bulkOption, status: option.status }, option.label)))) : (h("slot", null)))));
    }
    static get is() { return "bds-select"; }
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
                "mutable": false,
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
            "value": {
                "type": "any",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "any | null",
                    "resolved": "any",
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
                "reflect": false
            },
            "danger": {
                "type": "boolean",
                "attribute": "danger",
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
                    "text": "Placeholder for native input element."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
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
            "errorMessage": {
                "type": "string",
                "attribute": "error-message",
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
                    "text": "Indicated to pass an feeback to user."
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
            "intoView": {},
            "isOpen": {},
            "text": {},
            "validationDanger": {},
            "isPressed": {},
            "validationMesage": {},
            "internalOptions": {}
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
                    "original": "SelectChangeEventDetail",
                    "resolved": "SelectChangeEventDetail",
                    "references": {
                        "SelectChangeEventDetail": {
                            "location": "import",
                            "path": "../select-interface",
                            "id": "src/components/selects/select-interface.ts::SelectChangeEventDetail"
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
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "isOpen",
                "methodName": "isOpenChanged"
            }, {
                "propName": "value",
                "methodName": "valueChanged"
            }, {
                "propName": "options",
                "methodName": "optionsChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "mousedown",
                "method": "handleWindow",
                "target": "window",
                "capture": true,
                "passive": true
            }];
    }
}
//# sourceMappingURL=select.js.map
