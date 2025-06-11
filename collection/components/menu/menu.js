import { Host, h } from '@stencil/core';
import { getScrollParent, positionElement } from '../../utils/position-element';
export class BdsMenu {
  constructor() {
    this.refMenuElement = (el) => {
      this.menuElement = el;
    };
    this.onClickCloseButtom = (event) => {
      this.open = false;
      event.stopPropagation();
    };
    this.refElement = null;
    this.intoView = null;
    this.menupositionTop = 0;
    this.menupositionLeft = 0;
    this.menu = null;
    this.position = 'right';
    this.open = false;
  }
  componentWillLoad() {
    this.refElement = document.getElementById(this.menu);
    this.intoView = getScrollParent(this.refElement);
  }
  async toggle() {
    this.open = !this.open;
  }
  openMenu() {
    this.bdsToggle.emit({ value: this.open });
    if (this.open) {
      const positionValue = positionElement({
        actionElement: this.refElement,
        changedElement: this.menuElement,
        intoView: this.intoView,
      });
      this.menupositionTop = positionValue.top;
      this.menupositionLeft = positionValue.left;
    }
  }
  render() {
    const menuPosition = {
      top: `${this.menupositionTop}px`,
      left: `${this.menupositionLeft}px`,
    };
    return (h(Host, null, h("div", { ref: this.refMenuElement, class: {
        menu: true,
        [`menu__${this.position}`]: true,
        [`menu__open`]: this.open,
      }, style: menuPosition }, h("slot", null)), this.open && h("div", { class: { outzone: true }, onClick: (ev) => this.onClickCloseButtom(ev) })));
  }
  static get is() { return "bds-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["menu.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["menu.css"]
    };
  }
  static get properties() {
    return {
      "menu": {
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
          "text": "Menu. Used to link the minus with the action button."
        },
        "attribute": "menu",
        "reflect": false,
        "defaultValue": "null"
      },
      "position": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "menuPosition",
          "resolved": "\"bottom\" | \"right\"",
          "references": {
            "menuPosition": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Position. Used to position the Menu. Either on the left or on the bottom."
        },
        "attribute": "position",
        "reflect": false,
        "defaultValue": "'right'"
      },
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
          "text": "Open. Used to open/close the menu."
        },
        "attribute": "open",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "refElement": {},
      "intoView": {},
      "menupositionTop": {},
      "menupositionLeft": {}
    };
  }
  static get events() {
    return [{
        "method": "bdsToggle",
        "name": "bdsToggle",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "bdsToggle. Event to return selected date value."
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
  static get watchers() {
    return [{
        "propName": "open",
        "methodName": "openMenu"
      }];
  }
}
