import { h } from '@stencil/core';
export class AccordionBody {
  constructor() {
    this.container = null;
    this.refContainer = (el) => {
      this.container = el;
    };
    this.isOpen = false;
    this.isOpenAftAnimation = false;
    this.heightContainer = undefined;
    this.numberElement = null;
    this.hasDivisor = true;
    this.dataTest = null;
  }
  async toggle() {
    this.isOpen = !this.isOpen;
  }
  async open() {
    this.isOpen = true;
  }
  async close() {
    this.isOpen = false;
  }
  async divisor(valor) {
    this.hasDivisor = valor;
  }
  isOpenChanged() {
    this.heightContainer = this.isOpen ? this.container.offsetHeight : 0;
    if (this.isOpen) {
      setTimeout(() => {
        this.isOpenAftAnimation = !this.isOpenAftAnimation;
      }, 500);
    }
    else {
      this.isOpenAftAnimation = !this.isOpenAftAnimation;
    }
  }
  render() {
    return (h("div", { class: {
        accordion_body: true,
        accordion_body_divisor: this.hasDivisor,
        accordion_body_isOpen: this.isOpenAftAnimation,
      }, style: { height: `${this.heightContainer}px` }, "data-test": this.dataTest }, h("div", { class: "container", ref: (el) => this.refContainer(el) }, h("slot", null))));
  }
  static get is() { return "bds-accordion-body"; }
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
      "isOpen": {},
      "isOpenAftAnimation": {},
      "heightContainer": {},
      "numberElement": {},
      "hasDivisor": {}
    };
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
      "open": {
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
      "close": {
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
      "divisor": {
        "complexType": {
          "signature": "(valor: any) => Promise<void>",
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
  static get watchers() {
    return [{
        "propName": "isOpen",
        "methodName": "isOpenChanged"
      }];
  }
}
