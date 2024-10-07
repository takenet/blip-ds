import { r as registerInstance, h, g as getElement } from './index-611fd21e.js';

const menuActionCss = ".menuaction{position:relative}.menuaction__button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px;-ms-flex-align:center;align-items:center;background-color:var(--color-surface-1, #f6f6f6);border:0;border-radius:8px;padding:16px;width:100%;text-align:left;cursor:pointer}.menuaction__button__activeicleft{grid-template-columns:auto 1fr}.menuaction__button__activeicright{grid-template-columns:1fr auto}.menuaction__button__activeicleftright{grid-template-columns:auto 1fr auto}.menuaction__button .icon-item{color:var(--color-content-default, #454545)}.menuaction__button .content-item{width:100%;color:var(--color-content-default, #454545);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.menuaction__button .arrow{color:var(--color-content-default, #454545)}.menuaction__button__lipstick .icon-item{color:#a01c2c}.menuaction__button__lipstick .content-item{color:#a01c2c}.menuaction__button__lipstick .arrow{color:#a01c2c}.menuaction__button__disabled{opacity:0.5;cursor:no-drop}.menuaction__button:hover{background-color:var(--color-surface-2, #e0e0e0)}.menuaction__submenu{position:absolute;pointer-events:none;display:block;padding:2px;background-color:var(--color-surface-1, #f6f6f6);border-radius:8px;-webkit-box-shadow:0px 4px 16px rgba(7, 71, 166, 0.12);box-shadow:0px 4px 16px rgba(7, 71, 166, 0.12);min-width:196px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s}.menuaction__submenu__open{pointer-events:auto;opacity:1}.menuaction.position-right .menuaction__button .icon-item{-ms-flex-order:0;order:0}.menuaction.position-right .menuaction__button .content-item{-ms-flex-order:1;order:1}.menuaction.position-right .menuaction__button .arrow{-ms-flex-order:2;order:2}.menuaction.position-right .menuaction__submenu{top:-2px;left:100%}.menuaction.position-left .menuaction__button .icon-item{-ms-flex-order:1;order:1}.menuaction.position-left .menuaction__button .content-item{-ms-flex-order:2;order:2}.menuaction.position-left .menuaction__button .arrow{-ms-flex-order:0;order:0}.menuaction.position-left .menuaction__submenu{top:-2px;right:100%}";

const BdsMenuAction = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get element() { return getElement(this); }
  static get watchers() { return {
    "openParentMenu": ["openParentMenuChanged"],
    "openSubMenu": ["openSubMenuChanged"],
    "stateSubMenu": ["stateSubMenuChanged"]
  }; }
};
BdsMenuAction.style = menuActionCss;

export { BdsMenuAction as bds_menu_action };
