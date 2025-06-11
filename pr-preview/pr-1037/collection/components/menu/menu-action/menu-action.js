import { h } from '@stencil/core';
export class BdsMenuAction {
  constructor() {
    this.onCloseSubMenu = () => {
      this.stateSubMenu = 'close';
    };
    this.onChangeOpenParent = (event) => {
      this.openParentMenu = event.detail.value;
    };
    this.openParentMenu = false;
    this.openSubMenu = false;
    this.positionSubMenu = 'right';
    this.stateSubMenu = 'close';
    this.delaySubMenu = false;
    this.zIndex = 0;
    this.delay = null;
    this.buttonText = '';
    this.subMenu = false;
    this.iconLeft = null;
    this.subtitle = null;
    this.description = null;
    this.lipstick = false;
    this.disabled = false;
  }
  componentWillLoad() {
    if (this.subMenu) {
      this.menuElement = this.element.parentElement;
      this.menuElement.addEventListener('bdsOpenMenu', (event) => {
        this.onChangeOpenParent(event);
      });
    }
  }
  openParentMenuChanged(active) {
    if (active) {
      const divMenu = this.menuElement.shadowRoot.querySelectorAll('div')[0];
      this.positionSubMenu = divMenu.offsetLeft + divMenu.offsetWidth + 196 >= window.innerWidth ? 'left' : 'right';
    }
  }
  openSubMenuChanged(active) {
    if (active == false) {
      this.stateSubMenu = 'pending';
      this.delay = setTimeout(this.onCloseSubMenu, 1000);
    }
    if (active == true) {
      clearTimeout(this.delay);
      this.delay = null;
      this.stateSubMenu = 'open';
    }
  }
  stateSubMenuChanged(state) {
    switch (state) {
      case 'open':
        this.delaySubMenu = true;
        break;
      case 'pending':
        this.delaySubMenu = true;
        break;
      case 'close':
        this.delaySubMenu = false;
        break;
    }
  }
  render() {
    const actLeft = this.iconLeft && !this.subMenu;
    const actRight = this.subMenu && !this.iconLeft;
    const actLeftright = this.iconLeft && this.subMenu;
    const openSubmenu = () => {
      if (this.subMenu == true) {
        this.zIndex = 1;
        this.openSubMenu = true;
      }
    };
    const closeSubmenu = () => {
      if (this.subMenu == true) {
        this.zIndex = 0;
        this.openSubMenu = false;
      }
    };
    const zIndexSubmenu = {
      zIndex: `${this.zIndex}`,
    };
    return (h("div", { class: {
        menuaction: true,
        [`position-${this.positionSubMenu}`]: true,
      }, onMouseOver: openSubmenu, onMouseOut: closeSubmenu }, h("button", { class: {
        menuaction__button: true,
        [`menuaction__button__activeicleft`]: actLeft,
        [`menuaction__button__activeicright`]: actRight,
        [`menuaction__button__activeicleftright`]: actLeftright,
        [`menuaction__button__lipstick`]: this.lipstick,
        [`menuaction__button__disabled`]: this.disabled,
      } }, this.iconLeft && h("bds-icon", { class: "icon-item", name: this.iconLeft, theme: "outline", size: "small" }), h("div", { class: "content-item" }, this.buttonText && (h("bds-typo", { class: "title-item", variant: "fs-16", tag: "span" }, this.buttonText)), this.subtitle && (h("bds-typo", { class: "subtitle-item", variant: "fs-10", tag: "span" }, this.subtitle)), this.description && (h("bds-typo", { class: "description-item", variant: "fs-10", tag: "span" }, this.description))), this.subMenu && (h("bds-icon", { class: { arrow: true }, name: `arrow-${this.positionSubMenu}`, theme: "outline", size: "small" }))), this.subMenu && (h("div", { class: {
        menuaction__submenu: true,
        menuaction__submenu__open: this.delaySubMenu,
      }, style: zIndexSubmenu }, h("slot", null)))));
  }
  static get is() { return "bds-menu-action"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["menu-action.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["menu-action.css"]
    };
  }
  static get properties() {
    return {
      "buttonText": {
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
          "text": "ButtonText. Used to enter the display text for the item."
        },
        "attribute": "button-text",
        "reflect": false,
        "defaultValue": "''"
      },
      "subMenu": {
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
          "text": "SubMenu. Used to declare that the button will have a submenu."
        },
        "attribute": "sub-menu",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Iconleft. Used to insert the string icon and make the icon available to the left of the item."
        },
        "attribute": "icon-left",
        "reflect": false,
        "defaultValue": "null"
      },
      "subtitle": {
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
          "text": "Subtitle. Used to insert a subtitle in the display item."
        },
        "attribute": "subtitle",
        "reflect": false,
        "defaultValue": "null"
      },
      "description": {
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
          "text": "Description. Used to insert a subtitle in the display item."
        },
        "attribute": "description",
        "reflect": false,
        "defaultValue": "null"
      },
      "lipstick": {
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
          "text": "Lipstick. Used to declare that the item will be a negative/error action."
        },
        "attribute": "lipstick",
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
          "text": "Disabled. Used to declare that the item will be disabled."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "openParentMenu": {},
      "openSubMenu": {},
      "positionSubMenu": {},
      "stateSubMenu": {},
      "delaySubMenu": {},
      "zIndex": {},
      "delay": {}
    };
  }
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "openParentMenu",
        "methodName": "openParentMenuChanged"
      }, {
        "propName": "openSubMenu",
        "methodName": "openSubMenuChanged"
      }, {
        "propName": "stateSubMenu",
        "methodName": "stateSubMenuChanged"
      }];
  }
}
