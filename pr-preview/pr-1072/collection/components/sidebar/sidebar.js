import { h } from '@stencil/core';
export class Sidebar {
  constructor() {
    this.listiner = (event) => {
      if (event.key == 'Escape' && this.type !== 'fixed') {
        this.isOpen = false;
      }
    };
    this.onClickCloseButtom = () => {
      this.isOpen = false;
    };
    this.InnerSpacing = 0;
    this.isOpen = this.type === 'fixed' ? true : false;
    this.sidebarPosition = 'left';
    this.type = 'over';
    this.margin = true;
    this.width = 360;
    this.dtOutzone = null;
    this.dtButtonClose = null;
    this.background = 'surface-2';
  }
  async toggle() {
    this.isOpen = !this.isOpen;
  }
  isOpenChanged(newValue) {
    this.bdsToggle.emit({ value: newValue });
    if (newValue === true) {
      document.addEventListener('keyup', this.listiner, false);
    }
    else {
      document.removeEventListener('keyup', this.listiner, false);
    }
  }
  componentWillLoad() {
    this.hasFooterSlot = !!this.hostElement.querySelector('[slot="footer"]');
    this.hasHeaderSlot = !!this.hostElement.querySelector('[slot="header"]');
  }
  render() {
    return (h("div", { class: {
        sidebar_dialog: true,
        is_open: this.isOpen,
        [`type_${this.type}`]: true,
      } }, this.type === 'over' ? (h("div", { class: { outzone: true }, onClick: () => this.onClickCloseButtom(), "data-test": this.dtOutzone })) : (''), h("div", { class: {
        sidebar: true,
        is_open: this.isOpen,
        [`type_${this.type}`]: true,
        [`position_${this.sidebarPosition}`]: true,
        [`background_${this.background}`]: true,
      }, style: { width: `${this.width < 144 ? 144 : this.width}px` } }, this.hasHeaderSlot && (h("div", { class: { header: true } }, h("div", { class: { content: true } }, h("slot", { name: "header" })), this.type === 'fixed' ? ('') : (h("bds-button-icon", { class: {
        closeButton: true,
      }, icon: "close", size: "short", variant: "secondary", onClick: () => this.onClickCloseButtom(), dataTest: this.dtButtonClose })))), h("div", { class: { body: true } }, h("div", { class: { content: true, element_scrolled: true, margin: this.margin } }, h("slot", { name: "body" }))), this.hasFooterSlot && (h("div", { class: { footer: true } }, h("div", { class: { content: true } }, h("slot", { name: "footer" })))))));
  }
  static get is() { return "bds-sidebar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["sidebar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["sidebar.css"]
    };
  }
  static get properties() {
    return {
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
          "text": ";\nisOpen. Used to open sidebar."
        },
        "attribute": "is-open",
        "reflect": true,
        "defaultValue": "this.type === 'fixed' ? true : false"
      },
      "sidebarPosition": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "sidebarPosition",
          "resolved": "\"left\" | \"right\"",
          "references": {
            "sidebarPosition": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "sidebar position. Used to position the sidebar. Either on the left or on the right."
        },
        "attribute": "sidebar-position",
        "reflect": false,
        "defaultValue": "'left'"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "sidebarType",
          "resolved": "\"fixed\" | \"over\"",
          "references": {
            "sidebarType": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "sidebar type. Used to define how open."
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'over'"
      },
      "margin": {
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
          "text": "If true, a lateral margin will apear in the content."
        },
        "attribute": "margin",
        "reflect": false,
        "defaultValue": "true"
      },
      "width": {
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
          "text": "Width, number to define sidebar width."
        },
        "attribute": "width",
        "reflect": false,
        "defaultValue": "360"
      },
      "dtOutzone": {
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
          "text": "Data test is the prop to specifically test the component action object.\ndtOutzone is the data-test to button close."
        },
        "attribute": "dt-outzone",
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
      },
      "background": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "sidebarBackground",
          "resolved": "\"surface-1\" | \"surface-2\" | \"surface-3\" | \"surface-4\"",
          "references": {
            "sidebarBackground": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Width, number to define sidebar width."
        },
        "attribute": "background",
        "reflect": false,
        "defaultValue": "'surface-2'"
      }
    };
  }
  static get states() {
    return {
      "InnerSpacing": {}
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
          "text": "Emitted when the isOpen has changed."
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
      }
    };
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "isOpen",
        "methodName": "isOpenChanged"
      }];
  }
}
