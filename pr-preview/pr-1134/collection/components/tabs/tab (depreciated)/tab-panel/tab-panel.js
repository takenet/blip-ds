import { h, Host } from '@stencil/core';
export class TabPanel {
  constructor() {
    this.group = undefined;
    this.isActive = false;
  }
  handleTabChange(event) {
    this.isActive = event.detail == this.group;
  }
  render() {
    return (h(Host, { class: {
        'bds-tab-panel': true,
        ['bds-tab-panel--selected']: this.isActive,
      } }, h("slot", null)));
  }
  static get is() { return "bds-tab-panel"; }
  static get originalStyleUrls() {
    return {
      "$": ["tab-panel.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["tab-panel.css"]
    };
  }
  static get properties() {
    return {
      "group": {
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
          "text": "Specifies the TabPanel group. Used to link it to the Tab."
        },
        "attribute": "group",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "isActive": {}
    };
  }
  static get listeners() {
    return [{
        "name": "bdsTabChange",
        "method": "handleTabChange",
        "target": "body",
        "capture": false,
        "passive": false
      }, {
        "name": "bdsTabInit",
        "method": "handleTabChange",
        "target": "body",
        "capture": false,
        "passive": false
      }];
  }
}
