import { h, Host } from '@stencil/core';
export class ListItemContent {
  constructor() {
    this.direction = 'column';
    this.justifyContent = 'flex-start';
    this.flexWrap = 'wrap';
    this.alignItems = 'flex-start';
    this.gap = undefined;
  }
  render() {
    return (h(Host, { class: {
        list_item_content: true,
      } }, h("bds-grid", { direction: this.direction, flexWrap: this.flexWrap, justifyContent: this.justifyContent, alignItems: this.alignItems, gap: this.gap }, h("slot", null))));
  }
  static get is() { return "bds-list-item-content"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["list.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["list.css"]
    };
  }
  static get properties() {
    return {
      "direction": {
        "type": "string",
        "mutable": false,
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
          "text": ""
        },
        "attribute": "direction",
        "reflect": false,
        "defaultValue": "'column'"
      },
      "justifyContent": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "justifyContent",
          "resolved": "\"center\" | \"flex-end\" | \"flex-start\" | \"space-around\" | \"space-between\" | \"space-evenly\" | \"stretch\"",
          "references": {
            "justifyContent": {
              "location": "import",
              "path": "../grid/grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "justify-content",
        "reflect": false,
        "defaultValue": "'flex-start'"
      },
      "flexWrap": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "flexWrap",
          "resolved": "\"wrap\" | \"wrap-reverse\"",
          "references": {
            "flexWrap": {
              "location": "import",
              "path": "../grid/grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "flex-wrap",
        "reflect": false,
        "defaultValue": "'wrap'"
      },
      "alignItems": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "alignItems",
          "resolved": "\"baseline\" | \"center\" | \"flex-end\" | \"flex-start\" | \"stretch\"",
          "references": {
            "alignItems": {
              "location": "import",
              "path": "../grid/grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "align-items",
        "reflect": false,
        "defaultValue": "'flex-start'"
      },
      "gap": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "gap",
          "resolved": "\"1\" | \"10\" | \"11\" | \"12\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\" | \"half\" | \"none\"",
          "references": {
            "gap": {
              "location": "import",
              "path": "../grid/grid-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "gap",
        "reflect": false
      }
    };
  }
  static get elementRef() { return "hostElement"; }
}
