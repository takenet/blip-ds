import { h, Host } from '@stencil/core';
export class BdsTabItem {
  constructor() {
    this.numberElement = null;
    this.label = null;
    this.icon = null;
    this.iconPosition = 'left';
    this.iconTheme = 'outline';
    this.badge = false;
    this.badgeShape = 'circle';
    this.badgeColor = 'system';
    this.badgeIcon = null;
    this.badgeAnimation = false;
    this.badgePosition = 'left';
    this.badgeNumber = null;
    this.disable = false;
    this.error = false;
    this.open = false;
    this.dataTest = null;
  }
  async reciveNumber(number) {
    this.numberElement = number;
  }
  disableChanged() {
    this.tabDisabled.emit({ item: this.numberElement, disable: this.disable });
  }
  render() {
    return (h(Host, { class: { [`is-open`]: this.disable === true ? false : this.open } }, h("div", { class: { tab_item: true }, "data-test": this.dataTest }, h("div", { class: { tab_item_content: true, [`tab_item_content--open`]: this.open } }, h("slot", null)))));
  }
  static get is() { return "bds-tab-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["tab-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["tab-item.css"]
    };
  }
  static get properties() {
    return {
      "numberElement": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Use to set number of tabItem."
        },
        "attribute": "number-element",
        "reflect": true,
        "defaultValue": "null"
      },
      "label": {
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
          "text": "The text to be shown at the Tab item."
        },
        "attribute": "label",
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
          "text": "The icon to be shown at the Tab item."
        },
        "attribute": "icon",
        "reflect": false,
        "defaultValue": "null"
      },
      "iconPosition": {
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
          "text": "The position of the icon at the Tab item ('left', 'right')."
        },
        "attribute": "icon-position",
        "reflect": false,
        "defaultValue": "'left'"
      },
      "iconTheme": {
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
          "text": "The theme of the icon at the Tab item ('solid', 'outline', 'emoji', 'logos')."
        },
        "attribute": "icon-theme",
        "reflect": false,
        "defaultValue": "'outline'"
      },
      "badge": {
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
          "text": "The shape of the badge to be shown at the Tab item ('circle', 'square', 'triangle', 'triangle-reverse', 'polygon')."
        },
        "attribute": "badge",
        "reflect": false,
        "defaultValue": "false"
      },
      "badgeShape": {
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
          "text": "The shape of the badge to be shown at the Tab item ('circle', 'square', 'triangle', 'triangle-reverse', 'polygon')."
        },
        "attribute": "badge-shape",
        "reflect": false,
        "defaultValue": "'circle'"
      },
      "badgeColor": {
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
          "text": "The color of the badge to be shown at the Tab item."
        },
        "attribute": "badge-color",
        "reflect": false,
        "defaultValue": "'system'"
      },
      "badgeIcon": {
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
          "text": "The icon to be shown inside the badge at the Tab item ('system', 'danger', 'warning', 'success', 'neutral')"
        },
        "attribute": "badge-icon",
        "reflect": false,
        "defaultValue": "null"
      },
      "badgeAnimation": {
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
          "text": "The animation of the badge to be shown at the Tab item."
        },
        "attribute": "badge-animation",
        "reflect": false,
        "defaultValue": "false"
      },
      "badgePosition": {
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
          "text": "The animation of the badge to be shown at the Tab item."
        },
        "attribute": "badge-position",
        "reflect": false,
        "defaultValue": "'left'"
      },
      "badgeNumber": {
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
          "text": "The number to be shown inside the badge at the Tab item."
        },
        "attribute": "badge-number",
        "reflect": false,
        "defaultValue": "null"
      },
      "disable": {
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
          "text": "Prop for disable the especific tab."
        },
        "attribute": "disable",
        "reflect": true,
        "defaultValue": "false"
      },
      "error": {
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
          "text": "Prop to indicate an error state for the tab."
        },
        "attribute": "error",
        "reflect": false,
        "defaultValue": "false"
      },
      "open": {
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
          "text": "Used to open/close the Tab item."
        },
        "attribute": "open",
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
        "method": "tabDisabled",
        "name": "tabDisabled",
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
  static get watchers() {
    return [{
        "propName": "disable",
        "methodName": "disableChanged"
      }];
  }
}
