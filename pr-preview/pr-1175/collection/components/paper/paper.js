import { Host, h } from '@stencil/core';
export class Paper {
  constructor() {
    this.hasBorder = true;
    this.constElevation = undefined;
    this.elevation = 'static';
    this.dataTest = null;
    this.border = false;
    this.height = null;
    this.width = null;
    this.bgColor = 'surface-1';
    this.borderColor = null;
  }
  componentWillLoad() {
    this.border === true ? (this.hasBorder = false) : (this.hasBorder = true);
  }
  render() {
    return (h(Host, { class: {
        [`paper__elevation--${this.elevation}`]: this.hasBorder,
        border: this.border,
        [`bg-${this.bgColor}`]: true,
        [`border-${this.borderColor}`]: true,
      }, style: { height: `${this.height}`, width: `${this.width}` } }, h("div", { class: "paper__display", "data-test": this.dataTest }, h("slot", null))));
  }
  static get is() { return "bds-paper"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["paper.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["paper.css"]
    };
  }
  static get properties() {
    return {
      "elevation": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "PaperElevation",
          "resolved": "\"none\" | \"primary\" | \"secondary\" | \"static\"",
          "references": {
            "PaperElevation": {
              "location": "import",
              "path": "./paper-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Size. Entered as one of the size. Can be one of:\n'static', 'primary', 'secondary';"
        },
        "attribute": "elevation",
        "reflect": true,
        "defaultValue": "'static'"
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
      "border": {
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
          "text": "Prop for set the border of the component."
        },
        "attribute": "border",
        "reflect": false,
        "defaultValue": "false"
      },
      "height": {
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
          "text": "Prop for set the height of the component."
        },
        "attribute": "height",
        "reflect": false,
        "defaultValue": "null"
      },
      "width": {
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
          "text": "Prop for set the width of the component."
        },
        "attribute": "width",
        "reflect": false,
        "defaultValue": "null"
      },
      "bgColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "PaperBackground",
          "resolved": "\"surface-0\" | \"surface-1\" | \"surface-2\" | \"surface-3\" | \"surface-4\"",
          "references": {
            "PaperBackground": {
              "location": "import",
              "path": "./paper-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Prop for set the background color."
        },
        "attribute": "bg-color",
        "reflect": false,
        "defaultValue": "'surface-1'"
      },
      "borderColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BorderColor",
          "resolved": "\"border-1\" | \"border-2\" | \"delete\" | \"error\" | \"negative\" | \"positive\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
          "references": {
            "BorderColor": {
              "location": "import",
              "path": "./paper-interface"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Prop for set the border color."
        },
        "attribute": "border-color",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
  static get states() {
    return {
      "hasBorder": {},
      "constElevation": {}
    };
  }
}
