import { h } from '@stencil/core';
export class BdsStep {
  constructor() {
    this.last = false;
    this.completed = false;
    this.active = false;
    this.disabled = false;
    this.index = 0;
    this.pointer = false;
    this.dataTest = null;
  }
  render() {
    return (h("div", { class: "step" }, h("div", { class: {
        step__content: true,
        'step__content--active': this.active,
        'step__content--completed': this.completed,
        'step__content--disabled': this.disabled,
        'step__content--pointer': this.pointer,
        'step--last': this.last,
      }, "data-test": this.dataTest }, h("div", { class: {
        step__content__ellipse: true,
        'step__content__ellipse--active': this.active,
        'step__content__ellipse--completed': this.completed,
        'step__content__ellipse--disabled': this.disabled,
      } }, this.completed && h("bds-icon", { name: "true" }), !this.completed && h("bds-typo", null, this.index + 1)), h("bds-typo", { variant: "fs-16", class: {
        step__content__text: true,
        'step__content__text--completed': this.completed && !this.active,
        'step__content__text--active': this.active,
        'step__content__text--disabled': this.disabled,
      }, bold: this.active ? 'bold' : 'regular' }, h("slot", null)))));
  }
  static get is() { return "bds-step"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["step.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["step.css"]
    };
  }
  static get properties() {
    return {
      "last": {
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
          "text": "Used to define the last step component on the list"
        },
        "attribute": "last",
        "reflect": false,
        "defaultValue": "false"
      },
      "completed": {
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
          "text": "Used to complete the step"
        },
        "attribute": "completed",
        "reflect": false,
        "defaultValue": "false"
      },
      "active": {
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
          "text": "Used to set the step as active"
        },
        "attribute": "active",
        "reflect": false,
        "defaultValue": "false"
      },
      "disabled": {
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
          "text": "Used to set the step as disabled"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "index": {
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
          "text": "Used to set the index of the steps"
        },
        "attribute": "index",
        "reflect": false,
        "defaultValue": "0"
      },
      "pointer": {
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
          "text": "Used to set cursor pointer on the step (useful to allow clicks on the steps)"
        },
        "attribute": "pointer",
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
  static get elementRef() { return "el"; }
}
