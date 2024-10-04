import { h, Host } from '@stencil/core';
export class InputPassword {
  constructor() {
    this.refNativeInput = (el) => {
      this.nativeInput = el;
    };
    this.toggleEyePassword = () => {
      if (!this.disabled) {
        this.openEyes = !this.openEyes;
      }
    };
    this.onClickWrapper = () => {
      this.onFocus();
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    };
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.bdsInputPasswordInput.emit(ev);
    };
    this.onBlur = () => {
      this.bdsInputPasswordBlur.emit();
      this.isPressed = false;
    };
    this.onFocus = () => {
      this.bdsInputPasswordFocus.emit();
      this.isPressed = true;
    };
    this.onSubmit = () => {
      this.bdsInputPasswordSubmit.emit();
    };
    this.keyPressWrapper = (ev) => {
      this.bdsKeyDownBackspace.emit({ ev, value: this.value });
    };
    this.validationDanger = false;
    this.isPressed = false;
    this.validationMesage = '';
    this.openEyes = false;
    this.value = '';
    this.label = '';
    this.inputName = '';
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.readonly = false;
    this.helperMessage = '';
    this.errorMessage = '';
    this.successMessage = '';
    this.danger = false;
    this.success = false;
    this.icon = '';
    this.disabled = false;
    this.autoCapitalize = 'off';
    this.autoComplete = 'off';
    this.placeholder = '';
    this.dataTest = null;
  }
  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.toggleEyePassword();
    }
  }
  getAutoComplete() {
    if (!this.openEyes)
      return 'current-password';
    return this.autoComplete;
  }
  onChange() {
    this.bdsInputPasswordChange.emit({ value: this.value == null ? this.value : this.value.toString() });
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
    const iconPassword = this.openEyes ? 'eye-open' : 'eye-closed';
    const type = this.openEyes ? 'text' : 'password';
    const autocomplete = this.getAutoComplete();
    return (h(Host, null, h("div", { class: { element_input: true }, "aria-disabled": this.disabled ? 'true' : null }, h("div", { class: {
        input: true,
        'input--state-primary': !this.danger && !this.validationDanger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--state-disabled': this.disabled,
        'input--label': !!this.label,
        'input--pressed': isPressed,
      }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("div", { class: "input__container" }, this.renderLabel(), h("div", { class: { input__container__wrapper: true } }, h("input", { ref: this.refNativeInput, class: { input__container__text: true }, type: type, name: this.inputName, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, readOnly: this.readonly, autocomplete: autocomplete, autocapitalize: this.autoCapitalize, placeholder: this.placeholder, onInput: this.onInput, onFocus: this.onFocus, onBlur: this.onBlur, onSubmit: this.onSubmit, value: this.value, disabled: this.disabled, "data-test": this.dataTest }))), h("div", { class: "input__password--icon", onClick: this.toggleEyePassword, onKeyDown: this.handleKeyDown.bind(this), tabindex: "0" }, h("bds-icon", { size: "small", name: iconPassword, color: "inherit" })), this.success && h("bds-icon", { class: "icon-success", name: "check", theme: "outline", size: "xxx-small" })), this.renderMessage())));
  }
  static get is() { return "bds-input-password"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["input-password.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["input-password.css"]
    };
  }
  static get properties() {
    return {
      "openEyes": {
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
          "text": ""
        },
        "attribute": "open-eyes",
        "reflect": false,
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
        "attribute": "value",
        "reflect": true,
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
          "text": "label in input, with he the input size increases."
        },
        "attribute": "label",
        "reflect": false,
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
          "text": "Input Name"
        },
        "attribute": "input-name",
        "reflect": false,
        "defaultValue": "''"
      },
      "max": {
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
          "text": "The maximum value, which must not be less than its minimum (min attribute) value."
        },
        "attribute": "max",
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
      "min": {
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
          "text": "The minimum value, which must not be greater than its maximum (max attribute) value."
        },
        "attribute": "min",
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
        "reflect": false
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
          "text": "If `true`, the user cannot modify the value."
        },
        "attribute": "readonly",
        "reflect": false,
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
        "attribute": "helper-message",
        "reflect": false,
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
      "danger": {
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
          "text": "Add state danger on input, use for use feedback."
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
        "attribute": "icon",
        "reflect": true,
        "defaultValue": "''"
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
          "text": "Disabled input."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "autoCapitalize": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "InputAutocapitalize",
          "resolved": "\"characters\" | \"none\" | \"off\" | \"on\" | \"sentences\" | \"words\"",
          "references": {
            "InputAutocapitalize": {
              "location": "import",
              "path": "../input/input-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Capitalizes every word's second character."
        },
        "attribute": "auto-capitalize",
        "reflect": false,
        "defaultValue": "'off'"
      },
      "autoComplete": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "InputAutoComplete",
          "resolved": "\"current-password\" | \"new-password\" | \"off\" | \"on\" | \"username\"",
          "references": {
            "InputAutoComplete": {
              "location": "import",
              "path": "../input/input-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Hint for form autofill feature"
        },
        "attribute": "auto-complete",
        "reflect": false,
        "defaultValue": "'off'"
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
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "''"
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
      }
    };
  }
  static get states() {
    return {
      "validationDanger": {},
      "isPressed": {},
      "validationMesage": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsInputPasswordChange",
        "name": "bdsInputPasswordChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the value has changed."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsInputPasswordInput",
        "name": "bdsInputPasswordInput",
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
        "method": "bdsInputPasswordBlur",
        "name": "bdsInputPasswordBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event input onblur."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsInputPasswordFocus",
        "name": "bdsInputPasswordFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event input focus."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsInputPasswordSubmit",
        "name": "bdsInputPasswordSubmit",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event input enter."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bdsKeyDownBackspace",
        "name": "bdsKeyDownBackspace",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event input key down backspace."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "onChange"
      }];
  }
}
