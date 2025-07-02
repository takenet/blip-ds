import { h, Host } from "@stencil/core";
export class InputEditable {
    constructor() {
        /**
         * Conditions the element to say whether it is pressed or not, to add styles.
         */
        this.isEditing = false;
        /**
         * Used to block the confirm icon.
         */
        this.isValid = true;
        /**
         * Used to validate it is pressed.
         */
        this.isPressed = false;
        /**
         * Used to validate it is focused.
         */
        this.isFocused = false;
        /**
         * Used to set the error message setted by the internal validators
         */
        this.validationMesage = '';
        /**
         * Used to set the danger behavior by the internal validators
         */
        this.validationDanger = false;
        /**
         * Set the component size. Can be one of:
         * 'short' | 'standard' | 'tall';
         */
        this.size = 'standard';
        /**
         * Defines whether the component will be expandable
         */
        this.expand = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Input Name
         */
        this.inputName = '';
        /**
         * The value of the input.
         */
        this.value = '';
        /**
         * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
         */
        this.minlength = 0;
        /**
         * Indicated to pass an feeback to user.
         */
        this.errorMessage = '';
        /**
         * Indicated to pass an feeback to user.
         */
        this.successMessage = '';
        /**
         * Indicated to pass a help to the user in complex filling.
         */
        this.helperMessage = '';
        /**
         * Placeholder for native input element.
         */
        this.placeholder = '';
        /**
         * Add state danger on input, use for use feedback. If true avoid save confirmation.
         */
        this.danger = false;
        /**
         * Add state success on input, use for use feedback.
         */
        this.success = false;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonEdit is the data-test to button edit.
         */
        this.dtButtonEdit = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonConfirm is the data-test to button confirm.
         */
        this.dtButtonConfirm = null;
        this.handleEditing = () => {
            this.toggleEditing();
        };
        this.toggleEditing = () => {
            this.isEditing = !this.isEditing;
        };
        this.handleSaveText = () => {
            const newValue = this.nativeInput.value;
            if (newValue.length > 0 && newValue.length >= this.minlength && !this.danger) {
                this.bdsInputEditableSave.emit({ value: newValue, oldValue: this.oldValue });
                this.oldValue = newValue;
                this.value = newValue;
                this.toggleEditing();
            }
        };
        this.changedInputValue = async (ev) => {
            const input = ev.target;
            this.checkValidity();
            if (input) {
                if (input.value.length < Number(this.minlength)) {
                    this.isValid = false;
                }
                else {
                    this.isValid = true;
                }
            }
            this.bdsInput.emit(ev);
            this.bdsChange.emit({ value: this.nativeInput.value, oldValue: this.oldValue });
        };
        this.onFocus = () => {
            this.isFocused = true;
            this.isPressed = true;
            this.bdsFocus.emit();
        };
        this.onBlur = () => {
            this.onBlurValidations();
            this.bdsBlur.emit();
            this.isPressed = false;
        };
        this.onClickWrapper = () => {
            this.onFocus();
            if (this.nativeInput) {
                this.nativeInput.focus();
            }
        };
        this.getExpand = () => {
            if (this.expand) {
                return 'expanded';
            }
            else {
                return 'fixed';
            }
        };
    }
    componentWillLoad() {
        this.oldValue = this.value;
    }
    onBlurValidations() {
        this.requiredValidation();
        (this.minlength || this.maxlength) && this.lengthValidation();
        this.checkValidity();
    }
    requiredValidation() {
        if (this.nativeInput.validity.valueMissing) {
            this.validationMesage = this.requiredErrorMessage;
            this.validationDanger = true;
        }
    }
    lengthValidation() {
        if (this.nativeInput.validity.tooShort) {
            this.validationMesage = this.minlengthErrorMessage;
            this.validationDanger = true;
            return;
        }
        if (this.nativeInput.validity.tooLong) {
            this.validationDanger = true;
            return;
        }
    }
    checkValidity() {
        if (this.nativeInput.validity.valid) {
            this.validationDanger = false;
        }
    }
    handleKeyDownToggle(event) {
        if (event.key == 'Enter') {
            this.toggleEditing();
        }
    }
    handleKeyDownSave(event) {
        if (event.key == 'Enter') {
            this.handleSaveText();
        }
    }
    getFontSizeClass() {
        if (this.size == 'short') {
            return 'fs-16';
        }
        else if (this.size == 'standard') {
            return 'fs-24';
        }
        else if (this.size == 'tall') {
            return 'fs-40';
        }
        else {
            return 'fs-24';
        }
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
            return (h("div", { class: styles, part: "input__message" }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: icon, theme: "solid", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
        }
        return undefined;
    }
    render() {
        const variant = this.getFontSizeClass();
        const inputExpand = this.getExpand();
        return (h(Host, { key: 'ee0c0456fa1715f2d4b61d3329b1f351f3c95f86' }, h("div", { key: '193a0f9dc8a4f535c799ad4874e174a1b43035f8', class: "input__editable" }, h("div", { key: 'b96655fd30e44ce1959a5e46e636278785168851', class: { 'input__editable--static': true, 'input__editable--hidden': this.isEditing }, onClick: this.handleEditing, "data-test": this.dtButtonEdit, tabindex: "0", onKeyDown: this.handleKeyDownToggle.bind(this) }, h("bds-typo", { key: 'b7c0cf45a277f1f152ef38cad053a351bfbb0675', tag: "span", part: "input__editable--static__typo", class: "input__editable--static__typo", variant: variant }, this.value), h("bds-icon", { key: "edit-icon", class: "input__editable--static__icon", name: "edit" })), h("div", { key: '1f11372a0a37d5ffed32d644a0994c0a1bc891d9', class: { 'input__editable--active': true, 'input__editable--hidden': !this.isEditing } }, h("div", { key: '915ae52a024940dcb2fc4058ae2b3e07fd901c5e', class: { element_input: true, [inputExpand]: true, [this.size]: true } }, h("div", { key: '404ef8c252cfff4868f37f12676d144a6973a01f', class: {
                input: true,
                select: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--pressed': this.isPressed,
            }, onClick: this.onClickWrapper }, h("div", { key: '0424efc6513f021b38958548c286b925f21b1054', class: "input__container" }, h("input", { key: '4bd47f6af12d5f0c37c195120e44e00f7f360a35', class: { input__container__text: true }, ref: (input) => (this.nativeInput = input), minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.changedInputValue, placeholder: this.placeholder, value: this.value, required: true, part: "input", "data-test": this.dataTest })), this.success && h("bds-icon", { key: '9841fbc8016ccac973de3858259daf9d08b46412', class: "icon-success", name: "checkball", theme: "solid", size: "xxx-small" })), this.renderMessage()), h("div", { key: '3e9924f019ed6167cf759ae2bd55fe1de924a2d7', class: "input__editable--active__icon" }, h("bds-icon", { key: "error-icon", class: "input__editable--active__icon--error", theme: "solid", name: "error", onClick: this.handleEditing, tabindex: "0", onKeyDown: this.handleKeyDownToggle.bind(this), dataTest: this.dtButtonClose }), h("bds-icon", { key: "checkball-icon", class: {
                'input__editable--active__icon--checkball': true,
                'input__editable--active__icon--checkball--error': !this.isValid,
            }, theme: "solid", name: "checkball", onClick: this.handleSaveText, tabindex: "0", onKeyDown: this.handleKeyDownSave.bind(this), dataTest: this.dtButtonConfirm }))))));
    }
    static get is() { return "bds-input-editable"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["input-editable.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["input-editable.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "SizeInputEditable",
                    "resolved": "\"short\" | \"standard\" | \"tall\"",
                    "references": {
                        "SizeInputEditable": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/input-editable/input-editable.tsx",
                            "id": "src/components/input-editable/input-editable.tsx::SizeInputEditable"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set the component size. Can be one of:\n'short' | 'standard' | 'tall';"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'standard'"
            },
            "expand": {
                "type": "boolean",
                "attribute": "expand",
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
                    "text": "Defines whether the component will be expandable"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Input Name"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
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
                    "text": "The value of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "''"
            },
            "requiredErrorMessage": {
                "type": "string",
                "attribute": "required-error-message",
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
                    "text": "Error message when input is required"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "minlength": {
                "type": "number",
                "attribute": "minlength",
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
                    "text": "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "minlengthErrorMessage": {
                "type": "string",
                "attribute": "minlength-error-message",
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
                    "text": "Error message when the value is lower than the minlength"
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter."
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
                    "text": "Indicated to pass a help to the user in complex filling."
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
                    "text": "Placeholder for native input element."
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
                    "text": "Add state danger on input, use for use feedback. If true avoid save confirmation."
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
            "dtButtonEdit": {
                "type": "string",
                "attribute": "dt-button-edit",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonEdit is the data-test to button edit."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "dtButtonClose": {
                "type": "string",
                "attribute": "dt-button-close",
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
                "defaultValue": "null"
            },
            "dtButtonConfirm": {
                "type": "string",
                "attribute": "dt-button-confirm",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonConfirm is the data-test to button confirm."
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
            "oldValue": {},
            "isEditing": {},
            "isValid": {},
            "isPressed": {},
            "isFocused": {},
            "validationMesage": {},
            "validationDanger": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsInputEditableSave",
                "name": "bdsInputEditableSave",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when input text confirm."
                },
                "complexType": {
                    "original": "InputEditableEventDetail",
                    "resolved": "InputEditableEventDetail",
                    "references": {
                        "InputEditableEventDetail": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/input-editable/input-editable.tsx",
                            "id": "src/components/input-editable/input-editable.tsx::InputEditableEventDetail"
                        }
                    }
                }
            }, {
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
                    "original": "InputEditableEventDetail",
                    "resolved": "InputEditableEventDetail",
                    "references": {
                        "InputEditableEventDetail": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/input-editable/input-editable.tsx",
                            "id": "src/components/input-editable/input-editable.tsx::InputEditableEventDetail"
                        }
                    }
                }
            }, {
                "method": "bdsInput",
                "name": "bdsInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the input has changed."
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
}
//# sourceMappingURL=input-editable.js.map
