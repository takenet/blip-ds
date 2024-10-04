import { h } from '@stencil/core';
export class BdsToast {
  constructor() {
    /**
     * Sends an event to be used when creating an action when clicking the toast button
     */
    this._buttonClickHandler = () => {
      if (this.buttonAction === 'close')
        this.close();
      else {
        this.toastButtonClick.emit(this.el);
        this.close();
      }
    };
    this.mapIconName = {
      system: 'bell',
      error: 'error',
      success: 'like',
      warning: 'attention',
      undo: 'undo',
      redo: 'redo',
      notification: 'notification',
    };
    this.icon = null;
    this.actionType = 'button';
    this.variant = 'system';
    this.toastTitle = undefined;
    this.toastText = undefined;
    this.buttonText = undefined;
    this.duration = 0;
    this.buttonAction = 'close';
    this.show = false;
    this.hide = false;
    this.position = 'bottom-left';
    this.dtButtonAction = null;
    this.dtButtonClose = null;
  }
  _keyPressHandler(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (this.buttonAction === 'close')
        this.close();
      else {
        this.toastButtonClick.emit(this.el);
        this.close();
      }
    }
  }
  /**
   * Can be used outside to open the toast
   */
  async create({ actionType, buttonAction, buttonText, icon, toastText, toastTitle, variant, duration, }) {
    let toastContainer = document.querySelector(`bds-toast-container.${variant === 'notification' ? 'top-right' : 'bottom-left'}`);
    if (toastContainer) {
      toastContainer.appendChild(this.el);
      toastContainer.classList.add(variant === 'notification' ? 'top-right' : 'bottom-left');
    }
    else {
      toastContainer = document.createElement('bds-toast-container');
      toastContainer.classList.add(variant === 'notification' ? 'top-right' : 'bottom-left');
      document.body.appendChild(toastContainer);
      toastContainer.appendChild(this.el);
    }
    this.el.actionType = actionType || 'button';
    this.el.buttonAction = buttonAction || 'close';
    this.el.buttonText = buttonText;
    this.el.toastText = toastText;
    this.el.toastTitle = toastTitle;
    this.el.variant = variant || 'system';
    this.el.duration = duration * 1000 || 0;
    this.el.position = variant === 'notification' ? 'top-right' : 'bottom-left';
    this.el.icon = icon !== null && icon !== void 0 ? icon : this.mapIconName[this.variant];
    this.el.show = true;
    if (this.el.duration > 0) {
      setTimeout(() => {
        this.el.hide = true;
        setTimeout(() => {
          this.el.remove();
        }, 400);
      }, this.el.duration);
    }
  }
  /**
   * Can be used outside the component to close the toast
   */
  async close() {
    if (this.el.shadowRoot) {
      this.el.shadowRoot.querySelector('div').classList.remove('show');
      this.el.shadowRoot.querySelector('div').classList.add('hide');
    }
    else {
      this.el.querySelector('div').classList.remove('show');
      this.el.querySelector('div').classList.add('hide');
    }
    setTimeout(() => {
      this.el.remove();
    }, 400);
  }
  render() {
    return (h("div", { class: {
        toast: true,
        [`toast--${this.variant}`]: true,
        [`toast--action--${this.actionType}`]: true,
        [`show show--${this.position}`]: this.show,
        hide: this.hide,
      } }, this.variant === 'notification' && (h("bds-icon", { class: "toast__ballon", theme: "solid", name: "blip-chat", size: "brand" })), this.icon && h("bds-icon", { class: "toast__icon", theme: "outline", size: "medium", name: this.icon }), h("div", { class: "toast__content" }, this.toastTitle && (h("bds-typo", { variant: "fs-14", bold: "bold" }, this.toastTitle)), this.toastText && h("bds-typo", { variant: "fs-14", innerHTML: this.toastText })), h("div", { class: {
        toast__action: true,
        [`toast__action__${this.actionType}`]: true,
      } }, this.actionType === 'button' ? (h("bds-button", { onKeyDown: this._keyPressHandler.bind(this), tabindex: "0", onClick: () => this._buttonClickHandler(), variant: "secondary", size: "standard", dataTest: this.dtButtonAction }, this.buttonText)) : (h("bds-button-icon", { onClick: () => this._buttonClickHandler(), size: "short", onKeyDown: this._keyPressHandler.bind(this), tabindex: "0", variant: "secondary", icon: "close", dataTest: this.dtButtonClose })))));
  }
  static get is() { return "bds-toast"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["toast.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["toast.css"]
    };
  }
  static get properties() {
    return {
      "icon": {
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
          "text": "used for add the icon. Uses the bds-icon component."
        },
        "attribute": "icon",
        "reflect": true,
        "defaultValue": "null"
      },
      "actionType": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ActionType",
          "resolved": "\"button\" | \"icon\"",
          "references": {
            "ActionType": {
              "location": "import",
              "path": "./toast-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "ActionType. Defines if the button should have a button or an icon. Can be one of:\r\n'icon', 'button';"
        },
        "attribute": "action-type",
        "reflect": false,
        "defaultValue": "'button'"
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "VariantType",
          "resolved": "\"error\" | \"notification\" | \"redo\" | \"success\" | \"system\" | \"undo\" | \"warning\"",
          "references": {
            "VariantType": {
              "location": "import",
              "path": "./toast-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Variant. Defines the color of the toast. Can be one of:\r\n'system', 'error', 'success', 'warning', 'undo', 'redo';"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'system'"
      },
      "toastTitle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The title of the component:"
        },
        "attribute": "toast-title",
        "reflect": false
      },
      "toastText": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The text content of the component:"
        },
        "attribute": "toast-text",
        "reflect": false
      },
      "buttonText": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If the action type is button, this will be the text of the button:"
        },
        "attribute": "button-text",
        "reflect": false
      },
      "duration": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Time to close the toast in seconds\r\n0 = never close automatically (default value)"
        },
        "attribute": "duration",
        "reflect": false,
        "defaultValue": "0"
      },
      "buttonAction": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonActionType",
          "resolved": "\"close\" | \"custom\"",
          "references": {
            "ButtonActionType": {
              "location": "import",
              "path": "./toast-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Define an action to the button toast. Can be one of:\r\n'close', 'custom';\r\nif the action type is set to close, the button will close automatically.\r\nif the action type is set to custom, a function need to be passed when the toastButtonClick is emitted."
        },
        "attribute": "button-action",
        "reflect": false,
        "defaultValue": "'close'"
      },
      "show": {
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
          "text": "Controls the open event of the component:"
        },
        "attribute": "show",
        "reflect": false,
        "defaultValue": "false"
      },
      "hide": {
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
          "text": "Controls the hide event of the component:"
        },
        "attribute": "hide",
        "reflect": false,
        "defaultValue": "false"
      },
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "PositionType",
          "resolved": "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
          "references": {
            "PositionType": {
              "location": "import",
              "path": "./toast-interface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The toast position on the screen. Can be one of:\r\n'top-right', 'top-left', 'bottom-right', 'bottom-left' (default value);"
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "'bottom-left'"
      },
      "dtButtonAction": {
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
          "text": "Data test is the prop to specifically test the component action object.\r\ndtButtonAction is the data-test to button action."
        },
        "attribute": "dt-button-action",
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
        "method": "toastButtonClick",
        "name": "toastButtonClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event used to execute some action when the action button on the toast is clicked"
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
      "create": {
        "complexType": {
          "signature": "({ actionType, buttonAction, buttonText, icon, toastText, toastTitle, variant, duration, }: CreateToastType) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "CreateToastType": {
              "location": "import",
              "path": "./toast-interface"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Can be used outside to open the toast",
          "tags": []
        }
      },
      "close": {
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
          "text": "Can be used outside the component to close the toast",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
