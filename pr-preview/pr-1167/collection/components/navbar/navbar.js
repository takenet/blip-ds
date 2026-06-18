import { h, Host } from '@stencil/core';
export class Navbar {
  constructor() {
    this.orientation = 'vertical';
    this.backgroundColor = 'surface-1';
    this.justifyContent = 'space-between';
    this.dataTest = null;
  }
  render() {
    return (h(Host, { class: { [`${this.orientation}`]: true } }, h("div", { class: {
        navbar: true,
        [`navbar__justify-content__${this.justifyContent}`]: true,
        [`navbar__orientation__${this.orientation}`]: true,
        [`navbar__background-color__${this.backgroundColor}`]: true,
      }, "data-test": this.dataTest }, h("slot", null))));
  }
  static get is() { return "bds-navbar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["navbar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["navbar.css"]
    };
  }
  static get properties() {
    return {
      "orientation": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "orientation",
          "resolved": "\"horizontal\" | \"vertical\"",
          "references": {
            "orientation": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Navbar orientation. Used to orientation the navbar. Either on the left or on the right."
        },
        "attribute": "orientation",
        "reflect": false,
        "defaultValue": "'vertical'"
      },
      "backgroundColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "navbarBackground",
          "resolved": "\"surface-1\" | \"surface-2\" | \"surface-3\"",
          "references": {
            "navbarBackground": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Width, number to define navbar width."
        },
        "attribute": "background-color",
        "reflect": false,
        "defaultValue": "'surface-1'"
      },
      "justifyContent": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "justifyContent",
          "resolved": "\"center\" | \"flex-end\" | \"flex-start\" | \"space-around\" | \"space-between\" | \"space-evenly\"",
          "references": {
            "justifyContent": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Justify Content. Used to align itens in navbar."
        },
        "attribute": "justify-content",
        "reflect": false,
        "defaultValue": "'space-between'"
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
  static get elementRef() { return "hostElement"; }
}
