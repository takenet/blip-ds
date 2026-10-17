import { h } from '@stencil/core';
export class SelectOption {
  constructor() {
    this.refNativeInput = (input) => {
      this.nativeInput = input;
    };
    this.checkedCurrent = () => {
      if (this.typeOption !== 'checkbox')
        return;
      this.nativeInput.toggle();
    };
    this.onClickSelectOption = () => {
      if (this.typeOption == 'checkbox')
        return;
      if (!this.disabled) {
        this.optionSelected.emit({ value: this.value, label: this.element.innerHTML });
      }
    };
    this.optionHandle = (ev) => {
      const elementChecked = ev.target;
      const data = { value: elementChecked.name, label: this.element.innerHTML, checked: elementChecked.checked };
      this.checked = !this.checked;
      this.optionChecked.emit(data);
    };
    this.attachOptionKeyboardListeners = (event) => {
      const element = event.target;
      switch (event.key) {
        case "Enter" /* Keyboard.ENTER */:
          this.onClickSelectOption();
          break;
        case "ArrowDown" /* Keyboard.ARROW_DOWN */:
          if (element.parentElement.nextElementSibling &&
            !element.parentElement.nextElementSibling.hasAttribute('invisible')) {
            event.preventDefault();
            event.stopPropagation();
            element.parentElement.nextElementSibling.firstElementChild.focus();
          }
          break;
        case "ArrowUp" /* Keyboard.ARROW_UP */:
          if (element.parentElement.previousElementSibling &&
            !element.parentElement.previousElementSibling.hasAttribute('invisible')) {
            event.preventDefault();
            event.stopPropagation();
            element.parentElement.previousElementSibling.firstElementChild.focus();
          }
      }
    };
    this.value = undefined;
    this.selected = false;
    this.disabled = false;
    this.invisible = false;
    this.danger = false;
    this.bulkOption = '';
    this.slotAlign = 'center';
    this.titleText = undefined;
    this.status = undefined;
    this.typeOption = 'default';
    this.checked = false;
    this.dataTest = null;
  }
  changeSelectionType() {
    this.typeOption = this.typeOption;
  }
  async toggle() {
    this.checked = !this.checked;
  }
  async toMark() {
    this.checked = true;
  }
  async markOff() {
    this.checked = false;
  }
  render() {
    return (h("div", { id: `bds-select-option-${this.value}`, "data-event": "click", role: "button", onKeyDown: this.attachOptionKeyboardListeners, onClick: this.onClickSelectOption, "data-value": this.value, "data-test": this.dataTest, class: {
        'select-option': this.typeOption != 'checkbox',
        'select-option--selected': this.selected,
        'select-option--disabled': this.disabled,
        'select-option--invisible': this.invisible,
      } }, h("div", { style: { alignSelf: this.slotAlign } }, h("slot", { name: "input-left" })), h("div", { class: {
        'select-option__container': true,
        'select-option__container__fill_space': !!this.status,
        'select-option__container__checkbox': this.typeOption == 'checkbox',
      }, onClick: () => this.checkedCurrent() }, this.titleText && (h("bds-typo", { class: "select-option__container--value", variant: "fs-16", bold: "semi-bold" }, this.titleText)), this.typeOption === 'checkbox' ? (h("bds-checkbox", { ref: this.refNativeInput, refer: `html-for-${this.value}`, label: this.element.innerHTML, name: this.value, checked: this.checked, onBdsChange: (ev) => this.optionHandle(ev) })) : (h("bds-typo", { class: {
        'select-option__container--value': true,
        'select-option__container__overflow': !!this.status,
      }, noWrap: !!this.status, variant: "fs-14" }, h("slot", null)))), this.bulkOption && (h("bds-typo", { class: "select-option__container--bulk", variant: "fs-10" }, this.bulkOption)), this.status && (h("bds-typo", { class: "select-option__container--status", noWrap: true, variant: "fs-10" }, this.status))));
  }
  static get is() { return "bds-select-option"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["select-option.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["select-option.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "value",
        "reflect": false
      },
      "selected": {
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
          "text": "The text value of the option."
        },
        "attribute": "selected",
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
          "text": "If `true`, the user cannot interact with the select option."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "invisible": {
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
        "attribute": "invisible",
        "reflect": true,
        "defaultValue": "false"
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
      "bulkOption": {
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
          "text": "Quantity Description on option value, this item is locate to rigth in component."
        },
        "attribute": "bulk-option",
        "reflect": false,
        "defaultValue": "''"
      },
      "slotAlign": {
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
          "text": "Alignment of input-left slot. The value need to be one of the values used on flexbox align-self property."
        },
        "attribute": "slot-align",
        "reflect": false,
        "defaultValue": "'center'"
      },
      "titleText": {
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
          "text": "If set, a title will be shown under the text"
        },
        "attribute": "title-text",
        "reflect": false
      },
      "status": {
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
          "text": "If set, a text will be displayed on the right side of the option label"
        },
        "attribute": "status",
        "reflect": false
      },
      "typeOption": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "TypeOption",
          "resolved": "\"checkbox\" | \"default\"",
          "references": {
            "TypeOption": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Type Option. Used toselect type of item list."
        },
        "attribute": "type-option",
        "reflect": true,
        "defaultValue": "'default'"
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
  static get events() {
    return [{
        "method": "optionSelected",
        "name": "optionSelected",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "optionChecked",
        "name": "optionChecked",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
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
      },
      "toMark": {
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
      "markOff": {
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
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "typeOption",
        "methodName": "changeSelectionType"
      }];
  }
}
