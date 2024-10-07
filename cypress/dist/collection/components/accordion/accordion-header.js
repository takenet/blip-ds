import { h } from '@stencil/core';
export class AccordionHeader {
  constructor() {
    this.accordionElement = null;
    this.toggleHeader = () => {
      var _a, _b;
      if (this.isOpen) {
        (_a = this.accordionElement) === null || _a === void 0 ? void 0 : _a.close();
      }
      else {
        (_b = this.accordionElement) === null || _b === void 0 ? void 0 : _b.open();
      }
    };
    this.isOpen = false;
    this.btToggleIsfocus = false;
    this.numberElement = null;
    this.accordionTitle = null;
    this.icon = null;
    this.avatarName = null;
    this.avatarThumb = null;
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
  componentWillRender() {
    this.accordionElement = this.element.parentElement;
  }
  handleKeyDown(event) {
    var _a, _b;
    if (event.key == 'Enter') {
      if (this.isOpen) {
        (_a = this.accordionElement) === null || _a === void 0 ? void 0 : _a.close();
      }
      else {
        (_b = this.accordionElement) === null || _b === void 0 ? void 0 : _b.open();
      }
    }
  }
  render() {
    return (h("div", { onClick: this.toggleHeader, class: { accordion_header: true }, "data-test": this.dataTest }, this.avatarName || this.avatarThumb ? (h("bds-avatar", { name: this.avatarName, thumbnail: this.avatarThumb, size: "extra-small" })) : (this.icon && h("bds-icon", { size: "x-large", name: this.icon, color: "inherit" })), this.accordionTitle && (h("bds-typo", { bold: "bold", variant: "fs-16", "line-height": "double" }, this.accordionTitle)), h("slot", null), h("bds-icon", { class: {
        accButton: true,
        accButton__isopen: this.isOpen,
        accButton__isfocus: this.btToggleIsfocus,
      }, size: "x-large", name: "arrow-down", color: "inherit", tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) })));
  }
  static get is() { return "bds-accordion-header"; }
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
      "accordionTitle": {
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
          "text": "Accordion Title. Used to add title in header accordion."
        },
        "attribute": "accordion-title",
        "reflect": false,
        "defaultValue": "null"
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
          "text": "Icon. Used to add icon in header accordion."
        },
        "attribute": "icon",
        "reflect": false,
        "defaultValue": "null"
      },
      "avatarName": {
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
          "text": "Avatar Name. Used to add avatar in header accordion."
        },
        "attribute": "avatar-name",
        "reflect": false,
        "defaultValue": "null"
      },
      "avatarThumb": {
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
          "text": "Avatar Thumb. Used to add avatar in header accordion."
        },
        "attribute": "avatar-thumb",
        "reflect": false,
        "defaultValue": "null"
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
      "isOpen": {},
      "btToggleIsfocus": {},
      "numberElement": {}
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
      }
    };
  }
  static get elementRef() { return "element"; }
}
