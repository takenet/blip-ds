import { h, Host } from '@stencil/core';
export class Skeleton {
  constructor() {
    this.shape = 'square';
    this.height = '50px';
    this.width = '100%';
    this.dataTest = null;
  }
  render() {
    return (h(Host, { style: {
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        width: this.width,
        height: this.height,
        borderRadius: this.shape === 'circle' ? '50%' : '8px',
      } }, h("bds-grid", { xxs: "12", class: { skeleton: true, [`skeleton_shape--${this.shape}`]: true } }), h("div", { style: {
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: this.shape === 'circle' ? '50%' : '8px',
        overflow: 'hidden',
      }, "data-test": this.dataTest }, h("div", { class: "animation" }))));
  }
  static get is() { return "bds-skeleton"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["skeleton.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["skeleton.css"]
    };
  }
  static get properties() {
    return {
      "shape": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Shape",
          "resolved": "\"circle\" | \"square\"",
          "references": {
            "Shape": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "shape",
        "reflect": false,
        "defaultValue": "'square'"
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
          "text": ""
        },
        "attribute": "height",
        "reflect": false,
        "defaultValue": "'50px'"
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
          "text": ""
        },
        "attribute": "width",
        "reflect": false,
        "defaultValue": "'100%'"
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
