import { h } from '@stencil/core';
export class AccordionGroup {
  constructor() {
    this.accordionsElement = null;
    this.collapse = 'single';
    this.divisor = true;
  }
  async closeAll(actNumber) {
    this.bdsAccordionCloseAll.emit();
    for (let i = 0; i < this.accordionsElement.length; i++) {
      if (this.collapse != 'multiple') {
        if (actNumber != i)
          this.accordionsElement[i].close();
      }
      else {
        this.accordionsElement[i].close();
      }
    }
  }
  async openAll(actNumber) {
    this.bdsAccordionOpenAll.emit();
    for (let i = 0; i < this.accordionsElement.length; i++) {
      if (this.collapse != 'multiple') {
        if (actNumber != i)
          this.accordionsElement[i].open();
      }
      else {
        this.accordionsElement[i].open();
      }
    }
  }
  divisorChanged(newValue) {
    if (this.accordionsElement) {
      for (let i = 0; i < this.accordionsElement.length; i++) {
        this.accordionsElement[i].divisor = newValue; // Atualiza divisor nos filhos
      }
    }
  }
  componentWillRender() {
    this.accordionsElement = this.element.getElementsByTagName('bds-accordion');
    for (let i = 0; i < this.accordionsElement.length; i++) {
      this.accordionsElement[i].reciveNumber(i);
      this.accordionsElement[i].divisor = this.divisor;
    }
  }
  render() {
    return (h("div", { class: "accordion_group" }, h("slot", null)));
  }
  static get is() { return "bds-accordion-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["accordion.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["accordion.css"]
    };
  }
  static get properties() {
    return {
      "collapse": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "collapses",
          "resolved": "\"multiple\" | \"single\"",
          "references": {
            "collapses": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "collapse",
        "reflect": false,
        "defaultValue": "'single'"
      },
      "divisor": {
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
        "attribute": "divisor",
        "reflect": false,
        "defaultValue": "true"
      }
    };
  }
  static get events() {
    return [{
        "method": "bdsAccordionCloseAll",
        "name": "bdsAccordionCloseAll",
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
        "method": "bdsAccordionOpenAll",
        "name": "bdsAccordionOpenAll",
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
      "closeAll": {
        "complexType": {
          "signature": "(actNumber?: any) => Promise<void>",
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
      "openAll": {
        "complexType": {
          "signature": "(actNumber?: any) => Promise<void>",
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
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "divisor",
        "methodName": "divisorChanged"
      }];
  }
}
