import { h } from '@stencil/core';
export class Tooltip {
  constructor() {
    this.isMouseOver = false;
    this.textVerify = undefined;
    this.maxWidtTooltip = undefined;
    this.tooltipText = 'Tooltip';
    this.disabled = false;
    this.position = 'left-center';
    this.maxWidth = '320px';
    this.dataTest = null;
  }
  /**
   * Method for change the visibility of tooltip.
   */
  async visible() {
    this.isMouseOver = true;
  }
  /**
   * Method for change the visibility of tooltip.
   */
  async invisible() {
    this.isMouseOver = false;
  }
  setVisibility(value) {
    if (this.disabled) {
      this.isMouseOver = false;
      return;
    }
    this.isMouseOver = value;
  }
  componentWillLoad() {
    this.textVerify = this.tooltipText ? this.tooltipText.replace(/<br>/gi, '\r\n') : '';
    this.maxWidtTooltip = this.maxWidth;
  }
  tooltipTextChanged() {
    this.textVerify = this.tooltipText ? this.tooltipText.replace(/<br>/gi, '\r\n') : '';
  }
  maxWidthChanged() {
    this.maxWidtTooltip = this.maxWidth;
  }
  render() {
    const styleTooltip = {
      maxWidth: this.maxWidtTooltip,
    };
    return (h("div", { class: "tooltip__wrapper" }, h("div", { onMouseEnter: () => this.setVisibility(true), onMouseLeave: () => this.setVisibility(false), "data-test": this.dataTest }, h("slot", null)), h("div", { class: {
        tooltip__tip: true,
        [`tooltip__tip--${this.position}`]: true,
        'tooltip__tip--visible': this.isMouseOver,
      }, style: styleTooltip }, h("div", { class: { tooltip__tip__text: true } }, h("pre", null, h("bds-typo", { class: "text", "no-wrap": "false", variant: "fs-12" }, this.textVerify))))));
  }
  static get is() { return "bds-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["tooltip.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["tooltip.css"]
    };
  }
  static get properties() {
    return {
      "tooltipText": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Used to set tooltip text"
        },
        "attribute": "tooltip-text",
        "reflect": false,
        "defaultValue": "'Tooltip'"
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
          "text": "Used to disable tooltip when the button are avalible"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TooltipPostionType",
          "resolved": "\"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"left-bottom\" | \"left-center\" | \"left-top\" | \"right-bottom\" | \"right-center\" | \"right-top\" | \"top-center\" | \"top-left\" | \"top-right\"",
          "references": {
            "TooltipPostionType": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Used to set tooltip position"
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "'left-center'"
      },
      "maxWidth": {
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
          "text": "Used to set tooltip max width"
        },
        "attribute": "max-width",
        "reflect": false,
        "defaultValue": "'320px'"
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
      "isMouseOver": {},
      "textVerify": {},
      "maxWidtTooltip": {}
    };
  }
  static get methods() {
    return {
      "visible": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Method for change the visibility of tooltip.",
          "tags": []
        }
      },
      "invisible": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Method for change the visibility of tooltip.",
          "tags": []
        }
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "tooltipText",
        "methodName": "tooltipTextChanged"
      }, {
        "propName": "maxWidth",
        "methodName": "maxWidthChanged"
      }];
  }
}
