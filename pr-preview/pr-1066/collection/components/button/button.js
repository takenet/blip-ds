import { h, Host } from '@stencil/core';
export class Button {
  constructor() {
    this.handleClick = (ev) => {
      if (!this.disabled) {
        if (ev.key == 'Enter') {
          this.bdsClick.emit(ev);
        }
        if (ev.type == 'click') {
          this.bdsClick.emit(ev);
        }
        const form = this.el.closest('form');
        if (form) {
          ev.preventDefault();
          const fakeButton = document.createElement('button');
          fakeButton.type = this.type;
          fakeButton.style.display = 'none';
          form.appendChild(fakeButton);
          fakeButton.click();
          fakeButton.remove();
        }
      }
    };
    this.slotText = undefined;
    this.active = undefined;
    this.position = undefined;
    this.direction = undefined;
    this.group = false;
    this.loadingColor = undefined;
    this.block = false;
    this.fullWidth = false;
    this.justifyContent = 'center';
    this.disabled = false;
    this.color = 'primary';
    this.size = 'medium';
    this.variant = 'solid';
    this.icon = null;
    this.iconLeft = null;
    this.iconRight = null;
    this.arrow = false;
    this.type = 'button';
    this.iconTheme = 'outline';
    this.typeIcon = 'icon';
    this.bdsLoading = false;
    this.bdsLoadingVariant = 'primary';
    this.bdsLoadingColor = 'main';
    this.dataTest = null;
  }
  async isActive(value) {
    this.active = value;
  }
  async setPosition(position) {
    this.position = position;
    this.position ? (this.group = true) : false;
  }
  async setDirection(direction) {
    this.direction = direction;
  }
  async setSize(size) {
    this.size = size;
  }
  async setColor(color) {
    this.color = color;
  }
  async setVariant(variant) {
    this.variant = variant;
  }
  componentDidRender() {
    this.logSlotText();
    this.buttonLegacy();
  }
  buttonLegacy() {
    this.variant === 'facebook' ? this.setVariant('outline') : this.setVariant(this.variant);
    this.size === 'tall'
      ? this.setSize('large')
      : this.size === 'standard'
        ? this.setSize('medium')
        : this.setSize(this.size);
  }
  logSlotText() {
    const slot = this.el.shadowRoot.querySelector('slot');
    const onlyIconElement = this.el.shadowRoot.querySelector('button');
    if (slot) {
      const assignedNodes = slot.assignedNodes();
      let slotText = '';
      assignedNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          slotText += node.textContent;
        }
      });
      if (slotText === '' && this.size === 'medium') {
        onlyIconElement.classList.add('button__only-icon--medium');
      }
      if (slotText === '' && this.size === 'large') {
        onlyIconElement.classList.add('button__only-icon--large');
      }
      if (slotText === '' && this.size === 'short') {
        onlyIconElement.classList.add('button__only-icon--short');
      }
    }
  }
  renderLoadingSpinner() {
    if (this.variant === 'solid') {
      if (['primary', 'positive', 'negative'].includes(this.color)) {
        this.loadingColor = 'light';
      }
      else if (this.color === 'content') {
        this.loadingColor = 'content';
      }
    }
    else if (this.variant === 'outline' || this.variant === 'text') {
      this.loadingColor = this.color === 'positive' ? 'positive' : this.color === 'negative' ? 'negative' : 'main';
    }
    return h("bds-loading-spinner", { size: "extra-small", color: this.loadingColor });
  }
  render() {
    return (h(Host, { class: { host: true, block: this.block || this.fullWidth, group: this.group } }, h("div", { tabindex: "0", onKeyDown: (ev) => this.handleClick(ev), class: "focus" }), h("button", { onClick: (ev) => this.handleClick(ev), disabled: this.disabled, tabindex: "-1", "aria-disabled": this.disabled ? 'true' : 'false', "aria-live": "assertive", type: this.type, class: {
        button: true,
        'button--block': this.block,
        'button--full-width': this.fullWidth,
        'button--group': this.group,
        [`button__justify-content--${this.justifyContent}`]: true,
        [`button__position--${this.direction}--${this.position}`]: true,
        'button--active': this.active,
        [`button__variant--${this.variant === 'delete' ? 'solid' : this.variant}`]: true,
        [`button__${this.variant === 'delete' ? 'solid' : this.variant}`]: true,
        [`button__color--${this.variant === 'delete' ? 'negative' : this.color}`]: true,
        [`button__variant--${this.variant}--disabled`]: this.disabled,
        [`button__size--${this.size}`]: true,
      }, part: "button", "data-test": this.dataTest }, this.bdsLoading ? this.renderLoadingSpinner() : '', this.iconLeft || this.icon ? (h("bds-icon", { class: { icon_buttom: true, hide: this.bdsLoading }, name: this.icon ? this.icon : this.iconLeft, theme: this.iconTheme, type: this.typeIcon, color: "inherit", size: 'medium' })) : (''), h("bds-typo", { class: { typo_buttom: true, button__content: true, hide: this.bdsLoading }, variant: "fs-14", lineHeight: "simple", bold: "bold" }, h("slot", null)), this.iconRight || this.arrow ? (h("bds-icon", { class: { icon_buttom: true, hide: this.bdsLoading }, name: this.arrow ? 'arrow-right' : this.iconRight, color: "inherit", theme: this.iconTheme, type: this.typeIcon })) : (''))));
  }
  static get is() { return "bds-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["button.css"]
    };
  }
  static get properties() {
    return {
      "block": {
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
          "text": "If true, the base button will be disabled."
        },
        "attribute": "block",
        "reflect": false,
        "defaultValue": "false"
      },
      "fullWidth": {
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
          "text": "If true, the button will occupy 100% width with centered content."
        },
        "attribute": "full-width",
        "reflect": false,
        "defaultValue": "false"
      },
      "justifyContent": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonJustifyContent",
          "resolved": "\"center\" | \"space-between\"",
          "references": {
            "ButtonJustifyContent": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Controls the horizontal alignment of button content.\n'center' - content is centered (default)\n'space-between' - left content aligned left, right content aligned right"
        },
        "attribute": "justify-content",
        "reflect": false,
        "defaultValue": "'center'"
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
          "text": "If true, the base button will be disabled."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "color": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'primary'"
      },
      "size": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "ButtonSize",
          "resolved": "\"large\" | \"medium\" | \"short\" | \"standard\" | \"tall\"",
          "references": {
            "ButtonSize": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Size. Entered as one of the size. Can be one of:\r\n'tall', 'standard', 'short';"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'medium'"
      },
      "variant": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "ButtonVariant",
          "resolved": "\"dashed\" | \"delete\" | \"facebook\" | \"ghost\" | \"outline\" | \"primary\" | \"secondary\" | \"secondary--white\" | \"solid\" | \"tertiary\" | \"text\"",
          "references": {
            "ButtonVariant": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Variant. Entered as one of the variant. Can be one of:\r\n'primary', 'secondary', 'ghost', 'dashed';"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'solid'"
      },
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
          "text": "used for add icon in input left. Uses the bds-icon component."
        },
        "attribute": "icon",
        "reflect": true,
        "defaultValue": "null"
      },
      "iconLeft": {
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
          "text": "used for add icon in input left. Uses the bds-icon component."
        },
        "attribute": "icon-left",
        "reflect": true,
        "defaultValue": "null"
      },
      "iconRight": {
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
          "text": "used for add icon in input left. Uses the bds-icon component."
        },
        "attribute": "icon-right",
        "reflect": true,
        "defaultValue": "null"
      },
      "arrow": {
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
          "text": "The arrow button"
        },
        "attribute": "arrow",
        "reflect": false,
        "defaultValue": "false"
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonType",
          "resolved": "\"button\" | \"reset\" | \"submit\"",
          "references": {
            "ButtonType": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The type of the button. Can be one of:\r\n'button', 'submit', 'reset';"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'button'"
      },
      "iconTheme": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "IconTheme",
          "resolved": "\"outline\" | \"solid\"",
          "references": {
            "IconTheme": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The theme of the icon. Can be one of:\r\n'outline', 'solid';"
        },
        "attribute": "icon-theme",
        "reflect": true,
        "defaultValue": "'outline'"
      },
      "typeIcon": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "IconType",
          "resolved": "\"emoji\" | \"icon\" | \"logo\"",
          "references": {
            "IconType": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The type of the icon. Can be one of:\r\n'icon', 'logo', 'emoji';"
        },
        "attribute": "type-icon",
        "reflect": true,
        "defaultValue": "'icon'"
      },
      "bdsLoading": {
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
          "text": "If true, shows the loading spinner"
        },
        "attribute": "bds-loading",
        "reflect": false,
        "defaultValue": "false"
      },
      "bdsLoadingVariant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "LoadingSpinnerVariant",
          "resolved": "\"delete\" | \"ghost\" | \"primary\" | \"secondary\" | \"tertiary\"",
          "references": {
            "LoadingSpinnerVariant": {
              "location": "import",
              "path": "../loading-spinner/loading-spinner"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost'"
        },
        "attribute": "bds-loading-variant",
        "reflect": false,
        "defaultValue": "'primary'"
      },
      "bdsLoadingColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "colorsVariants",
          "resolved": "\"content\" | \"light\" | \"main\" | \"negative\" | \"positive\"",
          "references": {
            "colorsVariants": {
              "location": "import",
              "path": "../loading-spinner/loading-spinner"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost'"
        },
        "attribute": "bds-loading-color",
        "reflect": false,
        "defaultValue": "'main'"
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
      "slotText": {},
      "active": {},
      "position": {},
      "direction": {},
      "group": {},
      "loadingColor": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsClick",
        "name": "bdsClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event buttom onClick."
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
      "isActive": {
        "complexType": {
          "signature": "(value: any) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
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
      },
      "setPosition": {
        "complexType": {
          "signature": "(position: 'first' | 'last' | 'middle') => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
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
      },
      "setDirection": {
        "complexType": {
          "signature": "(direction: 'row' | 'column') => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
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
      },
      "setSize": {
        "complexType": {
          "signature": "(size: ButtonSize) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "ButtonSize": {
              "location": "local"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      },
      "setColor": {
        "complexType": {
          "signature": "(color: 'primary' | 'content' | 'negative' | 'positive') => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
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
      },
      "setVariant": {
        "complexType": {
          "signature": "(variant: ButtonVariant) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "ButtonVariant": {
              "location": "local"
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
  static get watchers() {
    return [{
        "propName": "bdsLoading",
        "methodName": "renderLoadingSpinner"
      }];
  }
}
