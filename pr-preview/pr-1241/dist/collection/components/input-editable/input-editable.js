import { h, Host } from "@stencil/core";
/**
 * @deprecated Use `uai-input-editable` for new UAI experiences. This component remains supported for existing consumers.
 */
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
        return (h(Host, { key: 'e2102776937fbfdb383ec011d1d7ed123ecfe22d' }, h("div", { key: '98192085f9d955eb7379e53aed44ff9a3609f5dc', class: "input__editable" }, h("div", { key: '0e0e913a434c7ed6f01985398ee04058372831d3', class: { 'input__editable--static': true, 'input__editable--hidden': this.isEditing }, onClick: this.handleEditing, "data-test": this.dtButtonEdit, tabindex: "0", onKeyDown: this.handleKeyDownToggle.bind(this) }, h("bds-typo", { key: 'c3f734e9b40c53ed79bb9f9372bf5fc2b66cdd79', tag: "span", part: "input__editable--static__typo", class: "input__editable--static__typo", variant: variant }, this.value), h("bds-icon", { key: "edit-icon", class: "input__editable--static__icon", name: "edit" })), h("div", { key: 'f3f2460a522c90ee0230ea441d324e53a8608b77', class: { 'input__editable--active': true, 'input__editable--hidden': !this.isEditing } }, h("div", { key: '2a12b2a48ee4aa8da0c9e05bb2d98f9d88841c78', class: { element_input: true, [inputExpand]: true, [this.size]: true } }, h("div", { key: '90657819d60950b861cf53bf0ecfd94e75e665e8', class: {
                input: true,
                select: true,
                'input--state-primary': !this.danger && !this.validationDanger,
                'input--state-danger': this.danger || this.validationDanger,
                'input--state-success': this.success,
                'input--pressed': this.isPressed,
            }, onClick: this.onClickWrapper }, h("div", { key: '7213be1cc5c951612623a6b95428872084f90666', class: "input__container" }, h("input", { key: '82c9f439222efa67cc50f2f7f6eb082622b66f4b', class: { input__container__text: true }, ref: (input) => (this.nativeInput = input), minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.changedInputValue, placeholder: this.placeholder, value: this.value, required: true, part: "input", "data-test": this.dataTest })), this.success && h("bds-icon", { key: '6b2bb4982f999104f27ebbe8a6855795626015d8', class: "icon-success", name: "checkball", theme: "solid", size: "xxx-small" })), this.renderMessage()), h("div", { key: '6be4fa0fdc900640e84610af4e75ca52b142c2f9', class: "input__editable--active__icon" }, h("bds-icon", { key: "error-icon", class: "input__editable--active__icon--error", theme: "solid", name: "error", onClick: this.handleEditing, tabindex: "0", onKeyDown: this.handleKeyDownToggle.bind(this), dataTest: this.dtButtonClose }), h("bds-icon", { key: "checkball-icon", class: {
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
                "attribute": "size",
                "defaultValue": "'standard'"
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
                    "tags": [],
                    "text": "Defines whether the component will be expandable"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "expand",
                "defaultValue": "false"
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
                    "text": "Input Name"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "input-name",
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
                    "text": "The value of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "value",
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
                    "text": "Error message when input is required"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required-error-message"
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
                    "text": "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "minlength",
                "defaultValue": "0"
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
                    "text": "Error message when the value is lower than the minlength"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "minlength-error-message"
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
                    "text": "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "maxlength"
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
                    "text": "Indicated to pass an feeback to user."
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
                    "text": "Indicated to pass an feeback to user."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "success-message",
                "defaultValue": "''"
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
                    "text": "Indicated to pass a help to the user in complex filling."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "helper-message",
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
                    "text": "Placeholder for native input element."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder",
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
                    "text": "Add state danger on input, use for use feedback. If true avoid save confirmation."
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonEdit is the data-test to button edit."
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonClose is the data-test to button close."
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonConfirm is the data-test to button confirm."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "dt-button-confirm",
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
