import { h } from '@stencil/core';
export class BdsAlert {
  constructor() {
    this.listener = (event) => {
      if (event.key == 'Enter' || event.key == 'Escape') {
        this.toggle();
      }
    };
    this.open = false;
    this.dataTest = null;
    this.position = 'fixed';
  }
  /**
   * Can be used outside to open/close the alert
   */
  async toggle() {
    this.open = !this.open;
    if (this.open) {
      this.bdsAlertChanged.emit({ alertStatus: 'opened' });
    }
    else {
      this.bdsAlertChanged.emit({ alertStatus: 'closed' });
    }
  }
  isOpenChanged() {
    if (this.open) {
      document.addEventListener('keydown', this.listener, false);
    }
    else
      document.removeEventListener('keydown', this.listener, false);
  }
  render() {
    return (h("div", { class: {
        alert__dialog: true,
        'alert__dialog--open': this.open,
        [`alert__dialog--${this.position}`]: true,
      } }, h("div", { class: "alert", "data-test": this.dataTest }, h("slot", null))));
  }
  static get is() { return "bds-alert"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["alert.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["alert.css"]
    };
  }
  static get properties() {
    return {
      "open": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Used to open/close the alert"
        },
        "attribute": "open",
        "reflect": true,
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
      },
      "position": {
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
          "text": "Define whether the component will occupy the entire screen or just the parent."
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "'fixed'"
      }
    };
  }
  static get events() {
    return [{
        "method": "bdsAlertChanged",
        "name": "bdsAlertChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when modal status has changed."
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
          "text": "Can be used outside to open/close the alert",
          "tags": []
        }
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "open",
        "methodName": "isOpenChanged"
      }];
  }
}
