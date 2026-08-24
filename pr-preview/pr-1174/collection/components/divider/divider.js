import { h, Host } from '@stencil/core';
export class BdsDivider {
  constructor() {
    this.styleType = 'solid';
    this.orientation = 'horizontal';
    this.color = 'divider-1';
  }
  render() {
    const orientationClass = `${this.orientation} ${this.styleType} color-${this.color} `;
    return (h(Host, { class: orientationClass }, h("hr", { class: `${this.orientation} ${this.styleType} color-${this.color}` })));
  }
  static get is() { return "bds-divider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["divider.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["divider.css"]
    };
  }
  static get properties() {
    return {
      "styleType": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'solid' | 'dotted' | 'dashed'",
          "resolved": "\"dashed\" | \"dotted\" | \"solid\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "O tipo de estilo da linha: s\u00F3lida, pontilhada, tracejada"
        },
        "attribute": "style-type",
        "reflect": false,
        "defaultValue": "'solid'"
      },
      "orientation": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'horizontal' | 'vertical'",
          "resolved": "\"horizontal\" | \"vertical\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Define se o divider deve ser exibido horizontalmente ou verticalmente"
        },
        "attribute": "orientation",
        "reflect": false,
        "defaultValue": "'horizontal'"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'divider-1' | 'divider-2' | 'divider-3'",
          "resolved": "\"divider-1\" | \"divider-2\" | \"divider-3\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Cor da linha, aceitando qualquer valor v\u00E1lido em CSS (hex, rgb, nome da cor)"
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'divider-1'"
      }
    };
  }
}
