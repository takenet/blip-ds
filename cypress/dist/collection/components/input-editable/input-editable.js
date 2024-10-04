import { h, Host } from '@stencil/core';
export class InputEditable {
  constructor() {
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
    this.oldValue = undefined;
    this.isEditing = false;
    this.isValid = true;
    this.isPressed = false;
    this.isFocused = false;
    this.validationMesage = '';
    this.validationDanger = false;
    this.size = 'standard';
    this.expand = false;
    this.dataTest = null;
    this.inputName = '';
    this.value = '';
    this.requiredErrorMessage = undefined;
    this.minlength = 0;
    this.minlengthErrorMessage = undefined;
    this.maxlength = undefined;
    this.errorMessage = '';
    this.successMessage = '';
    this.helperMessage = '';
    this.placeholder = '';
    this.danger = false;
    this.success = false;
    this.dtButtonEdit = null;
    this.dtButtonClose = null;
    this.dtButtonConfirm = null;
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
    return (h(Host, null, h("div", { class: "input__editable" }, h("div", { class: { 'input__editable--static': true, 'input__editable--hidden': this.isEditing }, onClick: this.handleEditing, "data-test": this.dtButtonEdit, tabindex: "0", onKeyDown: this.handleKeyDownToggle.bind(this) }, h("bds-typo", { tag: "span", part: "input__editable--static__typo", class: "input__editable--static__typo", variant: variant }, this.value), h("bds-icon", { key: "edit-icon", class: "input__editable--static__icon", name: "edit" })), h("div", { class: { 'input__editable--active': true, 'input__editable--hidden': !this.isEditing } }, h("div", { class: { element_input: true, [inputExpand]: true, [this.size]: true } }, h("div", { class: {
        input: true,
        select: true,
        'input--state-primary': !this.danger && !this.validationDanger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--pressed': this.isPressed,
      }, onClick: this.onClickWrapper }, h("div", { class: "input__container" }, h("input", { class: { input__container__text: true }, ref: (input) => (this.nativeInput = input), minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.changedInputValue, placeholder: this.placeholder, value: this.value, required: true, part: "input", "data-test": this.dataTest })), this.success && h("bds-icon", { class: "icon-success", name: "checkball", theme: "solid", size: "xxx-small" })), this.renderMessage()), h("div", { class: "input__editable--active__icon" }, h("bds-icon", { key: "error-icon", class: "input__editable--active__icon--error", theme: "solid", name: "error", onClick: this.handleEditing, tabindex: "0", onKeyDown: this.handleKeyDownToggle.bind(this), dataTest: this.dtButtonClose }), h("bds-icon", { key: "checkball-icon", class: {
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
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set the component size. Can be one of:\r\n'short' | 'standard' | 'tall';"
        },
        "attribute": "size",
        "reflect": false,
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
        "attribute": "expand",
        "reflect": false,
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
        "attribute": "data-test",
        "reflect": false,
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
        "attribute": "input-name",
        "reflect": false,
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
        "attribute": "value",
        "reflect": true,
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
        "attribute": "required-error-message",
        "reflect": false
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
        "attribute": "minlength",
        "reflect": false,
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
        "attribute": "minlength-error-message",
        "reflect": false
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
        "attribute": "maxlength",
        "reflect": false
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
        "attribute": "error-message",
        "reflect": false,
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
        "attribute": "success-message",
        "reflect": false,
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
        "attribute": "helper-message",
        "reflect": false,
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
        "attribute": "placeholder",
        "reflect": false,
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
        "attribute": "danger",
        "reflect": true,
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
        "attribute": "success",
        "reflect": true,
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtButtonEdit is the data-test to button edit."
        },
        "attribute": "dt-button-edit",
        "reflect": false,
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtButtonClose is the data-test to button close."
        },
        "attribute": "dt-button-close",
        "reflect": false,
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtButtonConfirm is the data-test to button confirm."
        },
        "attribute": "dt-button-confirm",
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
              "location": "local"
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
              "location": "local"
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
          "original": "KeyboardEvent",
          "resolved": "KeyboardEvent",
          "references": {
            "KeyboardEvent": {
              "location": "global"
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
