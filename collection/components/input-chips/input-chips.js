import { Host, h } from '@stencil/core';
import { emailValidation, whitespaceValidation } from '../../utils/validations';
export class InputChips {
  constructor() {
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
        case 'Backspace' || 'Delete':
          if ((this.value === null || this.value.length <= 0) && this.internalChips.length) {
            this.removeLastChip();
            this.bdsChange.emit({ data: this.internalChips, value: this.getLastChip() });
            this.bdsChangeChips.emit({ data: this.internalChips, value: this.getLastChip() });
          }
          break;
      }
    };
    this.InputSize = null;
    this.validationDanger = false;
    this.inputAvalible = true;
    this.isPressed = false;
    this.validationMesage = '';
    this.internalChips = [];
    this.chips = [];
    this.blurCreation = false;
    this.type = 'text';
    this.label = '';
    this.maxlength = undefined;
    this.maxChipsLength = undefined;
    this.icon = '';
    this.delimiters = /,|;/;
    this.errorMessage = '';
    this.danger = false;
    this.success = false;
    this.value = '';
    this.duplicated = false;
    this.disableSubmit = false;
    this.disabled = false;
    this.helperMessage = '';
    this.successMessage = '';
    this.inputName = '';
    this.placeholder = '';
    this.counterLength = false;
    this.height = undefined;
    this.maxHeight = undefined;
    this.dataTest = null;
    this.dtButtonClose = null;
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
        catch {
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
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null }, h("div", { class: {
        input: true,
        'input--state-primary': !this.danger && !this.validationDanger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--state-disabled': this.disabled,
        'input--label': !!this.label,
        'input--pressed': isPressed,
      }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("div", { class: "input__container" }, this.renderLabel(), h("div", { class: "input__container__wrapper", style: { maxHeight: defaultMaxHeight } }, this.internalChips.length > 0 && this.renderChips(), this.inputAvalible && (h("input", { ref: (input) => (this.nativeInput = input), class: "input__container__text", name: this.inputName, maxlength: this.maxlength, placeholder: this.placeholder, onInput: this.onInput, onFocus: this.onFocus, onBlur: () => this.handleOnBlur(), onChange: () => this.handleChange, value: this.value, disabled: this.disabled, "data-test": this.dataTest })))), this.counterLength && (h("bds-counter-text", { length: this.internalChips.length, max: this.maxChipsLength, active: isPressed })), this.success && h("bds-icon", { class: "icon-success", name: "checkb", theme: "outline", size: "xxx-small" }), h("slot", { name: "input-right" })), this.renderMessage()));
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
        "attribute": "chips",
        "reflect": false,
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
        "attribute": "blur-creation",
        "reflect": false,
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
              "path": "./input-chips-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Defining the type is important so that it is possible to carry out validations. Can be one of:\n'text' and 'email;"
        },
        "attribute": "type",
        "reflect": false,
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
        "attribute": "label",
        "reflect": false,
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
        "attribute": "maxlength",
        "reflect": false
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
        "attribute": "max-chips-length",
        "reflect": false
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
      "delimiters": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "RegExp",
          "resolved": "RegExp",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The delimiter is used to add multiple chips in the same string."
        },
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
        "attribute": "error-message",
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
        "attribute": "duplicated",
        "reflect": false,
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
        "attribute": "disable-submit",
        "reflect": false,
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
        "attribute": "disabled",
        "reflect": true,
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
        "attribute": "input-name",
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
          "text": "A tip for the user who can enter no controls."
        },
        "attribute": "placeholder",
        "reflect": false,
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
        "attribute": "counter-length",
        "reflect": false,
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
        "attribute": "height",
        "reflect": false
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
        "attribute": "max-height",
        "reflect": false
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
        "attribute": "dt-button-close",
        "reflect": false,
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
          "original": "any",
          "resolved": "any",
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
          "original": "any",
          "resolved": "any",
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
          "original": "any",
          "resolved": "any",
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
          "original": "any",
          "resolved": "any",
          "references": {}
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
          "original": "any",
          "resolved": "any",
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
              "location": "global"
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
              "location": "global"
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
              "location": "global"
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
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
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
              "location": "global"
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
              "location": "global"
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
