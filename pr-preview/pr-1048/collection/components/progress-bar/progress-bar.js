import { Host, h } from '@stencil/core';
export class BdsProgressBar {
  constructor() {
    this.percent = 0;
    this.size = 'default';
    this.color = 'default';
    this.text = '';
    this.dataTest = null;
  }
  render() {
    const styles = { width: `${this.percent ? (this.percent > 100 ? 100 : this.percent) : 0}%` };
    return (h(Host, null, h("div", { class: { progress_bar: true, [`size_${this.size}`]: true }, "data-test": this.dataTest }, h("div", { class: { bar_behind: true } }, h("div", { class: { progress: true, [`color_${this.color}`]: true }, style: styles }))), this.text && (h("div", { class: { typo_progress: true } }, h("bds-typo", { variant: "fs-14" }, this.text)))));
  }
  static get is() { return "bds-progress-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["progress-bar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["progress-bar.css"]
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
          "text": "Percent, property to enter the progress bar status percentage value."
        },
        "attribute": "percent",
        "reflect": false,
        "defaultValue": "0"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "progressBarSize",
          "resolved": "\"default\" | \"small\"",
          "references": {
            "progressBarSize": {
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
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "progressBarColor",
          "resolved": "\"default\" | \"information\" | \"positive\" | \"warning\"",
          "references": {
            "progressBarColor": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Text, property to define status of component."
        },
        "attribute": "color",
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
