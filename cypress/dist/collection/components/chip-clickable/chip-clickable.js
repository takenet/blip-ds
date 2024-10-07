import { Host, h } from '@stencil/core';
export class ChipClickable {
  constructor() {
    this.visible = true;
    this.icon = undefined;
    this.avatar = undefined;
    this.color = 'default';
    this.size = 'standard';
    this.clickable = false;
    this.close = false;
    this.disabled = false;
    this.dataTest = null;
    this.dtButtonClose = null;
  }
  handleClickKey(event) {
    if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
      event.preventDefault();
      this.chipClickableClick.emit();
    }
  }
  handleClick(event) {
    if (!this.disabled) {
      event.preventDefault();
      this.chipClickableClick.emit();
    }
  }
  handleCloseChip(event) {
    event.preventDefault();
    this.chipClickableClose.emit({ id: this.element.id });
  }
  handleCloseKey(event) {
    if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
      event.preventDefault();
      this.chipClickableClose.emit({ id: this.element.id });
    }
  }
  getSizeAvatarChip() {
    if (this.size === 'tall') {
      return 'extra-small';
    }
    else
      return 'micro';
  }
  getSizeIconChip() {
    if (this.size === 'tall') {
      return 'medium';
    }
    else
      return 'x-small';
  }
  render() {
    return (h(Host, null, h("div", { class: {
        chip_clickable: true,
        [`chip_clickable--${this.color}`]: true && !this.disabled,
        [`chip_clickable--${this.size}`]: true,
        'chip_clickable--hide': !this.visible,
        'chip_clickable--click': this.clickable,
        'chip_clickable--disabled': this.disabled,
      }, onClick: this.handleClick.bind(this), "data-test": this.dataTest }, this.clickable && !this.disabled && (h("div", { class: "chip_focus", onKeyDown: this.handleClickKey.bind(this), tabindex: "0" })), this.clickable && !this.disabled && h("div", { class: "chip_darker" }), this.icon && !this.avatar && (h("div", { class: "chip_clickable--icon" }, h("bds-icon", { size: this.getSizeIconChip(), name: this.icon }))), this.avatar && (h("div", { class: "chip_clickable--avatar" }, h("bds-avatar", { size: this.getSizeAvatarChip(), thumbnail: this.avatar }))), h("div", { class: this.close && (this.icon || this.avatar)
        ? `chip_clickable--container-text--min`
        : !this.close && !this.icon && !this.avatar
          ? `chip_clickable--container-text--full`
          : `chip_clickable--container-text--half` }, h("bds-typo", { "no-wrap": "true", class: "chip_clickable--text", variant: "fs-12", bold: "bold" }, h("slot", null))), this.close && (h("div", { class: "chip_clickable--close", "data-test": this.dtButtonClose, onClick: this.handleCloseChip.bind(this) }, !this.disabled && (h("div", { class: "close_focus", onKeyDown: this.handleCloseKey.bind(this), tabindex: "0" })), h("bds-icon", { size: "x-small", theme: "solid", name: "error" }))))));
  }
  static get is() { return "bds-chip-clickable"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["chip-clickable.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["chip-clickable.css"]
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
          "text": "used for add icon in left container. Uses the bds-icon component."
        },
        "attribute": "icon",
        "reflect": false
      },
      "avatar": {
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
          "text": "used for add avatar left container. Uses the bds-avatar component."
        },
        "attribute": "avatar",
        "reflect": false
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ColorChipClickable",
          "resolved": "\"danger\" | \"default\" | \"info\" | \"outline\" | \"success\" | \"warning\"",
          "references": {
            "ColorChipClickable": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "used for change the color. Uses one of them."
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "'default'"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Size",
          "resolved": "\"standard\" | \"tall\"",
          "references": {
            "Size": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "used for change the size chip. Uses one of them."
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'standard'"
      },
      "clickable": {
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
          "text": "it makes the chip clickable."
        },
        "attribute": "clickable",
        "reflect": false,
        "defaultValue": "false"
      },
      "close": {
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
          "text": "used for delete the chip."
        },
        "attribute": "close",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "the chip gone stay disabled while this prop be true."
        },
        "attribute": "disabled",
        "reflect": false,
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
        "method": "chipClickableClose",
        "name": "chipClickableClose",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggered after a mouse click on close icon, return id element. Only fired when close is true."
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "chipClickableClick",
        "name": "chipClickableClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "element"; }
}
