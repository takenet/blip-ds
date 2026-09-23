import { h } from '@stencil/core';
export class IconButton {
  constructor() {
    this.mapSize = {
      tall: 'xxx-large',
      standard: 'x-large',
      short: 'medium',
    };
    this.mapVariantStyle = {
      primary: 'icon__button--primary',
      secondary: 'icon__button--secondary',
      tertiary: 'icon__button--tertiary',
      delete: 'icon__button--delete',
      ghost: 'icon__button--ghost',
      'secondary--white': 'icon__button--secondary-white',
    };
    this.handleClick = (ev) => {
      if (!this.disabled) {
        this.bdsClick.emit(ev);
      }
    };
    this.disabled = false;
    this.size = 'standard';
    this.variant = 'primary';
    this.iconTheme = 'outline';
    this.icon = null;
    this.dataTest = null;
  }
  render() {
    if (!this.icon)
      return null;
    const size = this.mapSize[this.size];
    const state = this.mapVariantStyle[this.variant];
    return (h("button", { onClick: (ev) => this.handleClick(ev), disabled: this.disabled, class: {
        ['icon__button']: true,
        [state]: true,
        [`${state}--disabled`]: this.disabled,
        [`size-${this.size}`]: true,
      }, "data-test": this.dataTest, tabindex: "0" }, h("bds-icon", { name: this.icon, size: size, theme: this.iconTheme, color: "inherit" })));
  }
  static get is() { return "bds-button-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["icon-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["icon-button.css"]
    };
  }
  static get properties() {
    return {
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
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "IconButtonSize",
          "resolved": "\"short\" | \"standard\" | \"tall\"",
          "references": {
            "IconButtonSize": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Size. Entered as one of the size. Can be one of:\n'tall', 'standard', 'short';"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'standard'"
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "IconButtonVariant",
          "resolved": "\"delete\" | \"ghost\" | \"primary\" | \"secondary\" | \"secondary--white\" | \"tertiary\"",
          "references": {
            "IconButtonVariant": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Variant. Entered as one of the variant. Can be one of:\n'primary', 'secondary', 'ghost', 'dashed';"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "'primary'"
      },
      "iconTheme": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonIconTheme",
          "resolved": "\"outline\" | \"solid\"",
          "references": {
            "ButtonIconTheme": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The theme of the icon. Can be one of:\n'outline', 'solid';"
        },
        "attribute": "icon-theme",
        "reflect": true,
        "defaultValue": "'outline'"
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
}
