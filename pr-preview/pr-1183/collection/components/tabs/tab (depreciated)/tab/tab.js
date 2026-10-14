import { h, Host } from '@stencil/core';
export class Tab {
  constructor() {
    this.group = undefined;
    this.label = undefined;
    this.active = false;
    this.isActive = false;
  }
  handleTabChange(event) {
    this.isActive = event.detail == this.group;
  }
  async onClick() {
    this.bdsTabChange.emit(this.group);
  }
  render() {
    const bold = this.isActive ? 'bold' : 'regular';
    return (h(Host, { class: {
        'bds-tab': true,
        ['bds-tab--selected']: this.isActive,
      }, onClick: this.onClick.bind(this) }, h("div", { class: "bds-tab__text" }, h("bds-typo", { variant: "fs-16", bold: bold }, this.label))));
  }
  static get is() { return "bds-tab"; }
  static get originalStyleUrls() {
    return {
      "$": ["tab.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["tab.css"]
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
          "text": "Specifies the Tab group. Used to link it to the TabPanel."
        },
        "attribute": "group",
        "reflect": false
      },
      "label": {
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
          "text": "The text to be shown at the Tab"
        },
        "attribute": "label",
        "reflect": false
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Prop to control externally if a tab will be active by default"
        },
        "attribute": "active",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "isActive": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsTabChange",
        "name": "bdsTabChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event to emmit when the active tab should be updated"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
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
