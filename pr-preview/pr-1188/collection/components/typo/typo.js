import { h } from '@stencil/core';
export class Typo {
  constructor() {
    this.variant = 'fs-16';
    this.lineHeight = null;
    this.bold = null;
    this.italic = false;
    this.noWrap = false;
    this.paragraph = false;
    this.margin = true;
    this.tag = 'p';
    this.dataTest = null;
  }
  render() {
    const Element = this.tag;
    return (h(Element, { class: {
        typo: true,
        [`typo__variant--${this.variant}`]: true,
        [`typo__margin--${this.variant}`]: this.margin,
        'typo--no-wrap': this.noWrap,
        'typo--paragraph': this.paragraph,
        'typo--italic': this.italic,
        [`typo__line-height--${this.lineHeight}`]: !!this.lineHeight,
        [`typo__bold--${this.bold}`]: !!this.bold,
      }, part: "bds-typo__text", "data-test": this.dataTest }, h("slot", null)));
  }
  static get is() { return "bds-typo"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["typo.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["typo.css"]
    };
  }
  static get properties() {
    return {
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "FontSize",
          "resolved": "\"fs-10\" | \"fs-12\" | \"fs-14\" | \"fs-16\" | \"fs-20\" | \"fs-24\" | \"fs-32\" | \"fs-40\"",
          "references": {
            "FontSize": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Variant. Entered as one of the font size variant. Can be one of:\n'fs-10' ,'fs-12' ,'fs-14' ,'fs-16' ,'fs-20' ,'fs-24' ,'fs-32' ,'fs-40';"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'fs-16'"
      },
      "lineHeight": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "FontLineHeight",
          "resolved": "\"double\" | \"none\" | \"plus\" | \"simple\" | \"small\"",
          "references": {
            "FontLineHeight": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Line Height. Entered as one of the line hieght. Can be one of:\n'none', 'small', 'simple', 'plus', 'double'"
        },
        "attribute": "line-height",
        "reflect": false,
        "defaultValue": "null"
      },
      "bold": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Bold",
          "resolved": "\"bold\" | \"extra-bold\" | \"regular\" | \"semi-bold\"",
          "references": {
            "Bold": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Bold. Entered as one of the bold. Can be one of:\n'regular', 'semi-bold', 'bold', 'extra-bold';"
        },
        "attribute": "bold",
        "reflect": false,
        "defaultValue": "null"
      },
      "italic": {
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
          "text": "Added font style italic"
        },
        "attribute": "italic",
        "reflect": false,
        "defaultValue": "false"
      },
      "noWrap": {
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
          "text": "Added style no wrap"
        },
        "attribute": "no-wrap",
        "reflect": false,
        "defaultValue": "false"
      },
      "paragraph": {
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
          "text": "Tranform text in paragraph"
        },
        "attribute": "paragraph",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "If true, adds default margin values"
        },
        "attribute": "margin",
        "reflect": false,
        "defaultValue": "true"
      },
      "tag": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Tag",
          "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"p\" | \"span\"",
          "references": {
            "Tag": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Define element tag, must be used for acessibilty"
        },
        "attribute": "tag",
        "reflect": false,
        "defaultValue": "'p'"
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
}
