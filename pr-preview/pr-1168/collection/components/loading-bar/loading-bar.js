import { Host, h } from '@stencil/core';
export class BdsloadingBar {
  constructor() {
    this.percent = 0;
    this.size = 'default';
    this.text = '';
    this.dataTest = null;
  }
  render() {
    const styles = { width: `${this.percent ? (this.percent > 100 ? 100 : this.percent) : 0}%` };
    return (h(Host, null, h("div", { class: { loading_bar: true, [`size_${this.size}`]: true }, "data-test": this.dataTest }, h("div", { class: { bar_behind: true } }, h("div", { class: { loading: true }, style: styles }, h("div", { class: "loader" }))))));
  }
  static get is() { return "bds-loading-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["loading-bar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["loading-bar.css"]
    };
  }
  static get properties() {
    return {
      "percent": {
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
          "text": "Percent, property to enter the loading bar status percentage value."
        },
        "attribute": "percent",
        "reflect": false,
        "defaultValue": "0"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "loadingBarSize",
          "resolved": "\"default\" | \"small\"",
          "references": {
            "loadingBarSize": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Size, property to define size of component."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'default'"
      },
      "text": {
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
          "text": "Text, property to enable the bar info text."
        },
        "attribute": "text",
        "reflect": false,
        "defaultValue": "''"
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
