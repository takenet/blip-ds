import { Host, h, } from '@stencil/core';
export class Banner {
  constructor() {
    this._buttonClickHandler = () => {
      this.bdsBannerClose.emit();
      this.visible = false;
    };
    this.visible = true;
    this.bannerAlign = 'center';
    this.buttonClose = 'false';
    this.context = 'outside';
    this.variant = 'system';
    this.dtButtonClose = null;
  }
  async toggle() {
    this.visible = !this.visible;
  }
  render() {
    return (h(Host, { class: { banner: true, 'banner--hide': !this.visible } }, h("div", { class: {
        banner__holder: true,
        [`banner__holder--align--${this.bannerAlign}`]: true,
        [`banner__holder--${this.variant}`]: true,
        [`banner__holder--context--${this.context}`]: true,
      } }, h("div", { class: {
        banner__content: true,
      } }, this.variant === 'warning' && (h("bds-icon", { class: "icon_left", theme: "outline", size: "medium", name: "warning" })), this.variant === 'system' && (h("bds-icon", { class: "icon_left", theme: "outline", size: "medium", name: "info" })), this.variant === 'info' && (h("bds-icon", { class: "icon_left", theme: "outline", size: "medium", name: "message-ballon" })), this.variant === 'error' && (h("bds-icon", { class: "icon_left", theme: "outline", size: "medium", name: "error" })), this.variant === 'success' && (h("bds-icon", { class: "icon_left", theme: "outline", size: "medium", name: "checkball" })), h("div", { class: "slot" }, h("slot", null))), h("div", { class: {
        banner__action: true,
      } }, this.buttonClose === 'true' && (h("div", { class: "close", onClick: () => this._buttonClickHandler() }, h("bds-button-icon", { dataTest: this.dtButtonClose, icon: "close", size: "short", variant: "secondary" })))))));
  }
  static get is() { return "bds-banner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["banner.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["banner.css"]
    };
  }
  static get properties() {
    return {
      "bannerAlign": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BannerAlign",
          "resolved": "\"center\" | \"left\" | \"right\"",
          "references": {
            "BannerAlign": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set the banner aligment, it can be one of: 'center', 'right' or 'left'."
        },
        "attribute": "banner-align",
        "reflect": false,
        "defaultValue": "'center'"
      },
      "buttonClose": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonClose",
          "resolved": "\"false\" | \"true\"",
          "references": {
            "ButtonClose": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set if show up the close button."
        },
        "attribute": "button-close",
        "reflect": false,
        "defaultValue": "'false'"
      },
      "context": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Context",
          "resolved": "\"inside\" | \"outside\"",
          "references": {
            "Context": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set if the banner is external or internal."
        },
        "attribute": "context",
        "reflect": false,
        "defaultValue": "'outside'"
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BannerVariant",
          "resolved": "\"error\" | \"info\" | \"success\" | \"system\" | \"warning\"",
          "references": {
            "BannerVariant": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set the banner varient, it can be 'system' or 'warning'."
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'system'"
      },
      "dtButtonClose": {
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtButtonClose is the data-test to button close."
        },
        "attribute": "dt-button-close",
        "reflect": false,
        "defaultValue": "null"
      }
    };
  }
  static get states() {
    return {
      "visible": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsBannerClose",
        "name": "bdsBannerClose",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the banner is closed."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "toggle": {
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
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
