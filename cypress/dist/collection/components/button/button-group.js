import { h, Host } from '@stencil/core';
export class ButtonGroup {
  constructor() {
    this.activeIndexes = new Set();
    this.size = 'medium';
    this.direction = 'row';
    this.color = 'primary';
    this.multiple = false;
  }
  componentDidLoad() {
    this.buttons = this.el.getElementsByTagName('bds-button');
    this.setupButtons();
  }
  componentDidUpdate() {
    this.setupButtons();
  }
  handlePropChanges() {
    // Re-setup buttons when props change
    this.setupButtons();
  }
  setupButtons() {
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];
      button.setAttribute('data-index', i.toString());
      button.addEventListener('click', () => this.selectButton(i));
      button.setVariant('outline');
      this.updateButtonPosition(i);
      this.updateButtonDirection(i);
      this.updateButtonSize(i);
      this.updateButtonColor(i);
    }
  }
  async activateButton(index) {
    if (index >= 0 && index < this.buttons.length) {
      this.selectButton(index);
    }
  }
  selectButton(index) {
    if (this.multiple) {
      if (this.activeIndexes.has(index)) {
        this.activeIndexes.delete(index);
      }
      else {
        this.activeIndexes.add(index);
      }
    }
    else {
      if (this.activeIndexes.has(index)) {
        this.activeIndexes.clear();
      }
      else {
        this.activeIndexes.clear();
        this.activeIndexes.add(index);
      }
    }
    this.updateButtonStates(index);
  }
  updateButtonStates(clickedIndex) {
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];
      if (this.activeIndexes.has(i)) {
        button.isActive(true);
        button.setVariant('solid');
        button.classList.add('active');
      }
      else {
        button.isActive(false);
        button.setVariant('outline');
        button.classList.remove('active');
      }
      if (i === clickedIndex) {
        this.buttonSelected.emit(button.id);
      }
    }
  }
  updateButtonPosition(index) {
    const button = this.buttons[index];
    if (index === 0) {
      button.setPosition('first');
    }
    else if (index === this.buttons.length - 1) {
      button.setPosition('last');
    }
    else {
      button.setPosition('middle');
    }
  }
  updateButtonDirection(index) {
    const button = this.buttons[index];
    this.direction === 'row' ? button.setDirection('row') : button.setDirection('column');
  }
  updateButtonSize(index) {
    const button = this.buttons[index];
    this.size === 'medium' ? button.setSize('medium') : button.setSize('large');
  }
  updateButtonColor(index) {
    const button = this.buttons[index];
    button.setColor(this.color);
  }
  render() {
    return (h(Host, { class: "button_group" }, h("bds-grid", { direction: this.direction }, h("slot", null))));
  }
  static get is() { return "bds-button-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["button-group.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["button-group.css"]
    };
  }
  static get properties() {
    return {
      "size": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "ButtonSize",
          "resolved": "\"large\" | \"medium\" | \"short\" | \"standard\" | \"tall\"",
          "references": {
            "ButtonSize": {
              "location": "import",
              "path": "./button"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Size of the buttons. Can be one of:\r\n'medium', 'large'."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'medium'"
      },
      "direction": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "direction",
          "resolved": "\"column\" | \"column-reverse\" | \"row\" | \"row-reverse\"",
          "references": {
            "direction": {
              "location": "import",
              "path": "../grid/grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Direction of the button group layout. Can be one of:\r\n'row', 'column'."
        },
        "attribute": "direction",
        "reflect": false,
        "defaultValue": "'row'"
      },
      "color": {
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
          "text": "Color scheme for the buttons. Default is 'primary'."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'primary'"
      },
      "multiple": {
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
          "text": "Allows multiple buttons to be selected simultaneously if true."
        },
        "attribute": "multiple",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "activeIndexes": {}
    };
  }
  static get events() {
    return [{
        "method": "buttonSelected",
        "name": "buttonSelected",
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
      "activateButton": {
        "complexType": {
          "signature": "(index: number) => Promise<void>",
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
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "size",
        "methodName": "handlePropChanges"
      }, {
        "propName": "direction",
        "methodName": "handlePropChanges"
      }, {
        "propName": "color",
        "methodName": "handlePropChanges"
      }, {
        "propName": "multiple",
        "methodName": "handlePropChanges"
      }];
  }
}
