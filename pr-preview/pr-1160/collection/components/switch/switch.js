import { h } from '@stencil/core';
let switchIds = 0;
export class Switch {
  constructor() {
    this.onClick = () => {
      this.checked = !this.checked;
    };
    this.refNativeInput = (input) => {
      this.nativeInput = input;
    };
    this.getStyleState = () => {
      if (this.checked && !this.disabled) {
        return 'slider--selected';
      }
      if (!this.checked && !this.disabled) {
        return 'slider--deselected';
      }
      if (this.checked && this.disabled) {
        return 'slider--selected-disabled';
      }
      if (!this.checked && this.disabled) {
        return 'slider--deselected-disabled';
      }
      return '';
    };
    this.handleClick = (ev) => {
      if (!this.disabled) {
        if (ev.key === 'Enter') {
          this.checked = !this.checked;
        }
      }
    };
    this.switchId = undefined;
    this.refer = undefined;
    this.size = 'standard';
    this.name = undefined;
    this.checked = false;
    this.disabled = false;
    this.dataTest = null;
  }
  connectedCallback() {
    this.switchId = this.refer || `bds-switch-${switchIds++}`;
  }
  checkedChanged(isChecked) {
    this.bdsChange.emit({
      checked: isChecked,
    });
  }
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  getValue() {
    return Promise.resolve(this.nativeInput.checked);
  }
  getSizeClass() {
    return `switch switch--size-${this.size} `;
  }
  getSizeSliderClass() {
    return `slider slider--size-${this.size} round `;
  }
  render() {
    const sizeClass = this.getSizeClass();
    const sizeSliderClass = this.getSizeSliderClass();
    const styleState = this.getStyleState();
    return (h("label", { class: { [sizeClass]: true } }, h("div", { tabindex: "0", onKeyDown: (ev) => this.handleClick(ev), class: "focus" }), h("input", { type: "checkbox", ref: this.refNativeInput, id: this.switchId, name: this.name, onClick: this.onClick, checked: this.checked, disabled: this.disabled, "data-test": this.dataTest }), h("span", { class: { [sizeSliderClass]: true, [styleState]: true } })));
  }
  static get is() { return "bds-switch"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["switch.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["switch.css"]
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
          "text": "The refer of the control."
        },
        "attribute": "refer",
        "reflect": false
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "SwitchSize",
          "resolved": "\"short\" | \"standard\" | \"tall\"",
          "references": {
            "SwitchSize": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Size. Entered as one of the size. Can be one of:\n'tall', 'standard', 'short';"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'standard'"
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
          "text": "If `true`, the switch is selected."
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
          "text": "If `true`, the user cannot interact with the switch."
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
      "switchId": {}
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
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "checked",
        "methodName": "checkedChanged"
      }];
  }
}
