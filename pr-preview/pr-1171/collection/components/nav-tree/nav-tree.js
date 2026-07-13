import { Host, h } from '@stencil/core';
export class NavTree {
  constructor() {
    this.itemsGroup = null;
    this.handler = () => {
      if (!this.loading && !this.disable) {
        this.isOpen = !this.isOpen;
      }
    };
    this.isOpenAftAnimation = false;
    this.navTreeChild = null;
    this.numberElement = null;
    this.collapse = 'single';
    this.isOpen = false;
    this.icon = null;
    this.text = undefined;
    this.secondaryText = null;
    this.dataTest = null;
    this.loading = false;
    this.disable = false;
  }
  async toggle() {
    if (!this.disable) {
      this.isOpen = !this.isOpen;
    }
  }
  async reciveNumber(number) {
    this.numberElement = number;
  }
  async open() {
    this.isOpen = true;
  }
  async close() {
    this.isOpen = false;
  }
  isOpenChanged(value) {
    this.bdsToogleChange.emit({ value: value, element: this.element });
    if (value) {
      if (this.itemsGroup.collapse == 'single') {
        this.itemsGroup?.closeAll(this.numberElement);
      }
    }
  }
  componentWillLoad() {
    this.itemsGroup =
      this.element.parentElement.tagName == 'BDS-NAV-TREE-GROUP' &&
        this.element.parentElement;
    this.navTreeChild = this.element.querySelector('bds-nav-tree-item') === null ? false : true;
  }
  handleKeyDown(event) {
    if (event.key == 'Enter' && !this.disable) {
      this.isOpen = !this.isOpen;
    }
  }
  render() {
    return (h(Host, null, h("div", { tabindex: "0", onKeyDown: this.handleKeyDown.bind(this), class: "focus" }, h("div", { class: {
        [`nav_main--disable`]: this.disable,
      } }, h("div", { onClick: this.handler, class: {
        nav_main: true,
        nav_main_active: this.isOpen,
        [`nav_main--loading`]: this.loading,
        [`nav_main--disable`]: this.disable,
      }, "data-test": this.dataTest, "aria-label": this.text + (this.secondaryText && `: ${this.secondaryText}`) }, this.loading ? (h("bds-loading-spinner", { size: "extra-small" })) : this.icon ? (h("bds-icon", { class: {
        [`icon-item`]: true,
        [`icon-item-active`]: this.isOpen,
      }, size: "medium", name: this.icon, color: "inherit", theme: "outline" })) : (''), h("div", { class: "nav_main_text" }, this.text && (h("bds-typo", { class: { ['title-item']: true, [`title-item--loading`]: this.loading }, variant: "fs-14", tag: "span", "line-height": "small", bold: this.isOpen ? 'bold' : 'semi-bold' }, this.text)), this.secondaryText && (h("bds-typo", { class: { ['subtitle-item']: true, [`subtitle-item--loading`]: this.loading }, variant: "fs-12", "line-height": "small", tag: "span", margin: false }, this.secondaryText))), h("div", { class: "nav_main_content" }, h("slot", { name: "header-content" })), this.navTreeChild && (h("bds-icon", { name: "arrow-down", class: {
        [`nav_main_arrow`]: true,
        [`nav_main_arrow_active`]: this.isOpen,
        [`nav_main_arrow--loading`]: this.loading,
      } }))))), h("div", { class: {
        accordion: true,
        accordion_open: this.isOpen && this.navTreeChild,
      } }, h("div", { class: { ['container']: true, [`container--disable`]: this.disable } }, h("slot", null)))));
  }
  static get is() { return "bds-nav-tree"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["nav-tree.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["nav-tree.css"]
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
          "text": "Focus Selected. Used to add title in header accordion."
        },
        "attribute": "collapse",
        "reflect": false,
        "defaultValue": "'single'"
      },
      "isOpen": {
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
          "text": "A prop for make the nav open."
        },
        "attribute": "is-open",
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
          "text": "Icon. Used to add icon in list item."
        },
        "attribute": "icon",
        "reflect": false,
        "defaultValue": "null"
      },
      "text": {
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
          "text": "Text. Used to insert a text in the display item."
        },
        "attribute": "text",
        "reflect": false
      },
      "secondaryText": {
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
          "text": "SecondaryText. Used to insert a secondaryText in the display item."
        },
        "attribute": "secondary-text",
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
      },
      "loading": {
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
          "text": "Loading state. Indicates if the component is in a loading state."
        },
        "attribute": "loading",
        "reflect": false,
        "defaultValue": "false"
      },
      "disable": {
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
          "text": "Disable state. Indicates if the component is disabled."
        },
        "attribute": "disable",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "isOpenAftAnimation": {},
      "navTreeChild": {},
      "numberElement": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsToogleChange",
        "name": "bdsToogleChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "When de open or close of component change, the event are dispache."
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
  static get watchers() {
    return [{
        "propName": "isOpen",
        "methodName": "isOpenChanged"
      }];
  }
}
