import { h, Host } from '@stencil/core';
export class Badge {
  constructor() {
    this.type = 'status';
    this.color = 'system';
    this.shape = 'circle';
    this.icon = null;
    this.number = undefined;
    this.animation = false;
    this.dataTest = null;
  }
  componentWillLoad() {
    if (this.icon === null && this.number) {
      this.type = 'number';
    }
    else if (!this.number && this.icon) {
      this.type = 'icon';
    }
    else if (this.number && this.icon) {
      this.type = 'number';
    }
    else if (this.number === 0) {
      this.type = 'empty';
    }
  }
  numberChanged(newNumber) {
    if (newNumber === 0) {
      this.type = 'empty';
    }
    else if (this.icon === null && newNumber !== null) {
      this.type = 'number';
    }
  }
  render() {
    return (h(Host, null, h("div", { class: {
        chip_badge: true,
        chip_size: this.number !== 0 ? true : false,
        [`chip_badge--${this.shape}`]: true,
        [`chip_badge--${this.color}`]: true,
      }, "data-test": this.dataTest }, this.type === 'status' && (h("div", { class: {
        status: true,
        [`status--${this.shape}`]: true,
        [`color--${this.color}`]: true,
        [`status--circle-${this.animation}`]: true,
      } })), this.type === 'icon' && (h("div", { class: { icon: true, [`icon--${this.shape}`]: true } }, h("div", { class: { [`color--${this.color}`]: true, trim: true, [`trim-${this.animation}`]: true } }), h("bds-icon", { size: "xxx-small", name: this.icon }))), this.type === 'number' && (h("div", { class: {
        number: true,
        [`color--${this.color}`]: true,
        [`number--${this.animation}`]: true,
      } }, h("bds-typo", { class: "number_text", variant: "fs-12", bold: "bold", margin: false }, this.number >= 999 ? '999+' : this.number))), this.type === 'empty' && (h("div", { class: {
        empty: true,
        [`color--${this.color}`]: true,
        [`empty--${this.shape}`]: true,
        [`empty--${this.animation}`]: true,
      } })))));
  }
  static get is() { return "bds-badge"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["badge.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["badge.css"]
    };
  }
  static get properties() {
    return {
      "color": {
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
          "text": "Set the color of the component."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'system'"
      },
      "shape": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Shape",
          "resolved": "\"circle\" | \"polygon\" | \"square\" | \"triangle\" | \"triangle-reverse\"",
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
          "text": "Set the shape of the component."
        },
        "attribute": "shape",
        "reflect": false,
        "defaultValue": "'circle'"
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
          "text": "Set witch icon will be render inside the component."
        },
        "attribute": "icon",
        "reflect": false,
        "defaultValue": "null"
      },
      "number": {
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
          "text": "Set the text in shape circle. Is just alow numbers, but if the number pass 999 a symbol '+' will be render."
        },
        "attribute": "number",
        "reflect": false
      },
      "animation": {
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
          "text": "If true, actived the pulse animation."
        },
        "attribute": "animation",
        "reflect": false,
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
  static get states() {
    return {
      "type": {}
    };
  }
  static get watchers() {
    return [{
        "propName": "number",
        "methodName": "numberChanged"
      }];
  }
}
