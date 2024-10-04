import { h } from '@stencil/core';
export class Accordion {
  constructor() {
    this.accGroup = null;
    this.accheaders = null;
    this.accBodies = null;
    this.isOpen = false;
    this.numberElement = null;
    this.condition = false;
    this.startOpen = false;
    this.divisor = true;
  }
  async toggle() {
    this.isOpen = !this.isOpen;
    this.bdsToggle.emit({ value: this.isOpen });
  }
  async open() {
    var _a, _b;
    (_a = this.accheaders) === null || _a === void 0 ? void 0 : _a.open();
    (_b = this.accBodies) === null || _b === void 0 ? void 0 : _b.open();
    this.isOpen = true;
  }
  async close() {
    var _a, _b;
    (_a = this.accheaders) === null || _a === void 0 ? void 0 : _a.close();
    (_b = this.accBodies) === null || _b === void 0 ? void 0 : _b.close();
    this.isOpen = false;
  }
  async notStart() {
    this.startOpen = false;
  }
  async reciveNumber(number) {
    this.numberElement = number;
  }
  isOpenChanged(value) {
    var _a, _b, _c, _d, _e;
    if (value) {
      if (this.accGroup.collapse == 'single' && this.condition === false) {
        (_a = this.accGroup) === null || _a === void 0 ? void 0 : _a.closeAll(this.numberElement);
      }
      (_b = this.accheaders) === null || _b === void 0 ? void 0 : _b.open();
      (_c = this.accBodies) === null || _c === void 0 ? void 0 : _c.open();
      this.bdsAccordionOpen.emit();
    }
    else {
      (_d = this.accheaders) === null || _d === void 0 ? void 0 : _d.close();
      (_e = this.accBodies) === null || _e === void 0 ? void 0 : _e.close();
      this.bdsAccordionClose.emit();
    }
    this.condition = false;
  }
  componentWillLoad() {
    this.accGroup =
      this.element.parentElement.tagName == 'BDS-ACCORDION-GROUP' &&
        this.element.parentElement;
    this.accheaders = this.element.children[0];
    this.accBodies = this.element.children[1];
    // Passar a prop divisor para o AccordionBody
    const accordionBody = this.element.querySelector('bds-accordion-body');
    if (accordionBody) {
      accordionBody.divisor(this.divisor);
    }
    if (this.startOpen === true) {
      this.condition = true;
      this.isOpen = true;
    }
  }
  render() {
    return (h("div", { class: "accordion_group" }, h("slot", null)));
  }
  static get is() { return "bds-accordion"; }
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
      "startOpen": {
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
        "attribute": "start-open",
        "reflect": false,
        "defaultValue": "false"
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
  static get states() {
    return {
      "isOpen": {},
      "numberElement": {},
      "condition": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsToggle",
        "name": "bdsToggle",
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
        "method": "bdsAccordionOpen",
        "name": "bdsAccordionOpen",
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
        "method": "bdsAccordionClose",
        "name": "bdsAccordionClose",
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
      "notStart": {
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
      "reciveNumber": {
        "complexType": {
          "signature": "(number: any) => Promise<void>",
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
        "propName": "isOpen",
        "methodName": "isOpenChanged"
      }];
  }
}
