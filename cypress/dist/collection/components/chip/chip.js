import { Host, h } from '@stencil/core';
export class Chip {
  constructor() {
    this.icon = undefined;
    this.size = 'standard';
    this.variant = 'default';
    this.danger = false;
    this.filter = false;
    this.clickable = false;
    this.deletable = false;
    this.disabled = false;
  }
  handleClickDelete(event) {
    if (!this.deletable || this.disabled)
      return;
    event.preventDefault();
    this.bdsDelete.emit({ id: this.element.id });
  }
  getClickClass() {
    return this.clickable ? { 'chip--click': true } : {};
  }
  getSizeClass() {
    return this.size === 'standard' ? { 'chip--standard': true } : { 'chip--tall': true };
  }
  getStateClass() {
    if (this.disabled) {
      return { 'chip--default': true };
    }
    if (this.danger) {
      return { 'chip--danger': true };
    }
    if (this.filter) {
      return { 'chip--filter': true };
    }
    if (this.variant === 'primary') {
      return { 'chip--primary': true };
    }
    if (this.variant === 'watermelon') {
      return { 'chip--watermelon': true };
    }
    return { 'chip--default': true };
  }
  render() {
    return (h(Host, { class: Object.assign(Object.assign(Object.assign({ chip: true }, this.getClickClass()), this.getStateClass()), this.getSizeClass()) }, this.icon && (h("div", { class: "chip__icon" }, h("bds-icon", { size: "x-small", name: this.icon }))), h("slot", null), this.deletable && (h("div", { class: "chip__delete", onClick: this.handleClickDelete.bind(this) }, h("bds-icon", { size: "x-small", theme: "solid", name: "error" })))));
  }
  static get is() { return "bds-chip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["chip.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["chip.css"]
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
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ChipSize",
          "resolved": "\"standard\" | \"tall\"",
          "references": {
            "ChipSize": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Chip size. Entered as one of the size design tokens. Can be one of:\r\n\"standard\" and \"tall\""
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'standard'"
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ChipVariant",
          "resolved": "\"default\" | \"primary\" | \"watermelon\"",
          "references": {
            "ChipVariant": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Variant. Entered as one of the variant. Can be one of:\r\n'primary', 'default';"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'default'"
      },
      "danger": {
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
          "text": "Add state danger on chip, use for use feedback."
        },
        "attribute": "danger",
        "reflect": true,
        "defaultValue": "false"
      },
      "filter": {
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
          "text": "Add state filter on chip whith specific color."
        },
        "attribute": "filter",
        "reflect": false,
        "defaultValue": "false"
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "When 'true' and the component is using the primary variant, a hover is added"
        },
        "attribute": "clickable",
        "reflect": false,
        "defaultValue": "false"
      },
      "deletable": {
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
          "text": "When 'true', the component recive remove button and dispach event onBdsDelete"
        },
        "attribute": "deletable",
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "When 'true', no events will be dispatched"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "bdsDelete",
        "name": "bdsDelete",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggered after a mouse click on delete icon, return id element. Only fired when deletable is true."
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
