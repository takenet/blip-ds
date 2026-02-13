import { h } from '@stencil/core';
let checkBoxIds = 0;
export class Checkbox {
  constructor() {
    this.onClick = (ev) => {
      ev.stopPropagation();
      this.checked = !this.checked;
      this.bdsChange.emit({
        checked: this.checked,
      });
    };
    this.refNativeInput = (input) => {
      this.nativeInput = input;
    };
    this.getStyleState = () => {
      if (this.checked && !this.disabled) {
        return 'checkbox--selected';
      }
      if (!this.checked && !this.disabled) {
        return 'checkbox--deselected';
      }
      if (this.checked && this.disabled) {
        return 'checkbox--selected-disabled';
      }
      if (!this.checked && this.disabled) {
        return 'checkbox--deselected-disabled';
      }
      return '';
    };
    this.checkBoxId = undefined;
    this.refer = undefined;
    this.label = undefined;
    this.name = undefined;
    this.checked = false;
    this.disabled = false;
    this.dataTest = null;
  }
  connectedCallback() {
    this.checkBoxId = this.refer || `bds-checkbox-${checkBoxIds++}`;
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  getValue() {
    return Promise.resolve(this.nativeInput.checked);
  }
  async toggle() {
    this.checked = !this.checked;
    this.bdsChange.emit({
      checked: this.checked,
    });
  }
  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.checked = !this.checked;
      this.bdsChange.emit({
        checked: this.checked,
      });
    }
  }
  render() {
    const styleState = this.getStyleState();
    return (h("div", { class: {
        checkbox: true,
        [styleState]: true,
      } }, h("input", { type: "checkbox", ref: this.refNativeInput, id: this.checkBoxId, name: this.name, onClick: (ev) => this.onClick(ev), checked: this.checked, disabled: this.disabled, "data-test": this.dataTest }), h("label", { class: "checkbox__label", htmlFor: this.checkBoxId }, h("div", { class: "checkbox__icon", tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, h("bds-icon", { class: "checkbox__icon__svg", size: "x-small", name: "true", color: "inherit" })), this.label && (h("bds-typo", { class: "checkbox__text", variant: "fs-14", tag: "span" }, this.label)))));
  }
  static get is() { return "bds-checkbox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["checkbox.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["checkbox.css"]
    };
  }
  static get properties() {
    return {
      "refer": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "refer",
        "reflect": false
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "label",
        "reflect": false
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The name of the control, which is submitted with the form data."
        },
        "attribute": "name",
        "reflect": false
      },
      "checked": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, the checkbox is selected."
        },
        "attribute": "checked",
        "reflect": true,
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, the user cannot interact with the checkbox."
        },
        "attribute": "disabled",
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
      }
    };
  }
  static get states() {
    return {
      "checkBoxId": {}
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
          "original": "any",
          "resolved": "any",
          "references": {}
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
      }];
  }
  static get methods() {
    return {
      "getInputElement": {
        "complexType": {
          "signature": "() => Promise<HTMLInputElement>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLInputElement": {
              "location": "global"
            }
          },
          "return": "Promise<HTMLInputElement>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "getValue": {
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
          "text": "",
          "tags": []
        }
      },
      "toggle": {
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
}
