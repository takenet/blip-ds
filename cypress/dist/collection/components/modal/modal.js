import { h } from '@stencil/core';
export class BdsModal {
  constructor() {
    this.listener = (event) => {
      if (event.key == 'Enter' || event.key == 'Escape') {
        this.toggle();
      }
    };
    this.handleMouseClick = () => {
      this.open = false;
      this.bdsModalChanged.emit({ modalStatus: 'closed' });
    };
    this.onClickCloseButtom = () => {
      if (this.outzoneClose === true) {
        this.open = false;
        this.bdsModalChanged.emit({ modalStatus: 'closed' });
      }
    };
    this.open = false;
    this.closeButton = true;
    this.size = 'fixed';
    this.outzoneClose = true;
    this.dtOutzone = null;
    this.dtButtonClose = null;
  }
  /**
   * Can be used outside to open/close the modal
   */
  async toggle() {
    this.open = !this.open;
    if (this.open) {
      this.bdsModalChanged.emit({ modalStatus: 'opened' });
    }
    else {
      this.bdsModalChanged.emit({ modalStatus: 'closed' });
    }
  }
  isOpenChanged() {
    if (this.open) {
      document.addEventListener('keydown', this.listener, false);
    }
    else
      document.removeEventListener('keydown', this.listener, false);
  }
  handleKeyDown(event) {
    if (event.key == 'Enter') {
      this.open = false;
    }
  }
  render() {
    return (h("div", { class: {
        modal__dialog: true,
        'modal__dialog--open': this.open,
        [`modal__dialog--${this.size}`]: true,
      } }, h("div", { class: { outzone: true }, onClick: () => this.onClickCloseButtom(), "data-test": this.dtOutzone }), h("div", { class: { modal: true, [`modal--${this.size}`]: true } }, this.closeButton && (h("bds-icon", { size: "medium", class: "close-button", name: "close", tabindex: "0", onKeyDown: this.handleKeyDown.bind(this), onClick: this.handleMouseClick, dataTest: this.dtButtonClose })), this.size == 'fixed' && h("slot", null), this.size !== 'fixed' && (h("div", { class: { slot: true, [`slot--${this.size}`]: true } }, h("slot", null))))));
  }
  static get is() { return "bds-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["modal.css"]
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
          "text": "Used to open/close the modal"
        },
        "attribute": "open",
        "reflect": true,
        "defaultValue": "false"
      },
      "closeButton": {
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
          "text": "Used to hide or show the close button"
        },
        "attribute": "close-button",
        "reflect": true,
        "defaultValue": "true"
      },
      "size": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "sizes",
          "resolved": "\"dynamic\" | \"fixed\"",
          "references": {
            "sizes": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Used to change the modal heights."
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'fixed'"
      },
      "outzoneClose": {
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
          "text": "If true, the modal will close clicking outside the component."
        },
        "attribute": "outzone-close",
        "reflect": false,
        "defaultValue": "true"
      },
      "dtOutzone": {
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtOutzone is the data-test to button close."
        },
        "attribute": "dt-outzone",
        "reflect": false,
        "defaultValue": "null"
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
  static get events() {
    return [{
        "method": "bdsModalChanged",
        "name": "bdsModalChanged",
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
          "text": "Can be used outside to open/close the modal",
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
