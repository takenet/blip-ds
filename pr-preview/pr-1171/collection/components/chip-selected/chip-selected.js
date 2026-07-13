import { Host, h } from '@stencil/core';
export class ChipSelected {
  constructor() {
    this.isSelected = false;
    this.icon = undefined;
    this.color = 'default';
    this.size = 'standard';
    this.selected = false;
    this.disabled = false;
    this.dataTest = null;
  }
  handleKeyDown(event) {
    if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
      event.preventDefault();
      if (this.isSelected) {
        this.isSelected = false;
      }
      else {
        this.isSelected = true;
      }
      this.chipClick.emit({ selected: this.isSelected });
    }
  }
  handleClick(event) {
    if (!this.disabled) {
      event.preventDefault();
      if (this.isSelected) {
        this.isSelected = false;
      }
      else {
        this.isSelected = true;
      }
      this.chipClick.emit({ selected: this.isSelected });
    }
  }
  componentWillLoad() {
    this.el.focus();
    this.isSelected = this.selected;
  }
  getDisabledChip() {
    return this.disabled ? { chip_disabled: true, [`chip_disabled--${this.size}`]: true } : {};
  }
  getStyleChip() {
    return this.isSelected
      ? { chip_selected: true, [`chip_selected--${this.size}`]: true }
      : { [`chip--${this.color}`]: true, [`chip--${this.size}`]: true };
  }
  getStyleText() {
    if (this.isSelected) {
      const chipSelected = { 'chip_selected--text': true };
      return chipSelected;
    }
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
        chip: true,
        ...this.getStyleChip(),
        ...this.getDisabledChip(),
      }, onClick: (ev) => this.handleClick(ev), "data-test": this.dataTest }, !this.disabled && h("div", { class: "chip_focus", onKeyDown: this.handleKeyDown.bind(this), tabindex: "0" }), !this.isSelected && !this.disabled && h("div", { class: "chip_darker" }), this.icon && !this.isSelected && (h("div", { class: "chip--icon" }, h("bds-icon", { size: this.getSizeIconChip(), name: this.icon }))), this.isSelected && (h("div", { class: "chip_selected--icon" }, h("bds-icon", { size: this.getSizeIconChip(), name: "checkball" }))), h("div", { class: this.isSelected ? `chip_selected--container-text--half` : `chip_selected--container-text--full` }, h("bds-typo", { class: { 'chip--text': true, ...this.getStyleText() }, variant: "fs-12", "no-wrap": true, bold: "bold" }, h("slot", null))))));
  }
  static get is() { return "bds-chip-selected"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["chip-selected.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["chip-selected.css"]
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
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ColorChipSelected",
          "resolved": "\"danger\" | \"default\" | \"info\" | \"outline\" | \"success\" | \"warning\"",
          "references": {
            "ColorChipSelected": {
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
          "text": "used for change the chip size. Use one of them;"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'standard'"
      },
      "selected": {
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
          "text": "used for set the initial setup for true;"
        },
        "attribute": "selected",
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
          "text": "When 'true', no events will be dispatched"
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
      }
    };
  }
  static get states() {
    return {
      "isSelected": {}
    };
  }
  static get events() {
    return [{
        "method": "chipClick",
        "name": "chipClick",
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
  static get elementRef() { return "el"; }
}
