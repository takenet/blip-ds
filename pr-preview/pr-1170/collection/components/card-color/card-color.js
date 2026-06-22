import { h } from '@stencil/core';
export class CardColor {
  constructor() {
    this.handleCopyVariable = (variable) => {
      const value = `$${variable}`;
      navigator.clipboard.writeText(value);
      this.showMessage = true;
      // Ocultar a mensagem após 3 segundos
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
    };
    this.showMessage = false;
    this.name = undefined;
    this.hex = undefined;
    this.gradient = false;
    this.variable = undefined;
    this.lightText = false;
  }
  render() {
    return (h("bds-paper", { class: "card", width: "240px", height: "140px", onClick: () => this.handleCopyVariable(this.variable) }, h("bds-grid", { direction: "column", height: "100%" }, h("bds-grid", { height: "70%", xxs: "12", class: {
        'card-color--color': true,
        [`card-color--${this.variable}`]: true,
      } }), h("bds-grid", { "justify-content": "center", "align-items": "center", height: "30%" }, !this.showMessage ? (h("bds-typo", { class: "card-text", variant: "fs-14", bold: "bold" }, "$", this.variable)) : (h("bds-typo", { class: "card-text-copie", variant: "fs-14", bold: "bold" }, "Cor copiada!"))))));
  }
  static get is() { return "bds-card-color"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["card-color.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["card-color.css"]
    };
  }
  static get properties() {
    return {
      "name": {
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
          "text": "Specifies name color, use Figma docs in Blip DS."
        },
        "attribute": "name",
        "reflect": false
      },
      "hex": {
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
          "text": "Specifies HEX color, use Figma docs in Blip DS."
        },
        "attribute": "hex",
        "reflect": false
      },
      "gradient": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies if the hex is a linear gradient"
        },
        "attribute": "gradient",
        "reflect": false,
        "defaultValue": "false"
      },
      "variable": {
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
          "text": "Specifies variabel sass color, _variables.scss."
        },
        "attribute": "variable",
        "reflect": false
      },
      "lightText": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If true, the text will be white"
        },
        "attribute": "light-text",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "showMessage": {}
    };
  }
}
